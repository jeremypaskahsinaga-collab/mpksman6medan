
setTimeout(()=>{
document.getElementById('s1').classList.remove('active');
document.getElementById('s2').classList.add('active');
},2200);
function next(){
document.body.innerHTML='<div style="display:flex;height:100vh;justify-content:center;align-items:center;background:#111;color:#fff;font-family:Arial"><div><h2>Mengoptimalkan tampilan...</h2></div></div>';
setTimeout(()=>location.href='home.html',1800);
}
