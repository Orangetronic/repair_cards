cp = require('child_process')


index = 0


while (index < 54) {

	let minute = Math.floor(Math.random() * 3);
	let second = Math.floor(Math.random() * 59);

	let cmd = `ffmpeg -ss 00:${minute}:${second} -i img_src.mov -frames:v 1 -qscale:v 2 output_${index}.jpg`

	cp.execSync(cmd)

	index++
}

