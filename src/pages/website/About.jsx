import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Target,
  Eye,
  Heart,
  Star,
  Shield,
  Lightbulb,
  Clock,
  Building2,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const About = () => {
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

  // Company values from PDF
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision',
      description: 'Commitment to precise engineering and accurate execution in every project.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety',
      description: 'Adherence to the highest safety standards ensuring zero compromise on safety protocols.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Efficiency',
      description: 'Timely project delivery with optimal resource utilization and modern techniques.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Use of modern tools and techniques for enhanced efficiency and better outcomes.'
    }
  ];

  // Why Choose Us points from PDF
  const whyChooseUs = [
    {
      icon: <Users className="w-6 h-6" />,
      text: 'Skilled professionals with years of hands-on experience'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      text: 'Comprehensive end-to-end construction services'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: 'Reliable on-time project delivery and client-focused service'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: 'Adherence to the highest safety standards in the industry'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      text: 'Use of modern tools and techniques for enhanced efficiency'
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: 'World-class solutions that exceed client expectations'
    }
  ];

  // Team members (you can add actual team details later)
  const teamMembers = [
    {
      name: 'Jitendra Yadav',
      position: 'Director',
      description: 'Leading TRIVENI INFRA MECH PVT LTD with vision and expertise in industrial construction.',
      experience: '15+ Years'
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
              <span className="text-yellow-500 text-sm font-semibold">About Our Company</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold mb-6 text-gray-100"
            >
              About <span className="text-yellow-500">Triveni</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Leading the way in innovative construction solutions with a commitment to excellence,
              safety, and client satisfaction since 2023.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
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
                <span className="text-yellow-500 text-sm font-semibold">Our Story</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                We Are <span className="text-[#870481]">Different</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At <strong>TRIVENI INFRAMECH PVT LTD</strong>, we specialize in delivering innovative and
                  high-quality construction services tailored to meet the diverse needs of the industrial and
                  structural sectors.
                </p>

                <p>
                  With a commitment to <strong>precision, safety, and efficiency</strong>, we are a one-stop
                  solution for all fabrication, erection, and maintenance projects. Our team brings together
                  years of expertise and a focus on excellence, ensuring we deliver modern construction
                  approaches that guarantee timely project delivery without compromising quality.
                </p>

                <p>
                  Established in <strong>2023</strong>, we have quickly built a reputation for reliability and
                  excellence in the construction industry, serving clients across various sectors with
                  customized solutions that drive their success.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-[#561b5a] rounded-2xl border border-yellow-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#e4e4e7] rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-[#30085b]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-200 text-lg mb-2">Our Promise</h4>
                    <p className="text-gray-100">
                      We bring a modern approach to construction that ensures timely project delivery
                      without compromising on quality, safety, or client satisfaction.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-1 transform rotate-2">
                <div className="bg-gray-800 rounded-2xl p-6 transform -rotate-2">
                  <div className="bg-gray-700 rounded-xl h-96 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Building2 className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                      <p className="text-lg font-semibold">Triveni Construction</p>
                      <p className="text-gray-400">Building Excellence Since 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
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
              <span className="text-yellow-500 text-sm font-semibold">Our Purpose</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
              Vision & <span className="text-yellow-500">Mission</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 text-white">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To become a leading name in the construction industry by delivering world-class solutions
                that exceed client expectations while fostering sustainable development.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#c40fbb]" />
                  <span className="text-gray-700">Industry leadership in construction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#c40fbb]" />
                  <span className="text-gray-700">World-class solution delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#c40fbb]" />
                  <span className="text-gray-700">Sustainable development focus</span>
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#631caf] via-[#8a5387] to-[#8b0389] rounded-2xl flex items-center justify-center mb-6 text-white">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To provide exceptional construction services with a focus on innovation, safety, and client
                satisfaction, contributing to the growth of the industrial and infrastructure sectors.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#c40fbb]" />
                  <span className="text-gray-700">Innovation-driven services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#c40fbb]" />
                  <span className="text-gray-700">Safety-first approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#c40fbb]" />
                  <span className="text-gray-700">Client satisfaction focus</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              <span className="text-yellow-500 text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-[#870481]">Choose TRIVENI</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring years of expertise and a commitment to excellence in every project we undertake
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="w-12 h-12 bg-[#e4e4e7] rounded-xl flex items-center justify-center mb-4 text-[#31095c]">
                  {item.icon}
                </div>
                <p className="text-gray-200 font-medium leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              <span className="text-yellow-500 text-sm font-semibold">Our Values</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Core <span className="text-yellow-500">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              <span className="text-yellow-500 text-sm font-semibold">Our Leadership</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-[#870481]">Director</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-yellow-600 font-semibold text-lg mb-4">{member.position}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
                <div className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  {member.experience} Experience
                </div>
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
              Ready to Work <span className="text-yellow-500">With Us</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how TRIVENI INFRA MECH PVT LTD can help bring your project to life with excellence and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us Now</span>
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Our Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;