<script lang="ts">
	let fullname: string;
	let mail: string;
	let message: string;
</script>

<div class="flex gap-10 flex-col">
	<p class="font-semibold text-2xl leading-10 py-5">
		Welcome to GETBOOK, your one-stop shop for all things literature! <br />
		We are an independently owned and operated online bookstore <br />
		that has been serving book lovers like you
	</p>
	<div class="flex flex-col gap-7 py-5">
		<p class="uppercase text-2xl font-bold">Contact us</p>
		<form
			on:submit={() => {
				console.log(fullname, mail, message);
			}}
			class="flex flex-col gap-6"
		>
			<div class="flex gap-6 flex-col md:flex-row">
				<input
					bind:value={fullname}
					placeholder="Your name"
					type="text"
					class="border-2 border-black outline-none text-2xl p-4 font-semibold w-full"
				/>
				<input
					bind:value={mail}
					placeholder="Email"
					type="email"
					class="border-2 border-black outline-none text-2xl p-4 font-semibold w-full"
				/>
			</div>
			<textarea
				bind:value={message}
				name="message"
				cols="20"
				rows="5"
				placeholder="Message"
				class="border-2 border-black outline-none text-2xl p-4 font-semibold w-full resize-none"
			/>
			<div class="flex gap-6">
				<button class="py-2 px-6 bg-[#D9D9D9] font-bold hover:bg-[#ECECEC] duration-300 text-lg"
					>Send</button
				>
                <button class="font-bold text-[#aaaaaa] hover:text-black duration-300" on:click={()=>{fullname='',mail='',message=''}}>Clear</button>
			</div>
		</form>
	</div>
</div>
