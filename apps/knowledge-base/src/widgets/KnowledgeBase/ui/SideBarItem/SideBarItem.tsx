import { FC } from 'react';
import { useRouter } from 'next/router';

import { IDataKnowledge } from '../../lib';

import styles from './SideBarItem.module.css';

interface ISideBarItemProps {
	item: IDataKnowledge;
}

export const SideBarItem: FC<ISideBarItemProps> = ({ item }) => {
	const router = useRouter();
	const { query } = router;

	const handleClick = () => {
		const newUrl = `/${item.category}/${item.slug}`;
		router.push(newUrl, undefined, { shallow: false });
	};

	return (
		<div className={styles.sideBarItem}>
			<div className={styles.submenu}>
				<div className={`${styles.item} ${query.slugs[1] == item.slug && styles.active}`} onClick={() => handleClick()}>
					{item.title}
				</div>
			</div>
		</div>
	);
};
