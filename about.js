(function(){const menu=document.getElementById('aboutMenu');if(!menu)return;
 document.addEventListener('pointerdown',event=>{if(menu.open&&!menu.contains(event.target))menu.open=false});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.open){menu.open=false;menu.querySelector('summary').focus();event.preventDefault()}});
})();
