<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import EmptyBasket from '$lib/components/basket/EmptyBasket.svelte';
	import { query, mutation } from 'svelte-apollo';
	import { GET_BASKET } from '$lib/graphql/queries';
	import { REMOVE_PRODUCT_FROM_BASKET } from '$lib/graphql/mutations';
	import * as R from 'ramda';

	const removeFromBasketMutation = mutation(REMOVE_PRODUCT_FROM_BASKET);

	const removeFromBasket = async (productId) => {
		await removeFromBasketMutation({
			variables: { productId: parseInt(productId) }
		});
		location.reload();
	};

	const GRAPHQL_HTTP_HOST = import.meta.env.VITE_GRAPHQL_HTTP_HOST;
	$: basket = query(GET_BASKET);

	const getTotalAmount = () => {
		return $basket.data.basket.items
			.map((item) => parseInt(item.product.price))
			.reduce((partialSum, price) => partialSum + price, 0);
	};

	const getProducts = () => {
		// Returns an object with the following structure
		// {
		// 	"product-id": [
		// 		{item...},
		// 		{item...}
		// 	],
		// 	"another-product-id": ...
		// }
		const items = $basket?.data?.basket?.items;
		if (!items) return [];
		console.log(items);

		const byProductId = R.groupBy(({ product }) => product.id);
		const products = byProductId(items);
		console.log(products);
		return products;
	};
</script>

<Navigation lightTheme={false} />

<div class="bg-white">
	<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-0">
		<h1 class="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
			Shopping Cart
		</h1>

		{#if $basket.loading}
			Loading...
		{:else if $basket.error}
			<h1>Error: {$basket.error.message}</h1>
		{:else if $basket.data.basket.items.length === 0}
			<div class="mt-10">
				<EmptyBasket />
			</div>
		{:else}
			<div class="mt-12">
				<section aria-labelledby="cart-heading">
					<h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

					<ul role="list" class="divide-y divide-gray-200 border-t border-b border-gray-200">
						{#each Object.entries(getProducts()) as [productId, items]}
							<li class="flex py-6">
								<div class="flex-shrink-0">
									<img
										src="{GRAPHQL_HTTP_HOST}{items[0].product.image.url}"
										alt=""
										class="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
									/>
								</div>

								<div class="ml-4 flex flex-1 flex-col sm:ml-6">
									<div>
										<div class="flex justify-between">
											<h4 class="text-sm">
												<a href="#" class="font-medium text-gray-700 hover:text-gray-800"
													>{items[0].product.name}</a
												>
											</h4>
											<p class="ml-4 text-sm font-medium text-gray-900">
												€{items[0].product.price}
											</p>
										</div>
										<!-- <p class="mt-1 text-sm text-gray-500">Mint</p>
										<p class="mt-1 text-sm text-gray-500">Medium</p> -->
									</div>

									<div class="mt-4 flex items-center sm:mt-0 sm:block">
										<label for="quantity-0" class="sr-only">Quantity, Nomad Tumbler</label>
										<select
											id="quantity-0"
											name="quantity-0"
											class="block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
										>
											{#each Array(Math.max(items.length, 9)) as _, i}
												<option selected={i + 1 === items.length} value={i + 1}>{i + 1}</option>
											{/each}
										</select>

										<button
											type="button"
											class="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
										/>
									</div>

									<div class="mt-4 flex flex-1 items-end justify-between">
										<p class="flex items-center space-x-2 text-sm text-gray-700">
											<svg
												class="h-5 w-5 flex-shrink-0 text-green-500"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												/>
											</svg>
											<span>In stock</span>
										</p>
										<div class="ml-4">
											<button
												on:click={() => removeFromBasket(productId)}
												type="button"
												class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
											>
												<span>Remove</span>
											</button>
										</div>
									</div>
								</div>
							</li>
						{/each}
					</ul>
				</section>

				<!-- Order summary -->
				<section aria-labelledby="summary-heading" class="mt-10">
					<h2 id="summary-heading" class="sr-only">Order summary</h2>

					<div>
						<dl class="space-y-4">
							<div class="flex items-center justify-between">
								<dt class="text-base font-medium text-gray-900">Subtotal</dt>
								<dd class="ml-4 text-base font-medium text-gray-900">€{getTotalAmount()}</dd>
							</div>
						</dl>
						<p class="mt-1 text-sm text-gray-500">
							Shipping and taxes will be calculated at checkout.
						</p>
					</div>

					<div class="mt-10">
						<button
							on:click={() => alert('This is just a demo')}
							class="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
							>Checkout</button
						>
					</div>

					<div class="mt-6 text-center text-sm">
						<p>
							or
							<a href="/products" class="font-medium text-indigo-600 hover:text-indigo-500">
								Continue Shopping
								<span aria-hidden="true"> &rarr;</span>
							</a>
						</p>
					</div>
				</section>
			</div>
		{/if}
	</div>
</div>
