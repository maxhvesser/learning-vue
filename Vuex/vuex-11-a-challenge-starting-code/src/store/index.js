import { createStore } from "vuex";
import cartModule from "@/store/modules/cart";
import productsModule from "@/store/modules/products";

export default createStore({
    modules: {
        cart: cartModule,
        products: productsModule,
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    getters: {
        userIsLoggedIn(state) {
            return state.isLoggedIn;
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', {isAuth: true});
        },
        logout(context) {
            context.commit('setAuth', {isAuth: false});
        }
    }
});