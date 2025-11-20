import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Building2,
  Wrench,
  Hammer,
  Zap,
  PaintBucket,
  Users,
  Cog,
  Shield,
  Clock,
  Target,
  Star,
  Phone,
  Mail
} from 'lucide-react';

const Services = () => {
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

  // Services data from PDF
  const services = [
    {
      icon: <Building2 className="w-10 h-10" />,
      title: 'Structural Fabrication and Erection Works',
      description: 'Expertise in light, medium, and heavy structures fabrication and erection with precision engineering and quality assurance.',
      features: [
        'Light Structures Fabrication',
        'Medium Structures Erection',
        'Heavy Structural Works',
        'Industrial Construction',
        'Precision Engineering',
        'Quality Assurance'
      ],
      image: 'structural-works',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Piping Fabrication and Erection',
      description: 'Handling both small-bore and big-bore pipe systems with expert installation, maintenance, and quality control.',
      features: [
        'Small-bore Pipe Systems',
        'Big-bore Pipe Systems',
        'Pipeline Installation',
        'Fabrication Works',
        'Maintenance Services',
        'Quality Control'
      ],
      image: 'piping-works',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Hammer className="w-10 h-10" />,
      title: 'Mechanical Equipment Erection',
      description: 'Installation of static and rotary equipment with precision alignment, commissioning, and expert handling.',
      features: [
        'Static Equipment Installation',
        'Rotary Equipment Setup',
        'Precision Alignment',
        'Commissioning Services',
        'Expert Handling',
        'Technical Support'
      ],
      image: 'mechanical-equipment',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Electrical Works',
      description: 'Complete electrical solutions including cable laying, cable tray setup, and support structure installation.',
      features: [
        'Cable Laying & Management',
        'Cable Tray Setup',
        'Support Structures',
        'Electrical Systems',
        'Power Distribution',
        'Safety Compliance'
      ],
      image: 'electrical-works',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <PaintBucket className="w-10 h-10" />,
      title: 'Painting Services',
      description: 'Structural and piping painting with high-quality finishes, protective coatings, and surface treatment.',
      features: [
        'Structural Painting',
        'Piping Painting',
        'Protective Coatings',
        'High-quality Finishes',
        'Surface Treatment',
        'Corrosion Protection'
      ],
      image: 'painting-services',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Labor Supply Services',
      description: 'Providing skilled and experienced labor for all project needs with training and quality workforce.',
      features: [
        'Skilled Labor Supply',
        'Experienced Workforce',
        'Project-based Staffing',
        'Trained Professionals',
        'Quality Workforce',
        'Flexible Staffing'
      ],
      image: 'labor-supply',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <Cog className="w-10 h-10" />,
      title: 'HDPE Fabrication & Customization',
      description: 'High-Density Polyethylene fabrication offering precision cutting, welding, bending, and shaping tailored to your needs.',
      features: [
        'Precision Cutting',
        'Expert Welding',
        'Bending & Shaping',
        'Custom Solutions',
        'Quality Fabrication',
        'Tailored Services'
      ],
      image: 'hdpe-fabrication',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'ESP Erection & Commissioning',
      description: 'Erection, commissioning, renovation & troubleshooting of Electrostatic Precipitators with expert technical support.',
      features: [
        'ESP Erection',
        'Commissioning Services',
        'Renovation Works',
        'Troubleshooting',
        'Technical Support',
        'Maintenance'
      ],
      image: 'esp-services',
      color: 'from-red-500 to-red-600'
    }
  ];

  // Service benefits
  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision Engineering',
      description: 'Exact measurements and precise execution for perfect results'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Timely Delivery',
      description: 'On-time project completion with efficient resource management'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety First',
      description: 'Strict adherence to safety protocols and quality standards'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks at every stage of the project'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br  from-[#631caf] via-[#8a5387] to-[#8b0389] overflow-hidden">
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
              <span className="text-yellow-500 text-sm font-semibold">Our Services</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            >
              Our <span className="text-yellow-500">Services</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive construction solutions tailored to meet the diverse needs of industrial 
              and structural sectors with precision, safety, and efficiency.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              <span className="text-yellow-500 text-sm font-semibold">What We Offer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-[#870481]">Services</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a complete range of construction services for industrial and structural sectors, 
              ensuring quality and precision in every project.
            </p>
          </motion.div>

          <div className="space-y-12 sm:space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-16 h-16 bg-gradient-to-r from-[#631caf] to-[#8b0389] rounded-2xl flex items-center justify-center text-white mb-6"
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-[#c410bb] flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
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
                      <span>Get Service Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>

                {/* Image/Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-1 transform rotate-1">
                      <div className="bg-gray-800 rounded-2xl p-6 transform -rotate-1">
                        <div className="bg-gray-700 rounded-xl h-80 flex items-center justify-center relative overflow-hidden">
                          <div className="text-center text-white z-10">
                            <div className="w-20 h-20 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              {service.icon}
                            </div>
                            <p className="text-lg font-semibold">{service.title.split(' ')[0]}</p>
                            <p className="text-gray-400">Professional Services</p>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                        </div>
                      </div>
                    </div>

                    
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <span className="text-yellow-500 text-sm font-semibold">Why Our Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Service <span className="text-yellow-400">Benefits</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              We ensure every service we provide comes with these key benefits for your complete satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-zinc-200 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#30085b]">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#30085b] mb-4">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              <span className="text-yellow-500 text-sm font-semibold">Our Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We <span className="text-[#870481]">Work</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your requirements and project scope' },
              { step: '02', title: 'Planning', description: 'Detailed project planning and resource allocation' },
              { step: '03', title: 'Execution', description: 'Precise implementation with quality control' },
              { step: '04', title: 'Delivery', description: 'Timely completion and client satisfaction' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#631caf] to-[#8b0389] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-yellow-300"></div>
                )}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Start Your <span className="text-yellow-500">Project</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a detailed service quote.
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

export default Services;