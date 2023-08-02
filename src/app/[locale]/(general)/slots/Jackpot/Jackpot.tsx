import classNames from 'classnames';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

import { images } from '@/config/resources';
import amountFormat from '@/utils/amount-format';

import styles from './index.module.scss';
import WinnersSlider from './WinnersSlider';

const jackpotAmount = 99897989.24;
const majorAmount = 1881018.0;
const minorAmount = 881018.0;
const miniAmount = 318018.0;

function Jackpot() {
	const locale = useLocale();
	const t = useTranslations();
	const [countEnd, setCountEnd] = useState(jackpotAmount);
	const [isEnd, setIsEnd] = useState(false);
	const refInterval = useRef<ReturnType<typeof setInterval>>();

	useEffect(() => {
		if (isEnd) {
			refInterval.current = setInterval(() => {
				setCountEnd(prev => prev + 1.06);
			}, 1000);
		}
		return () => clearInterval(refInterval.current);
	}, [isEnd]);

	return (
		<>
			<div className={styles.progress}>
				<div className={styles.progress__wrapper}>
					<Image
						src={`${images.slots_progress}-${locale}.png`}
						alt=""
						fill
						sizes="100vw"
						className={styles.progressImage}
					/>
					<div className={classNames(styles.progress__money, styles.progress__countBox)}>
						<Image src={images.slots_icon_money} alt="" width={27} height={27} />
						<span>{t('common.currency')}</span>
						{isEnd ? (
							<span className={styles.progress__moneyNumber}>{amountFormat(countEnd, 2)}</span>
						) : (
							<span className={styles.progress__moneyNumber}>
								<CountUp
									start={0.0}
									end={99898167.32}
									duration={7}
									separator=","
									decimals={2}
									decimal="."
									onEnd={() => setIsEnd(true)}
								/>
							</span>
						)}
					</div>
					<div className={classNames(styles.progress__diamond, styles.progress__countBox)}>
						<Image src={images.slots_icon_diamond} alt="" width={24} height={18} />
						<span>
							{t('common.major')} {t('common.currency')}
						</span>
						<span className={styles.progress__number}>
							<CountUp start={0.0} end={majorAmount} duration={6} separator="," decimals={2} decimal="." />
						</span>
					</div>
					<div className={styles.progress__bottom}>
						<div className={classNames(styles.progress__horseshoe, styles.progress__countBox)}>
							<div>
								<Image src={images.slots_icon_horseshoe} alt="" width={14} height={16} />
								<div>
									{t('common.minor')} {t('common.currency')}
								</div>
							</div>
							<span className={styles.progress__number}>
								<CountUp start={0.0} end={minorAmount} duration={5} separator="," decimals={2} decimal="." />
							</span>
						</div>
						<div className={classNames(styles.progress__bell, styles.progress__countBox)}>
							<div>
								<Image src={images.slots_icon_bell} alt="" width={14} height={14} />
								<div>
									{t('common.mini')} {t('common.currency')}
								</div>
							</div>
							<span className={styles.progress__number}>
								<CountUp start={0.0} end={miniAmount} duration={4} separator="," decimals={2} decimal="." />
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.sliders}>
				<div className={styles.sliders__title}>
					<Image
						src={`${images.slots_top_winners}-${locale}.png`}
						alt=""
						fill
						sizes="100vw"
						className={styles.winnersImage}
					/>
				</div>

				<WinnersSlider />
			</div>
		</>
	);
}

export default Jackpot;
