var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function () {
    console.log("Buscando pacientes");
    const URI = "https://api-pacientes.herokuapp.com/pacientes"
    var xhr = new XMLHttpRequest()
    xhr.open("GET", URI);
    xhr.addEventListener("load", function () {
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta)
        pacientes.forEach(function (paciente) {
            adicionaPacienteNaTabela(paciente)

        });

    })
    xhr.send()



});