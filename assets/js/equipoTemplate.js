const autor = 'Misión Digital agencia';
const siteName = 'https://ulider.co';
const pageName = './programas/dts'
const companyName = 'Ulider';

var urlPage = window.location.search;
const urlParams = new URLSearchParams(urlPage);
const numEquipo = urlParams.get('idEquipo');

//consulta la información almacenada en la base de datos

fetch('../../assets/data/dataEquipos.json')
.then(response => response.json())
.then(data => {
   const newArray = data.filter(filtra=>{
      return filtra.idteam == numEquipo;
   }) 
   
   const {idteam, nombre, identidad, tipo, mision, tituloLegado, descripcionLegado, colorEquipo} = newArray[0];
   
         const imgBannerEquipo = 'url(../../assets/img/equipos/DTS'+idteam+'/dts'+idteam+'-1.jpg)'
         const identityTeam = tipo+" "+nombre
         const srcImgLogo = '../../assets/img/equipos/dts'+idteam+'/DTS'+idteam+'logo.jpg'
         const altImgLogo = 'Ulider DTS'+idteam+''
         const titleImgLogo = 'Ulider DTS'+idteam+''
         const logoBorder = 'border: 5px solid'+ colorEquipo;
         const teamMission = mision;
         const srcImgPerfil = '../../assets/img/equipos/DTS'+idteam+'/dts'+idteam+'-1.jpg'
         const altImgPerfil = 'Ulider DTS'+idteam+''
         const titleImgPerfil = 'Ulider DTS'+idteam+''
         const tittleLegade = tituloLegado
         const descLegado = descripcionLegado;


         // inserta las etiquetas meta del html

         $('head').append( '<meta charset="UTF-8">' );
         $('head').append( '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">' );
         $('head').append( '<title>'+tipo+" "+nombre+" - DTS Ulider"+'</title>' );
         $('head').append( '<meta name="description" content="'+descLegado+" - DTS Ulider"+'">' );  
         $('head').append( '<meta property="type" content="website" />' );
         $('head').append( '<meta property="url" content="'+siteName+'/programas/dts/dts'+idteam+'" />' );
         $('head').append( '<meta name="author" content="'+autor+'">' );
         $('head').append( '<link rel="shortcut icon" type="image/jpeg" href="../../assets/img/equipos/dts'+idteam+'/dts'+idteam+'Logo.jpeg" />' );
         $('head').append( '<meta name="keywords" content="DTS ulider, Ulider, DTS, fundacion en bucaramanga, legado dts'+idteam+", "+identidad+'" />' );
         $('head').append( '<meta name="dcterms.rightsHolder" content="'+companyName+'" />' );
         $('head').append( '<meta property="og:title" content="'+tipo+" "+nombre+'" />' );
         $('head').append( '<meta property="og:Author" content="'+autor+'" />' );
         $('head').append( '<meta property="og:description" content="'+descLegado+'" />' );
         $('head').append( '<meta property="og:type" content="website" />' );
         $('head').append( '<meta property="og:url" content="'+siteName+'/programas/dts/dts'+idteam+'" />' );
         $('head').append( '<meta property="og:image" content="../../assets/img/equipos/DTS34/dts34Logo.jpg" />' );
         
         
         // Inserta la imagen de fondo del banner
         document.getElementById('fondoEquipo').style.backgroundImage = imgBannerEquipo
         // Inserta el Título de la página (El nombre del equipo)
         const tituloPagina = document.createElement('h1')
         tituloPagina.classList = 'nombreTeam text-warning'
         tituloPagina.textContent = identityTeam
         document.querySelector('.tituloTeam').appendChild(tituloPagina);
         // Inserta el logo del equipo 
         const imgLogoEquipo = document.createElement('img');
         imgLogoEquipo.src = srcImgLogo
         imgLogoEquipo.alt = altImgLogo
         imgLogoEquipo.title = titleImgLogo
         imgLogoEquipo.style = logoBorder
         document.querySelector('.logoTeam').appendChild(imgLogoEquipo);
         // Inserta la misión del equipo
         const misionEquipo = document.createElement('h4')
         misionEquipo.id = 'imgPerfil'
         misionEquipo.classList = 'p-2 text-center'
         misionEquipo.textContent = teamMission
         document.querySelector('.misionTeam').appendChild(misionEquipo);
         // Inserta la imagen de perfil del equipo 
         const perfilImage = document.createElement('img');
         perfilImage.classList = 'p-2 border bg-white'
         perfilImage.src = srcImgPerfil
         perfilImage.alt = altImgPerfil
         perfilImage.title = titleImgPerfil
         document.querySelector('.imgPerfilTeam').appendChild(perfilImage);
         // Inserta el título del legado del equipo
         const tituloLegadoEquipo = document.createElement('h5')
         tituloLegadoEquipo.classList = 'text-center'
         tituloLegadoEquipo.textContent = tittleLegade
         document.querySelector('.tittleLegade').appendChild(tituloLegadoEquipo);
         // Inserta la descripción del legado del equipo
         const descripcionLegadoEquipo = document.createElement('p')
         descripcionLegadoEquipo.classList = 'pl-3'
         descripcionLegadoEquipo.textContent = descLegado
         document.querySelector('.teamLegadeDesc').appendChild(descripcionLegadoEquipo);

         //Inserta las imágenes del legado

         const n = 8; //numero de imagenes
         const gallery = document.getElementById('imgLegados') ;
         for (let i = 1; i<=n; i++){
         gallery.innerHTML += '<img class="causes-img p-1" src="../../assets/img/equipos/'+nombre+'/legado/'+ i +'.jpg" alt="Legado '+nombre+'" title="Legado '+nombre+'">';
         }

});




// Inserta a lista de los otros equipos

fetch('../../assets/data/dataEquipos.json')
.then(response => response.json() )
.then(datas => {
const newArray = datas.filter(filtra=>{
   return filtra.idteam > 0;
})
let div = "";    
newArray.forEach(function(equipo){
    div += `             
      <div id="dts${equipo.idteam}" class="post-item ">
         <div class="post-img img-thumbnail">
            <a href="./equipo.html?idEquipo=${equipo.idteam}"><img src="../../assets/img/equipos/DTS${equipo.idteam}/dts${equipo.idteam}-1.jpg"/></a>
         </div>
         <div class="post-text text-center ml-2">
            <h3><a href="./equipo.html?idEquipo=${equipo.idteam}">${equipo.tipo} ${equipo.nombre}</a></h3>
            <div class="post-meta ">
               <p><a href="./equipo.html?idEquipo=${equipo.idteam}">${equipo.identidad}</a></p>
            </div>
         </div>
      </div>            
    `;
});
document.getElementById('otrosEquipos').innerHTML = div;


});





   





















