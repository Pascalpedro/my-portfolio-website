import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  FileText, 
  Briefcase, 
  BookOpen, 
  Mail, 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Download,
  MapPin,
  Calendar,
  ExternalLink,
  Monitor,
  Cloud,
  Shield,
  Code,
  Filter
} from 'lucide-react';

// Geometric Background Component
export const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 transform rotate-45 rounded-lg opacity-20"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-cyan-500 to-teal-500 transform -rotate-12 rounded-lg opacity-20"></div>
          <div className="absolute inset-8 bg-gradient-to-br from-yellow-500 to-orange-600 transform rotate-12 rounded-lg opacity-20"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80"
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500 to-blue-500 transform rotate-45 rounded-lg opacity-20"></div>
          <div className="absolute inset-4 bg-gradient-to-tl from-purple-500 to-pink-500 transform -rotate-12 rounded-lg opacity-20"></div>
          <div className="absolute inset-8 bg-gradient-to-tl from-teal-500 to-cyan-600 transform rotate-12 rounded-lg opacity-20"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-10 w-64 h-64"
        animate={{ 
          rotate: [0, -360],
          y: [-20, 20, -20]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 transform rotate-45 rounded-lg opacity-15"></div>
          <div className="absolute inset-6 bg-gradient-to-br from-blue-500 to-cyan-500 transform -rotate-30 rounded-lg opacity-15"></div>
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
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
            alt="Aditya Pratama" 
            className="w-full h-full rounded-3xl object-cover border-4 border-blue-500"
          />
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-3 border-gray-800"></div>
        </motion.div>
        
        <h1 className="text-2xl font-bold text-white mb-2">Aditya Pratama</h1>
        <p className="text-gray-400 text-sm mb-6 bg-gray-700/50 rounded-full px-4 py-2 inline-block">
          DevOps | SRE | Cloud Engineer
        </p>
        
        <div className="flex justify-center space-x-2 mb-6">
          {[Github, Twitter, Instagram, Linkedin].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="w-10 h-10 bg-gray-700/60 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-600/60 transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
        
        <div className="space-y-4 text-sm border-t border-gray-700/50 pt-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 uppercase tracking-wider text-xs">EMAIL</span>
            <span className="text-white">aditya@adityacprtm.dev ✉</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 uppercase tracking-wider text-xs">LOCATION</span>
            <span className="text-white flex items-center gap-1">
              📍 Jakarta, ID
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 uppercase tracking-wider text-xs">STATUS</span>
            <span className="text-green-400 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Online
            </span>
          </div>
        </div>
        
        <motion.button 
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-200 font-medium"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <Download size={18} />
          📄 CV Download
        </motion.button>
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
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex lg:flex-col gap-2">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
              currentPage === item.id 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <item.icon size={20} />
            <span className="text-sm font-medium hidden lg:block">{item.label}</span>
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
      icon: Monitor,
      title: 'DevOps',
      description: 'I enjoy to improve the speed and quality of delivery, automate and achieve CI/CD'
    },
    {
      icon: Cloud,
      title: 'Cloud Engineer',
      description: 'I enjoy design, secure and maintenance of an organization\'s cloud-based infrastructure and application'
    },
    {
      icon: Shield,
      title: 'SRE',
      description: 'I cultivate the processes and tools that ensure the scalability, reliability and availability of software systems'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'I enjoy learning software development either for personal or specific purposes'
    }
  ];

  const clients = [
    { name: 'Transletin', logo: '🔤' },
    { name: 'Duangbisini', logo: '😊' }
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
            A passionate and skilled DevOps, SRE, and Cloud Engineer with a strong background in infrastructure provisioning, 
            automation, and monitoring. I have completed and been certified by Google Cloud for Associate Cloud Engineer and AWS 
            for AWS Certified Cloud Practitioner.
          </p>
          <p>
            Have experience working with tools such as Jenkins, Terraform, and Ansible to streamline development processes and 
            ensure efficient code deployment. Proficient in managing performance and monitoring cloud infrastructure services on AWS and GCP, 
            as well as maintaining high availability in Kubernetes-based container clusters. Successfully implemented monitoring and 
            logging strategies, using Grafana and Datadog to ensure system performance and implemented GitOps for managing infrastructure as code. My expertise also includes integrating automation testing into 
            the CI/CD pipeline and developing scripts to automate tasks, improving efficiency and reducing manual effort.
          </p>
          <p>
            With a Bachelor's degree in Computer Science and a strong GPA, I am committed to continuous learning and professional 
            growth. I am seeking opportunities to leverage my skills and contribute to the success of DevOps, SRE and cloud 
            engineering projects.
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
      id: 5,
      title: 'TryHackMe Badge',
      category: 'Badge',
      image: 'https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB0ZXJtaW5hbHxlbnwwfHx8Ymx1ZXwxNzUxNDAyMDk1fDA&ixlib=rb-4.1.0&q=85',
      tags: ['Profile']
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
      title: 'Senior DevOps Engineer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading DevOps initiatives and cloud infrastructure management.'
    },
    {
      title: 'Cloud Engineer',
      company: 'Cloud Solutions Inc',
      period: '2020 - 2022',
      description: 'Designed and implemented cloud architectures on AWS and GCP.'
    }
  ];

  const skills = [
    { name: 'AWS', level: 90 },
    { name: 'Docker & Kubernetes', level: 85 },
    { name: 'Terraform', level: 80 },
    { name: 'Jenkins', level: 75 },
    { name: 'Python', level: 70 }
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
              <span>aditya@adityacprtm.dev</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-400" size={20} />
              <span>Jakarta, Indonesia</span>
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