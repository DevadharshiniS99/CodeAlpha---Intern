const translateBtn = document.getElementById("translateBtn");

translateBtn.addEventListener("click", async () => {

    const text = document.getElementById("inputText").value;

    const source = document.getElementById("sourceLang").value;
    const target = document.getElementById("targetLang").value;

    console.log("Source:", source);
    console.log("Target:", target);

    const response = await fetch("/translate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: text,
            source: source,
            target: target
        })
    });

    const data = await response.json();

    document.getElementById("outputText").value = data.translatedText;
});