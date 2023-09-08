<script>
	export let productId;

	import { mutation } from 'svelte-apollo';
	import { ADD_PRODUCT_TO_BASKET } from '$lib/graphql/mutations';
	const addToBasketMutation = mutation(ADD_PRODUCT_TO_BASKET);

	const addToBasket = async (productId) => {
		await addToBasketMutation({
			variables: { productId: parseInt(productId) }
		});
		location.reload();
	};
</script>

<button
	on:click={() => addToBasket(productId)}
	data-ai-description="the add to cart button in the product details"
	type="submit"
Add to cart
</button>
