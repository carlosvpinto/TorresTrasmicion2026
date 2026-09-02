document.addEventListener("DOMContentLoaded", () => {
    // Selección de elementos del DOM
    const photoGallery = document.querySelector(".photo-gallery");
    const maintenanceGallery = document.querySelector(".maintenance-gallery");
    const filterContainer = document.querySelector(".filters");
    const sectionTitle = document.querySelector(".section-title"); // Título dinámico para la sección
    const maintenanceTitle = document.querySelector(".maintenance-title"); // Título dinámico para la sección
    
    const videoGallery = document.querySelector(".video-gallery");
    const videoTitle = document.querySelector(".video-title"); // Título dinámico para videos

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
            { src: "imagenes/elorza/torre17.jpeg", description: "Limpieza Torre 17", week: 1 },
            { src: "imagenes/elorza/torre17-a.jpeg", description: "Torre 17 antes de la limpieza", week: 1 },
            { src: "imagenes/elorza/tramo17-18.jpeg", description: "Vano entre Torres 17 y 18", week: 1 },
            { src: "imagenes/elorza/torre18-a.jpeg", description: "Limpieza Torre 4 Antes", week: 1 },
            { src: "imagenes/elorza/torre18.jpeg", description: "Limpieza Torre 4", week: 1 },
           
            { src: "imagenes/elorza/tramo17-18.jpeg", description: "Vano entre Torres 17 y 18", week: 1 },
            { src: "imagenes/elorza/torre19-a.jpeg", description: "Torre 19 antes de la limpieza" , week: 1},
            { src: "imagenes/elorza/torre19.jpeg", description: "Limpieza Torre 19", week: 1 },
            { src: "imagenes/elorza/torre20.jpeg", description: "Limpieza Torre 20", week: 1 },
            { src: "imagenes/elorza/torre20-a.jpeg", description: "Torre 20 Antes", week: 1 },
            { src: "imagenes/elorza/torre21.jpeg", description: "Limpieza Torre 21", week: 1 },
            { src: "imagenes/elorza/torre21-a.jpeg", description: "Torre 21 Antes" , week: 1},
            { src: "imagenes/elorza/torre22.jpeg", description: "Limpieza Torre 22", week: 1 },
            { src: "imagenes/elorza/torre22-a.jpeg", description: "Torre 22 Antes", week: 1 },
            { src: "imagenes/elorza/torre23.jpeg", description: "Limpieza Torre 23", week: 1 },
            { src: "imagenes/elorza/torre28-a.jpeg", description: "Torre 28 Antes", week: 1 },
            { src: "imagenes/elorza/torre28.jpeg", description: "Limpieza Torre 28", week: 1 },
            { src: "imagenes/elorza/torre29.jpeg", description: "Limpieza Torre 29", week: 1 },
            { src: "imagenes/elorza/torre29-a.jpeg", description: "Torre 29 Antes", week: 1 },
            { src: "imagenes/elorza/torre30.jpeg", description: "Limpieza Torre 30", week: 1 },
            { src: "imagenes/elorza/torre30-a.jpeg", description: "Torre 30 Antes" , week: 1},
            { src: "imagenes/elorza/torre31.jpeg", description: "Limpieza Torre 31", week: 1 },
            { src: "imagenes/elorza/torre31-a.jpeg", description: "Torre 31 Antes" , week: 1},
            { src: "imagenes/elorza/torre32.jpeg", description: "Limpieza Torre 32", week: 1 },
            { src: "imagenes/elorza/torre32-a.jpeg", description: "Torre 32 Antes" , week: 1},
            { src: "imagenes/elorza/torre33.jpeg", description: "Limpieza Torre 33", week: 1 },
            { src: "imagenes/elorza/torre33-a.jpeg", description: "Torre 33 Antes", week: 1 },
            { src: "imagenes/elorza/torre34.jpeg", description: "Limpieza Torre 34" , week: 2},
            { src: "imagenes/elorza/torre34-a.jpeg", description: "Torre 34 Antes", week: 2 },
            { src: "imagenes/elorza/torre35.jpeg", description: "Limpieza Torre 35", week: 2 },
            { src: "imagenes/elorza/torre35-a.jpeg", description: "Torre 35 Antes", week: 2 },
            { src: "imagenes/elorza/torre36.jpeg", description: "Limpieza Torre 36", week: 2 },
            { src: "imagenes/elorza/torre36-a.jpeg", description: "Torre 36 Antes", week: 2 },
            { src: "imagenes/elorza/torre37.jpeg", description: "Limpieza Torre 37", week: 2 },
            { src: "imagenes/elorza/torre37-a.jpeg", description: "Torre 37 Antes", week: 2 },
            { src: "imagenes/elorza/torre38.jpeg", description: "Limpieza Torre 38", week: 2 },
            { src: "imagenes/elorza/torre38-a.jpeg", description: "Torre 38 Antes", week: 2 },
            { src: "imagenes/elorza/torre39.jpeg", description: "Limpieza Torre 39", week: 2 },
            { src: "imagenes/elorza/torre39-a.jpeg", description: "Torre 39 Antes", week: 2 },
            { src: "imagenes/elorza/torre40-a.jpeg", description: "Torre 40 Antes de limpieza" , week: 2},
            { src: "imagenes/elorza/torre40.jpeg", description: "Limpieza Torre 40" , week: 2},
            { src: "imagenes/elorza/torre41-a.jpeg", description: "Torre 41 Antes de Limpieza" , week: 2},
            { src: "imagenes/elorza/torre41.jpeg", description: "Limpieza Torre 41" , week: 2},
            { src: "imagenes/elorza/torre42-a.jpeg", description: "Torre 42 Antes de Limpieza" , week: 2},
            { src: "imagenes/elorza/torre42.jpeg", description: "Limpieza Torre 42" , week: 2},
            { src: "imagenes/elorza/torre37-a.jpeg", description: "Torre 37 Antes de Limpieza" , week: 2},
            { src: "imagenes/elorza/torre37.jpeg", description: "Limpieza Torre 37" , week: 2},
            { src: "imagenes/elorza/torre38-a.jpeg", description: "Torre 38 Antes de Limpieza" , week: 2},
            { src: "imagenes/elorza/torre38.jpeg", description: "Limpieza Torre 38" , week: 2},
            { src: "imagenes/elorza/torre39-a.jpeg", description: "Torre 39 Antes de Limpieza" , week: 2},
            { src: "imagenes/elorza/torre39.jpeg", description: "Limpieza Torre 39" , week: 2},
            { src: "imagenes/elorza/torre40-a.jpeg", description: "Torre 40 Antes de Limpieza" , week: 2},
            { src: "imagenes/elorza/torre40.jpeg", description: "Limpieza Torre 40" , week: 2},
            { src: "imagenes/elorza/torre41-a.jpeg", description: "Torre 41 Antes de Limpieza" , week: 2},
            { src: "imagenes/elorza/torre41.jpeg", description: "Limpieza Torre 41" , week: 2},
            { src: "imagenes/elorza/torre42-a.jpeg", description: "Torre 42 Antes de Limpieza" , week: 2},
            { src: "imagenes/elorza/torre42.jpeg", description: "Limpieza Torre 42" , week: 2},
            { src: "imagenes/elorza/torre43-a.jpeg", description: "Torre 43 Antes de la Limpieza" , week: 2},
            { src: "imagenes/elorza/torre43.jpeg", description: "Torre 43 Antes de la Limpieza" , week: 2},
           
            { src: "imagenes/elorza/torre45.jpeg", description: "Limpieza Torre 45" , week: 2},
        
        


              { src: "imagenes/elorza/torre52.jpeg", description: "Torre 52" , week: 2},
            { src: "imagenes/elorza/torre52-a.jpeg", description: "Torre 52 Antes" , week: 2},
            { src: "imagenes/elorza/torre59.jpeg", description: "Torre 59" , week: 2},
          
            { src: "imagenes/elorza/torre53-a.jpeg", description: "Torre 53 Antes" , week: 2},
            { src: "imagenes/elorza/torre53.jpeg", description: "Torre 53" , week: 2},
            { src: "imagenes/elorza/torre54-a.jpeg", description: "Torre 54 Antes" , week: 2},
            { src: "imagenes/elorza/torre54.jpeg", description: "Torre 54" , week: 2},
        
            { src: "imagenes/elorza/torre55.jpeg", description: "Torre 55" , week: 2},
          
            { src: "imagenes/elorza/torre56.jpeg", description: "Torre 56" , week: 2},
            { src: "imagenes/elorza/torre57.jpeg", description: "Torre 57" , week: 2},

            { src: "imagenes/elorza/torre57-a.jpeg", description: "Torre 57 Antes" , week: 2},
          
            { src: "imagenes/elorza/torre58.jpeg", description: "Torre 58" , week: 2},
            { src: "imagenes/elorza/torre59-a.jpeg", description: "Torre 59 Antes" , week: 2},
            { src: "imagenes/elorza/torre59.jpeg", description: "Torre 59" , week: 2},
          
            { src: "imagenes/elorza/torre63.jpeg", description: "Torre 63" , week: 3 },
            { src: "imagenes/elorza/torre63-a.jpeg", description: "Torre 63 Antes" , week: 3},

             { src: "imagenes/elorza/torre67.jpeg", description: "Torre 68" , week: 3},
            { src: "imagenes/elorza/torre67-a.jpeg", description: "Torre 68 Antes" , week: 3},
            { src: "imagenes/elorza/torre68.jpeg", description: "Torre 69" , week: 3},
            { src: "imagenes/elorza/torre68-a.jpeg", description: "Torre 69" , week: 3},
            
            { src: "imagenes/elorza/torre68-a.jpeg", description: "Torre 69" , week: 3},
            { src: "imagenes/elorza/torre68.jpeg", description: "Torre 68" , week: 3},
            { src: "imagenes/elorza/torre68-a.jpeg", description: "Torre 68 Antes" , week: 3},
            { src: "imagenes/elorza/torre69.jpeg", description: "Torre 69" , week: 3},
            { src: "imagenes/elorza/torre69-a.jpeg", description: "Torre 69 Antes" , week: 3},
            { src: "imagenes/elorza/torre70.jpeg", description: "Torre 70" , week: 3},
            { src: "imagenes/elorza/torre70-a.jpeg", description: "Torre 70 Antes" , week: 3},
            
          
          
           


           
             
        ];
    


    // Fotos de mantenimiento organizadas por semana
    

    const maintenancePhotos = [
        { src: "imagenes/elorza/tramo17-18.jpeg", description: "Vano 17-18", week: 1 },
        { src: "imagenes/elorza/tramo35-36.jpeg", description: "Vano 35-36" , week: 2},
        { src: "imagenes/elorza/tramo37-38.jpeg", description: "Vano 37-38", week: 2 },

        { src: "imagenes/elorza/tramo39-40.jpeg", description: "Vano 39-40", week: 2 },
        { src: "imagenes/elorza/tramo41-42.jpeg", description: "Vano 41-42", week: 2 },
        { src: "imagenes/elorza/tramo54-55.jpeg", description: "Vano 54-55", week: 2 },
        { src: "imagenes/elorza/tramo55-56.jpeg", description: "Vano 55-56", week: 2 },
        { src: "imagenes/elorza/tramo56-57.jpeg", description: "Vano 56-57", week: 2 },
        { src: "imagenes/elorza/tramo58-59.jpeg", description: "Vano 58-59", week: 2 },
        { src: "imagenes/elorza/tramo52-53.jpeg", description: "Vano 52-53", week: 3 },
        { src: "imagenes/elorza/tramo67-68.jpeg", description: "Vano 67-68", week: 3 },
        { src: "imagenes/elorza/tramo68-69.jpeg", description: "Vano 68-69", week: 3 },
        { src: "imagenes/elorza/tramo69-70.jpeg", description: "Vano 69-70", week: 3 },
     
    
    
        // Añade más fotos de tramos en mantenimiento según sea necesario
    ];


    

    // Generar los botones de filtro dinámicamente
    const weeks = [...new Set([...photos.map(photo => photo.week), ...maintenancePhotos.map(photo => photo.week)])];

const createFilterButtons = () => {
    // Botón para "Todas las Semanas"
    const allButton = document.createElement("button");
    allButton.textContent = "Todas las Semanas";
    allButton.setAttribute("data-week", "all");
    filterContainer.appendChild(allButton);

    // Ordenar las semanas numéricamente antes de crear los botones
    const sortedWeeks = weeks.sort((a, b) => a - b);

    // Botones para cada semana
    sortedWeeks.forEach(week => {
        const button = document.createElement("button");
        button.textContent = `Semana ${week}`;
        button.setAttribute("data-week", week);

        // ===== INICIO DEL CAMBIO CLAVE =====
        // Si la semana es 10 o mayor, añade la clase 'reinicio'
        if (week >= 10) {
            button.classList.add("reinicio");
        }
        // ===== FIN DEL CAMBIO CLAVE =====

        filterContainer.appendChild(button);
    });
};

    // Renderizar videos filtrados por semana
    const renderVideos = (week) => {
        videoGallery.innerHTML = ""; // Limpiar galería de videos

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

    // Renderizar fotos de mantenimiento
// Renderizar fotos de mantenimiento
const renderMaintenancePhotos = (week) => {
    maintenanceGallery.innerHTML = ""; // Limpiar galería de mantenimiento
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

            // Agregar evento de clic para pantalla completa
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

    // Inicializar la funcionalidad
    createFilterButtons();
    updateTitles("all"); // Mostrar título inicial
    renderPhotos("all"); // Renderizar todas las fotos generales
    renderMaintenancePhotos("all"); // Renderizar todas las fotos de mantenimiento
    addFilterEventListeners(); // Agregar eventos a los botones
    renderVideos("all");
});
