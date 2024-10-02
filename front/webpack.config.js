module.exports = {
    entry: "./scripts/index.js",
    mode: "development",

    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
};