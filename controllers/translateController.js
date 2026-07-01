const translateService = require("../services/translateService");

exports.translateText = async (req, res) => {
    try {
        const { text, source, target } = req.body;

        const translatedText = await translateService.translate(
            text,
            source,
            target
        );

        res.json({
            success: true,
            translatedText
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};