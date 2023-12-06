// Array de imágenes de ejemplo (URLs)
const imageUrls = [
    "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
    "https://media.admagazine.com/photos/618a6acacc7069ed5077ca7c/16:9/w_2560%2Cc_limit/69052.jpg",
    // ... más URLs
];

// Array de objetos con información sobre cada obra
const artworks = [
    { url: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg", categoria: "fotografia", title: "Obra 1" },
    { url: "https://media.admagazine.com/photos/618a6acacc7069ed5077ca7c/16:9/w_2560%2Cc_limit/69052.jpg", categoria: "pintura", title: "Obra 2" },
    // ... más información
];

// Función para cargar imágenes en el DOM
function displayImages(images) {
    const galleria = document.getElementById("galeria");
    galleria.innerHTML = "";
    tabla = "";
    images.forEach(url => {
        tabla += `<div id="columna"><img src = ${url}></div>`;
    });
    galleria.innerHTML = tabla;
}

// Función para aplicar filtros a las imágenes
function applyFilters(categoria) {
    let filteredImages;
    if (categoria === "todo") {
        filteredImages = imageUrls;
    } else {
        filteredImages = artworks
            .filter(artwork => artwork.categoria === categoria)
            .map(artwork => artwork.url);
    }
    displayImages(filteredImages);
}

// Función para generar estadísticas sobre la colección
function generateStatistics() {
    const statisticsDiv = document.getElementById("estadisticas");
    
    const categoryStatistics = artworks.reduce((stats, artwork) => {
        stats[artwork.categoria] = (stats[artwork.categoria] || 0) + 1;
        return stats;
    }, {});

    statisticsDiv.innerHTML = "<h3>Estadísticas de la Colección</h3>";
    for (const category in categoryStatistics) {
        statisticsDiv.innerHTML += `<p>${category}: ${categoryStatistics[category]}</p>`;
    }
}

// Event listener para cambios en el filtro de categoría
const categoryFilter = document.getElementById("filtrosCategorias");
categoryFilter.addEventListener("change", () => {
    const selectedCategory = categoryFilter.value;
    applyFilters(selectedCategory);
    generateStatistics();
});

// Al cargar la página, mostrar todas las imágenes y generar estadísticas
document.addEventListener("DOMContentLoaded", () => {
    displayImages(imageUrls);
    generateStatistics();
});
