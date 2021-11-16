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

        new HTMLWebpackPlugin({
            filename: "projectsHome.html",
            template: "./src/templates/projectsHome.html",
        }),

        new HTMLWebpackPlugin({
            filename: "projectsPost.html",
            template: "./src/templates/projectsPost.html",
        }),

        new HTMLWebpackPlugin({
            filename: "individualPost.html",
            template: "./src/templates/individualPost.html",
        }),

        new HTMLWebpackPlugin({
            filename: "currentProjects.html",
            template: "./src/templates/currentProjects.html",
        }),

        new HTMLWebpackPlugin({
            filename: "advances.html",
            template: "./src/templates/advances.html",
        }),

        new HTMLWebpackPlugin({
            filename: "profile.html",
            template: "./src/templates/profile.html",
        }),

        new HTMLWebpackPlugin({
            filename: "message.html",
            template: "./src/templates/message.html",
        }),

        new HTMLWebpackPlugin({
            filename: "myProjects.html",
            template: "./src/templates/myProjects.html",
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

