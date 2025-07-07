
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("mensagemBtn");
    const mensagem = document.getElementById("mensagem");

    botao.addEventListener("click", () => {
        mensagem.textContent = "Bem-vindo ao meu site! Continue estudando e se dedicando. 💪";
    });
});
