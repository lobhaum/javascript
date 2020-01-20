const LivroDao = require('../infra/livro-dao')
const db = require('../../config/database')

module.exports = (app) => {
    app.get('/', function (req, res) {
        res.marko(
            require('../views/livros/lista/lista.marko')
        )
    })

    app.get('/livros', function (req, resp) {

        const livroDao = new LivroDao(db);

        livroDao.lista(function (erro, resultados) {

            resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: resultados
                }

            );

        });

    })}