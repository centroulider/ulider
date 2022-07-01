const siteNameMenu = "Ulider"
const urlRoot = "http://127.0.0.1:5500/"
const urlLogo = "./assets/img/logoUlider.png"

const urlNosotros = "./nosotros.html"
const urlDTS = "dts.html"
const urlCoach = "coach.html"
const urlEmociones = "emociones-liderazgo.html"
const urlBlog = "blog.html"
const urlContacto = "contacto.html"
const urlCTA = "cta.html"


const creaMenu = document.getElementById('menu');
	let divMenu = `
         <div class="container-fluid">
               <a href="${urlRoot}index.html" class="navbar-brand"><img class="border-warning" src="./assets/img/logoUlider.png" alt="Logo Ulider" title="Logo Ulider" style=""> Ulider</a>
               <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                  <div  class="navbar-nav ml-auto">
                     <a id="inicio" href="${urlRoot}index.html" class="nav-item nav-link">Inicio</a>
                     <a id="nosotros" href="${urlNosotros}" class="nav-item nav-link">Nosotros</a>
                     <div class="nav-item dropdown">
                           <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown">Programas</a>
                           <div class="dropdown-menu">
                              <a id="dts" href="${urlDTS}" class="dropdown-item">DTS</a>
                              <a id="liderazgo" href="${urlEmociones}" class="dropdown-item">Liderazgo y Emociones</a>
                              <a id="coach" href="${urlCoach}" class="dropdown-item">Coach de Vida</a>
                           </div>
                     </div>
                     <a id="blog" href="${urlBlog}" class="nav-item nav-link">Blog</a>
                     <a id="contacto" href="${urlContacto}" class="nav-item nav-link">Contacto</a>
                     <div class="menuCta"><a id="menuCta" class="btn btn-custom" href="${urlCTA}">Regístrate aquí</a></div>
                  </div>
               </div>
         </div>
	`;
	creaMenu.innerHTML = divMenu;





   const creaFooter = document.getElementById('footer');
	let divFooter = `
         <div class="container">
         <div class="row">
            <div class="col-lg-3 col-md-6">
               <div class="footer-contact">
                     <h2>Dirección</h2>
                     <p><i class="fa fa-map-marker-alt"></i>Bucaramanga, Colombia</p>
                     <p><i class="fa fa-phone-alt"></i>312 345 67890</p>
                     <p><i class="fa fa-envelope"></i>info@ulider.com</p>
                     <div class="footer-social">
                        <!-- <a class="btn btn-custom" href=""><i class="fab fa-twitter"></i></a> -->
                        <a class="btn btn-custom" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-custom" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-custom" href=""><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-custom" href=""><i class="fab fa-linkedin-in"></i></a>
                     </div>
               </div>
            </div>
            <div class="col-lg-3 col-md-6">
               <div class="footer-link">
                     <h2>Corporativo</h2>
                     <a href="">Nosotros</a>
                     <a href="">Contáctanos</a>
                     <a href="">Programas</a>
                     <a href="">Próximos eventos</a>
                     <a href="">Blog</a>
               </div>
            </div>
            <div class="col-lg-3 col-md-6">
               <div class="footer-link">
                     <h2>Links útiles</h2>
                     <a href="">Términos de uso</a>
                     <a href="">Políticas de privacidad</a>
                     <a href="">Cookies</a>
                     <a href="">Ayuda</a>
                     <a href="">FQAs</a>
               </div>
            </div>
            <div class="col-lg-3 col-md-6">
               <div class="footer-newsletter">
                     <h2>Recibe noticias</h2>
                     <form>
                        <input class="form-control" placeholder="Corre electrónico">
                        <button class="btn btn-custom">Enviar</button>
                        <label>No enviamos spam!</label>
                     </form>
               </div>
            </div>
         </div>
      </div>
      <div class="container copyright">
         <div class="row">
            <div class="col-md-6">
               <p>2022 &copy; <a href="#">Ulider</a> Todos los derechos reservados.</p>
            </div>
            <div class="col-md-6">
               <p>Creado por <a href="https://misiondigitalagencia.com">Misión Digital</a></p>
            </div>
         </div>
      </div>
	`;
	creaFooter.innerHTML = divFooter;