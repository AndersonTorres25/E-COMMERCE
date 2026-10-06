

// BANCO DE USUÁRIOS

let usuarios = [
    {
        nome: "Administrador",
        email: "admin@shop.com",
        senha: "123456"
    },
    {
        nome: "Anderson",
        email: "anderson@email.com",
        senha: "123"
    },
    {
        nome: "ADM",
        email: "a@mail",
        senha: "123"
    }
];

const usuariosSalvos = localStorage.getItem("usuarios");

if (usuariosSalvos) {
    usuarios = JSON.parse(usuariosSalvos);
}

// LOGIN
const formulario = document.querySelector("#form-login");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.querySelector("#email").value.toUpperCase();
        const senha = document.querySelector("#senha").value;

        const usuario = usuarios.find(function (u) {
            return u.email.toLocaleUpperCase() === email && u.senha === senha;
        });

        if (usuario) {

            localStorage.setItem(
                "usuarioLogado",
                JSON.stringify(usuario)
            );

            //alert("Login realizado com sucesso!");

            //window.location.href = "../index.html";

            const modal = new bootstrap.Modal(
                document.getElementById("modalSucesso")
            );

            modal.show();

            setTimeout(function () {
                window.location.href = "../index.html";
            }, 3000);

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
    document.querySelector("#menuPedidos").style.display = "block";
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


const formularioCadastro = document.querySelector("#form-cadastro");

formularioCadastro.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    const confirmarSenha = document.querySelector("#confirmarSenha").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais.");
        return;
    }

    const usuarioExiste = usuarios.find(function (u) {
        return u.email.toUpperCase() === email.toUpperCase();
    });

    if (usuarioExiste) {
        alert("Este e-mail já está cadastrado.");
        return;
    }
    usuarios.push({
        nome: nome,
        email: email,
        senha: senha
    });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

});





