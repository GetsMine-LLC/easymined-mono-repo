import React from 'react';

export const LinesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick}>
		<path d="M3.24512 11H19.7451" stroke="#297FE4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3.24512 5.5H19.7451" stroke="#297FE4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3.24512 16.5H19.7451" stroke="#297FE4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
);
