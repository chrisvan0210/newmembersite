import { useEffect, useState } from 'react';

function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(1400);

	useEffect(() => {
		const handler = () => {
			setWindowWidth(window.innerWidth);
		};

		handler();

		window.addEventListener('resize', handler);

		return () => {
			window.removeEventListener('resize', handler);
		};
	}, []);

	return windowWidth;
}

export default useWindowWidth;
