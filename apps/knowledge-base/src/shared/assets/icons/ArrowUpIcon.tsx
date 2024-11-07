import React from 'react';

export const ArrowUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill }) => (
	<svg width="12" height="14" fill={fill} viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M1 6.43778L6.14286 1.29492M6.14286 1.29492L11.2857 6.43778M6.14286 1.29492V13.2949"
			stroke={fill ? fill : 'black'}
			strokeOpacity={fill ? '1' : '0.5'}
			strokeWidth="1.4"
		/>
	</svg>
);
