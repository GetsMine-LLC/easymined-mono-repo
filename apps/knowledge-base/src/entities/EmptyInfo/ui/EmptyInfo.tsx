import Link from 'next/link';
import { FC } from 'react';

import styles from './EmptyInfo.module.css';

interface EmptyInfoProps {
	info: string;
	link?: string;
	href?: string;
	style?: React.CSSProperties;
}

export const EmptyInfo: FC<EmptyInfoProps> = ({ info, link, href, style }) => {
	return (
		<div className={styles.wrapper} style={style}>
			<p className={styles.info}>
				{info}{' '}
				{link && href && (
					<Link href={href} className={styles.link}>
						{link}
					</Link>
				)}
			</p>
		</div>
	);
};
