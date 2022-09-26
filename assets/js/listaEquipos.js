fetch('./assets/data/dataEquipos.json')
.then(response => response.json() ) 
.then(data => {
    let div = "";    
    data.forEach(function(equipo){
        div += `
        <div class="causes-item my-3">
            <div class="causes-img">
                <a href="./programas/dts/equipo.html?idEquipo=${equipo.idteam}"><img src="assets/img/equipos/DTS${equipo.idteam}/DTS${equipo.idteam}-1.jpg" title="${equipo.tipo} ${equipo.nombre}" alt="${equipo.tipo} ${equipo.nombre}"></a>
            </div>
            <div class="causes-text my-4">
                <a href="./programas/dts/equipo.html?idEquipo=${equipo.idteam}" class="d-flex"><img src="assets/img/equipos/DTS${equipo.idteam}/dts${equipo.idteam}Logo.jpg" alt="${equipo.nombre}" title="${equipo.nombre}" class="rounded-circle mr-2" style="width: 20px; height: 20px;"> <h3>${equipo.tipo} <span class="text-warning">${equipo.nombre}</span></h3></a>
                <p>${equipo.mision}</p>
            </div>
        </div>
        `;
    });
    document.getElementById('listaEquipos').innerHTML = div;
   
});





