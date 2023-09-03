export function setPageTitle(state, data) {
    state.pageTitle = data;
  }
  
  export function setUserDetails(state, data) {
    state.userLoading = false;
    state.user = data;
  }
  
  export function setUserSessionExpired(state, data) {
    state.sessionExpired = data;
  }