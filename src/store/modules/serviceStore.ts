const serviceStore ={
  namespaced :true,
  state: {
    accessToken: localStorage.getItem("access_token"),
  },
  getters: {
    getToken(state : any){
      return state.accessToken;
    },
  },
  mutations: {
    getStorageToken(state : any) {
      state.accessToken = localStorage.getItem("access_token");
    },
  },
}
export default serviceStore
