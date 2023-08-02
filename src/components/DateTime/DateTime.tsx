'use client';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import styles from './index.module.scss';

export default function DateTime() {
	const [dateTime, setDateTime] = useState('');

	useEffect(() => {
		setInterval(() => {
			setDateTime(dayjs(new Date()).format('DD/MM/YYYY, HH:mm:ss'));
		}, 100);
	}, [dateTime]);

	return <span className={styles.date}>{dateTime}</span>;
}
