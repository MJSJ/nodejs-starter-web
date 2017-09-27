CA.get('/', async function (ctx) {
    ctx.body = '321';
});

CA.get('/help', async function (ctx) {
    ctx.body = 'help';
});