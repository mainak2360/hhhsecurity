import { ServiceItem, IndustryItem, JobVacancy, VerificationChecklistItem } from '../types';

export const COMPANY_INFO = {
  name: 'Assam Security Intelligent Service',
  shortName: 'ASIS',
  tagline: 'Your Safety. Our Responsibility.',
  subTagline: 'Professional private security and facility management solutions engineered for residential, commercial, industrial, and institutional premises across Assam.',
  establishedYear: '2018', // Clearly stated as operational with field expertise
  coverageArea: 'All 35 Districts of Assam (Guwahati, Dibrugarh, Jorhat, Silchar, Tinsukia, Tezpur, Nagaon, Bongaigaon)',
  headquarters: {
    addressLine1: 'House No. 42, G.S. Road, Christian Basti',
    addressLine2: 'Near Dispur Secretariat',
    city: 'Guwahati',
    district: 'Kamrup Metropolitan',
    state: 'Assam',
    pincode: '781005',
    country: 'India',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.477759549503!2d91.7766524!3d26.1485609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5933611894d3%3A0xb35a09f8749a1fa2!2sChristian%20Basti%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Christian+Basti+GS+Road+Guwahati+Assam+781005',
    isExactGpsVerified: false, // Flag clearly identifying verification status
    verificationNote: 'Official corporate premises located along G.S. Road, Guwahati commercial corridor. Specific GPS coordinates & branch offices verified with client onboarding.',
  },
  contacts: {
    phonePrimary: '+91 94350 12345',
    phoneSecondary: '+91 98640 67890',
    phoneFormattedDisplay: '+91 94350 12345 / +91 98640 67890',
    phonePlaceholderNote: 'Primary operational contact numbers. Business owner can update these directly via the Launch Checklist.',
    emailOfficial: 'enquiry@assamsecurity.in',
    emailCareers: 'careers@assamsecurity.in',
    whatsappNumber: '919435012345',
    whatsappPrefilledMessage: 'Hello Assam Security Intelligent Service, I would like to enquire about your security and facility management services. Please contact me with more information.',
    controlRoomHours: '24 Hours / 7 Days a Week (Round-the-clock Patrol & Supervision)',
    officeHours: 'Monday – Saturday: 09:00 AM – 06:30 PM (Sunday by Appointment)',
    emergencyProtocol: 'For active deployments, our 24/7 Field Operations Supervisor and Quick Response Team (QRT) are reachable via our dedicated duty desk.',
  },
  regulatoryCompliance: {
    psaraStatus: 'Operates strictly in adherence with Private Security Agencies (Regulation) Act, 2005 (PSARA) standards and Assam State PSARA Rules.',
    policeVerification: '100% mandatory criminal background and local police station character verification for all deployed security personnel.',
    trainingCurriculum: 'Pre-induction training conforming to physical drill, access control, fire-fighting, first-aid, visitor register maintenance, and de-escalation protocols.',
    statutoryBenefits: 'Full compliance with EPF (Provident Fund), ESIC (Employee State Insurance), and minimum wage guidelines notified by the Government of Assam.',
  }
};

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: 'manned-guarding',
    title: 'Manned Guarding & Security Personnel',
    shortDesc: 'Disciplined, uniformed security guards trained in strict access control, visitor screening, and round-the-clock vigilance.',
    fullDesc: 'Our core manned guarding service supplies rigorously vetted, physically agile, and smartly uniformed security guards. Each guard undergoes police background screening, physical endurance tests, and formal training in gate registers, perimeter vigilance, frisking procedures, and emergency response.',
    status: 'Confirmed',
    category: 'manned',
    minimumPersonnel: '1 Guard per 8-hour or 12-hour shift',
    benefits: [
      'Visible deterrent against trespassing, theft, and unauthorized entry',
      'Daily visitor management, material inward/outward gate passes, and logbook recording',
      'Regular physical shift handover and mandatory supervisor spot-checks',
      'Courteous yet firm demeanor ensuring professional representation at your premises'
    ],
    suitableIndustries: ['Corporate Offices', 'Residential Societies', 'Industrial Gates', 'Educational Campuses', 'Retail Showrooms'],
    keyDeliverables: [
      'Uniformed security personnel (Grade A / Grade B)',
      'Visitor register & entry-pass maintenance',
      'Key management and gate access protocol',
      'Shift-wise turnover log and daily incident report'
    ],
    sopHighlights: [
      'Mandatory turnout inspection prior to each shift',
      'Verification of visitor photo ID and destination check',
      'Material movement verification against stamped delivery challans',
      'Immediate alert to designated client contact upon any anomaly'
    ],
    icon: 'ShieldCheck'
  },
  {
    id: 'corporate-office-security',
    title: 'Corporate & Office Security',
    shortDesc: 'Tailored security solutions for corporate headquarters, IT facilities, financial institutions, and business parks.',
    fullDesc: 'Corporate environments require an optimal balance between impenetrable security and warm executive hospitality. Our corporate security guards and reception security officers maintain confidentiality, manage access badges, monitor baggage screening, and ensure frictionless operations for executives and clients.',
    status: 'Confirmed',
    category: 'manned',
    minimumPersonnel: '2+ Guards (Reception & Access Control)',
    benefits: [
      'Executive front-desk security and polite visitor hospitality',
      'Automated or manual turnstile and RFID access monitoring',
      'Confidential document and assets protection',
      'Emergency evacuation protocol execution (fire drills, power outages)'
    ],
    suitableIndustries: ['Corporate Offices', 'IT Hubs & BPOs', 'Banks & Financial Institutions', 'Consulting & Law Firms'],
    keyDeliverables: [
      'Front-desk reception security marshal',
      'Access badge & biometric escort protocol',
      'After-hours floor patrolling & server room log verification',
      'Vendor & delivery personnel escort'
    ],
    sopHighlights: [
      'Zero-tolerance policy for unauthorized photography or entry',
      'Strict server room and electrical vault access registers',
      'Daily evening lockup inspection across all office cabins and exits'
    ],
    icon: 'Building2'
  },
  {
    id: 'industrial-warehouse-security',
    title: 'Industrial & Warehouse Security',
    shortDesc: 'Robust perimeter protection, cargo dispatch verification, dock management, and asset safeguarding for factories.',
    fullDesc: 'Industrial setups, factories, and logistics hubs face specific challenges like material pilferage, perimeter breach, vehicle traffic congestion, and strict occupational safety compliance. Our industrial security officers monitor loading docks, conduct vehicle undercarriage inspections, and enforce plant safety rules.',
    status: 'Confirmed',
    category: 'manned',
    minimumPersonnel: '3+ Guards (Main Gate, Weighbridge & Patrol)',
    benefits: [
      'Prevention of raw material shrinkage, copper theft, and inventory loss',
      'Weighbridge and commercial vehicle cargo manifest verification',
      'Enforcement of PPE (Personal Protective Equipment) and factory safety rules',
      'Perimeter night patrols with batons, high-intensity torches, and patrol whistles'
    ],
    suitableIndustries: ['Manufacturing Plants', 'Tea Estates & Processing Units', 'Oil & Gas Support Yards', 'Logistics Warehouses', 'Distribution Hubs'],
    keyDeliverables: [
      'Main entrance boom barrier and truck inspection protocol',
      'Weighbridge tally & delivery challan reconciliation',
      'Perimeter fenceline patrol logs every 60 minutes',
      'Hazardous material zone monitoring & smoking prevention'
    ],
    sopHighlights: [
      'Physical inspection of truck cabins and cargo seals',
      'Driver entry log, breath-analyzer screening (if mandated by client)',
      'Worker shift-end frisking conforming to dignity standards'
    ],
    icon: 'Factory'
  },
  {
    id: 'residential-apartment-security',
    title: 'Residential & Apartment Security',
    shortDesc: 'Reliable, 24/7 security guarding for housing societies, gated residential complexes, and individual estates.',
    fullDesc: 'Ensuring peace of mind for families, elderly residents, and children is paramount. Our residential guards manage visitor and courier arrivals, regulate parking, assist residents during nighttime emergencies, and maintain a quiet, well-guarded perimeter.',
    status: 'Confirmed',
    category: 'manned',
    minimumPersonnel: '2 Guards (Day/Night Rotational for Main Gate)',
    benefits: [
      'Thorough screening of delivery couriers, cab drivers, and domestic staff',
      'Digital or physical visitor entry validation with apartment residents',
      'Traffic flow and allocated parking enforcement inside complex',
      'Assistance during medical or power emergencies'
    ],
    suitableIndustries: ['Residential Societies', 'Gated Communities', 'Bungalows & Private Estates', 'Hostels & Accommodations'],
    keyDeliverables: [
      'Gate security with intercom/app confirmation workflow',
      'Maid and domestic helper attendance registration',
      'Late night boundary and parking lot inspection',
      'Child safety oversight near entrance boundaries'
    ],
    sopHighlights: [
      'No unknown person allowed inside without resident approval',
      'Verification of water pump and generator status handover',
      'Strict verification of scrap vendors and contractors'
    ],
    icon: 'Home'
  },
  {
    id: 'event-security-management',
    title: 'Event Security & Crowd Management',
    shortDesc: 'Pre-planned security cordoning, bouncer deployments, VIP escorts, and crowd control for exhibitions and gatherings.',
    fullDesc: 'From high-profile corporate summits, commercial exhibitions, and cultural gatherings to private banquets, our event security wing provides strategic access gates, metal detector screening, queue segregation, emergency egress management, and discreet dispute de-escalation.',
    status: 'Confirmed',
    category: 'manned',
    minimumPersonnel: 'Scalable team (4 to 50+ Officers & Bouncers)',
    benefits: [
      'Structured queue management and metal detector screening at entry',
      'VIP guest corridor protection and stage perimeter isolation',
      'Rapid resolution of disorderly conduct without causing public disruption',
      'Clear evacuation path maintenance in compliance with fire safety rules'
    ],
    suitableIndustries: ['Trade Fairs & Exhibitions', 'Corporate Annual Meets', 'Concerts & Cultural Events', 'Weddings & Celebrations'],
    keyDeliverables: [
      'Handheld metal detector (HHMD) screening teams',
      'Bouncers and marshals for VIP zones and backstage access',
      'Emergency exit pathway wardens',
      'Event coordination briefing with client organizing team'
    ],
    sopHighlights: [
      'Pre-event venue risk assessment and egress mapping',
      'Ticket/badge authenticity checking at registration doors',
      'Prohibited items confiscation with recorded vouchers'
    ],
    icon: 'Users'
  },
  {
    id: 'supervision-patrolling',
    title: 'Security Supervision & Night Patrolling',
    shortDesc: 'Independent mobile supervisory squad conducting surprise inspections, guard alertness checks, and duty audits.',
    fullDesc: 'A security guard is only as effective as the supervision behind them. Assam Security Intelligent Service operates mobile Field Officers and Night Patrolling squads who conduct unannounced spot-checks, inspect guard alertness, verify registers, and ensure post adherence at odd hours.',
    status: 'Confirmed',
    category: 'manned',
    minimumPersonnel: 'Included with all active deployments or on contract',
    benefits: [
      'Guarantees zero sleeping on duty and enforces strict disciplinary standards',
      'Real-time supervisor attendance stamp on site visitor books',
      'Immediate replacement of guard in case of sudden illness or absence',
      'Monthly client liaison meetings to review and improve site security'
    ],
    suitableIndustries: ['All Client Deployments', 'Multi-location Businesses', 'Remote Facilities', 'Industrial Plants'],
    keyDeliverables: [
      'Field Officer visits (day and night surprise checks)',
      'Digital/physical supervisor logbook endorsement',
      'Monthly security audit and incident summary',
      'Direct liaison with local police station if ever required'
    ],
    sopHighlights: [
      'Randomized inspection times to prevent scheduled complacency',
      'Testing of torches, registers, whistles, and communication devices',
      'Corrective retraining on spot for any minor procedural lapse'
    ],
    icon: 'Eye'
  },
  {
    id: 'cctv-monitoring-surveillance',
    title: 'CCTV Monitoring & Surveillance Operations',
    shortDesc: 'Dedicated control-room operators to continuously observe CCTV feeds, detect perimeter breaches, and log anomalies.',
    fullDesc: 'While many companies possess surveillance hardware, camera feeds frequently go unmonitored in real-time. We supply trained control-room operators who track camera grids, report suspicious movement, verify perimeter infrared tripwires, and archive timestamped recordings.',
    status: 'Tailored Scope (Client Approval Required)',
    category: 'electronic',
    minimumPersonnel: '1 Control Room Operator per shift',
    benefits: [
      'Active real-time observation rather than forensic review after a loss occurs',
      'Immediate radio dispatch of on-ground guards to suspicious coordinates',
      'Systematic video backup archiving and evidence preservation',
      'Verification of camera angles, recording status, and DVR/NVR uptime'
    ],
    suitableIndustries: ['Commercial Complexes', 'Logistics Warehouses', 'Jewellery & Cash Hubs', 'Hospitals', 'Large Campuses'],
    keyDeliverables: [
      'Certified CCTV workstation operator',
      'Hourly electronic surveillance log',
      'Camera health and blindness notification report',
      'Incident clip export and incident timeline chronology'
    ],
    sopHighlights: [
      'Continuous pan-tilt-zoom sweeps across blind zones',
      'Immediate alert protocol upon detection of loitering or perimeter crossing',
      'Strict non-disclosure of internal surveillance camera layouts'
    ],
    icon: 'Video'
  },
  {
    id: 'housekeeping-facility-management',
    title: 'Housekeeping & Facility Management',
    shortDesc: 'Comprehensive facility upkeep, corporate janitorial hygiene, pantry support, and property maintenance staffing.',
    fullDesc: 'To provide a single unified point of contact for premises management, we offer professional housekeeping and allied facility management. Our trained crew maintains sanitized work environments, executes systematic cleaning schedules, and manages daily hygiene supplies.',
    status: 'Tailored Scope (Client Approval Required)',
    category: 'facility',
    minimumPersonnel: '2+ Janitorial & Pantry Staff',
    benefits: [
      'Immaculate hygiene in corporate workspaces, washrooms, and client zones',
      'Trained in mechanized cleaning tools, eco-friendly chemicals, and dilution ratios',
      'Pantry management, meeting room turnover, and executive tea/coffee service',
      'Single consolidated monthly billing covering security and facility upkeep'
    ],
    suitableIndustries: ['Corporate Offices', 'Healthcare Clinics & Hospitals', 'Educational Institutions', 'Retail Malls'],
    keyDeliverables: [
      'Daily surface disinfection and floor scrubbing schedules',
      'Washroom deep cleaning checklist and consumable replenishment',
      'Pantry assistance and waste segregation protocol',
      'Facility supervisor oversight and chemical inventory management'
    ],
    sopHighlights: [
      'Color-coded microfiber cleaning cloths preventing cross-contamination',
      'Adherence to biomedical or hazardous waste segregation guidelines',
      'Scheduled preventive maintenance reminders for facility managers'
    ],
    icon: 'Sparkles'
  }
];

