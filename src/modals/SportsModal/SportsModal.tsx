'use client';

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.module.scss';

const SportsModal = ({ onClose, content }: { onClose: () => void; content: { header?: string; body?: string } }) => {
	const element = document.getElementById('modalRoot') as HTMLElement;

	const modalContent = (
		<div className={styles.modal}>
			<div className={styles.modal__content}>
				<div className={styles.modal__contentHeader}>
					<p className={styles.modal__headerText}>{content.header}</p>
					<button className={styles.modal__closeButton} onClick={onClose}>
						x
					</button>
				</div>
				<div className={styles.modal__body}>{content.body}</div>
				<div className={styles.modal__bottomContent}>
					<button className={styles.modal__button} onClick={onClose}>
						OK
					</button>
				</div>
			</div>
		</div>
	);

	return ReactDOM.createPortal(modalContent, element);
};

export default SportsModal;
