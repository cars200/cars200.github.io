
const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    swal.fire('Era obvio que diria que si JASKAJJAJAJAJA, ahora besito')
   
});

const noBtn = document.querySelector('#noBtn');

$noBtn.addEventListener("mouseover",function(){
   const randomX = parseInt(math.random()*100)
   const randomY = parseInt(math.random()*100)
   $noBtn.style.setProperty('top,randomX + '%` )
   $noBtn.style.setProperty('top,randomx + '%`)
   $noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});