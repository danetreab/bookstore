<script lang="ts">
    export let inCart:number
    export let path:string;
    let isToggle = false;

    $: path, isToggle=false;

</script>

<nav class={`flex my-8 md:items-center items-start duration-300 justify-between border-b-2 md:border-b-0 ${isToggle ? 'h-72 flex-col md:h-auto md:flex-row' : 'flex-row h-24'}`}>
    <div class="uppercase font-bold flex flex-col w-fit">
        <span class="text-4xl border-b-4 border-black">Get</span>
        <span class="text-2xl">book</span>
    </div>
    <ul class={`font-bold uppercase md:flex py-4 ${isToggle ? 'flex-col md:flex-row md:gap-14 flex gap-4 pl-5':'flex-row gap-14 hidden'}`}>
        <li class="group cursor-pointer">
            <a href="/">Home</a>
            <div class={`group-hover:w-7 h-1 bg-[#B8B6B6] ${path === '/' ? 'w-7':'w-0'} transition-all duration-300`}></div>
        </li>
        <li class="group cursor-pointer">
            <a href="product">Product</a>
            <div class={`group-hover:w-7 h-1 bg-[#B8B6B6] ${path === '/product' ? 'w-7':'w-0'} transition-all duration-300`}></div>
        </li>
        <li class="group cursor-pointer">
            <a href="about">About</a>
            <div class={`group-hover:w-7 h-1 bg-[#B8B6B6] ${path === '/about' ? 'w-7':'w-0'} transition-all duration-300`}></div>
        </li>
        <li class="group cursor-pointer">
            <a href="cart">Cart({inCart})</a>
            <div class={`group-hover:w-7 h-1 bg-[#B8B6B6] ${path === '/cart' ? 'w-7':'w-0'} transition-all duration-300`}></div>
        </li>
    </ul>
    <button on:click={()=>{isToggle=!isToggle}} class="group cursor-pointer flex flex-col absolute right-8 top-14 gap-[6px] md:hidden items-end">
        <span class={`duration-300 origin-center w-8 h-[5px] bg-black ${isToggle && 'translate-y-[13.5px] rotate-45'}`}></span>
        <span class={`origin-center opacity-1 group-hover:w-5 w-8 h-[5px] bg-black duration-200 ${isToggle && 'opacity-0'}`}></span>
        <span class={`duration-300 origin-center w-8 h-[5px] bg-black ${isToggle && '-translate-y-2 -rotate-45'}`}></span>
    </button>
</nav>
