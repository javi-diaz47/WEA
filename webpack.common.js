const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: "./src/main.js",

    plugins: [

        new HTMLWebpackPlugin({
            filename: "index.html",
            template: "./src/templates/home.html",
        }),

        new HTMLWebpackPlugin({
            filename: "register.html",
            template: "./src/templates/register.html",
        }),

        new HTMLWebpackPlugin({
            filename: "login.html",
            template: "./src/templates/login.html",
        }),

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

            //Load assets
            {
                type: 'asset',
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            }

        ]

    }


}

