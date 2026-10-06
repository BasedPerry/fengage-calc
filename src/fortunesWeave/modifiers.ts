// Fire Emblem: Fortune's Weave growth modifiers other than character + class + mount.
// Sources (retrieved 2026-10-05):
//   - Serenes Forest personal abilities, https://serenesforest.net/fortunes-weave/characters/personal-abilities/
//   - Serenes Forest growth rates (Mu vs Mu* rows), https://serenesforest.net/fortunes-weave/characters/growth-rates/
//   - fortunesweave.co.uk/classes/charioteer and /wiki/mounts (Serenes Forest forum thread compilation)
//   - Fextralife Charioteer page, https://fortunesweave.wiki.fextralife.com/Charioteer
//   - Game8 Best Temple Blessings, https://game8.co/games/Fire-Emblem-Fortunes-Weave/archives/623536
//
// Searched and found NO growth effect from: items, temple blessings, Charisma, supports, meals
// or the Pale Raven. The only known modifiers are listed below.

import type { StatBlock } from './stats';

// Mu's personal ability "Signs of Growth" ("gains enhanced basic stat growth"). The value is
// Serenes Forest's Mu* row minus Mu's row: +20 to every stat. Game8's table shows Mu with it applied.
export const SIGNS_OF_GROWTH: { character: 'Mu'; growth: StatBlock } = {
  character: 'Mu',
  growth: { hp: 20, str: 20, mag: 20, spd: 20, dex: 20, def: 20, res: 20, lck: 20, cha: 20 },
};

// Charioteer + mount. One forum poster (Mujin) saw a mount's growth bonuses double (5% -> 10% per
// stat) when the animal was assigned to a Charioteer, then halve again when it was reassigned.
// The mechanism is disputed in the thread (two horses at once vs. a flat doubling vs. Charioteer's
// Path) and no second source confirms it. Treat as unverified.
export const CHARIOTEER_MOUNT_GROWTH: {
  multiplier: number;
  appliesTo: 'mount growth bonus only';
  verified: false;
} = { multiplier: 2, appliesTo: 'mount growth bonus only', verified: false };

// Charioteer class ability "Charioteer's Path": "Unit's growth rate increases with level."
// Player reports (GameFAQs threads 81195654 and 81193838, which block automated fetches, so they
// were not read directly) say the boost kicks in at Lv 35 and again at Lv 45. A search summary
// quoted a Lv 45+ total of Def +20, Str +15, HP/Cha/Dex +10, Mag/Res/Spd/Lck +5, but no readable
// source confirms it, so the numbers are null.
export const CHARIOTEERS_PATH: {
  class: 'Charioteer';
  thresholds: { level: number; growth: StatBlock | null }[];
  verified: false;
} = {
  class: 'Charioteer',
  thresholds: [
    { level: 35, growth: null },
    { level: 45, growth: null },
  ],
  verified: false,
};
