import { FC } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image';

import styles from './Container.module.css';

interface IContainerProps {
	data: any;
}

export const Container: FC<IContainerProps> = ({ data }) => {
	return (
		data && (
			<div className={styles.wrapper}>
				<p>{data.title}</p>
				<div className={`${styles.body} ${!data.image_url ? styles.bodyWithMargin : ''}`}>
					{ReactHtmlParser(data.body)}
				</div>
				{data.image_url && (
					<div className={styles.imageWrapper}>
						<div className={styles.imageContainer}>
							<Image
								layout="responsive"
								src={data.image_url}
								width={500}
								alt="imageBase"
								height={500}
								className={styles.image}
							/>
						</div>
					</div>
				)}
			</div>
		)
	);
};
