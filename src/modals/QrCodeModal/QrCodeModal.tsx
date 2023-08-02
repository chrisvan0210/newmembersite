'use client';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './index.module.scss';

type QrCodeModalProps = {
	onClose: () => void;
	children: React.ReactNode;
	height?: string | number;
	background?: string;
};

const QrCodeModal = ({ onClose, children, height = 350, background = 'var(--color-camarone)' }: QrCodeModalProps) => {
	const element = document.getElementById('modalRoot') as HTMLElement;

	useEffect(() => {
		document.body.classList.add('fixedContainer');
		return () => {
			document.body.classList.remove('fixedContainer');
		};
	}, []);

	const handleCloseClick = () => {
		onClose();
	};

	const modalContent = (
		<div className={styles.modalOverlay}>
			<div className={styles.modalWrapper} style={{ height, background }}>
				<div className={styles.modal}>
					<div className={styles.modal__header}>
						<button onClick={handleCloseClick} className={styles.modal__close}>
							x
						</button>
					</div>
					<div className={styles.modal__body}>{children}</div>
				</div>
			</div>
		</div>
	);

	return ReactDOM.createPortal(modalContent, element);
};

export default QrCodeModal;
