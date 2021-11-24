const serviceStore ={
  namespaced :true,
  state: {
    user : null,
    accessToken: null,
  },
  getters: {
    //login 관련
    getUser(state : any){
      return state.user
    },
    getToken(state : any){
      return state.accessToken;
    },
  },
  mutations: {
    setUser(state : any, user : any){
      state.user = user
    },
    setStorageToken(state : any, token : string) {
      state.accessToken = localStorage.getItem(token);
    },
  },
}
export default serviceStore
