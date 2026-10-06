// Fire Emblem: Fortune's Weave character base growth rates (%).
// Sources (retrieved 2026-10-05):
//   - Serenes Forest, https://serenesforest.net/fortunes-weave/characters/growth-rates/ (primary)
//   - Game8, https://game8.co/games/Fire-Emblem-Fortunes-Weave/archives/618974 (cross-check)
// Total growth = character growth + class growth (classes.ts) + mount bonus (mounts.ts) + modifiers.ts.
// Where the two sources disagree, Serenes Forest is used and the row carries a `note`.
// All 50 names in recruitment.ts are present with identical spelling. Rows with
// inRecruitment: false are characters Serenes Forest lists who are not in recruitment.ts
// (protagonist Eshmel and others); `guest: true` rows are Serenes Forest's "Guests" (NPC) table.
// Not collected: base stats and join levels. Serenes Forest's base-stats page currently
// holds Shadow Dragon (FE1) placeholder data, and no other source published them.

import type { StatBlock } from './stats';

export type FWCharacter = {
  name: string;
  growth: StatBlock;
  inRecruitment: boolean;
  guest?: true;
  note?: string;
};

export const characters: FWCharacter[] = [
  {
    name: 'Eshmel',
    growth: { hp: 50, str: 45, mag: 45, spd: 45, dex: 45, def: 35, res: 35, lck: 40, cha: 50 },
    inRecruitment: false,
  },
  {
    name: 'Cai',
    growth: { hp: 45, str: 45, mag: 40, spd: 45, dex: 45, def: 35, res: 35, lck: 40, cha: 40 },
    inRecruitment: true,
  },
  {
    name: 'Tialla',
    growth: { hp: 30, str: 25, mag: 45, spd: 35, dex: 40, def: 20, res: 40, lck: 50, cha: 45 },
    inRecruitment: true,
  },
  {
    name: 'Peter',
    growth: { hp: 40, str: 35, mag: 20, spd: 45, dex: 60, def: 30, res: 25, lck: 35, cha: 30 },
    inRecruitment: true,
  },
  {
    name: 'Ultand',
    growth: { hp: 45, str: 40, mag: 40, spd: 35, dex: 40, def: 35, res: 45, lck: 55, cha: 50 },
    inRecruitment: true,
  },
  {
    name: 'Bertrand',
    growth: { hp: 50, str: 55, mag: 15, spd: 45, dex: 50, def: 45, res: 20, lck: 30, cha: 50 },
    inRecruitment: false,
  },
  {
    name: 'Gaitz',
    growth: { hp: 50, str: 50, mag: 20, spd: 40, dex: 45, def: 45, res: 25, lck: 40, cha: 45 },
    inRecruitment: true,
  },
  {
    name: 'Jester',
    growth: { hp: 40, str: 35, mag: 15, spd: 60, dex: 45, def: 35, res: 25, lck: 40, cha: 40 },
    inRecruitment: true,
  },
  {
    name: 'Goliath',
    growth: { hp: 55, str: 60, mag: 5, spd: 15, dex: 30, def: 50, res: 20, lck: 35, cha: 20 },
    inRecruitment: true,
  },
  {
    name: 'Dante',
    growth: { hp: 30, str: 30, mag: 45, spd: 40, dex: 40, def: 20, res: 40, lck: 45, cha: 30 },
    inRecruitment: true,
  },
  {
    name: 'Dietrich',
    growth: { hp: 50, str: 45, mag: 30, spd: 50, dex: 60, def: 40, res: 30, lck: 50, cha: 60 },
    inRecruitment: true,
  },
  {
    name: 'Fabio',
    growth: { hp: 40, str: 25, mag: 50, spd: 35, dex: 40, def: 30, res: 45, lck: 35, cha: 30 },
    inRecruitment: true,
  },
  {
    name: 'Esmeralda',
    growth: { hp: 55, str: 55, mag: 20, spd: 35, dex: 35, def: 45, res: 25, lck: 35, cha: 30 },
    inRecruitment: true,
  },
  {
    name: 'Mikaela',
    growth: { hp: 50, str: 45, mag: 30, spd: 40, dex: 35, def: 40, res: 25, lck: 30, cha: 40 },
    inRecruitment: true,
  },
  {
    name: 'Orchel',
    growth: { hp: 30, str: 60, mag: 45, spd: 10, dex: 20, def: 60, res: 60, lck: 20, cha: 60 },
    inRecruitment: false,
  },
  {
    name: 'Diego',
    growth: { hp: 45, str: 40, mag: 20, spd: 45, dex: 60, def: 35, res: 20, lck: 35, cha: 30 },
    inRecruitment: true,
  },
  {
    name: 'Loretta',
    growth: { hp: 35, str: 35, mag: 35, spd: 55, dex: 40, def: 30, res: 40, lck: 30, cha: 30 },
    inRecruitment: true,
  },
  {
    name: 'Seteth',
    growth: { hp: 45, str: 45, mag: 30, spd: 40, dex: 45, def: 40, res: 35, lck: 30, cha: 50 },
    inRecruitment: true,
  },
  {
    name: 'Ninae',
    growth: { hp: 45, str: 45, mag: 35, spd: 35, dex: 45, def: 35, res: 45, lck: 50, cha: 40 },
    inRecruitment: true,
  },
  {
    name: 'Theodora',
    growth: { hp: 70, str: 50, mag: 30, spd: 40, dex: 40, def: 40, res: 30, lck: 30, cha: 50 },
    inRecruitment: true,
  },
  {
    name: 'Bonaventure',
    growth: { hp: 35, str: 35, mag: 45, spd: 40, dex: 50, def: 30, res: 40, lck: 35, cha: 40 },
    inRecruitment: true,
  },
  {
    name: 'Tobias',
    growth: { hp: 55, str: 60, mag: 15, spd: 25, dex: 30, def: 45, res: 20, lck: 40, cha: 35 },
    inRecruitment: true,
  },
  {
    name: 'Lilian',
    growth: { hp: 35, str: 35, mag: 30, spd: 40, dex: 55, def: 30, res: 35, lck: 50, cha: 25 },
    inRecruitment: true,
  },
  {
    name: 'Lysander',
    growth: { hp: 45, str: 40, mag: 25, spd: 50, dex: 35, def: 40, res: 25, lck: 30, cha: 30 },
    inRecruitment: true,
  },
  {
    name: 'Talimun',
    growth: { hp: 45, str: 40, mag: 45, spd: 40, dex: 45, def: 35, res: 40, lck: 60, cha: 50 },
    inRecruitment: false,
  },
  {
    name: 'Ursula',
    growth: { hp: 40, str: 35, mag: 35, spd: 50, dex: 50, def: 35, res: 30, lck: 40, cha: 45 },
    inRecruitment: true,
  },
  {
    name: 'Ludia',
    growth: { hp: 40, str: 35, mag: 20, spd: 55, dex: 45, def: 30, res: 20, lck: 30, cha: 30 },
    inRecruitment: true,
  },
  {
    name: 'Simon',
    growth: { hp: 50, str: 50, mag: 20, spd: 35, dex: 40, def: 40, res: 25, lck: 50, cha: 35 },
    inRecruitment: true,
  },
  {
    name: 'Fianna',
    growth: { hp: 30, str: 35, mag: 55, spd: 30, dex: 40, def: 20, res: 45, lck: 25, cha: 40 },
    inRecruitment: true,
  },
  {
    name: 'Leda',
    growth: { hp: 40, str: 35, mag: 35, spd: 65, dex: 50, def: 30, res: 35, lck: 25, cha: 55 },
    inRecruitment: true,
  },
  {
    name: 'Buccar',
    growth: { hp: 50, str: 50, mag: 20, spd: 25, dex: 40, def: 45, res: 20, lck: 30, cha: 35 },
    inRecruitment: true,
  },
  {
    name: 'Sirocco',
    growth: { hp: 40, str: 40, mag: 40, spd: 45, dex: 50, def: 35, res: 35, lck: 50, cha: 45 },
    inRecruitment: true,
  },
  {
    name: 'Olympia',
    growth: { hp: 35, str: 35, mag: 50, spd: 35, dex: 35, def: 30, res: 40, lck: 40, cha: 40 },
    inRecruitment: true,
  },
  {
    name: 'Mu',
    growth: { hp: 30, str: 30, mag: 5, spd: 30, dex: 30, def: 20, res: 10, lck: 10, cha: 20 },
    inRecruitment: true,
    note: 'Base growths without her personal ability. Signs of Growth adds +20 to every stat (SF lists Mu* = 50/50/25/50/50/40/30/30/40); see SIGNS_OF_GROWTH in modifiers.ts. Game8 lists only the boosted values.',
  },
  {
    name: 'Anatolia',
    growth: { hp: 40, str: 35, mag: 50, spd: 50, dex: 45, def: 35, res: 40, lck: 40, cha: 50 },
    inRecruitment: false,
  },
  {
    name: 'Sha Lan',
    growth: { hp: 35, str: 30, mag: 45, spd: 35, dex: 50, def: 30, res: 45, lck: 35, cha: 40 },
    inRecruitment: true,
  },
  {
    name: 'Nezha',
    growth: { hp: 45, str: 45, mag: 25, spd: 45, dex: 50, def: 35, res: 25, lck: 30, cha: 25 },
    inRecruitment: true,
    note: 'Sources disagree, Serenes Forest used: str 45 (Game8 55)',
  },
  {
    name: 'Dadao',
    growth: { hp: 50, str: 55, mag: 20, spd: 30, dex: 35, def: 45, res: 20, lck: 25, cha: 30 },
    inRecruitment: true,
  },
  {
    name: 'Halvin',
    growth: { hp: 35, str: 35, mag: 30, spd: 45, dex: 60, def: 30, res: 25, lck: 40, cha: 35 },
    inRecruitment: true,
  },
  {
    name: 'Hong Hua',
    growth: { hp: 40, str: 30, mag: 45, spd: 45, dex: 45, def: 30, res: 45, lck: 30, cha: 40 },
    inRecruitment: false,
  },
  {
    name: 'Troy',
    growth: { hp: 40, str: 45, mag: 45, spd: 50, dex: 40, def: 30, res: 30, lck: 30, cha: 30 },
    inRecruitment: false,
  },
  {
    name: 'Guzran',
    growth: { hp: 45, str: 45, mag: 20, spd: 50, dex: 45, def: 35, res: 20, lck: 45, cha: 30 },
    inRecruitment: true,
  },
  {
    name: 'Yang Jie',
    growth: { hp: 50, str: 30, mag: 40, spd: 35, dex: 35, def: 30, res: 40, lck: 40, cha: 25 },
    inRecruitment: true,
    note: 'Sources disagree, Serenes Forest used: str 30 (Game8 35)',
  },
  {
    name: 'Io',
    growth: { hp: 45, str: 40, mag: 25, spd: 35, dex: 45, def: 40, res: 25, lck: 35, cha: 35 },
    inRecruitment: true,
  },
  {
    name: 'Peppe',
    growth: { hp: 30, str: 30, mag: 25, spd: 60, dex: 45, def: 30, res: 30, lck: 45, cha: 30 },
    inRecruitment: true,
  },
  {
    name: 'Noctula',
    growth: { hp: 50, str: 45, mag: 20, spd: 45, dex: 40, def: 40, res: 20, lck: 35, cha: 30 },
    inRecruitment: true,
  },
  {
    name: 'Sofia',
    growth: { hp: 35, str: 30, mag: 45, spd: 30, dex: 40, def: 25, res: 40, lck: 30, cha: 40 },
    inRecruitment: true,
    note: 'Sources disagree, Serenes Forest used: spd 30 (Game8 40), dex 40 (Game8 30)',
  },
  {
    name: 'Catania',
    growth: { hp: 35, str: 35, mag: 35, spd: 55, dex: 50, def: 30, res: 35, lck: 40, cha: 45 },
    inRecruitment: true,
  },
  {
    name: 'Nydine',
    growth: { hp: 45, str: 40, mag: 30, spd: 45, dex: 40, def: 30, res: 25, lck: 35, cha: 35 },
    inRecruitment: true,
  },
  {
    name: 'Zarcone',
    growth: { hp: 40, str: 30, mag: 20, spd: 35, dex: 60, def: 30, res: 25, lck: 30, cha: 15 },
    inRecruitment: true,
  },
  {
    name: 'Majide',
    growth: { hp: 65, str: 50, mag: 15, spd: 20, dex: 30, def: 40, res: 10, lck: 25, cha: 5 },
    inRecruitment: true,
  },
  {
    name: 'Benditz',
    growth: { hp: 50, str: 35, mag: 20, spd: 35, dex: 50, def: 35, res: 25, lck: 30, cha: 35 },
    inRecruitment: true,
  },
  {
    name: 'Inyoni',
    growth: { hp: 40, str: 50, mag: 20, spd: 35, dex: 40, def: 40, res: 30, lck: 40, cha: 30 },
    inRecruitment: true,
  },
  {
    name: 'Jasmine',
    growth: { hp: 50, str: 40, mag: 20, spd: 30, dex: 45, def: 45, res: 25, lck: 40, cha: 45 },
    inRecruitment: true,
  },
  {
    name: 'Alexandra',
    growth: { hp: 30, str: 35, mag: 35, spd: 55, dex: 45, def: 30, res: 40, lck: 50, cha: 50 },
    inRecruitment: true,
  },
  {
    name: 'Nuzzuo',
    growth: { hp: 50, str: 50, mag: 15, spd: 55, dex: 45, def: 20, res: 15, lck: 25, cha: 35 },
    inRecruitment: true,
  },
  {
    name: 'Centurio',
    growth: { hp: 45, str: 45, mag: 25, spd: 40, dex: 50, def: 50, res: 30, lck: 30, cha: 30 },
    inRecruitment: false,
  },
  {
    name: 'Aswan',
    growth: { hp: 40, str: 35, mag: 10, spd: 40, dex: 50, def: 30, res: 15, lck: 30, cha: 20 },
    inRecruitment: false,
  },
  {
    name: 'Nathan',
    growth: { hp: 55, str: 60, mag: 15, spd: 25, dex: 60, def: 45, res: 15, lck: 25, cha: 30 },
    inRecruitment: false,
  },
  {
    name: 'Creek',
    growth: { hp: 45, str: 50, mag: 15, spd: 60, dex: 50, def: 35, res: 20, lck: 30, cha: 35 },
    inRecruitment: false,
  },
  {
    name: 'Kiroc',
    growth: { hp: 55, str: 40, mag: 15, spd: 55, dex: 50, def: 30, res: 15, lck: 30, cha: 25 },
    inRecruitment: true,
  },
  {
    name: 'Klapka',
    growth: { hp: 40, str: 40, mag: 10, spd: 25, dex: 45, def: 50, res: 15, lck: 25, cha: 35 },
    inRecruitment: false,
  },
  {
    name: 'Tahonia',
    growth: { hp: 65, str: 50, mag: 5, spd: 20, dex: 40, def: 45, res: 35, lck: 20, cha: 40 },
    inRecruitment: false,
  },
  {
    name: 'Aurora',
    growth: { hp: 35, str: 40, mag: 20, spd: 35, dex: 35, def: 35, res: 35, lck: 30, cha: 20 },
    inRecruitment: false,
    guest: true,
  },
  {
    name: 'Castor',
    growth: { hp: 55, str: 50, mag: 30, spd: 45, dex: 55, def: 45, res: 30, lck: 35, cha: 50 },
    inRecruitment: false,
    guest: true,
  },
  {
    name: 'Long',
    growth: { hp: 50, str: 45, mag: 50, spd: 50, dex: 60, def: 40, res: 40, lck: 30, cha: 40 },
    inRecruitment: false,
    guest: true,
  },
  {
    name: 'Anna',
    growth: { hp: 35, str: 35, mag: 35, spd: 40, dex: 40, def: 30, res: 35, lck: 50, cha: 35 },
    inRecruitment: false,
    guest: true,
  },
];
