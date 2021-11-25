const serviceStore ={
  namespaced :true,
  state: {
    user : null,
    accessToken: null,
    refreshToken : null
  },
  getters: {
    //login 관련
    getUser(state : any){
      return state.user
    },
    getToken(state : any){
      return state.accessToken;
    },
    getRefreshToken(state : any){
      return state.refreshToken
    }
  },
  mutations: {
    setUser(state : any, user : any){
      state.user = user
    },
    setToken(state : any, payload : any) {
      state.accessToken = payload
    },
    setRefreshToken(state : any,  payload : any){
      state.refreshToken = payload
    }
  },
  actions : {

  }
}
export default serviceStore
