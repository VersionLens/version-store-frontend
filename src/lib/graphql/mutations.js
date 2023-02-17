import { gql } from '@apollo/client/core';

export const ADD_PRODUCT_TO_BASKET = gql`
	mutation AddToBasketMutation($productId: Int!) {
		addToBasket(productId: $productId) {
			id
		}
	}
`;

export const REMOVE_PRODUCT_FROM_BASKET = gql`
	mutation RemoveFromBasketMutation($itemId: Int!) {
		removeFromBasket(itemId: $itemId) {
			id
		}
	}
`;
