const render = require('../service/renderService');

CA.get('/', async function (ctx) {
    ctx.body = render(ctx);
});
