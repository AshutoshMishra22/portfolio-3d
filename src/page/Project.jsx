import React from 'react';
import { projects } from '../constant';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from '../component/CTA';

const Project = () => {
	return (
		<section className='max-container'>
			<h1 className='head-text'>
				My{' '}
				<span className='blue-gradient_text font-semibold drop-shadow'>
					{' '}
					Projects
				</span>{' '}
			</h1>
			<div className='mt-5 flex flex-col gap-3 text-slate-500'>
				<p>
					Web developer based in India, specializing in frontend developement
					through hands-on learning and building applications.
				</p>
			</div>
			<p className='text-slate-500 mt-2 leading-relaxed'>
				I've embarked on numerous projects throughout the years, but these are
				the ones I hold closest to my heart. Many of them are open-source, so if
				you come across something that piques your interest, feel free to
				explore the codebase and contribute your ideas for further enhancements.
				Your collaboration is highly valued!
			</p>
			<div className='flex flex-wrap my-20 gap-16'>
				{projects.map((project) => (
					<div className='lg:w-[400px] w-full' key={project.name}>
						<div className='block-container w-12 h-12'>
							<div className={`btn-black rounded-xl ${project.theme}`} />
							<div className='btn-front rounded-xl flex justify-center items-center'>
								<img
									src={project.iconUrl}
									alt='threads'
									className='w-[4rem] h-[4rem] object-contain'
								/>
							</div>
						</div>
						<div className='mt-5 flex flex-col'>
							<h4 className='text-2xl font-poppins font-semibold'>
								{project.name}
							</h4>
							<p className='mt-2 text-slate-500'>{project.description}</p>
							{project.link&&<div className='mt-5 flex items-center gap-2 font-poppins'>
								<Link
									to={project.link}
									target='_blank'
									rel='noopener noreferrer'
									className='font-semibold text-blue-600'
								>
									Live Link
								</Link>
								<img
									src={arrow}
									alt='arrow'
									className='w-4 h-4 object-contain'
								/>
							</div>}
						</div>
					</div>
				))}
			</div>
			<hr className='border-slate-200' />
			<CTA />
		</section>
	);
};

export default Project;
