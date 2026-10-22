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
    
    { src: "imagenes/achaguas/achaguas0-1.jpeg", description: "Iniciación", week: 1 },
    { src: "imagenes/achaguas/achaguas1-1.jpeg", description: "Torre 1", week: 1 },
    { src: "imagenes/achaguas/achaguas2-1.jpeg", description: "Torre 2", week: 1 },
    { src: "imagenes/achaguas/achaguas3-1.jpeg", description: "Torre 3", week: 1 },
    { src: "imagenes/achaguas/achaguas4-1.jpeg", description: "Torre 4", week: 1 },
    { src: "imagenes/achaguas/achaguas5-1.jpeg", description: "Torre 5", week: 1 },
    { src: "imagenes/achaguas/achaguas6-1.jpeg", description: "Torre 6", week: 1 },
    { src: "imagenes/achaguas/achaguas7-1.jpeg", description: "Torre 7", week: 1 },
    { src: "imagenes/achaguas/achaguas8-1.jpeg", description: "Torre 8", week: 1 },
    { src: "imagenes/achaguas/achaguas9-2.jpeg", description: "Torre 9", week: 1 },
    { src: "imagenes/achaguas/achaguas10-2.jpeg", description: "Torre 10", week: 1 },
    { src: "imagenes/achaguas/achaguas11-2.jpeg", description: "Torre 11", week: 1 },
    { src: "imagenes/achaguas/achaguas12-2.jpeg", description: "Torre 12", week: 1 },
    
    // SEMANA 2
    { src: "imagenes/achaguas/achaguas13-2.jpeg", description: "Torre 13", week: 2 },
    { src: "imagenes/achaguas/achaguas14-2.jpeg", description: "Torre 14", week: 2 },
    { src: "imagenes/achaguas/achaguas14-3.jpeg", description: "Torre 14", week: 2 },
    { src: "imagenes/achaguas/achaguas15-3.jpeg", description: "Torre 15", week: 2 },

    // SEMANA 3
    { src: "imagenes/achaguas/torre39.jpeg", description: "Torre 39", week: 3 },
    { src: "imagenes/achaguas/torre40.jpeg", description: "Torre 40", week: 3 },
    { src: "imagenes/achaguas/torre41.jpeg", description: "Torre 41", week: 3 },
    { src: "imagenes/achaguas/torre41-a.jpeg", description: "Torre 41 Antes", week: 3 },
    { src: "imagenes/achaguas/torre42.jpeg", description: "Torre 42", week: 3 },

    { src: "imagenes/achaguas/tramo38-39.jpeg", description: "Vano 38-39", week: 3 },
    { src: "imagenes/achaguas/tramo39-40.jpeg", description: "Vano 39-40", week: 3 },
    { src: "imagenes/achaguas/tramo40-41.jpeg", description: "Vano 40-41", week: 3 },
    { src: "imagenes/achaguas/tramo41-42.jpeg", description: "Vano 41-42", week: 3 },
    { src: "imagenes/achaguas/tramo42-43.jpeg", description: "Vano 42-43", week: 3 },

    { src: "imagenes/achaguas/torre45.jpeg", description: "Torre 45", week: 3 },
    { src: "imagenes/achaguas/torre45-a.jpeg", description: "Torre 45 Antes", week: 3 },
    { src: "imagenes/achaguas/torre46.jpeg", description: "Torre 46", week: 3 },
    { src: "imagenes/achaguas/torre46-a.jpeg", description: "Torre 46 Antes", week: 3 },
    { src: "imagenes/achaguas/torre47.jpeg", description: "Torre 47", week: 3 },
    { src: "imagenes/achaguas/torre47-a.jpeg", description: "Torre 47 Antes", week: 3 },
    { src: "imagenes/achaguas/torre48.jpeg", description: "Torre 48", week: 3 },
    { src: "imagenes/achaguas/torre48-a.jpeg", description: "Torre 48 Antes", week: 3 },
    { src: "imagenes/achaguas/torre49.jpeg", description: "Torre 49", week: 3 },
    { src: "imagenes/achaguas/torre49-a.jpeg", description: "Torre 49 Antes", week: 3 },
    
    { src: "imagenes/achaguas/tramo45-46.jpeg", description: "Vano 45-46", week: 3 },
    { src: "imagenes/achaguas/tramo47-48d.jpeg", description: "Vano 47-48 Despues", week: 3 },
    { src: "imagenes/achaguas/tramo47-48.jpeg", description: "Vano 47-48 Antes", week: 3 },
    { src: "imagenes/achaguas/tramo48-49.jpeg", description: "Vano 48-49", week: 3 },

    // SEMANA 4
    { src: "imagenes/achaguas/torre51.jpeg", description: "Torre 51", week: 4 },
    { src: "imagenes/achaguas/torre51-a.jpeg", description: "Torre 51-a", week: 4 },
    { src: "imagenes/achaguas/torre52.jpeg", description: "Torre 52", week: 4 },
    { src: "imagenes/achaguas/torre52-a.jpeg", description: "Torre 52 Antes", week: 4 },
    { src: "imagenes/achaguas/torre53.jpeg", description: "Torre 53", week: 4 },
    { src: "imagenes/achaguas/torre53-a.jpeg", description: "Torre 53 Antes", week: 4 },
    { src: "imagenes/achaguas/torre54.jpeg", description: "Torre 54", week: 4 },
    { src: "imagenes/achaguas/torre54-a.jpeg", description: "Torre 54 Antes", week: 4 },
    { src: "imagenes/achaguas/torre55.jpeg", description: "Torre 55", week: 4 },
    { src: "imagenes/achaguas/torre55-a.jpeg", description: "Torre 55 Antes", week: 4 },
      
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

    // Nuevas fotos añadidas a la SEMANA 5
    { src: "imagenes/achaguas/torre66-a.jpeg", description: "Torre 66 Antes", week: 5 },
    { src: "imagenes/achaguas/torre66.jpeg", description: "Torre 66", week: 5 },
    { src: "imagenes/achaguas/torre67-a.jpeg", description: "Torre 67 Antes", week: 5 },
    { src: "imagenes/achaguas/torre67.jpeg", description: "Torre 67", week: 5 },
    { src: "imagenes/achaguas/torre68-a.jpeg", description: "Torre 68 Antes", week: 5 },
    { src: "imagenes/achaguas/torre68.jpeg", description: "Torre 68", week: 5 },
    { src: "imagenes/achaguas/torre69-a.jpeg", description: "Torre 69 Antes", week: 5 },
    { src: "imagenes/achaguas/torre69.jpeg", description: "Torre 69", week: 5 },
    { src: "imagenes/achaguas/torre70-a.jpeg", description: "Torre 70 Antes", week: 5 },
    { src: "imagenes/achaguas/torre70.jpeg", description: "Torre 70", week: 5 },
    { src: "imagenes/achaguas/torre71-a.jpeg", description: "Torre 71 Antes", week: 5 },
    { src: "imagenes/achaguas/torre71.jpeg", description: "Torre 71", week: 5 },
    { src: "imagenes/achaguas/torre72-a.jpeg", description: "Torre 72 Antes", week: 5 },
    { src: "imagenes/achaguas/torre72.jpeg", description: "Torre 72", week: 5 },
    { src: "imagenes/achaguas/torre73-a.jpeg", description: "Torre 73 Antes", week: 5 },
    { src: "imagenes/achaguas/torre73.jpeg", description: "Torre 73", week: 5 },

    // Fotos añadidas a la SEMANA 6
    { src: "imagenes/achaguas/torre101-a.jpeg", description: "Torre 101 Antes", week: 6 },
    { src: "imagenes/achaguas/torre101.jpeg", description: "Torre 101", week: 6 },
    { src: "imagenes/achaguas/torre102-a.jpeg", description: "Torre 102 Antes", week: 6 },
    { src: "imagenes/achaguas/torre102.jpeg", description: "Torre 102", week: 6 },
    { src: "imagenes/achaguas/torre103-a.jpeg", description: "Torre 103 Antes", week: 6 },
    { src: "imagenes/achaguas/torre103.jpeg", description: "Torre 103", week: 6 },
    { src: "imagenes/achaguas/torre104-a.jpeg", description: "Torre 104 Antes", week: 6 },
    { src: "imagenes/achaguas/torre104.jpeg", description: "Torre 104", week: 6 },
    { src: "imagenes/achaguas/torre105.jpeg", description: "Torre 105", week: 6 },
    { src: "imagenes/achaguas/torre106-a.jpeg", description: "Torre 106 Antes", week: 6 },
    { src: "imagenes/achaguas/torre106.jpeg", description: "Torre 106", week: 6 },
    { src: "imagenes/achaguas/torre107-a.jpeg", description: "Torre 107 Antes", week: 6 },
    { src: "imagenes/achaguas/torre107.jpeg", description: "Torre 107", week: 6 },
    { src: "imagenes/achaguas/torre108-a.jpeg", description: "Torre 108 Antes", week: 6 },
    { src: "imagenes/achaguas/torre108.jpeg", description: "Torre 108", week: 6 },
    { src: "imagenes/achaguas/torre109-a.jpeg", description: "Torre 109 Antes", week: 6 },
    { src: "imagenes/achaguas/torre109.jpeg", description: "Torre 109", week: 6 },
    { src: "imagenes/achaguas/torre110.jpeg", description: "Torre 110", week: 6 },
    { src: "imagenes/achaguas/torre111-a.jpeg", description: "Torre 111 Antes", week: 6 },
    { src: "imagenes/achaguas/torre111.jpeg", description: "Torre 111", week: 6 },
    { src: "imagenes/achaguas/torre112-a.jpeg", description: "Torre 112 Antes", week: 6 },
    { src: "imagenes/achaguas/torre112.jpeg", description: "Torre 112", week: 6 },
    { src: "imagenes/achaguas/torre113-a.jpeg", description: "Torre 113 Antes", week: 6 },
    { src: "imagenes/achaguas/torre113.jpeg", description: "Torre 113", week: 6 },
    { src: "imagenes/achaguas/torre114-a.jpeg", description: "Torre 114 Antes", week: 6 },
    { src: "imagenes/achaguas/torre114.jpeg", description: "Torre 114", week: 6 },
    { src: "imagenes/achaguas/torre141-a.jpeg", description: "Torre 141 Antes", week: 6 },
    { src: "imagenes/achaguas/torre141.jpeg", description: "Torre 141", week: 6 },
    { src: "imagenes/achaguas/torre142-a.jpeg", description: "Torre 142 Antes", week: 6 },
    { src: "imagenes/achaguas/torre142.jpeg", description: "Torre 142", week: 6 },
    { src: "imagenes/achaguas/torre143-a.jpeg", description: "Torre 143 Antes", week: 6 },
    { src: "imagenes/achaguas/torre143.jpeg", description: "Torre 143", week: 6 },

    // Nuevos tramos añadidos a la SEMANA 6
    { src: "imagenes/achaguas/tramo101-102.jpeg", description: "Vano 101-102", week: 6 },
    { src: "imagenes/achaguas/tramo110-111.jpeg", description: "Vano 110-111", week: 6 },
    { src: "imagenes/achaguas/tramo111-112.jpeg", description: "Vano 111-112", week: 6 },
    { src: "imagenes/achaguas/tramo112-113.jpeg", description: "Vano 112-113", week: 6 },
    { src: "imagenes/achaguas/tramo113-114.jpeg", description: "Vano 113-114", week: 6 },
    { src: "imagenes/achaguas/tramo141-142.jpeg", description: "Vano 141-142", week: 6 },
    { src: "imagenes/achaguas/tramo142-143.jpeg", description: "Vano 142-143", week: 6 },

    // Fotos añadidas a la SEMANA 7
    { src: "imagenes/achaguas/torre91.jpeg", description: "Torre 91", week: 7 },
    { src: "imagenes/achaguas/torre92-a.jpeg", description: "Torre 92 Antes", week: 7 },
    { src: "imagenes/achaguas/torre92.jpeg", description: "Torre 92", week: 7 },
    { src: "imagenes/achaguas/torre93-a.jpeg", description: "Torre 93 Antes", week: 7 },
    { src: "imagenes/achaguas/torre93.jpeg", description: "Torre 93", week: 7 },
    { src: "imagenes/achaguas/torre94-a.jpeg", description: "Torre 94 Antes", week: 7 },
    { src: "imagenes/achaguas/torre94.jpeg", description: "Torre 94", week: 7 },
    { src: "imagenes/achaguas/torre95-a.jpeg", description: "Torre 95 Antes", week: 7 },
    { src: "imagenes/achaguas/torre95.jpeg", description: "Torre 95", week: 7 },
    { src: "imagenes/achaguas/torre96-a.jpeg", description: "Torre 96 Antes", week: 7 },
    { src: "imagenes/achaguas/torre96.jpeg", description: "Torre 96", week: 7 },
    { src: "imagenes/achaguas/torre97-a.jpeg", description: "Torre 97 Antes", week: 7 },
    { src: "imagenes/achaguas/torre97.jpeg", description: "Torre 97", week: 7 },
    { src: "imagenes/achaguas/torre98-a.jpeg", description: "Torre 98 Antes", week: 7 },
    { src: "imagenes/achaguas/torre98.jpeg", description: "Torre 98", week: 7 },
    { src: "imagenes/achaguas/torre99.jpeg", description: "Torre 99", week: 7 },
    { src: "imagenes/achaguas/torre100-a.jpeg", description: "Torre 100 Antes", week: 7 },
    { src: "imagenes/achaguas/torre100.jpeg", description: "Torre 100", week: 7 },
    { src: "imagenes/achaguas/torre101-a.jpeg", description: "Torre 101 Antes", week: 7 },
    { src: "imagenes/achaguas/torre101.jpeg", description: "Torre 101", week: 7 },
    { src: "imagenes/achaguas/torre102-a.jpeg", description: "Torre 102 Antes", week: 7 },
    { src: "imagenes/achaguas/torre102.jpeg", description: "Torre 102", week: 7 },
    { src: "imagenes/achaguas/torre103-a.jpeg", description: "Torre 103 Antes", week: 7 },
    { src: "imagenes/achaguas/torre103.jpeg", description: "Torre 103", week: 7 },
    { src: "imagenes/achaguas/torre104-a.jpeg", description: "Torre 104 Antes", week: 7 },
    { src: "imagenes/achaguas/torre104.jpeg", description: "Torre 104", week: 7 },
    { src: "imagenes/achaguas/torre105.jpeg", description: "Torre 105", week: 7 },
    { src: "imagenes/achaguas/torre106.jpeg", description: "Torre 106", week: 7 },

    // Fotos de torres - SEMANA 8
    { src: "imagenes/achaguas/torre70.jpeg", description: "Torre 70", week: 8 },
    { src: "imagenes/achaguas/torre71-a.jpeg", description: "Torre 71 Antes", week: 8 },
    { src: "imagenes/achaguas/torre71.jpeg", description: "Torre 71", week: 8 },
    { src: "imagenes/achaguas/torre72-a.jpeg", description: "Torre 72 Antes", week: 8 },
    { src: "imagenes/achaguas/torre72.jpeg", description: "Torre 72", week: 8 },
    { src: "imagenes/achaguas/torre73-a.jpeg", description: "Torre 73 Antes", week: 8 },
    { src: "imagenes/achaguas/torre73.jpeg", description: "Torre 73", week: 8 },
    { src: "imagenes/achaguas/torre81-a.jpeg", description: "Torre 81 Antes", week: 8 },
    { src: "imagenes/achaguas/torre81.jpeg", description: "Torre 81", week: 8 },
    { src: "imagenes/achaguas/torre82-a.jpeg", description: "Torre 82 Antes", week: 8 },
    { src: "imagenes/achaguas/torre82.jpeg", description: "Torre 82", week: 8 },
    { src: "imagenes/achaguas/torre83-a.jpeg", description: "Torre 83 Antes", week: 8 },
    { src: "imagenes/achaguas/torre83.jpeg", description: "Torre 83", week: 8 },
    { src: "imagenes/achaguas/torre84-a.jpeg", description: "Torre 84 Antes", week: 8 },
    { src: "imagenes/achaguas/torre84.jpeg", description: "Torre 84", week: 8 },
    { src: "imagenes/achaguas/torre85-a.jpeg", description: "Torre 85 Antes", week: 8 },
    { src: "imagenes/achaguas/torre85.jpeg", description: "Torre 85", week: 8 },
    { src: "imagenes/achaguas/torre86-a.jpeg", description: "Torre 86 Antes", week: 8 },
    { src: "imagenes/achaguas/torre86.jpeg", description: "Torre 86", week: 8 },
    { src: "imagenes/achaguas/torre87-a.jpeg", description: "Torre 87 Antes", week: 8 },
    { src: "imagenes/achaguas/torre87.jpeg", description: "Torre 87", week: 8 },
    { src: "imagenes/achaguas/torre88-a.jpeg", description: "Torre 88 Antes", week: 8 },
    { src: "imagenes/achaguas/torre88.jpeg", description: "Torre 88", week: 8 },
    { src: "imagenes/achaguas/torre89-a.jpeg", description: "Torre 89 Antes", week: 8 },
    { src: "imagenes/achaguas/torre89.jpeg", description: "Torre 89", week: 8 },
    { src: "imagenes/achaguas/torre90.jpeg", description: "Torre 90", week: 8 },

    // Fotos de torres - SEMANA 9
    { src: "imagenes/achaguas/torre77-a.jpeg", description: "Torre 77 Antes", week: 9 },
    { src: "imagenes/achaguas/torre77.jpeg", description: "Torre 77", week: 9 },
    { src: "imagenes/achaguas/torre78-a.jpeg", description: "Torre 78 Antes", week: 9 },
    { src: "imagenes/achaguas/torre78.jpeg", description: "Torre 78", week: 9 },
    { src: "imagenes/achaguas/torre80.jpeg", description: "Torre 80", week: 9 }
];
 
     
    
  

    // =========================================================
    // FOTOS MANTENIMIENTO: Tramo San Fernando II - Achaguas
    // (Dejar vacío o agregar cuando tengas fotos de mantenimiento)
    // =========================================================
    const maintenancePhotos = [
        // Fotos de tramos - SEMANA 7
        { src: "imagenes/achaguas/tramo92-93.jpeg", description: "Vano 92-93", week: 7 },
        { src: "imagenes/achaguas/tramo93-94.jpeg", description: "Vano 93-94", week: 7 },
        { src: "imagenes/achaguas/tramo101-102.jpeg", description: "Vano 101-102", week: 7 },
        { src: "imagenes/achaguas/tramo102-103.jpeg", description: "Vano 102-103", week: 7 },

        // Fotos de tramos - SEMANA 8
        { src: "imagenes/achaguas/tramo81-82.jpeg", description: "Vano 81-82", week: 8 },
        { src: "imagenes/achaguas/tramo84-85.jpeg", description: "Vano 84-85", week: 8 },
        { src: "imagenes/achaguas/tramo87-88.jpeg", description: "Vano 87-88", week: 8 },
       // { src: "imagenes/achaguas/tramo88-89.jpeg", description: "Vano 88-89", week: 8 },
        { src: "imagenes/achaguas/tramo89-90.jpeg", description: "Vano 89-90", week: 8 },
        { src: "imagenes/achaguas/tramo99-100.jpeg", description: "Vano 99-100", week: 8 },

        { src: "imagenes/achaguas/tramo79-80.jpeg", description: "Vano 79-80", week: 9 },
        { src: "imagenes/achaguas/tramo81-80.jpeg", description: "Vano 81-80", week: 9 },
        { src: "imagenes/achaguas/tramo92-81.jpeg", description: "Vano 92-81", week: 9 },

    { src: "imagenes/achaguas/tramo57-58.jpeg", description: "Vano 57-58", week: 5 },
    { src: "imagenes/achaguas/tramo64-65.jpeg", description: "Vano 64-65", week: 5 }
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