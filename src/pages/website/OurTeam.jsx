import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Phone, 
  Mail,
  Linkedin,
  Award,
  Users,
  Star,
  Shield,
  Lightbulb,
  Target,
  Briefcase,
  Clock,
  CheckCircle
} from 'lucide-react';

const OurTeam = () => {
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

  // Team data from PDF
  const teamMembers = [
    {
      name: 'Jitendra Yadav',
      position: 'Director & Founder',
      description: 'Leading TRIVENI INFRAMECH PVT LTD with 15+ years of expertise in industrial construction, fabrication, and project management. Visionary leader with a focus on innovation and client satisfaction.',
      experience: '15+ Years Experience',
      specialization: 'Industrial Construction & Project Management',
      email: 'jyadavst@gmail.com',
      phone: '+91 8292111172',
      achievements: [
        '50+ Successful Projects',
        'Expert in Structural Fabrication',
        'Client Satisfaction Focus',
        'Innovation in Construction'
      ]
    }
  ];

  // Leadership qualities from PDF
  const leadershipQualities = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Visionary Leadership',
      description: 'Strategic vision for company growth and industry leadership'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety Commitment',
      description: 'Strong focus on safety standards and quality protocols'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation Driven',
      description: 'Embracing modern techniques and innovative solutions'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Quality Focus',
      description: 'Commitment to excellence in every project delivery'
    }
  ];

  // Team strengths
  const teamStrengths = [
    {
      number: '15+',
      title: 'Expert Engineers',
      description: 'Skilled professionals with hands-on experience'
    },
    {
      number: '50+',
      title: 'Projects Completed',
      description: 'Successful project deliveries across sectors'
    },
    {
      number: '100%',
      title: 'Client Satisfaction',
      description: 'Focus on exceeding client expectations'
    },
    {
      number: '24/7',
      title: 'Support',
      description: 'Round-the-clock project support'
    }
  ];

  // Expertise areas from PDF services
  const expertiseAreas = [
    {
      category: 'Structural Works',
      items: ['Structural Fabrication', 'Erection Works', 'Heavy Structures']
    },
    {
      category: 'Piping Systems',
      items: ['Piping Fabrication', 'Big-bore Systems', 'Small-bore Systems']
    },
    {
      category: 'Mechanical Services',
      items: ['Equipment Erection', 'Rotary Equipment', 'Static Equipment']
    },
    {
      category: 'Electrical Works',
      items: ['Cable Laying', 'Cable Trays', 'Support Structures']
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
              <span className="text-yellow-500 text-sm font-semibold">Our Team</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold mb-6 text-[#eae6ed]"
            >
              Meet Our <span className="text-yellow-500">Team</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Skilled professionals with years of hands-on experience, committed to delivering 
              innovative and high-quality construction solutions with precision and excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Director Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-1 transform rotate-2">
                <div className="bg-gray-800 rounded-2xl p-6 transform -rotate-2">
                  <div className="bg-gray-700 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center text-white z-10">
                      <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold border-4 border-white">
                        JY
                      </div>
                      <p className="text-2xl font-semibold">Jitendra Yadav</p>
                      <p className="text-gray-400">Director & Founder</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
               
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-yellow-500 text-sm font-semibold">Leadership</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Jitendra <span className="text-[#870481]">Yadav</span>
              </h2>

              <p className="text-yellow-600 font-semibold text-lg mb-4">
                Director & Founder
              </p>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                  <strong>Jitendra Yadav</strong> leads TRIVENI INFRAMECH PVT LTD with a vision 
                  to deliver world-class construction services that exceed client expectations. 
                  With over <strong>15 years of hands-on experience</strong> in the industrial 
                  construction sector, he brings unparalleled expertise and commitment to every project.
                </p>
                
                <p>
                  Under his leadership, the company has successfully completed <strong>50+ projects</strong> 
                  across various industrial sectors, establishing a reputation for precision, 
                  safety, and timely delivery.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <a href="mailto:info@triveniinframech.com" className="hover:text-yellow-600 transition-colors">
                    info@triveniinframech.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <a href="tel:+918292111172" className="hover:text-yellow-600 transition-colors">
                    +91 8292111172
                  </a>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {teamMembers[0].achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#c410bb] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{achievement}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-yellow-500 text-white hover:text-gray-900 font-bold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  <span>Connect With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      
{/*
      Leadership Qualities
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
              <span className="text-yellow-500 text-sm font-semibold">Leadership</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-200 mb-4">
              Leadership <span className="text-yellow-500">Qualities</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Driving excellence through visionary leadership and commitment to quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipQualities.map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {quality.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{quality.title}</h3>
                <p className="text-gray-600 leading-relaxed">{quality.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}

      {/*Team Strengths
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
              <span className="text-yellow-500 text-sm font-semibold">Our Strengths</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Team <span className="text-[#870481]">Strengths</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {teamStrengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {strength.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{strength.title}</h3>
                <p className="text-gray-600 leading-relaxed">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}

      {/*Expertise Areas
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
              <span className="text-yellow-500 text-sm font-semibold">Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Areas of <span className="text-yellow-500">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction expertise across multiple industrial sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                  {area.category}
                </h3>
                <div className="space-y-3">
                  {area.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#c410bb] flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
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
              Ready to Work With <span className="text-yellow-500">Our Team</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with our expert team to discuss your project requirements and get professional construction solutions.
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
                <span>Email: info@triveniinframech.com</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;