
(function(){
  const links=[...document.querySelectorAll('.top-nav a')];
  const active=links.find(a=>a.classList.contains('active'));
  if(active){
    const nav=document.querySelector('.top-nav');
    requestAnimationFrame(()=>{nav.scrollLeft=active.offsetLeft-24;});
  }
})();
