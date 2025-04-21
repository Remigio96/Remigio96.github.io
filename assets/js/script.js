// -------- Cursor estilizado --------
const cursor   = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

(function animateCursor(){
  posX += (mouseX - posX) / 8;
  posY += (mouseY - posY) / 8;
  cursor.style.transform   = `translate(${mouseX}px, ${mouseY}px)`;
  follower.style.transform = `translate(${posX}px, ${posY}px)`;
  requestAnimationFrame(animateCursor);
})();

document.querySelectorAll('a, button, .contact-btn').forEach(el=>{
  el.addEventListener('mouseenter', ()=> document.body.classList.add('hover-effect'));
  el.addEventListener('mouseleave', ()=> document.body.classList.remove('hover-effect'));
});