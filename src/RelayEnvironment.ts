import {
	CacheConfig,
	Environment,
	GraphQLResponse,
	Network,
	RecordSource,
	RequestParameters,
	Store,
	UploadableMap,
	Variables,
} from 'relay-runtime';
import { fetchGraphQL } from './fetchGraphQL';

async function fetchRelay(
	request: RequestParameters,
	variables: Variables,
	cacheConfig: CacheConfig,
	uploadables?: UploadableMap | null,
): Promise<GraphQLResponse> {
	if (!request.text) {
		throw new Error('request.text is null');
	}

	return fetchGraphQL(request.text, variables).then((response) => {
		if (response.code === 401) {
			window.location.href = '/signin';
			return new Promise(() => {});
		}

		if (response.errors) {
			response.errors.forEach((error: any) => console.error(error));
		}

		return response;
	});
}

export const RelayEnvironment = () =>
	new Environment({
		network: Network.create(fetchRelay),
		store: new Store(new RecordSource()),
	});
