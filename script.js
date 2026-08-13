// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.getElementById("btn-like");
    const likeCountDisplay = document.getElementById("like-count");

    // Recupera as curtidas salvas no navegador (se houver)
    let totalLikes = localStorage.getItem("blogLikes") ? parseInt(localStorage.getItem("blogLikes")) : 0;
    
    // Atualiza o texto na tela com o valor inicial
    likeCountDisplay.textContent = totalLikes;

    // Função que roda ao clicar no botão
    likeBtn.addEventListener("click", () => {
        totalLikes++; // Soma +1 curtida
        likeCountDisplay.textContent = totalLikes; // Atualiza a tela
        
        // Salva o novo valor no navegador do usuário
        localStorage.setItem("blogLikes", totalLikes);
    });
});