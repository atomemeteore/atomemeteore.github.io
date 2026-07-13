export interface Experience {
  year: string;
  role: string;
  description: string;
  bullets?: string[];
}

export interface Education {
  year: string;
  degree: string;
}

export interface Project {
  title: string;
  url: string;
}

export type SkillItem =
  | { type: 'text'; content: string }
  | { type: 'labeled'; label: string; content: string }
  | { type: 'group'; title: string; items: string[] };

export interface LinkItem {
  type: 'email' | 'linkedin' | 'github' | 'mobility' | 'phone';
  content: string;
}

export interface CV {
  skills: SkillItem[];
  experiences: Experience[];
  formation: Education[];
  projects: Project[];
}

export const profile = {
  name: 'Alexis Nguyen',
  photo: './alexis.png',
  greeting: "Alexis Nguyen",
  intro: [
    "I'm currently an engineer in bioinformatics at TIMC Lab (Tree team) in Grenoble and I'm working on phylogenetics.",
    'You can see here my formation, skills and experiences.',
  ],
  links: [
    {type: 'email', content: 'alexisnguyen97@yahoo.fr'},
    {type: 'linkedin', content: 'https://www.linkedin.com/in/alexis-hoang-nguyen-099870187/'},
    {type: 'github', content: 'https://github.com/atomemeteore'},
    {type: 'mobility', content: 'Driving license (B) (Owns a vehicle)'},
    {type: 'phone', content: '06.95.06.29.27'},
  ] satisfies LinkItem[],
  skills: [
    {
      type: 'group',
      title: 'Programming Languages, Web Tools, and Version Control',
      items: [
        'Python, R, Bash, HTML5/CSS3/JavaScript, Git - GitHub',
      ],
    },
    {
      type: 'group',
      title: 'Bioinformatics Tools',
      items: [
        'Pangenomics : PGGB, Minigraph-cactus, Odgi',
        'Transcriptomics : Trimmomatic, STAR, featureCounts, DESeq2',
        'FastQC, Samtools, vcf-compare',
      ],
    },
    {
      type: 'group',
      title: 'Bioinformatics Tools',
      items: [
        'Pangenomics : PGGB, Minigraph-cactus, Odgi',
        'Transcriptomics : Trimmomatic, STAR, featureCounts, DESeq2',
        'FastQC, Samtools, vcf-compare',
      ],
    },
    { type: 'labeled', label: 'Operating Systems', content: 'Linux, Windows' },
    { type: 'labeled', label: 'Databases', content: 'SQL, DBeaver' },
    { type: 'labeled', label: 'IDE', content: 'VSCode, Cursor, RStudio' },
    {
      type: 'labeled',
      label: 'Reference Databases',
      content: 'RefSeq, GenBank, BioProject, SRA Aramemnon, STRING, UniProt, NCBI, GTDB.',
    },
    {
      type: 'labeled',
      label: 'Biology & Lab Techniques',
      content:
        'PCR, restriction enzyme digestion, genomic DNA extraction, Golden Braid 2.0 cloning',
    },
  ] satisfies SkillItem[],
  experiences: [
    {
      year: '2025-2027 (Ongoing)',
      role: 'Bioinformatics Engineer',
      description:
        'Designing genome annotations tools to investigate the evolution of bioenergetic enzymes',
    },
    {
      year: '2025',
      role: 'Intern – INNOLEA – ODAS Team',
      description:
        'Exploration of pangenome graph construction tools (Brassica napus and Helianthus argophyllus)\nSupervisors : Clément BIRBES / Clotilde CLAUDEL',
      bullets: [
        'Use of HPC clusters',
        'Use of Minigraph-cactus and PGGB',
        'Detection and visualization of diagnostic SNPs',
      ],
    },
    {
      year: '2024',
      role: 'M2 Research Intern – Jean-Pierre Bourgin Institute, INRAe UMR1318 – CATs Team',
      description:
        'Development of yeast-based complementation and fluorescent sugar transport assays / Supervisor : Rozenn LE-HIR',
      bullets: [
        'Plasmid construction using restriction enzymes, Golden Braid 2.0 cloning',
        'Nanopore sequencing analysis, primer design, database comparison',
      ],
    },
    {
      year: '2023',
      role: 'M1 Intern – CEFEL Experimental Centre, Montauban',
      description:
        'Monitoring of biological and conventional treatments in apple orchards / Supervisor : Jean-François Saint-Hilary',
    },
    {
      year: '2022',
      role: 'Biology Teaching Intern (High School) – Lycée Ferdinand Buisson, Elbeuf',
      description:
        'Integration of computer programming in science education / Encadrant : David GAUDIN',
    },
  ] satisfies Experience[],
  education: [
    {
      year: '2024-2025',
      degree:
        "Master's in Bioinformatics – Specialization in Biostatistics for Biology and Biomedical Sciences - Université de Rouen Normandie",
    },
    {
      year: '2022-2024',
      degree:
        "Master's in Agrosciences, Plant Biotechnology and Biovalorization – With Honors (2nd out of 20) – Université de RouenNormandie",
    },
    {
      year: '2020-2022',
      degree:
        "Master's in Education (Biology Teaching – MEEF SVT) – With Merit – INSPE Rouen",
    },
    {
      year: '2017-2020',
      degree:
        "Bachelor's in Life, Earth and Universe Sciences – With Merit – UPJV Amiens",
    },
  ] satisfies Education[],
  projects: [
    {
      title:
        'Transcriptomics Analysis of Chicken Breast Muscle and Shear Force Differences',
      url: 'https://github.com/atomemeteore/chicken_RNAseq_analysis',
    },
    {
      title: 'Single-Cell RNA-seq Pipeline Comparison',
      url: 'https://github.com/atomemeteore/sc-RNAseq',
    },
  ] satisfies Project[],
};
