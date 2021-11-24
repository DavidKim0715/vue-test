import { createStore } from "vuex";
import { createNamespacedHelpers } from 'vuex'
import serviceStore from "@/store/modules/service/serviceStore";

const { mapState, mapActions } = createNamespacedHelpers('./module')

const store =  createStore({
  modules: {
    service : serviceStore
  },
});
export default store
