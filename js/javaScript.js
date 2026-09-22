
//ANCO DE USUÁRIOS

const usuarios = [
    {
        nome: "Administrador",
        email: "admin@shop.com",
        senha: "123456"
    },
    {
        nome: "Anderson",
        email: "anderson@email.com",
        senha: "123"
    }
];

// LOGIN

const formulario = document.querySelector("#form-login");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.querySelector("#email").value;
        const senha = document.querySelector("#senha").value;

        const usuario = usuarios.find(function (u) {
            return u.email === email && u.senha === senha;
        });

        if (usuario) {

            localStorage.setItem(
                "usuarioLogado",
                JSON.stringify(usuario)
            );

            alert("Login realizado com sucesso!");

            window.location.href = "../index.html";

        } else {

            alert("E-mail ou senha inválidos.");

        }

    });

}

// VERIFICAR USUÁRIO LOGADO

function atualizarNavbar() {

    const dados = localStorage.getItem("usuarioLogado");

    if (!dados) return;

    const usuario = JSON.parse(dados);

    document.querySelector("#nomeUsuario").innerHTML =
        usuario.nome;

    document.querySelector("#menuLogin").style.display = "none";
    document.querySelector("#menuCadastro").style.display = "none";

    document.querySelector("#menuPerfil").style.display = "block";
    document.querySelector("#menuSair").style.display = "block";

}

atualizarNavbar();

const btnSair = document.querySelector("#btnSair");

if (btnSair) {

    btnSair.addEventListener("click", function () {

        localStorage.removeItem("usuarioLogado");

        window.location.href = "../index.html";

    });

}
const mostrar = document.querySelector("#mostrarSenha");

if (mostrar) {

    mostrar.addEventListener("change", function () {

        const senha = document.querySelector("#senha");

        if (this.checked) {
            senha.type = "text";
        } else {
            senha.type = "password";
        }

    });

}

