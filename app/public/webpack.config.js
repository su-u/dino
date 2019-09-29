module.exports = {
    mode: process.env.NODE_ENV || "development",
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
                use: [
                    { loader: "babel-loader" },
                    { loader: "ts-loader" }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
};