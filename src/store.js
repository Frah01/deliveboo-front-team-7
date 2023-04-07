import { reactive } from 'vue';

export const store = reactive({
    baseUrl: 'http://127.0.0.1:8000',
    loading: false,
    qta_items: 0,
    cart_off_canvas: [],
});
