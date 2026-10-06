// Fire Emblem: Fortune's Weave animal mounts.
// Sources (retrieved 2026-10-05):
//   - fortunesweave.co.uk, https://fortunesweave.co.uk/wiki/mounts. This compiles the Serenes Forest
//     forum thread "Mounts give bonus stats AND growth rates"
//     (https://forums.serenesforest.net/topic/108370-mounts-give-bonus-stats-and-growth-rates/;
//     Mujin's table and posters Nakai, KitKatAyyo, craftycorsair and others) with GameWith and
//     Game8 Japan for breeds the English table lacks. The forum thread itself returns 403 to
//     automated fetches, so it was read through this compilation; the site marks every row
//     "unverified".
//
// Mechanics, unlike Engage:
//   - Capture and Stable are Cai's route only (unlocked in Part I Chapter 5). One report
//     says Io's Rocinan and Alexandra's Bucephalus work on any route.
//   - Bond Level runs 1 to 5 for every breed, including the uniques. Rocinan and Bucephalus
//     are not Bond 6; they give 6 flat points / 30% growth at Bond 5 instead of the usual
//     5 / 25%. The Salamis War Elephant reportedly gives 20 / 50%.
//   - The community rule of thumb is +1 stat and +5% growth per Bond Level. The breed rows
//     break it: growth can land on stats that get no flat point. So only Bond 5 totals are
//     known. perBondLevel is null everywhere because no source gives the level-by-level split.
//   - Growth bonuses only apply while the animal is assigned to a unit in a class that can
//     ride it (see FWClass.mountFamilies). Charioteer doubling: see modifiers.ts.

import type { StatKey } from './stats';
import type { MountFamily } from './classes';

export type PartialStats = Partial<Record<StatKey, number>>;

export type FWMount = {
  name: string;
  family: MountFamily;
  rarity: 'common' | 'rare' | 'unique';
  owner?: string;
  bond5Stats: PartialStats;
  bond5Growth: PartialStats;
  perBondLevel: PartialStats[] | null;
  note?: string;
};

export const MAX_BOND_LEVEL = 5;

