import React from 'react';

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, stroke, width, height, onClick }) => (
	<svg
		width={width || '23'}
		height={height || '23'}
		viewBox="0 0 23 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
		onClick={onClick}
	>
		<path
			d="M16.9949 5.5L5.99487 16.5"
			stroke={stroke || '#297FE4'}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M5.99487 5.5L16.9949 16.5"
			stroke={stroke || '#297FE4'}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);
