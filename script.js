function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");

    modal.style.display = "block"; // Exibe o modal
    modalImage.src = imageSrc; // Define a imagem no modal
    captionText.innerHTML = imageSrc.split('/').pop(); // Mostra o nome do arquivo da imagem como legenda
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Oculta o modal
}
