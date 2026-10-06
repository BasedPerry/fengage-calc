// Validates the Fortune's Weave data files. Run with Node 23.6+ (strips TS types natively):
//   node scripts/validate-fortunes-weave.mjs
import { STATS } from '../src/fortunesWeave/stats.ts';
import { characters } from '../src/fortunesWeave/characters.ts';
import { classes } from '../src/fortunesWeave/classes.ts';
import { mounts, MAX_BOND_LEVEL } from '../src/fortunesWeave/mounts.ts';
import { recruitmentData } from '../src/fortunesWeave/recruitment.ts';
import { SIGNS_OF_GROWTH, CHARIOTEERS_PATH } from '../src/fortunesWeave/modifiers.ts';

const errors = [];
const nulls = [];
const err = (m) => errors.push(m);

// Canonical names from recruitment.ts
const canon = new Set();
for (const r of recruitmentData) {
  [r.freeRecruit, ...r.mainCharacters, ...r.notRecruitable, ...r.recruits.map((x) => x.name)].forEach((n) => canon.add(n));
}

const checkBlock = (label, b, { min = -50, max = 100 } = {}) => {
  if (b === null) return;
  const keys = Object.keys(b);
  if (keys.length !== STATS.length || !STATS.every((s) => keys.includes(s))) err(`${label}: keys ${keys}`);
  for (const s of STATS) {
    const v = b[s];
    if (typeof v !== 'number' || !Number.isInteger(v) || v < min || v > max) err(`${label}.${s} = ${v}`);
  }
};

// Characters
const names = characters.map((c) => c.name);
const dupes = names.filter((n, i) => names.indexOf(n) !== i);
if (dupes.length) err(`duplicate characters: ${dupes}`);
for (const c of characters) {
  checkBlock(`char ${c.name}`, c.growth, { min: 0, max: 100 });
  if (c.inRecruitment !== canon.has(c.name)) err(`${c.name}: inRecruitment flag wrong`);
}
const missing = [...canon].filter((n) => !names.includes(n));
if (missing.length) err(`recruitment names without growths: ${missing}`);

// Classes
const cnames = classes.map((c) => c.name);
if (new Set(cnames).size !== cnames.length) err('duplicate class names');
const byTier = {};
for (const c of classes) {
  checkBlock(`class ${c.name}.growth`, c.growth);
  checkBlock(`class ${c.name}.statBonus`, c.statBonus, { min: -10, max: 20 });
  if (c.tier === null) err(`${c.name}: no tier`);
  byTier[c.tier] = (byTier[c.tier] ?? 0) + 1;
  if (c.caps === null) nulls.push(`${c.name}.caps`);
  if (c.statBonus === null) nulls.push(`${c.name}.statBonus`);
  for (const p of [...(c.promotesFrom ?? []), ...(c.promotesTo ?? [])]) {
    if (!cnames.includes(p) && !(p === 'Sword Master' && cnames.includes('Swordmaster'))) err(`${c.name}: unknown promotion link ${p}`);
  }
  if (c.tier === 'PreClass' && STATS.some((s) => c.growth[s] !== 0)) err(`${c.name}: pre-class with growths`);
}

// Mounts
for (const m of mounts) {
  for (const [k, v] of [...Object.entries(m.bond5Stats), ...Object.entries(m.bond5Growth)]) {
    if (!STATS.includes(k) || !Number.isInteger(v) || v <= 0) err(`mount ${m.name}: ${k}=${v}`);
  }
  const pts = Object.values(m.bond5Stats).reduce((a, b) => a + b, 0);
  const gr = Object.values(m.bond5Growth).reduce((a, b) => a + b, 0);
  const expected = m.name === 'Salamis War Elephant' ? [20, 50] : m.rarity === 'unique' ? [6, 30] : [5, 25];
  if (pts !== expected[0] || gr !== expected[1]) err(`mount ${m.name}: totals ${pts}/${gr}%, expected ${expected[0]}/${expected[1]}%`);
  if (m.perBondLevel === null) nulls.push(`${m.name}.perBondLevel`);
  if (m.owner && !canon.has(m.owner)) err(`mount ${m.name}: owner ${m.owner} not in recruitment.ts`);
}
if (MAX_BOND_LEVEL !== 5) err('MAX_BOND_LEVEL');
checkBlock('SIGNS_OF_GROWTH', SIGNS_OF_GROWTH.growth);
CHARIOTEERS_PATH.thresholds.forEach((t) => t.growth === null && nulls.push(`CHARIOTEERS_PATH Lv${t.level}`));

const nullGroups = nulls.reduce((acc, n) => {
  const k = n.split('.').pop().replace(/ Lv\d+$/, ' (Charioteer\'s Path)');
  acc[k] = (acc[k] ?? 0) + 1;
  return acc;
}, {});

console.log(`characters: ${characters.length} (${characters.filter((c) => c.inRecruitment).length} in recruitment.ts, ${canon.size} canonical names, ${characters.filter((c) => c.guest).length} guests)`);
console.log(`classes: ${classes.length}`, byTier);
console.log(`mounts: ${mounts.length}`);
console.log('null values (unknown, by field):', nullGroups);
if (errors.length) {
  console.error(`\n${errors.length} error(s):\n` + errors.map((e) => '  - ' + e).join('\n'));
  process.exit(1);
}
console.log('\nOK: no errors');
