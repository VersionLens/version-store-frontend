<script>
	import { query } from 'svelte-apollo';
	import { GET_PRODUCTS } from '$lib/graphql/queries';
	import Navigation from '$lib/components/Navigation.svelte';

	const GRAPHQL_HTTP_HOST = import.meta.env.VITE_GRAPHQL_HTTP_HOST;
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
			<h2 class="sr-only">Products</h2>

			<div
				class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
			>
				{#each $products.data.products as product}
					<a href="/product/{product.id}" class="group">
						<div
							class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
						>
							<img
								src="{GRAPHQL_HTTP_HOST}{product.image.url}"
								alt=""
								class="h-full w-full object-cover object-center group-hover:opacity-75"
							/>
						</div>
						<h3 class="mt-4 text-sm text-gray-700">{product.name}</h3>
						<p class="mt-1 text-lg font-medium text-gray-900">€{product.price}</p>
					</a>
				{/each}

				<!-- <a href="#" class="group">
					<div
						class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
					>
						<img
							src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
							alt="Olive drab green insulated bottle with flared screw lid and flat top."
							class="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
					<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
				</a>

				<a href="#" class="group">
					<div
						class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
					>
						<img
							src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
							alt="Person using a pen to cross a task off a productivity paper card."
							class="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
					<p class="mt-1 text-lg font-medium text-gray-900">$89</p>
				</a>

				<a href="#" class="group">
					<div
						class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
					>
						<img
							src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
							alt="Hand holding black machined steel mechanical pencil with brass tip and top."
							class="h-full w-full object-cover object-center group-hover:opacity-75"
						/>
					</div>
					<h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
					<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
				</a> -->

				<!-- More products... -->
			</div>
		</div>
	</div>
{/if}
