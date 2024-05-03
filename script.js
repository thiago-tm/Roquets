function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    // Pegar a tag img
    const img = document.querySelector('#profile img');

    // Alterar a imagem de acordo com o modo de tema
    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/Avatar2.png');
    } else {
        img.setAttribute('src', './assets/Avatar.png');
    }
}