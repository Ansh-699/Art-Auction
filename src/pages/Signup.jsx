import React, { useState } from 'react';
import { FaRegUser, FaEnvelope, FaLock, FaKey } from 'react-icons/fa';
import { useTheme } from '@/ThemeContext';
import signup from '../assets/images/signup1.png';

const Signup = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		repeatPassword: '',
	});

	const { darkMode } = useTheme();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<>
		<div className={`flex items-center justify-center min-h-[75vh] w-full ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
			<div className={`relative p-1 rounded-xl flex flex-col md:flex-row space-x-4 w-full max-w-5xl min-h-[500px] h-auto border ${darkMode ? 'bg-white text-black' : 'bg-white shadow-2xl'} -mt-4 overflow-visible`}>
				
				{/* Left Form Section */}
				<div className="flex flex-col justify-center w-full md:w-1/2 p-4 pl-6">
					<h2 className="text-2xl font-bold mb-6 text-black text-center">Sign up</h2>
					<form className="space-y-4 ml-auto w-[80%]" onSubmit={handleSubmit}>
						{['name', 'email', 'password', 'repeatPassword'].map((field, index) => (
							<div key={index} className="flex items-center space-x-3">
								{field === 'name' && <FaRegUser className="text-gray-400" size={16} />}
								{field === 'email' && <FaEnvelope className="text-gray-400" size={16} />}
								{field === 'password' && <FaLock className="text-gray-400" size={16} />}
								{field === 'repeatPassword' && <FaKey className="text-gray-400" size={16} />}
								<input
									type={field.includes('password') ? 'password' : 'text'}
									name={field}
									placeholder={field === 'repeatPassword' ? 'Repeat Password' : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
									className={`w-full px-4 py-2 border rounded-md outline-none text-sm ${
										darkMode ? 'bg-white border-gray-600 text-black' : 'bg-white border-gray-300'
									}`}
									value={formData[field]}
									onChange={handleChange}
								/>
							</div>
						))}
						<div className="flex items-center text-sm">
							<input type="checkbox" className="mr-2" />
							<span>
								I agree to all statements in{' '}
								<a href="#" className="text-blue-600">
									Terms of Service
								</a>
							</span>
						</div>
						<div className="flex justify-center">
							<button
								type="submit"
								className="w-full py-2 rounded-md mt-4 bg-blue-600 text-white hover:bg-blue-500 transform transition-transform duration-100 hover:scale-105 text-sm">
								Register
							</button>
						</div>
					</form>
				</div>

				{/* Right Image Section */}
				<div className="hidden md:flex items-center justify-center w-1/2 p-4">
					<div className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden">
						<img src={signup} alt="Authentication" className="w-full h-auto object-cover" />
					</div>
				</div>
			</div>
		</div>
		<div className={`h-[4vh] ${darkMode ? 'bg-black' : 'bg-white'}`}></div>
		</>
	);
}

export default Signup;
