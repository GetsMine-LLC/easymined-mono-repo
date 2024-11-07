import React from 'react';

export const ImportantNotificationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
	<svg
		width={props.width || '27'}
		height={props.height || '27'}
		viewBox="0 0 27 27"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect width="27" height="27" rx="13.5" fill="#297FE4" />
		<path
			d="M12.6 16.1627L12.25 6H15.675L15.3 16.1627H12.6ZM14.025 21C13.425 21 12.9333 20.8444 12.55 20.5332C12.1833 20.2221 12 19.8472 12 19.4088C12 18.9562 12.1833 18.5743 12.55 18.2631C12.9333 17.9519 13.425 17.7963 14.025 17.7963C14.5917 17.7963 15.0583 17.9519 15.425 18.2631C15.8083 18.5743 16 18.9562 16 19.4088C16 19.8472 15.8083 20.2221 15.425 20.5332C15.0583 20.8444 14.5917 21 14.025 21Z"
			fill="white"
		/>
	</svg>
);
