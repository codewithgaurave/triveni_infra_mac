import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import construction2 from '../../assets/construction2.jpg';
import power from '../../assets/power-energy.jpg';
import chemical from '../../assets/chemical.jpg';
import infrastructure from '../../assets/infrastucture.jpg';
import { 
  CheckCircle, 
  Factory,
  Zap,
  Building2,
  Truck,
  Refrigerator,
  FlaskRound,
  Shield,
  Users,
  Target,
  Star,
  Phone,
  Mail
} from 'lucide-react';

const Industries = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Industries we serve based on PDF services
  const industries = [
    {
      icon: <Factory className="w-20 h-15 bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389]  rounded-sm" />,
      title: 'Manufacturing Industry',
      description: 'Comprehensive construction solutions for manufacturing plants, industrial units, and production facilities with precision engineering and efficient project execution.',
      services: [
        'Structural Fabrication',
        'Equipment Erection',
        'Piping Systems',
        'Electrical Works',
        'Painting Services'
      ],
      image: construction2,
  
    },
    {
      icon: <Zap className="w-20 h-15 bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389]  rounded-sm" />,
      title: 'Power & Energy',
      description: 'Specialized construction services for power plants, renewable energy projects, and electrical infrastructure with focus on safety and reliability.',
      services: [
        'ESP Commissioning',
        'Electrical Systems',
        'Structural Works',
        'Mechanical Equipment',
        'Support Structures'
      ],
      image: power,
    },
    {
      icon: <FlaskRound className="w-20 h-15 bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389]  rounded-sm" />,
      title: 'Chemical & Pharmaceutical',
      description: 'Precision construction for chemical plants and pharmaceutical facilities with strict quality standards and safety protocols.',
      services: [
        'HDPE Fabrication',
        'Piping Works',
        'Equipment Installation',
        'Safety Systems',
        'Quality Control'
      ],
      image: chemical,
    },
    {
      icon: <Building2 className="w-20 h-15 bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389]  rounded-sm" />,
      title: 'Infrastructure Development',
      description: 'Construction services for large-scale infrastructure projects including industrial parks and commercial complexes.',
      services: [
        'Heavy Structures',
        'Civil Works',
        'Electrical Infrastructure',
        'Mechanical Systems',
        'Project Management'
      ],
      image: infrastructure,
      
    }
  ];

  //// Our clients from PDF
  //const featuredClients = [
  //  {
  //    name: 'SUZLON',
  //    industry: 'Renewable Energy',
  //    description: 'Powering a Greener Tomorrow - Wind energy solutions',
  //    services: 'Structural Works & Electrical Systems'
  //  },
  //  {
  //    name: 'GEECO',
  //    industry: 'General Engineering',
  //    description: 'General Electrical & Engineering Company',
  //    services: 'Equipment Erection & Piping Systems'
  //  },
  //  {
  //    name: 'TEFUGEN',
  //    industry: 'Technology & Innovation',
  //    description: 'Technologies for Future Generation',
  //    services: 'Mechanical Equipment & ESP Commissioning'
  //  }
  //];

  // Industry solutions
  const industrySolutions = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety Compliance',
      description: 'Adherence to highest safety standards across all industries'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision Engineering',
      description: 'Exact measurements and quality execution for industrial needs'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Workforce',
      description: 'Skilled professionals with industry-specific experience'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks meeting industry standards'
    }
  ];

  //// Service capabilities by industry
  //const serviceCapabilities = [
  //  {
  //    industry: 'All Industries',
  //    capabilities: [
  //      'Structural Fabrication & Erection',
  //      'Piping Systems Installation',
  //      'Mechanical Equipment Erection',
  //      'Electrical Works & Systems',
  //      'Painting & Protective Coatings',
  //      'HDPE Fabrication & Customization',
  //      'Skilled Labor Supply',
  //      'ESP Erection & Commissioning'
  //    ]
  //  }
  //];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center text-white"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-yellow-500 text-sm font-semibold">Industries We Serve</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#eae6ed]"
            >
              Our <span className="text-yellow-500">Industries</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              Serving diverse industrial sectors with specialized construction solutions, 
              precision engineering, and commitment to excellence across all projects.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-yellow-500 text-sm font-semibold">Our Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Industries <span className='text-[#870481] '>We</span> <span className="text-[#870481]">Serve</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet the specific needs of various industrial sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 p-4 sm:p-6 lg:p-8 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {industry.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{industry.title}</h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{industry.description}</p>

                <div className="mb-6 flex gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Services:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {industry.services.map((service, serviceIndex) => (
                        <motion.div
                          key={serviceIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-[#ae0c81] flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  {industry.image && (
                    <div className="w-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-[#870481] font-semibold">{industry.projects}</span>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-yellow-500 text-sm font-semibold">Our Approach</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Industry <span className="text-[#870481]">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored construction approaches for different industrial requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389] rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-zinc-200 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#30085b]">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-100 leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*Service Capabilities
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-yellow-500 text-sm font-semibold">Our Capabilities</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-[#870481]">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Full range of construction services available across all industries
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {serviceCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Service Capabilities for {capability.industry}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {capability.capabilities.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-[#ae0c81] flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}

      {/*Featured Clients
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="text-yellow-500 text-sm font-semibold">Our Clients</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-[#870481]">Clients</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by industry leaders across various sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredClients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389] rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-zinc-200 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#30085b] font-bold text-xl">
                  {client.name.substring(0,2)}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{client.name}</h3>
                <p className="text-yellow-400 font-semibold mb-4">{client.industry}</p>
                <p className="text-gray-100 mb-4 text-sm">{client.description}</p>
                <div className="bg-white/10 rounded-lg p-3">
                  <p className="text-yellow-400 text-sm font-semibold">Services Provided:</p>
                  <p className="text-gray-200 text-xs">{client.services}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="py-20 bg-[#35105e]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Serve Your <span className="text-yellow-500">Industry</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how our industrial construction expertise can benefit your specific sector and project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: +91 8292111172</span>
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email: jyadavst@gmail.com</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;