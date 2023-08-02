'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { images } from '@/config/resources';

import styles from './index.module.scss';

type ViewType = 'euro' | 'asia';

const Sports365Modal = ({ onClose }: { onClose: () => void }) => {
	const locale = useLocale();
	const [selected, setSelected] = useState<ViewType>();
	const element = document.getElementById('modalRoot') as HTMLElement;

	useEffect(() => {
		document.body.classList.add('fixedContainer');
		return () => {
			document.body.classList.remove('fixedContainer');
		};
	}, []);

	const handleOnClick = (type: ViewType) => {
		if (type === 'asia') window.open(`/${locale}/sportsbook/Sports5?view=asian`, 'Sports365');
		else window.open(`/${locale}/sportsbook/Sports5`, 'Sports365');

		setSelected(type);
	};

	const modalContent = (
		<div className={styles.modalOverlay}>
			<div className={styles.modalWrapper}>
				<div className={styles.modal}>
					<div className={styles.modal__content}>
						<div className={styles.modal__headerContent}>
							<div className={styles.modal__imageContainer}>
								<Image
									src={images.sports_book_sports5}
									width={387}
									height={50}
									alt="Sports 5"
									className={styles.modal__sports5Image}
								/>
							</div>
							<button className={styles.modal__closeButton} onClick={onClose}>
								x
							</button>
						</div>
						<div className={styles.modal__body}>
							<div className={styles.modal__bodyImage}>
								<div
									className={classNames(styles.modal__bodyImageEuro, {
										[styles['modal__bodyImageEuro--selected']]: selected === 'euro',
									})}
									onClick={() => handleOnClick('euro')}
								>
									<Image
										src={images.sports_book_fb88_euro}
										width={490}
										height={639}
										alt="fb88 euro"
										className={styles.modal__euroImage}
									/>
								</div>
								<div
									className={classNames(styles.modal__bodyImageAsia, {
										[styles['modal__bodyImageAsia--selected']]: selected === 'asia',
									})}
									onClick={() => handleOnClick('asia')}
								>
									<Image
										src={images.sports_book_fb88_asia}
										width={490}
										height={639}
										alt="fb88 Asia"
										className={styles.modal__asiaImage}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return ReactDOM.createPortal(modalContent, element);
};

export default Sports365Modal;
