enum Locale {
	EN = 'en',
	VN = 'vn',
	TH = 'th',
	CN = 'cn',
}

enum SupportType {
	DEMO = 'demo',
	EMAIL = 'email',
	FACEBOOK = 'facebook',
	LINE = 'line',
	LIVE_CHAT = 'live_chat',
	PHONE = 'phone',
	SKYPE = 'skype',
	TELEGRAM = 'telegram',
	VIBER = 'viber',
	WHATSAPP = 'whatsapp',
}

enum GameType {
	LUSTROUS_OCEAN = 'Lustrous Ocean',
	FISHERMEN_GOLD = 'Fishermen Gold',
	SABA_CLUB = 'Saba Club',
	FISHING_KING = 'Fishing King',
	NUMBER_GAME = 'Number Game',
	LIVE_CASINO = 'Live Casino',
}

enum Menu {
	home = 'home',
	mobile = 'mobile',
	sports = 'sportsbook',
	virtual_sports = 'virtual_sports',
	e_sports = 'esports',
	casino = 'casino_club',
	slots = 'slots',
	games = 'games',
	lottery = 'lottery',
	promotions = 'promotions',
}

export { GameType, Locale, Menu, SupportType };
