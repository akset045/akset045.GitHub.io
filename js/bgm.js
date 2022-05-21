function playpause() {
	var snd = document.getElementById("sound");
	var snd_btn = document.getElementById("SoundButton");
	snd.muted = !snd.muted;

	if(snd.muted) {
		snd_btn.innerHTML = "<img src='src/switch-ani-on-off.gif' alt='Here's an audio control' id='SoundIcon'>";
	}
	else {
		snd_btn.innerHTML = "<img src='src/sound-on.gif' alt='Here's an audio control' id='SoundIcon'>";
	}
}
