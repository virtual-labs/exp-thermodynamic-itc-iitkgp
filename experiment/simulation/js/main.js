//Your JavaScript goes in here
/* 
Lab name: Experimental Biochemistry
Exp name: Thermodynamic characterization of protein-ligand binding by isothermal titration calorimetry (ITC)
File name: main.js
Developer: Prakriti Dhang
*/

function start() {
   
  document.getElementById("step0").disabled = true;
  document.getElementById("int1").disabled = false;
  document.getElementById("step1").disabled = false;
  document.getElementById("step2").disabled = false;
  
}

function restartexp() {
  location.reload();
}



function showsample(){
  document.getElementById("protein").style.display="block";

}

function showligand(){
  document.getElementById("ligand").style.display="block";

}

function showsamplebtn(){
  document.getElementById("protein").style.display="block";

}

function showligandbtn(){
  document.getElementById("ligand").style.display="block";
  

}





var imgobjplunger=null;
function injectplunger(){
 var plungertop = 5;
 var imgplunger= document.getElementById("plungerinj");
 clearInterval(imgobjplunger);
 imgobjplunger = setInterval(frame, 90);


 function frame(){
  if(plungertop == 8){
    clearInterval(imgobjplunger);
    document.getElementById("plungerinj").removeAttribute("onclick", "injectplunger()");
    document.getElementById("int2").disabled = false;
    document.getElementById("int10").style.display="block";
  }
  else{
    plungertop++;
    imgplunger.style.top=plungertop + "%";

    canvass11 = document.getElementById("injectioncolumn");
    ctxgs11 = canvass11.getContext("2d");
    var posY = 0;
    var speed = 0.6;



    function drawLine() {


      ctxgs11.strokeStyle = 'white';
      ctxgs11.lineWidth = 600;
      ctxgs11.beginPath();
      ctxgs11.moveTo(0, posY); /*  */
      ctxgs11.lineTo(0, 0);
      ctxgs11.stroke();
    }

    function moveLine() {
      posY += speed;

      if (posY < 0 || posY > canvass11.height) {
        speed = speed * -1;
      }
    }

    function loop() {
      // clear old frame;
      //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
      moveLine();
      drawLine();
      cancelani = requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
 }

}





function clickchk1(){
  if(document.getElementById("int1").checked){
    document.getElementById("plungerinj").setAttribute("onclick", "injectplunger()");
    document.getElementById("pstep3").style.display="block";
    document.getElementById("ligand").style.display="none";
    document.getElementById("protein").style.display="none";
    document.getElementById("int20").style.display="none";
    document.getElementById("int30").style.display="none";
    document.getElementById("int40").style.display="none";
    document.getElementById("int2").checked=false;
    document.getElementById("int3").checked=false;
    document.getElementById("int4").checked=false;
    document.getElementById("int2").disabled=true;
    document.getElementById("int3").disabled=true;
    document.getElementById("int4").disabled=true;
  }
  else{
    $('#alertModal').modal('show');
    $('.modal-body').text('Please select to see the interaction between ligand and protein');
    document.getElementById("int10").style.display="none";
  }
}

function clickchk2(){
  if(document.getElementById("int2").checked){
    document.getElementById("plungerinj").setAttribute("onclick", "injectplunger2()");
   // document.getElementById("int20").style.display="block";
    document.getElementById("int10").style.display="none";
    document.getElementById("int30").style.display="none";
    document.getElementById("int40").style.display="none";
    document.getElementById("int1").checked=false;
    document.getElementById("int3").checked=false;
    document.getElementById("int4").checked=false;
    document.getElementById("int4").disabled=true;
    document.getElementById("int3").disabled=true;
    document.getElementById("int1").disabled=true;

  }
  else{
    $('#alertModal').modal('show');
    $('.modal-body').text('Please select to see the interaction between ligand and protein');
    document.getElementById("int20").style.display="none";
  }
}

function clickchk3(){
  if(document.getElementById("int3").checked){
    document.getElementById("plungerinj").setAttribute("onclick", "injectplunger3()");
    //document.getElementById("int30").style.display="block";
    document.getElementById("int10").style.display="none";
    document.getElementById("int20").style.display="none";
    document.getElementById("int40").style.display="none";
    document.getElementById("int2").checked=false;
    document.getElementById("int1").checked=false;
    document.getElementById("int4").checked=false;
    document.getElementById("int2").disabled=true;
    document.getElementById("int4").disabled=true;
    document.getElementById("int1").disabled=true;
  }
  else{
    $('#alertModal').modal('show');
    $('.modal-body').text('Please select to see the interaction between ligand and protein');
    document.getElementById("int30").style.display="none";
  }
}
function clickchk4(){
  if(document.getElementById("int4").checked){
    document.getElementById("plungerinj").setAttribute("onclick", "injectplunger4()");
    //document.getElementById("int40").style.display="block";
    document.getElementById("int10").style.display="none";
    document.getElementById("int30").style.display="none";
    document.getElementById("int20").style.display="none";
    document.getElementById("int2").checked=false;
    document.getElementById("int3").checked=false;
    document.getElementById("int1").checked=false;
    document.getElementById("int2").disabled=true;
    document.getElementById("int3").disabled=true;
    document.getElementById("int1").disabled=true;
    
  }
  else{
    $('#alertModal').modal('show');
    $('.modal-body').text('Please select to see the interaction between ligand and protein');
    document.getElementById("int40").style.display="none";
  
  }
}


function cancelmsg() {
  document.getElementById("alertModal").style.display = "none";
  document.getElementById("alertModal").classList.remove("show");
}


var imgobjplunger2=null;
function injectplunger2(){
 var plungertop = 8;
 var imgplunger2= document.getElementById("plungerinj");
 clearInterval(imgobjplunger2);
 imgobjplunger2 = setInterval(frame, 90);


 function frame(){
  if(plungertop == 11){
    clearInterval(imgobjplunger2);
    document.getElementById("plungerinj").removeAttribute("onclick", "injectplunger2()");
    document.getElementById("int20").style.display="block";
    document.getElementById("int3").disabled = false;
  }
  else{
    plungertop++;
    imgplunger2.style.top=plungertop + "%";

    canvass11 = document.getElementById("injectioncolumn2");
    ctxgs11 = canvass11.getContext("2d");
    var posY = 0;
    var speed = 0.5;



    function drawLine() {


      ctxgs11.strokeStyle = 'white';
      ctxgs11.lineWidth = 600;
      ctxgs11.beginPath();
      ctxgs11.moveTo(0, posY); /*  */
      ctxgs11.lineTo(0, 0);
      ctxgs11.stroke();
    }

    function moveLine() {
      posY += speed;

      if (posY < 0 || posY > canvass11.height) {
        speed = speed * -1;
      }
    }

    function loop() {
      // clear old frame;
      //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
      moveLine();
      drawLine();
      cancelani = requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
 }

}


var imgobjplunger3=null;
function injectplunger3(){
 var plungertop = 11;
 var imgplunger3= document.getElementById("plungerinj");
 clearInterval(imgobjplunger3);
 imgobjplunger3 = setInterval(frame, 80);


 function frame(){
  if(plungertop == 14){
    clearInterval(imgobjplunger3);
    document.getElementById("plungerinj").removeAttribute("onclick", "injectplunger3()");
    document.getElementById("int30").style.display="block";
    document.getElementById("int4").disabled = false;
  }
  else{
    plungertop++;
    imgplunger3.style.top=plungertop + "%";

    canvass11 = document.getElementById("injectioncolumn3");
    ctxgs11 = canvass11.getContext("2d");
    var posY = 0;
    var speed = 0.5;



    function drawLine() {


      ctxgs11.strokeStyle = 'white';
      ctxgs11.lineWidth = 600;
      ctxgs11.beginPath();
      ctxgs11.moveTo(0, posY); /*  */
      ctxgs11.lineTo(0, 0);
      ctxgs11.stroke();
    }

    function moveLine() {
      posY += speed;

      if (posY < 0 || posY > canvass11.height) {
        speed = speed * -1;
      }
    }

    function loop() {
      // clear old frame;
      //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
      moveLine();
      drawLine();
      cancelani = requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
 }

}


var imgobjplunger4=null;
function injectplunger4(){
  document.getElementById("step4").disabled = false;
 var plungertop = 14;
 var imgplunger4= document.getElementById("plungerinj");
 clearInterval(imgobjplunger4);
 imgobjplunger4 = setInterval(frame, 80);


 function frame(){
  if(plungertop == 17){
    clearInterval(imgobjplunger4);
    document.getElementById("plungerinj").removeAttribute("onclick", "injectplunger4()");
    document.getElementById("int40").style.display="block";
  }
  else{
    plungertop++;
    imgplunger4.style.top=plungertop + "%";

    canvass11 = document.getElementById("injectioncolumn4");
    ctxgs11 = canvass11.getContext("2d");
    var posY = 0;
    var speed = 0.5;



    function drawLine() {


      ctxgs11.strokeStyle = 'white';
      ctxgs11.lineWidth = 600;
      ctxgs11.beginPath();
      ctxgs11.moveTo(0, posY); /*  */
      ctxgs11.lineTo(0, 0);
      ctxgs11.stroke();
    }

    function moveLine() {
      posY += speed;

      if (posY < 0 || posY > canvass11.height) {
        speed = speed * -1;
      }
    }

    function loop() {
      // clear old frame;
      //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
      moveLine();
      drawLine();
      cancelani = requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
 }

}

function datanalysisgraph(){
  document.getElementById("cardint1").style.display="none";
  document.getElementById("cardint").style.display="block";
  document.getElementById("graph1").style.display="block";
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Isothermal titration calorimetry (ITC)"
    },
    axisY: {
      title: "kcal/mole",
      minimum: -10,
      maximum: 0,
      gridThickness: 0

    },
    axisX: {
      title: "Molar ratio",
      minimum: 0,
      maximum: 2,
      crosshair: {
        enabled: false
      }



    },
    data: [{

      type: "scatter",
      //dataPoints: thermogramData.map(point => ({ x: point.x, y: point.y, z: point.z, color: getColorForTemperature(point.z) }))
    }]
  });
  chart.render();
}

/*
var thermogramData = [
  { x: 1, y: 1, z: 25 },
  { x: 2, y: 1, z: 28 },
  { x: 3, y: 1, z: 30 },
  // Add more data points as needed
];

window.onload = function () {

var data = [{
  z: [thermogramData.map(point => point.z)],
  x: [thermogramData.map(point => point.x)],
  y: [thermogramData.map(point => point.y)],
  type: 'line',
  colorscale: 'Viridis'  // Choose a colorscale (you can customize this)
}];

var layout = {
  title: 'Thermogram',
  xaxis: { title: 'X-axis' },
  yaxis: { title: 'Y-axis' }
};

Plotly.newPlot('thermogramChartContainer', data, layout);

}*/
/*var thermogramData = [
  { x: 1, y: 1, z: 25 },
  { x: 2, y: 1, z: 28 },
  { x: 3, y: 1, z: 30 },
  // Add more data points as needed
];*/

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "Isothermal titration calorimetry (ITC)"
      },
      axisY: {
        title: "kcal/mole",
        minimum: -10,
        maximum: 0,
        gridThickness: 0
  
      },
      axisX: {
        title: "Molar ratio",
        minimum: 0,
        maximum: 2,
        crosshair: {
          enabled: false
        }
  
  
  
      },
      data: [{
  
        type: "scatter",
        //dataPoints: thermogramData.map(point => ({ x: point.x, y: point.y, z: point.z, color: getColorForTemperature(point.z) }))
      }]
    });
    chart.render();
   
  
  }