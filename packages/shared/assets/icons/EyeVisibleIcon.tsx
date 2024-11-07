import React from 'react';

export const EyeVisibleIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ onClick }) => (
	<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
		<path d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);
