module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets:['react', 'es2015', 'stage-0']
                }
            }, {
                test: /\.sass$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};