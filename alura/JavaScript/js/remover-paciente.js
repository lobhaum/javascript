var pacientes = document.querySelectorAll(".paciente")

pacientes.forEach((paciente) => {
    paciente.addEventListener("dblclick", () => {
        console.log("clicado")
    })
})