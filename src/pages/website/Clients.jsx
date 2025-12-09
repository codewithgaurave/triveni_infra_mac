import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import suzlonLogo from '../../assets/Suzlon.png';
import geecoLogo from '../../assets/geeco.jpg';
import tefugenLogo from '../../assets/TEFUGEN.png';
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  Award,
  Users,
  Shield,
  Heart,
  Quote,
  Phone,
  Mail,
  Building2,
  Zap,
  Cog
} from 'lucide-react';

const Clients = () => {
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

  // Clients data from PDF
  const clients = [
    {
      name: 'SUZLON',
      industry: 'Renewable Energy',
      description: 'Powering a Greener Tomorrow',
      logo: 'SUZLON',
      services: [
        'Structural Fabrication',
        'Electrical Works',
        'Equipment Erection',
        'Support Structures'
      ],
      projects: '15+ Projects',
      since: '2023',
      testimonial: 'Exceptional work in wind energy infrastructure with precision and timely delivery.',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'GEECO',
      industry: 'General Engineering',
      description: 'General Electrical & Engineering Company',
      logo: 'GEECO',
      services: [
        'Piping Systems',
        'Mechanical Equipment',
        'Structural Works',
        'Painting Services'
      ],
      projects: '12+ Projects',
      since: '2023',
      testimonial: 'Reliable partner for complex engineering projects with quality craftsmanship.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'TEFUGEN',
      industry: 'Technology & Innovation',
      description: 'Technologies for Future Generation',
      logo: 'TEFUGEN',
      services: [
        'HDPE Fabrication',
        'ESP Commissioning',
        'Electrical Systems',
        'Labor Supply'
      ],
      projects: '8+ Projects',
      since: '2023',
      testimonial: 'Innovative solutions and expert technical support for our advanced technology projects.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      client: 'SUZLON Project Manager',
      position: 'Wind Energy Division',
      text: 'TRIVENI INFRA MECH PVT LTD delivered exceptional structural work for our wind turbine foundations. Their precision and commitment to safety standards were impressive.',
      rating: 5
    },
    {
      client: 'GEECO Engineering Head',
      position: 'Industrial Projects',
      text: 'Professional team with excellent technical expertise. They handled complex piping systems and mechanical equipment installation with great efficiency.',
      rating: 5
    },
    {
      client: 'TEFUGEN Technical Director',
      position: 'Technology Infrastructure',
      text: 'Outstanding HDPE fabrication work and ESP commissioning services. Their attention to detail and technical knowledge exceeded our expectations.',
      rating: 5
    }
  ];

  // Client satisfaction stats
  const satisfactionStats = [
    {
      number: '100%',
      title: 'Client Satisfaction',
      description: 'Consistently exceeding client expectations'
    },
    {
      number: '50+',
      title: 'Projects Completed',
      description: 'Successful deliveries across sectors'
    },
    {
      number: '15+',
      title: 'Expert Engineers',
      description: 'Skilled professionals on team'
    },
    {
      number: '24/7',
      title: 'Support',
      description: 'Round-the-clock project support'
    }
  ];

  // Why clients choose us
  const clientBenefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks and adherence to industry standards'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expert Team',
      description: 'Skilled professionals with years of hands-on experience'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Focus',
      description: 'Dedicated to understanding and meeting client requirements'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Reliability',
      description: 'Consistent on-time delivery and project completion'
    }
  ];

  // Services provided to clients
  const clientServices = [
    {
      category: 'Structural Works',
      icon: <Building2 className="w-6 h-6" />,
      count: '25+ Projects'
    },
    {
      category: 'Piping Systems',
      icon: <Cog className="w-6 h-6" />,
      count: '18+ Projects'
    },
    {
      category: 'Electrical Works',
      icon: <Zap className="w-6 h-6" />,
      count: '22+ Projects'
    },
    {
      category: 'Mechanical Equipment',
      icon: <Building2 className="w-6 h-6" />,
      count: '15+ Projects'
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
              <span className="text-yellow-500 text-sm font-semibold">Our Clients</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              Our <span className="text-yellow-400">Clients</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Trusted by industry leaders and valued partners who rely on our expertise 
              for their construction and industrial project needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Client Statistics */}
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
              <span className="text-yellow-500 text-sm font-semibold">By The Numbers</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Client <span className="text-[#870481]">Success</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {satisfactionStats.map((stat, index) => (
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

      {/* Featured Clients */}
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
              <span className="text-yellow-500 text-sm font-semibold">Featured Clients</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Valued <span className="text-yellow-400">Partners</span>
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Building lasting relationships with industry leaders through quality work and reliable service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-zinc-200 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 p-8 transition-all duration-300 group"
              >
                {/* Client Header */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden border-2 border-gray-200">
                    <img 
                      src={client.logo === 'SUZLON' ? suzlonLogo : client.logo === 'GEECO' ? geecoLogo : tefugenLogo} 
                      alt={`${client.name} Logo`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#30085b] mb-2">{client.name}</h3>
                  <p className="text-[#870481] font-semibold mb-1">{client.industry}</p>
                  <p className="text-gray-600 text-sm mb-4">{client.description}</p>
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Services Provided */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#30085b] mb-3">Services Provided:</h4>
                  <div className="space-y-2">
                    {client.services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-[#c410bb] flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="text-left">
                    <p className="text-[#870481] font-semibold text-sm">{client.projects}</p>
                    <p className="text-gray-500 text-xs">Since {client.since}</p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/projects"
                      className="inline-flex items-center space-x-1 text-yellow-400 hover:text-yellow-500 font-semibold transition-colors duration-200"
                    >
                      <span>View Work</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
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
              <span className="text-yellow-500 text-sm font-semibold">Testimonials</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients <span className="text-[#870481]">Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our valued partners about their experience working with TRIVENI INFRA MECH PVT LTD
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 relative"
              >
                <Quote className="w-8 h-8 text-yellow-500 absolute -top-4 left-8 bg-white rounded-full p-1" />
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.client}</p>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us */}
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
              <span className="text-yellow-500 text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Clients <span className="text-[#870481]">Trust Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientBenefits.map((benefit, index) => (
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
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-100 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
              <span className="text-yellow-500 text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Services for Our <span className="text-[#870481]">Clients</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#631caf] to-[#8b0389] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.category}</h3>
                <p className="text-[#870481] font-semibold">{service.count}</p>
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
              Ready to Join Our <span className="text-yellow-400">Client Family</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the TRIVENI INFRA MECH PVT LTD difference. Let's build something great together.
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

export default Clients;