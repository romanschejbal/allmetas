export const getRamdomNumber = (min: number = 1, max: number = 10000) =>
	Number((Math.random() * (max - min) + min).toFixed(0));
