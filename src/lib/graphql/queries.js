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

export const GET_PRODUCT = gql`
	query getProduct($id: ID!) {
		product(pk: $id) {
			id
			name
			price
			image {
				height
				name
				path
				size
				url
				width
			}
		}
	}
`;
