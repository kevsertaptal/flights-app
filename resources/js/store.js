import {createApp} from "vue";
import {createStore} from "vuex";

// Create a new store instance.
const store = createStore({
    state() {
        return {
            activeTab: "flight",
        };
    },
    mutations: {
        setActiveTab(state, tab) {
            state.activeTab = tab;
        }
    },
});

// Export the store instance.
export default store;
