"use strict";
const path = require('path');
const runtime = process.env.RUNTIME || 'local';

module.exports = {
    entry: {
        'index': ['../src/app.js']
    },
    output: {
        filename: runtime === 'local' ? '[name].js' : '[name].[chunkhash:7].js',
        path: path.join(__dirname, '../app/dist'),
    }
}