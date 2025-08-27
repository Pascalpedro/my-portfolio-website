import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import axios from 'axios';
import {
  User, FileText, Briefcase, Globe, BookOpen, Mail, Github, Twitter, Instagram, Linkedin,
  Download, MapPin, Monitor, Cloud, Sliders, Shield, ShieldCheck, DollarSign, ClipboardCheck, Code, Filter
} from 'lucide-react';

// Geometric Background Component
export const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Top Left Large Geometric Cluster */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px]"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <div className="relative w-full h-full">
          {/* Main orange triangle */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 transform rotate-45 rounded-lg opacity-15 clip-triangle"></div>
          {/* Cyan triangle */}
          <div className="absolute inset-8 bg-gradient-to-br from-cyan-400 via-teal-500 to-cyan-600 transform -rotate-12 rounded-lg opacity-20 clip-triangle"></div>
          {/* Yellow triangle */}
          <div className="absolute inset-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-600 transform rotate-12 rounded-lg opacity-15 clip-triangle"></div>
          {/* Small red accent */}
          <div className="absolute inset-24 bg-gradient-to-br from-red-500 to-red-600 transform rotate-45 rounded-lg opacity-25 clip-triangle"></div>
        </div>
      </motion.div>

      {/* Bottom Right Geometric Cluster */}
      <motion.div
        className="absolute -bottom-32 -right-32 w-[450px] h-[450px]"
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <div className="relative w-full h-full">
          {/* Main teal triangle */}
          <div className="absolute inset-0 bg-gradient-to-tl from-teal-500 via-cyan-500 to-teal-600 transform rotate-45 rounded-lg opacity-18 clip-triangle"></div>
          {/* Purple triangle */}
          <div className="absolute inset-6 bg-gradient-to-tl from-purple-500 via-blue-500 to-purple-600 transform -rotate-30 rounded-lg opacity-15 clip-triangle"></div>
          {/* Orange accent */}
          <div className="absolute inset-12 bg-gradient-to-tl from-orange-500 to-orange-600 transform rotate-12 rounded-lg opacity-20 clip-triangle"></div>
        </div>
      </motion.div>

      {/* Top Right Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-[300px] h-[300px]"
        animate={{ 
          rotate: [0, -360],
          y: [-15, 15, -15],
          x: [-10, 10, -10]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <div className="relative w-full h-full">
          {/* Cyan floating triangle */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-500 transform rotate-45 rounded-lg opacity-12 clip-triangle"></div>
          {/* Small orange accent */}
          <div className="absolute inset-8 bg-gradient-to-br from-orange-400 to-red-500 transform -rotate-30 rounded-lg opacity-15 clip-triangle"></div>
        </div>
      </motion.div>

      {/* Bottom Left Supporting Elements */}
      <motion.div
        className="absolute bottom-40 left-20 w-[250px] h-[250px]"
        animate={{ 
          rotate: [180, -180],
          scale: [0.8, 1, 0.8]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <div className="relative w-full h-full">
          {/* Small geometric elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 transform rotate-45 rounded-lg opacity-10 clip-triangle"></div>
          <div className="absolute inset-6 bg-gradient-to-br from-teal-500 to-cyan-500 transform -rotate-45 rounded-lg opacity-12 clip-triangle"></div>
        </div>
      </motion.div>
    </div>
  );
};

// Header Component
export const Header = () => {
  return (
    <motion.div 
      className="bg-gray-800/30 backdrop-blur-md rounded-3xl p-6 border border-gray-700/50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <motion.div 
          className="relative w-28 h-28 mx-auto mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src="/profile.png" 
            alt="Pascal Attama" 
            className="w-full h-full rounded-3xl object-cover border-4 border-blue-500"
          />
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-3 border-gray-800"></div>
        </motion.div>
        
        <h1 className="text-2xl font-bold text-white mb-2">Pascal Attama</h1>
        <p className="text-gray-400 text-sm mb-6 bg-gray-700/50 rounded-full px-4 py-2 inline-block">
          Cloud Security & FinOps Specialist
        </p>

        <div className="flex justify-center space-x-2 mb-6">
          <motion.a
            href="https://github.com/Pascalpedro"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-700/60 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-600/60 transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            href="https://X.com/Pascalpedro"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-700/60 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-600/60 transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Twitter size={18} />
          </motion.a>
          <motion.a
            href="https://instagram.com/pascalpedro47"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-700/60 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-600/60 transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={18} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/pascal-attama"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-700/60 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-600/60 transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a
            href="https://credly.com/users/pascal-attama"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-700/60 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-600/60 transition-all duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe size={18} />
          </motion.a>        
        </div>

        
        <div className="space-y-4 text-sm border-t border-gray-700/50 pt-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 uppercase tracking-wider text-xs">EMAIL</span>
            <a 
              href="mailto:pascal.attama@pedroops.com" 
              className="text-blue-400 hover:underline transition duration-200"
            >
               Send Email ✉
            </a>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 uppercase tracking-wider text-xs">LOCATION</span>
            <span className="text-white flex items-center gap-1"> 📍 Lagos, Nigeria</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 uppercase tracking-wider text-xs">STATUS</span>
            <span className="text-green-400 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Online
            </span>
          </div>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="https://drive.google.com/file/d/159zBhrsYy2yOJ-aoZqtMvWlYC3DXrkYs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              if (typeof gtag !== 'undefined') {
                gtag('event', 'view_cv_clicked', {
                  event_category: 'CV',
                  event_label: 'View CV',
                });
              }
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
          >
            👀 View CV
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=159zBhrsYy2yOJ-aoZqtMvWlYC3DXrkYs"
            onClick={(e) => {
              e.stopPropagation();
              if (typeof gtag !== 'undefined') {
                gtag('event', 'download_cv_clicked', {
                  event_category: 'CV',
                  event_label: 'Download CV',
                });
               }
            }}
            className="bg-gray-700 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-600 transition"
          >
            ⬇️ Download CV
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Sidebar Navigation
export const Sidebar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'about', icon: User, label: 'ABOUT' },
    { id: 'resume', icon: FileText, label: 'RESUME' },
    { id: 'portfolio', icon: Briefcase, label: 'PORTFOLIO' },
    { id: 'blog', icon: BookOpen, label: 'BLOG' },
    { id: 'contact', icon: Mail, label: 'CONTACT' }
  ];

  return (
    <motion.div 
      className="bg-gray-800/30 backdrop-blur-md rounded-3xl p-6 border border-gray-700/50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex lg:flex-col gap-3">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 ${
              currentPage === item.id 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
            }`}
            whileHover={{ scale: 1.02, x: currentPage === item.id ? 0 : 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <item.icon size={22} />
            <span className="text-sm font-medium tracking-wider hidden lg:block">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

// About Page Component
export const AboutPage = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: 'Cloud Security',
      description: 'I secure cloud environments by implementing IAM best practices, encryption, GuardDuty, and audit logging to ensure compliance and reduce risk.'
    },
    {
      icon: DollarSign,
      title: 'FinOps',
      description: 'I optimize and reduce cloud spend through visibility, budgeting, tagging strategies, and cost forecasting using tools like AWS Budgets and Cost Explorer.'
    },
    {
      icon: Sliders,
      title: 'Cloud Governance',
      description: 'I align cloud operations with security and cost controls by designing policies for identity, access, tagging, and budgeting across teams and accounts.'
    },
    {
      icon: Cloud,
      title: 'Cloud Engineer',
      description: 'I design, deploy and maintain scalable, secure and cost-effective cloud infrastructure and application'
    },
    {
      icon: ClipboardCheck,
      title: 'Cloud Audit & Compliance',
      description: 'I perform cloud audits and generate compliance reports based on industry benchmarks like CIS AWS Foundations and SOC2 readiness.'
    },
    {
      icon: Code,
      title: 'Infrastructure as Code',
      description: 'I automate secure and repeatable infrastructure deployment using Terraform and CI/CD pipelines to enforce best practices at scale.'
    }
  ];

  const clients = [
    { name: 'Trakatel', logo: '✅' },
    {name: 'Upwork', logo: '🎯'},
    { name: 'Linkedln', logo: '🔤' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* About Me Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            I'm Pascal Attama — a <strong>cloud Security & FinOps Consultant</strong> helping businesses secure their cloud environments while maximizing every dollar spent. 
            I work with AWS, Azure, and hybrid cloud environments to design cloud infrastructures that are secure, cost-optimized, and governance-ready — so you can focus on growth without worrying about overspending or compliance gaps. 
          </p>
          <p>
            With a background in cloud networking and a strong focus on governance, I bring a <strong>unique blend of technical insight and financial accountability</strong> to cloud operations, and I have a proven track record of:
          </p>

          <ul>
            <li>💰 Cutting AWS costs through tagging strategies, budgets, automation, and proactive monitoring.</li>
            <li>🔐 Hardening security with IAM policies, compliance-ready configurations, and best practices.</li>
            <li>🔄 Automating infrastructure with Terraform & Ansible for faster, consistent deployments.</li>
            <li>📊 Build dashboards and reporting for both security and cost visibility.</li>
            <li>💼 Enforcing cloud governance frameworks that align with corporate and regulatory standards....</li>
          </ul>

          <p>Whether you need a <strong>one-time AWS cost audit, you’re a startup scaling fast, need an end-to-end cloud infrastructure management, an enterprise managing complex multi-account setups, or a business needing cloud cost visibility,</strong> I can help you:
          </p>
          
          <ul>
            <li>✅ Lock down your environment against risks</li>
            <li>✅ Control and predict your AWS spend </li>
            <li>✅ Build infrastructure that’s secure, efficient, and audit-ready </li>
          </ul>

          <p>🤝 Let's bridge the gaps between your <strong>business and technology... 💼</strong></p>
          
          <p>🚀 Let’s make your cloud infrastructure <strong>secure, efficient, and financially sustainable.</strong>.</p>

        </div>
      </div>

      {/* What I'm Doing Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-6">What I'm Doing</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(55, 65, 81, 0.7)' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                  <service.icon className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Clients Section */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Clients</h3>
        <div className="flex gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="text-2xl">{client.logo}</span>
              <span className="font-medium">{client.name}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-100 text-sm">&copy; {new Date().getFullYear()} PedroOps — All rights reserved.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Portfolio Page Component
export const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const filters = ['All', 'Certifications', 'Project', 'Badge'];
  
  const portfolioItems = [
    {
      id: 1,
      title: 'FinOps Certified Practitioner',
      issuer: 'FinOps Foundation',
      category: 'Certifications',
      image: '/finops.jpg',
      link: 'https://www.credly.com/badges/5e49abb3-6b74-4286-bb20-cdbb8a8ebc37/public_url',
      tags: ['FinOps', 'Cloud', 'Cost-Optimization']
    },
    {
      id: 2,
      title: 'Pascalpedro - My GitHub Proflie',
      issuer: 'GitHub',
      category: 'Project',
      image: '/github.png',
      link: 'https://github.com/Pascalpedro/Pascalpedro',
      tags: ['GitHub','CI/CD', 'Git', 'Markdown']
    },
    {
      id: 3,
      title: 'McKinsey.org Forward Program',
      issuer: 'McKinsey & Company',
      category: 'Certifications',
      image: '/McKinsey.jpg',
      link: 'https://www.credly.com/badges/472f077d-007c-4af5-bbb1-963c1512bfd0',
      tags: ['Collaboration', 'Agile', 'Team Leadership', 'Communication']
    },
    {
      id: 4,
      title: 'Network Support and Security',
      issuer: 'Cisco',
      category: 'Badge',
      image: '/NetSec.png',
      link: 'https://www.credly.com/badges/3d33f23c-4c34-408e-9b21-5e172d6e3191/',
      tags: ['Network', 'CyberSecurity', 'Firewalls']
    },
    {
      id: 5,
      title: 'Endpoint Security',
      issuer: 'Cisco',
      category: 'Badge',
      image: '/EndpointSecurity.png',
      link: 'https://www.credly.com/badges/82f7c4d1-f670-45d0-9a66-b0262c46bcff',
      tags: ['Network', 'CyberSecurity', 'Firewalls']
    },

    {
      id: 6,
      title: 'PedroOps - FinOps SaaS',
      issuer: 'PedroOps',
      category: 'Project',
      image: '/PedroOps.png',
      link: 'https://pedroops.com',
      tags: ['Saas', 'Cost-Optimization','Cloud']
    },
    {
      id: 7,
      title: 'Custodia - Secured Web-app',
      issuer: 'PedroOps',
      category: 'Project',
      image: '/custodia-logo.png',
      link: 'https://github.com/Pascalpedro/Custodia',
      tags: ['Microservice','Auth0', 'Ngrok', 'Nginx']
    },
    {
      id: 8,
      title: 'My-Portfolio - A Fullstack Project',
      issuer: 'PedroOps',
      category: 'Project',
      image: '/portfolio.png',
      link: 'https://github.com/Pascalpedro/my-portfolio-website',
      tags: ['React','FastAPI', 'MongoDB']
    },
    ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-white mb-6">Portfolio</h2>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.a
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => {
              if (item.category === 'Certifications') {
                window.open(item.link, '_blank');
              } else {
                setSelectedItem(item);
              }
            }}
            className="bg-gray-700/50 rounded-xl overflow-hidden border border-gray-600/50 group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-white font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3 italic">{item.issuer}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {(item.category !== 'Certifications') && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block mt-2 text-sm text-blue-400 hover:underline"
                  >
                     🔗 View More
                  </a>
              )}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Modal Popup for Project or Badge */}
      {selectedItem && (
        <Modal onClose={() => setSelectedItem(null)}>
          <div className="text-white p-4">
            <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
            <p className="italic text-sm text-gray-400 mb-2">{selectedItem.issuer}</p>
            <p className="text-gray-300 mb-4">{selectedItem.description}</p>
            <div className="flex flex-wrap gap-2">
              {selectedItem.tags.map((tag, index) => (
                <span key={index} className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          </Modal>
        )}
    </motion.div>
  );
};

  const getWidth = (level) => {
  switch (level) {
    case "Beginner": return "40%";
    case "Intermediate": return "70%";
    case "Advanced": return "90%";
    default: return "60%";
  }
};

// Resume Page Component
export const ResumePage = () => {
  const experiences = [
    {
      company: 'Trakatel Limited',
      role: 'Cloud Engineer',
      period: '2022 - Present',
      location: 'Lagos, Nigeria',
      responsibility: [
        'Designs and deploys secure, scalable AWS infrastructure, integrating hybrid-cloud connectivity while optimizing costs through FinOps best practices.',
        'Automates provisioning with Terraform and Ansible, improved container orchestration with Docker, ECS, and EKS, and strengthened cloud security with IAM, GuardDuty, and compliance frameworks.',
        'Delivers faster incident response with enhanced monitoring while mentoring teams to adopt cloud best practices.'
      ]
    },
    {
      role: 'Technical Support Engineer',
      company: 'Unitech Global Resources',
      period: '2020 - 2022',
      location: 'Lagos, Nigeria',
      responsibility: [
        'Provided Tier-2 technical support and Linux/Network administration, resolving 33% of issues on first contact and reducing MTTR across hybrid environments.',
        'Automated maintenance, scaling, and deployments using Bash, CronJobs, and serverless optimizations, improving efficiency by 25% and minimizing downtime. ',
        'Developed knowledge bases and documentation that streamlined troubleshooting and reduced escalations for long-term operational gains.'
      ] 
    },
    {
      role: 'Network Engineer',
      company: 'Cambridge Broadband Networks',
      period: '2016 - 2020',
      location: 'Lagos, Nigeria',
      responsibility: [
        'Designed and deployed secure, high-performance L1–L3 network infrastructures using Cisco, MikroTik, and Huawei devices, implementing BGP, OSPF, VLANs, and network segmentation best practices.',
        'Delivered Tier-2 network technical support with a 95% first-call resolution rate and reduced network resolution time, while leading enterprise network upgrades and wireless LAN deployments.',
        'Conducted detailed network surveys and simulations with Pathloss, Lucidchart, and GNS3 to ensure accurate design and successful implementation.'
      ]  
    }
  ];

  const education = [
    {
      institution: 'University of Nigeria',
      degree: 'Bachelor\'s degree',
      field: 'Physics and Astronomy',
      period: 'Nov 2011 - July 2015',
      location: 'Enugu, Nigeria'
    },
  ];

  const nonformalEducation = [
    {
      institution: 'McKinsey & Company - McKinsey',
      course: 'McKinsey Academy Forward and Advanced Program',
      period: 'July 2023 - Dec 2023',
      type: 'Online'
    },
  ];  

  const skills = [

    { name: 'AWS & Cloud Architecture', level: 'Advanced' },
    { name: 'Linux', level: "Advanced" },
    { name: 'Cloud Security & AWS IAM', level: 'Advanced' },
    { name: 'FinOps & Cost Optimization', level: 'Advanced' },
    { name: 'AWS Budgets & Cost Explorer', level: 'Intermediate' },
    { name: 'AWS GuardDuty & KMS', level: 'Intermediate' },
    { name: 'AWS Config & Cloud Audit', level: 'Intermediate' },
    { name: 'Security Hardening & Governance', level: 'Intermediate' },
    { name: 'Terraform & Ansible', level: 'Intermediate' },
    { name: 'Cloud Cost Monitoring', level: 'Intermediate' },
    {name:  'JSON & YAML', level: 'Intermediate'},
    { name: 'Docker & K8s', level: "Intermediate" },
    { name: 'IP Networks & VPCs', level: "Intermediate" },
    { name: 'Git & GitHub', level: "Intermediate" },
    { name: 'Python & Bash', level: "Intermediate" },
    
  ];

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{name}</span>
        <span className="text-sm text-blue-300">{level}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700"
          style={{ width: getWidth(level) }}
        ></div>
      </div>
    </div>
  
  );


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold text-white mb-8">Resume</h2>
      
      {/* Experience Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="text-yellow-500" size={24} />
          <h3 className="text-xl font-bold text-white mb-6">Experience</h3>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-1-2 border-gray-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Blue dot indicator */}
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-800"></div>
              
              <div className="space-y-3">
                <div>
 <h4 className="text-white font-semibold text-lg">
                     <span className="text-blue-400">{exp.company}</span> as {exp.role}
                                     </h4>
                   <p className="text-gray-400 text-sm">{exp.period}</p>
                 </div>
                
                <div className="space-y-2">
                  {Array.isArray(exp.responsibility) ? (
                    exp.responsibility.map((responsibility, respIndex) => (
                    <p key={respIndex} className="text-gray-300 text-sm leading-relaxed">
                      • {responsibility}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-300 text-sm leading-relaxed">
                    • {exp.responsibility}
                  </p>
                )}

                </div>
                
                <p className="text-gray-500 text-sm italic">{exp.location}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="text-yellow-500" size={24} />
          <h3 className="text-xl font-bold text-white">Education</h3>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-gray-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: (experiences.length + index) * 0.1 }}
            >
              {/* Blue dot indicator */}
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-800"></div>
              
              <div className="space-y-2">
                <h4 className="text-blue-400 font-semibold">{edu.institution}</h4>
                <p className="text-gray-400 text-sm">{edu.period}</p>
                <p className="text-gray-300 text-sm">{edu.field}</p>
                <p className="text-gray-500 text-sm italic">{edu.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Nonformal Education Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="text-yellow-500" size={24} />
          <h3 className="text-xl font-bold text-white">Non-formal Education</h3>
        </div>
        
        <div className="space-y-6">
          {nonformalEducation.map((course, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-gray-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: (experiences.length + education.length + index) * 0.1 }}
            >
              {/* Blue dot indicator */}
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-800"></div>
              
              <div className="space-y-2">
                <h4 className="text-blue-400 font-semibold">{course.institution}</h4>
                <p className="text-gray-400 text-sm">{course.period}</p>
                <p className="text-gray-300 text-sm">{course.course}</p>
                <p className="text-gray-500 text-sm italic">{course.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-white mb-6">Skills</h3>
        {skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} level={skill.level} />
        ))}
      </div>


    </motion.div>
  );
};

// Blog Page Component
export const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Stepping into Ubuntu...',
      summary: 'How to Setup Ubuntu Linux on a VirtualBox...',
      date: '2024-05-17',
      link: 'https://medium.com/@attamapascalpedro/how-to-setup-ubuntu-linux-on-a-virtualbox-edd9ca9fe5ff',
      image: '/blog-ubuntu.PNG',
      tags: ["Linux", "Ubuntu","Virtualization"],
    },
    {
      id: 2,
      title: 'My Full-Stack Cloud Portfolio…',
      summary: 'Combining React + FastAPI + MongoDB with CI/CD and cloud hosting practices!!!...',
      date: '2025-07-25',
      link: 'https://medium.com/@attamapascalpedro/building-my-portfolio-with-react-fastapi-mongodb-a-full-stack-walkthrough-1d626633f67f',
      image: '/blog-portfolio.PNG',
      tags: ["Cloud", "FastAPI-Python", "React-NodeJS"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold text-white mb-6">Blog</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-gray-700/50 rounded-xl overflow-hidden border border-gray-600/50 group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Blog Thumbnail */}
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
             <div className="absolute top-4 left-4">
               <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                 Blog
               </span>
             </div>
           </div>

           {/* Content Section */}
           <div className="p-6">
             <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">
               {post.title}
             </h3>
             <p className="text-gray-400 text-sm mb-2 italic">
               {new Date(post.date).toDateString()}
             </p>
             <p className="text-gray-300 text-sm mb-4">{post.summary}</p>
  
             {/* tags */}
             <div className="flex flex-wrap gap-2 mb-4">
               {post.tags.map((tag, tagindex) => (
                 <span
                   key={tagindex}
                   className="bg-blue-600/20 text-blue-400 text-xs px-2 py-1 rounded"
                 >
                   {tag}
                 </span>
               ))}
             </div>

             {/* Read More Link */}
             <a
               href={post.link}
               target="_blank"
               rel="noopener noreferrer"
               className="text-sm text-blue-400 hover:underline"
             >
                🔗 Read More
             </a>
           </div>
         </motion.div>
       ))}
     </div>
    </motion.div>
  );
};

// Contact Page Component

export const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const [status, setStatus] = useState(null); // For success/error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields ❗");
      return;
    }
    
    setStatus("Sending...");

    try {
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/contact`, 
          formData
        );
      setStatus('Message sent successfully ✅');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message..... Something went wrong!!! ❌');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-white mb-8">Contact</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-400" size={20} />
              <span>pascal.attama@pedroops.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-400" size={20} />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          ></textarea>
          <motion.button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {status && (
          <p className="text-sm text-center text-blue-400 mt-4">
            {status}
          </p>
        )}
      </div>
    </motion.div>
  );
};