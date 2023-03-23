import type { product } from "src/types/product";
import { writable } from "svelte/store";

export const cart  = writable<Array<product>>([]);
