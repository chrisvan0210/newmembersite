import classNames from 'classnames';
import React from 'react';

interface FontIconProps {
	name: string;
	size?: number;
	color?: string;
	spacing?: string;
	className?: string;
}

const FontIcon = (props: FontIconProps): JSX.Element => {
	const { name, color = 'inherit', size = 26, spacing = '4px', className } = props;

	return (
		<span
			style={{ fontSize: size, color, fill: color, margin: `0 ${spacing}` }}
			className={classNames('svg', name, className)}
		/>
	);
};

export default FontIcon;
