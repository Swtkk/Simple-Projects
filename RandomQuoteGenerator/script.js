const questionText = document.querySelector(".quote");
const generateBtn = document.querySelector(".quoteGenerator");
const translatedQuote = document.querySelector(".translatedQuote");
const box = document.querySelector(".box");
async function QuoteGenerator() {
	try {
		
		let first = false,
			second = false;
		box.style.display = "flex";
		await fetch("https://api.quotable.io/random")
			.then((res) => res.json())
			.then((data) => (questionText.textContent = data.content))
			.then((first = true));
		const textToTranslate = `https://api.mymemory.translated.net/get?q=${questionText.textContent}&langpair=en|pl`;
		await fetch(textToTranslate)
			.then((res) => res.json())
			.then(
				(data) =>
					(translatedQuote.textContent = data.responseData.translatedText)
			)
			.then((second = true));
		if (first && second) {
			box.style.display = "none";
		}
	} catch {
		console.log("bład");
	}
}
async function f1() {
	await QuoteGenerator();
}

generateBtn.addEventListener("click", f1);
