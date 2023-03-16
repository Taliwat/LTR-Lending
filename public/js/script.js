var range = document.getElementById('credit');
var rangeValue = document.getElementById('range-value');

range.addEventListener('input', function() {
  rangeValue.innerHTML = range.value;
});
