const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: "./src/main.js",

    plugins: [

        new HTMLWebpackPlugin({
            filename: "index.html",
            template: "./src/template.html",
        })
    ],

    module: {

        rules: [
            //style files scss
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },

            // Html files
            {
                test: /\.html$/,
                use: ["html-loader"],
            },

        ]

    }


}
