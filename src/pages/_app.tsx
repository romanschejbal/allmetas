import { Suspense, useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { RelayEnvironmentProvider } from 'react-relay';
import { RelayEnvironment } from '../RelayEnvironment';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setLoaded(true);
	}, []);
	return (
		<>
			<RelayEnvironmentProvider environment={RelayEnvironment()}>
				<Suspense
					fallback={
						<div className="absolute inset-0 flex items-center justify-center">Loading</div>
					}
				>
					{loaded ? <Component {...pageProps} /> : null}
				</Suspense>
			</RelayEnvironmentProvider>
			<div id="modal-root" />
		</>
	);
}

export default MyApp;
