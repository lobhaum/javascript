module.exports = (app)=>{
    app.get('/', function (req, res) {
        res.marko(
            require('../views/livros/lista/lista.marko')
        )
    })
    
    app.get('/livros', function (req, res) {
        res.marko(
            require('../views/livros/lista/lista.marko')
        )
    })
}
