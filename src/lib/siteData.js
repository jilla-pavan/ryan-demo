export const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Products', to: '/products' },
  { label: 'Industries', to: '/industries' },
  { label: 'Quality', to: '/quality' },
  { label: 'Careers', to: '/careers' },
]

export const COMPANY = {
  name: 'Ryan Technology India',
  legalName: 'Ryan Technology India Pvt. Ltd.',
  tagline: 'Precision electronics manufacturing, engineered to spec.',
  phone: '+91 80 4567 8900',
  email: 'info@ryantechnology.in',
  address: 'Plot 42, Electronics Manufacturing Cluster, Bengaluru, Karnataka 560100, India',
  founded: 1998,
}

export const CAPABILITIES = [
  {
    id: 'cable-harness',
    title: 'Cable & Wire Harness Assembly',
    summary: 'Custom-engineered harnesses built to IPC/WHMA-A-620 with full traceability from cut to crimp.',
    specs: ['24–2 AWG range', 'IPC/WHMA-A-620 Class 2 & 3', 'Automated & hand-crimp lines'],
  },
  {
    id: 'box-build',
    title: 'Box Build & System Integration',
    summary: 'Complete electromechanical assembly — from PCB integration to final enclosure and functional test.',
    specs: ['Electromechanical integration', 'Functional & burn-in test', 'Configurable low-to-mid volume runs'],
  },
  {
    id: 'pcb-assembly',
    title: 'PCB Assembly (SMT & THT)',
    summary: 'High-mix SMT and through-hole lines with AOI and X-ray inspection at every stage.',
    specs: ['01005 to BGA placement', 'AOI + X-ray inspection', 'Lead-free & mixed processes'],
  },
  {
    id: 'engineering',
    title: 'Design & Engineering Support',
    summary: 'DFM/DFA review, prototyping, and process engineering that de-risks your build before it starts.',
    specs: ['DFM / DFA review', 'Rapid prototyping', 'Process & test engineering'],
  },
]

export const INDUSTRIES = [
  { id: 'industrial', title: 'Industrial Automation', description: 'Control panels, sensor harnesses, and machine-interface assemblies built for continuous-duty environments.' },
  { id: 'medical', title: 'Medical Devices', description: 'ISO 13485-aligned processes for cable assemblies and box builds used in diagnostic and patient-facing equipment.' },
  { id: 'automotive', title: 'Automotive & Mobility', description: 'High-reliability harnesses engineered to withstand vibration, thermal cycling, and long duty cycles.' },
  { id: 'energy', title: 'Energy & Power', description: 'Assemblies rated for renewable energy systems, power distribution, and grid infrastructure.' },
  { id: 'telecom', title: 'Telecom & Networking', description: 'Precision interconnects and enclosures for network infrastructure and data communication hardware.' },
  { id: 'defense', title: 'Defense & Aerospace', description: 'Rigorously tested assemblies built to mission-critical tolerances and full documentation trails.' },
]

export const PROCESS_STEPS = [
  { step: '01', title: 'Design Review', description: 'DFM/DFA analysis identifies risk before tooling begins.' },
  { step: '02', title: 'Prototyping', description: 'Functional prototypes validate fit, form, and process.' },
  { step: '03', title: 'Process Engineering', description: 'Work instructions, fixtures, and test plans are locked.' },
  { step: '04', title: 'Production', description: 'Scaled manufacturing with in-line quality checkpoints.' },
  { step: '05', title: 'Test & Inspection', description: 'AOI, continuity, and functional test on every unit.' },
  { step: '06', title: 'Fulfillment', description: 'Packaging, traceability documentation, and on-time delivery.' },
]

export const CERTIFICATIONS = [
  { code: 'ISO 9001:2015', label: 'Quality Management' },
  { code: 'ISO 14001:2015', label: 'Environmental Management' },
  { code: 'IATF 16949', label: 'Automotive Quality' },
  { code: 'IPC/WHMA-A-620', label: 'Wire Harness Standard' },
  { code: 'ISO 13485', label: 'Medical Devices' },
  { code: 'RoHS / REACH', label: 'Compliance' },
]

export const METRICS = [
  { value: '25+', label: 'Years in Manufacturing' },
  { value: '450K', label: 'Sq. Ft. Facility' },
  { value: '99.6%', label: 'On-Time Delivery' },
  { value: '<0.1%', label: 'Field Return Rate' },
]

export const PRODUCTS = [
  { id: 'custom-harness', title: 'Custom Cable Harnesses', description: 'Application-specific harness assemblies engineered from schematic to shipment.' },
  { id: 'connector-assy', title: 'Connector Assemblies', description: 'Precision-terminated connector solutions across circular, rectangular, and board-to-board formats.' },
  { id: 'box-build-systems', title: 'Box Build Systems', description: 'Fully integrated electromechanical systems, tested and ready to deploy.' },
  { id: 'panel-assy', title: 'Control Panel Assemblies', description: 'Industrial control panels wired, labeled, and tested to your electrical schematic.' },
]
