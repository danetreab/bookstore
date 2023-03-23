<script lang="ts">
	import type { product } from 'src/types/product';
	import { cart } from '../../store/CartItem';

	const removeItem = (product: product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				$cart = $cart.filter((cartItem) => cartItem.id !== product.id);
			}
		}
	};

	const minusItem = (product: product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				if (product.quantity > 1) {
					product.quantity -= 1;
					$cart = $cart;
				} else {
					$cart = $cart.filter((cartItem) => cartItem != product);
				}
				return;
			}
		}
	};

	const plusItem = (product: product) => {
		for (let item of $cart) {
			if (item.id === product.id) {
				product.quantity += 1;
				$cart = $cart;
				return;
			}
		}
	};


</script>

<div>
	<p class="text-2xl font-bold">My Cart</p>

	{#each $cart as product}
		<div class="flex flex-col md:flex-row py-8">
			<img
				class="h-[300px] min-w-[300px] md:w-[300px] object-center object-cover"
				src={product.image}
				alt=""
				srcset=""
			/>
			<div class="flex flex-col w-full md:px-8 py-2">
				<div class="flex flex-col">
					<div class="flex justify-between">
						<p class="font-bold text-2xl">{product.name}</p>
						<button
							on:click={() => removeItem(product)}
							class="text-[#B8B6B8] hover:text-black duration-300 font-bold">Remove</button
						>
					</div>
					<p class="py-2 text-[#B8B6B8] font-bold text-2xl">{product.price}$</p>
				</div>
				<div class="mt-auto justify-self-end">
					<p>Quantity</p>
					<div class="flex gap-2 pt-4">
						<button on:click={()=>minusItem(product)} class="px-4 text-xl py-2 border">-</button>
						<p class="p-2 border-y">{product.quantity}</p>
						<button on:click={()=>plusItem(product)} class="px-4 text-xl py-2 border">+</button>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
