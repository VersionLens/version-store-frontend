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
	class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
	>Add to cart</button
>
