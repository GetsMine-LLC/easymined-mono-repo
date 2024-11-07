import React from 'react';

export const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = () => (
	<svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g filter="url(#filter0_d_4900_93297)">
			<path
				d="M18.125 22.25L10.875 15L18.125 7.75"
				stroke="#297FE4"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<filter
				id="filter0_d_4900_93297"
				x="-4"
				y="0.5"
				width="37"
				height="37"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy="4" />
				<feGaussianBlur stdDeviation="2" />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
				<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4900_93297" />
				<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4900_93297" result="shape" />
			</filter>
		</defs>
	</svg>
);
