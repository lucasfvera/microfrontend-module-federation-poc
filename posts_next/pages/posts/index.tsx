import Head from 'next/head';

import utilStyles from '../../styles/utils.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Pages app</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>This is the posts page</p>
			</section>
		</>
	);
}
