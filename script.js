const getAdvice = async () => {
	await axios
		.get("https://api.adviceslip.com/advice")
		.then(response => {
			createContent(response.data.slip.id, response.data.slip.advice);
		})
		.catch(err => {
			console.log(err);
			createContent("error", "Something went wrong, try again later!");
		});
};

getAdvice();

const content = document.querySelector("#content");
const diceBtn = document.querySelector("#diceBtn");

const adviceId = document.createElement("h1");
const adviceText = document.createElement("p");

const createContent = (id, text) => {
	adviceId.textContent = `advice #${id}`;
	adviceText.textContent = `"${text}"`;

	content.appendChild(adviceId);
	content.appendChild(adviceText);
};

diceBtn.addEventListener("click", () => {
	getAdvice();
});
