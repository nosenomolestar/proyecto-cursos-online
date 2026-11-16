
console.log("NUEVO SCRIPT");
const buscador = document.querySelector("input");
const cursos = document.querySelectorAll(".curso");

if (buscador) {
    buscador.addEventListener("input", function() {
        for (let i = 0; i < cursos.length; i++) {
            let nombre = cursos[i].querySelector("h2").textContent.toLowerCase();
            let texto = buscador.value.toLowerCase();
            if (nombre.includes(texto)) {
                cursos[i].style.display = "block";
            } else {
                cursos[i].style.display = "none";
            }
        }
    });
}

document.getElementById("inscribirse").onclick = function() {
    alert("Te inscribiste al curso");
    localStorage.setItem("cursoPython", "inscripto");
};

//esta parte no esta funcionando del todo, no se porque, pero no me muestra el curso que me inscribi
const botonMostrar = document.getElementById("mostrarCursos");
const misCursos = document.getElementById("misCursos");
if (botonMostrar && misCursos) {
    botonMostrar.onclick = function() {
        if (misCursos.style.display === "none") {
            misCursos.style.display = "block";
            botonMostrar.textContent = "Ocultar mis cursos";
            if (localStorage.getItem("cursoPython") === "inscripto") {
                misCursos.innerHTML = `
                    <h3>Python desde cero</h3>
                    <p>Curso en progreso</p>
                    <a href="curso.html">
                        <button>Continuar curso</button>
                    </a>
                `;
            } else {
                misCursos.innerHTML = "<p>Todavía no te inscribiste a ningún curso.</p>";
            }
        } else {

            misCursos.style.display = "none";
            botonMostrar.textContent = "Ver mis cursos";
        }
    };
}
