// Array de objetos con información sobre cada obra
const artworks = [
    {
        id:0, 
        url: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg", 
        categoria: "Fotografia", 
        title: "Sorpresa", 
        comentarios: [
            {
              comentario: "La composición de esta fotografía es excepcional; los elementos están dispuestos de manera equilibrada, lo que crea una armonía visual.",
              calificacion: 4
            },
            {
                comentario: "ABCDE",
              calificacion: 2
            }
        ]
    },
    {
        id:1, 
        url: "https://media.admagazine.com/photos/618a6acacc7069ed5077ca7c/16:9/w_2560%2Cc_limit/69052.jpg", 
        categoria: "Pintura", 
        title: "Arte",
        comentarios: [
            {
                comentario: "El uso de la luz natural en esta imagen resalta los detalles y crea sombras que añaden profundidad a la escena.",
                calificacion: 5
            }
        ]
    },
    { 
        id:2, 
        url: "https://www.elramovolador.com/wp-content/uploads/2020/06/preboda_en_begur.jpg", 
        categoria: "Fotografia", 
        title: "Destino",
        comentarios:[
            {
                comentario: "La elección del punto de vista es acertada, proporcionando una perspectiva única que capta la atención del espectador.",
                calificacion: 3
            }
        ]
    },
    { 
        id:3, 
        url: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/03/16/16474295796109.jpg", 
        categoria: "Pintura", 
        title: "Monalisa",
        comentarios:[
            {
                comentario: "Los colores vibrantes utilizados en esta fotografía crean una atmósfera llena de energía y vida.",
                calificacion: 4
            }
        ]
    },
    { 
        id:4, 
        url: "https://ilumina2photo.es/wp-content/uploads/2022/01/sesion-fotos-pareja-barcelona-reportaje-fotografico-enamorados-san-valentin-foto-bonita-novios-exterior-ilumina2photo.webp", 
        categoria: "Fotografia", 
        title: "El atardecer",
        comentarios:[
            {
                comentario: "La técnica de enfoque selectivo se emplea de manera efectiva para destacar un elemento específico, creando un punto focal impactante.",
                calificacion: 5
            }
        ]
    },
    { 
        id:5, 
        url: "https://i0.wp.com/hotbook.mx/wp-content/uploads/2019/01/fotosparis_portada.jpg?fit=1024%2C682&ssl=1", 
        categoria: "Fotografia", 
        title: "Paris",
        comentarios:[
            {
                comentario: "El contraste entre luces y sombras añade drama a la imagen, generando un impacto visual fuerte y atractivo.",
                calificacion: 4
            }
        ]
    },
    { 
        id:6, 
        url: "https://previews.123rf.com/images/luadesign/luadesign2210/luadesign221000494/192677724-colorida-pintura-al-%C3%B3leo-sobre-lienzo-de-textura-imagen-impresionista-de-pinturas-marinas-con-fondo.jpg", 
        categoria: "Pintura", 
        title: "Barcos",
        comentarios:[
            {
                comentario: "La elección de blanco y negro para esta fotografía aporta un toque nostálgico y atemporal, resaltando la emotividad de la escena.",
                calificacion: 3
            }
        ]
    },
    { 
        id:7, 
        url: "https://m.media-amazon.com/images/I/710WmCnsIKS._AC_UF894,1000_QL80_.jpg", 
        categoria: "Pintura", 
        title: "Cara",
        comentarios:[
            {
                comentario: "El uso creativo de la profundidad de campo ayuda a dirigir la atención del espectador hacia el sujeto principal de la fotografía.",
                calificacion: 5
            }
        ]
    },
    { 
        id:8, 
        url: "https://thumbs.dreamstime.com/b/superficie-del-agua-de-la-ola-oce%C3%A1nica-mar-que-practica-surf-124362369.jpg", 
        categoria: "Fotografia", 
        title: "Ola",
        comentarios:[
            {
                comentario: "La captura del instante preciso en esta imagen transmite una sensación de espontaneidad y autenticidad.",
                calificacion: 4
            }
        ]
    },
    { 
        id:9, 
        url: "https://hips.hearstapps.com/hmg-prod/images/fotos-1533279584.jpg", 
        categoria: "Fotografia", 
        title: "Carro",
        comentarios:[
            {
                comentario: "La simetría presente en la composición contribuye a una estética visualmente satisfactoria y ordenada.",
                calificacion: 3
            }
        ]
    },
    { 
        id:10, 
        url: "https://images-eu.ssl-images-amazon.com/images/I/81e+Ads0zPL._AC_UL210_SR210,210_.jpg", 
        categoria: "Pintura", 
        title: "Mas caras:)",
        comentarios:[
            {
                comentario: "El juego de texturas en esta fotografía, desde suaves hasta rugosas, añade interés táctil a la experiencia visual.",
                calificacion: 4
            }
        ]
    },
    { 
        id:11, 
        url: "https://biencomun.com/wp-content/uploads/2017/12/pintura.jpg", 
        categoria: "Pintura", 
        title: "Bosque",
        comentarios:[
            {
                comentario: "El uso de líneas guía conduce la mirada del espectador a través de la imagen, creando un recorrido visual atractivo.",
                calificacion: 5
            }
        ]
    },
    { 
        id:12, 
        url: "https://mymodernmet.com/wp/wp-content/uploads/2019/01/leonid-afremov-oil-painting.jpeg", 
        categoria: "Pintura", 
        title: "Puente",
        comentarios:[
            {
                comentario: "La representación de expresiones faciales y gestos en esta fotografía captura la verdadera esencia del momento.",
                calificacion: 4
            }
        ]
    },
    { 
        id:13, 
        url: "https://media.gettyimages.com/id/1333977253/es/foto/le%C3%B3n-macho-descansando-sobre-una-roca.jpg?s=612x612&w=gi&k=20&c=s0Z3fPYV8XMzkBumah741jmyLTbPEYnAPRw3t0HK7ug=", 
        categoria: "Fotografia", 
        title: "Leon",
        comentarios:[
            {
                comentario: "El balance de colores fríos y cálidos contribuye a establecer un ambiente particular y reflejar una cierta emoción.",
                calificacion: 3
            }
        ]
    },
    { 
        id:14, 
        url: "https://i0.wp.com/coolhuntermx.com/wp-content/uploads/2023/08/Mar_del_Regil_Coolhuntermx_2023_01.jpg?fit=1080%2C736&ssl=1", 
        categoria: "Pintura", 
        title: "Pato",
        comentarios:[
            {
                comentario: "La elección del encuadre amplio permite capturar no solo el sujeto principal sino también el contexto que lo rodea, contando así una historia más completa.",
                calificacion: 4
            }
        ]
    },
    { 
        id:15, url: "https://mymodernmet.com/wp/wp-content/uploads/2022/06/vijay-suddala-smartphone-moon-photography-1.jpg", 
        categoria: "Fotografia", 
        title: "Luna",
        comentarios:[
            {
                comentario: "El uso de la regla de los tercios agrega dinamismo a la composición, creando una imagen visualmente agradable y equilibrada.",
                calificacion: 5
            }
        ]
    },
    { 
        id:16, 
        url: "https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-760w/public/images/article/cover/2019/02/06/pareja-feliz.jpg?ramen_itok=iqwQftIcTf", 
        categoria: "Fotografia", 
        title: "Recuerdos",
        comentarios:[
            {
                comentario: "El juego de luces y sombras en esta fotografía crea una sensación de misterio y profundidad, invitando a explorar la imagen con detenimiento.",
                calificacion: 3
            }
        ]
    },
    { 
        id:17, 
        url: "https://www.artemiranda.es/blog/wp-content/uploads/2019/02/57bee01ec461888a0d8b4567-680x383.jpg", 
        categoria: "Pintura", 
        title: "Bellas Artes",
        comentarios:[
            {
                comentario: "La elección del momento exacto para capturar el movimiento en esta fotografía añade dinamismo y energía a la escena.",
                calificacion: 4
            }
        ]
    },
    { 
        id:18, 
        url: "https://www.arteescuela.com/wp-content/uploads/2022/03/PINTURA-PLANOS-768x432.jpg", 
        categoria: "Pintura", 
        title: "Pera",
        comentarios:[
            {
                comentario: "El uso de colores suaves y tonos pastel en esta imagen transmite una sensación de calma y serenidad, creando una experiencia visual relajante.",
                calificacion: 5
            }
        ]
    },
    { 
        id:19, 
        url: "https://tienda.funathome.cl/cdn/shop/products/Ene21GatoAbsracto_480x.jpg?v=1617896122", 
        categoria: "Pintura", 
        title: "Gato",
        comentarios:[
            {
                comentario: "La atención a los detalles en esta fotografía revela la destreza del fotógrafo al capturar la textura y los pequeños elementos que componen la escena.",
                calificacion: 3
            }
        ]
    },
    { 
        id:20, 
        url: "https://www.sierralagoresort.com/blog/wp-content/uploads/2022/06/El-Mejor-Lugar-Para-Tomar-Fotos-de-Paisajes-Naturales-1140x694.jpg", 
        categoria: "Fotografia", 
        title: "Verde",
        comentarios:[
            {
                comentario: "La perspectiva en picado utilizada en esta imagen crea un impacto visual único y resalta la imponencia del sujeto principal.",
                calificacion: 4
            }
        ]
    },
    { 
        id:21, 
        url: "https://img.panamericana.pe/noticia/2014/02/640-1392395841581.jpg.webp", 
        categoria: "Fotografia", 
        title: "Naturaleza",
        comentarios:[
            {
                comentario: "La repetición de patrones en esta fotografía agrega un elemento visual intrigante y estructurado a la composición.",
                calificacion: 5
            }
        ]
    },
    { 
        id:22, 
        url: "https://www.dzoom.org.es/wp-content/uploads/2023/02/fotografia-de-paisaje-mas-nitida-7.jpg", 
        categoria: "Fotografia", 
        title: "Agua",
        comentarios:[
            {
                comentario: "El uso de la técnica de desenfoque selectivo en el fondo resalta el sujeto principal, guiando la mirada del espectador de manera efectiva.",
                calificacion: 4
            }
        ]
    },
    { 
        id:23, 
        url: "https://thumbs.dreamstime.com/b/yoga-del-mar-de-la-puesta-sol-hormona-calma-viaje-meditaci%C3%B3n-playa-pasarela-128381503.jpg", 
        categoria: "Fotografia", 
        title: "Infinito",
        comentarios:[
            {
                comentario: "La captura de expresiones genuinas y naturales en esta imagen refleja la habilidad del fotógrafo para conectar con sus sujetos.",
                calificacion: 3
            }
        ]
    },
    { 
        id:24, 
        url: "https://www.blogdelfotografo.com/wp-content/uploads/2014/01/Nitidez-en-la-fotografia-11.jpg", 
        categoria: "Fotografia", 
        title: "Sueños",
        comentarios:[
            {
                comentario: "El contraste entre elementos naturales y artificiales en esta composición crea una interesante dualidad y narrativa visual.",
                calificacion: 4
            }
        ]
    },
    { 
        id:25, 
        url: "https://static-cse.canva.com/blob/598703/Fotografiadecomida.jpg", 
        categoria: "Fotografia", 
        title: "Sabor",
        comentarios:[
            {
                comentario: "La elección de un encuadre cerrado en esta fotografía permite explorar la intimidad del sujeto, capturando emociones de manera cercana.",
                calificacion: 5
            }
        ]
    },
    { 
        id:26, 
        url: "https://thumbs.dreamstime.com/z/la-pintura-al-%C3%B3leo-del-fluorito-imagen-abstracta-conceptual-ojo-primer-abstracto-de-una-en-tonos-coloridos-un-cuchillo-201454468.jpg", 
        categoria: "Pintura", 
        title: "Ver.....",
        comentarios:[
            {
                comentario: "El uso de la regla de los impares en la disposición de elementos añade un toque de asimetría que hace la imagen más atractiva y dinámica.",
                calificacion: 4
            }
        ]
    },
    { 
        id:27, 
        url: "https://www.ngenespanol.com/wp-content/uploads/2023/07/tu-proxima-aventura-tendra-las-mejores-fotos-con-el-smartphone-huawei-p60-pro.png", 
        categoria: "Fotografia", 
        title: "Atras",
        comentarios:[
            {
                comentario: "La composición minimalista en esta fotografía resalta la belleza de la simplicidad, concentrando la atención en los detalles esenciales.",
                calificacion: 3
            }
        ]
    },
    { 
        id:28, 
        url: "https://instituto-allende.edu.mx/wp-content/uploads/2021/03/0-9.jpeg", 
        categoria: "Pintura", 
        title: "Toro",
        comentarios:[
            {
                comentario: "La captura de la interacción entre sujetos en esta imagen crea una narrativa visual que invita a imaginar la historia detrás de la escena.",
                calificacion: 4
            }
        ]
    },
    { 
        id:29, 
        url: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2016/10/eyes_GOYA-Saturn_devouring-wikimedia.jpg?fit=1200%2C1654&quality=50&strip=all&ssl=1", 
        categoria: "Pintura", 
        title: "Terror",
        comentarios:[
            {
                comentario: "El juego de colores complementarios en esta fotografía aporta una vibrante armonía visual, haciendo que la imagen destaque de manera impactante.",
                calificacion: 5
            }
        ]
    }
];

