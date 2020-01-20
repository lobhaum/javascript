module.exports = (app)=>{
    app.get('/', function (req, res) {
        let html = `<html>
        <head>
            <meta charset="utf-8"/>
        </head>
        <body>
            <h1>Bem-vindo à Livraria</h1>
        </body>
    </html>`
        res.send(html)
    })
    
    app.get('/livros', function (req, res) {
        let html = `<html>
        <head>
            <meta charset="utf-8"/>
        </head>
        <body>
            <h1>Listagem de livros</h1>
        </body>
    </html>`
        res.send(html)
    })
}
