function $(x) {return document.querySelector(x);}

var defect_box = $('.defect_box');
var input_area = $('.input_area');
var input_measured = $('.input_measured');
var equals_lengths = $('.equals_lengths');

var area = 0;
var px500tomm = 0;
update_defect_box_area();

input_area.addEventListener('keyup', function(event) {
  area = parseInt(this.value)
  if (this.value.length > 0) {
    this.classList.remove('totype');
  } else {
    area = 0;
    if (input_measured.value.length > 0) {
      this.classList.add('totype');
    }
  }
  update_defect_box_area();
})

input_measured.addEventListener('keyup', function(event) {
  if (this.value.length > 0) {
    this.classList.remove('totype');
    if (input_area.value.length > 0) {
      input_area.classList.remove('totype');
    } else {
      input_area.classList.add('totype');
    }
  } else {
    this.classList.add('totype');
    input_area.classList.remove('totype');
  }

  px500tomm = parseInt(this.value);
  update_defect_box_area();
})

input_measured.addEventListener('keydown', function(event) {
  if (event.keyCode == 9) { // Tab key
    event.preventDefault();
    input_area.focus();
  }
})

function update_defect_box_area() {
  var len = Math.sqrt(area);
  var len_scaled = len * 500 / px500tomm;
  defect_box.style.width = len_scaled + 'px';
  defect_box.style.height = len_scaled + 'px';
  equals_lengths.innerHTML = " = " + len.toFixed(2) + "mm x " + len.toFixed(2) + "mm.";
}