export const INDUSTRIES_CATALOG: IndustryItem[] = [
  {
    id: 'corporate-offices',
    name: 'Corporate Offices & IT Parks',
    description: 'Executive front-desk protection, access-card compliance, confidential data room safeguards, and visitor hospitality.',
    keyRisksAddressed: ['Unauthorized access to workspaces', 'Tailgating at turnstiles', 'Asset and equipment theft', 'Fire evacuation management'],
    recommendedServices: ['Corporate & Office Security', 'CCTV Monitoring', 'Facility Management'],
    typicalShiftSetup: '24/7 Rotational with smart front-desk day marshals and alert night guards.',
    icon: 'Building'
  },
  {
    id: 'factories-industrial',
    name: 'Factories & Industrial Facilities',
    description: 'High-security gate management, truck weighbridge inspection, scrap movement authorization, and perimeter watchtowers.',
    keyRisksAddressed: ['Raw material pilferage', 'Unsupervised contractor access', 'Safety compliance violations', 'Perimeter trespassing'],
    recommendedServices: ['Industrial & Warehouse Security', 'Manned Guarding', 'Night Patrolling'],
    typicalShiftSetup: 'Continuous 3-shift (8h) or 2-shift (12h) coverage with dedicated gate & patrol posts.',
    icon: 'Factory'
  },
  {
    id: 'residential-societies',
    name: 'Residential Societies & Apartments',
    description: 'Gated community protection ensuring serene living, delivery screening, courteous resident assistance, and emergency preparedness.',
    keyRisksAddressed: ['Unverified vendor entry', 'Burglary & porch theft', 'Parking disputes', 'Late-night disturbances'],
    recommendedServices: ['Residential Security', 'Manned Guarding', 'Surprise Night Inspections'],
    typicalShiftSetup: '24/7 continuous post at main entrance gate plus rotational night boundary patrol.',
    icon: 'Home'
  },
  {
    id: 'retail-shopping',
    name: 'Retail Stores & Shopping Complexes',
    description: 'Customer-facing security officers, shoplifting deterrence, loss prevention, baggage counter management, and crowd guidance.',
    keyRisksAddressed: ['Inventory shrinkage & shoplifting', 'Disorderly patrons', 'Cash-in-transit security', 'Baggage counter mix-ups'],
    recommendedServices: ['Manned Guarding', 'CCTV Monitoring', 'Supervisory Audits'],
    typicalShiftSetup: 'Store operating hours (10:00 to 22:00) plus night lockup custodian.',
    icon: 'ShoppingBag'
  },
  {
    id: 'warehouses-logistics',
    name: 'Warehouses & Logistics Facilities',
    description: 'Strict dock gate controls, driver identity checks, container seal verification, and round-the-clock perimeter patrols.',
    keyRisksAddressed: ['Cargo pilferage during transit/loading', 'Seal tampering', 'False bill of lading claims', 'Perimeter yard breach'],
    recommendedServices: ['Industrial & Warehouse Security', 'CCTV Monitoring', 'Night Patrol Squad'],
    typicalShiftSetup: '24/7 round-the-clock gate, dock post, and yard roving watchman.',
    icon: 'Truck'
  },
  {
    id: 'educational-institutions',
    name: 'Educational Institutions & Campuses',
    description: 'Child safety safeguards, parent visitor passes, bus boarding zone regulation, and prevention of unauthorized campus access.',
    keyRisksAddressed: ['Unauthorized pickup of students', 'Ragging & trespassing', 'Traffic jam during school release', 'Campus property damage'],
    recommendedServices: ['Manned Guarding', 'Event Security', 'Facility Management'],
    typicalShiftSetup: 'Extended day shifts with special gate marshals during school pickup/drop hours.',
    icon: 'GraduationCap'
  },
  {
    id: 'hospitals-healthcare',
    name: 'Hospitals & Healthcare Facilities',
    description: 'High-empathy, de-escalating security personnel managing emergency room crowds, patient ward access, and ambulance lanes.',
    keyRisksAddressed: ['Aggressive altercations in casualty/ER', 'Unrestricted visitor flow to ICUs', 'Ambulance bay blockages', 'Premises hygiene'],
    recommendedServices: ['Corporate Security', 'Manned Guarding', 'Housekeeping & Facility Management'],
    typicalShiftSetup: '24/7 continuous guarding with high vigilance in casualty & ICU waiting zones.',
    icon: 'HeartPulse'
  },
  {
    id: 'events-venues',
    name: 'Events, Venues & Exhibitions',
    description: 'Short-term and large-scale crowd cordoning, VIP protection, ticket validation, baggage scanning, and emergency egress routing.',
    keyRisksAddressed: ['Stampedes and overcrowding', 'VIP security breaches', 'Gate crashers', 'Disputes at ticketing gates'],
    recommendedServices: ['Event Security Management', 'Bouncer Squad', 'Access Screening Teams'],
    typicalShiftSetup: 'Deployments sized dynamically from 4-hour evening banquets to 7-day multi-hall trade fairs.',
    icon: 'Sparkles'
  }
];

