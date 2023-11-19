import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import { Home, About, Project, Contact } from './page';
import { ABOUT_URL, CONTACT_URL, PROJECT_URL } from './constant';

function App() {
	return (
		<main className='bg-slate-300/20 h-full'>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path={ABOUT_URL} element={<About />} />
					<Route path={PROJECT_URL} element={<Project />} />
					<Route path={CONTACT_URL} element={<Contact />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
