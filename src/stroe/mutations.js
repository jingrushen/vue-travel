export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) { }
  },
  changeScrollY (state, y) {
    state.home_top = y
    try {
      sessionStorage.home_top = y
    } catch (error) { }
  }
}
