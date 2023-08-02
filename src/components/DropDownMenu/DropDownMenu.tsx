import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import React, { useEffect, useRef, useState } from 'react';

import useClickOutSide from '@/hooks/useClickOutSide';

import FontIcon from '../FontIcon';
import styles from './index.module.scss';

export interface Option {
	id?: number;
	label: string;
	value: string;
}

interface DropdownProps {
	translate?: boolean;
	options: Option[];
	onSelect: (value: Option) => void;
	defaultValue?: Option;
	selectedItemClass?: string;
	itemClass?: string;
	optionsClass?: string;
}

const DropdownMenu: React.FC<DropdownProps> = ({
	translate = true,
	options,
	onSelect,
	defaultValue,
	selectedItemClass,
	itemClass,
	optionsClass,
}) => {
	const t = useTranslations();
	const dropDown = useRef<HTMLDivElement>(null);
	const [selectedOption, setSelectedOption] = useState<Option | null>();
	const [isOpen, setIsOpen] = useState(false);
	const clickOutSide = useClickOutSide(dropDown);

	useEffect(() => {
		setSelectedOption(defaultValue);
	}, [defaultValue]);

	useEffect(() => {
		if (clickOutSide) {
			setIsOpen(false);
		}
	}, [clickOutSide]);

	const handleOptionClick = (option: Option) => {
		setSelectedOption(option);
		setIsOpen(false);
		if (onSelect) {
			onSelect(option);
		}
	};

	const isTranslateValue = translate && selectedOption ? t(selectedOption?.label) : selectedOption?.label;

	return (
		<div className={styles.dropdown} ref={dropDown}>
			<div
				className={classNames(styles.dropdown__selected, {
					[selectedItemClass as string]: selectedItemClass,
				})}
				onClick={() => setIsOpen(!isOpen)}
			>
				{selectedOption ? isTranslateValue : t('contact.select_option')}
				<FontIcon name="arrow_down" size={18} className={styles.dropdown__icon} />
			</div>
			{isOpen && (
				<div
					className={classNames(styles.dropdown__options, {
						[optionsClass as string]: optionsClass,
					})}
				>
					{options.map(option => (
						<div
							key={option.label}
							className={classNames(styles.dropdown__option, {
								[itemClass as string]: itemClass,
							})}
							onClick={() => handleOptionClick(option)}
						>
							{translate ? t(option.label) : option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
