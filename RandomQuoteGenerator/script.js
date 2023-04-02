const questionText = document.querySelector(".quote");
const generateBtn = document.querySelector(".quoteGenerator");
const translatedQuote = document.querySelector(".translatedQuote");

async function QuoteGenerator() {
  await fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => (questionText.textContent = data.content));

  let textToTranslate = `https://api.mymemory.translated.net/get?q=${questionText.textContent}&langpair=en|pl`;
  await fetch(textToTranslate)
    .then((res) => res.json())
    .then(
      (data) => (translatedQuote.textContent = data.responseData.translatedText)
    );
}

generateBtn.addEventListener("click", QuoteGenerator);
