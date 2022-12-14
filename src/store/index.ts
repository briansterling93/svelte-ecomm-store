import { writable } from "svelte/store";
import type { Product } from "../types";

export const topSellingProducts = writable<Product[] | []>([]);
export const isQuickLookModalVisible = writable<boolean>(false);
