import classNames from 'classnames';
import Image from 'next/image';
import type { HTMLInputTypeAttribute } from 'react';

import styles from './index.module.scss';

interface TextInputProps {
	label: string;
	value: string;
	type?: Extract<HTMLInputTypeAttribute, 'text' | 'password' | 'number' | 'email'>;
	title?: string;
	placeholder?: string;
	rows?: number;
	img?: string;
	color?: string;
	width?: string | number;
	disabled?: boolean;
	className?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const TextInput = (props: TextInputProps): JSX.Element => {
	const {
		label,
		type = 'text',
		title,
		rows,
		value,
		placeholder,
		img,
		color = 'inherit',
		width,
		disabled,
		className,
		onChange,
	} = props;

	return (
		<label htmlFor={label} className={styles.container}>
			{title && <span className={styles.title}>{title}</span>}
			<div className={styles.input}>
				{rows ? (
					<textarea
						id={label}
						name={label}
						value={value}
						rows={rows}
						placeholder={placeholder}
						style={{ width, color }}
						className={classNames(styles.input__textArea, className)}
						disabled={disabled}
						onChange={onChange}
					/>
				) : (
					<>
						{img && <Image src={img} width={38} height={42} alt={title || ''} />}
						<input
							id={label}
							name={label}
							type={type}
							value={value}
							placeholder={placeholder}
							style={{ width, color }}
							className={classNames(styles.input__field, className)}
							disabled={disabled}
							onChange={onChange}
						/>
					</>
				)}
			</div>
		</label>
	);
};

export default TextInput;
