const serverURL = process.env.NODE_ENV === "production" ? "https://protoshark.github.io/" : "";

module.exports = {
    assetPrefix: serverURL,
    future: {
        webpack5: true,
    }
};
