import { Pickaxe, Wrench, Calculator, Users, ShieldCheck } from 'lucide-react';

const services = {
  miningElectrical: {
    title: 'Mining, Electrical & Production',
    description: 'Technical training for industrial operations',
    icon: Pickaxe,
    courses: [
      'Basic Drilling Engineering for Drilling Operator',
      'Advanced Electric Motor Diagnostics',
      'Advanced PLC & SCADA',
      'Balancing Machines and Total Alignment',
      'Bearing Technology & Lubrication System',
      'Chemical Use in Oil Production',
      'Drilling for Non Engineers',
      'Drilling, Well Completion & Workovers for Oil & Mining Industry',
      'Electric Motor Control and Protection',
      'Electric Power Motors, Controls, Generators & Transformer',
      'Electric Transformer and Power Equipment',
      'Electrical Engineering for Facilities Personnel',
      'Electrical Engineering Fundamental',
      'Electrical Power Transformer',
      'Electrical Fundamental',
      'Gas Compressor and Treatment',
      'Gas Dehydration',
      'Gas Handling Facilities',
      'Gas Processing',
      'Gas Purification',
      'Hand & Power Tools',
      'Introduction to Petroleum Engineering',
      'Introduction to Petroleum Engineering for Non Engineers',
      'Oil & Gas Industry: Exploration, Drilling & Production',
      'Oil Spill Contingency Planning',
      'Painting and Sand Blasting',
      'Petroleum Engineering for Non Engineers',
      'Pipes, Pipe Fittings and Valves',
      'Rigging, Material Handling: Oil & Mining Industry',
      'Sanitation Fundamental',
      'Vibration Analysis',
      'Vibration Monitoring',
      'Welding Joint Inspection & Fabrication',
      'Welding Procedure',
      'AutoCAD',
    ],
  },
  operations: {
    title: 'Operation & Maintenance',
    description: 'Comprehensive maintenance and operational training',
    icon: Wrench,
    courses: [
      'Programmable Logic Controller (PLC)',
      'Basic Production Operation',
      'Centrifugal Compressor: Operation and Maintenance',
      'Centrifugal Pump, Basic Design, Operation and Maintenance',
      'Comprehensive Approach for Design, Process Optimization and Application of Bioremediation Technology',
      'Corrosion Inspection, Maintenance and Pigging Technology of Oil and Gas',
      'Gas and Compressor: Operation and Control',
      'Gas Compressor, Performance, Operation and Trouble Shooting',
      'Gas Turbine, Operation, Maintenance & Trouble Shooting',
      'Heavy Equipment Management',
      'Inspection Construction, Hydrostatic, Operation, Maintenance and Safety of Oil Storage Tanks',
      'Internal Control and Related Section of Sarbanes-Oxley Act 2002',
      'Maintenance Management',
      'Maintenance Management (Preventive and Predictive Maintenance)',
      'Maintenance Management Advanced',
      'Maintenance of Instrument',
      'Maintenance Planning and Control',
      'Operations and Production Management',
      'Material Knowledge for Drilling and Production Operation',
      'Measurement Technique (Industrial Metrology)',
      'NDT Examination',
      'Oil Water Handling',
      'Oil Well Operation and Maintenance',
      'Pipeline Corrosion, Prevention and Cathodic Protection',
      'Piping and Pipeline Technology',
      'Piping Pigging and Pipeline Inspection',
      'Power System Protection',
      'Pump and Compressor (Operation and Maintenance)',
      'Microprocessor Based Control Systems',
      'AC/DC Motor Control',
      'Valve Maintenance',
      'Welding and Its Inspection',
      'Welding Joint Fabrication, Inspection and PWHT',
    ],
  },
  finance: {
    title: 'Finance, Accounting & Logistics',
    description: 'Financial and operational management training',
    icon: Calculator,
    courses: [
      'PSC Taxes Regime',
      'Risk-Based Operational Auditing and EDP Auditing',
      'Supply Chain Management',
      'Tax Management',
      'Trade Finance Process',
      'Accounting and IT (System) Issues',
      'Warehousing & Material Management',
      'Withholding Income Taxes and Value',
      'Work Program and Budget PSC and PODAFE',
    ],
  },
  management: {
    title: 'Management, Secretary, Administration & PR',
    description: 'Leadership and organizational development',
    icon: Users,
    courses: [
      '8 Work Ethics',
      'Decision Making Analysis',
      'Becoming an Effective Mentor and Coach',
      'Budgeting and Cost Control for Administration and Secretary',
      'Build Your Human Resources Administration Skill',
      'Business Writing',
      'Community Development',
      'Communication and Interpersonal Skill',
      'Confidence Building',
      'Contract Management & Tender Procedure',
      'Creative Leadership for Ultimate Change',
      'Creative Problem Solving & Decision Making',
      'CSR Development and Implementation Program',
      'Dynamic HR Management and Advanced Document Administration',
      'Effective Leadership for Supervisors',
      'Effective Supervisory Management',
      'Electronic Filing System',
      'Filing System',
      'How to Develop an Integrated Internal Audit Standard Operating Procedure',
      'Industrial Relations and Employment',
      'IT Implementation in Office Administration',
      'Conflict Management Course',
      'Leading First Class Service',
      'Letter & Report Writing',
      'Entrepreneurship Management',
      'Training Management',
      'Training Management',
      'Managing People Performance',
      'Managing The Function of Training',
      'Just In Time Management',
      'Quality Management',
      'Operations Management and Productivity Improvement for Service Industry',
      'Project Management',
      'Modern Office Management & Filing System',
      'Negotiation Skills and Business Techniques',
      'Office Management & Electronic Filing System',
      'On Becoming Effective Leader',
      'Organization Behavior & Influence Skill',
      'Excellent Service',
      'Product and Service Design',
      'Work Method Improvement for Productivity Enhancement',
      'Personal and Interpersonal (Proactive) Leadership',
      'Servant Leadership',
      'Service Excellence',
      'Statistical Process Control',
      'Business Feasibility Study',
      'Supervisory Development Program',
      'Trust Based Communication',
      'Supervisor Management & Leadership Skills',
      'Managerial Skills for Managers',
      'Creating Standard Operating Procedures',
      'Primal Leadership: Emotion-Based Leadership',
      '7 Habits of Effective Leader Training',
      'Talent Management Workshop: Proven Success HR System',
      'Human Resource Management Training',
      'HR For Non HR Workshop',
      'Organization Culture Development Workshop',
      'Coaching & Counselling Workshop',
      'Organization Development Workshop',
      'Transforming Service Excellence to Care Excellence',
      'Management Champion',
      'Teamwork Development/Team Building',
      'Achievement Motivation Training/AMT',
      'Organization Assessment: Finding Virus within Organization',
      'NLP Application within Organization Excellence',
      'Public Relations & Media Relationship',
      'Marketing Communication Workshop',
      'Hypnotherapy Workshop',
      'Service Excellence Training',
      'Problem Solving & Decision Making Workshop',
      'Ultimate Salesmanship Training',
      'Branding Strategic Workshop',
      'Effective Branch Management Training',
      'Certified Training of Trainers/TOT',
      'Training Management Workshop',
      'Customer Satisfaction',
      'Executive Leadership',
      'Management Principles',
      'Human Resource Management',
      'Retirement Preparation and Golden Age Entrepreneurship Training',
      'Creative Thinking Techniques',
      'Presentation Techniques',
      'Performance Management',
    ],
  },
  safety: {
    title: 'Health, Safety & Environment',
    description: 'Workplace safety and environmental management',
    icon: ShieldCheck,
    courses: [
      '5 Why For Accident Investigation Method',
      'Accident Investigation & Analysis',
      'Applied Water Technology',
      'Welding Safety',
      'Construction Safety Management',
      'Electrical Safety',
      'Emergency Response Planning',
      'Ergonomics for Hospital',
      'Fire Prevention and Control in Oil and Gas Operation',
      'General Safety for Oil & Gas Industry',
      'Hazard Identification',
      'HAZOP(s)',
      'Hyperkes & KK',
      'HES Auditing & Reporting',
      'RKL-RPL (AMDAL) Implementation',
      'Occupational Health and Safety Management for Productivity Enhancement',
      'Occupational Health and Industrial Hygiene',
      'H2S Gas Hazard Management',
      'Prevention & Treatment of Oil Spills',
      'Pollutant & Waste Water for Oil & Gas Industries',
      'Psychological Aspect of Safety',
      'Risk Analysis',
      'Safety Inspection Technique',
      'Safety in Drilling Activity',
      'Storage Tank Operation and Safety',
      'Transportation Safety Management',
      'Waste Water Management',
      'Water Treatment',
      'Advanced Water Treatment Management & Sewage System',
      'Quantitative Risk Assessment',
      'Industrial Fire Fighting',
      'International Safety Management Code',
      'Modern Safety Management',
      'Radiation Protection',
      'Risk Management Tools (for HES)',
      'Safety In Design',
      'Assessment & Audit Writing for Audit',
      'Environmental Technology',
      'Safety Shut-Down System',
      "Occupational Health – Building 'Caring' Culture",
      'Managing Risk Taker - Contractor Safety Management System',
      'Accident Reporting, Investigation and Analysis',
      'Build an Effective Administrative Risk Control - An Option for Leverage Control',
      'Warehouse Safety - Design and Operational',
      'Advanced Risk Engineering',
      'Chemical Safety - Know What You Handle',
      'Ergonomics - Economic approach to Human Restraint',
      "Practicing to Save People's Life in Gold Period - Advanced First Aid",
      'Basic Offshore Survival Emergency Training - HUET, SEA Survival, Basic Fire Fighting, Basic Life Support',
    ],
  },
};

export default services;
