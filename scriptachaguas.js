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