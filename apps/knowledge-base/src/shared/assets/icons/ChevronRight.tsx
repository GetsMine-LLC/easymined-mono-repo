import React from 'react';

export const ChevronRight: React.FC<React.SVGProps<SVGSVGElement>> = ({ className }) => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
		<path d="M9 18L15 12L9 6" stroke="#ff8a00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
);
