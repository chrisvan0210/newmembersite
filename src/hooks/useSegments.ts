import { useSelectedLayoutSegment } from 'next/navigation';

const useSegments = (position: number) => {
	let directory = useSelectedLayoutSegment() || '';
	directory = directory === '(home)' ? '/' : `/${directory}`;
	const segmentPosition = directory.split('/')[position];

	return { segment: segmentPosition };
};

export default useSegments;