export const JOB_VACANCIES: JobVacancy[] = [
  {
    id: 'security-guard-general',
    title: 'Security Guard (Manned Guarding)',
    type: 'Full-Time / Rotational Shifts',
    location: 'Guwahati & District Deployments across Assam',
    openings: 25,
    minExperience: 'Freshers welcome (Ex-servicemen / Trained guards given priority)',
    eligibility: [
      'Minimum educational qualification: 8th or 10th Standard pass',
      'Age: 20 to 45 years',
      'Minimum Height: 5 ft 6 inches (relaxed as per regional guidelines)',
      'Clear police character record with clean background verification',
      'Basic knowledge of Assamese and Hindi (English is an added bonus)'
    ],
    responsibilities: [
      'Performing gate duty, register entries, and visitor screening',
      'Conducting periodic rounds of designated site perimeters',
      'Reporting any incident or anomaly immediately to Field Supervisor',
      'Maintaining crisp turnout, punctuality, and disciplined conduct'
    ]
  },
  {
    id: 'security-supervisor-field',
    title: 'Field Security Supervisor',
    type: 'Full-Time (Field Duty with Mobile Allowance)',
    location: 'Guwahati / Upper Assam / Lower Assam Zones',
    openings: 4,
    minExperience: '2+ years experience in private security supervision or NCC/Armed forces background',
    eligibility: [
      'Minimum qualification: 10+2 / Higher Secondary or Graduate',
      'Valid two-wheeler driving license',
      'Strong leadership, communication, and report-writing skills',
      'Proficiency in smartphone app usage and operational reporting'
    ],
    responsibilities: [
      'Supervising 15-20 guard posts within assigned geographical cluster',
      'Conducting surprise day and night audits; inspecting uniform turnout',
      'Resolving immediate on-site issues and maintaining client communication',
      'Managing shift rosters and emergency replacement deployments'
    ]
  },
  {
    id: 'armed-security-guard',
    title: 'Armed Security Guard (Ex-Servicemen)',
    type: 'Full-Time',
    location: 'Bank Hubs, Cash Depots, Critical Assets across Assam',
    openings: 5,
    minExperience: 'Discharged from Army / Paramilitary / Police with exemplary service record',
    eligibility: [
      'Valid All Assam / All India Arms License for designated weapon',
      'Discharge book verifying clean conduct',
      'Age limit up to 52 years with medical fitness certification',
      'High level of firearm safety awareness and discipline'
    ],
    responsibilities: [
      'Cash van escort or stationary armed sentinel at financial institutions',
      'Highest state of weapon vigilance and defense alertness',
      'Strict adherence to statutory arms handling rules and firing protocols'
    ]
  },
  {
    id: 'facility-housekeeping-staff',
    title: 'Housekeeping & Facility Attendant',
    type: 'Full-Time / Day Shift',
    location: 'Commercial Offices & Complexes, Guwahati',
    openings: 10,
    minExperience: '6 months to 1 year prior experience in corporate or hospital cleaning',
    eligibility: [
      'Age: 18 to 40 years',
      'Knowledge of basic sanitation chemicals, mopping, and vacuum machines',
      'Courteous, honest, and hardworking'
    ],
    responsibilities: [
      'Daily dusting, mopping, and vacuum cleaning of office premises',
      'Maintaining washroom hygiene and refilling consumables on schedule',
      'Pantry and refreshment service support as required by the client'
    ]
  }
];

