import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [formValue, setFormValue] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);
	const ref = useRef();
	const handleChange = (e) => {
		const {
			target: { name, value },
		} = e;
		setFormValue((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleFocus = () => {};
	const handleBlur = () => {};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

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
				//TODO success message
				setFormValue({
					name: '',
					email: '',
					message: '',
				});
			})
			.catch((err) => {
				setLoading(false);
				console.log(err.message);
			});
	};

	const { name, email, message } = formValue;
	return (
		<section className='relative flex lg:flex-row flex-col max-container'>
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
		</section>
	);
};

export default Contact;
