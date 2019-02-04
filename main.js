function $(x) {return document.querySelector(x);}

var defect_box = $('.defect_box');
var input_area = $('.input_area');
var input_measured = $('.input_measured');
var equals_lengths = $('.equals_lengths');

var area = 0;
var px500tomm = 0;

input_area.addEventListener('keyup', function(event) {
  area = parseInt(this.value)
  update_defect_box_area();
})

input_measured.addEventListener('keyup', function(event) {
  px500tomm = parseInt(this.value);
  update_defect_box_area();
})

function update_defect_box_area() {
  var len = Math.sqrt(area);
  var len_scaled = len * 500 / px500tomm;
  defect_box.style.width = len_scaled + 'px';
  defect_box.style.height = len_scaled + 'px';
  equals_lengths.innerHTML = " = " + len.toFixed(2) + "mm x " + len.toFixed(2) + "mm.";
}