export default {
    namespaced: true,
    state() {
        return {
            products: [],
        };
    },
    mutations: {
        addProduct(state, payload) {
            const newProduct = {
                productId: payload.id,
                title: payload.title,
                image: payload.image,
                price: payload.price,
                qty: 1,
            }
            const productCartIndex = state.products.findIndex((item) => item.productId === newProduct.productId);

            if (productCartIndex >= 0) {
                state.products[productCartIndex].qty++;
            } else {
                state.products.push(newProduct);
            }
        },
        removeProduct(state, payload) {
            const productId = payload;
            const productCardIndex = state.products.findIndex((item) => item.productId === productId);
            state.products.splice(state.products[productCardIndex], 1);
        },
    },
    getters: {
        productList(state) {
            return state.products;
        },
        cartTotal(state) {
            return state.products.reduce((x, y) => x + (y.price * y.qty), 0).toFixed(2);
        },
        cartQuantity(state) {
            return state.products.reduce((x, y) => x + y.qty, 0);
        }
    },
    actions: {
        addToCart(context, payload) {
            context.commit('addProduct', payload);
        },
        removeFromCart(context, payload) {
            context.commit('removeProduct', payload);
        }
    }
};