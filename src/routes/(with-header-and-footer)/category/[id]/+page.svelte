<script>
	import { page } from '$app/stores';

	import { query } from 'svelte-apollo';
	import { GET_CATEGORY } from '$lib/graphql/queries';
	import Navigation from '$lib/components/Navigation.svelte';
	import ProductList from '$lib/components/ProductList.svelte';

	$: categoryId = $page.params.id;
	$: category = query(GET_CATEGORY, { variables: { id: categoryId } });
	// $: () => console.log($category);
</script>

<Navigation lightTheme={false} />

{#if $category.loading}
	Loading...
{:else if $category.error}
	<h1>Error: {$category.error.message}</h1>
{:else if $category?.data?.category?.products?.length > 0}
	<div class="bg-white">
		<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<div class="flex items-center justify-between px-4 sm:px-6 lg:px-0">
				<h2 class="text-2xl font-bold tracking-tight text-gray-900">
					{$category.data.category.name}
				</h2>
				<a
					href="/products"
					class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
				>
					See all products
					<span aria-hidden="true"> →</span>
				</a>
			</div>
			<ProductList products={$category.data.category.products} />
		</div>
	</div>
{:else}
	<h3 class="mt-r4 text-lg text-gray-700">No products found in category</h3>
{/if}
