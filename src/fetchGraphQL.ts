let token = '';

// temporary
export function setToken(t: string) {
	token = t;
	localStorage.setItem('TOKEN', t);
}

export function getToken() {
	return token || localStorage.getItem('TOKEN');
}

export async function fetchGraphQL(text: string, variables: Object) {
	const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT!, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${getToken()}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: text,
			variables,
		}),
	});

	return await response.json();
}
