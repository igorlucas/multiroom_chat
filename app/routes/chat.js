const { check, validationResult } = require('express-validator');

module.exports = (application) => {
    application.get('/chat', (req, res) => {
        application.app.controllers.chat.initChat(application, req, res);
    });

    application.post('/chat',
        [
            check('apelido', 'apelido não pode ser vazio').not().isEmpty(),
            check("apelido", "apelido tem que entre 3 a 15 caracteres").isLength({ min: 3, max: 15 }),
        ], (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty())
                res.render('index', { validacao: errors.array() });
            //application.app.controllers.index.home(application, req, res);
            else
                application.app.controllers.chat.initChat(application, req, res);
        });
}