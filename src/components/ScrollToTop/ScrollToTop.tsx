'use client';

import { useCallback, useEffect, useState } from 'react';

import useScrollPosition from '@/hooks/useScrollPosition';

import FontIcon from '../FontIcon';
import styles from './index.module.scss';

function ScrollToTop() {
	const [showScrollToTop, setShowScrollToTop] = useState(false);
	const isReached = useScrollPosition(200);

	useEffect(() => {
		if (isReached) {
			setShowScrollToTop(true);
		} else {
			setShowScrollToTop(false);
		}
	}, [isReached]);

	const handleScrollToTop = useCallback(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		showScrollToTop && (
			<div className={styles.scrollToTop} onClick={handleScrollToTop}>
				<FontIcon name="arrow_up" size={20} />
			</div>
		)
	);
}

export default ScrollToTop;
