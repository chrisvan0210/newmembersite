import { images } from '@/config/resources';
import { SupportType } from '@/enums/app';

import { LIVE_CHAT } from './helpCenter';

export const FORBIDDEN_ACCESS_WARNING = [
	{
		flag: images.en_flag,
		greeting: 'Dear User,',
		message_p1:
			'The location you are trying to accesss is currently restricted. If you have any concerns, please do not hesitate to contact our customer services via',
		message_p2: 'or email at',
		message_p3: 'or phone number',
		message_p4: '',
		liveChat: 'Live Chat',
		email: 'help@fb88.com',
		skype: '+63 917 708 2008.',
		closing: 'FB88 apologize for any inconvenience caused.',
		useEmail: { type: SupportType.EMAIL, link: 'mailto:help@fb88.com' },
		useSkype: { type: SupportType.SKYPE, link: 'callto:+639177082008' },
		useLiveChat: LIVE_CHAT.EN,
	},
	{
		flag: images.vn_flag,
		greeting: 'Kính chào quý khách,',
		message_p1:
			'Quý Khách hiện không thể truy cập vào website của chúng tôi theo quy định ở nước sở tại. Nếu quý khách cần hỗ trợ, vui lòng hiên hệ hỗ trợ trực tuyến (24/7) thông qua',
		message_p2: 'hoặc địa chỉ email',
		message_p3: 'hoặc qua số điện thoại :',
		message_p4: '( Hà Nội ) để nhận được thông tin chi tiết.',
		liveChat: 'Chat Trực Tuyến',
		email: 'cskh@fb88.com',
		skype: '0247 300 6877',
		closing: 'FB88 xin chân thành cáo lỗi về mọi sự bất tiện.',
		useEmail: { type: SupportType.EMAIL, link: 'mailto:cskh@fb88.com' },
		useSkype: { type: SupportType.SKYPE, link: 'callto:02473006877' },
		useLiveChat: LIVE_CHAT.VN,
	},
	{
		flag: images.cn_flag,
		greeting: '亲爱的用户,',
		message_p1: '您尝试访问该网站的位置，目前受限制。 如果您有任何疑虑，请通过',
		message_p2: '或发送电子邮件至',
		message_p3: '',
		message_p4: '',
		liveChat: '在线聊天',
		email: 'cscn@fb88.com',
		skype: '',
		closing: '与我们的客户服务部门联系.',
		useEmail: { type: SupportType.EMAIL, link: 'mailto:cscn@fb88.com' },
		useSkype: { type: SupportType.SKYPE, link: 'skype:live:cskh_195?chat' },
		useLiveChat: LIVE_CHAT.CN,
	},
	{
		flag: images.th_flag,
		greeting: 'เรียน ผู้ใช้งาน,',
		message_p1:
			'สถานที่ ที่คุณกำลังพยายามจะเข้าถึงถูกจำกัดอยู่ ณ ขณะนี้ หากคุณมีข้อสงสัยใดๆ โปรดอย่าลังเลที่จะติดต่อเราได้ที่ฝ่ายบริการลูกค้า ผ่านทาง',
		message_p2: 'หรือ อีเมล์',
		message_p3: 'และเบอร์โทรศัพท์',
		message_p4: '',
		liveChat: 'แชทสด',
		email: ' thai.cs@fb88.com',
		skype: '+63 917 708 2008',
		closing: 'FB88 ขออภัยในความไม่สะดวกมา ณ ที่นี้่',
		useEmail: { type: SupportType.EMAIL, link: 'mailto:thai.cs@fb88.com' },
		useSkype: { type: SupportType.SKYPE, link: 'callto:+639177082008' },
		useLiveChat: LIVE_CHAT.TH,
	},
];
