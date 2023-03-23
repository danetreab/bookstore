<script lang="ts">
    import "../app.css";
    import {page} from "$app/stores";
    import Nav from "$lib/Nav.svelte";
	import { cart } from "../store/CartItem";
</script>

<Nav path={$page.url.pathname} inCart={$cart.length}/>
<slot />