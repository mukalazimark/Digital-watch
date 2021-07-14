let hrs=document.getElementById('hours');
let mins=document.getElementById('mins');
let secs=document.getElementById('secs');
var date = new Date();
// getting time
window.addEventListener('load', function () {
  hrs.innerHTML=date.getHours();
mins.innerHTML=date.getMinutes();
})

// blinking ":"
let s=date.getSeconds();
let update = setInterval(()=>{
	secs.classList.toggle('display');
s+=1;
console.log(s);
// updating minutes
if(s==60){
	location.reload();
	s=0;
}
// updating hours
if(mins==60){
	location.reload();
}
},1000);

