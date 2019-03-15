
const chooser = document.getElementById('chooser');

chooser.value = '';
chooser.addEventListener('change', ({target: {value}}) => {
	location.href = value;
})

