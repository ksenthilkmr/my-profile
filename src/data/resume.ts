import { withBase } from '../utils/basePath';

export const profile = {
  name: 'Senthil Kumar K',
  title: 'Senior Java / Spring Boot Engineer',
  location: 'Coimbatore, India',
  email: 'ksenthilkmr@gmail.com',
  phone: '+91 97385 63410',
  phoneHref: '+919738563410',
  resumeUrl: withBase("/Senthil_Kumar_Resume.pdf"),

  portrait: withBase("/senthil-portrait.jpg"),

  editorial: withBase("/dc92f432-3bb8-4f83-aba1-c6bee94027ee.jpg"),

  lede: 'Fourteen years designing and running the backend systems behind checkout, identity and fulfilment for retailers and telecoms — built on Java, Spring Boot and Kafka.'
};

export const summary: string[] = [
'Senior software engineer with 14+ years across Java, Spring Boot, microservices and cloud-native platforms. My work sits in the part of a product nobody sees and everybody depends on: order promising, checkout orchestration, authentication, fulfilment.',
'I have delivered for eCommerce, identity & access management, telecom and large enterprise platforms — designing scalable REST APIs, event-driven architectures on Kafka, containerised deployments with Docker and Kubernetes, and the CI/CD around them.',
'I work well inside Agile teams, take ownership of critical modules end to end, and stay close to production once the code ships.'];


export const facts: {label: string;value: string;}[] = [
{ label: 'Experience', value: '14+ years' },
{ label: 'Focus', value: 'Java · Spring Boot · Kafka' },
{ label: 'Domains', value: 'Retail · Identity · Telecom' },
{ label: 'Based in', value: 'Coimbatore, India' }];


export const marqueeTech: string[] = [
'Java 17',
'Spring Boot',
'Spring WebFlux',
'Apache Kafka',
'Kubernetes',
'Docker',
'AWS',
'OAuth2',
'OpenID Connect',
'PostgreSQL',
'MongoDB',
'Datadog',
'GitHub Actions',
'Project Reactor',
'Hibernate',
'Spring Batch'];


export type Role = {
  company: string;
  role: string;
  location: string;
  period: string;
  span: string;
  note: string;
};

export const roles: Role[] = [
{
  company: 'Tata Consultancy Services',
  role: 'Senior Software Engineer',
  location: 'Coimbatore, India',
  period: 'Feb 2023 — Mar 2025',
  span: '2 yrs',
  note: 'Led delivery on reactive eCommerce checkout services for Argos — orchestration, Kafka pipelines and production support for a high-traffic estate.'
},
{
  company: 'J Sainsbury PLC',
  role: 'Engineer',
  location: 'United Kingdom',
  period: 'May 2022 — Jan 2023',
  span: '9 mos',
  note: 'Built microservices for the Sainsbury’s Marketplace order promising platform, covering availability, pricing and partner fulfilment.'
},
{
  company: 'Torry Harris Business Solutions',
  role: 'Technical Lead',
  location: 'Bangalore, India',
  period: 'Mar 2011 — May 2022',
  span: '11 yrs',
  note: 'Eleven years across identity, telecom and enterprise integration programmes — from O2 Identity to SOAP/REST platforms and USSD/SMS gateways for global carriers.'
}];


export type Project = {
  index: string;
  name: string;
  subtitle: string;
  stack: string[];
  points: string[];
};

export const featuredProjects: Project[] = [
{
  index: '01',
  name: 'Sainsbury’s Marketplace',
  subtitle: 'Order Promising Platform',
  stack: [
  'Java 17',
  'Spring Boot',
  'Kafka',
  'Redis',
  'Docker',
  'Kubernetes',
  'AWS',
  'GitHub Actions',
  'Datadog'],

  points: [
  'Developed microservices for product availability, pricing and partner fulfilment.',
  'Implemented CI/CD pipelines and owned production deployments.',
  'Built monitoring dashboards in Datadog for live service health.']

},
{
  index: '02',
  name: 'Argos Checkout',
  subtitle: 'eCommerce Platform',
  stack: [
  'Java 17',
  'Spring WebFlux',
  'Project Reactor',
  'Kafka',
  'Docker',
  'Kubernetes',
  'AWS'],

  points: [
  'Built reactive checkout orchestration services.',
  'Designed Kafka producers and consumers for order processing.',
  'Supported high-traffic production systems.']

}];


