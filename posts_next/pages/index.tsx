import Head from 'next/head';

import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
	console.log('Running Home component from Posts app');
	return (
		<>
			<Head>
				<title>Pages app</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>This is a sample website.</p>
				<h3 className={utilStyles.headingMd}>
					Read <Link href="/posts/first-post"> the first post!</Link>
				</h3>
			</section>
		</>
	);
}
