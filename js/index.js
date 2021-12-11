console.log("Hello world!");

var app = document.getElementById('headline');
var typewriter = new Typewriter(app, {
    loop: true,
    cursor: "",
});
typewriter.typeString('Hello!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I am Michael Everett')
    .pauseFor(2500)
    .start();

