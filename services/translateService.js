const axios = require("axios");

exports.translate = async (text, source, target) => {
    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`;

        console.log("Calling:", url);

        const response = await axios.get(url);

        console.log("API Response:");
        console.log(JSON.stringify(response.data, null, 2));

        return response.data.responseData.translatedText;

    } catch (error) {
        console.error(error.response?.data || error.message);
        throw new Error("Translation failed");
    }
};