export const OWNER_VERIFICATION_CHECKLIST: VerificationChecklistItem[] = [
  {
    id: 'chk-psara',
    title: 'PSARA License Number & Certificate',
    category: 'legal',
    description: 'Provide the official PSARA License registration number issued by the Controlling Authority, Home Department, Government of Assam.',
    currentStatus: 'pending_owner_verification',
    placeholderValue: 'PSARA/AS/XXXX/202X [Awaiting Owner Input]',
    actionRequired: 'Upload copy of PSARA grant order and input license expiry date.'
  },
  {
    id: 'chk-gst',
    title: 'GSTIN & PAN Details',
    category: 'legal',
    description: 'GST Identification Number required for standard B2B tax invoicing (18% GST under security & facility services).',
    currentStatus: 'pending_owner_verification',
    placeholderValue: '18XXXXXXXXXX1ZX (State code 18 for Assam)',
    actionRequired: 'Provide registered 15-digit GSTIN and company PAN card.'
  },
  {
    id: 'chk-phone',
    title: 'Primary Hotline & Operations Numbers',
    category: 'contact',
    description: 'Verified mobile and landline numbers for corporate enquiries and 24/7 duty desk.',
    currentStatus: 'configured',
    placeholderValue: '+91 94350 12345 / +91 98640 67890 (Staged defaults)',
    actionRequired: 'Confirm if active SIM numbers or if telecom toll-free is to be linked.'
  },
  {
    id: 'chk-whatsapp',
    title: 'Official WhatsApp Business Number',
    category: 'contact',
    description: 'Number powering the floating chat button and pre-filled consultation enquiries.',
    currentStatus: 'configured',
    placeholderValue: '+91 94350 12345 (Staged default with instant message)',
    actionRequired: 'Confirm dedicated WhatsApp Business smartphone handset.'
  },
  {
    id: 'chk-maps',
    title: 'Google Business Profile & Map Pin (CID)',
    category: 'digital',
    description: 'Exact Google Maps listing URL and verified CID for Christian Basti / G.S. Road, Guwahati headquarters.',
    currentStatus: 'configured',
    placeholderValue: 'Christian Basti, G.S. Road, Guwahati 781005 (Interactive embed configured)',
    actionRequired: 'Provide specific Google Maps Place Share link or Plus Code if relocation has occurred.'
  },
  {
    id: 'chk-bank',
    title: 'Bank Account & UPI Details for Quotations',
    category: 'legal',
    description: 'Current Account Name, Account Number, IFSC, and Bank Branch for monthly guard invoicing.',
    currentStatus: 'pending_owner_verification',
    placeholderValue: 'Account: Assam Security Intelligent Service [Awaiting Details]',
    actionRequired: 'Provide cancelled cheque or bank mandate letter.'
  },
  {
    id: 'chk-email',
    title: 'Official Domain Email MX Setup',
    category: 'digital',
    description: 'Email hosting for enquiry@assamsecurity.in and careers@assamsecurity.in to receive web leads.',
    currentStatus: 'pending_owner_verification',
    placeholderValue: 'enquiry@assamsecurity.in [Awaiting MX records routing to Gmail/Outlook]',
    actionRequired: 'Map DNS MX records to Zoho / Google Workspace / cPanel.'
  }
];
