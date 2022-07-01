fetch('./assets/data/dataEquipos.json')
.then(response => response.json() ) 
.then(data => {
    let div = "";    
    data.forEach(function(equipo){
        div += `
        <div class="causes-item">
            <div class="causes-img">
                <a href="./programas/dts/equipo.html?idEquipo=${equipo.idteam}"><img src="assets/img/equipos/dts${equipo.idteam}/dts${equipo.idteam}-1.jpg" title="${equipo.tipo} ${equipo.nombre}" alt="${equipo.tipo} ${equipo.nombre}"></a>
            </div>
            <div class="causes-text my-4">
                <a href="./programas/dts/equipo.html?idEquipo=${equipo.idteam}"><h3>${equipo.tipo} <span class="text-warning">${equipo.nombre}</span></h3></a>
                <p>${equipo.mision}</p>
            </div>
        </div>
        `;
    });
    document.getElementById('listaEquipos').innerHTML = div;
   
});







