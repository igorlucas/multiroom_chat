module.exports.initChat = function (application, req, res) {
     application.get('io').emit('msgParaCliente',{apelido: req.body.apelido, mensagem: 'acabou de entrar no chat'});
     
     res.render('chat.ejs', { data: req.body });
}