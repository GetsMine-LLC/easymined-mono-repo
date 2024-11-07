import React from 'react';

export const BlueCircleLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width, height }) => (
	<svg width={width || '27'} height={height || '27'} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="13.5" cy="13.5" r="13.5" fill="#297FE4" />
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M13.0861 9.11366C13.0377 9.15434 12.9853 9.20053 12.9286 9.25286C12.1611 9.96222 11.4535 11.0199 10.822 12.2412C10.1964 13.4513 9.6749 14.7634 9.25524 15.9366C8.97552 16.7186 8.75312 17.4023 8.56971 17.9661C8.47279 18.2641 8.38675 18.5286 8.30889 18.7565C8.25527 18.9134 8.20353 19.0582 8.1554 19.1776L8.15417 19.1807C8.12126 19.2623 8.04619 19.4485 7.92575 19.5998C7.88962 19.6452 7.81277 19.7353 7.68977 19.8181C7.56776 19.9002 7.30226 20.0381 6.94389 19.9901C6.5761 19.9409 6.35768 19.7299 6.25944 19.6025C6.16475 19.4797 6.12226 19.3632 6.10393 19.3067C6.04213 19.1162 6.04213 18.9033 6.04213 18.8022C6.04213 17.3775 5.53232 15.92 5.19329 14.9514C5.11793 14.736 5.05101 14.5448 5 14.3834L6.92126 13.8599C6.95364 13.9624 7.00332 14.1024 7.0641 14.2736C7.15588 14.5322 7.27297 14.8622 7.39405 15.2419C7.82062 14.0582 8.35982 12.7076 9.01697 11.4366C9.68855 10.1377 10.5135 8.86182 11.5162 7.93518C11.8227 7.65187 12.1326 7.41389 12.4474 7.25007C12.7557 7.08962 13.1584 6.95418 13.6063 7.01474C14.0925 7.08049 14.4364 7.34888 14.649 7.64175C14.846 7.91308 14.9493 8.22523 15.0098 8.50317C15.1316 9.06239 15.1364 9.76173 15.0909 10.4776C15.0622 10.9284 15.0116 11.4113 14.9467 11.9075C15.1161 11.6045 15.2867 11.3155 15.4567 11.0481C15.7169 10.6389 15.9903 10.2572 16.2711 9.94692C16.5323 9.65831 16.8855 9.33344 17.3281 9.17201C17.8321 8.98822 18.4666 8.94609 19.0064 9.34019C19.4572 9.66929 19.6311 10.1643 19.7139 10.522C19.8857 11.2642 19.8461 12.2902 19.7913 13.2331C19.7782 13.4591 19.7638 13.6844 19.7496 13.9076C19.7004 14.6779 19.6528 15.4231 19.6639 16.0886C19.6709 16.513 19.702 16.864 19.7604 17.1352C19.7793 17.2233 19.7994 17.2943 19.8185 17.3509C19.823 17.3504 19.8275 17.3498 19.832 17.3493C19.9323 17.3373 20.0242 17.3231 20.133 17.3063C20.1953 17.2967 20.263 17.2862 20.3411 17.2748C20.5246 17.248 20.7638 17.2165 21 17.2165V19.0757C20.9321 19.0757 20.8257 19.086 20.6524 19.1113C20.6111 19.1173 20.5624 19.1248 20.5093 19.133C20.3794 19.153 20.2235 19.177 20.0876 19.1932C19.8917 19.2166 19.6272 19.2395 19.3606 19.2098C19.0954 19.1803 18.6898 19.0827 18.3835 18.7465C18.0474 18.3778 17.8858 17.9124 17.7969 17.4994C17.7047 17.0711 17.6697 16.5941 17.6618 16.1173C17.6495 15.3749 17.7034 14.5337 17.7535 13.7526C17.7671 13.5406 17.7804 13.3329 17.792 13.1329C17.8409 12.2902 17.8568 11.6139 17.7976 11.1501C17.6173 11.3506 17.4096 11.6337 17.1808 11.9934C16.7189 12.7197 16.229 13.666 15.7581 14.6531C15.2927 15.6287 14.8581 16.618 14.4983 17.4372L14.4905 17.4549C14.4775 17.4844 14.4646 17.5138 14.4517 17.5431C14.1242 18.2888 13.8307 18.9572 13.6532 19.2534C13.6297 19.2926 13.598 19.3423 13.5586 19.3936C13.5278 19.4339 13.4517 19.5297 13.329 19.6179C13.2349 19.6857 12.8496 19.934 12.3463 19.76C11.8905 19.6024 11.7559 19.2323 11.7306 19.16C11.6647 18.9723 11.6731 18.7916 11.6753 18.7428C11.6754 18.7408 11.6755 18.739 11.6756 18.7374C11.6792 18.654 11.6889 18.5657 11.7 18.4829C11.7432 18.1599 11.8461 17.6459 11.9684 17.0532C12.0011 16.895 12.0356 16.729 12.0714 16.5566C12.3111 15.4032 12.6114 13.9587 12.8295 12.5764C12.9547 11.7829 13.0503 11.0253 13.0921 10.368C13.1253 9.84586 13.1217 9.4247 13.0861 9.11366ZM11.9035 18.3494C11.9027 18.3507 11.9028 18.3506 11.9035 18.3494V18.3494ZM13.6766 18.805C13.6771 18.8268 13.6754 18.8314 13.6762 18.8117C13.6763 18.8101 13.6764 18.8079 13.6766 18.805Z"
			fill="#fff"
		/>
	</svg>
);