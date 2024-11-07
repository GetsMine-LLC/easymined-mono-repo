import React from 'react';

export const ArrowUpVar2Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
		<path
			d="M14 9.07227V4.07227V4.07227C14 2.41541 12.6569 1.07227 11 1.07227H7H4C2.34315 1.07227 1 2.41541 1 4.07227V4.07227V9.07227"
			stroke={props.stroke || "white"}
		/>
		<path d="M7.5 5.07227L4 9.07227M7.5 5.07227L11 9.07227M7.5 5.07227V14.0723" stroke={props.stroke || "white"} />
	</svg>
);
