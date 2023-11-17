import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_URL } from '../constant';

const CTA = () => {
	return (
		<section className='cta'>
			<p className='cta-text text-black-500'>
				Have a project in mind? <br className='sm:block hidden' />
				Let's build something together!
			</p>
			<Link to={CONTACT_URL} className='btn'>
				Contact
			</Link>
		</section>
	);
};

export default CTA;
