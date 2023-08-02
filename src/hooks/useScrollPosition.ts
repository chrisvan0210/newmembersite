import { useEffect, useState } from 'react';

const useScrollPosition = (offset: number) => {
	const [isReached, setIsReached] = useState(false);

	useEffect(() => {
		const updatePosition = () => {
			setIsReached(window.scrollY > offset);
		};
		window.addEventListener('scroll', updatePosition);
		updatePosition();
		return () => window.removeEventListener('scroll', updatePosition);
	}, []);

	return isReached;
};

export default useScrollPosition;
