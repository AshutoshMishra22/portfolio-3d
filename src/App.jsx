import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import { Home, About, Projects, Contact } from './page';
function App() {
	const [count, setCount] = useState(0);

	return (
		<main className='bg-slate-300/20'>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
