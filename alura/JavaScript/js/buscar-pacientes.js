var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function () {
    console.log("Buscando pacientes");
    const URI = "https://api-pacientes.herokuapp.com/pacientes"
    var xhr = new XMLHttpRequest()
    xhr.open("GET", URI);
    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta)
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente)

            });
        } else {
            erroAjax.classList.remove("invisivel");
        }


    })
    xhr.send()



});