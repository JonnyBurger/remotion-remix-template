import { RAM, DISK, TIMEOUT } from 'app/remotion/constants';
import { VERSION } from 'remotion/version';

export const speculateFunctionName = () => {
	return `remotion-render-${VERSION.replace(
		/\./g,
		'-'
	)}-mem${RAM}mb-disk${DISK}mb-${TIMEOUT}sec`;
};
