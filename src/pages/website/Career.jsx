import React, { useState, useEffect } from "react";
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
  Eye,
  X,
  GraduationCap,
  Award,
  Upload,
} from "lucide-react";
import { IoBagAddSharp } from "react-icons/io5";
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
  const [resume, setResume] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [apiJobs, setApiJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Fetch jobs from API
  const fetchJobs = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      
      const response = await axiosInstance.get('/jobs/active');
      if (response.data.success) {
        setApiJobs(response.data.data || []);
        if (isRefresh) {
          toast.success(`Found ${response.data.data?.length || 0} active jobs`);
        }
      } else {
        setApiJobs([]);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      // If API fails, clear the jobs array to show fallback
      setApiJobs([]);
      if (isRefresh) {
        toast.error('Failed to refresh jobs');
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchJobs();
    // Set up interval to refresh jobs every 30 seconds
    const interval = setInterval(fetchJobs, 30000);
    return () => clearInterval(interval);
  }, []);

  const jobPositions = [
    // Management & Engineering
    {
      title: "Project Manager",
      category: "Management & Engineering",
      salary: "₹15,00,000 - ₹25,00,000",
      location: "Multiple Locations",
      experience: "5-10 years",
      timing: "Full-time",
      description: "Lead construction projects from planning to completion, manage teams and ensure timely delivery.",
      detailedDescription: "We are looking for an experienced Project Manager to lead our construction projects. You'll be responsible for project planning, execution, and delivery while managing cross-functional teams.",
      responsibilities: ["Plan and execute construction projects", "Manage project budgets and schedules", "Lead multidisciplinary teams", "Ensure quality and safety compliance", "Communicate with clients and stakeholders", "Risk management and issue resolution"],
      requirements: ["Bachelor's degree in Engineering/Construction Management", "5-10 years of project management experience", "PMP certification preferred", "Strong leadership and communication skills", "Knowledge of construction processes", "Proficiency in project management software"],
      benefits: ["Executive compensation package", "Comprehensive health benefits", "Leadership development programs", "Performance bonuses", "Company vehicle allowance"]
    },
    {
      title: "Project Engineer",
      category: "Management & Engineering",
      salary: "₹8,00,000 - ₹15,00,000",
      location: "Multiple Locations",
      experience: "3-7 years",
      timing: "Full-time",
      description: "Support project management activities, coordinate engineering tasks and ensure technical compliance.",
      detailedDescription: "Join our team as a Project Engineer to support project execution and coordinate various engineering activities across multiple disciplines.",
      responsibilities: ["Support project planning and execution", "Coordinate engineering activities", "Review technical drawings and specifications", "Monitor project progress", "Ensure technical compliance", "Assist in problem-solving"],
      requirements: ["Bachelor's degree in Engineering", "3-7 years of project engineering experience", "Knowledge of engineering principles", "Strong analytical skills", "Good communication abilities", "Proficiency in engineering software"],
      benefits: ["Competitive salary package", "Health insurance coverage", "Professional development", "Performance bonuses", "Career growth opportunities"]
    },
    {
      title: "Construction Engineer",
      category: "Management & Engineering",
      salary: "₹6,00,000 - ₹12,00,000",
      location: "Project Sites",
      experience: "2-6 years",
      timing: "Full-time",
      description: "Oversee construction activities, ensure quality standards and coordinate with site teams.",
      detailedDescription: "We are seeking a Construction Engineer to oversee construction activities and ensure projects are executed according to specifications and quality standards.",
      responsibilities: ["Oversee construction activities", "Ensure quality standards", "Coordinate with site teams", "Monitor construction progress", "Resolve technical issues", "Maintain construction documentation"],
      requirements: ["Bachelor's degree in Civil Engineering", "2-6 years of construction experience", "Knowledge of construction methods", "Understanding of quality standards", "Strong problem-solving skills", "Site management experience"],
      benefits: ["Competitive salary", "Site allowances", "Health insurance", "Skill development", "Performance incentives"]
    },
    {
      title: "Piping Engineer",
      category: "Management & Engineering",
      salary: "₹6,00,000 - ₹12,00,000",
      location: "Mumbai/Pune",
      experience: "2-5 years",
      timing: "Full-time",
      description: "Design piping systems, create isometric drawings, and ensure compliance with industry standards.",
      detailedDescription: "Join our team as a Piping Engineer to design and develop piping systems for industrial facilities. You'll work on challenging projects involving complex piping networks.",
      responsibilities: ["Design piping systems for industrial plants", "Create piping isometric drawings and P&IDs", "Perform stress analysis and hydraulic calculations", "Coordinate with process and mechanical engineers", "Review vendor drawings and specifications", "Support construction and commissioning activities"],
      requirements: ["Bachelor's degree in Mechanical/Chemical Engineering", "2-5 years of piping design experience", "Proficiency in AutoCAD, PDMS/E3D, Caesar II", "Knowledge of ASME, API standards", "Understanding of process engineering principles", "Strong attention to detail"],
      benefits: ["Attractive compensation package", "Medical insurance for family", "Training and certification programs", "Annual performance bonuses", "Work-life balance initiatives"]
    },
    {
      title: "Structural Engineer",
      category: "Management & Engineering",
      salary: "₹8,00,000 - ₹15,00,000",
      location: "Delhi/Mumbai",
      experience: "3-7 years",
      timing: "Full-time",
      description: "Design and analyze structural systems for industrial projects including steel structures and foundations.",
      detailedDescription: "We are seeking an experienced Structural Engineer to join our dynamic team. The role involves designing, analyzing, and overseeing the construction of structural systems for various industrial projects.",
      responsibilities: ["Design structural systems for industrial buildings", "Perform structural analysis using STAAD Pro, ETABS", "Prepare detailed drawings and specifications", "Coordinate with other engineering disciplines", "Conduct site inspections and quality checks", "Ensure compliance with building codes"],
      requirements: ["Bachelor's degree in Civil/Structural Engineering", "3-7 years of structural design experience", "Proficiency in AutoCAD, STAAD Pro, ETABS", "Knowledge of IS codes and international standards", "Strong analytical and problem-solving skills", "Excellent communication and teamwork abilities"],
      benefits: ["Competitive salary package", "Health insurance coverage", "Professional development opportunities", "Performance-based bonuses", "Flexible working hours"]
    },
    {
      title: "Mechanical Engineer",
      category: "Management & Engineering",
      salary: "₹5,00,000 - ₹10,00,000",
      location: "Chennai/Bangalore",
      experience: "2-5 years",
      timing: "Full-time",
      description: "Design mechanical systems, equipment selection, and maintenance planning for industrial facilities.",
      detailedDescription: "Join our mechanical engineering team to work on diverse industrial projects. You'll be involved in designing mechanical systems and equipment for various applications.",
      responsibilities: ["Design mechanical systems and equipment", "Perform equipment selection and sizing", "Prepare technical specifications", "Support installation and commissioning", "Develop maintenance procedures", "Troubleshoot mechanical issues"],
      requirements: ["Bachelor's degree in Mechanical Engineering", "2-5 years of relevant experience", "Proficiency in AutoCAD, SolidWorks", "Knowledge of mechanical systems", "Understanding of manufacturing processes", "Good analytical skills"],
      benefits: ["Competitive salary package", "Health and dental insurance", "Skill development programs", "Annual increment and bonuses", "Flexible work arrangements"]
    },
    {
      title: "Electrical Engineer",
      category: "Management & Engineering",
      salary: "₹5,00,000 - ₹10,00,000",
      location: "Multiple Locations",
      experience: "2-5 years",
      timing: "Full-time",
      description: "Design electrical systems, power distribution, and control systems for industrial projects.",
      detailedDescription: "We are looking for an Electrical Engineer to design and implement electrical systems for our industrial construction projects.",
      responsibilities: ["Design electrical systems", "Prepare electrical drawings", "Select electrical equipment", "Coordinate with other disciplines", "Ensure electrical safety compliance", "Support commissioning activities"],
      requirements: ["Bachelor's degree in Electrical Engineering", "2-5 years of electrical design experience", "Knowledge of electrical codes and standards", "Proficiency in AutoCAD Electrical", "Understanding of power systems", "Strong technical skills"],
      benefits: ["Competitive salary", "Health insurance", "Professional development", "Performance bonuses", "Career growth"]
    },
    {
      title: "Instrumentation Engineer",
      category: "Management & Engineering",
      salary: "₹6,00,000 - ₹11,00,000",
      location: "Industrial Sites",
      experience: "2-5 years",
      timing: "Full-time",
      description: "Design and implement instrumentation and control systems for industrial processes.",
      detailedDescription: "Join our team as an Instrumentation Engineer to work on advanced control and instrumentation systems for industrial facilities.",
      responsibilities: ["Design instrumentation systems", "Develop control strategies", "Prepare instrument specifications", "Support system commissioning", "Troubleshoot control issues", "Maintain documentation"],
      requirements: ["Bachelor's degree in Instrumentation/Electronics Engineering", "2-5 years of instrumentation experience", "Knowledge of control systems", "Proficiency in instrumentation software", "Understanding of process control", "Strong analytical skills"],
      benefits: ["Attractive salary package", "Health benefits", "Technical training", "Performance incentives", "Career advancement"]
    },
    {
      title: "Civil Engineer",
      category: "Management & Engineering",
      salary: "₹4,00,000 - ₹8,00,000",
      location: "Project Sites",
      experience: "1-5 years",
      timing: "Full-time",
      description: "Plan and oversee civil construction activities including foundations, structures, and infrastructure.",
      detailedDescription: "We are seeking a Civil Engineer to handle various civil construction activities and ensure quality execution of civil works.",
      responsibilities: ["Plan civil construction activities", "Oversee foundation and structural work", "Ensure quality standards", "Coordinate with contractors", "Monitor construction progress", "Prepare progress reports"],
      requirements: ["Bachelor's degree in Civil Engineering", "1-5 years of civil construction experience", "Knowledge of construction methods", "Understanding of building codes", "Good project management skills", "Site supervision experience"],
      benefits: ["Competitive salary", "Site benefits", "Health insurance", "Skill development", "Growth opportunities"]
    },
    {
      title: "MEP Engineer",
      category: "Management & Engineering",
      salary: "₹6,00,000 - ₹12,00,000",
      location: "Multiple Locations",
      experience: "3-6 years",
      timing: "Full-time",
      description: "Design and coordinate Mechanical, Electrical, and Plumbing systems for construction projects.",
      detailedDescription: "Join our MEP team to design integrated mechanical, electrical, and plumbing systems for industrial and commercial projects.",
      responsibilities: ["Design MEP systems", "Coordinate between disciplines", "Prepare MEP drawings", "Ensure system integration", "Support installation activities", "Conduct system testing"],
      requirements: ["Bachelor's degree in Mechanical/Electrical Engineering", "3-6 years of MEP experience", "Knowledge of MEP systems", "Proficiency in MEP software", "Understanding of building services", "Good coordination skills"],
      benefits: ["Competitive package", "Health benefits", "Professional training", "Performance bonuses", "Career growth"]
    },
    {
      title: "HVAC Engineer",
      category: "Management & Engineering",
      salary: "₹5,00,000 - ₹9,00,000",
      location: "Multiple Locations",
      experience: "2-5 years",
      timing: "Full-time",
      description: "Design heating, ventilation, and air conditioning systems for industrial and commercial buildings.",
      detailedDescription: "We are looking for an HVAC Engineer to design efficient heating, ventilation, and air conditioning systems for our projects.",
      responsibilities: ["Design HVAC systems", "Perform load calculations", "Select HVAC equipment", "Prepare HVAC drawings", "Support installation", "Conduct system commissioning"],
      requirements: ["Bachelor's degree in Mechanical Engineering", "2-5 years of HVAC experience", "Knowledge of HVAC principles", "Proficiency in HVAC software", "Understanding of energy efficiency", "Good technical skills"],
      benefits: ["Competitive salary", "Health insurance", "Technical training", "Performance incentives", "Professional growth"]
    },
    {
      title: "Planning Engineer",
      category: "Management & Engineering",
      salary: "₹6,00,000 - ₹11,00,000",
      location: "Project Sites",
      experience: "3-6 years",
      timing: "Full-time",
      description: "Develop project schedules, monitor progress, and ensure timely completion of construction activities.",
      detailedDescription: "Join our planning team to develop comprehensive project schedules and monitor project progress to ensure timely delivery.",
      responsibilities: ["Develop project schedules", "Monitor project progress", "Update project plans", "Coordinate with teams", "Prepare progress reports", "Identify critical paths"],
      requirements: ["Bachelor's degree in Engineering", "3-6 years of planning experience", "Proficiency in Primavera/MS Project", "Knowledge of construction processes", "Strong analytical skills", "Good communication abilities"],
      benefits: ["Attractive salary", "Health benefits", "Professional development", "Performance bonuses", "Career advancement"]
    },
    {
      title: "Project Coordinator",
      category: "Management & Engineering",
      salary: "₹4,00,000 - ₹7,00,000",
      location: "Office/Site",
      experience: "2-4 years",
      timing: "Full-time",
      description: "Coordinate project activities, facilitate communication, and support project management functions.",
      detailedDescription: "We are seeking a Project Coordinator to support project management activities and ensure smooth coordination between various project stakeholders.",
      responsibilities: ["Coordinate project activities", "Facilitate team communication", "Maintain project documentation", "Schedule meetings", "Track project milestones", "Support project managers"],
      requirements: ["Bachelor's degree in Engineering/Management", "2-4 years of coordination experience", "Good organizational skills", "Strong communication abilities", "Proficiency in MS Office", "Project management knowledge"],
      benefits: ["Competitive salary", "Health insurance", "Skill development", "Performance incentives", "Growth opportunities"]
    },
    // Site & Technical Staff
    {
      title: "Site Incharge",
      category: "Site & Technical Staff",
      salary: "₹6,00,000 - ₹10,00,000",
      location: "Project Sites",
      experience: "5-8 years",
      timing: "Full-time",
      description: "Overall responsibility for site operations, safety, and project execution at construction sites.",
      detailedDescription: "We are looking for an experienced Site Incharge to take overall responsibility for site operations and ensure successful project execution.",
      responsibilities: ["Manage overall site operations", "Ensure safety compliance", "Coordinate with all teams", "Monitor quality standards", "Manage site resources", "Report to project management"],
      requirements: ["Bachelor's degree in Engineering", "5-8 years of site management experience", "Strong leadership skills", "Knowledge of safety protocols", "Good decision-making abilities", "Site management experience"],
      benefits: ["Competitive package", "Site allowances", "Health insurance", "Leadership development", "Performance bonuses"]
    },
    {
      title: "Site Supervisor",
      category: "Site & Technical Staff",
      salary: "₹4,00,000 - ₹7,00,000",
      location: "Project Sites",
      experience: "3-6 years",
      timing: "Full-time",
      description: "Supervise construction activities, ensure quality standards and coordinate with various teams on site.",
      detailedDescription: "We are looking for an experienced Site Supervisor to oversee daily construction activities and ensure project execution as per specifications and timelines.",
      responsibilities: ["Supervise daily construction activities", "Ensure safety and quality compliance", "Coordinate with contractors and workers", "Monitor progress and report issues", "Resolve on-site technical problems", "Maintain site documentation"],
      requirements: ["Diploma/Bachelor's in Civil/Mechanical Engineering", "3-6 years of site supervision experience", "Knowledge of construction processes", "Strong leadership skills", "Ability to work in challenging conditions", "Problem-solving abilities"],
      benefits: ["Competitive salary", "Site allowances", "Health insurance", "Career growth", "Performance incentives"]
    },
    {
      title: "Mechanical Technician",
      category: "Site & Technical Staff",
      salary: "₹3,00,000 - ₹5,00,000",
      location: "Project Sites",
      experience: "2-4 years",
      timing: "Full-time",
      description: "Install, maintain, and repair mechanical equipment and systems at construction sites.",
      detailedDescription: "Join our technical team as a Mechanical Technician to handle installation, maintenance, and repair of mechanical equipment.",
      responsibilities: ["Install mechanical equipment", "Perform maintenance activities", "Troubleshoot mechanical issues", "Follow safety procedures", "Maintain equipment records", "Support commissioning activities"],
      requirements: ["ITI/Diploma in Mechanical Engineering", "2-4 years of mechanical experience", "Knowledge of mechanical systems", "Good troubleshooting skills", "Safety awareness", "Hands-on experience"],
      benefits: ["Competitive salary", "Site benefits", "Health insurance", "Skill development", "Overtime opportunities"]
    },
    {
      title: "Plumbing Technician",
      category: "Site & Technical Staff",
      salary: "₹2,50,000 - ₹4,00,000",
      location: "Project Sites",
      experience: "2-4 years",
      timing: "Full-time",
      description: "Install and maintain plumbing systems, pipes, and fixtures in construction projects.",
      detailedDescription: "We are seeking skilled Plumbing Technicians to handle installation and maintenance of plumbing systems in our construction projects.",
      responsibilities: ["Install plumbing systems", "Maintain pipes and fixtures", "Repair plumbing issues", "Follow plumbing codes", "Work with various materials", "Ensure quality workmanship"],
      requirements: ["ITI/Certification in Plumbing", "2-4 years of plumbing experience", "Knowledge of plumbing systems", "Good manual skills", "Understanding of plumbing codes", "Physical fitness"],
      benefits: ["Competitive wages", "Site allowances", "Health coverage", "Skill training", "Overtime pay"]
    },
    {
      title: "ESP Fitter",
      category: "Site & Technical Staff",
      salary: "₹3,50,000 - ₹6,00,000",
      location: "Industrial Sites",
      experience: "3-5 years",
      timing: "Full-time",
      description: "Install, maintain, and repair Electrostatic Precipitator systems in industrial facilities.",
      detailedDescription: "Join our specialized team as an ESP Fitter to work on advanced Electrostatic Precipitator systems for industrial applications.",
      responsibilities: ["Install ESP systems", "Perform maintenance work", "Troubleshoot ESP issues", "Follow safety protocols", "Maintain system records", "Support commissioning"],
      requirements: ["ITI/Diploma in Electrical/Mechanical", "3-5 years of ESP experience", "Knowledge of ESP systems", "Good technical skills", "Safety consciousness", "Specialized training"],
      benefits: ["Attractive salary", "Specialized allowances", "Health insurance", "Technical training", "Career growth"]
    },
    {
      title: "Fabricator",
      category: "Site & Technical Staff",
      salary: "₹3,00,000 - ₹5,00,000",
      location: "Workshop/Site",
      experience: "2-5 years",
      timing: "Full-time",
      description: "Fabricate structural components, piping, and equipment as per engineering drawings and specifications.",
      detailedDescription: "We are looking for skilled Fabricators to create structural components and equipment according to engineering specifications.",
      responsibilities: ["Fabricate structural components", "Work with various materials", "Follow engineering drawings", "Ensure quality standards", "Operate fabrication equipment", "Maintain workshop safety"],
      requirements: ["ITI in Welding/Fabrication", "2-5 years of fabrication experience", "Ability to read drawings", "Knowledge of materials", "Good manual skills", "Safety awareness"],
      benefits: ["Competitive salary", "Workshop benefits", "Health insurance", "Skill development", "Performance incentives"]
    },
    {
      title: "Welder",
      category: "Site & Technical Staff",
      salary: "₹3,00,000 - ₹5,50,000",
      location: "Workshop/Site",
      experience: "2-5 years",
      timing: "Full-time",
      description: "Perform welding operations for structural fabrication and construction activities.",
      detailedDescription: "Join our welding team to perform high-quality welding operations for various construction and fabrication projects.",
      responsibilities: ["Perform welding operations", "Follow welding procedures", "Ensure weld quality", "Maintain welding equipment", "Follow safety protocols", "Work with different materials"],
      requirements: ["ITI in Welding", "2-5 years of welding experience", "Welding certifications", "Knowledge of welding techniques", "Good hand-eye coordination", "Safety consciousness"],
      benefits: ["Competitive wages", "Welding allowances", "Health coverage", "Certification support", "Overtime opportunities"]
    },
    {
      title: "Argon Welder",
      category: "Site & Technical Staff",
      salary: "₹3,50,000 - ₹6,00,000",
      location: "Workshop/Site",
      experience: "3-6 years",
      timing: "Full-time",
      description: "Perform specialized argon welding for high-quality joints in critical applications.",
      detailedDescription: "We are seeking skilled Argon Welders for specialized welding operations requiring high precision and quality.",
      responsibilities: ["Perform argon welding", "Ensure high-quality joints", "Follow specialized procedures", "Maintain welding equipment", "Work on critical applications", "Ensure safety compliance"],
      requirements: ["ITI in Welding with Argon certification", "3-6 years of argon welding experience", "Specialized welding skills", "Knowledge of gas welding", "Precision and attention to detail", "Safety awareness"],
      benefits: ["Premium salary", "Specialized allowances", "Health insurance", "Advanced training", "Performance bonuses"]
    },
    {
      title: "Rigger",
      category: "Site & Technical Staff",
      salary: "₹2,50,000 - ₹4,50,000",
      location: "Project Sites",
      experience: "2-4 years",
      timing: "Full-time",
      description: "Handle rigging operations for lifting and moving heavy equipment and materials safely.",
      detailedDescription: "Join our rigging team to handle safe lifting and moving operations for heavy equipment and structural components.",
      responsibilities: ["Perform rigging operations", "Ensure safe lifting practices", "Inspect rigging equipment", "Follow safety procedures", "Coordinate with crane operators", "Maintain rigging gear"],
      requirements: ["Rigging certification", "2-4 years of rigging experience", "Knowledge of lifting techniques", "Understanding of load calculations", "Physical fitness", "Safety consciousness"],
      benefits: ["Competitive salary", "Safety allowances", "Health coverage", "Safety training", "Overtime pay"]
    },
    {
      title: "Rigging Supervisor",
      category: "Site & Technical Staff",
      salary: "₹4,00,000 - ₹7,00,000",
      location: "Project Sites",
      experience: "4-7 years",
      timing: "Full-time",
      description: "Supervise rigging operations and ensure safe lifting practices across construction sites.",
      detailedDescription: "We are looking for an experienced Rigging Supervisor to oversee all rigging operations and ensure safety compliance.",
      responsibilities: ["Supervise rigging operations", "Ensure safety compliance", "Train rigging personnel", "Plan lifting operations", "Inspect rigging equipment", "Coordinate with project teams"],
      requirements: ["Advanced rigging certification", "4-7 years of rigging supervision experience", "Strong leadership skills", "Knowledge of safety regulations", "Good planning abilities", "Training experience"],
      benefits: ["Attractive salary", "Supervision allowances", "Health insurance", "Leadership training", "Performance incentives"]
    },
    {
      title: "Scaffolding Supervisor",
      category: "Site & Technical Staff",
      salary: "₹3,50,000 - ₹6,00,000",
      location: "Project Sites",
      experience: "3-6 years",
      timing: "Full-time",
      description: "Supervise scaffolding erection, maintenance, and dismantling operations at construction sites.",
      detailedDescription: "Join our team as a Scaffolding Supervisor to oversee safe and efficient scaffolding operations across our projects.",
      responsibilities: ["Supervise scaffolding operations", "Ensure structural integrity", "Train scaffolding teams", "Inspect scaffolding systems", "Follow safety standards", "Coordinate with site teams"],
      requirements: ["Scaffolding supervisor certification", "3-6 years of scaffolding experience", "Knowledge of scaffolding systems", "Understanding of safety regulations", "Leadership skills", "Physical fitness"],
      benefits: ["Competitive salary", "Site allowances", "Health insurance", "Safety training", "Career advancement"]
    },
    {
      title: "Scaffolder",
      category: "Site & Technical Staff",
      salary: "₹2,50,000 - ₹4,00,000",
      location: "Project Sites",
      experience: "1-4 years",
      timing: "Full-time",
      description: "Erect, maintain, and dismantle scaffolding systems for construction and maintenance work.",
      detailedDescription: "We are seeking skilled Scaffolders to handle scaffolding operations safely and efficiently at our construction sites.",
      responsibilities: ["Erect scaffolding systems", "Maintain scaffolding structures", "Dismantle scaffolding safely", "Follow safety procedures", "Inspect scaffolding components", "Work at heights safely"],
      requirements: ["Scaffolding certification", "1-4 years of scaffolding experience", "Knowledge of scaffolding systems", "Physical fitness", "Height comfort", "Safety awareness"],
      benefits: ["Competitive wages", "Height allowances", "Health coverage", "Safety training", "Skill development"]
    },
    {
      title: "Crane Operator",
      category: "Site & Technical Staff",
      salary: "₹4,00,000 - ₹7,00,000",
      location: "Project Sites",
      experience: "3-6 years",
      timing: "Full-time",
      description: "Operate cranes safely and efficiently for lifting and moving materials and equipment.",
      detailedDescription: "Join our team as a Crane Operator to handle safe and efficient crane operations for our construction projects.",
      responsibilities: ["Operate cranes safely", "Perform pre-operation inspections", "Follow lifting procedures", "Coordinate with riggers", "Maintain crane equipment", "Ensure safety compliance"],
      requirements: ["Crane operator license", "3-6 years of crane operation experience", "Knowledge of crane operations", "Good hand-eye coordination", "Understanding of load charts", "Safety consciousness"],
      benefits: ["Attractive salary", "Operator allowances", "Health insurance", "Equipment training", "Performance bonuses"]
    },
    {
      title: "Forklift Operator",
      category: "Site & Technical Staff",
      salary: "₹2,50,000 - ₹4,00,000",
      location: "Project Sites",
      experience: "1-3 years",
      timing: "Full-time",
      description: "Operate forklifts for material handling and warehouse operations at construction sites.",
      detailedDescription: "We are looking for skilled Forklift Operators to handle material movement and warehouse operations efficiently.",
      responsibilities: ["Operate forklifts safely", "Handle material movement", "Maintain equipment", "Follow safety procedures", "Coordinate with warehouse team", "Perform equipment checks"],
      requirements: ["Forklift operator license", "1-3 years of forklift experience", "Knowledge of material handling", "Good spatial awareness", "Physical fitness", "Safety consciousness"],
      benefits: ["Competitive salary", "Equipment allowances", "Health coverage", "Training opportunities", "Overtime pay"]
    },
    {
      title: "Heavy Equipment Operator",
      category: "Site & Technical Staff",
      salary: "₹3,50,000 - ₹6,00,000",
      location: "Project Sites",
      experience: "3-6 years",
      timing: "Full-time",
      description: "Operate heavy construction equipment including excavators, bulldozers, and other machinery.",
      detailedDescription: "Join our equipment team to operate various heavy construction machinery for earthwork and construction activities.",
      responsibilities: ["Operate heavy equipment", "Perform equipment maintenance", "Follow safety procedures", "Coordinate with site teams", "Conduct pre-operation checks", "Maintain equipment logs"],
      requirements: ["Heavy equipment operator license", "3-6 years of equipment operation experience", "Knowledge of construction equipment", "Good mechanical understanding", "Safety awareness", "Physical fitness"],
      benefits: ["Attractive salary", "Equipment allowances", "Health insurance", "Equipment training", "Performance incentives"]
    },
    {
      title: "AutoCAD Draughtsman",
      category: "Site & Technical Staff",
      salary: "₹3,00,000 - ₹5,50,000",
      location: "Office/Site",
      experience: "2-5 years",
      timing: "Full-time",
      description: "Prepare technical drawings and documentation using AutoCAD software for construction projects.",
      detailedDescription: "We are seeking skilled AutoCAD Draughtsmen to prepare accurate technical drawings and documentation for our projects.",
      responsibilities: ["Prepare technical drawings", "Create detailed plans", "Update drawing revisions", "Coordinate with engineers", "Maintain drawing standards", "Support project documentation"],
      requirements: ["Diploma in Engineering/Drafting", "2-5 years of AutoCAD experience", "Proficiency in AutoCAD software", "Knowledge of drafting standards", "Attention to detail", "Good technical understanding"],
      benefits: ["Competitive salary", "Software training", "Health insurance", "Skill development", "Career growth"]
    },
    {
      title: "Surveyor",
      category: "Site & Technical Staff",
      salary: "₹3,00,000 - ₹5,00,000",
      location: "Project Sites",
      experience: "2-5 years",
      timing: "Full-time",
      description: "Conduct land surveys, set construction benchmarks, and ensure accurate positioning of structures.",
      detailedDescription: "Join our surveying team to conduct accurate land surveys and provide essential positioning data for construction projects.",
      responsibilities: ["Conduct land surveys", "Set construction benchmarks", "Prepare survey reports", "Use surveying instruments", "Maintain survey records", "Support construction layout"],
      requirements: ["Diploma in Civil Engineering/Surveying", "2-5 years of surveying experience", "Knowledge of surveying instruments", "Understanding of survey techniques", "Good mathematical skills", "Attention to accuracy"],
      benefits: ["Competitive salary", "Field allowances", "Health insurance", "Equipment training", "Professional development"]
    },
    // Quality, Safety & Support
    {
      title: "Safety Officer",
      category: "Quality, Safety & Support",
      salary: "₹4,00,000 - ₹8,00,000",
      location: "Project Sites",
      experience: "2-5 years",
      timing: "Full-time",
      description: "Ensure workplace safety compliance, conduct safety audits, and implement safety protocols.",
      detailedDescription: "We are seeking a dedicated Safety Officer to ensure the highest safety standards across our construction sites. You'll play a crucial role in protecting our workforce and maintaining compliance.",
      responsibilities: ["Develop and implement safety policies", "Conduct regular safety inspections", "Provide safety training to workers", "Investigate accidents and incidents", "Ensure compliance with safety regulations", "Maintain safety documentation"],
      requirements: ["Diploma/Bachelor's in Safety Engineering", "2-5 years of safety experience in construction", "NEBOSH/IOSH certification preferred", "Knowledge of safety regulations", "Strong communication and training skills", "Attention to detail and proactive approach"],
      benefits: ["Competitive salary package", "Health insurance coverage", "Safety certification support", "Performance incentives", "Career advancement opportunities"]
    },
    {
      title: "HSE Supervisor",
      category: "Quality, Safety & Support",
      salary: "₹5,00,000 - ₹9,00,000",
      location: "Project Sites",
      experience: "3-6 years",
      timing: "Full-time",
      description: "Supervise Health, Safety, and Environmental activities across construction sites and ensure compliance.",
      detailedDescription: "Join our HSE team as a Supervisor to oversee comprehensive health, safety, and environmental programs across our projects.",
      responsibilities: ["Supervise HSE activities", "Ensure regulatory compliance", "Conduct HSE training", "Monitor environmental impact", "Investigate incidents", "Prepare HSE reports"],
      requirements: ["Bachelor's degree in Safety/Environmental Engineering", "3-6 years of HSE supervision experience", "Advanced safety certifications", "Knowledge of environmental regulations", "Strong leadership skills", "Training and mentoring abilities"],
      benefits: ["Attractive salary package", "HSE allowances", "Health insurance", "Advanced certifications", "Leadership development"]
    },
    {
      title: "HSE Assistant",
      category: "Quality, Safety & Support",
      salary: "₹3,00,000 - ₹5,00,000",
      location: "Project Sites",
      experience: "1-3 years",
      timing: "Full-time",
      description: "Assist in implementing health, safety, and environmental programs at construction sites.",
      detailedDescription: "We are looking for an HSE Assistant to support our health, safety, and environmental initiatives across construction projects.",
      responsibilities: ["Assist in HSE implementation", "Conduct safety inspections", "Maintain HSE records", "Support training programs", "Monitor compliance", "Prepare documentation"],
      requirements: ["Diploma in Safety/Environmental studies", "1-3 years of HSE experience", "Basic safety certifications", "Knowledge of safety procedures", "Good documentation skills", "Attention to detail"],
      benefits: ["Competitive salary", "Safety training", "Health insurance", "Certification support", "Career growth"]
    },
    {
      title: "QA/QC Inspector",
      category: "Quality, Safety & Support",
      salary: "₹3,50,000 - ₹6,00,000",
      location: "Project Sites",
      experience: "2-5 years",
      timing: "Full-time",
      description: "Inspect construction work quality and ensure adherence to specifications and quality standards.",
      detailedDescription: "Join our quality team as a QA/QC Inspector to ensure the highest standards of construction quality across our projects.",
      responsibilities: ["Conduct quality inspections", "Verify compliance with specifications", "Prepare inspection reports", "Coordinate with contractors", "Monitor quality standards", "Support quality audits"],
      requirements: ["Diploma/Bachelor's in Civil/Mechanical Engineering", "2-5 years of QA/QC experience", "Knowledge of quality standards", "Understanding of construction methods", "Good documentation skills", "Attention to detail"],
      benefits: ["Competitive salary", "Quality allowances", "Health insurance", "Quality training", "Professional development"]
    },
    {
      title: "Quality Assurance Engineer",
      category: "Quality, Safety & Support",
      salary: "₹5,00,000 - ₹9,00,000",
      location: "Project Sites",
      experience: "3-6 years",
      timing: "Full-time",
      description: "Develop and implement quality assurance programs to ensure project quality standards.",
      detailedDescription: "We are seeking a Quality Assurance Engineer to develop comprehensive quality programs and ensure excellence in project delivery.",
      responsibilities: ["Develop QA programs", "Implement quality procedures", "Conduct quality audits", "Train quality personnel", "Monitor quality metrics", "Prepare quality reports"],
      requirements: ["Bachelor's degree in Engineering", "3-6 years of QA experience", "Knowledge of quality systems", "Understanding of ISO standards", "Strong analytical skills", "Training and leadership abilities"],
      benefits: ["Attractive salary package", "Quality certifications", "Health insurance", "Professional training", "Career advancement"]
    },
    {
      title: "Quality Control Engineer",
      category: "Quality, Safety & Support",
      salary: "₹4,50,000 - ₹8,00,000",
      location: "Project Sites",
      experience: "2-5 years",
      timing: "Full-time",
      description: "Monitor and control quality during construction activities to ensure compliance with standards.",
      detailedDescription: "Join our QC team to monitor construction quality and ensure all work meets specified standards and requirements.",
      responsibilities: ["Monitor construction quality", "Conduct quality tests", "Review quality documentation", "Coordinate with teams", "Implement corrective actions", "Maintain quality records"],
      requirements: ["Bachelor's degree in Engineering", "2-5 years of QC experience", "Knowledge of testing procedures", "Understanding of quality standards", "Good analytical skills", "Attention to detail"],
      benefits: ["Competitive salary", "Testing allowances", "Health insurance", "Quality training", "Professional growth"]
    },
    {
      title: "Document Controller",
      category: "Quality, Safety & Support",
      salary: "₹3,00,000 - ₹5,50,000",
      location: "Office/Site",
      experience: "2-4 years",
      timing: "Full-time",
      description: "Manage project documentation, maintain document control systems, and ensure proper document flow.",
      detailedDescription: "We are looking for a Document Controller to manage comprehensive project documentation and maintain efficient document control systems.",
      responsibilities: ["Manage project documents", "Maintain document control systems", "Ensure document accuracy", "Coordinate document flow", "Prepare document reports", "Support project teams"],
      requirements: ["Bachelor's degree in any discipline", "2-4 years of document control experience", "Knowledge of document management systems", "Good organizational skills", "Attention to detail", "Proficiency in MS Office"],
      benefits: ["Competitive salary", "Office benefits", "Health insurance", "System training", "Career development"]
    },
    {
      title: "Procurement Officer",
      category: "Quality, Safety & Support",
      salary: "₹4,00,000 - ₹7,00,000",
      location: "Office",
      experience: "3-5 years",
      timing: "Full-time",
      description: "Handle procurement activities, vendor management, and ensure timely material supply for projects.",
      detailedDescription: "Join our procurement team to manage vendor relationships and ensure efficient material supply for our construction projects.",
      responsibilities: ["Handle procurement activities", "Manage vendor relationships", "Negotiate contracts", "Ensure timely deliveries", "Monitor procurement costs", "Maintain procurement records"],
      requirements: ["Bachelor's degree in Engineering/Commerce", "3-5 years of procurement experience", "Knowledge of procurement processes", "Good negotiation skills", "Understanding of contracts", "Vendor management experience"],
      benefits: ["Attractive salary", "Procurement incentives", "Health insurance", "Professional training", "Performance bonuses"]
    },
    {
      title: "Materials Controller",
      category: "Quality, Safety & Support",
      salary: "₹3,00,000 - ₹5,00,000",
      location: "Project Sites",
      experience: "2-4 years",
      timing: "Full-time",
      description: "Control material inventory, track material usage, and ensure proper material management at sites.",
      detailedDescription: "We are seeking a Materials Controller to manage material inventory and ensure efficient material utilization across our projects.",
      responsibilities: ["Control material inventory", "Track material usage", "Maintain material records", "Coordinate with suppliers", "Monitor material quality", "Prepare material reports"],
      requirements: ["Diploma/Bachelor's in Engineering/Commerce", "2-4 years of materials management experience", "Knowledge of inventory systems", "Good organizational skills", "Understanding of materials", "Computer proficiency"],
      benefits: ["Competitive salary", "Site allowances", "Health insurance", "Inventory training", "Career growth"]
    },
    {
      title: "Storekeeper",
      category: "Quality, Safety & Support",
      salary: "₹2,50,000 - ₹4,00,000",
      location: "Project Sites",
      experience: "1-3 years",
      timing: "Full-time",
      description: "Manage site stores, maintain inventory records, and ensure proper storage of materials and equipment.",
      detailedDescription: "Join our stores team to manage site inventory and ensure proper storage and distribution of materials and equipment.",
      responsibilities: ["Manage site stores", "Maintain inventory records", "Issue materials", "Receive deliveries", "Ensure proper storage", "Prepare store reports"],
      requirements: ["High school/Diploma", "1-3 years of store management experience", "Knowledge of inventory procedures", "Good organizational skills", "Basic computer skills", "Attention to detail"],
      benefits: ["Competitive salary", "Store allowances", "Health coverage", "Training opportunities", "Skill development"]
    },
    {
      title: "Timekeeper",
      category: "Quality, Safety & Support",
      salary: "₹2,00,000 - ₹3,50,000",
      location: "Project Sites",
      experience: "1-3 years",
      timing: "Full-time",
      description: "Maintain attendance records, track working hours, and prepare payroll-related documentation.",
      detailedDescription: "We are looking for a Timekeeper to maintain accurate attendance records and support payroll activities for our project sites.",
      responsibilities: ["Maintain attendance records", "Track working hours", "Prepare timesheets", "Monitor overtime", "Support payroll processing", "Maintain personnel records"],
      requirements: ["High school/Commerce background", "1-3 years of timekeeping experience", "Knowledge of attendance systems", "Good numerical skills", "Basic computer knowledge", "Attention to accuracy"],
      benefits: ["Competitive salary", "Administrative benefits", "Health coverage", "System training", "Job security"]
    },
    {
      title: "Admin Assistant",
      category: "Quality, Safety & Support",
      salary: "₹2,50,000 - ₹4,00,000",
      location: "Office/Site",
      experience: "1-3 years",
      timing: "Full-time",
      description: "Provide administrative support, handle correspondence, and assist in office management activities.",
      detailedDescription: "Join our administrative team to provide comprehensive support for office operations and project administration.",
      responsibilities: ["Provide administrative support", "Handle correspondence", "Maintain office records", "Coordinate meetings", "Support project teams", "Manage office supplies"],
      requirements: ["Bachelor's degree in any discipline", "1-3 years of administrative experience", "Good communication skills", "Proficiency in MS Office", "Organizational abilities", "Professional demeanor"],
      benefits: ["Competitive salary", "Office benefits", "Health insurance", "Skill training", "Career development"]
    },
    {
      title: "Logistics Coordinator",
      category: "Quality, Safety & Support",
      salary: "₹3,50,000 - ₹6,00,000",
      location: "Office/Site",
      experience: "2-5 years",
      timing: "Full-time",
      description: "Coordinate logistics activities, manage transportation, and ensure efficient material and equipment movement.",
      detailedDescription: "We are seeking a Logistics Coordinator to manage comprehensive logistics operations and ensure efficient project support.",
      responsibilities: ["Coordinate logistics activities", "Manage transportation", "Plan material movement", "Coordinate with vendors", "Monitor logistics costs", "Ensure timely deliveries"],
      requirements: ["Bachelor's degree in Logistics/Supply Chain", "2-5 years of logistics experience", "Knowledge of transportation systems", "Good coordination skills", "Understanding of logistics processes", "Problem-solving abilities"],
      benefits: ["Attractive salary", "Logistics allowances", "Health insurance", "Professional training", "Performance incentives"]
    }
  ];

  const positions = [
    // Management & Engineering
    "Project Manager",
    "Project Engineer", 
    "Construction Engineer",
    "Piping Engineer",
    "Structural Engineer",
    "Mechanical Engineer",
    "Electrical Engineer",
    "Instrumentation Engineer",
    "Civil Engineer",
    "MEP Engineer",
    "HVAC Engineer",
    "Planning Engineer",
    "Project Coordinator",
    // Site & Technical Staff
    "Site Incharge",
    "Site Supervisor",
    "Mechanical Technician",
    "Plumbing Technician",
    "ESP Fitter",
    "Fabricator",
    "Welder",
    "Argon Welder",
    "Rigger",
    "Rigging Supervisor",
    "Scaffolding Supervisor",
    "Scaffolder",
    "Crane Operator",
    "Forklift Operator",
    "Heavy Equipment Operator",
    "AutoCAD Draughtsman",
    "Surveyor",
    // Quality, Safety & Support
    "Safety Officer",
    "HSE Supervisor",
    "HSE Assistant",
    "QA/QC Inspector",
    "Quality Assurance Engineer",
    "Quality Control Engineer",
    "Document Controller",
    "Procurement Officer",
    "Materials Controller",
    "Storekeeper",
    "Timekeeper",
    "Admin Assistant",
    "Logistics Coordinator",
    "Other"
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // File validation
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setResumeError("File size should be less than 5MB");
        return;
      }
      if (!file.type.includes('pdf') && !file.type.includes('doc') && !file.type.includes('docx')) {
        setResumeError("Please upload PDF or DOC file only");
        return;
      }
      setResume(file);
      setResumeError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const submitData = new FormData();
      
      // Append form data
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });
      
      // Append resume file if selected
      if (resume) {
        submitData.append("resume", resume);
      }

      const res = await axiosInstance.post(`/applications`, submitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      if (res.data.success) {
        toast.success(res.data.message || "Application submitted successfully!");
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
        setResume(null);
        setResumeError("");
        // Refresh jobs list after successful application
        fetchJobs();
      }
    } catch (error) {
      console.error('Application submission error:', error);
      toast.error(error.response?.data?.message || "Failed to submit application. Please try again.");
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

  const openJobDetails = (job, e) => {
    e.stopPropagation();
    setSelectedJob(job);
    setShowJobDetails(true);
  };

  const closeJobDetails = () => {
    setShowJobDetails(false);
    setSelectedJob(null);
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
            className="text-center mb-16 cursor-pointer"
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Explore our current job openings and find the perfect role for your career growth
            </p>
            {!loading && (
              <button
                onClick={() => fetchJobs(true)}
                disabled={refreshing}
                className="inline-flex items-center space-x-2 bg-yellow-400/20 hover:bg-yellow-400/30 border border-yellow-400/30 rounded-full px-4 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className={`w-2 h-2 bg-yellow-400 rounded-full ${refreshing ? 'animate-pulse' : ''}`}></span>
                <span className="text-yellow-600 text-sm font-semibold">
                  {refreshing ? 'Refreshing...' : 'Refresh Jobs'}
                </span>
              </button>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-20 bg-gray-200 rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-10 bg-gray-200 rounded"></div>
                    <div className="flex-1 h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))
            ) : (apiJobs && apiJobs.length > 0) ? (
              apiJobs.map((job, index) => (
                <motion.div
                  key={job._id}
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
                      <span className="text-sm">{job.type}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                    {job.description}
                  </p>

                  <div className="flex gap-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const jobDetails = {
                          ...job,
                          detailedDescription: job.description,
                          responsibilities: job.requirements?.slice(0, 6) || [],
                          requirements: job.requirements || [],
                          benefits: [
                            "Competitive salary package",
                            "Health insurance coverage", 
                            "Professional development",
                            "Performance bonuses",
                            "Career growth opportunities"
                          ],
                          timing: job.type
                        };
                        openJobDetails(jobDetails, e);
                      }}
                      className="flex-1 cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button className="flex-1 cursor-pointer bg-gradient-to-r from-[#631caf] to-[#8b0389] hover:from-[#7a1fc7] hover:to-[#a004a1] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))
            ) : !loading ? (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-400 text-6xl mb-4"><IoBagAddSharp className="mx-auto text-purple-800"/></div>
                <p className="text-gray-500 text-lg mb-2">No active job postings available</p>
                <p className="text-gray-400 text-sm mb-4">Check back later for new opportunities</p>
                <button
                  onClick={() => fetchJobs(true)}
                  disabled={refreshing}
                  className="bg-gradient-to-r from-[#631caf] to-[#8b0389] hover:from-[#7a1fc7] hover:to-[#a004a1] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {refreshing ? 'Refreshing...' : 'Refresh Jobs'}
                </button>
              </div>
            ) : (
              // Fallback to static jobs if API fails
              jobPositions.map((job, index) => (
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

                  <div className="flex gap-2">
                    <button 
                      onClick={(e) => openJobDetails(job, e)}
                      className="flex-1 cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button className="flex-1 cursor-pointer bg-gradient-to-r from-[#631caf] to-[#8b0389] hover:from-[#7a1fc7] hover:to-[#a004a1] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))
            )}
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
            className="text-center mb-16 cursor-pointer"
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
              className="bg-white rounded-2xl shadow-2xl p-8"
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
                        {apiJobs && apiJobs.length > 0 ? (
                          apiJobs.map((job) => (
                            <option key={job._id} value={job.title}>
                              {job.title}
                            </option>
                          ))
                        ) : (
                          positions.map((position, index) => (
                            <option key={index} value={position}>
                              {position}
                            </option>
                          ))
                        )}
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

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-[#30085b] mb-2">
                      <Upload className="w-4 h-4 inline mr-1" />
                      Upload Resume
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#870481] transition-colors">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        id="resume-upload"
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">
                          {resume ? resume.name : "Click to upload your resume"}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </label>
                    </div>
                    {resumeError && (
                      <p className="text-red-500 text-sm mt-2">{resumeError}</p>
                    )}
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

      {/* Job Details Modal */}
      {showJobDetails && selectedJob && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/10 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#30085b]">{selectedJob.title}</h2>
                <div className="flex items-center text-green-600 font-semibold mt-1">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span>{selectedJob.salary}</span>
                </div>
              </div>
              <button
                onClick={closeJobDetails}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#870481]" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">{selectedJob.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-[#870481]" />
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-semibold">{selectedJob.experience}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#870481]" />
                  <div>
                    <p className="text-sm text-gray-500">Type</p>
                    <p className="font-semibold">{selectedJob.timing}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#30085b] mb-4">Job Description</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedJob.detailedDescription}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#30085b] mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#30085b] mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Award className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#30085b] mb-4">Benefits & Perks</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    closeJobDetails();
                    scrollToForm(selectedJob.title);
                  }}
                  className="flex-1 bg-gradient-to-r from-[#631caf] to-[#8b0389] hover:from-[#7a1fc7] hover:to-[#a004a1] text-white cursor-pointer font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Apply for this Position</span>
                </button>
                <button
                  onClick={closeJobDetails}
                  className="flex-1 cursor-pointer sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Career;