import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User, FileText, Briefcase, Globe, BookOpen, Mail, Github, Twitter, Instagram, Linkedin,
  Download, MapPin, Monitor, Cloud, Shield, Code, Filter
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
            src="/profile.jpg" 
            alt="Pascal Attama" 
            className="w-full h-full rounded-3xl object-cover border-4 border-blue-500"
          />
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-3 border-gray-800"></div>
        </motion.div>
        
        <h1 className="text-2xl font-bold text-white mb-2">Pascal Attama</h1>
        <p className="text-gray-400 text-sm mb-6 bg-gray-700/50 rounded-full px-4 py-2 inline-block">
          Cloud Engineer | DevOps | FinOps
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
            <span className="text-white">attamapascalpedro@gmail.com ✉</span>
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
        
        <a 
          href="/Pascal_Attama_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-200 font-medium"
        >
          <Download size={18} />
          📄 Download CV
        </a>
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
      icon: Cloud,
      title: 'Cloud Engineer',
      description: 'I design, deploy and maintain scalable, secure and cost-effective cloud infrastructure and application'
    },
    {
      icon: Monitor,
      title: 'DevOps',
      description: 'I enjoy to improve the speed and quality of delivery, automate and achieve CI/CD'
    },
    {
      icon: Monitor,
      title: 'FinOps',
      description: 'I enjoy optimizing and reducing cloud spend through visibility,automation, and architectural best practices'
    },
    {
      icon: Shield,
      title: 'Infrastructure Security',
      description: 'I implement IAM, security groups, VPC flow logs, and GuardDuty to secure AWS environments'
    },
    {
      icon: Code,
      title: 'Infrastructure as Code',
      description: 'I enjoy automating cloud provisioning using Terraform and Ansible for consistent deployment'
    }
  ];

  const clients = [
    { name: 'Upwork', logo: '🔤' },
    { name: 'Linkedln', logo: '😊' }
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
            I'm a results-driven Cloud Engineer with a strong background in cloud architecture,
            automation, networking, and FinOps. 
          </p>
          <p>
            I have experience working with Cloud services, Infrastructure as Code (IaC), and cloud security tools, with a track record of optimizing cloud infrastructure, 
            reducing operational costs, and improving system scalability. 
            I have led cloud deployments and migrations on the AWS and various cloud infrastructure. 
            I optimize AWS infrastructure to reduce costs, enhanced efficiency, automated and delivered resilient deployments by leveraging tools such as Terraform, Ansible, Docker, Kubernetes, and Python.
          </p>

                    
          <p>
            With a Bachelor's degree in Physics & Astronomy from the University of Nigeria, it sharpened my analytical thinking, data analysis, and problem-solving skills. 
            These strengths empowers me as a Cloud Engineer to tackle complex infrastructure challenges, apply evidence-based decisions, and build efficient, scalable systems that drive innovation across disciplines. 
            I am committed to continuous learning and professional 
            growth. 
          </p>
          <p>
            I am passionate about bridging the gaps between business and technology by building resilient cloud solutions and mentoring teams to drive cloud adoption and innovation.
            I am seeking opportunities to leverage my skills and contribute to the success of Cloud, FinOps and DevOps projects for organizational's sucess.
          </p>
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
          <p className="text-gray-500 text-sm">
            All systems are operational. 
            <span className="text-green-400 mx-1">online</span> | 
            <span className="text-green-400 mx-1">uptime</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Portfolio Page Component
export const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Certifications', 'Project', 'Badge'];
  
  const portfolioItems = [
    {
      id: 1,
      title: 'AWS Certified Cloud Practitioner',
      category: 'Certifications',
      image: 'https://images.pexels.com/photos/8830665/pexels-photo-8830665.jpeg',
      tags: ['Certified', 'Verify']
    },
    {
      id: 2,
      title: 'DTS 2020 - CCNA Cybersecurity Operations',
      category: 'Certifications',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8Ymx1ZXwxNzUxNDAyMDc2fDA&ixlib=rb-4.1.0&q=85',
      tags: ['Certificate']
    },
    {
      id: 3,
      title: 'Dicoding - Cloud Practitioner Essentials',
      category: 'Certifications',
      image: 'https://images.pexels.com/photos/8532850/pexels-photo-8532850.jpeg',
      tags: ['Certificate']
    },
    {
      id: 4,
      title: 'Transletin Website',
      category: 'Project',
      image: 'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxuZXR3b3JrJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHxibHVlfDE3NTE0MDIwODl8MA&ixlib=rb-4.1.0&q=85',
      tags: ['Website']
    },
    
    {
      id: 6,
      title: 'ThingsBin Web and Application IoT',
      category: 'Project',
      image: 'https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg',
      tags: ['Github']
    },
    {
      id: 7,
      title: 'CCNA Introduction to Networks',
      category: 'Certifications',
      image: 'https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg',
      tags: ['Verify']
    },
    {
      id: 8,
      title: 'NPM Card (npx adityacprtm)',
      category: 'Project',
      image: 'https://images.unsplash.com/photo-1660644808226-a5b2e691fc51?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxjeWJlcnNlY3VyaXR5fGVufDB8fHxibHVlfDE3NTE0MDIxMDB8MA&ixlib=rb-4.1.0&q=85',
      tags: ['Project']
    },
    {
      id: 9,
      title: 'Mini-link',
      category: 'Project',
      image: 'https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5fGVufDB8fHxibHVlfDE3NTE0MDIxMDB8MA&ixlib=rb-4.1.0&q=85',
      tags: ['Website', 'Github']
    },
    {
      id: 10,
      title: 'High-Availability Network Design',
      category: 'Project',
      image: 'https://images.unsplash.com/photo-1598149852075-62ed16a6edb2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxuZXR3b3JrJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHxibHVlfDE3NTE0MDIwODl8MA&ixlib=rb-4.1.0&q=85',
      tags: ['Project']
    },
    {
    id: 1,
    title: 'PedroOps – FinOps SaaS',
    category: 'Project',
    image: 'https://yourdomain.com/pedroops-screenshot.jpg',
    tags: ['FinOps', 'React', 'AWS']
  },
  {
    id: 2,
    title: 'Secure Flask Microservice',
    category: 'Project',
    image: 'https://yourdomain.com/flask-api.jpg',
    tags: ['Auth0', 'Docker', 'AWS']
  },
  {
    id: 3,
    title: 'AWS Certified Cloud Practitioner',
    category: 'Certifications',
    image: 'https://yourdomain.com/aws-cert.jpg',
    tags: ['Certification']
  },
  {
    id: 4,
    title: 'HCIA - Huawei Routing & Switching',
    category: 'Certifications',
    image: 'https://yourdomain.com/hcia.jpg',
    tags: ['Networking']
  }
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
          <motion.div
            key={item.id}
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
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Resume Page Component
export const ResumePage = () => {
  const experiences = [
    {
      title: 'Cloud Engineer',
      company: 'Trakatel Limited',
      period: '2022 - Present',
      description: 'Designed AWS architectures, optimized cloud costs, implemented IaC, and led DevOps automation.'
    },
    {
      title: 'Technical Support Engineer',
      company: 'Unitech Global Resources',
      period: '2020 - 2022',
      description: 'Provided Tier-2 support, automated ticket workflows, and improved cloud deployment efficiency..'
    },
    {
      title: 'Network Engineer',
      company: 'Cambridge Broadband Networks',
      period: '2016 - 2020',
      description: 'Implemented L1–L3 Enterprise Network infrastructure, VLANs, and secured network operations for enterprise clients'
    }
  ];

  const skills = [
    { name: 'AWS & Cloud Architecture', level: 90 },
    { name: 'Linux', level: 90 },
    { name: 'Terraform & Ansible', level: 85 },
    { name: 'Docker & Kubernetes', level: 85 },
    { name: 'IP Networks & VPCs', level: 80 },
    { name: 'Git', level: 70 },
    { name: 'Python & Bash Scripting', level: 70 },
    
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-white mb-8">Resume</h2>
      
      {/* Experience Section */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-6">Experience</h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-white font-semibold">{exp.title}</h4>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>
              <p className="text-blue-400 mb-2">{exp.company}</p>
              <p className="text-gray-300 text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6">Skills</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-700/50 rounded-xl p-4 border border-gray-600/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <motion.div 
                  className="bg-blue-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Blog Page Component
export const BlogPage = () => {
  const blogPosts = [
    {
      title: 'Getting Started with Kubernetes',
      excerpt: 'A comprehensive guide to container orchestration...',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      title: 'AWS Best Practices for DevOps',
      excerpt: 'Essential tips for managing cloud infrastructure...',
      date: '2024-01-10',
      readTime: '7 min read'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-white mb-8">Blog</h2>
      
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/50 hover:bg-gray-700/70 transition-colors cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-white font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

// Contact Page Component
export const ContactPage = () => {
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
              <span>attamapascalpedro@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-400" size={20} />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
        
        <motion.form 
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
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
      </div>
    </motion.div>
  );
};