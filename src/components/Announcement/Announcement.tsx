import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import styles from './index.module.scss';

type AnnouncementProps = {
	handleShowAnnouncementModal: () => void;
	announcements: string[];
};

const Announcement = (props: AnnouncementProps) => {
	const t = useTranslations();
	const { announcements, handleShowAnnouncementModal } = props;

	const renderSpacer = () => <span className={styles.promotions__spacer} />;

	const renderMarquee = () => {
		return (
			<p className={styles.promotions__marqueeText}>
				{announcements.map((item, idx) => {
					const spacer = idx > 0 ? renderSpacer() : null;

					return (
						<span key={item}>
							{spacer} {item}
						</span>
					);
				})}
			</p>
		);
	};

	return (
		<div className={styles.promotions__panelMarquee}>
			<span className={styles.promotions__panelAnnouncement}>
				{t('promotions.announcement')}
				<Image
					src="https://cdn.hanwei1234.com/Content/images/announcement.png"
					alt="microphone"
					width={15}
					height={16}
					className={styles.promotions__microphone}
				/>
			</span>
			<div className={styles.promotions__panelParagraph} onClick={handleShowAnnouncementModal}>
				{renderMarquee()}
			</div>
		</div>
	);
};

export default Announcement;
