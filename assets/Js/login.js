const email = "123";
const senha = "123";

function validarLogin() {

    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    if (emailInformado === email) {
        alert("Email correto!");
        if (senhaInformada === senha) {
            alert("Senha correta! Login bem-sucedido.");
            window.location = "home.html";
        } else {
            alert("Senha incorreta! Tente novamente.");
        }
    } else {
        alert("Email incorreto! Tente novamente.");
    }
}