document.addEventListener("DOMContentLoaded", () => {
    // Selección de elementos del DOM
    const photoGallery = document.querySelector(".photo-gallery");
    const maintenanceGallery = document.querySelector(".maintenance-gallery");
    const videoGallery = document.querySelector(".video-gallery");
    const filterContainer = document.querySelector(".filters");
    const sectionTitle = document.querySelector(".section-title");
    const videoTitle = document.querySelector(".video-title");

    const fullscreenContainer = document.createElement("div");
    fullscreenContainer.id = "fullscreen-container";
    fullscreenContainer.classList.add("hidden");
    document.body.appendChild(fullscreenContainer);

    const closeFullscreen = document.createElement("span");
    closeFullscreen.id = "close-fullscreen";
    closeFullscreen.textContent = "×";
    fullscreenContainer.appendChild(closeFullscreen);

    const fullscreenImg = document.createElement("img");
    fullscreenImg.id = "fullscreen-img";
    fullscreenContainer.appendChild(fullscreenImg);
 // Fotos generales organizadas por semana
   
 const photos = [
    { src: "imagenes/sombrero/torre264.jpeg", description: "Torre 264", week: 1 },
    { src: "imagenes/sombrero/trabajotorre264-265-antes.jpeg", description: "Antes de Limpieza Torre 264-265", week: 1 },
    { src: "imagenes/sombrero/trabajotorre264-265.jpeg", description: "Antes de Limpieza Torre 264", week: 1 },
    { src: "imagenes/sombrero/trabajotorre264-265-0.jpeg", description: "Inicio de Limpieza Torre 264-265", week: 1 },
    { src: "imagenes/sombrero/trabajotorre264-265-2.jpeg", description: "Inicio Torre 264", week: 1 },
    { src: "imagenes/sombrero/tramo264-265.jpeg", description: "Culminado Limpieza Torre 264-265", week: 1 },
    { src: "imagenes/sombrero/d4tapa.jpeg", description: "D4 Trabajando", week: 1 },
    { src: "imagenes/sombrero/semana2-7.jpeg", description: "Antes de Limpieza tramo 265-266", week: 2 },
    { src: "imagenes/sombrero/semana2.jpeg", description: "Culminado Limpieza Torre 265-265", week: 2 },

    
    { src: "imagenes/sombrero/torre264-265.jpeg", description: "Culminado Limpieza Torre 265-266", week: 2 },

    
    { src: "imagenes/sombrero/semana2-6.jpeg", description: "Antes limpieza 265-267", week: 2 },
    { src: "imagenes/sombrero/semana2-3.jpeg", description: "Culminado 265-267", week: 2 },

    { src: "imagenes/sombrero/semana2-8.jpeg", description: "Antes limpieza 267-268", week: 2 },
    { src: "imagenes/sombrero/semana2-1.jpeg", description: "Culminado 267-268", week: 2 },
    { src: "imagenes/sombrero/semana2-5.jpeg", description: "Antes limpieza 268-269", week: 2 },
    { src: "imagenes/sombrero/torresmaquinas.jpeg", description: "Maquinaria en zona de trabajo 268-269", week: 2 },
    { src: "imagenes/sombrero/semana3drom.jpeg", description: "Sobre vuelo de dron de inspeccion", week: 3 },
    { src: "imagenes/sombrero/semana3drom2.jpeg", description: "Sobre vuelo de dron de inspeccion", week: 3 },
    { src: "imagenes/sombrero/semana3drom3.jpeg", description: "Sobre vuelo de dron de inspeccion", week: 3 },
    { src: "imagenes/sombrero/semana3drom4.jpeg", description: "Sobre vuelo de dron de inspeccion", week: 3 },
    { src: "imagenes/sombrero/semana3antes.jpeg", description: "Semana 3 Antes", week: 3 },
    { src: "imagenes/sombrero/semana3antes2.jpeg", description: "semana 3 Antes Torre 270-271", week: 3 },
    { src: "imagenes/sombrero/semana3antes3.jpeg", description: "Semana 3 Antes Torre 272", week: 3 },
    { src: "imagenes/sombrero/correcion2.jpeg", description: "Semana 4 Correcciones", week: 4 },
    { src: "imagenes/sombrero/correcion1.jpeg", description: "Semana 4 Correcciones", week: 4 },

];



// Fotos de mantenimiento organizadas por semana



// Añade aquí tus videos con descripciones
const videos = [
{ src: "videos/sombrero/torre265.mp4", description: "Cerca de Torre 265" , week: 1},
{ src: "videos/sombrero/tramo264-265.mp4", description: "Trabajo Tramo 264-265", week: 1 },
{ src: "videos/sombrero/torre265.mp4", description:"Trabajo Tramo 264-265", week: 1 },
{ src: "videos/sombrero/maquinas.mp4", description: "trabajando Maquinas 264-265", week: 1 },
{ src: "videos/sombrero/semana2antesydespues.mp4", description: "Antes y despues 265 -266", week: 2 },

{ src: "videos/sombrero/semana2-d4.mp4", description: "trabajando Maquina D4 265-266", week: 2 },
{ src: "videos/sombrero/semana2-d4-2.mp4", description: "Tramo 265-266 Antes del trabajo", week: 2 },
{ src: "videos/sombrero/semana2-d4-3-antes.mp4", description: "trabajando Maquinas 265-266", week: 2 },
{ src: "videos/sombrero/semana2-d4-4.mp4", description: "Durante Limpieza 265-266", week: 2 },
{ src: "videos/sombrero/semana2-d4-5-antes.mp4", description: "Antes de la Limpieza Tramo 267-268", week: 2 },

{ src: "videos/sombrero/semana2-d4-6.mp4", description: "Despues  267-268", week: 2 },
{ src: "videos/sombrero/semana2-d4-8-antes.mp4", description: "trabajando Maquinas 267-268", week: 2 },
{ src: "videos/sombrero/semana2-d4-9-antes.mp4", description: "Antes 268-269", week: 2 },

{ src: "videos/sombrero/semana2-d4-10.mp4", description: "trabajando Maquinas 268-269", week: 2 },
{ src: "videos/sombrero/semana3drom1.mp4", description: "Sobre Vuelo de Dron", week: 3 },
{ src: "videos/sombrero/semana3drom2.mp4", description: "Sobre Vuelo de Dron", week: 3 },
{ src: "videos/sombrero/semana3drom3.mp4", description: "Sobre Vuelo de Dron", week: 3 },
{ src: "videos/sombrero/semana3antes.mp4", description: "Torre 71 Antes de la Limpieza", week: 3 },
{ src: "videos/sombrero/semana3durante.mp4", description: "Durante la Limpieza", week: 3 },
{ src: "videos/sombrero/semana3durante2.mp4", description: "Durante la ejecucion Torre 71 ", week: 3 },
{ src: "videos/sombrero/semana3torre269-270.mp4", description: "Trabajo entre la Torre 269-270", week: 3 },
{ src: "videos/sombrero/semana3torre270-271.mp4", description: "Tabajo entre la Torre 270-271 ", week: 3 },
{ src: "videos/sombrero/semana3torre272-273.mp4", description: "Trabajo entre la Torre 272-273", week: 3 },
{ src: "videos/sombrero/semana3torre273-274.mp4", description: "Trabajo entre la 273-274 ", week: 3 },

{ src: "videos/sombrero/correciones1.mp4", description: "Corrección Torre 270-271 ", week: 4 },
{ src: "videos/sombrero/correciones2.mp4", description: "Corrección ", week: 4 },
{ src: "videos/sombrero/correciones3.mp4", description: "Corrección Torre 271-272 ", week: 4 },





// Añade más videos según sea necesario
];

    // Generar los botones de filtro dinámicamente
    const weeks = [...new Set(photos.map(photo => photo.week))];

    const createFilterButtons = () => {
        const allButton = document.createElement("button");
        allButton.textContent = "Todas las Semanas";
        allButton.setAttribute("data-week", "all");
        filterContainer.appendChild(allButton);

        weeks.forEach(week => {
            const button = document.createElement("button");
            button.textContent = `Semana ${week}`;
            button.setAttribute("data-week", week);
            filterContainer.appendChild(button);
        });
    };

    // Renderizar fotos filtradas por semana
    const renderPhotos = (week) => {
        photoGallery.innerHTML = ""; // Limpiar galería
        const filteredPhotos = week === "all" ? photos : photos.filter(photo => photo.week === parseInt(week));

        if (filteredPhotos.length === 0) {
            photoGallery.innerHTML = "<p>No hay fotos para esta semana.</p>";
        } else {
            filteredPhotos.forEach(photo => {
                const photoItem = document.createElement("div");
                photoItem.classList.add("photo-item");

                const img = document.createElement("img");
                img.src = photo.src;
                img.alt = photo.description;

                const desc = document.createElement("p");
                desc.textContent = photo.description;

                photoItem.appendChild(img);
                photoItem.appendChild(desc);
                photoGallery.appendChild(photoItem);

                // Agregar evento de clic para pantalla completa
                img.addEventListener("click", () => {
                    fullscreenImg.src = img.src;
                    fullscreenImg.alt = img.alt;
                    fullscreenContainer.classList.remove("hidden");
                });
            });
        }
    };

    // Renderizar videos filtrados por semana
const renderVideos = (week) => {
    videoGallery.innerHTML = ""; // Limpiar galería de videos

    const filteredVideos = week === "all" ? videos : videos.filter(video => video.week === parseInt(week));

    if (filteredVideos.length === 0) {
        videoGallery.innerHTML = "<p>No hay videos para esta semana.</p>";
    } else {
        const videoGrid = document.createElement("div");
        videoGrid.classList.add("video-grid"); // Clase para establecer el estilo con CSS

        filteredVideos.forEach(video => {
            const videoItem = document.createElement("div");
            videoItem.classList.add("video-item");

            const vid = document.createElement("video");
            vid.controls = true;
            vid.src = video.src;

            const desc = document.createElement("p");
            desc.textContent = video.description;

            videoItem.appendChild(vid);
            videoItem.appendChild(desc);
            videoGrid.appendChild(videoItem);
        });

        videoGallery.appendChild(videoGrid);
    }
};


    // Actualizar títulos dinámicos
    const updateTitles = (week) => {
        sectionTitle.textContent = week === "all" ? "Todas las Semanas" : `Semana ${week}`;
        videoTitle.textContent = week === "all" ? "Todas las Semanas - Videos" : `Semana ${week} - Videos`;
    };

    // Manejador del clic en los botones de filtro
    const handleFilterClick = (e) => {
        const week = e.target.getAttribute("data-week");
        updateTitles(week);
        renderPhotos(week);
        renderVideos(week);
    };

    // Inicializar
    const addFilterEventListeners = () => {
        const filterButtons = document.querySelectorAll(".filters button");
        filterButtons.forEach(button => {
            button.addEventListener("click", handleFilterClick);
        });
    };

    closeFullscreen.addEventListener("click", () => {
        fullscreenContainer.classList.add("hidden");
        fullscreenImg.src = "";
    });

    fullscreenContainer.addEventListener("click", (e) => {
        if (e.target === fullscreenContainer) {
            fullscreenContainer.classList.add("hidden");
            fullscreenImg.src = "";
        }
    });

    createFilterButtons();
    updateTitles("all");
    renderPhotos("all");
    renderVideos("all");
    addFilterEventListeners();
});
