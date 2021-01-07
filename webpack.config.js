const currentTask = process.env.npm_lifecycle_event;
const path = require("path");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const postCSSPlugins = [
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("postcss-hexrgba"),
    require("autoprefixer"),
];


let cssConfig = {
    test: /\.css$/i,
    use: [
        "css-loader?url=false",
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: postCSSPlugins,
                },
            },
        },
    ],
};

let config = {
    entry: "./src/app.js",
    module: {
        rules: [cssConfig],
    },
};


// DEV -----------------------------------------------------------
if (currentTask == "dev") {

    cssConfig.use.unshift("style-loader");

    config.output = {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app")
    }

    config.devServer = {
        before: function (app, server) {
            const path = require('path')

            const postCSSPlugins = [
                require('postcss-import'),
                require('postcss-mixins'),
                require('postcss-simple-vars'),
                require('postcss-nested'),
                require('autoprefixer')
            ]

            module.exports = {
                entry: './app/assets/scripts/App.js',
                output: {
                    filename: 'bundled.js',
                    path: path.resolve(__dirname, 'app')
                },
                devServer: {
                    before: function (app, server) {
                        server._watch('./app/**/*.html')
                    },
                    contentBase: path.join(__dirname, 'app'),
                    hot: true,
                    port: 3000,
                    host: '0.0.0.0'
                },
                mode: 'development',
                module: {
                    rules: [{
                        test: /\.css$/i,
                        use: ['style-loader', 'css-loader?url=false', {
                            loader: 'postcss-loader',
                            options: {
                                plugins: postCSSPlugins
                            }
                        }]
                    }]
                }
            }
            server._watch("./app/**/*.html");
        },
        contentBase: path.join(__dirname, "app"),
        hot: true,
        port: 3000,
        host: "0.0.0.0",
        disableHostCheck: true
    }

    config.mode = "development";

}

// BUILD -----------------------------------------------------------
if (currentTask == "build") {
    cssConfig.use.unshift(MiniCssExtractPlugin.loader);
    postCSSPlugins.push(require("cssnano"));

    config.output = {
        filename: "[name].[chunkhash].js",
        chunkFilename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist")
    }

    config.mode = "production";

    config.plugins = [new CleanWebpackPlugin(), new MiniCssExtractPlugin({
        filename: "styles.[chunkhash].css"
    })];

}

module.exports = config;