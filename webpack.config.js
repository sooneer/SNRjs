module.exports = {
    'output': {
        'filename': '[name].min.js',
    },
    optimization: {
        chunkIds: false,
    },
    'entry': {
        'SNR': './src/SNR.js'
    },
    'module': {
        'rules': [{
            'use': {
                'loader': 'babel-loader',
                'options': {
                    'presets': [
                        'babel-preset-env'
                    ]
                }
            },
            'exclude': /node_modules/,
            'test': /\.js$/
        }]
    }
};
