import { gql } from '@apollo/client/core';

export const ADD_TODO = gql`
	mutation AddTodoMutation($title: String!) {
		addTodo(title: $title) {
			id
			title
		}
	}
`;

export const DELETE_TODO = gql`
	mutation DeleteTodoMutation($id: Int!) {
		deleteTodo(id: $id)
	}
`;
