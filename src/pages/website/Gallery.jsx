import React, { useState } from 'react';
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
	Calendar,
	MapPin,
	Target,
	Star,
	Phone,
	Mail,
	Filter
} from 'lucide-react';

const Gallery = () => {
	const [activeFilter, setActiveFilter] = useState('all');

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

	// Gallery categories based on PDF services
	const GalleryCategories = [
		{ id: 'all', name: 'All Gallerys', count: 12 },
		{ id: 'structural', name: 'Structural Works', count: 5 },
		{ id: 'piping', name: 'Piping Systems', count: 4 },
		{ id: 'mechanical', name: 'Mechanical', count: 3 },
		{ id: 'electrical', name: 'Electrical', count: 4 }
	];

	// Gallerys data based on PDF content and clients
	const Gallerys = [
		{
			id: 1,
			title: 'SUZLON Wind Energy Infrastructure',
			client: 'SUZLON',
			category: 'structural',
			description: 'Structural fabrication and erection for wind turbine foundations and support structures in renewable energy Gallery.',
			services: ['Structural Fabrication', 'Erection Works', 'Heavy Structures'],
			duration: '6 Months',
			location: 'Gujarat, India',
			status: 'Completed',
			year: '2023',
			image: 'suzlon-Gallery',
			achievements: [
				'50+ Structures Fabricated',
				'Zero Safety Incidents',
				'On-time Delivery',
				'Client Satisfaction: 100%'
			],
			color: 'from-green-500 to-green-600'
		},
		{
			id: 2,
			title: 'GEECO Industrial Piping System',
			client: 'GEECO',
			category: 'piping',
			description: 'Complete piping fabrication and installation for industrial plant including big-bore and small-bore systems.',
			services: ['Piping Fabrication', 'Pipeline Installation', 'Quality Testing'],
			duration: '4 Months',
			location: 'Maharashtra, India',
			status: 'Completed',
			year: '2023',
			image: 'geeco-Gallery',
			achievements: [
				'5000+ Meters Piping',
				'Precision Welding',
				'Leak-proof Installation',
				'Industry Standards Compliant'
			],
			color: 'from-blue-500 to-blue-600'
		},
		{
			id: 3,
			title: 'TEFUGEN ESP Commissioning',
			client: 'TEFUGEN',
			category: 'mechanical',
			description: 'Erection, commissioning and troubleshooting of Electrostatic Precipitators for advanced technology facility.',
			services: ['ESP Erection', 'Commissioning', 'Technical Support'],
			duration: '3 Months',
			location: 'Gujarat, India',
			status: 'Completed',
			year: '2023',
			image: 'tefugen-Gallery',
			achievements: [
				'Advanced ESP Systems',
				'Efficient Commissioning',
				'24/7 Technical Support',
				'Performance Optimization'
			],
			color: 'from-purple-500 to-purple-600'
		},
		{
			id: 4,
			title: 'Industrial Electrical Works',
			client: 'Multiple Clients',
			category: 'electrical',
			description: 'Comprehensive electrical works including cable laying, cable tray setup and support structure installation.',
			services: ['Cable Laying', 'Cable Trays', 'Support Structures'],
			duration: '5 Months',
			location: 'Various Locations',
			status: 'Completed',
			year: '2023',
			image: 'electrical-Gallery',
			achievements: [
				'Safe Installation',
				'Code Compliance',
				'Efficient Power Distribution',
				'Reliable Systems'
			],
			color: 'from-yellow-500 to-yellow-600'
		},
		{
			id: 5,
			title: 'Heavy Structural Fabrication',
			client: 'Industrial Client',
			category: 'structural',
			description: 'Fabrication and erection of heavy structural components for large-scale industrial facility.',
			services: ['Heavy Structures', 'Precision Engineering', 'Quality Control'],
			duration: '8 Months',
			location: 'Rajasthan, India',
			status: 'Completed',
			year: '2023',
			image: 'structural-Gallery',
			achievements: [
				'Heavy-duty Structures',
				'Precision Engineering',
				'Quality Certified',
				'Timely Completion'
			],
			color: 'from-orange-500 to-orange-600'
		},
		{
			id: 6,
			title: 'HDPE Fabrication Gallery',
			client: 'Chemical Industry',
			category: 'piping',
			description: 'Custom HDPE fabrication with precision cutting, welding and shaping for chemical processing plant.',
			services: ['HDPE Fabrication', 'Custom Solutions', 'Precision Work'],
			duration: '2 Months',
			location: 'Gujarat, India',
			status: 'Completed',
			year: '2023',
			image: 'hdpe-Gallery',
			achievements: [
				'Custom Fabrication',
				'Chemical Resistance',
				'Precision Work',
				'Durable Solutions'
			],
			color: 'from-teal-500 to-teal-600'
		}
	];

	// Filtered Gallerys
	const filteredGallerys = activeFilter === 'all'
		? Gallerys
		: Gallerys.filter(Gallery => Gallery.category === activeFilter);

	// Gallery statistics
	const GalleryStats = [
		{
			number: '50+',
			title: 'Gallerys Completed',
			description: 'Successful Gallery deliveries'
		},
		{
			number: '15+',
			title: 'Expert Engineers',
			description: 'Skilled professionals'
		},
		{
			number: '100%',
			title: 'Client Satisfaction',
			description: 'Exceeding expectations'
		},
		{
			number: '24/7',
			title: 'Gallery Support',
			description: 'Round-the-clock service'
		}
	];

	// Gallery process
	const GalleryProcess = [
		{
			step: '01',
			title: 'Consultation',
			description: 'Understanding client requirements and Gallery scope'
		},
		{
			step: '02',
			title: 'Planning',
			description: 'Detailed Gallery planning and resource allocation'
		},
		{
			step: '03',
			title: 'Execution',
			description: 'Precise implementation with quality control'
		},
		{
			step: '04',
			title: 'Delivery',
			description: 'Timely completion and client handover'
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
							<span className="text-yellow-500 text-sm font-semibold">Our Gallerys</span>
						</motion.div>

						<motion.h1
							variants={fadeInUp}
							className="text-5xl lg:text-6xl font-bold mb-6"
						>
							Our <span className="text-yellow-400">Gallerys</span>
						</motion.h1>

						<motion.p
							variants={fadeInUp}
							className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
						>
							Showcasing our successful construction Gallerys with precision engineering,
							quality workmanship, and client satisfaction across various industrial sectors.
						</motion.p>
					</motion.div>
				</div>
			</section>

			{/* Gallery Statistics */}
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
							Gallery <span className="text-[#870481]">Success</span>
						</h2>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{GalleryStats.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
								className="bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389] rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
							>
								<div className="w-20 h-20 bg-zinc-200 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#30085b] text-2xl font-bold">
									{stat.number}
								</div>
								<h3 className="text-2xl font-bold text-white mb-4">{stat.title}</h3>
								<p className="text-gray-100 leading-relaxed">{stat.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Gallery Filters */}
			<section className="py-12 bg-gradient-to-br from-[#631caf] via-[#8a5387] to-[#8b0389]">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="text-center mb-8"
					>
						<div className="flex items-center justify-center space-x-2 mb-4">
							<Filter className="w-5 h-5 text-yellow-400" />
							<span className="text-lg font-semibold text-white">Filter Gallerys</span>
						</div>

						<div className="flex flex-wrap justify-center gap-4">
							{GalleryCategories.map((category) => (
								<motion.button
									key={category.id}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={() => setActiveFilter(category.id)}
									className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${activeFilter === category.id
										? 'bg-gradient-to-r from-[#631caf] to-[#8b0389] text-white shadow-lg'
										: 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-[#631caf] hover:to-[#8b0389] hover:text-white shadow-sm'
										}`}
								>
									{category.name} ({category.count})
								</motion.button>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Gallerys Grid */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredGallerys.map((Gallery, index) => (
							<motion.div
								key={Gallery.id}
								initial={{ opacity: 0, y: 60 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ y: -10 }}
								className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 group"
							>
								{/* Gallery Image */}
								<div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
									<div className="absolute inset-0 flex items-center justify-center">
										<div className={`w-16 h-16 bg-gradient-to-r ${Gallery.color} rounded-2xl flex items-center justify-center text-white`}>
											<Building2 className="w-8 h-8" />
										</div>
									</div>
									<div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
										{Gallery.status}
									</div>
									<div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
										{Gallery.year}
									</div>
								</div>

								{/* Gallery Content */}
								<div className="p-6">
									<div className="flex items-center justify-between mb-3">
										<span className="text-[#870481] font-semibold text-sm">{Gallery.client}</span>
										<span className="text-gray-500 text-sm flex items-center">
											<Calendar className="w-4 h-4 mr-1" />
											{Gallery.duration}
										</span>
									</div>

									<h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
										{Gallery.title}
									</h3>

									<p className="text-gray-600 text-sm mb-4 leading-relaxed">
										{Gallery.description}
									</p>

									<div className="flex items-center text-gray-500 text-sm mb-4">
										<MapPin className="w-4 h-4 mr-1" />
										{Gallery.location}
									</div>

									{/* Services */}
									<div className="mb-4">
										<h4 className="font-semibold text-gray-800 text-sm mb-2">Services:</h4>
										<div className="flex flex-wrap gap-2">
											{Gallery.services.map((service, serviceIndex) => (
												<span
													key={serviceIndex}
													className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
												>
													{service}
												</span>
											))}
										</div>
									</div>

									{/* Achievements */}
									<div className="space-y-2 mb-4">
										{Gallery.achievements.slice(0, 2).map((achievement, achievementIndex) => (
											<div key={achievementIndex} className="flex items-center space-x-2">
												<CheckCircle className="w-4 h-4 text-[#c410bb] flex-shrink-0" />
												<span className="text-gray-700 text-xs">{achievement}</span>
											</div>
										))}
									</div>

									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex justify-between items-center pt-4 border-t border-gray-200"
									>
										<Link
											to={`/Gallerys/${Gallery.id}`}
											className="inline-flex items-center space-x-1 text-yellow-400 hover:text-yellow-500 font-semibold text-sm transition-colors duration-200"
										>
											<span>View Details</span>
											<ArrowRight className="w-4 h-4" />
										</Link>
										<div className="flex items-center space-x-1">
											{[...Array(5)].map((_, i) => (
												<Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
											))}
										</div>
									</motion.div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Gallery Process */}
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
							<span className="text-yellow-500 text-sm font-semibold">Our Process</span>
						</div>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
							Gallery <span className="text-[#870481]">Process</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Systematic approach to ensure successful Gallery delivery from concept to completion
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{GalleryProcess.map((process, index) => (
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
						<h2 className="text-4xl lg:text-5xl font-bold mb-6">
							Start Your <span className="text-yellow-400">Gallery</span>
						</h2>
						<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
							Ready to begin your construction Gallery? Contact us for a detailed consultation and Gallery proposal.
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

export default Gallery;