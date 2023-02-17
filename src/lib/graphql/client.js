import { HttpLink, ApolloClient, InMemoryCache } from '@apollo/client/core';

const GRAPHQL_HTTP_HOST = import.meta.env.VITE_GRAPHQL_HTTP_HOST;

const httpLink = new HttpLink({
	uri: `${GRAPHQL_HTTP_HOST}/graphql/`,
	credentials: 'include'
});

// Disable cache
// fetchPolicy as no-cache avoids using the cache
const defaultOptions = {
	watchQuery: {
		fetchPolicy: 'no-cache'
	},
	query: {
		fetchPolicy: 'no-cache'
	}
};

const apolloCache = new InMemoryCache();

const client = new ApolloClient({
	link: httpLink,
	cache: apolloCache,
	defaultOptions
});

export default client;
