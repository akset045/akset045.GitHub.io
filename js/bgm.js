let SoundButton = document.getElementById("SoundButton");
let ThemeButton = document.getElementById("ThemeButton");

let BGM = document.getElementById("SoundEl");
let BGMIcon = document.getElementById("SoundIcon");

let theme = document.getElementById('ThemeNow');
let themeIcon = document.getElementById('ThemeIcon');

SoundButton.onclick = function () {

	BGM.muted = !BGM.muted;

	if (BGM.muted) {
		if (theme.getAttribute('href') == 'css/1-styles-light.css') {
			BGMIcon.src = 'src/sound-off-dark.png'
		}
		else {
			BGMIcon.src = 'src/sound-off-white.png'
		}
	}
	else {
		if (theme.getAttribute('href') == 'css/1-styles-light.css') {
			BGMIcon.src = 'src/sound-on-dark.png'
		}
		else {
			BGMIcon.src = 'src/sound-on-white.png'
		}
	}
}

ThemeButton.onclick = function () {

	if (theme.getAttribute('href') == 'css/1-styles-light.css') {
		theme.href = 'css/2-styles-dark.css'
		themeIcon.src = 'src/theme-moon.png'

		if (BGM.muted) {
			BGMIcon.src = 'src/sound-off-white.png'
		}
		else {
			BGMIcon.src = 'src/sound-on-white.png'
		}
	}
	else {
		theme.href = 'css/1-styles-light.css'
		themeIcon.src = 'src/theme-sun.gif'

		if (BGM.muted) {
			BGMIcon.src = 'src/sound-off-dark.png'
		}
		else {
			BGMIcon.src = 'src/sound-on-dark.png'
		}
	}
}
