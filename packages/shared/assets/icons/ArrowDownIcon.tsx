import React from 'react';

export const ArrowDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill }) => (
	<svg width="12" height="14" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M1 7.15206L6.14286 12.2949M6.14286 12.2949L11.2857 7.15206M6.14286 12.2949V0.294922"
			stroke={fill ? fill : 'black'}
			strokeOpacity={fill ? '1' : '0.5'}
			strokeWidth="1.4"
		/>
	</svg>
);
