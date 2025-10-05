export interface ProjectData {
  id: string;
  title: string;
  description: string;
  category: string;
  client?: string;
  capacity?: string;
  technology?: string;
  image: string;
  details: string[];
}

export const projects: ProjectData[] = [
  {
    id: 'balama-solar-bess',
    title: 'Balama mine 11.25MWp solar and 8.5MW/MWh BESS integration studies',
    description: 'Comprehensive integration studies for a large-scale solar and battery energy storage system at Balama mine',
    category: 'Solar + BESS Integration',
    capacity: '11.25MWp Solar + 8.5MW/MWh BESS',
    technology: 'Solar PV + Lithium-ion BESS',
    image: '/projects/Balama mine 11.25MWp solar and 8.5MW:MWh BESS integration studies.jpg',
    details: [
      'Grid integration impact assessment',
      'Power quality analysis and mitigation',
      'Energy storage optimization studies',
      'Protection system coordination',
      'Dynamic stability analysis',
      'Economic feasibility assessment'
    ]
  },
  {
    id: 'generation-connection-capacity',
    title: 'Generation Connection Capacity Assessment',
    description: 'Detailed capacity assessment for new generation connections to the transmission network',
    category: 'Capacity Assessment',
    technology: 'Multi-technology assessment',
    image: '/projects/Generation Connection Capacity Assessment.jpg',
    details: [
      'Network capacity analysis',
      'Thermal and voltage constraint identification',
      'Generation hosting capacity calculation',
      'Infrastructure upgrade requirements',
      'Connection cost estimation',
      'Regulatory compliance assessment'
    ]
  },
  {
    id: 'grid-code-compliance-namibia',
    title: 'Grid Code compliance studies for a 5MW solar PV plant in Namibia',
    description: 'Comprehensive grid code compliance studies ensuring adherence to Namibian grid requirements',
    category: 'Grid Code Compliance',
    capacity: '5MW',
    technology: 'Solar PV',
    image: '/projects/Grid Code compliance studies for a 5MW solar PV plant in Namibia.png',
    details: [
      'Namibian grid code requirements analysis',
      'Power quality compliance verification',
      'Fault ride-through capability assessment',
      'Reactive power capability studies',
      'Frequency response characteristics',
      'Grid connection agreement preparation'
    ]
  },
  {
    id: 'owners-engineer-207kwp',
    title: "Owner's Engineer role for a 207kWp commercial solar PV-PPA",
    description: 'Comprehensive owner\'s engineering services for commercial solar PV power purchase agreement',
    category: "Owner's Engineering",
    capacity: '207kWp',
    technology: 'Commercial Solar PV',
    image: "/projects/Owners Engineer role for a 207kWp commercial solar PV-PPA.jpeg",
    details: [
      'Technical due diligence and design review',
      'Construction supervision and quality assurance',
      'Performance testing and commissioning',
      'PPA compliance verification',
      'Risk assessment and mitigation',
      'Project handover and documentation'
    ]
  },
  {
    id: 'qmm-33kv-capacity',
    title: 'QMM mine 33kV OHL power transfer capacity assessment',
    description: 'Power transfer capacity assessment for 33kV overhead line serving QMM mining operations',
    category: 'Capacity Assessment',
    technology: '33kV Overhead Line',
    image: '/projects/QMM mine 33kV OHL power transfer capacity assessment.jpg',
    details: [
      'Thermal capacity analysis under various conditions',
      'Voltage drop and regulation studies',
      'Power flow optimization',
      'N-1 contingency analysis',
      'Load growth accommodation assessment',
      'Infrastructure upgrade recommendations'
    ]
  },
  {
    id: 'rbm-voltage-dip-mitigation',
    title: 'Richards Bay Minerals voltage dip mitigation study',
    description: 'Comprehensive study to mitigate voltage dips affecting Richards Bay Minerals operations',
    category: 'Power Quality',
    technology: 'Voltage Dip Mitigation',
    image: '/projects/Richards Bay Minerals voltage dip mitigation study.jpg',
    details: [
      'Voltage dip characteristic analysis',
      'Equipment sensitivity assessment',
      'Mitigation solution design',
      'Dynamic voltage restorer evaluation',
      'Uninterruptible power supply sizing',
      'Cost-benefit analysis of solutions'
    ]
  },
  {
    id: 'technical-advisory-207kwp',
    title: 'Technical advisory services for a 207kWp commercial solar PV-PPA',
    description: 'Expert technical advisory services for commercial solar PV power purchase agreement',
    category: 'Technical Advisory',
    capacity: '207kWp',
    technology: 'Commercial Solar PV',
    image: '/projects/Technical advisory services for a 207kWp commercial solar PV-PPA.jpeg',
    details: [
      'Technology selection and optimization',
      'Financial model validation',
      'Risk assessment and mitigation strategies',
      'Contract negotiation support',
      'Performance guarantee evaluation',
      'Long-term maintenance planning'
    ]
  },
  {
    id: 'trv-rrrv-ferranti-studies',
    title: 'Transient Recovery Voltage (TRV) & Rate of Rise of Recovery Voltage (RRRV) studies, and Ferranti studies',
    description: 'Advanced power system transient studies including TRV, RRRV, and Ferranti effect analysis',
    category: 'Transient Studies',
    technology: 'Advanced Power System Analysis',
    image: '/projects/Transient Recovery Voltage (TRV) & Rate of Rise of Recovery Voltage (RRRV) studies, and Ferranti studies.png',
    details: [
      'Circuit breaker TRV capability assessment',
      'RRRV calculation and analysis',
      'Ferranti effect on long transmission lines',
      'Switching transient analysis',
      'Insulation coordination studies',
      'Equipment specification recommendations'
    ]
  }
];
