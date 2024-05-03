let form = document.querySelector('form');

form.addEventListener(
		'submit',
		(event) => {
			const data = new FormData(form);
			let output = '';
			for (const entry of data) {
				output = `${output}${entry[0]}=${entry[1]}\r`;
			}

			if (output.includes('1')) {
				window.location.assign('create/trainee.html')
			}
			if (output.includes('2')) {
				window.location.assign('create/junior.html')
			}
			if (output.includes('3')) {
				window.location.assign('create/middle.html')
			}
			if (output.includes('4')) {
				window.location.assign('create/senior.html')
			}

			event.preventDefault();
		},
		false,
);