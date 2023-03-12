import {createStore} from "vuex";

import counterModule from './counter/index';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

const store = createStore({
    modules: {
        numbers: counterModule,
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions,
});

export default store;