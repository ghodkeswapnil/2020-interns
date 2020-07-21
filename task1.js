 var canvas = document.getElementById("mycanvas");
	canvas.width=900;
	canvas.height=550;
	let xGrid=10;
	let yGrid=10;
	let ctx=canvas.getContext('2d');
let data={
"2-jan":79.9855,
"3-jan":79.608,
"4-jan":79.4315,
"7-jan":79.6895,
"8-jan":80.245,
"9-jan":80.6365,
"10-jan":81.2005,
"11-jan":81.3475,
"14-jan":81.2195,
"15-jan":81.231,
"16-jan":81.0055,
"17-jan":80.9765,
"18-jan":81.0875,
"21-jan":80.9335,
"22-jan":81.046,
"23-jan":81.0535,
"24-jan":80.656,
"25-jan":80.634,
"28-jan":81.232,
"29-jan":81.306,
"30-jan":81.351,
"31-jan":81.686













}
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
ctx.moveTo(blocks(4),blocks(4));
ctx.lineTo(blocks(4),blocks(50));
ctx.lineTo(blocks(100),blocks(50));
ctx.moveTo(blocks(4),blocks(50));
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
ctx.moveTo(blocks(4),blocks(50));
var xPlot=6;
for(const [country,population] of entries){
var populationinblocks=population-70;
ctx.strokeText(country,blocks(xPlot),blocks(50-populationinblocks-2));
ctx.lineTo(blocks(xPlot),blocks(50-populationinblocks));
ctx.arc(blocks(xPlot),blocks(50-populationinblocks),2,0,Math.PI*2,true);
xPlot+=3;
}
ctx.stroke();

}
drawGrids();
drawAxis();
drawChart();



