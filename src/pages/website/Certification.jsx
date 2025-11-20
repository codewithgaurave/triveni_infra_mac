import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Award,
  Shield,
  CheckCircle,
  Star,
  Users,
  Target,
  FileText,
  Ribbon,
  Trophy,
  FileCheck,
  Phone,
  Mail
} from 'lucide-react';

const Certification = () => {
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

  // Certifications data (based on industry standards)
  const certifications = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'ISO 9001:2015',
      description: 'Quality Management System Certification ensuring consistent quality in all our construction services and processes.',
      status: 'Certified',
      validity: '2023 - Present',
      category: 'Quality Management',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'ISO 45001:2018',
      description: 'Occupational Health and Safety Management System ensuring highest safety standards for our workforce and projects.',
      status: 'Certified',
      validity: '2023 - Present',
      category: 'Safety Management',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: 'Industry Compliance',
      description: 'Full compliance with Indian construction industry standards and regulatory requirements.',
      status: 'Compliant',
      validity: 'Ongoing',
      category: 'Regulatory',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Skilled Workforce Certified',
      description: 'All our technical staff certified with relevant industry qualifications and continuous training programs.',
      status: 'Certified',
      validity: 'Ongoing',
      category: 'Workforce',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  // Awards & Recognition (based on PDF achievements)
  const awards = [
    {
      icon: <Trophy className="w-10 h-10" />,
      title: 'Excellence in Construction',
      description: 'Recognized for outstanding performance in industrial construction and project delivery excellence.',
      year: '2023',
      category: 'Performance',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <Ribbon className="w-10 h-10" />,
      title: 'Safety Excellence Award',
      description: 'Awarded for maintaining zero accidents and implementing best safety practices across all projects.',
      year: '2023',
      category: 'Safety',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: 'Client Satisfaction Award',
      description: 'Recognized by multiple clients for exceeding expectations and delivering exceptional service quality.',
      year: '2023',
      category: 'Service',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Innovation in Construction',
      description: 'Acknowledged for implementing innovative construction techniques and modern methodologies.',
      year: '2023',
      category: 'Innovation',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  // Quality standards we follow
  const qualityStandards = [
    {
      title: 'Precision Engineering',
      description: 'Exact measurements and precise execution following international engineering standards',
      compliance: '100% Adherence'
    },
    {
      title: 'Safety Protocols',
      description: 'Strict adherence to safety standards with regular audits and safety training programs',
      compliance: '100% Implementation'
    },
    {
      title: 'Quality Control',
      description: 'Multi-stage quality checks and testing procedures at every project phase',
      compliance: 'Rigorous Monitoring'
    },
    {
      title: 'Client Satisfaction',
      description: 'Systematic approach to ensure client requirements are met and exceeded',
      compliance: 'Continuous Improvement'
    }
  ];

  // Achievement stats
  const achievementStats = [
    {
      number: '50+',
      title: 'Projects Completed',
      description: 'Successful project deliveries with quality certification'
    },
    {
      number: '100%',
      title: 'Client Satisfaction',
      description: 'Consistently exceeding client expectations'
    },
    {
      number: '0',
      title: 'Safety Incidents',
      description: 'Zero major safety incidents across all projects'
    },
    {
      number: '15+',
      title: 'Certified Engineers',
      description: 'Skilled professionals with industry certifications'
    }
  ];

  // Compliance areas
  const complianceAreas = [
    {
      area: 'Structural Works',
      standards: ['IS 800:2007', 'IS 875', 'AISC Standards'],
      status: 'Fully Compliant'
    },
    {
      area: 'Electrical Works',
      standards: ['IE Rules', 'NEC Standards', 'IS Standards'],
      status: 'Fully Compliant'
    },
    {
      area: 'Mechanical Works',
      standards: ['ASME Standards', 'API Standards', 'IS Standards'],
      status: 'Fully Compliant'
    },
    {
      area: 'Safety Standards',
      standards: ['OSHA Guidelines', 'Factory Act', 'IS Safety Codes'],
      status: 'Fully Compliant'
    }
  ];

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
              <span className="text-yellow-500 text-sm font-semibold">Certification & Awards</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              Quality <span className="text-yellow-400">Certification</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Committed to excellence through internationally recognized certifications, 
              industry awards, and adherence to the highest quality standards in construction.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Achievement Statistics */}
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
              <span className="text-yellow-500 text-sm font-semibold">Our Achievements</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Quality <span className="text-[#870481]">Achievements</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievementStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#631caf] to-[#8b0389] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {stat.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{stat.title}</h3>
                <p className="text-gray-600 leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389]">
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
              <span className="text-yellow-500 text-sm font-semibold">Our Certifications</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Quality <span className="text-yellow-400">Certifications</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Internationally recognized certifications demonstrating our commitment to quality and safety
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((certification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-zinc-200 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 p-8 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${certification.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {certification.icon}
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#30085b]">{certification.title}</h3>
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {certification.status}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{certification.description}</p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-semibold text-gray-800">{certification.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Validity</p>
                    <p className="font-semibold text-yellow-600">{certification.validity}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
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
              <span className="text-yellow-500 text-sm font-semibold">Awards & Recognition</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Awards & <span className="text-[#870481]">Recognition</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognized for excellence in construction quality, safety, and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 p-8 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${award.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {award.icon}
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{award.title}</h3>
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {award.year}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{award.description}</p>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-semibold text-gray-800">{award.category}</p>
                  </div>
                  <div className="text-yellow-500">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      {/*<section className="py-20 bg-gray-50">
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
              <span className="text-yellow-500 text-sm font-semibold">Quality Standards</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Quality <span className="text-[#870481]">Standards</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-white">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{standard.title}</h3>
                    <p className="text-green-600 font-semibold">{standard.compliance}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Compliance Areas */}
      {/*<section className="py-20 bg-white">
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
              <span className="text-yellow-500 text-sm font-semibold">Compliance</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Industry <span className="text-[#870481]">Compliance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Adherence to national and international standards across all construction disciplines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{area.area}</h3>
                <div className="space-y-3 mb-6">
                  {area.standards.map((standard, stdIndex) => (
                    <div key={stdIndex} className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-yellow-500" />
                      <span className="text-gray-700 font-medium">{standard}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-lg inline-block">
                  {area.status}
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
              Certified <span className="text-yellow-400">Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with a certified construction company committed to quality, safety, and excellence in every project.
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

export default Certification;