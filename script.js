function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a img principal 
    if (html.classList.contains('light')) {
        // se tiver light mode, add a img light
        img.setAttribute('src','.avatar.png')
    } else {
        // se tiver sem light mode, manter a img normal
        img.setAttribute('src', 'avatar-light.png')
    }
}
