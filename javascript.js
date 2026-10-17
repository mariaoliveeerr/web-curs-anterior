window.addEventListener('load', function() {
  if (!localStorage.getItem('jaHaVisitat')) {
    alert('Benvingut/da a la web de VOID Barcelona 👋');
    localStorage.setItem('jaHaVisitat', 'true');
  }
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("actiu");
}

function validarRegistre() {
  
  var email = document.getElementById("registreemail").value;
  var contrassenya = document.getElementById("registrecontrassenya").value;
  var contrassenya2 = document.getElementById("registrecontrasenya2").value;


  var patroEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!patroEmail.test(email)) {
    alert("Per favor, introdueix un correu electrònic vàlid (exemple@domini.com).");
    return false; // Atura l'enviament del formulari
  }

  if (contrassenya !== contrassenya2) {
    alert("Les contrasenyes no coincideixen. Torna-ho a intentar.");
    return false; 
  }

  alert("Ja t'has registrat a VOID Barcelona!");
  return true;
}

function validarContacte() {
  // 1. Agafem el valor del correu de contacte
  var emailContacte = document.getElementById("contacte-email").value;
  var patroEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 2. Validem el correu electrònic
  if (!patroEmail.test(emailContacte)) {
    alert("Per favor, introdueix un correu electrònic vàlid per al contacte.");
    return false; 
  }

  // Si tot està bé, deixem que s'enviï
  alert("Missatge enviat correctament!");
  return true;
}

// Funció per a ampliar la imatge que ens passin per paràmetre
function ampliarImatge(rutaImatge) {
  // Mostrem la finestra modal
  document.getElementById("modal-lightbox").style.display = "flex";
  
  // Li fiquem la ruta de la foto que hem clicat
  document.getElementById("img-ampliada").src = rutaImatge;
}

// Funció per a tancar la modal
function tancarModal() {
  document.getElementById("modal-lightbox").style.display = "none";
}