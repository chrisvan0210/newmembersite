import { useTranslations } from 'next-intl';

import FontIcon from '@/components/FontIcon';
import useChatSupport from '@/hooks/useChatSupport';
import type { SiteSupportData } from '@/types/app';

import styles from './index.module.scss';

function HeaderLiveChat({ support }: { support: SiteSupportData }) {
	const t = useTranslations();
	const { onChatClick } = useChatSupport();

	return (
		<div className={styles.container} onClick={() => onChatClick(support)}>
			<FontIcon name="help_center" color="var(--color-broom)" size={20} />
			<span className={styles.liveChat}>{t('header.live_chat')}</span>
		</div>
	);
}

export default HeaderLiveChat;
