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

    // Lista de videos (definida como arreglo para evitar TypeError/ReferenceError)
    const videos = [];

    // Fotos generales organizadas por semana
    const photos = [
        { src: "imagenes/elorza/torre17.jpeg", description: "Limpieza Torre 17", week: 1 },
        { src: "imagenes/elorza/torre17-a.jpeg", description: "Torre 17 antes de la limpieza", week: 1 },
        { src: "imagenes/elorza/tramo17-18.jpeg", description: "Vano entre Torres 17 y 18", week: 1 },
        { src: "imagenes/elorza/torre18-a.jpeg", description: "Limpieza Torre 18 Antes", week: 1 },
        { src: "imagenes/elorza/torre18.jpeg", description: "Limpieza Torre 18", week: 1 },
        { src: "imagenes/elorza/torre19-a.jpeg", description: "Torre 19 antes de la limpieza", week: 1 },
        { src: "imagenes/elorza/torre19.jpeg", description: "Limpieza Torre 19", week: 1 },
        { src: "imagenes/elorza/torre20.jpeg", description: "Limpieza Torre 20", week: 1 },
        { src: "imagenes/elorza/torre20-a.jpeg", description: "Torre 20 Antes", week: 1 },
        { src: "imagenes/elorza/torre21.jpeg", description: "Limpieza Torre 21", week: 1 },
        { src: "imagenes/elorza/torre21-a.jpeg", description: "Torre 21 Antes", week: 1 },
        { src: "imagenes/elorza/torre22.jpeg", description: "Limpieza Torre 22", week: 1 },
        { src: "imagenes/elorza/torre22-a.jpeg", description: "Torre 22 Antes", week: 1 },
        { src: "imagenes/elorza/torre23.jpeg", description: "Limpieza Torre 23", week: 1 },
        { src: "imagenes/elorza/torre28-a.jpeg", description: "Torre 28 Antes", week: 1 },
        { src: "imagenes/elorza/torre28.jpeg", description: "Limpieza Torre 28", week: 1 },
        { src: "imagenes/elorza/torre29.jpeg", description: "Limpieza Torre 29", week: 1 },
        { src: "imagenes/elorza/torre29-a.jpeg", description: "Torre 29 Antes", week: 1 },
        { src: "imagenes/elorza/torre30.jpeg", description: "Limpieza Torre 30", week: 1 },
        { src: "imagenes/elorza/torre30-a.jpeg", description: "Torre 30 Antes", week: 1 },
        { src: "imagenes/elorza/torre31.jpeg", description: "Limpieza Torre 31", week: 1 },
        { src: "imagenes/elorza/torre31-a.jpeg", description: "Torre 31 Antes", week: 1 },
        { src: "imagenes/elorza/torre32.jpeg", description: "Limpieza Torre 32", week: 1 },
        { src: "imagenes/elorza/torre32-a.jpeg", description: "Torre 32 Antes", week: 1 },
        { src: "imagenes/elorza/torre33.jpeg", description: "Limpieza Torre 33", week: 1 },
        { src: "imagenes/elorza/torre33-a.jpeg", description: "Torre 33 Antes", week: 1 },
        { src: "imagenes/elorza/torre34.jpeg", description: "Limpieza Torre 34", week: 2 },
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
        { src: "imagenes/elorza/torre40-a.jpeg", description: "Torre 40 Antes de limpieza", week: 2 },
        { src: "imagenes/elorza/torre40.jpeg", description: "Limpieza Torre 40", week: 2 },
        { src: "imagenes/elorza/torre41-a.jpeg", description: "Torre 41 Antes de Limpieza", week: 2 },
        { src: "imagenes/elorza/torre41.jpeg", description: "Limpieza Torre 41", week: 2 },
        { src: "imagenes/elorza/torre42-a.jpeg", description: "Torre 42 Antes de Limpieza", week: 2 },
        { src: "imagenes/elorza/torre42.jpeg", description: "Limpieza Torre 42", week: 2 },
        { src: "imagenes/elorza/torre43-a.jpeg", description: "Torre 43 Antes de la Limpieza", week: 2 },
        { src: "imagenes/elorza/torre43.jpeg", description: "Torre 43", week: 2 },
        { src: "imagenes/elorza/torre45.jpeg", description: "Limpieza Torre 45", week: 2 },
        { src: "imagenes/elorza/torre52.jpeg", description: "Torre 52", week: 2 },
        { src: "imagenes/elorza/torre52-a.jpeg", description: "Torre 52 Antes", week: 2 },
        { src: "imagenes/elorza/torre53-a.jpeg", description: "Torre 53 Antes", week: 2 },
        { src: "imagenes/elorza/torre53.jpeg", description: "Torre 53", week: 2 },
        { src: "imagenes/elorza/torre54-a.jpeg", description: "Torre 54 Antes", week: 2 },
        { src: "imagenes/elorza/torre54.jpeg", description: "Torre 54", week: 2 },
        { src: "imagenes/elorza/torre55.jpeg", description: "Torre 55", week: 2 },
        { src: "imagenes/elorza/torre56.jpeg", description: "Torre 56", week: 2 },
        { src: "imagenes/elorza/torre57.jpeg", description: "Torre 57", week: 2 },
        { src: "imagenes/elorza/torre57-a.jpeg", description: "Torre 57 Antes", week: 2 },
        { src: "imagenes/elorza/torre58.jpeg", description: "Torre 58", week: 2 },
        { src: "imagenes/elorza/torre59-a.jpeg", description: "Torre 59 Antes", week: 2 },
        { src: "imagenes/elorza/torre59.jpeg", description: "Torre 59", week: 2 },
        { src: "imagenes/elorza/torre63.jpeg", description: "Torre 63", week: 3 },
        { src: "imagenes/elorza/torre63-a.jpeg", description: "Torre 63 Antes", week: 3 },
        { src: "imagenes/elorza/torre67.jpeg", description: "Torre 67", week: 3 },
        { src: "imagenes/elorza/torre67-a.jpeg", description: "Torre 67 Antes", week: 3 },
        { src: "imagenes/elorza/torre68.jpeg", description: "Torre 68", week: 3 },
        { src: "imagenes/elorza/torre68-a.jpeg", description: "Torre 68 Antes", week: 3 },
        { src: "imagenes/elorza/torre69.jpeg", description: "Torre 69", week: 3 },
        { src: "imagenes/elorza/torre69-a.jpeg", description: "Torre 69 Antes", week: 3 },
        { src: "imagenes/elorza/torre70.jpeg", description: "Torre 70", week: 3 },
        { src: "imagenes/elorza/torre70-a.jpeg", description: "Torre 70 Antes", week: 3 },
        { src: "imagenes/elorza/torre71.jpeg", description: "Torre 71", week: 4 },
        { src: "imagenes/elorza/torre72.jpeg", description: "Torre 72", week: 4 },
        { src: "imagenes/elorza/torre72-a.jpeg", description: "Torre 72 Antes", week: 4 },
        { src: "imagenes/elorza/torre73.jpeg", description: "Torre 73", week: 4 },
        { src: "imagenes/elorza/torre73-a.jpeg", description: "Torre 73 Antes", week: 4 },
        { src: "imagenes/elorza/torre77.jpeg", description: "Torre 77", week: 4 },
        { src: "imagenes/elorza/torre77-a.jpeg", description: "Torre 77 Antes", week: 4 },
        { src: "imagenes/elorza/torre78.jpeg", description: "Torre 78", week: 4 },
        { src: "imagenes/elorza/torre78-a.jpeg", description: "Torre 78 Antes", week: 4 },
        { src: "imagenes/elorza/torre79.jpeg", description: "Torre 79", week: 4 },
        { src: "imagenes/elorza/torre79-a.jpeg", description: "Torre 79 Antes", week: 4 },
        { src: "imagenes/elorza/torre80.jpeg", description: "Torre 80", week: 4 },
        { src: "imagenes/elorza/torre80-a.jpeg", description: "Torre 80 Antes", week: 4 },
        { src: "imagenes/elorza/torre81.jpeg", description: "Torre 81", week: 4 },
        { src: "imagenes/elorza/torre82.jpeg", description: "Torre 82", week: 4 },
        { src: "imagenes/elorza/torre82-a.jpeg", description: "Torre 82 Antes", week: 4 },
        { src: "imagenes/elorza/torre83.jpeg", description: "Torre 83", week: 4 },
        { src: "imagenes/elorza/torre83-a.jpeg", description: "Torre 83 Antes", week: 4 },
        { src: "imagenes/elorza/torre85.jpeg", description: "Torre 85", week: 5 },
        { src: "imagenes/elorza/torre85-a.jpeg", description: "Torre 85 Antes", week: 5 },
        { src: "imagenes/elorza/torre86.jpeg", description: "Torre 86", week: 5 },
        { src: "imagenes/elorza/torre86-a.jpeg", description: "Torre 86 Antes", week: 5 },
        { src: "imagenes/elorza/torre87.jpeg", description: "Torre 87", week: 5 },
        { src: "imagenes/elorza/torre92-a.jpeg", description: "Torre 92 Antes", week: 5 },
        { src: "imagenes/elorza/torre92.jpeg", description: "Torre 92", week: 5 },
        { src: "imagenes/elorza/torre93-a.jpeg", description: "Torre 93 Antes", week: 5 },
        { src: "imagenes/elorza/torre93.jpeg", description: "Torre 93", week: 5 },
        { src: "imagenes/elorza/torre94-a.jpeg", description: "Torre 94 Antes", week: 5 },
        { src: "imagenes/elorza/torre94.jpeg", description: "Torre 94", week: 5 },
        { src: "imagenes/elorza/torre95-a.jpeg", description: "Torre 95 Antes", week: 5 },
        { src: "imagenes/elorza/torre95.jpeg", description: "Torre 95", week: 5 },
        { src: "imagenes/elorza/torre96-a.jpeg", description: "Torre 96 Antes", week: 5 },
        { src: "imagenes/elorza/torre96.jpeg", description: "Torre 96", week: 5 },
        { src: "imagenes/elorza/torre97-a.jpeg", description: "Torre 97 Antes", week: 5 },
        { src: "imagenes/elorza/torre97.jpeg", description: "Torre 97", week: 5 },
        { src: "imagenes/elorza/torre98-a.jpeg", description: "Torre 98 Antes", week: 5 },
        { src: "imagenes/elorza/torre98.jpeg", description: "Torre 98", week: 5 },
        { src: "imagenes/elorza/torre100-a.jpeg", description: "Torre 100 Antes", week: 5 },
        { src: "imagenes/elorza/torre100.jpeg", description: "Torre 100", week: 5 },
        { src: "imagenes/elorza/torre101-a.jpeg", description: "Torre 101 Antes", week: 5 },
        { src: "imagenes/elorza/torre101.jpeg", description: "Torre 101", week: 5 },
        { src: "imagenes/elorza/torre102-a.jpeg", description: "Torre 102 Antes", week: 5 },
        { src: "imagenes/elorza/torre102.jpeg", description: "Torre 102", week: 5 },
        { src: "imagenes/elorza/torre103-a.jpeg", description: "Torre 103 Antes", week: 5 },
        { src: "imagenes/elorza/torre103.jpeg", description: "Torre 103", week: 5 },
        { src: "imagenes/elorza/torre104.jpeg", description: "Torre 104", week: 5 },
        { src: "imagenes/elorza/torre105-a.jpeg", description: "Torre 105 Antes", week: 5 },
        { src: "imagenes/elorza/torre105.jpeg", description: "Torre 105", week: 5 },
        { src: "imagenes/elorza/torre106-a.jpeg", description: "Torre 106 Antes", week: 5 },
        { src: "imagenes/elorza/torre106.jpeg", description: "Torre 106", week: 5 },
        { src: "imagenes/elorza/torre107-a.jpeg", description: "Torre 107 Antes", week: 5 },
        { src: "imagenes/elorza/torre107.jpeg", description: "Torre 107", week: 5 },
        { src: "imagenes/elorza/torre108-a.jpeg", description: "Torre 108 Antes", week: 5 },
        { src: "imagenes/elorza/torre108.jpeg", description: "Torre 108", week: 5 },
        { src: "imagenes/elorza/torre109-a.jpeg", description: "Torre 109 Antes", week: 5 },
        { src: "imagenes/elorza/torre109.jpeg", description: "Torre 109", week: 5 },
        { src: "imagenes/elorza/torre110-a.jpeg", description: "Torre 110 Antes", week: 6 },
        { src: "imagenes/elorza/torre110.jpeg", description: "Torre 110", week: 6 },
        { src: "imagenes/elorza/torre111-a.jpeg", description: "Torre 111 Antes", week: 6 },
        { src: "imagenes/elorza/torre111.jpeg", description: "Torre 111", week: 6 },
        { src: "imagenes/elorza/torre112-a.jpeg", description: "Torre 112 Antes", week: 6 },
        { src: "imagenes/elorza/torre112.jpeg", description: "Torre 112", week: 6 },
        { src: "imagenes/elorza/torre113-a.jpeg", description: "Torre 113 Antes", week: 6 },
        { src: "imagenes/elorza/torre113.jpeg", description: "Torre 113", week: 6 },
        { src: "imagenes/elorza/torre114-a.jpeg", description: "Torre 114 Antes", week: 6 },
        { src: "imagenes/elorza/torre114.jpeg", description: "Torre 114", week: 6 },
        { src: "imagenes/elorza/torre115-a.jpeg", description: "Torre 115 Antes", week: 6 },
        { src: "imagenes/elorza/torre115.jpeg", description: "Torre 115", week: 6 },
        { src: "imagenes/elorza/torre116-a.jpeg", description: "Torre 116 Antes", week: 6 },
        { src: "imagenes/elorza/torre116.jpeg", description: "Torre 116", week: 6 },
        { src: "imagenes/elorza/torre117-a.jpeg", description: "Torre 117 Antes", week: 6 },
        { src: "imagenes/elorza/torre117.jpeg", description: "Torre 117", week: 6 },
        { src: "imagenes/elorza/torre118-a.jpeg", description: "Torre 118 Antes", week: 6 },
        { src: "imagenes/elorza/torre118.jpeg", description: "Torre 118", week: 6 },
        { src: "imagenes/elorza/torre119-a.jpeg", description: "Torre 119 Antes", week: 7 },
        { src: "imagenes/elorza/torre119.jpeg", description: "Torre 119", week: 7 },
        { src: "imagenes/elorza/torre120-a.jpeg", description: "Torre 120 Antes", week: 7 },
        { src: "imagenes/elorza/torre120.jpeg", description: "Torre 120", week: 7 },
        { src: "imagenes/elorza/torre121-a.jpeg", description: "Torre 121 Antes", week: 7 },
        { src: "imagenes/elorza/torre121.jpeg", description: "Torre 121", week: 7 },
        { src: "imagenes/elorza/torre122-a.jpeg", description: "Torre 122 Antes", week: 7 },
        { src: "imagenes/elorza/torre122.jpeg", description: "Torre 122", week: 7 },
        { src: "imagenes/elorza/torre123-a.jpeg", description: "Torre 123 Antes", week: 7 },
        { src: "imagenes/elorza/torre123.jpeg", description: "Torre 123", week: 7 },
        { src: "imagenes/elorza/torre124-a.jpeg", description: "Torre 124 Antes", week: 7 },
        { src: "imagenes/elorza/torre124.jpeg", description: "Torre 124", week: 7 },
        { src: "imagenes/elorza/torre125-a.jpeg", description: "Torre 125 Antes", week: 7 },
        { src: "imagenes/elorza/torre125.jpeg", description: "Torre 125", week: 7 },
        { src: "imagenes/elorza/torre126-a.jpeg", description: "Torre 126 Antes", week: 8 },
        { src: "imagenes/elorza/torre126.jpeg", description: "Torre 126", week: 8 },
        { src: "imagenes/elorza/torre127-a.jpeg", description: "Torre 127 Antes", week: 8 },
        { src: "imagenes/elorza/torre127.jpeg", description: "Torre 127", week: 8 },
        { src: "imagenes/elorza/torre128-a.jpeg", description: "Torre 128 Antes", week: 8 },
        { src: "imagenes/elorza/torre128.jpeg", description: "Torre 128", week: 8 },
        { src: "imagenes/elorza/torre129-a.jpeg", description: "Torre 129 Antes", week: 8 },
        { src: "imagenes/elorza/torre129.jpeg", description: "Torre 129", week: 8 },
        { src: "imagenes/elorza/torre130-a.jpeg", description: "Torre 130 Antes", week: 9 },
        { src: "imagenes/elorza/torre130.jpeg", description: "Torre 130", week: 9 },
        { src: "imagenes/elorza/torre131-a.jpeg", description: "Torre 131 Antes", week: 9 },
        { src: "imagenes/elorza/torre131.jpeg", description: "Torre 131", week: 9 },
        { src: "imagenes/elorza/torre132-a.jpeg", description: "Torre 132 Antes", week: 9 },
        { src: "imagenes/elorza/torre132.jpeg", description: "Torre 132", week: 9 },
        { src: "imagenes/elorza/torre133.jpeg", description: "Torre 133", week: 9 },
        { src: "imagenes/elorza/torre152-a.jpeg", description: "Torre 152 Antes", week: 9 },
        { src: "imagenes/elorza/torre152.jpeg", description: "Torre 152", week: 9 },
        { src: "imagenes/elorza/torre153-a.jpeg", description: "Torre 153 Antes", week: 9 },
        { src: "imagenes/elorza/torre153.jpeg", description: "Torre 153", week: 9 },
        { src: "imagenes/elorza/torre154-a.jpeg", description: "Torre 154 Antes", week: 9 },
        { src: "imagenes/elorza/torre154.jpeg", description: "Torre 154", week: 9 },
        { src: "imagenes/elorza/torre155-a.jpeg", description: "Torre 155 Antes", week: 9 },
        { src: "imagenes/elorza/torre155.jpeg", description: "Torre 155", week: 9 },
        { src: "imagenes/elorza/torre156-a.jpeg", description: "Torre 156 Antes", week: 10 },
        { src: "imagenes/elorza/torre156.jpeg", description: "Torre 156", week: 10 },
        { src: "imagenes/elorza/torre157-a.jpeg", description: "Torre 157 Antes", week: 10 },
        { src: "imagenes/elorza/torre157.jpeg", description: "Torre 157", week: 10 },
        { src: "imagenes/elorza/torre158-a.jpeg", description: "Torre 158 Antes", week: 10 },
        { src: "imagenes/elorza/torre158.jpeg", description: "Torre 158", week: 10 },
        { src: "imagenes/elorza/torre159-a.jpeg", description: "Torre 159 Antes", week: 10 },
        { src: "imagenes/elorza/torre159.jpeg", description: "Torre 159", week: 10 },
        { src: "imagenes/elorza/torre160-a.jpeg", description: "Torre 160 Antes", week: 10 },
        { src: "imagenes/elorza/torre160.jpeg", description: "Torre 160", week: 10 },
        { src: "imagenes/elorza/torre161-a.jpeg", description: "Torre 161 Antes", week: 10 },
        { src: "imagenes/elorza/torre161.jpeg", description: "Torre 161", week: 10 },
        { src: "imagenes/elorza/torre162-a.jpeg", description: "Torre 162 Antes", week: 10 },
        { src: "imagenes/elorza/torre162.jpeg", description: "Torre 162", week: 10 },
        { src: "imagenes/elorza/torre163-a.jpeg", description: "Torre 163 Antes", week: 10 },
        { src: "imagenes/elorza/torre163.jpeg", description: "Torre 163", week: 10 },
        { src: "imagenes/elorza/torre164-a.jpeg", description: "Torre 164 Antes", week: 10 },
        { src: "imagenes/elorza/torre164.jpeg", description: "Torre 164", week: 10 },
        { src: "imagenes/elorza/torre165-a.jpeg", description: "Torre 165 Antes", week: 10 },
        { src: "imagenes/elorza/torre165.jpeg", description: "Torre 165", week: 10 },
        { src: "imagenes/elorza/torre166-a.jpeg", description: "Torre 166 Antes", week: 10 },
        { src: "imagenes/elorza/torre166.jpeg", description: "Torre 166", week: 11 },
        { src: "imagenes/elorza/torre167-a.jpeg", description: "Torre 167 Antes", week: 11 },
        { src: "imagenes/elorza/torre167.jpeg", description: "Torre 167", week: 11 },

        { src: "imagenes/elorza/torre168-a.jpeg", description: "Torre 168 Antes", week: 10 },
        { src: "imagenes/elorza/torre168.jpeg", description: "Torre 168", week: 10 },
        { src: "imagenes/elorza/torre169-a.jpeg", description: "Torre 169 Antes", week: 10 },
        { src: "imagenes/elorza/torre169.jpeg", description: "Torre 169", week: 10 },
         { src: "imagenes/elorza/torre170-a.jpeg", description: "Torre 170 Antes", week: 10 },
        { src: "imagenes/elorza/torre170.jpeg", description: "Torre 170", week: 10 },

        { src: "imagenes/elorza/torre171-a.jpeg", description: "Torre 171 Antes", week: 11 },
        { src: "imagenes/elorza/torre171.jpeg", description: "Torre 171", week: 11 },
        { src: "imagenes/elorza/torre172-a.jpeg", description: "Torre 172 Antes", week: 11 },
        { src: "imagenes/elorza/torre172.jpeg", description: "Torre 172", week: 11 },
        { src: "imagenes/elorza/torre173-a.jpeg", description: "Torre 173 Antes", week: 11 },
        { src: "imagenes/elorza/torre173.jpeg", description: "Torre 173", week: 11 },
        { src: "imagenes/elorza/torre174-a.jpeg", description: "Torre 174 Antes", week: 11 },
        { src: "imagenes/elorza/torre174.jpeg", description: "Torre 174", week: 11 },
        { src: "imagenes/elorza/torre175-a.jpeg", description: "Torre 175 Antes", week: 11 },
        { src: "imagenes/elorza/torre175.jpeg", description: "Torre 175", week: 11 },
        { src: "imagenes/elorza/torre176-a.jpeg", description: "Torre 176 Antes", week: 11 },
        { src: "imagenes/elorza/torre176.jpeg", description: "Torre 176", week: 11 },
        { src: "imagenes/elorza/torre177-a.jpeg", description: "Torre 177 Antes", week: 11 },
        { src: "imagenes/elorza/torre177.jpeg", description: "Torre 177", week: 11 },
        { src: "imagenes/elorza/torre178-a.jpeg", description: "Torre 178 Antes", week: 11 },
        { src: "imagenes/elorza/torre178.jpeg", description: "Torre 178", week: 11 },
        { src: "imagenes/elorza/torre179-a.jpeg", description: "Torre 179 Antes", week: 11 },
        { src: "imagenes/elorza/torre179.jpeg", description: "Torre 179", week: 11 },
        { src: "imagenes/elorza/torre180-a.jpeg", description: "Torre 180 Antes", week: 11 },
        { src: "imagenes/elorza/torre180.jpeg", description: "Torre 180", week: 11 }
    ];

    // Fotos y videos de vanos organizados por semana
    const maintenancePhotos = [
        { src: "imagenes/elorza/tramo17-18.jpeg", description: "Vano 17-18", week: 1 },
        { src: "imagenes/elorza/tramo35-36.jpeg", description: "Vano 35-36", week: 2 },
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
        { src: "imagenes/elorza/tramo70-71.jpeg", description: "Vano 70-71", week: 4 },
        { src: "imagenes/elorza/tramo73-74.jpeg", description: "Vano 73-74", week: 4 },
        { src: "imagenes/elorza/tramo79-80.jpeg", description: "Vano 79-80", week: 4 },
        { src: "imagenes/elorza/tramo80-81.jpeg", description: "Vano 80-81", week: 4 },
        { src: "imagenes/elorza/tramo81-82.jpeg", description: "Vano 81-82", week: 4 },
        { src: "imagenes/elorza/tramo83-84.jpeg", description: "Vano 83-84", week: 4 },
        { src: "imagenes/elorza/tramo86-87.jpeg", description: "Vano 86-87", week: 5 },
        { src: "imagenes/elorza/tramo96-97.jpeg", description: "Vano 96-97", week: 5 },
        { src: "imagenes/elorza/tramo97-98.jpeg", description: "Vano 97-98", week: 5 },
        { src: "imagenes/elorza/tramo99-100.jpeg", description: "Vano 99-100", week: 5 },
        { src: "imagenes/elorza/tramo102-103.jpeg", description: "Vano 102-103", week: 5 },
        { src: "imagenes/elorza/tramo110-111.jpeg", description: "Vano 110-111", week: 6 },
        { src: "imagenes/elorza/tramo119-120.jpeg", description: "Vano 119-120", week: 7 },
        { src: "imagenes/elorza/tramo120-121.jpeg", description: "Vano 120-121", week: 7 },
        { src: "imagenes/elorza/tramo121-122.jpeg", description: "Vano 121-122", week: 7 },
       
        { src: "imagenes/elorza/tramo130-131.jpeg", description: "Vano 130-131", week: 9 },

        { src: "imagenes/elorza/tramo157-158.jpeg", description: "Vano 157-158", week: 10 },
        { src: "imagenes/elorza/tramo161-162.jpeg", description: "Vano 161-162", week: 10 },
        { src: "imagenes/elorza/tramo168-169.jpeg", description: "Vano 168-169", week: 10 },
      
        { src: "imagenes/elorza/tramo172-173.jpeg", description: "Vano 172-173", week: 11 },
        { src: "imagenes/elorza/tramo173-174.jpeg", description: "Vano 173-174", week: 11 },
        { src: "imagenes/elorza/tramo173-174.mp4", description: "Vano 173-174 Video", week: 11 },
        { src: "imagenes/elorza/tramo175-176.jpeg", description: "Vano 175-176", week: 11 },
        { src: "imagenes/elorza/tramo176-177.jpeg", description: "Vano 176-177", week: 11 },
        { src: "imagenes/elorza/tramo177-178.jpeg", description: "Vano 177-178", week: 11 },
        { src: "imagenes/elorza/tramo178-179.jpeg", description: "Vano 178-179", week: 11 },
        { src: "imagenes/elorza/tramo179-180.jpeg", description: "Vano 179-180", week: 11 }
    ];

    // Generar botones de filtro
    const weeks = [...new Set([...photos.map(p => p.week), ...maintenancePhotos.map(p => p.week)])];

    const createFilterButtons = () => {
        if (!filterContainer) return;
        filterContainer.innerHTML = "";

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

    // Renderizar fotos generales
    const renderPhotos = (week) => {
        if (!photoGallery) return;
        photoGallery.innerHTML = "";
        
        const filteredPhotos = week === "all" 
            ? photos 
            : photos.filter(photo => photo.week == week);

        if (filteredPhotos.length === 0) {
            photoGallery.innerHTML = "<p>No hay fotos para esta semana.</p>";
            return;
        }

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
    };

    // Renderizar vanos trabajados (mantenimiento)
    const renderMaintenancePhotos = (week) => {
        if (!maintenanceGallery) return;
        maintenanceGallery.innerHTML = "";

        const filteredMaintenance = week === "all" 
            ? maintenancePhotos 
            : maintenancePhotos.filter(item => item.week == week);

        if (filteredMaintenance.length === 0) {
            maintenanceGallery.innerHTML = "<p>No hay fotos de vanos trabajados para esta semana.</p>";
            return;
        }

        filteredMaintenance.forEach(item => {
            const maintenanceItem = document.createElement("div");
            maintenanceItem.classList.add("maintenance-item");

            // Comprobar si es un video o imagen
            if (item.src.toLowerCase().endsWith(".mp4")) {
                const vid = document.createElement("video");
                vid.controls = true;
                vid.src = item.src;
                vid.style.width = "100%";
                maintenanceItem.appendChild(vid);
            } else {
                const img = document.createElement("img");
                img.src = item.src;
                img.alt = item.description;

                img.addEventListener("click", () => {
                    fullscreenImg.src = img.src;
                    fullscreenImg.alt = img.alt;
                    fullscreenContainer.classList.remove("hidden");
                });

                maintenanceItem.appendChild(img);
            }

            const desc = document.createElement("p");
            desc.textContent = item.description;
            maintenanceItem.appendChild(desc);

            maintenanceGallery.appendChild(maintenanceItem);
        });
    };

    // Renderizar videos generales
    const renderVideos = (week) => {
        if (!videoGallery) return;
        videoGallery.innerHTML = "";

        const videoList = Array.isArray(videos) ? videos : [];
        const filteredVideos = week === "all" 
            ? videoList 
            : videoList.filter(video => video && video.week == week);

        if (filteredVideos.length === 0) {
            videoGallery.innerHTML = "<p>No hay videos para esta semana.</p>";
            return;
        }

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
    };

    // Actualizar títulos
    const updateTitles = (week) => {
        if (sectionTitle) {
            sectionTitle.textContent = week === "all" 
                ? "Todas las Semanas - Limpieza por Torres" 
                : `Semana ${week} - Limpieza por Torres`;
        }

        if (maintenanceTitle) {
            maintenanceTitle.textContent = week === "all" 
                ? "Todas las Semanas - Vanos Trabajados" 
                : `Semana ${week} - Vanos Trabajados`;
        }

        if (videoTitle) {
            videoTitle.textContent = week === "all" 
                ? "Todas las Semanas - Videos" 
                : `Semana ${week} - Videos`;
        }
    };

    // Manejador del clic en filtros
    const handleFilterClick = (e) => {
        const button = e.target.closest("button");
        if (!button) return;

        const week = button.getAttribute("data-week");
        if (!week) return;

        updateTitles(week);
        renderPhotos(week);
        renderMaintenancePhotos(week);
        renderVideos(week);
    };

    // Eventos a los botones de filtro
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

    // Inicialización al cargar la página
    createFilterButtons();
    updateTitles("all");
    renderPhotos("all");
    renderMaintenancePhotos("all");
    renderVideos("all");
    addFilterEventListeners();
});