import { createStore } from "vuex";
// import { adminStore } from "@/store/modules/adminStore";
import serviceStore from "@/store/modules/serviceStore";

export default createStore({
  modules: {
     // adminStore : adminStore,
    serviceStore : serviceStore
  },
});
