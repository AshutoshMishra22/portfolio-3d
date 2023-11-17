import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import { ABOUT_URL, CONTACT_URL, PROJECT_URL } from '../constant';

const InfoBox = ({ text, link, btnText }) => {
	return (
		<div className='info-box'>
			<p className='font-medium sm:text-xl text-center'>
				{text}{' '}
				<Link to={link} className='neo-brutalism-white neo-btn'>
					{btnText}
					<img src={arrow} className='w-4 h-4 object-contain' />
				</Link>
			</p>
		</div>
	);
};

const renderContent = {
	1: (
		<h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
			Hi, i am <span className='font-semibold'>Ashutosh</span>👋
			<br />A Web developer from India.
		</h1>
	),
	2: (
		<InfoBox
			text='Worked with MNCs and picked up many skills along the way'
			link={ABOUT_URL}
			btnText='Learn More'
		/>
	),
	3: (
		<InfoBox
			text='Worked upon multiple projects success. Curious?'
			link={PROJECT_URL}
			btnText='Visit my portfolio'
		/>
	),
	4: (
		<InfoBox
			text="Need a web project done or looking for a dev? I'm just few keystrokes away"
			link={CONTACT_URL}
			btnText="Let's talk"
		/>
	),
};

const HomeInfo = ({ currentStage }) => {
	return <>{renderContent[currentStage] || null}</>;
};

export default HomeInfo;
