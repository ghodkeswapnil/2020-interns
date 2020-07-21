var canvas = document.getElementById("mycanvas");
	canvas.width=900;
	canvas.height=550;
	let xGrid=10;
	let yGrid=10;
	let ctx=canvas.getContext('2d');
let data={
"INR": 81.8395,
"EUR":90}

const entries= Object.entries(data);
function drawGrids()
{
 	ctx.beginPath();

 	while(xGrid<canvas.height)
	{
		ctx.moveTo(0,xGrid);
		ctx.lineTo(canvas.width,xGrid);
		xGrid+=10;
	}

	while(yGrid<canvas.width)
	{
		ctx.moveTo(yGrid,0);
		ctx.lineTo(yGrid,canvas.height);
		yGrid+=10;
	}
	 ctx.strokeStyle = "gray";
	ctx.stroke();

}
function blocks(count){
	return count*10;
}

function drawAxis(){
yplot=50;
pop=70;
ctx.beginPath();
 ctx.strokeStyle = "black";
ctx.moveTo(blocks(5),blocks(5));
ctx.lineTo(blocks(5),blocks(50));
ctx.lineTo(blocks(80),blocks(50));
ctx.moveTo(blocks(5),blocks(50));
for(let i=1;i<=40;i++){
ctx.strokeText(pop,blocks(2),blocks(yplot));
yplot-=1;
pop+=1;

}

ctx.strokeText("INR",blocks(50),blocks(50));
 ctx.strokeStyle = "red";
ctx.stroke();
}

function drawChart(){
ctx.beginPath();
 ctx.strokeStyle = "black";
ctx.moveTo(blocks(5),blocks(50));
var xPlot=10;
for(const [country,population] of entries){
var populationinblocks=population-70;
ctx.strokeText(country,blocks(xPlot),blocks(50));
ctx.lineTo(blocks(xPlot),blocks(50-populationinblocks));
ctx.arc(blocks(xPlot),blocks(50-populationinblocks),2,0,Math.PI*2,true);
xPlot+=5;
}
ctx.stroke();

}
drawGrids();
drawAxis();
drawChart();

