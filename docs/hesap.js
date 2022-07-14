document.addEventListener("DOMContentLoaded", function (e) {
	const textArea = document.getElementsByTagName('textarea')[0]
	const results = document.getElementsByClassName('results')[0]

	const calculate = (textArea, results) => {
		let answers = []
		let allLines = []
		let lineIndex = 0
		const lines = textArea.value.trim().split('\n')

		lines.forEach((line, index) => {
			if (!line || line.length <= 0) {
				allLines[index] = eval(line) || ''
				return;
			}
			if (line === 'total') {
				line = answers.reduce((a, b) => parseFloat(a) + parseFloat(b))
			}
			try {
				answers[lineIndex] = allLines[index] = eval(line).toFixed(2)
			} catch (_) {
				answers[lineIndex] = allLines[index] = ''
			}

			lineIndex++
		})

		results.innerHTML = ''

		allLines.forEach(line => {
			let newDiv = document.createElement("div");
			newDiv.innerText = line
			results.appendChild(newDiv)
		})
	}
	calculate(textArea, results)
	textArea.addEventListener('keyup', (e) => {
		calculate(e.target, results)
	})
});