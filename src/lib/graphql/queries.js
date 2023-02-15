import { gql } from '@apollo/client/core';

export const GET_MY_TODOS = gql`
	query getMyTodos {
		todos {
			id
			title
		}
	}
`;
