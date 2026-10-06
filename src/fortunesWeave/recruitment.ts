// Fire Emblem: Fortune's Weave recruitment data per route.
// Source: "Fortune's Weave Recruitment Guide" by choops.
// Recruits unlock at the listed Renown level and need the listed support level with the lord.

export type RouteId = 'cai' | 'dietrich' | 'theodora' | 'leda';
export type SupportLevel = 1 | 2 | 3;

export type Recruit = {
  name: string;
  renown: number;
  support: SupportLevel;
};

export type RouteRecruitment = {
  id: RouteId;
  name: string;
  freeRecruit: string;
  mainCharacters: string[];
  recruits: Recruit[];
  notRecruitable: string[];
  notes?: Record<string, string>;
};

type Tier = [name: string, support: SupportLevel][];

const byRenown = (tiers: Record<number, Tier>): Recruit[] =>
  Object.entries(tiers).flatMap(([renown, tier]) =>
    tier.map(([name, support]) => ({ name, renown: Number(renown), support }))
  );

export const recruitmentData: RouteRecruitment[] = [
  {
    id: 'cai',
    name: "Cai's Route",
    freeRecruit: 'Guzran',
    mainCharacters: ['Cai', 'Tialla', 'Peter', 'Ultand'],
    notes: { Ultand: 'Joins in Chapter 6' },
    recruits: byRenown({
      3: [['Yang Jie', 2]],
      4: [['Noctula', 1]],
      5: [['Majide', 2], ['Mikaela', 3], ['Halvin', 3]],
      6: [['Nydine', 1], ['Nuzzuo', 2], ['Nezha', 3], ['Ninae', 3], ['Seteth', 3]],
      7: [['Alexandra', 2], ['Esmeralda', 2], ['Dadao', 3], ['Loretta', 3], ['Goliath', 3]],
      8: [
        ['Jasmine', 1], ['Lilian', 2], ['Lysander', 3], ['Kiroc', 3], ['Simon', 3],
        ['Fianna', 3], ['Zarcone', 3], ['Inyoni', 3], ['Olympia', 3],
      ],
      9: [['Peppe', 1], ['Benditz', 3], ['Sirocco', 3], ['Sofia', 3], ['Mu', 3], ['Ludia', 3]],
      10: [['Dante', 3], ['Diego', 3], ['Ursula', 3], ['Jester', 3], ['Io', 3], ['Catania', 3]],
    }),
    notRecruitable: [
      'Dietrich', 'Fabio', 'Sha Lan', 'Buccar', 'Bonaventure', 'Gaitz', 'Leda', 'Theodora', 'Tobias',
    ],
  },
  {
    id: 'dietrich',
    name: "Dietrich's Route",
    freeRecruit: 'Yang Jie',
    mainCharacters: ['Dietrich', 'Fabio', 'Esmeralda', 'Mikaela'],
    recruits: byRenown({
      3: [['Io', 2]],
      4: [['Kiroc', 1]],
      5: [['Nydine', 2], ['Ultand', 3]],
      6: [['Noctula', 1], ['Goliath', 3], ['Jester', 3], ['Olympia', 3], ['Lysander', 3]],
      7: [['Benditz', 2], ['Simon', 3], ['Ursula', 3], ['Zarcone', 3], ['Mu', 3], ['Fianna', 3]],
      8: [
        ['Catania', 1], ['Lilian', 2], ['Dante', 2], ['Alexandra', 3], ['Peter', 3], ['Ninae', 3],
        ['Buccar', 3], ['Inyoni', 3], ['Peppe', 3], ['Guzran', 3], ['Majide', 3],
      ],
      9: [
        ['Nuzzuo', 1], ['Tialla', 3], ['Diego', 3], ['Loretta', 3], ['Ludia', 3],
        ['Sirocco', 3], ['Halvin', 3], ['Jasmine', 3], ['Sofia', 3],
      ],
      10: [['Gaitz', 3], ['Nezha', 3], ['Dadao', 3], ['Sha Lan', 3]],
    }),
    notRecruitable: ['Cai', 'Seteth', 'Theodora', 'Tobias', 'Bonaventure', 'Leda'],
  },
  {
    id: 'theodora',
    name: "Theodora's Route",
    freeRecruit: 'Sofia',
    mainCharacters: ['Theodora', 'Tobias', 'Bonaventure', 'Lilian', 'Lysander'],
    recruits: byRenown({
      3: [['Noctula', 1]],
      4: [['Zarcone', 1]],
      5: [['Sirocco', 1], ['Dadao', 2], ['Nydine', 3], ['Loretta', 3]],
      6: [
        ['Nuzzuo', 1], ['Alexandra', 1], ['Nezha', 2], ['Ultand', 3],
        ['Dante', 3], ['Ninae', 3], ['Seteth', 3],
      ],
      7: [['Peppe', 2], ['Catania', 3], ['Halvin', 3], ['Simon', 3], ['Ludia', 3], ['Peter', 3]],
      8: [
        ['Benditz', 1], ['Diego', 2], ['Mikaela', 3], ['Buccar', 3],
        ['Guzran', 3], ['Majide', 3], ['Jasmine', 3],
      ],
      9: [
        ['Inyoni', 1], ['Yang Jie', 3], ['Mu', 3], ['Olympia', 3], ['Fianna', 3],
        ['Ursula', 3], ['Esmeralda', 3], ['Goliath', 3], ['Jester', 3],
      ],
      10: [['Tialla', 3], ['Kiroc', 3], ['Io', 3]],
    }),
    notRecruitable: ['Cai', 'Leda', 'Fabio', 'Dietrich', 'Gaitz', 'Sha Lan'],
  },
  {
    id: 'leda',
    name: "Leda's Route",
    freeRecruit: 'Catania',
    mainCharacters: ['Leda', 'Buccar', 'Sirocco', 'Mu', 'Olympia'],
    recruits: byRenown({
      3: [['Guzran', 1]],
      4: [['Kiroc', 1], ['Jasmine', 2]],
      5: [['Dadao', 2], ['Zarcone', 2], ['Fianna', 3], ['Loretta', 3]],
      6: [['Io', 1], ['Simon', 3], ['Mikaela', 3], ['Esmeralda', 3]],
      7: [
        ['Inyoni', 1], ['Lilian', 2], ['Halvin', 3], ['Sofia', 3],
        ['Benditz', 3], ['Lysander', 3], ['Ludia', 3],
      ],
      8: [
        ['Tialla', 3], ['Yang Jie', 3], ['Diego', 3], ['Noctula', 3],
        ['Ultand', 3], ['Sha Lan', 3], ['Ninae', 3],
      ],
      9: [['Nezha', 3], ['Nuzzuo', 3], ['Fabio', 3], ['Majide', 3]],
      10: [
        ['Peter', 3], ['Jester', 3], ['Goliath', 3], ['Dante', 3],
        ['Seteth', 3], ['Alexandra', 3], ['Nydine', 3],
      ],
    }),
    notRecruitable: [
      'Cai', 'Peppe', 'Tobias', 'Dietrich', 'Gaitz', 'Theodora', 'Bonaventure', 'Ursula',
    ],
  },
];
