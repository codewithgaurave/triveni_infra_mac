import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Send,
  User,
  Building,
  FileText,
  CheckCircle,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
} from "lucide-react";
import { toast } from "react-toastify";
import axiosInstance from "../../../axiosInstance";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    currentCompany: "",
    expectedSalary: "",
    noticePeriod: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobPositions = [
    {
      title: "Structural Engineer",
      salary: "8-12 LPA",
      location: "Mumbai",
      experience: "3-5 years",
      timing: "Full-time",
      description: "Design and analyze structural systems for industrial projects including steel structures and foundations."
    },
    {
      title: "Piping Engineer",
      salary: "6-10 LPA",
      location: "Pune",
      experience: "2-4 years",
      timing: "Full-time",
      description: "Design piping systems, create isometric drawings, and ensure compliance with industry standards."
    },
    {
      title: "Project Manager",
      salary: "15-20 LPA",
      location: "Delhi",
      experience: "5-8 years",
      timing: "Full-time",
      description: "Lead construction projects from planning to completion, manage teams and ensure timely delivery."
    },
    {
      title: "Mechanical Engineer",
      salary: "5-8 LPA",
      location: "Chennai",
      experience: "1-3 years",
      timing: "Full-time",
      description: "Design mechanical systems, equipment selection, and maintenance planning for industrial facilities."
    },
    {
      title: "Safety Officer",
      salary: "4-6 LPA",
      location: "Bangalore",
      experience: "2-4 years",
      timing: "Full-time",
      description: "Ensure workplace safety compliance, conduct safety audits, and implement safety protocols."
    },
    {
      title: "Quality Control Inspector",
      salary: "3-5 LPA",
      location: "Hyderabad",
      experience: "1-3 years",
      timing: "Full-time",
      description: "Inspect construction work quality, ensure adherence to specifications and maintain quality standards."
    }
  ];

  const positions = [
    "Structural Engineer",
    "Piping Engineer",
    "Mechanical Engineer",
    "Electrical Engineer",
    "Project Manager",
    "Site Supervisor",
    "Quality Control Inspector",
    "Safety Officer",
    "Welder",
    "Fabricator",
    "Other",
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await axiosInstance.post(`/career`, formData);
      if (res.data.success) {
        toast.success(res.data.message);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          currentCompany: "",
          expectedSalary: "",
          noticePeriod: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = (position) => {
    setFormData(prev => ({ ...prev, position }));
    document.getElementById('career-form').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span className="text-yellow-400 text-sm font-semibold">
                Join Our Team
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Build Your <span className="text-yellow-400">Career</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join TRIVENI INFRAMECH PVT LTD and be part of a dynamic team
              building India's industrial infrastructure with innovation and
              excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Positions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span className="text-yellow-400 text-sm font-semibold">
                Open Positions
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#870481] mb-4">
              Available <span className="text-yellow-400">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our current job openings and find the perfect role for your career growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobPositions.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 cursor-pointer border border-gray-100"
                onClick={() => scrollToForm(job.title)}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#30085b] mb-2">{job.title}</h3>
                  <div className="flex items-center text-green-600 font-semibold mb-3">
                    <DollarSign className="w-4 h-4 mr-1" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-[#870481]" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="w-4 h-4 mr-2 text-[#870481]" />
                    <span className="text-sm">{job.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-[#870481]" />
                    <span className="text-sm">{job.timing}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {job.description}
                </p>

                <button className="w-full bg-gradient-to-r from-[#631caf] to-[#8b0389] hover:from-[#7a1fc7] hover:to-[#a004a1] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Application Form */}
      <section id="career-form" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span className="text-yellow-400 text-sm font-semibold">
                Apply Now
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#870481] mb-4">
              Career <span className="text-yellow-400">Application</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take the first step towards joining our team of construction professionals
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-zinc-200 rounded-2xl shadow-xl p-8"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#30085b] mb-2">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest. We'll review your application and get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#30085b] mb-2">
                        <User className="w-4 h-4 inline mr-1" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#870481] focus:border-[#870481] transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#30085b] mb-2">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#870481] focus:border-[#870481] transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#30085b] mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#870481] focus:border-[#870481] transition-all duration-300"
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#30085b] mb-2">
                        <FileText className="w-4 h-4 inline mr-1" />
                        Position Applied For *
                      </label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#870481] focus:border-[#870481] transition-all duration-300"
                      >
                        <option value="">Select a position</option>
                        {positions.map((position, index) => (
                          <option key={index} value={position}>
                            {position}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#30085b] mb-2">
                        Total Experience *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#870481] focus:border-[#870481] transition-all duration-300"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1 years">0-1 years</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5-10 years">5-10 years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#30085b] mb-2">
                        <Building className="w-4 h-4 inline mr-1" />
                        Current Company
                      </label>
                      <input
                        type="text"
                        name="currentCompany"
                        value={formData.currentCompany}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#870481] focus:border-[#870481] transition-all duration-300"
                        placeholder="Enter current company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#30085b] mb-2">
                        Expected Salary (LPA)
                      </label>
                      <input
                        type="text"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#870481] focus:border-[#870481] transition-all duration-300"
                        placeholder="e.g., 5-8 LPA"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#30085b] mb-2">
                        Notice Period
                      </label>
                      <select
                        name="noticePeriod"
                        value={formData.noticePeriod}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#870481] focus:border-[#870481] transition-all duration-300"
                      >
                        <option value="">Select notice period</option>
                        <option value="Immediate">Immediate</option>
                        <option value="15 days">15 days</option>
                        <option value="1 month">1 month</option>
                        <option value="2 months">2 months</option>
                        <option value="3 months">3 months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#30085b] mb-2">
                      Cover Letter / Additional Information *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#870481] focus:border-[#870481] transition-all duration-300 resize-none"
                      placeholder="Tell us about yourself, your experience, and why you want to join our team..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#631caf] to-[#8b0389] hover:from-[#7a1fc7] hover:to-[#a004a1] text-white"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;