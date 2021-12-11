console.log("Hello world!");

var typing = new Typed (".typing" ,{

    strings : ["UX Designer", "Web Designer", "Strategist", "Freelancer"],
    typeSpeed: 100,
    backSpeed:60,
    loop: true
});

$(document).ready(function(){
    $("#expertise button").click(function(){
      $("#expertise p").toggle(1000);
    });
  });