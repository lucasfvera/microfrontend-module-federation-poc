import { NavLink, Outlet } from 'react-router-dom';

const App = () => {
	return (
		<>
			<header>
				<NavBar />
			</header>
			<h1>Container CRA based app</h1>
			<Outlet />
		</>
	);
};

const NavBar = () => {
	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/posts">Posts</NavLink>
			<NavLink to="/about">About</NavLink>
		</div>
	);
};

export default App;
