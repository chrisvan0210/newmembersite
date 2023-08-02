import classNames from 'classnames';
import type { ReactNode } from 'react';

import styles from './index.module.scss';

interface CustomButtonProps {
	type?: 'button' | 'submit' | 'reset';
	text?: string;
	small?: boolean;
	large?: boolean;
	variant?: 'green' | 'yellow' | 'greenTransparent' | 'yellowTransparent' | 'yellowTransparentToYellow';
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	children?: ReactNode | ReactNode[];
}

const CustomButton = (props: CustomButtonProps): JSX.Element => {
	const { type = 'button', text, small, large, variant, disabled, onClick, className, children } = props;

	return (
		<button
			type={type}
			onClick={onClick}
			className={classNames(styles.button, {
				[styles['button--small']]: small,
				[styles['button--large']]: large,
				[styles['button--green']]: variant === 'green',
				[styles['button--yellow']]: variant === 'yellow',
				[styles['button--greenTransparent']]: variant === 'greenTransparent',
				[styles['button--yellowTransparent']]: variant === 'yellowTransparent',
				[styles['button--yellowTransparentToYellow']]: variant === 'yellowTransparentToYellow',
				[className as string]: className,
			})}
			disabled={disabled}
		>
			{text} {children}
		</button>
	);
};

export default CustomButton;
