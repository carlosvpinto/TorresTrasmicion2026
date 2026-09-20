document.addEventListener("DOMContentLoaded", () => {
    // Selección de elementos del DOM
    const photoGallery = document.querySelector(".photo-gallery");
    const maintenanceGallery = document.querySelector(".maintenance-gallery");
    const filterContainer = document.querySelector(".filters");
    const sectionTitle = document.querySelector(".section-title"); 
    const maintenanceTitle = document.querySelector(".maintenance-title"); 
    
    const videoGallery = document.querySelector(".video-gallery");
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
    
    // =========================================================
    // FOTOS GENERALES: Tramo San Fernando II - Achaguas
    // =========================================================
const photos = [
    // SEMANA 1
    { src: "imagenes/achaguas/achaguas00-1.jpeg", description: "Trabajos Torres Semana 1 ", week: 1 },
    { src: "imagenes/achaguas/achaguas0-1.jpeg", description: "Trabajos Torres Semana 1 ", week: 1 },
    { src: "imagenes/achaguas/achaguas1-1.jpeg", description: "Trabajos Torres Semana 1 ", week: 1 },
    { src: "imagenes/achaguas/achaguas2-1.jpeg", description: "Trabajos Torres Semana 1 ", week: 1 },
    { src: "imagenes/achaguas/achaguas3-1.jpeg", description: "Trabajos Torres Semana 1 ", week: 1 },
    { src: "imagenes/achaguas/achaguas4-1.jpeg", description: "Trabajos Torres Semana 1 ", week: 1 },
    { src: "imagenes/achaguas/achaguas5-1.jpeg", description: "Trabajos Torres Semana 1 ", week: 1 },
    { src: "imagenes/achaguas/achaguas6-1.jpeg", description: "Trabajos Torres Semana 1 ", week: 1 },
    { src: "imagenes/achaguas/achaguas7-1.jpeg", description: "Trabajos Torres Semana 1 ", week: 1 },
    { src: "imagenes/achaguas/achaguas8-1.jpeg", description: "Trabajos Torres Semana 1 ", week: 1 },
    { src: "imagenes/achaguas/achaguas9-2.jpeg", description: "Trabajos Torres Semana 1 ", week: 1 },
    { src: "imagenes/achaguas/achaguas10-2.jpeg", description: "Trabajos Torres Semana 1 ", week: 1 },
    { src: "imagenes/achaguas/achaguas11-2.jpeg", description: "Trabajos Torres Semana 1 ", week: 1 },
    { src: "imagenes/achaguas/achaguas12-2.jpeg", description: "Trabajos Torres Semana 1 ", week: 1 },
    
    // SEMANA 2
    { src: "imagenes/achaguas/achaguas13-2.jpeg", description: "Trabajos Torres Semana 2 ", week: 2 },
    { src: "imagenes/achaguas/achaguas14-2.jpeg", description: "Trabajos Torres Semana 2 ", week: 2 },
    { src: "imagenes/achaguas/achaguas14-3.jpeg", description: "Trabajos Torres Semana 2 ", week: 2 },
    { src: "imagenes/achaguas/achaguas15-3.jpeg", description: "Trabajos Torres Semana 2 ", week: 2 },

    // SEMANA 3
    { src: "imagenes/achaguas/torre39.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    { src: "imagenes/achaguas/torre40.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    { src: "imagenes/achaguas/torre41.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    { src: "imagenes/achaguas/torre41-a.jpeg", description: "Trabajos Torres 41 Antes", week: 3 },
    { src: "imagenes/achaguas/torre42.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },

    { src: "imagenes/achaguas/tramo38-39.jpeg", description: "Vano 38-39", week: 3 },
    { src: "imagenes/achaguas/tramo39-40.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    { src: "imagenes/achaguas/tramo40-41.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    { src: "imagenes/achaguas/tramo41-42.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    { src: "imagenes/achaguas/tramo42-43.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },

    { src: "imagenes/achaguas/torre45.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    { src: "imagenes/achaguas/torre45-a.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    { src: "imagenes/achaguas/torre46.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    { src: "imagenes/achaguas/torre46-a.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    { src: "imagenes/achaguas/torre47.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    { src: "imagenes/achaguas/torre47-a.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    { src: "imagenes/achaguas/torre48.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    { src: "imagenes/achaguas/torre48-a.jpeg", description: "Trabajos Torres 48 Antes", week: 3 },
    { src: "imagenes/achaguas/torre49.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    { src: "imagenes/achaguas/torre49-a.jpeg", description: "Trabajos Torres Semana 3 ", week: 3 },
    
    { src: "imagenes/achaguas/tramo45-46.jpeg", description: "Vano 45-46", week: 3 },
    { src: "imagenes/achaguas/tramo47-48d.jpeg", description: "Vano 47-48 Despues", week: 3 },
    { src: "imagenes/achaguas/tramo47-48.jpeg", description: "Vano 47-48 antes", week: 3 },
    { src: "imagenes/achaguas/tramo48-49.jpeg", description: "Vano 48-49", week: 3 },

    // SEMANA 4
    { src: "imagenes/achaguas/torre51.jpeg", description: "Torres 51 ", week: 4 },
    { src: "imagenes/achaguas/torre51-a.jpeg", description: "Torres 51-a ", week: 4 },
    { src: "imagenes/achaguas/torre52.jpeg", description: "Torres 52 ", week: 4 },
    { src: "imagenes/achaguas/torre52-a.jpeg", description: "Torres 52 Antes ", week: 4 },
    { src: "imagenes/achaguas/torre53.jpeg", description: "Torre 53 ", week: 4 },
    { src: "imagenes/achaguas/torre53-a.jpeg", description: "Torre 53 Antes ", week: 4 },
    { src: "imagenes/achaguas/torre54.jpeg", description: "Torres 54 ", week: 4 },
    { src: "imagenes/achaguas/torre54-a.jpeg", description: "Torre 54 Antes ", week: 4 },
    { src: "imagenes/achaguas/torre55.jpeg", description: "Torre 55 ", week: 4 },
    { src: "imagenes/achaguas/torre55-a.jpeg", description: "Torre 55 Antes ", week: 4 },
      
    { src: "imagenes/achaguas/tramo44-45.jpeg", description: "Vano 44-45", week: 4 },
    { src: "imagenes/achaguas/tramo45-46.jpeg", description: "Vano 45-46", week: 4 },
    { src: "imagenes/achaguas/tramo47-48.jpeg", description: "Vano 47-48", week: 4 },
    { src: "imagenes/achaguas/tramo48-49.jpeg", description: "Vano 48-49", week: 4 },
    { src: "imagenes/achaguas/tramo49-50.jpeg", description: "Vano 49-50", week: 4 },
    { src: "imagenes/achaguas/tramo53-54.jpeg", description: "Vano 53-54", week: 4 },
    { src: "imagenes/achaguas/tramo54-55.jpeg", description: "Vano 54-55", week: 4 },
    { src: "imagenes/achaguas/tramo55-56.jpeg", description: "Vano 55-56", week: 4 },
    { src: "imagenes/achaguas/tramo56-57.jpeg", description: "Vano 56-57", week: 4 },

    // SEMANA 5 (Nuevas fotos)
    { src: "imagenes/achaguas/torre59.jpeg", description: "Torre 59", week: 5 },
    { src: "imagenes/achaguas/torre61.jpeg", description: "Torre 61", week: 5 },
    { src: "imagenes/achaguas/torre62.jpeg", description: "Torre 62", week: 5 },
    { src: "imagenes/achaguas/torre62-a.jpeg", description: "Torre 62 Antes", week: 5 },
    { src: "imagenes/achaguas/torre63-a.jpeg", description: "Torre 63 Antes", week: 5 },
    { src: "imagenes/achaguas/torre64.jpeg", description: "Torre 64", week: 5 },
    { src: "imagenes/achaguas/torre64-a.jpeg", description: "Torre 64 Antes", week: 5 },
    { src: "imagenes/achaguas/torre65.jpeg", description: "Torre 65", week: 5 },
    { src: "imagenes/achaguas/torre65-a.jpeg", description: "Torre 65 Antes", week: 5 },

    { src: "imagenes/achaguas/tramo57-58.jpeg", description: "Vano 57-58", week: 5 },
    { src: "imagenes/achaguas/tramo64-65.jpeg", description: "Vano 64-65", week: 5 }
  ];
 
     
    
  

    // =========================================================
    // FOTOS MANTENIMIENTO: Tramo San Fernando II - Achaguas
    // (Dejar vacío o agregar cuando tengas fotos de mantenimiento)
    // =========================================================
    const maintenancePhotos = [
        // { src: "imagenes/achaguas/tramo1-2.jpeg", description: "Mantenimiento Tramo 1-2 (Achaguas)", week: 1 },
    ];

    // =========================================================
    // VIDEOS: Tramo San Fernando II - Achaguas
    // (Dejar vacío o agregar cuando tengas videos)
    // =========================================================
     const videos = [
        { src: "videos/achaguas/achaguasvideo1-1.mp4", description: "Video Limpieza 1 (Achaguas)", week: 1 },
        { src: "videos/achaguas/achaguasvideo2-1.mp4", description: "Video Limpieza 2 (Achaguas)", week: 1 }
    ];

    // Generar los botones de filtro dinámicamente
    const weeks = [...new Set([...photos.map(photo => photo.week), ...maintenancePhotos.map(photo => photo.week)])];

    const createFilterButtons = () => {
        const allButton = document.createElement("button");
        allButton.textContent = "Todas las Semanas";
        allButton.setAttribute("data-week", "all");
        filterContainer.appendChild(allButton);

        const sortedWeeks = weeks.sort((a, b) => a - b);

        sortedWeeks.forEach(week => {
            const button = document.createElement("button");
            button.textContent = `Semana ${week}`;
            button.setAttribute("data-week", week);

            if (week >= 10) {
                button.classList.add("reinicio");
            }

            filterContainer.appendChild(button);
        });
    };

    // Renderizar videos filtrados por semana
    const renderVideos = (week) => {
        videoGallery.innerHTML = ""; 
        const filteredVideos = week === "all" ? videos : videos.filter(video => video.week === parseInt(week));

        if (filteredVideos.length === 0) {
            videoGallery.innerHTML = "<p>No hay videos para esta semana.</p>";
        } else {
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
                videoGallery.appendChild(videoItem);
            });
        }
    };

    // Renderizar fotos generales
    const renderPhotos = (week) => {
        photoGallery.innerHTML = ""; 
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

                img.addEventListener("click", () => {
                    fullscreenImg.src = img.src;
                    fullscreenImg.alt = img.alt;
                    fullscreenContainer.classList.remove("hidden");
                });
            });
        }
    };

    // Renderizar fotos de mantenimiento
    const renderMaintenancePhotos = (week) => {
        maintenanceGallery.innerHTML = ""; 
        const filteredMaintenancePhotos = week === "all" ? maintenancePhotos : maintenancePhotos.filter(photo => photo.week === parseInt(week));

        if (filteredMaintenancePhotos.length === 0) {
            maintenanceGallery.innerHTML = "<p>No hay fotos de mantenimiento para esta semana.</p>";
        } else {
            filteredMaintenancePhotos.forEach(photo => {
                const maintenanceItem = document.createElement("div");
                maintenanceItem.classList.add("maintenance-item");

                const img = document.createElement("img");
                img.src = photo.src;
                img.alt = photo.description;

                const desc = document.createElement("p");
                desc.textContent = photo.description;

                maintenanceItem.appendChild(img);
                maintenanceItem.appendChild(desc);
                maintenanceGallery.appendChild(maintenanceItem);

                img.addEventListener("click", () => {
                    fullscreenImg.src = img.src;
                    fullscreenImg.alt = img.alt;
                    fullscreenContainer.classList.remove("hidden");
                });
            });
        }
    };

    // Actualizar títulos dinámicos
    const updateTitles = (week) => {
        sectionTitle.textContent = week === "all" ? "Todas las Semanas - por Torres" : `Semana ${week} - Limpieza por Torres`;
        maintenanceTitle.textContent = week === "all" ? "Todas las Semanas - Mantenimiento" : `Semana ${week} - Mantenimiento`;
        videoTitle.textContent = week === "all" ? "Todas las Semanas - Videos" : `Semana ${week} - Videos`;
    };

    // Manejador del clic en los botones de filtro
    const handleFilterClick = (e) => {
        const week = e.target.getAttribute("data-week");
        updateTitles(week);
        renderPhotos(week);
        renderVideos(week);
        renderMaintenancePhotos(week);
    };

    // Inicializar eventos de botones
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

    // Inicializar la funcionalidad
    createFilterButtons();
    updateTitles("all"); 
    renderPhotos("all"); 
    renderMaintenancePhotos("all"); 
    addFilterEventListeners(); 
    renderVideos("all");
});