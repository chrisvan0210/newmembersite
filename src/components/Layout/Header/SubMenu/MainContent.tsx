import classNames from 'classnames';
import Image from 'next/image';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import styles from './index.module.scss';

type DesContent = {
	title: string;
	description: string;
};

type ImageProps = {
	src: string;
	height: number;
	width: number;
	alt: string;
	className?: string;
};

type MainContentProps = {
	sectionClassNames: string[];
	wrapperClassNames: string[];
	contentClassNames: string[];
	linkProps: LinkProps[];
	hovClassNames: string[];
	menuClassNames: string[];
	imgProps?: ImageProps[][];
	playClassNames: string[];
	playText: string[];
	descClassNames?: string[];
	titleClassNames?: string[];
	descContent?: DesContent[][];
	spanClassNames?: string[];
	subName?: string[];
	subNameClassNames?: string[];
	newSubName?: Array<Record<string, string>>;
	newClassNames?: string[];
};

const MainContent = ({
	sectionClassNames = [],
	wrapperClassNames = [],
	contentClassNames,
	linkProps,
	hovClassNames,
	menuClassNames,
	imgProps,
	playClassNames,
	playText,
	descClassNames,
	titleClassNames,
	descContent,
	spanClassNames,
	subName,
	subNameClassNames,
	newSubName,
	newClassNames,
}: MainContentProps) => {
	const t = useTranslations();
	const content = () => {
		const transformedClassNames = (classNamesList: string[]) => {
			return classNamesList.map(className => styles[className]);
		};

		const renderImage = (imageList: ImageProps[]) => {
			if (imageList.length) {
				return imageList.map((image, imgIdx: number) => {
					const imgKey = image.alt + imgIdx;
					let imgClassNames;
					if (image?.className) {
						imgClassNames = image?.className ? transformedClassNames([image.className]) : '';
					}

					return (
						<Image
							key={imgKey}
							src={image.src}
							alt={image.alt}
							width={image.width}
							height={image.height}
							className={classNames(imgClassNames)}
						/>
					);
				});
			}

			return null;
		};

		const renderDescContent = (descContentList: DesContent[]) => {
			if (descContentList.length) {
				return descContentList.map((desc: DesContent, descIdx: number) => {
					const descKey = desc.title + descIdx;

					return (
						<div key={descKey} className={classNames(transformedClassNames(descClassNames || []))}>
							<h3 className={classNames(transformedClassNames(titleClassNames || []))}>{t(desc.title)}</h3>
							{t(desc.description)}
						</div>
					);
				});
			}

			return null;
		};

		const renderSpan = (spanStyles: string) => {
			if (spanStyles) {
				return <span className={classNames(transformedClassNames([spanStyles]))} />;
			}

			return null;
		};

		const renderNewSubName = (
			newSubname: Array<Record<string, string>>,
			selectedSubname: string,
			newNameClassNames: string[],
		) => {
			if (newSubname.length) {
				if (newNameClassNames.length) {
					const newNameStyles = newNameClassNames.length ? newNameClassNames.toString() : '';
					return newSubname.map((newName, newNameIdx) => {
						if (newName[selectedSubname]) {
							const newKey = newName[selectedSubname] + newNameIdx;
							return (
								<div key={newKey} className={classNames(transformedClassNames([newNameStyles]))}>
									{t(newName[selectedSubname])}
								</div>
							);
						}

						return null;
					});
				}
			}

			return null;
		};

		const renderSubName = (subnameClassNames: string[], subname: string) => {
			if (subNameClassNames) {
				return <div className={classNames(transformedClassNames(subnameClassNames))}>{t(subname)}</div>;
			}

			return null;
		};

		return (
			<div className={classNames(transformedClassNames(sectionClassNames))}>
				<div className={classNames(transformedClassNames(wrapperClassNames))}>
					<div className={classNames(transformedClassNames(contentClassNames))}>
						{linkProps.map((link, idx) => {
							const linkKey = playText[idx] + idx;
							return (
								<Link key={linkKey} {...link}>
									<div className={classNames(transformedClassNames([hovClassNames[idx]]))}>
										<div className={classNames(transformedClassNames([menuClassNames[idx]]))}>
											{!!imgProps && renderImage(imgProps[idx])}
											{!!spanClassNames && renderSpan(spanClassNames[idx])}
											{!!descContent && renderDescContent(descContent[idx])}
											{!!newSubName && subName && renderNewSubName(newSubName, subName[idx], newClassNames || [])}
											{!!subName && renderSubName(subNameClassNames || [], subName[idx])}
										</div>
										<div className={classNames(transformedClassNames([playClassNames[idx]]))}>{t(playText[idx])}</div>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		);
	};

	return <>{content()}</>;
};

export default MainContent;
