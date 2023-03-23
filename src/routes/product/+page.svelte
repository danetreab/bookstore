<script lang="ts">
	import type { product } from 'src/types/product';
	import { cart } from '../../store/CartItem';

	let currentCategory = 'Fiction';

	const addToCart = (product: product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				item.quantity += 1;
				$cart = $cart;
				return;
			}
		}
		$cart = [...$cart, product];
	};

	let products = [
		{
			id: 1,
			name: 'Stuio Media',
			image:
				'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			price: 40,
			category: 'Fiction'
		},
		{
			id: 2,
			name: 'Harry Potter',
			image:
				'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			price: 90,
			category: 'Fiction'
		},
		{
			id: 3,
			name: 'Prom to remember',
			image:
				'https://images.unsplash.com/photo-1519764340700-3db40311f21e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80',
			price: 10,
			category: 'Mystery'
		},
		{
			id: 4,
			name: 'Sincerely Media',
			image:
				'https://images.unsplash.com/photo-1577627444534-b38e16c9d796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
			price: 20,
			category: 'Non-fiction'
		},
		{
			id: 5,
			name: 'Reza shayaestehpour',
			image:
				'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			price: 30,
			category: 'Romance'
		},
		{
			id: 6,
			name: 'Jah Kahanek',
			image:
				'https://images.unsplash.com/photo-1593340010859-83edd3d6d13f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
			price: 50,
			category: 'Literary fiction'
		}
	];
	const category = [
		{ id: 1, name: 'Fiction', subcategory: [{ name: '' }] },
		{
			id: 2,
			name: 'Non-fiction',
			subcategory: [{ name: 'Literary fiction' }]
		},
		{ id: 3, name: 'Mystery', subcategory: [{ name: '' }] },
		{ id: 4, name: 'Romance', subcategory: [{ name: '' }] }
	];
</script>

<div class="flex gap-10 flex-col lg:flex-row my-14">
	<div>
		<input
			type="text"
			placeholder="Search"
			class="text-2xl font-semibold border-b-2 pb-3 outline-none focus:border-black duration-300 mb-8 w-full lg:w-56"
		/>
		<ul class="flex flex-col gap-2">
			{#each category as { name, subcategory }}
				<li>
					<button
						on:click={() => {
							currentCategory = name;
						}}
						class={currentCategory!==name?"cursor-pointer hover:font-bold duration-100":"cursor-pointer font-bold"}>{name}</button
					>
				</li>
				<ul class="flex flex-col gap-2 pl-4">
					{#each subcategory as { name }}
						{#if name}
							<li class="py-1">
								<button
									class={currentCategory!==name?"cursor-pointer hover:font-bold duration-100":"cursor-pointer font-bold"}
									on:click={() => {
										currentCategory = name;
									}}>{name}</button
								>
							</li>
						{/if}
					{/each}
				</ul>
			{/each}
		</ul>
	</div>
	<div>
		<div class="md:justify-self-end md:ml-auto flex flex-col justify-center gap-4">
			<p class="text-2xl font-bold">{currentCategory}</p>
			<div
				class="grid auto gap-x-7 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
			>
				{#each products.filter((item) => item.category === currentCategory) as product}
					{#if !product}
						<p>No product found</p>
					{:else}
						<div class="group cursor-pointer">
							<div class="overflow-hidden relative">
								<img
									class="group-hover:scale-105 h-[300px] w-full md:w-[300px] object-center object-cover duration-300"
									src={product.image}
									alt=""
									srcset=""
								/>
								<button
									on:click={() => addToCart({ ...product, quantity: 1 })}
									class="w-full bg-[#ffffffda] font-bold justify-center flex items-center absolute py-3 duration-500 bottom-0 md:-bottom-20 md:group-hover:bottom-0"
								>
									Add to cart
								</button>
							</div>
							<div class="py-2 flex flex-col gap-2">
								<p class="text-xl font-semibold">{product.name}</p>
								<p class="text-lg font-bold text-[#B8B6B8] group-hover:text-black duration-300">
									{product.price}$
								</p>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</div>
		<div class="flex gap-6 justify-center items-center pt-7 pb-10">
			<span class="group font-semibold text-[#9D9D9D] hover:text-black cursor-pointer duration-300">
				<button>Prev</button>
				<div class="group-hover:w-7 w-0 h-1 bg-[#B8B6B6] duration-300" />
			</span>
			<span class="font-semibold text-[#9D9D9D] hover:text-black cursor-pointer duration-300"
				>1</span
			>
			<span class="group font-semibold text-[#9D9D9D] hover:text-black cursor-pointer duration-300">
				<button>Next</button>
				<div class="group-hover:w-7 w-0 h-1 bg-[#B8B6B6] duration-300" />
			</span>
		</div>
	</div>
</div>
