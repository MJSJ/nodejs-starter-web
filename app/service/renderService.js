const sources = require('../dist/manifest.json');
// const sources = [];

module.exports = function (ctx) {
    let scripts = '';
    for(s in sources){
        scripts += `<script src=${sources[s]}></script>`
    }

    ctx.response.type = 'text/html';
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <div id="app"></div>
        ${scripts}
    </body>
    </html>
    `
}
