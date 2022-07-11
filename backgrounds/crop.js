cp = require('child_process')


index = 0


while (index < 54) {

	console.log("scaling image " + index)
	let cmd1 = `convert output_${index}.jpg -resize 50% scaled_${index}.jpg`

	cp.execSync(cmd1)

	console.log("cropping image " + index)
	let cmd2 = `convert scaled_${index}.jpg -crop 450x750+500+00 cropped_${index}.jpg`

	cp.execSync(cmd2)

	index++
}