export const mounts: FWMount[] = [
  {
    name: 'Wild Ornius',
    family: 'Ornius',
    rarity: 'common',
    bond5Stats: { spd: 2, dex: 3 },
    bond5Growth: { spd: 10, dex: 15 },
    perBondLevel: null,
  },
  {
    name: 'White Ornius',
    family: 'Ornius',
    rarity: 'rare',
    bond5Stats: { spd: 1, dex: 1, res: 3 },
    bond5Growth: { spd: 5, dex: 5, res: 15 },
    perBondLevel: null,
    note: 'Stats from GameWith (Japanese); the English community table was blank.',
  },
  {
    name: 'Meganius',
    family: 'Ornius',
    rarity: 'common',
    bond5Stats: { str: 1, def: 3, dex: 1 },
    bond5Growth: { str: 5, def: 15, dex: 5 },
    perBondLevel: null,
  },
  {
    name: 'Red Meganius',
    family: 'Ornius',
    rarity: 'rare',
    bond5Stats: { str: 3, def: 1, dex: 1 },
    bond5Growth: { str: 15, def: 5, dex: 5 },
    perBondLevel: null,
  },
  {
    name: 'Magonius',
    family: 'Ornius',
    rarity: 'common',
    bond5Stats: { mag: 3, dex: 2 },
    bond5Growth: { mag: 15, dex: 10 },
    perBondLevel: null,
  },
  {
    name: 'Black Magonius',
    family: 'Ornius',
    rarity: 'rare',
    bond5Stats: { mag: 2, spd: 2, dex: 1 },
    bond5Growth: { mag: 10, spd: 10, dex: 5 },
    perBondLevel: null,
  },
  {
    name: 'Wild Horse',
    family: 'Horse',
    rarity: 'common',
    bond5Stats: { dex: 3, spd: 1, def: 1 },
    bond5Growth: { dex: 5, spd: 5, def: 5, hp: 5, res: 5 },
    perBondLevel: null,
    note: 'Growth on HP and Res with no flat point in either.',
  },
  {
    name: 'Monoceros',
    family: 'Horse',
    rarity: 'rare',
    bond5Stats: { spd: 1, dex: 1, lck: 3 },
    bond5Growth: { spd: 5, dex: 5, hp: 5, res: 10 },
    perBondLevel: null,
    note: 'Lck +3 with no Lck growth listed.',
  },
  {
    name: 'Ferghanan Horse',
    family: 'Horse',
    rarity: 'rare',
    bond5Stats: { str: 2, dex: 1, def: 2 },
    bond5Growth: { str: 5, dex: 5, def: 10, hp: 5 },
    perBondLevel: null,
  },
  {
    name: 'Rocinan',
    family: 'Horse',
    rarity: 'unique',
    owner: 'Io',
    bond5Stats: { spd: 1, dex: 3, def: 2 },
    bond5Growth: { spd: 5, dex: 5, def: 10, hp: 5, res: 5 },
    perBondLevel: null,
    note: 'Io\'s unique horse. Bond-5 split is from one poster (Mujin); Nakai\'s bond-4 snapshot differs slightly.',
  },
  {
    name: 'Black Horse',
    family: 'Horse',
    rarity: 'common',
    bond5Stats: { str: 1, spd: 3, dex: 1 },
    bond5Growth: { str: 5, spd: 10, dex: 5, hp: 5 },
    perBondLevel: null,
    note: 'Part III only. English name is a literal translation; stats from GameWith only.',
  },
  {
    name: 'Wild Pegasus',
    family: 'Pegasus',
    rarity: 'common',
    bond5Stats: { spd: 3, res: 2 },
    bond5Growth: { spd: 15, res: 10 },
    perBondLevel: null,
    note: 'Stats from GameWith (Japanese); the English community table was blank.',
  },
  {
    name: 'Falicorn',
    family: 'Pegasus',
    rarity: 'rare',
    bond5Stats: { str: 1, spd: 3, dex: 1 },
    bond5Growth: { str: 5, spd: 15, dex: 5 },
    perBondLevel: null,
    note: 'One poster (Nakai, unsure) adds +1 Build; not included.',
  },
  {
    name: 'Dark Pegasus',
    family: 'Pegasus',
    rarity: 'rare',
    bond5Stats: { mag: 3, spd: 2 },
    bond5Growth: { mag: 15, spd: 10 },
    perBondLevel: null,
  },
  {
    name: 'Bucephalus',
    family: 'Pegasus',
    rarity: 'unique',
    owner: 'Alexandra',
    bond5Stats: { str: 1, spd: 3, res: 2 },
    bond5Growth: { str: 5, spd: 15, res: 10 },
    perBondLevel: null,
    note: 'Alexandra\'s unique pegasus. Two posters agree (Mujin, Nakai).',
  },
  {
    name: 'Red Falicorn',
    family: 'Pegasus',
    rarity: 'common',
    bond5Stats: { str: 2, spd: 2, dex: 1 },
    bond5Growth: { str: 10, spd: 10, dex: 5 },
    perBondLevel: null,
    note: 'Part III only. English name is a literal translation; stats from GameWith only.',
  },
  {
    name: 'Wild Bau',
    family: 'Bau',
    rarity: 'common',
    bond5Stats: { str: 2, dex: 2, spd: 1 },
    bond5Growth: { str: 10, dex: 10, spd: 5 },
    perBondLevel: null,
  },
  {
    name: 'Red Bau',
    family: 'Bau',
    rarity: 'common',
    bond5Stats: { str: 3, dex: 2 },
    bond5Growth: { str: 15, dex: 10 },
    perBondLevel: null,
    note: 'Part III only. English name is a literal translation; stats from GameWith only.',
  },
  {
    name: 'Black Bau',
    family: 'Bau',
    rarity: 'common',
    bond5Stats: { str: 2, spd: 3 },
    bond5Growth: { str: 10, spd: 15 },
    perBondLevel: null,
    note: 'Part III only. English name is a literal translation; stats from GameWith only.',
  },
  {
    name: 'Salamis War Elephant',
    family: 'Elephant',
    rarity: 'common',
    bond5Stats: { str: 5, dex: 5, def: 5, lck: 5 },
    bond5Growth: { str: 10, dex: 10, def: 10, hp: 10, res: 10 },
    perBondLevel: null,
    note: 'Sub-quest reward. GameWith only; totals (20 points, 50%) are far above every other breed, so check in-game.',
  },
];
