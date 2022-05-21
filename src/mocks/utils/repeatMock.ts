export const repeatMock = <T>(mock: T, amount: number) =>
	Array(amount)
		.fill(mock)
		.map((mock, index) => ({ ...mock, id: index }));
