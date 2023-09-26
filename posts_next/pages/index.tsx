import Head from 'next/head';

import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
	console.log('Running Home component from Posts app');
	return (
		<>
			<Head>
				<title>Posts Next app</title>
			</Head>
			<div style={{ border: '1px solid gray' }}>
				<section className={utilStyles.headingMd}>
					<p>This is a the whole page posts website.</p>
					<h3 className={utilStyles.headingMd}>
						Read{' '}
						<Link href="/posts/first-post"> the first post!</Link>
					</h3>
				</section>
			</div>
		</>
	);
}
