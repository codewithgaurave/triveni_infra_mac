import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, X, ZoomIn } from 'lucide-react';

// Import images
import construction from '../../assets/construction.jpg';
import construction2 from '../../assets/construction2.jpg';
import chemical from '../../assets/chemical.jpg';
import manufacture from '../../assets/manufacture.jpg';
import powerEnergy from '../../assets/power-energy.jpg';
import welding from '../../assets/welding.jpg';

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [isFullscreen, setIsFullscreen] = useState(false);

	// Gallery images data
	const galleryImages = [
		{
			id: 1,
			src: construction,
			title: 'Construction Works',
			description: 'Industrial construction and structural works'
		},
		{
			id: 2,
			src: construction2,
			title: 'Infrastructure Development',
			description: 'Large-scale infrastructure projects'
		},
		{
			id: 3,
			src: chemical,
			title: 'Chemical Industry',
			description: 'Chemical plant construction and maintenance'
		},
		{
			id: 4,
			src: manufacture,
			title: 'Manufacturing Facilities',
			description: 'Manufacturing plant setup and equipment'
		},
		{
			id: 5,
			src: powerEnergy,
			title: 'Power & Energy',
			description: 'Power generation and energy infrastructure'
		},
		{
			id: 6,
			src: welding,
			title: 'Welding Services',
			description: 'Professional welding and fabrication'
		}
	];

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

	// Fullscreen handlers
	const openFullscreen = (image) => {
		setSelectedImage(image);
		setIsFullscreen(true);
		document.body.style.overflow = 'hidden';
	};

	const closeFullscreen = () => {
		setIsFullscreen(false);
		setSelectedImage(null);
		document.body.style.overflow = 'unset';
	};

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
							<span className="text-yellow-500 text-sm font-semibold">Our Gallery</span>
						</motion.div>

						<motion.h1
							variants={fadeInUp}
							className="text-5xl lg:text-6xl font-bold mb-6"
						>
							Our <span className="text-yellow-400">Gallery</span>
						</motion.h1>

						<motion.p
							variants={fadeInUp}
							className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
						>
							Showcasing our successful construction projects with precision engineering,
							quality workmanship, and client satisfaction across various industrial sectors.
						</motion.p>
					</motion.div>
				</div>
			</section>

			{/* Gallery Section */}
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
							<span className="text-yellow-500 text-sm font-semibold">Industrial Projects</span>
						</div>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
							Project <span className="text-[#870481]">Gallery</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Explore our diverse portfolio of industrial construction projects
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{galleryImages.map((image, index) => (
							<motion.div
								key={image.id}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ y: -5 }}
								className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
							>
								<div className="relative h-64 overflow-hidden rounded-t-2xl">
									<img
										src={image.src}
										alt={image.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										loading="lazy"
									/>
									<div className="absolute inset-0 bg- bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
										<button
											onClick={() => openFullscreen(image)}
											className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 p-3 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110"
										>
											<ZoomIn className="w-6 h-6" />
										</button>
									</div>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
									<p className="text-gray-600 text-sm mb-4">{image.description}</p>
									<button
										onClick={() => openFullscreen(image)}
										className="flex items-center space-x-2 text-[#870481] hover:text-yellow-500 font-semibold transition-colors duration-300"
									>
										<Eye className="w-4 h-4" />
										<span>View Full Image</span>
									</button>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Fullscreen Modal */}
			{isFullscreen && selectedImage && (
				<div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
					>
						<button
							onClick={closeFullscreen}
							className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 cursor-pointer hover:bg-opacity-30 text-black p-2 rounded-full transition-all duration-300"
						>
							<X className="w-6 h-6" />
						</button>
						<img
							src={selectedImage.src}
							alt={selectedImage.title}
							className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
							onClick={closeFullscreen}
						/>
						<div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
							<h3 className="text-xl font-bold mb-1">{selectedImage.title}</h3>
							<p className="text-gray-300">{selectedImage.description}</p>
						</div>
					</motion.div>
				</div>
			)}
		</div>
	);
};

export default Gallery;