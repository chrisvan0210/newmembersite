/* eslint-disable no-param-reassign */
export const setStyleBySelector = (element: HTMLElement, selectorName: string) => {
	const activeItem = document.querySelector(selectorName) as HTMLElement;
	if (activeItem && element) {
		const leftPosition = activeItem.offsetLeft;
		const itemWidth = activeItem.offsetWidth;
		const itemHeight = activeItem.offsetHeight;

		element.style.left = `${leftPosition}px`;
		element.style.width = `${itemWidth}px`;
		element.style.height = `${itemHeight}px`;
	}
};
