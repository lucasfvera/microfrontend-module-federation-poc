import { lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { Link } from 'react-router-dom';

const RemoteAppHome = lazy(() => import('home/App'));
const RemoteAppPosts = lazy(() => import('posts/pages/index'));
const RemoteAppPostsBanner = lazy(() => import('posts/BannerNext'));

const MicroFrontEnd = ({ children }) => {
	return (
		<ErrorBoundary
			fallback={<div>There was a problem while loading the app.</div>}
		>
			<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
		</ErrorBoundary>
	);
};

export function Main() {
	return (
		<MicroFrontEnd>
			<RemoteAppHome />
		</MicroFrontEnd>
	);
}

export const Posts = () => (
	<>
		<MicroFrontEnd>
			<RemoteAppPosts />
		</MicroFrontEnd>
		<Link to={'/posts/banner'}>Posts Banner</Link>
	</>
);

export const Banner = () => (
	<MicroFrontEnd>
		<RemoteAppPostsBanner />
	</MicroFrontEnd>
);