// Función para cargar imágenes en el DOM
function displayImages(images) {
    const galleria = document.getElementById("galeria");
    galleria.innerHTML = "";
    tabla = "";
    images.forEach(url => {
        let colorMarco = "";
        if(url.categoria == "Fotografia"){
            colorMarco = "marcoFoto"
        }else if(url.categoria == "Pintura"){
            colorMarco = "marcoPintura"
        }
        tabla += `<div id="columna" class="${colorMarco}" onclick="mostrarDetalles(${url.id})"><img src = ${url.url}></div>`;
    });
    galleria.innerHTML = tabla;
}

// Función para aplicar filtros a las imágenes
function applyFilters(categoria) {
    let filteredImages;
    if (categoria === "todo") {
        filteredImages = artworks;
    } else {
        filteredImages = artworks
            .filter(artwork => artwork.categoria === categoria)
            .map(artwork => artwork);
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

    // Sumar los valores
    var suma = categoryStatistics.Fotografia + categoryStatistics.Pintura;

    statisticsDiv.innerHTML = "<h3 style='display: flex; justify-content: center'>Estadísticas de la Colección</h3>";
    for (const category in categoryStatistics) {
        statisticsDiv.innerHTML += `<div style="display: flex; justify-content: center; align-items: center;">
                                        <h4>${category}: ${categoryStatistics[category]}</h4>
                                        <div title="${suma}" style="border: 1px solid black; width: 400px; background-color: blue; height: 10px; margin-left: 20px;">
                                            <div title="${Math.round((categoryStatistics[category] / suma) * 100)}%" style="width: ${(categoryStatistics[category] / suma) * 100}%; background-color: red; height: 10px;">
                                            </div>
                                        </div>
                                    </div>`;
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
    displayImages(artworks);
    generateStatistics();
});

function mostrarDetalles(id){

    document.getElementById('imagen').innerHTML = `<span class="close" id="closeModalBtn">&times;</span>
                                                    <h3>Titulo: ${artworks[id].title}</h3>
                                                    <p>Categoría: ${artworks[id].categoria}</p> 
                                                    <div id="imagenModal">
                                                        <img src="${artworks[id].url}" alt="">
                                                    </div>

                                                    <div style="margin: 15px; display: flex; align-items: center; justify-content: space-around;">
                                                        <textarea type="text" rows="4" cols="30" name="" id="detalleComentario" placeholder="Comenta tu opinión"></textarea>
                                                        <div style="display: flex; align-items: center;">
                                                            <h3 style="margin-right: 20px;">Calificación:</h3>
                                                            <select name="" id="calificacionGaleria" style="font-size: 1.3rem; padding: 2px;">
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div style="display: flex; justify-content: center;">
                                                        <input id="btnOpinar" type="button" value="Opinar" onclick="guardarOpinion(${id});">
                                                        <input id="btnActualizar" type="button" value="Actualizar Opiniones" onclick="actualizarOpiniones(${id});">
                                                    </div>
                                                    <!--Nuevo Bloque-->
                                                    <div id="actualizacion">
                                                    ${mostrarOpiniones(id)}
                                                    </div>`;
    //mostrarOpiniones(id);
    mostrarModal();
}

function mostrarOpiniones(id){

    let estrellas = '';
    var newBlock = '';
    let comentarios = '';
    var x = 0;
    
    for(let s=0; s<artworks[id].comentarios.length; s++){

        comentarios = '';
        estrellas = '';

        for(let a=0; a<artworks[id].comentarios[x].calificacion; a++){
            estrellas += '<i class="fa-solid fa-star"></i>'
        }

        for(let b=0; b<(5-artworks[id].comentarios[x].calificacion); b++){
            estrellas += '<i class="fa-regular fa-star"></i>'
        }

        comentarios += artworks[id].comentarios[x].comentario;         

        newBlock += `<hr>
                    <div style="display: flex; justify-content: space-around; align-items: center; align-content: center;">
                        <div style="width: 300px;">
                            <h3>Opinion:</h3>
                            <p>${comentarios}</p>
                        </div>
                        <div>
                            ${estrellas}
                        </div>
                    </div>`
                    x++;
    }

    return newBlock;
}

function actualizarOpiniones(id){
    
    document.getElementById('actualizacion').innerHTML = '';

    let estrellas = '';
    var newBlock = '';
    let comentarios = '';
    var g = 0;
    
    for(let s=0; s<artworks[id].comentarios.length; s++){

        comentarios = '';
        estrellas = '';

        for(let a=0; a<artworks[id].comentarios[g].calificacion; a++){
            estrellas += '<i class="fa-solid fa-star"></i>'
        }

        for(let b=0; b<(5-artworks[id].comentarios[g].calificacion); b++){
            estrellas += '<i class="fa-regular fa-star"></i>'
        }

        comentarios += artworks[id].comentarios[g].comentario;         

        document.getElementById('actualizacion').innerHTML += `<hr>
                                                                <div style="display: flex; justify-content: space-around; align-items: center; align-content: center;">
                                                                    <div style="width: 300px;">
                                                                        <h3>Opinion:</h3>
                                                                        <p>${comentarios}</p>
                                                                    </div>
                                                                    <div>
                                                                        ${estrellas}
                                                                    </div>
                                                                </div>`
                                                                g++;
    }

}

function guardarOpinion(id){

    const newComent = document.getElementById('detalleComentario').value;
    const newCalificacion = parseInt(document.getElementById('calificacionGaleria').value);

    const nuevoComentario = {
        comentario: newComent,
        calificacion: newCalificacion
    } 

    artworks[id].comentarios.push(nuevoComentario);
    
    }

function mostrarModal(){
        // Obtén el botón de abrir y el modal
        const modal = document.getElementById('myModal');
        const closeModalBtn = document.getElementById('closeModalBtn');
        
        modal.style.display = "block";

        // Agrega un evento al botón de cerrar para ocultar el modal
        closeModalBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    
        // Cierra el modal si el usuario hace clic fuera del contenido del modal
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    
}