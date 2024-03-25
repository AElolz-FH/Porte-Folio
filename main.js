
document.addEventListener("DOMContentLoaded", function() {
    var markdownContent = `
    # Titre 1
    Ceci est un **texte en gras**.
    - Item 1
    - Item 2
    `;

    // Convertir le Markdown en HTML
    var md = window.markdownit();
    var result = md.render(markdownContent);

    // Insérer le HTML généré dans le DOM
    document.getElementById('markdown-content').innerHTML = result;
});