export const supportingProjects: Project[] = [
{
  index: '03',
  name: 'O2 Identity',
  subtitle: 'Access & Registration',
  stack: ['Java 8', 'Spring', 'OAuth2', 'OpenID Connect', 'Groovy', 'Spock'],
  points: [
  'Developed authentication, registration and identity recovery modules.',
  'Implemented OAuth2 / OIDC-based security architecture.']

},
{
  index: '04',
  name: 'CCFW',
  subtitle: 'Computational Chemistry Framework',
  stack: ['Spring', 'Spring Batch', 'Apache CXF', 'Struts', 'Kerberos'],
  points: [
  'Developed SOAP and REST services for research workloads.',
  'Implemented Kerberos-based SSO and batch processing.']

}];


export const earlierWork = {
  clients: [
  'Millicom',
  'GBM Dubai',
  'Bahrain Government',
  'Mercedes Benz',
  'Tigo Ghana'],

  technologies:
  'Spring, Hibernate, J2EE, WebSphere, IBM WCM, USSD / SMS Gateways',
  role: 'Developer'
};

export const skillGroups: {label: string;items: string[];}[] = [
{ label: 'Languages', items: ['Java (8–17)', 'Shell Script'] },
{
  label: 'Frameworks',
  items: [
  'Spring Boot',
  'Spring MVC',
  'Spring WebFlux',
  'Spring Security',
  'Hibernate',
  'Spring Batch']

},
{
  label: 'Architecture',
  items: ['Microservices', 'Reactive programming', 'Event-driven systems']
},
{ label: 'Messaging', items: ['Apache Kafka'] },
{
  label: 'DevOps',
  items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Maven', 'Gradle']
},
{ label: 'Cloud & Monitoring', items: ['AWS (EC2, S3, IAM)', 'Datadog'] },
{ label: 'Security', items: ['OAuth2', 'OpenID Connect'] },
{
  label: 'Databases',
  items: ['Oracle', 'PostgreSQL', 'MySQL', 'DB2', 'MongoDB']
},
{ label: 'Low-Code & Commerce', items: ['OutSystems', 'Oracle ATG'] }];


export const credentials = {
  certification: {
    name: 'Sun Certified Java Associate (SCJA)',
    issuer: 'Sun Microsystems'
  },
  education: {
    degree: 'Bachelor of Engineering, Electrical & Electronics',
    school: 'Sona College of Technology',
    year: '2008'
  }
};

export const footerGroups: {
  title: string;
  links: {label: string;href: string;external?: boolean;}[];
}[] = [
{
  title: 'Profile',
  links: [
  { label: 'About', href: '#profile' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#expertise' }]

},
{
  title: 'Work',
  links: [
  { label: 'Sainsbury’s Marketplace', href: '#work' },
  { label: 'Argos Checkout', href: '#work' },
  { label: 'O2 Identity', href: '#work' }]

},
{
  title: 'Elsewhere',
  links: [
  { label: 'Email', href: 'mailto:ksenthilkmr@gmail.com', external: true },
  { label: 'Call', href: 'tel:+919738563410', external: true }]

}];


export const navLinks: {label: string;href: string;}[] = [
{ label: 'Profile', href: '#profile' },
{ label: 'Experience', href: '#experience' },
{ label: 'Work', href: '#work' },
{ label: 'Expertise', href: '#expertise' },
{ label: 'Contact', href: '#contact' }];