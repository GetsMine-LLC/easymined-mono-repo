import { FC, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { SideBarItem } from '../SideBarItem/SideBarItem';
import { IKnowledge } from '../../lib';
import { ChevronRight } from '@/shared/assets';

import styles from './SideBar.module.css';

interface ISideBarProps {
	data: IKnowledge;
	children: ReactNode;
	categoryId: string;
}

export const SideBar: FC<ISideBarProps> = ({ data, children, categoryId }) => {
	const [openItems, setOpenItems] = useState<number[]>(categoryId ? [Number(categoryId)] : []);
	const router = useRouter();
	const { query } = router;
	const toggleItem = (item: number) => {
		let topArr = [...openItems];

		if (!topArr.includes(item)) topArr.push(item);
		else topArr = topArr.filter((el) => el !== item);

		setOpenItems(topArr);
	};

	useEffect(() => {
		setOpenItems((prev) => {
			if (!prev.includes(Number(query.slugs?.[0]))) prev.push(Number(query.slugs?.[0]));

			return prev;
		});
	}, [query.slugs?.[0]]);

	return (
		<aside className={styles.sidebar}>
			<div className={styles.menu}>
				{data.categories.map((el) => (
					<>
						<div className={`${styles.topBar}`} key={el.id} onClick={() => toggleItem(el.id)}>
							<p>{el.title}</p>
							<div className={styles.iconWrapper}>
								<ChevronRight className={`${styles.icon} ${openItems.includes(el.id) ? styles.active : ''}`} />
							</div>
						</div>
						<div className={`${styles.sidebarThemes}`}>
							{openItems.includes(el.id)
								? data.articles[el.id].map((item, idx) => (
										<div key={idx}>
											<SideBarItem item={item} />
											{query.slugs?.[1] == item.slug && <div className={styles.mobileContainer}>{children}</div>}
										</div>
								  ))
								: null}
						</div>
					</>
				))}
			</div>
		</aside>
	);
};
