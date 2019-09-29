module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js",
        sourceMapFilename: 'bundle.js.map',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
};