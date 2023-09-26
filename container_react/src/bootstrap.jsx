import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { Main, Posts, Banner } from './subpages';

import App from './App';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<App />}>
			<Route index element={<Main />} />
			<Route path="/posts">
				<Route index element={<Posts />} />
				<Route path="banner" element={<Banner />} />
			</Route>
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
