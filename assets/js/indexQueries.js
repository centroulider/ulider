const siteName = "https://ulider.co"

fetch('./assets/data/mainBanner.json')
.then(response => response.json() ) 
.then(data => {
    let divBanner = "";    
    data.forEach(function(equipo){
        divBanner += `
        <div class="carousel-item">
         <div class="carousel-text" >
               <h1>${equipo.titulo1} <span class="text-warning">${equipo.titulo2}</span></h1>
               <p>${equipo.subtitulo}</p>
               <div class="carousel-btn">
                     <a class="btn btn-custom" href="${equipo.urlBoton}">${equipo.textoBoton}</a>
               </div>
            </div>
         </div>
        `;
    });
    document.getElementById('mainBannerText').innerHTML = divBanner;

     // inserta las etiquetas meta del html


    $('head').append( '<meta charset="UTF-8">' );
    $('head').append( '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">' );
    $('head').append( '<title>ULIDER - Liderazgo de Alto Nivel</title>' );
    $('head').append( '<meta name="description" content="Cenro de entrenamiento en Liderazgo de Alto Nivel">' );  
    $('head').append( '<meta property="type" content="website" />' );
    $('head').append( '<meta property="url" content="'+siteName+'" />' );
    $('head').append( '<meta name="author" content="Misión Digital Agencia">' );
    $('head').append( '<link rel="shortcut icon" type="image/jpg" href="assets/img/logoUlider.png" />' );
    $('head').append( '<meta name="keywords" content="ulider, dts, legado, liderazgo, líderes, escuela de líderes, entrenamiento en liderazgo" />" />' );
    $('head').append( '<meta name="dcterms.rightsHolder" content="Ulider" />' );
    $('head').append( '<meta property="og:title" content="Ulider" />' );
    $('head').append( '<meta property="og:Author" content="Misión Digital Agencia" />' );
    $('head').append( '<meta property="og:description" content="Cenro de entrenamiento en Liderazgo de Alto Nivel" />' );
    $('head').append( '<meta property="og:type" content="website" />' );
    $('head').append( '<meta property="og:url" content="https://ulider.co" />' );
    $('head').append( '<meta property="og:image" content="assets/img/logoUlider.png" />' );

   
});

fetch('./assets/data/programas.json')
.then(response => response.json() ) 
.then(data => {
    let div = "";    
    data.forEach(function(equipo){
        div += `
        
        <div class="causes-item">
            <div class="causes-img">
                <img src="assets/img/programas/${equipo.nombreImagen}.jpg" alt="Image">
            </div>
            <div class="causes-text mt-4">
                <h3>${equipo.titulo}</h3>
                <p>${equipo.descripcion}</p>
            </div>
            <div class="causes-btn">
                <a href="" class="btn btn-custom">Ver más</a>
            </div>
        </div>
        
        `;
    });
    document.getElementById('programas').innerHTML = div;
   
});


fetch('./assets/data/events.json')
.then(response => response.json() ) 
.then(data => {
    let div = "";    
    data.forEach(function(equipo){
        div += `
        
        <div  class="col-lg-6">
            <div class="event-item">
                <div class="item-img">
                    <img src="assets/img/eventos/nocheDts38.jpeg" alt="Image" >
                </div>
                <div class="event-content">
                    <div class="event-meta">
                        <p><i class="fa fa-calendar-alt"></i>${equipo.fecha}</p>
                        <p><i class="far fa-clock"></i>${equipo.hora}</p>
                        <p><i class="fa fa-map-marker-alt"></i>${equipo.lugar}</p>
                    </div>
                    <div class="event-text">
                        <h3>${equipo.tituloEvento}</h3>
                        <p>
                        ${equipo.descripcionEvento}
                        </p>
                        <a class="btn btn-custom" href="${equipo.urlBoton}">${equipo.textoBoton}</a>
                    </div>
                </div>
            </div>
        </div>
        
        `;
    });
    document.getElementById('events').innerHTML = div;
   
});


fetch('./assets/data/testimonials.json')
.then(response => response.json() ) 
.then(data => {
    let div = "";    
    data.forEach(function(equipo){
        div += `
        
        <div class="testimonial-item">
            <div class="testimonial-profile">
                <img src="assets/img/equipos/${equipo.equipo}/equipo/${equipo.equipo}-${equipo.nombreImagen}.jpg" alt="Image">
                <div class="testimonial-name">
                    <h3>${equipo.nombre}</h3>
                    <p>${equipo.equipo}</p>
                </div>
            </div>
            <div class="testimonial-text">
                <p>
                ${equipo.testimonio}
                </p>
            </div>
        </div>
        
        `;
    });
    document.getElementById('testimonials').innerHTML = div;
   
});


fetch('./assets/data/articulosBlog.json')
.then(response => response.json() ) 
.then(data => {
    let div = "";    
    data.forEach(function(equipo){
        div += `
        
        <div class="col-lg-4">
            <div class="blog-item">
                <div class="blog-img">
                <a href="#"><img src="assets/img/blog/${equipo.nombreImagen}.jpg" alt="${equipo.nombre}" title="${equipo.nombre}"></a>
                
                </div>
                <div class="blog-text">
                    <h3><a href="#">${equipo.nombre}</a></h3>
                    <p>
                    ${equipo.extract}
                    </p>
                </div>
                <div class="blog-meta">
                    <p><i class="fa fa-user"></i><a href="">${equipo.autor}</a></p>
                    <p><i class="fa fa-comments"></i><a href="">${equipo.fecha}</a></p>
                </div>
            </div>
        </div>
        
        `;
    });
    document.getElementById('articulos').innerHTML = div;
   
});


