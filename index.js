//estructura de archivo? aiudaaaa

let edad = parseInt(prompt("Ingresa tu edad"));
let cursoNumero = 0;
/* let mensaje = 0; */

/* alguna funcion que sea para armar "personas" */
function pedirDatos() {
  let nombre = prompt("Ingrese su nombre");
  let mensaje = `Vacante #${i} asignada a Nombre de: ${nombre}`;
  alert(mensaje); //por alguna razon esto no me funciona cuando lo pongo dentro de la funcion
}

if (edad < 8) {
  alert("No hay cursos disponibles para tu edad escolar.");
} else if (edad < 12) {
  prompt(
    "Elige entre los siguientes cursos disponibles para tu edad escolar:1-Microbit 2- Scratcj 3-Arduino INGRESE NUMERO"
  );
  if ((curso = 1)) {
    for (let i = 1; i <= 10; i++) {
      pedirDatos(); //tuki! pido la funcion
      /*  let nombre = prompt("Ingrese su nombre");
            let mensaje = `Vacante #${i} asignada a Nombre de: ${nombre}`;*/
      /* alert(mensaje);
            break;  */
    } /* como hago para que salga del for pero siga sumando vacantes a medida que siga ingresando gente? BREAK como con el toxi */
  }
} else if (edad =>18) {
  prompt(
    "Elige entre los siguientes cursos disponibles para tu edad escolar: 3-Desarrollo Web 4-Realidad Aumentada INGRESE NUMERO"
  );
  if ((curso = 3)) {
    for (let i = 1; i <= 10; i++) {
      pedirDatos();
    }
  }
  alert("gracias por elegirnos");
}
