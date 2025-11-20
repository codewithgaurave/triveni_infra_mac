import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Users, 
  Award, 
  Clock,
  Building2,
  Wrench,
  Hammer,
  Zap,
  PaintBucket,
  UserCog,
  HardHat,
  Shield,
  Lightbulb,
  Target,
  Eye,
  Heart,
  Phone,
  Mail,
  MapPin,
  Star,
  ChevronRight
} from 'lucide-react';

const Home = () => {
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

  // PDF Content Services
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Structural Fabrication & Erection',
      description: 'Expertise in light, medium, and heavy structures fabrication and erection works with precision engineering.',
      features: ['Light Structures', 'Medium Structures', 'Heavy Structures', 'Industrial Construction']
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Piping Fabrication & Erection',
      description: 'Handling both small-bore and big-bore pipe systems with expert installation and maintenance.',
      features: ['Small-bore Systems', 'Big-bore Systems', 'Pipeline Installation', 'Maintenance']
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: 'Mechanical Equipment Erection',
      description: 'Installation of static and rotary equipment with precision alignment and commissioning.',
      features: ['Static Equipment', 'Rotary Equipment', 'Precision Installation', 'Commissioning']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Electrical Works',
      description: 'Complete electrical solutions including cable laying, cable tray setup, and support structures.',
      features: ['Cable Laying', 'Cable Trays', 'Support Structures', 'Electrical Systems']
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: 'Painting Services',
      description: 'Structural and piping painting with high-quality finishes and protective coatings.',
      features: ['Structural Painting', 'Piping Painting', 'Protective Coatings', 'Quality Finishes']
    },
    {
      icon: <UserCog className="w-8 h-8" />,
      title: 'Labor Supply & HDPE Fabrication',
      description: 'Skilled labor supply and High-Density Polyethylene fabrication with customization services.',
      features: ['Skilled Labor', 'HDPE Fabrication', 'Custom Solutions', 'Precision Work']
    }
  ];

  // Why Choose Us - From PDF
  const whyChooseUs = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expertise',
      description: 'Skilled professionals with years of hands-on experience in industrial construction.'
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: 'Comprehensive Solutions',
      description: 'End-to-end construction services from fabrication to commissioning.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliability',
      description: 'On-time project delivery and client-focused service with proven track record.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Safety',
      description: 'Adherence to the highest safety standards and quality protocols.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Use of modern tools and techniques for enhanced efficiency and precision.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Quality',
      description: 'Commitment to delivering world-class solutions that exceed client expectations.'
    }
  ];

  // Clients from PDF
  const clients = [
    { name: 'SUZLON', logo: 'SUZLON', description: 'Powering a Greener Tomorrow' },
    { name: 'GEECO', logo: 'GEECO', description: 'General Electrical & Engineering Co.' },
    { name: 'TEFUGEN', logo: 'TEFUGEN', description: 'Technologies for Future Generation' }
  ];

  // Stats from PDF
  const stats = [
    { number: '50+', label: 'Projects Completed', icon: <Award className="w-6 h-6" /> },
    { number: '15+', label: 'Expert Engineers', icon: <Users className="w-6 h-6" /> },
    { number: '24/7', label: 'Support', icon: <Clock className="w-6 h-6" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#880481] via-[#30085b] to-[#ad6bac] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-white"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-yellow-500 text-sm font-semibold">Established 2023</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#f2ecf7] font-bold leading-tight mb-6"
              >
                TRIVENI
                <span className="text-[#da880f] block">INFRAMECH<br className="hidden sm:block"/>PVT LTD</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed"
              >
                At TRIVENI INFRA MECH PVT LTD, we specialize in delivering innovative and high-quality 
                construction services tailored to meet the diverse needs of industrial and structural sectors.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
              >
                <Link
                  to="/contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-1 transform rotate-2">
                <div className="bg-gray-800 rounded-2xl p-6 transform -rotate-2">
                  <div className="bg-gray-700 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center text-white z-10">
                      <Building2 className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                      <p className="text-lg font-semibold">Industrial Construction</p>
                      <p className="text-gray-400">Expert Fabrication & Erection</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              
              
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-yellow-500 text-sm font-semibold">About Us</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                We Are <span className="text-[#870481]">Different</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At TRIVENI INFRA MECH PVT LTD, we specialize in delivering innovative and high-quality 
                construction services tailored to meet the diverse needs of the industrial and structural sectors. 
                With a commitment to precision, safety, and efficiency, we are a one-stop solution for all 
                fabrication, erection, and maintenance projects.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With years of expertise and a focus on excellence, we bring a modern approach to construction 
                that ensures timely project delivery without compromising quality.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#c40fbb]" />
                  <span className="font-semibold text-gray-800">Precision Work</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#c40fbb]" />
                  <span className="font-semibold text-gray-800">Safety First</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#c40fbb]" />
                  <span className="font-semibold text-gray-800">Timely Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#c40fbb]" />
                  <span className="font-semibold text-gray-800">Quality Assurance</span>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-yellow-500 text-white hover:text-gray-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-yellow-500 rounded-2xl p-6 h-48 flex flex-col justify-center">
                  <Target className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-white font-bold text-lg mb-2">Our Vision</h3>
                  <p className="text-yellow-100 text-sm">
                    To become a leading name in the construction industry by delivering world-class solutions.
                  </p>
                </div>
                <div className="bg-[#561b5a] rounded-2xl p-6 h-48 flex flex-col justify-center">
                  <Eye className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-white font-bold text-lg mb-2">Our Mission</h3>
                  <p className="text-gray-300 text-sm">
                    Construction services with focus on innovation, safety, and client satisfaction.
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-[#561b5a] rounded-2xl p-6 h-48 flex flex-col justify-center">
                  <Heart className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-white font-bold text-lg mb-2">Our Values</h3>
                  <p className="text-gray-300 text-sm">
                    Quality, Safety, Innovation, and Client Satisfaction drive everything we do.
                  </p>
                </div>
                <div className="bg-yellow-500 rounded-2xl p-6 h-48 flex flex-col justify-center">
                  <Star className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-white font-bold text-lg mb-2">Our Promise</h3>
                  <p className="text-yellow-100 text-sm">
                    Exceeding client expectations while fostering sustainable development.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-200 mb-2">{stat.number}</h3>
                <p className="text-gray-100 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              <span className="text-yellow-500 text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-[#870481]">Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a complete range of construction services for industrial and structural sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389] rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 p-4 sm:p-6 lg:p-8 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-r bg-zinc-200 rounded-2xl flex items-center justify-center text-[#30085b] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-100 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2 mb-6 text-gray-200 ">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xlg text-gray-00">
                      <ChevronRight className="w-4 h-4 text-yellow-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-zinc-900 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                   
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-yellow-500 text-white hover:text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-[#870481]">Choose TRIVENI</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-900 max-w-2xl mx-auto">
              We bring years of expertise and a commitment to excellence in every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389] rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 p-8 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-[#e4e4e7] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#30085b]">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#e5e7eb] mb-4">{item.title}</h3>
                <p className="text-[#f3e9dc] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
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
              <span className="text-yellow-500 text-sm font-semibold">Our Clients</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by <span className="text-[#870481]">Industry Leaders</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389] rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-[#e4e4e7] rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#30085b] font-bold text-xl">
                  {client.logo.substring(0,2)}
                </div>
                <h3 className="text-2xl font-bold text-[#e4e4e7] mb-2">{client.name}</h3>
                <p className="text-[#f3e9cc]">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Start Your <span className="text-yellow-500">Project</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Let's build something great together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: +91 8292111172</span>
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

export default Home;