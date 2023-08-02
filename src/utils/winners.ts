import { forEach, size, startsWith } from 'lodash-es';

// import type { FishermenTableHeader } from '@/types/winners';

export interface FishermenTableHeader {
	title: string;
	winners: string;
	amount: number;
	bonus: string;
}

function makeGroupData(dataList: FishermenTableHeader[], byKeyword: string) {
	const result: FishermenTableHeader[][] = [];
	let currentGroup: FishermenTableHeader[] = [];
	forEach(dataList, item => {
		if (startsWith(item.title, byKeyword) && size(currentGroup)) {
			result.push(currentGroup);
			currentGroup = [];
		}
		currentGroup.push(item);
	});
	if (size(currentGroup)) {
		result.push(currentGroup);
	}
	return result;
}
export default makeGroupData;
