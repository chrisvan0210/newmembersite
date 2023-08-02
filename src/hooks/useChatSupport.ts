import { useTranslations } from 'next-intl';

import { SupportType } from '@/enums/app';
import type { SiteSupportData } from '@/types/app';

function useChatSupport() {
	const t = useTranslations();

	const onChatClick = (support: SiteSupportData) => {
		const height = 600;
		const width = window.outerWidth >= 768 ? 680 : window.outerWidth * 0.8;
		const left = window.screenX + (window.outerWidth - width) / 2;
		const top = window.screenY + (window.outerHeight - height) / 2;

		if (support.type === SupportType.PHONE || support.type === SupportType.VIBER) {
			return null;
		}
		if (support.type === SupportType.SKYPE || support.type === SupportType.EMAIL || support.type === SupportType.DEMO) {
			return window.open(support.link);
		}
		return window
			.open(support.link, t('header.live_chat'), `width=${width}, height=${height}, top=${top}, left=${left}`)
			?.focus();
	};

	return { onChatClick };
}

export default useChatSupport;
