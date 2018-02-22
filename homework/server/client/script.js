var canvas = document.getElementById("circle"),
    context = canvas.getContext("2d"),

quadrat = new Path2D();
    //cub.rect(10, 10, 385, 385); // rect(x, y, width, height)
    quadrat.moveTo(40, 10);
    quadrat.lineTo(365, 10);
    quadrat.quadraticCurveTo(395, 10, 395, 40);
    quadrat.lineTo(395, 365);
    quadrat.quadraticCurveTo(395, 395, 365, 395);
    quadrat.lineTo(40, 395);
    quadrat.quadraticCurveTo(10, 395, 10, 365);
    quadrat.lineTo(10, 40);
    quadrat.quadraticCurveTo(10, 10, 40, 10);
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.stroke(quadrat);  

circle = new Path2D();
    context.lineWidth = 3;
    context.strokeStyle = "blue";
    circle.arc(202, 202, 170, 0,2*Math.PI);
    context.stroke(circle);
   

function drawShapes(type)
    {
        canvas = document.getElementById("circle1");
        context = canvas.getContext("2d");
        var squareOffset = 15;
        var squareSide = 70;
        var circleOffset = 202;
        var circleRadius = 170;

        context.fillStyle = "rgba(0, 38, 255, 0.8)";
        //context.fillRect(squareOffset, squareOffset, squareSide, squareSide);
        context.moveTo(40, 10);
        context.lineTo(365, 10);
        context.quadraticCurveTo(395, 10, 395, 40);
        context.lineTo(395, 365);
        context.quadraticCurveTo(395, 395, 365, 395);
        context.lineTo(40, 395);
        context.quadraticCurveTo(10, 395, 10, 365);
        context.lineTo(10, 40);
        context.quadraticCurveTo(10, 10, 40, 10);
        context.fill();  

        context.globalCompositeOperation = "source-over";

        context.fillStyle = "white";
        context.strokeStyle = "red";
        context.lineWidth = 8;
        context.beginPath();
        context.arc(circleOffset, circleOffset, circleRadius, 0, Math.PI * 2, true);
        context.fill();
        context.stroke();
    }
    
    drawShapes("source-over");
  //  drawShapes("source-in");
  //  drawShapes("source-out");
  //  drawShapes("source-atop");
  //  drawShapes("destination-over");
  //  drawShapes("destination-in");
  //  drawShapes("destination-out");
  //  drawShapes("destination-atop");
  //  drawShapes("lighter");
  //  drawShapes("copy");
  //  drawShapes("xor");
