export type QuestionSubject = 'Physics' | 'Chemistry' | 'Mathematics';
export type QuestionDistributionRow = {
  subject: QuestionSubject;
  topic: string;
  questions: number;
  scope?: 'Combined topics';
};

/**
 * Hard-coded from ExamSIDE's 2026 JEE Main PYQ index. Totals are from its
 * tagged question bank for 2026 across the 19 exam shifts; avg/shift is total / 19.
 * These are ExamSIDE's chapter tags, not chapter-wise counts published by NTA.
 * Categories explicitly marked Combined cover the source's grouped topic labels.
 */
export const questionDistributionShifts = 19;
export const questionDistributionSourceUrl = 'https://questions.examside.com/past-years/jee/jee-main';

export const questionDistribution2026: QuestionDistributionRow[] = [
  // Physics
  {subject:'Physics',topic:'Geometrical Optics',questions:35},
  {subject:'Physics',topic:'Wave Optics',questions:23},
  {subject:'Physics',topic:'Electrostatics',questions:26,scope:'Combined topics'},
  {subject:'Physics',topic:'Current Electricity',questions:28},
  {subject:'Physics',topic:'Capacitor',questions:13},
  {subject:'Physics',topic:'Magnetic Effect of Current',questions:19},
  {subject:'Physics',topic:'Magnetic Properties of Matter',questions:4},
  {subject:'Physics',topic:'Electromagnetic Induction',questions:20},
  {subject:'Physics',topic:'Alternating Current',questions:10},
  {subject:'Physics',topic:'Electromagnetic Waves',questions:17},
  {subject:'Physics',topic:'Units & Measurements',questions:30},
  {subject:'Physics',topic:'Motion in a Straight Line',questions:8},
  {subject:'Physics',topic:'Motion in a Plane',questions:8},
  {subject:'Physics',topic:'Circular Motion',questions:7},
  {subject:'Physics',topic:'Laws of Motion',questions:12},
  {subject:'Physics',topic:'Work, Power & Energy',questions:13},
  {subject:'Physics',topic:'Centre of Mass and Collision',questions:8},
  {subject:'Physics',topic:'Rotational Motion',questions:26},
  {subject:'Physics',topic:'Properties of Matter (solids, fluids and thermal properties)',questions:36,scope:'Combined topics'},
  {subject:'Physics',topic:'Heat and Thermodynamics',questions:37,scope:'Combined topics'},
  {subject:'Physics',topic:'Simple Harmonic Motion',questions:14},
  {subject:'Physics',topic:'Waves',questions:9},
  {subject:'Physics',topic:'Gravitation',questions:10},
  {subject:'Physics',topic:'Atoms and Nuclei',questions:24,scope:'Combined topics'},
  {subject:'Physics',topic:'Dual Nature of Radiation',questions:16},
  {subject:'Physics',topic:'Semiconductor',questions:21},

  // Chemistry
  {subject:'Chemistry',topic:'Some Basic Concepts of Chemistry',questions:18},
  {subject:'Chemistry',topic:'Structure of Atom',questions:26},
  {subject:'Chemistry',topic:'Redox Reactions',questions:8},
  {subject:'Chemistry',topic:'Chemical Equilibrium',questions:14},
  {subject:'Chemistry',topic:'Ionic Equilibrium',questions:14},
  {subject:'Chemistry',topic:'Solutions',questions:23},
  {subject:'Chemistry',topic:'Thermodynamics',questions:22},
  {subject:'Chemistry',topic:'Electrochemistry',questions:21},
  {subject:'Chemistry',topic:'Chemical Kinetics and Nuclear Chemistry',questions:27,scope:'Combined topics'},
  {subject:'Chemistry',topic:'Periodic Table & Periodicity',questions:18},
  {subject:'Chemistry',topic:'Chemical Bonding & Molecular Structure',questions:23},
  {subject:'Chemistry',topic:'p-Block Elements',questions:21},
  {subject:'Chemistry',topic:'d- and f-Block Elements',questions:21},
  {subject:'Chemistry',topic:'Coordination Compounds',questions:36},
  {subject:'Chemistry',topic:'Salt Analysis',questions:5},
  {subject:'Chemistry',topic:'Basics of Organic Chemistry',questions:27},
  {subject:'Chemistry',topic:'Hydrocarbons',questions:20},
  {subject:'Chemistry',topic:'Haloalkanes and Haloarenes',questions:17},
  {subject:'Chemistry',topic:'Alcohols, Phenols and Ethers',questions:14},
  {subject:'Chemistry',topic:'Aldehydes, Ketones and Carboxylic Acids',questions:35},
  {subject:'Chemistry',topic:'Compounds Containing Nitrogen',questions:25},
  {subject:'Chemistry',topic:'Biomolecules',questions:19},
  {subject:'Chemistry',topic:'Practical Organic Chemistry',questions:21},

  // Mathematics
  {subject:'Mathematics',topic:'Sets and Relations',questions:14},
  {subject:'Mathematics',topic:'Logarithm',questions:3},
  {subject:'Mathematics',topic:'Functions',questions:17},
  {subject:'Mathematics',topic:'Complex Numbers',questions:19},
  {subject:'Mathematics',topic:'Quadratic Equation and Inequalities',questions:16},
  {subject:'Mathematics',topic:'Sequences and Series',questions:33},
  {subject:'Mathematics',topic:'Binomial Theorem',questions:17},
  {subject:'Mathematics',topic:'Matrices and Determinants',questions:33,scope:'Combined topics'},
  {subject:'Mathematics',topic:'Permutations and Combinations',questions:22},
  {subject:'Mathematics',topic:'Probability',questions:18},
  {subject:'Mathematics',topic:'Vector Algebra',questions:27},
  {subject:'Mathematics',topic:'3D Geometry',questions:29},
  {subject:'Mathematics',topic:'Statistics',questions:16},
  {subject:'Mathematics',topic:'Trigonometric Ratio and Identities',questions:12},
  {subject:'Mathematics',topic:'Inverse Trigonometric Functions',questions:10},
  {subject:'Mathematics',topic:'Straight Lines and Pair of Straight Lines',questions:14},
  {subject:'Mathematics',topic:'Circle',questions:15},
  {subject:'Mathematics',topic:'Conic Sections (Parabola, Ellipse and Hyperbola)',questions:42,scope:'Combined topics'},
  {subject:'Mathematics',topic:'Limits, Continuity and Differentiability',questions:21,scope:'Combined topics'},
  {subject:'Mathematics',topic:'Differentiation',questions:2},
  {subject:'Mathematics',topic:'Applications of Derivatives',questions:11},
  {subject:'Mathematics',topic:'Indefinite Integrals',questions:7},
  {subject:'Mathematics',topic:'Definite Integration',questions:31},
  {subject:'Mathematics',topic:'Area Under Curves',questions:19},
  {subject:'Mathematics',topic:'Differential Equations',questions:21}
];
