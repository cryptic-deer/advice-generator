const getAdvice = () => {
	axios
		.get("https://api.adviceslip.com/advice")
		.then(response => {
			console.log(`${response.data.slip.id}\n${response.data.slip.advice}`);
		})
		.catch(err => {
			console.error(err);
		});
};

getAdvice();
