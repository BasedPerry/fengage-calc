// Fire Emblem: Fortune's Weave stat list.
// Sources (retrieved 2026-10-05):
//   - Serenes Forest growth tables, https://serenesforest.net/fortunes-weave/characters/growth-rates/
//   - Game8 Growth Rates Explained, https://game8.co/games/Fire-Emblem-Fortunes-Weave/archives/618974
//   - Build: thephrasemaker.com "Every Stat in Fire Emblem: Fortune's Weave, Explained" (2026-09-25)
//     and firefortunesweave.com/en/growth/fortunes-weave-stat-growth-guide
//
// Order is the one Serenes Forest and Game8 use for growth tables (Spd before Dex, unlike
// Engage's Dex before Spd). fortunesweave.co.uk and Fextralife list Dex before Spd on class
// pages, so the in-game screen order is not fully settled.
//
// Build (Bld) exists but is not a growable stat. It is a fixed value that offsets equipment
// Weight before Weight reduces Attack Speed and Avoid, with no growth rate. A few abilities
// raise it (Goliath's Heavyweight Class +5, the Paired Bulk mount ability +2/+4). It is left
// out of STATS on purpose. Engage's 10th growth column (Bld) has no Fortune's Weave equivalent.

export const STATS = ['hp', 'str', 'mag', 'spd', 'dex', 'def', 'res', 'lck', 'cha'] as const;
export type StatKey = typeof STATS[number];
export type StatBlock = Record<StatKey, number>;

export const STAT_LABELS: Record<StatKey, string> = {
  hp: 'HP',
  str: 'Str',
  mag: 'Mag',
  spd: 'Spd',
  dex: 'Dex',
  def: 'Def',
  res: 'Res',
  lck: 'Lck',
  cha: 'Cha',
};
