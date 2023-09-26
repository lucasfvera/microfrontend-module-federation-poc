import dynamic from 'next/dynamic';
import Head from 'next/head';
import { lazy } from 'react';

// const Card = typeof window
// 	? lazy(() => {
// 			const mod = import('homeApp/Card');
// 			return mod;
// 	  })
// 	: () => null;

const Card = dynamic(() => import('homeApp/Card'), {
	ssr: false,
});
const Banner = dynamic(() => import('posts/BannerNext'), { ssr: false });
const PostsPage = dynamic(() => import('posts/pages/index'), { ssr: false });

export default function Articles() {
	return (
		<>
			<Head>
				<title>Articles Next app</title>
			</Head>
			<main>
				<Card />
				<Banner />
				<PostsPage />
			</main>
		</>
	);
}
