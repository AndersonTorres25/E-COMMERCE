

document.addEventListener("DOMContentLoaded", function () {
    
    const formLogin = document.getElementById("form-login");

    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailInput = document.getElementById("campo-login").value;
        const senhaInput = document.getElementById("campo-senha").value;

        if (emailInput !== "" && senhaInput !== "") {
            alert(`Login realizado com sucesso!\nBem-vindo(a), ${emailInput}`);
            
            window.location.href = "../index.html";
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});