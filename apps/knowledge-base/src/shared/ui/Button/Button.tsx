import { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.css';

export enum VariantsButton {
	BLACK = 'BLACK',
	BLUE = 'BLUE',
	RED = 'RED',
	WHITE = 'WHITE',
	LIGHT_BLUE = 'LIGHT_BLUE',
	OUTLINE = 'OUTLINE',
}

export enum SizesButton {
	XS = 'XS',
	S = 'S',
	M = 'M',
	L = 'L',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: VariantsButton;
	size?: SizesButton;
	loading?: boolean;
}

const variantButton = (color?: string) => {
	switch (color) {
		case VariantsButton.BLACK: {
			return styles.buttonBlack;
		}
		case VariantsButton.BLUE: {
			return styles.buttonBlue;
		}
		case VariantsButton.RED: {
			return styles.buttonRed;
		}
		case VariantsButton.WHITE: {
			return styles.buttonWhite;
		}
		case VariantsButton.LIGHT_BLUE: {
			return styles.buttonLightBlue;
		}
		case VariantsButton.OUTLINE: {
			return styles.buttonOutline;
		}
		default: {
			return styles.buttonBlue;
		}
	}
};

const sizeButton = (size?: string) => {
	switch (size) {
		case SizesButton.XS: {
			return styles.buttonXS;
		}
		case SizesButton.S: {
			return styles.buttonS;
		}
		case SizesButton.M: {
			return styles.buttonM;
		}
		case SizesButton.L: {
			return styles.buttonL;
		}
		default: {
			return styles.buttonS;
		}
	}
};

export const Button: FC<ButtonProps> = ({ variant, size, className, children, disabled, loading, ...props }) => {
	return (
		<button
			className={`${styles.button} ${variantButton(variant)} ${sizeButton(size)} ${
				disabled ? styles.disabledButton : ''
			} ${className ? className : ''}`}
			{...props}
		>
			{children}
			{loading && (
				<div className={`${styles.loadWrapper} ${variantButton(variant)}`}>
					<span className={styles.loader}></span>
				</div>
			)}
		</button>
	);
};
