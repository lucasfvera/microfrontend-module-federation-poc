import dynamic from 'next/dynamic';
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
const Banner = dynamic(() => import('posts/BannerNext'));

export default function Articles() {
	return (
		<main>
			<Card />
			<Banner />
		</main>
	);
}
