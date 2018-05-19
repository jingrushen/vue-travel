(function () {
  var tid
  function recal () {
    var rem
    var width = document.documentElement.clientWidth
    rem = 100 * (width / 640)
    document.documentElement.style.fontSize = rem + 'px'
  }
  window.addEventListener('resize', function () {
    clearTimeout(tid)
    recal()
  }, false)
  recal()
})()
