"use strict"


window.addEventListener("load", ()=>{
   
    const canvas = document.querySelector('#canvas')
    const context = canvas.getContext('2d')
    canvas.width = 800;
    canvas.height = 600;

    var penDown = false ;

    function draw(e) {
        if (!penDown) return
        context.lineWidth = 3;
        context.lineTo (e.layerX, e.layerY)
        context.strokeStyle = "blue";
        context.stroke()
    }

    canvas.addEventListener('mousedown',function(){penDown = true;})
    canvas.addEventListener('mouseup', function(){context.beginPath(); penDown = false;})
    canvas.addEventListener('mousemove', draw)
})