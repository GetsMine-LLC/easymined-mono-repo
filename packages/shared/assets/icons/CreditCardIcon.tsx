import React from 'react';

export const CreditCardIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill }) => (
	<svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M0 19.4444V10.9999H32V19.4444C32 20.0555 31.7824 20.5786 31.3472 21.0138C30.912 21.449 30.3889 21.6666 29.7778 21.6666H2.22221C1.61111 21.6666 1.08796 21.449 0.652786 21.0138C0.217595 20.5786 0 20.0555 0 19.4443V19.4444ZM8.88889 16.3333V18.111H14.2222V16.3333H8.88889ZM3.55555 16.3333V18.111H7.11111V16.3333H3.55557H3.55555ZM29.7778 0.333252C30.3889 0.333252 30.912 0.550841 31.3472 0.98602C31.7824 1.42121 32 1.94437 32 2.55548V5.66657H0V2.55547C0 1.94436 0.217595 1.42121 0.652786 0.98602C1.08796 0.550841 1.61111 0.333252 2.22221 0.333252H29.7778Z"
			fill={fill || '#C7E7FF'}
		/>
	</svg>
);