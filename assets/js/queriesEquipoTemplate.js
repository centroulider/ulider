var urlPage2 = window.location.search;
const urlParams2 = new URLSearchParams(urlPage2);
const numEquipo2 = urlParams2.get('idEquipo');

//Inserta los miembros de los equipos filtrados

fetch('../../assets/data/entrenados.json')
.then(response => response.json() )
.then(data => {
   const newData = data.filter(filtro =>{
      return filtro.equipo == 'dts'+numEquipo2;
   })
   let div = "";     
   newData.forEach(function(entrenado){
   div += `
         <div class="causes-item ">
            <div class="equipo-item m-1" style="background-image: url(../../assets/img/equipos/${entrenado.equipo}/equipo/${entrenado.nombreImagen}.jpg);">
               <div class="text-center mx-3">
                  <h5 class="nameTeamMember" style="background-color: #00A3C2; border-radius: 5px;">${entrenado.nombre}</h5>
               </div> 
            </div> 
         </div> 
   `;
   });
   document.getElementById('miembrosEquipo').innerHTML = div;
   
});



 

