const cdn = 'https://cdn.hanwei1234.com/Content/images';

const INFO_OPTIONS = [
	{
		icon: `${cdn}/faq/i-faq.png`,
		iconSelected: `${cdn}/faq/i-faq-h.png`,
		width: 60,
		height: 60,
		label: 'faq',
		link: '/information/FAQAccount',
	},
	{
		icon: `${cdn}/faq/i-rule.png`,
		iconSelected: `${cdn}/faq/i-rule-h.png`,
		width: 46,
		height: 62,
		label: 'privacy_policy',
		link: '/information/PrivacyPolicy',
	},
	{
		icon: `${cdn}/faq/i-terms.png`,
		iconSelected: `${cdn}/faq/i-terms-h.png`,
		width: 68,
		height: 58,
		label: 'terms',
		link: '/information/Terms',
	},
	{
		icon: `${cdn}/faq/i-rules.png`,
		iconSelected: `${cdn}/faq/i-rules-h.png`,
		width: 60,
		height: 60,
		label: 'rules',
		link: '/information/RulesLive',
	},
];

// TODO complete info

const PRIVACY_POLICY_SELECT = [
	{
		title: 'overview',
		content: ['overview_content1', 'overview_content2', 'overview_content3', 'overview_content4', 'overview_content5'],
	},
	{ title: 'information_collected', content: ['monitoring_content1'] },
	{ title: 'failure_to_provide', content: ['failure_to_provide_content1'] },
	{ title: 'use_and_legal_basis', content: ['monitoring_content1'] },
	{ title: 'how_long', content: ['how_long_content1', 'how_long_content2'] },
	{ title: 'monitoring', content: ['monitoring_content1'] },
	{ title: 'minors', content: ['minors_content1', 'minors_content2'] },
	{ title: 'confidentiality', content: ['monitoring_content1'] },
	{ title: 'disclosing_personal_info', content: ['monitoring_content1'] },
	{
		title: 'advertisements',
		content: ['advertisements_content1', 'advertisements_content2', 'advertisements_content3'],
	},
	{ title: 'your_rights', content: ['monitoring_content1'] },
	{ title: 'security', content: ['monitoring_content1'] },
	{ title: 'retention_of_info', content: ['retention_of_info_content1', 'retention_of_info_content1'] },
	{
		title: 'cookies',
		content: [
			'cookies_content1',
			'cookies_content2',
			'cookies_content3',
			'cookies_content4',
			'cookies_content5',
			'cookies_content6',
			'cookies_content7',
			'cookies_content8',
			'cookies_content9',
		],
	},
	{ title: 'social_media', content: ['monitoring_content1'] },
	{ title: 'changes_to_privacy_notice', content: ['monitoring_content1'] },
	{ title: 'how_to_contact', content: ['how_to_contact_content1', 'how_to_contact_content2'] },
];

const CN_PRIVACY_POLICY_SELECT = [
	{
		title: 'general',
		content: [
			'general_content1',
			'general_content2',
			'general_content3',
			'general_content4',
			'general_content5',
			'general_content6',
		],
	},
	{ title: 'information_collected', content: ['law_and_protection_of_users_content1'] },
	{ title: 'visitor_information', content: ['visitor_information_content1', 'visitor_information_content2'] },
	{ title: 'minors', content: ['minors_content1', 'minors_content2'] },
	{
		title: 'confidentiality',
		content: ['confidentiality_content1', 'confidentiality_content2', 'confidentiality_content3'],
	},
	{ title: 'info_use_and_storage', content: ['law_and_protection_of_users_content1'] },
	{
		title: 'account_information',
		content: [
			'account_information_content1',
			'account_information_content2',
			'account_information_content3',
			'account_information_content4',
		],
	},
	{ title: 'data_security', content: ['law_and_protection_of_users_content1'] },
	{ title: 'law_and_protection_of_users', content: ['law_and_protection_of_users_content1'] },
	{
		title: 'limitations_of_confidentiality',
		content: ['law_and_protection_of_users_content1'],
	},
	{ title: 'monitoring', content: ['monitoring_content1'] },
	{ title: 'third_party_sites', content: ['third_party_sites_content1', 'third_party_sites_content2'] },
	{ title: 'third_party_info', content: ['third_party_info_content1'] },
	{
		title: 'select_and_modify_info',
		content: [
			'select_and_modify_info_content1',
			'select_and_modify_info_content2',
			'select_and_modify_info_content3',
			'select_and_modify_info_content4',
			'select_and_modify_info_content5',
		],
	},
	{ title: 'advertisements', content: ['advertisements_content1'] },
	{
		title: 'cookies',
		content: ['cookies_content1', 'cookies_content2', 'cookies_content3', 'cookies_content4', 'cookies_content5'],
	},
	{ title: 'ssl_data_encryption', content: ['ssl_data_encryption_content1'] },
	{
		title: 'changes_to_privacy_notice',
		content: [
			'changes_to_privacy_notice_content1',
			'changes_to_privacy_notice_content2',
			'changes_to_privacy_notice_content3',
		],
	},
];

export { CN_PRIVACY_POLICY_SELECT, INFO_OPTIONS, PRIVACY_POLICY_SELECT };
