import { InputHTMLAttributes, forwardRef } from 'react';

import styles from './Input.module.css';

export enum VariantsInput {
	GRAY = 'GRAY',
	OUTLINE = 'OUTLINE',
	WHITE = 'WHITE',
}

export enum SizesInput {
	S = 'S',
	L = 'L',
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	classNameWrapper?: string | undefined;
	label?: string;
	error?: string;
	touched?: string;
	variant?: VariantsInput;
	sized?: SizesInput;
	classNameError?: string | undefined;
	outline?: boolean;
	passwordToggleIcon?: JSX.Element;
	additionalPlaceholder?: string;
}

export type Ref = HTMLInputElement;

const variantInput = (color?: string) => {
	switch (color) {
		case VariantsInput.GRAY: {
			return styles.inputGray;
		}
		case VariantsInput.WHITE: {
			return styles.inputWhite;
		}
		case VariantsInput.OUTLINE: {
			return styles.inputOutline;
		}
		default: {
			return styles.inputOutline;
		}
	}
};

const sizeInput = (size?: string) => {
	switch (size) {
		case SizesInput.S: {
			return styles.inputS;
		}
		case SizesInput.L: {
			return styles.inputL;
		}
		default: {
			return styles.inputS;
		}
	}
};

// eslint-disable-next-line react/display-name
export const Input = forwardRef<Ref, InputProps>(
	(
		{
			classNameWrapper,
			label,
			error,
			touched,
			variant,
			sized,
			classNameError,
			outline = true,
			passwordToggleIcon,
			additionalPlaceholder,
			...props
		},
		ref,
	) => {
		return (
			<div className={`${styles.inputWrapper} ${classNameWrapper ? classNameWrapper : ''}`}>
				{label && <label className={styles.label}>{label}</label>}
				<div className={styles.inputToggle}>
					<input
						ref={ref}
						className={`${styles.input} ${sizeInput(sized)} ${variantInput(variant)} ${
							error && touched ? styles.inputError : ''
						} ${!outline ? styles.outlineNone : ''}`}
						{...props}
					/>
					{additionalPlaceholder && <span className={styles.additionalPlaceholder}>{additionalPlaceholder}</span>}
					{props.value && (
						<div className={styles.toggleIcon} style={sized === SizesInput.L ? { bottom: '12px' } : { bottom: '0' }}>
							{passwordToggleIcon}
						</div>
					)}
				</div>
				{error && touched && <p className={`${classNameError ? classNameError : styles.error}`}>{error}</p>}
			</div>
		);
	},
);
