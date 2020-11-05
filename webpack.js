const path = require('path');

module.exports = {

    loaders: [{
        test: /\.scss/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader",
            options: {
                sourceMap: true
            }
        }, {
            loader: "sass-loader",
            options: {
                sourceMap: true,
                data: '@import "variables";',
                includePaths: [
                    path.join(__dirname, 'src')
                ]
            }
        }],
        include: path.join(__dirname, 'src')
    }]
}