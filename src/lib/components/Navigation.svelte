<script>
	import logoLight from '$lib/assets/logo-light.svg';
	import logoDark from '$lib/assets/logo-dark.svg';
	import { query } from 'svelte-apollo';
	import { GET_BASKET } from '$lib/graphql/queries';

	const GRAPHQL_HTTP_HOST = import.meta.env.VITE_GRAPHQL_HTTP_HOST;
	$: basket = query(GET_BASKET);

	export let lightTheme = true;
</script>

<header class="relative z-10">
	<nav aria-label="Top">
		<!-- Top navigation -->
		<div class="bg-gray-900">
			<div class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<!-- Currency selector -->
				<form>
					<div>
						<label for="desktop-currency" class="sr-only">Currency</label>
						<div
							class="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white"
						>
							<select
								id="desktop-currency"
								name="currency"
								class="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
							>
								<option>EUR</option>

								<option>USD</option>

								<option>AUD</option>

								<option>SEK</option>

								<option>GBP</option>
							</select>
							<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center">
								<!-- Heroicon name: mini/chevron-down -->
								<svg
									class="h-5 w-5 text-gray-300"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>
					</div>
				</form>

				<div class="flex items-center space-x-6">
					<a href="/login" class="text-sm font-medium text-white hover:text-gray-100">Sign in</a>
					<a href="/register" class="text-sm font-medium text-white hover:text-gray-100"
						>Create an account</a
					>
				</div>
			</div>
		</div>

		<!-- Secondary navigation -->
		<div
			class="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter {!lightTheme && 'bg-gray-300'}"
		>
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div>
					<div class="flex h-16 items-center justify-between">
						<!-- Logo (lg+) -->
						<div class="hidden lg:flex lg:flex-1 lg:items-center">
							<a href="/">
								<span class="sr-only">Verison Store</span>
								<img class="h-8 w-auto" src={lightTheme ? logoLight : logoDark} alt="" />
							</a>
						</div>

						<!-- Mobile menu and search (lg-) -->
						<div class="flex flex-1 items-center lg:hidden">
							<!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
							<!-- <button type="button" class="-ml-2 p-2 text-white">
								<span class="sr-only">Open menu</span>
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							</button> -->

							<!-- Search -->
							<!-- <a href="#" class="ml-2 p-2 text-white">
                                <span class="sr-only">Search</span>
                                <svg
                                    class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </a> -->
						</div>

						<!-- Logo (lg-) -->
						<a href="/" class="lg:hidden">
							<span class="sr-only">Version Store</span>
							<img src={lightTheme ? logoLight : logoDark} alt="" class="h-8 w-auto" />
						</a>

						<div class="flex flex-1 items-center justify-end">
							<!-- <a href="#" class="hidden text-sm font-medium text-white lg:block">Search</a> -->

							<div class="flex items-center lg:ml-8">
								<!-- <a href="#" class="p-2 text-white lg:hidden">
                                    <span class="sr-only">Help</span>
                                    <svg
                                        class="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                        />
                                    </svg>
                                </a>
                                <a href="#" class="hidden text-sm font-medium text-white lg:block">Help</a> -->

								<!-- Cart -->
								<div class="ml-4 flow-root lg:ml-8">
									<a href="/basket" class="group -m-2 flex items-center p-2">
										<!-- Heroicon name: outline/shopping-bag -->
										<svg
											class="h-6 w-6 flex-shrink-0 {lightTheme ? 'text-white' : 'text-black'}"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
											/>
										</svg>
										<span
											class="ml-2 text-sm font-medium {lightTheme ? 'text-white' : 'text-black'}"
											>{#if $basket.loading}
												...
											{:else if $basket.error}
												<h1>Error: {$basket.error.message}</h1>
											{:else}
												{$basket.data.basket.items.length}
											{/if}</span
										>
										<span class="sr-only">items in cart, view bag</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>
