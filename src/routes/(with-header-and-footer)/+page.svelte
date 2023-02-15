<script>
	import sign from '$lib/assets/sign.jpg';

	import { query } from 'svelte-apollo';
	import { GET_MY_TODOS } from '$lib/graphql/queries';
	import Navigation from '$lib/components/Navigation.svelte';

	const todos = query(GET_MY_TODOS);
</script>

<div class="relative bg-gray-900">
	<!-- Decorative image and overlay -->
	<div aria-hidden="true" class="absolute inset-0 overflow-hidden">
		<img src={sign} alt="" class="h-full w-full object-cover object-center" />
	</div>
	<div aria-hidden="true" class="absolute inset-0 bg-gray-900 opacity-50" />

	<Navigation />

	<div
		class="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0"
	>
		<h1 class="text-4xl font-bold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
		<p class="mt-4 text-xl text-white">
			We've just started offering our beloved physical version products publically. There's a
			limited number of items available.
		</p>
		<a
			href="/products"
			class="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
			>Shop Version Lens Products</a
		>
	</div>
</div>

<main>
	<!-- Category section -->
	<!-- <section
		aria-labelledby="category-heading"
		class="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
	>
		<div class="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
			<h2 id="category-heading" class="text-2xl font-bold tracking-tight text-gray-900">
				Shop by Category
			</h2>
			<a
				href="#"
				class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
			>
				Browse all categories
				<span aria-hidden="true"> &rarr;</span>
			</a>
		</div>

		<div class="mt-4 flow-root">
			<div class="-my-2">
				<div class="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
					<div
						class="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0"
					>
						<a
							href="#"
							class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
						>
							<span aria-hidden="true" class="absolute inset-0">
								<img
									src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg"
									alt=""
									class="h-full w-full object-cover object-center"
								/>
							</span>
							<span
								aria-hidden="true"
								class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
							/>
							<span class="relative mt-auto text-center text-xl font-bold text-white"
								>New Arrivals</span
							>
						</a>

						<a
							href="#"
							class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
						>
							<span aria-hidden="true" class="absolute inset-0">
								<img
									src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg"
									alt=""
									class="h-full w-full object-cover object-center"
								/>
							</span>
							<span
								aria-hidden="true"
								class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
							/>
							<span class="relative mt-auto text-center text-xl font-bold text-white"
								>Productivity</span
							>
						</a>

						<a
							href="#"
							class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
						>
							<span aria-hidden="true" class="absolute inset-0">
								<img
									src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg"
									alt=""
									class="h-full w-full object-cover object-center"
								/>
							</span>
							<span
								aria-hidden="true"
								class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
							/>
							<span class="relative mt-auto text-center text-xl font-bold text-white"
								>Workspace</span
							>
						</a>

						<a
							href="#"
							class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
						>
							<span aria-hidden="true" class="absolute inset-0">
								<img
									src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg"
									alt=""
									class="h-full w-full object-cover object-center"
								/>
							</span>
							<span
								aria-hidden="true"
								class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
							/>
							<span class="relative mt-auto text-center text-xl font-bold text-white"
								>Accessories</span
							>
						</a>

						<a
							href="#"
							class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
						>
							<span aria-hidden="true" class="absolute inset-0">
								<img
									src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg"
									alt=""
									class="h-full w-full object-cover object-center"
								/>
							</span>
							<span
								aria-hidden="true"
								class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
							/>
							<span class="relative mt-auto text-center text-xl font-bold text-white">Sale</span>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-6 px-4 sm:hidden">
			<a href="#" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
				Browse all categories
				<span aria-hidden="true"> &rarr;</span>
			</a>
		</div>
	</section> -->

	<!-- Featured section -->
	<!-- <section
		aria-labelledby="comfort-heading"
		class="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
	>
		<div class="relative overflow-hidden rounded-lg">
			<div class="absolute inset-0">
				<img
					src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
					alt=""
					class="h-full w-full object-cover object-center"
				/>
			</div>
			<div class="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
				<div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
					<h2
						id="comfort-heading"
						class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
					>
						Simple productivity
					</h2>
					<p class="mt-3 text-xl text-white">
						Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're
						doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our
						Focus system. Just the undeniable urge to fill empty circles.
					</p>
					<a
						href="#"
						class="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
						>Shop Focus</a
					>
				</div>
			</div>
		</div>
	</section> -->

	<!-- Featured section -->
	<section
		aria-labelledby="comfort-heading"
		class="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
	>
		<div class="relative overflow-hidden rounded-lg">
			<div class="absolute inset-0">
				<img
					src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
					alt=""
					class="h-full w-full object-cover object-center"
				/>
			</div>
			<div class="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
				<div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
					<h2 id="comfort-heading" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						More product launches soon!
					</h2>
					<p class="mt-3 text-xl text-white">
						We've just launched Version Store and can't wait to launch more products to you!
					</p>
					<a
						href="#"
						class="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
						>See our first products</a
					>
				</div>
			</div>
		</div>
	</section>
</main>
