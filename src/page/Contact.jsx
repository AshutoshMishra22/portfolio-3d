import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import { Fox } from '../model/Fox';
import Loader from '../component/Loader';
import { HIT, IDLE, SUCCESS, WALK } from '../constant';
import useAlert from '../hooks/useAlert';
import { Alert } from '../component/Alert';

const Contact = () => {
	const [formValue, setFormValue] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);
	const [currentAnimation, setCurrentAnimation] = useState(IDLE);
	const ref = useRef();

	const { alert, showAlert, hideAlert } = useAlert();

	const handleChange = (e) => {
		const {
			target: { name, value },
		} = e;
		setFormValue((prevState) => ({ ...prevState, [name]: value }));
	};
	const handleFocus = () => {
		setCurrentAnimation(WALK);
	};
	const handleBlur = () => {
		setCurrentAnimation(IDLE);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setCurrentAnimation(HIT);

		// email js api integration
		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: name,
					to_name: 'Ashutosh',
					from_email: email,
					to_email: 'ashutoshmishraofficial22@gmail.com',
					message: message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			)
			.then(() => {
				setLoading(false);
				showAlert({ text: 'Thank you for your message 😃', type: SUCCESS });
				setTimeout(() => {
					setCurrentAnimation(IDLE);
					hideAlert();
					setFormValue({
						name: '',
						email: '',
						message: '',
					});
				}, 3000);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err.message);
				showAlert({ text: "I didn't receive your message 😢" });
				setCurrentAnimation(IDLE);
			});
	};

	const { name, email, message } = formValue;
	return (
		<section className='relative flex lg:flex-row flex-col max-container'>
			{/* Alert */}
			{alert.show && <Alert {...alert} />}
			{/* Contact form */}
			<div className='flex-1 min-w-[50%] flex flex-col'>
				<h1>Get in Touch</h1>
				<form
					className='w-full flex flex-col gap-7 mt-14'
					onSubmit={handleSubmit}
					ref={ref}
				>
					<label
						className='text-black-500 font-semibold'
						htmlFor='contact-name-field'
					>
						Name
					</label>
					<input
						type='text'
						name='name'
						className='input'
						id='contact-name-field'
						placeholder='John'
						required
						value={name}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					<label
						className='text-black-500 font-semibold'
						htmlFor='contact-email-field'
					>
						Email
					</label>
					<input
						type='text'
						name='email'
						className='input'
						id='contact-email-field'
						placeholder='John@email.com'
						required
						value={email}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					<label
						className='text-black-500 font-semibold'
						htmlFor='contact-message-field'
					>
						Your Message
					</label>
					<textarea
						name='message'
						className='input'
						id='contact-message-field'
						placeholder='Let me know how can I help you!'
						required
						value={message}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					<button
						type='submit'
						className='btn'
						onFocus={handleFocus}
						onBlur={handleBlur}
					>
						{loading ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			</div>
			{/* Fox integrated */}
			<div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
				<Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
					<directionalLight intensity={2.5} position={[0, 0, 1]} />
					<ambientLight intensity={0.5} />
					<Suspense fallback={<Loader />}>
						<Fox
							currentAnimation={currentAnimation}
							position={[0.5, 0.35, 0]}
							rotation={[12.6, -0.6, 0]}
							scale={[0.5, 0.5, 0.5]}
						/>
					</Suspense>
				</Canvas>
			</div>
		</section>
	);
};

export default Contact;
