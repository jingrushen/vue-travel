let defaultCity = '北京'
let defaultHomeTop = 0

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) { }

try {
  if (sessionStorage.home_top) {
    defaultHomeTop = sessionStorage.home_top
  }
} catch (error) { }

export default {
  city: defaultCity,
  home_top: defaultHomeTop
}
