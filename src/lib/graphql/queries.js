import { gql } from '@apollo/client/core';

export const GET_PRODUCTS = gql`
	query getProducts {
		products {
			id
			image {
				height
				name
				path
				size
				url
				width
			}
			name
			price
		}
	}
`;
