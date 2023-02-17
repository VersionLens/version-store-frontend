import { gql } from '@apollo/client/core';

export const ADD_PRODUCT_TO_BASKET = gql`
	mutation AddToBasketMutation($productId: Int!) {
		addToBasket(productId: $productId) {
			id
		}
	}
`;
