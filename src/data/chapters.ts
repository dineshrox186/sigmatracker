export type Subject = 'Physics' | 'Chemistry' | 'Mathematics';
export type PrepStatus = 'Easy / Confident' | 'Need Revision' | 'Hard' | 'Unmarked';
export type Chapter = {id:string;subject:Subject;classLevel:'11'|'12';unit:string;name:string;subtopics:string[]};
/** Chapter-only catalogue sourced from sigma tracker: jee-main-2026-chapters-v2. */
export const chapters: Chapter[] = [
  {
    "id": "p01",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "Physics and Measurement",
    "name": "Units and Measurements",
    "subtopics": []
  },
  {
    "id": "p02",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "Kinematics",
    "name": "Motion in a Straight Line",
    "subtopics": []
  },
  {
    "id": "p03",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "Kinematics",
    "name": "Motion in a Plane",
    "subtopics": []
  },
  {
    "id": "p04",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "Laws of Motion",
    "name": "Laws of Motion",
    "subtopics": []
  },
  {
    "id": "p05",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "Work, Energy and Power",
    "name": "Work, Energy and Power",
    "subtopics": []
  },
  {
    "id": "p06",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "System of Particles and Rotational Motion",
    "name": "System of Particles and Centre of Mass",
    "subtopics": []
  },
  {
    "id": "p07",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "System of Particles and Rotational Motion",
    "name": "Rotational Motion",
    "subtopics": []
  },
  {
    "id": "p08",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "Gravitation",
    "name": "Gravitation",
    "subtopics": []
  },
  {
    "id": "p09",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "Properties of Solids and Liquids",
    "name": "Mechanical Properties of Solids",
    "subtopics": []
  },
  {
    "id": "p10",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "Properties of Solids and Liquids",
    "name": "Mechanical Properties of Fluids",
    "subtopics": []
  },
  {
    "id": "p11",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "Properties of Solids and Liquids",
    "name": "Thermal Properties of Matter",
    "subtopics": []
  },
  {
    "id": "p12",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "Thermodynamics",
    "name": "Thermodynamics",
    "subtopics": []
  },
  {
    "id": "p13",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "Kinetic Theory of Gases",
    "name": "Kinetic Theory of Gases",
    "subtopics": []
  },
  {
    "id": "p14",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "Oscillations and Waves",
    "name": "Oscillations",
    "subtopics": []
  },
  {
    "id": "p15",
    "subject": "Physics",
    "classLevel": "11",
    "unit": "Oscillations and Waves",
    "name": "Waves",
    "subtopics": []
  },
  {
    "id": "p16",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Electrostatics",
    "name": "Electric Charges and Fields",
    "subtopics": []
  },
  {
    "id": "p17",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Electrostatics",
    "name": "Electrostatic Potential and Capacitance",
    "subtopics": []
  },
  {
    "id": "p18",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Current Electricity",
    "name": "Current Electricity",
    "subtopics": []
  },
  {
    "id": "p19",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Magnetic Effects of Current and Magnetism",
    "name": "Moving Charges and Magnetism",
    "subtopics": []
  },
  {
    "id": "p20",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Magnetic Effects of Current and Magnetism",
    "name": "Magnetism and Matter",
    "subtopics": []
  },
  {
    "id": "p21",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Electromagnetic Induction and Alternating Currents",
    "name": "Electromagnetic Induction",
    "subtopics": []
  },
  {
    "id": "p22",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Electromagnetic Induction and Alternating Currents",
    "name": "Alternating Current",
    "subtopics": []
  },
  {
    "id": "p23",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Electromagnetic Waves",
    "name": "Electromagnetic Waves",
    "subtopics": []
  },
  {
    "id": "p24",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Optics",
    "name": "Ray Optics and Optical Instruments",
    "subtopics": []
  },
  {
    "id": "p25",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Optics",
    "name": "Wave Optics",
    "subtopics": []
  },
  {
    "id": "p26",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Dual Nature of Matter and Radiation",
    "name": "Dual Nature of Radiation and Matter",
    "subtopics": []
  },
  {
    "id": "p27",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Atoms and Nuclei",
    "name": "Atoms",
    "subtopics": []
  },
  {
    "id": "p28",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Atoms and Nuclei",
    "name": "Nuclei",
    "subtopics": []
  },
  {
    "id": "p29",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Electronic Devices",
    "name": "Semiconductor Electronics",
    "subtopics": []
  },
  {
    "id": "p30",
    "subject": "Physics",
    "classLevel": "12",
    "unit": "Experimental Skills",
    "name": "Experimental Skills",
    "subtopics": []
  },
  {
    "id": "c01",
    "subject": "Chemistry",
    "classLevel": "11",
    "unit": "Some Basic Concepts in Chemistry",
    "name": "Some Basic Concepts in Chemistry",
    "subtopics": []
  },
  {
    "id": "c02",
    "subject": "Chemistry",
    "classLevel": "11",
    "unit": "Atomic Structure",
    "name": "Atomic Structure",
    "subtopics": []
  },
  {
    "id": "c03",
    "subject": "Chemistry",
    "classLevel": "11",
    "unit": "Chemical Bonding and Molecular Structure",
    "name": "Chemical Bonding and Molecular Structure",
    "subtopics": []
  },
  {
    "id": "c04",
    "subject": "Chemistry",
    "classLevel": "11",
    "unit": "Chemical Thermodynamics",
    "name": "Chemical Thermodynamics",
    "subtopics": []
  },
  {
    "id": "c05",
    "subject": "Chemistry",
    "classLevel": "12",
    "unit": "Solutions",
    "name": "Solutions",
    "subtopics": []
  },
  {
    "id": "c06",
    "subject": "Chemistry",
    "classLevel": "11",
    "unit": "Equilibrium",
    "name": "Equilibrium",
    "subtopics": []
  },
  {
    "id": "c07",
    "subject": "Chemistry",
    "classLevel": "11",
    "unit": "Redox Reactions and Electrochemistry",
    "name": "Redox Reactions",
    "subtopics": []
  },
  {
    "id": "c08",
    "subject": "Chemistry",
    "classLevel": "12",
    "unit": "Redox Reactions and Electrochemistry",
    "name": "Electrochemistry",
    "subtopics": []
  },
  {
    "id": "c09",
    "subject": "Chemistry",
    "classLevel": "12",
    "unit": "Chemical Kinetics",
    "name": "Chemical Kinetics",
    "subtopics": []
  },
  {
    "id": "c10",
    "subject": "Chemistry",
    "classLevel": "11",
    "unit": "Classification of Elements and Periodicity",
    "name": "Classification of Elements and Periodicity in Properties",
    "subtopics": []
  },
  {
    "id": "c11",
    "subject": "Chemistry",
    "classLevel": "12",
    "unit": "p-Block Elements",
    "name": "p-Block Elements",
    "subtopics": []
  },
  {
    "id": "c12",
    "subject": "Chemistry",
    "classLevel": "12",
    "unit": "d- and f-Block Elements",
    "name": "d- and f-Block Elements",
    "subtopics": []
  },
  {
    "id": "c13",
    "subject": "Chemistry",
    "classLevel": "12",
    "unit": "Coordination Compounds",
    "name": "Coordination Compounds",
    "subtopics": []
  },
  {
    "id": "c14",
    "subject": "Chemistry",
    "classLevel": "11",
    "unit": "Organic Chemistry: Basic Principles and Techniques",
    "name": "Purification and Characterisation of Organic Compounds",
    "subtopics": []
  },
  {
    "id": "c15",
    "subject": "Chemistry",
    "classLevel": "11",
    "unit": "Organic Chemistry: Basic Principles and Techniques",
    "name": "Some Basic Principles of Organic Chemistry",
    "subtopics": []
  },
  {
    "id": "c16",
    "subject": "Chemistry",
    "classLevel": "11",
    "unit": "Hydrocarbons",
    "name": "Hydrocarbons",
    "subtopics": []
  },
  {
    "id": "c17",
    "subject": "Chemistry",
    "classLevel": "12",
    "unit": "Organic Compounds Containing Halogens",
    "name": "Organic Compounds Containing Halogens",
    "subtopics": []
  },
  {
    "id": "c18",
    "subject": "Chemistry",
    "classLevel": "12",
    "unit": "Organic Compounds Containing Oxygen",
    "name": "Alcohols, Phenols and Ethers",
    "subtopics": []
  },
  {
    "id": "c19",
    "subject": "Chemistry",
    "classLevel": "12",
    "unit": "Organic Compounds Containing Oxygen",
    "name": "Aldehydes, Ketones and Carboxylic Acids",
    "subtopics": []
  },
  {
    "id": "c20",
    "subject": "Chemistry",
    "classLevel": "12",
    "unit": "Organic Compounds Containing Nitrogen",
    "name": "Organic Compounds Containing Nitrogen",
    "subtopics": []
  },
  {
    "id": "c21",
    "subject": "Chemistry",
    "classLevel": "12",
    "unit": "Biomolecules",
    "name": "Biomolecules",
    "subtopics": []
  },
  {
    "id": "c22",
    "subject": "Chemistry",
    "classLevel": "12",
    "unit": "Principles Related to Practical Chemistry",
    "name": "Principles Related to Practical Chemistry",
    "subtopics": []
  },
  {
    "id": "m01",
    "subject": "Mathematics",
    "classLevel": "11",
    "unit": "Sets, Relations and Functions",
    "name": "Sets, Relations and Functions",
    "subtopics": []
  },
  {
    "id": "m02",
    "subject": "Mathematics",
    "classLevel": "11",
    "unit": "Complex Numbers and Quadratic Equations",
    "name": "Complex Numbers",
    "subtopics": []
  },
  {
    "id": "m03",
    "subject": "Mathematics",
    "classLevel": "11",
    "unit": "Complex Numbers and Quadratic Equations",
    "name": "Quadratic Equations",
    "subtopics": []
  },
  {
    "id": "m04",
    "subject": "Mathematics",
    "classLevel": "12",
    "unit": "Matrices and Determinants",
    "name": "Matrices",
    "subtopics": []
  },
  {
    "id": "m05",
    "subject": "Mathematics",
    "classLevel": "12",
    "unit": "Matrices and Determinants",
    "name": "Determinants",
    "subtopics": []
  },
  {
    "id": "m06",
    "subject": "Mathematics",
    "classLevel": "11",
    "unit": "Permutations and Combinations",
    "name": "Permutations and Combinations",
    "subtopics": []
  },
  {
    "id": "m07",
    "subject": "Mathematics",
    "classLevel": "11",
    "unit": "Binomial Theorem",
    "name": "Binomial Theorem",
    "subtopics": []
  },
  {
    "id": "m08",
    "subject": "Mathematics",
    "classLevel": "11",
    "unit": "Sequence and Series",
    "name": "Sequences and Series",
    "subtopics": []
  },
  {
    "id": "m09",
    "subject": "Mathematics",
    "classLevel": "11",
    "unit": "Trigonometry",
    "name": "Trigonometry",
    "subtopics": []
  },
  {
    "id": "m10",
    "subject": "Mathematics",
    "classLevel": "11",
    "unit": "Limits and Derivatives",
    "name": "Limits",
    "subtopics": []
  },
  {
    "id": "m11",
    "subject": "Mathematics",
    "classLevel": "12",
    "unit": "Differential Calculus",
    "name": "Continuity and Differentiability",
    "subtopics": []
  },
  {
    "id": "m12",
    "subject": "Mathematics",
    "classLevel": "12",
    "unit": "Differential Calculus",
    "name": "Applications of Derivatives",
    "subtopics": []
  },
  {
    "id": "m13",
    "subject": "Mathematics",
    "classLevel": "12",
    "unit": "Integral Calculus",
    "name": "Indefinite Integration",
    "subtopics": []
  },
  {
    "id": "m14",
    "subject": "Mathematics",
    "classLevel": "12",
    "unit": "Integral Calculus",
    "name": "Definite Integration",
    "subtopics": []
  },
  {
    "id": "m15",
    "subject": "Mathematics",
    "classLevel": "12",
    "unit": "Integral Calculus",
    "name": "Area Under Curves",
    "subtopics": []
  },
  {
    "id": "m16",
    "subject": "Mathematics",
    "classLevel": "12",
    "unit": "Differential Equations",
    "name": "Differential Equations",
    "subtopics": []
  },
  {
    "id": "m17",
    "subject": "Mathematics",
    "classLevel": "11",
    "unit": "Coordinate Geometry",
    "name": "Straight Lines",
    "subtopics": []
  },
  {
    "id": "m18",
    "subject": "Mathematics",
    "classLevel": "11",
    "unit": "Coordinate Geometry",
    "name": "Circles",
    "subtopics": []
  },
  {
    "id": "m19",
    "subject": "Mathematics",
    "classLevel": "11",
    "unit": "Coordinate Geometry",
    "name": "Conic Sections",
    "subtopics": []
  },
  {
    "id": "m20",
    "subject": "Mathematics",
    "classLevel": "12",
    "unit": "Three Dimensional Geometry",
    "name": "Three-Dimensional Geometry",
    "subtopics": []
  },
  {
    "id": "m21",
    "subject": "Mathematics",
    "classLevel": "12",
    "unit": "Vector Algebra",
    "name": "Vector Algebra",
    "subtopics": []
  },
  {
    "id": "m22",
    "subject": "Mathematics",
    "classLevel": "11",
    "unit": "Statistics",
    "name": "Statistics",
    "subtopics": []
  },
  {
    "id": "m23",
    "subject": "Mathematics",
    "classLevel": "12",
    "unit": "Probability",
    "name": "Probability",
    "subtopics": []
  }
];
