import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from 'lucide-react';

const Icons = ({ isMobileMenuOpen }) => {
	//for whatsapp
	const handleWhatsAppClick = () => {
		window.open('https://wa.me/918292111172', '_blank');
	};
	//for call
	const handlePhoneClick = () => {
		window.open('tel:+918292111172', '_self');
	};

	return (
		<>
			{/* Call icon fixed on left bottom */}
			<button
				onClick={handlePhoneClick}
				className={`fixed cursor-pointer rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 ${
					isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
				} h-12 w-12 sm:h-14 sm:w-14 bottom-20 sm:bottom-24 left-3 sm:left-5`}
			>
				<Phone className="text-lg sm:text-xl" />
			</button>

			{/* WhatsApp icon fixed on left bottom */}
			<button
				onClick={handleWhatsAppClick}
				className={`fixed cursor-pointer rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 ${
					isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
				} h-12 w-12 sm:h-14 sm:w-14 bottom-3 sm:bottom-5 left-3 sm:left-5`}
			>
				<FaWhatsapp className="text-xl sm:text-2xl" />
			</button>
		</>
	);
}

export default Icons;