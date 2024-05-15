/* Mi primer archivo de JS */

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Kenia Anderson')
    .pauseFor(1800)
    .deleteAll()
    .typeString('Aprendiz de programacion')
    .pauseFor(1800)
    .deleteAll()
    .typeString('Enfocado en front-end')
    .pauseFor(1800)
    .deleteAll()
    .typeString('<strong>Estudiante...</strong>')
    .pauseFor(1800)
    .deleteAll()
    .typeString('Entusiasta de la ciencia computacional')
    .pauseFor(1800)
    .deleteAll()
    .typeString('Fan de la electronica')
    .pauseFor(1800)
    .start();