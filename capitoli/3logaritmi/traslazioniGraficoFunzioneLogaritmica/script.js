var ggbApp1 = new GGBApplet({
    "appName": "classic", 
    "id": "gg1",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "filename": "img/traslazioneVerticaleFunzioneLogaritmica.ggb"}, 
    true);  

var ggbApp2 = new GGBApplet({
    "appName": "classic", 
    "id": "gg2",
    "allowUpscale": true,
    "showToolBar": false, 
    "showAlgebraInput": false, 
    "showMenuBar": false, 
    "enableShiftDragZoom": false,
    "scaleContainerClass":"geogebra-container",
    "filename": "img/traslazioneOrizzontaleFunzioneLogaritmica.ggb"}, 
    true);  


window.addEventListener("load", function() { 
    ggbApp1.inject('geogebra1');
    ggbApp2.inject('geogebra2');
});





/* MathJax.typesetClear([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]);
MathJax.typesetPromise([document.getElementsByClassName("calcoliEquazione"), document.getElementsByClassName("nuovaEquazione")]).then(() => {}); */