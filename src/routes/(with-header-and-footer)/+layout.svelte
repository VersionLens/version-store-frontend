<script>
	import '../../app.css';

	import { setClient } from 'svelte-apollo';
	import client from '$lib/graphql/client';
	// import Navigation from '../../lib/components/Navigation.svelte';

	setClient(client);
</script>

<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<div class="bg-white">
	<!-- <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
		<div class="fixed inset-0 bg-black bg-opacity-25" />

		<div class="fixed inset-0 z-40 flex">
			<div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
				<div class="flex px-4 pt-5 pb-2">
					<button
						type="button"
						class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<div class="space-y-6 border-t border-gray-200 py-6 px-4">
					<div class="flow-root">
						<a href="/register" class="-m-2 block p-2 font-medium text-gray-900"
							>Create an account</a
						>
					</div>
					<div class="flow-root">
						<a href="/login" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
					</div>
				</div>

				<div class="space-y-6 border-t border-gray-200 py-6 px-4">
					<form>
						<div class="inline-block">
							<label for="mobile-currency" class="sr-only">Currency</label>
							<div
								class="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white"
							>
								<select
									id="mobile-currency"
									name="currency"
									class="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
								>
									<option>EUR</option>

									<option>USD</option>

									<option>AUD</option>

									<option>SEK</option>

									<option>GBP</option>
								</select>
								<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center">
									<svg
										class="h-5 w-5 text-gray-500"
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
				</div>
			</div>
		</div>
	</div> -->

	<slot />

	<footer aria-labelledby="footer-heading" class="bg-gray-900">
		<h2 id="footer-heading" class="sr-only">Footer</h2>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
				<div class="grid grid-cols-2 gap-8 xl:col-span-2">
					<div class="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
						<div>
							<h3 class="text-sm font-medium text-white">Shop</h3>
							<ul role="list" class="mt-6 space-y-6">
								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Bags</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Tees</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Objects</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Home Goods</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Accessories</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 class="text-sm font-medium text-white">Company</h3>
							<ul role="list" class="mt-6 space-y-6">
								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Who we are</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Sustainability</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Press</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Careers</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Terms &amp; Conditions</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Privacy</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
						<div>
							<h3 class="text-sm font-medium text-white">Account</h3>
							<ul role="list" class="mt-6 space-y-6">
								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Manage Account</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Returns &amp; Exchanges</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Redeem a Gift Card</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 class="text-sm font-medium text-white">Connect</h3>
							<ul role="list" class="mt-6 space-y-6">
								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Contact Us</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Twitter</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Instagram</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Pinterest</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="mt-12 md:mt-16 xl:mt-0">
					<h3 class="text-sm font-medium text-white">Sign up for our newsletter</h3>
					<p class="mt-6 text-sm text-gray-300">
						The latest deals and savings, sent to your inbox weekly.
					</p>
					<form class="mt-2 flex sm:max-w-md">
						<label for="email-address" class="sr-only">Email address</label>
						<input
							id="email-address"
							type="text"
							autocomplete="email"
							required
							class="w-full min-w-0 appearance-none rounded-md border border-white bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
						/>
						<div class="ml-4 flex-shrink-0">
							<button
								type="submit"
								class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
								>Sign up</button
							>
						</div>
					</form>
				</div>
			</div>

			<div class="border-t border-gray-800 py-10">
				<p class="text-sm text-gray-400">Copyright &copy; 2023 Version Store, Inc.</p>
			</div>
		</div>
	</footer>
</div>
