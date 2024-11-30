function mostrarGlobos() {
    // Generar múltiples globos
    for (let i = 0; i < 5; i++) {
        // Crear un elemento para el globo
        const globo = document.createElement("div");
        globo.className = "globo";
        globo.innerText = "🎈"; // Emoji de globo

        // Posicionar el globo en una posición aleatoria
        globo.style.left = `${Math.random() * 90}vw`;
        globo.style.bottom = "0";

        // Agregar el globo al cuerpo de la página
        document.body.appendChild(globo);

        // Eliminar el globo después de 3 segundos
        setTimeout(() => {
            globo.remove();
        }, 3000);
    }
}
