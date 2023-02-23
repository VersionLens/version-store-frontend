<script>
	import { query } from 'svelte-apollo';
	import { GET_PRODUCTS } from '$lib/graphql/queries';
	import Navigation from '$lib/components/Navigation.svelte';
	import ProductList from '$lib/components/ProductList.svelte';

	const products = query(GET_PRODUCTS);
</script>

<Navigation lightTheme={false} />

{#if $products.loading}
	Loading...
{:else if $products.error}
	<h1>Error: {$products.error.message}</h1>
{:else if $products.data.products.length === 0}
	<h3 class="mt-4 text-lg text-gray-700">No products found</h3>
{:else}
	<div class="bg-white">
		<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<ProductList products={$products.data.products} />
		</div>
	</div>
{/if}
