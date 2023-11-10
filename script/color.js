// JavaScript code for changing background and text color based on dropdown selections
document.getElementById('backgroundColorSelect').addEventListener('change', function () {
    var selectedBackgroundColor = this.value;
    document.body.style.backgroundColor = selectedBackgroundColor;
});

document.getElementById('textColorSelect').addEventListener('change', function () {
    var selectedTextColor = this.value;
    document.body.style.color = selectedTextColor;
});