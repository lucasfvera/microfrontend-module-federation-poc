import { lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

const RemoteAppHome = lazy(() => import('home/App'));
const RemoteAppPosts = lazy(() => import('posts/Posts'));

const App = () => {
	return (
		<BrowserRouter>
			<header>
				<NavBar />
			</header>
			<h1>Container CRA based app</h1>
			<Routes>
				<Route index element={<Main />} />
				<Route path="/posts" element={<Posts />} />
			</Routes>
		</BrowserRouter>
	);
};

function Main() {
	return (
		<MicroFrontEnd>
			<RemoteAppHome />
		</MicroFrontEnd>
	);
}

const Posts = () => (
	<MicroFrontEnd>
		<RemoteAppPosts />
	</MicroFrontEnd>
);

const MicroFrontEnd = ({ children }) => {
	return (
		<ErrorBoundary
			fallback={<div>There was a problem while loading the app.</div>}
		>
			<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
		</ErrorBoundary>
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
