// Plein écran : au premier toucher/clic dans le jeu + bouton ⛶ pour basculer.
(function(){
  var d=document, e=d.documentElement;
  function fs(){ return d.fullscreenElement||d.webkitFullscreenElement; }
  function go(){ var f=e.requestFullscreen||e.webkitRequestFullscreen; if(f&&!fs()){ try{ var p=f.call(e,{navigationUI:"hide"}); if(p&&p.catch)p.catch(function(){}); if(screen.orientation&&screen.orientation.lock)screen.orientation.lock("landscape").catch(function(){}); }catch(x){} } }
  function quit(){ var f=d.exitFullscreen||d.webkitExitFullscreen; if(f&&fs())f.call(d); }
  d.addEventListener("pointerdown", function once(){ go(); d.removeEventListener("pointerdown", once, true); }, true);
  d.addEventListener("DOMContentLoaded", function(){
    if(!(e.requestFullscreen||e.webkitRequestFullscreen)) return;
    var b=d.createElement("button"); b.textContent="⛶"; b.title="Plein écran";
    b.style.cssText="position:fixed;top:8px;right:8px;z-index:9999;width:40px;height:40px;border:0;border-radius:10px;background:rgba(0,0,0,.45);color:#ffb347;font-size:22px;cursor:pointer;opacity:.7";
    b.addEventListener("pointerdown", function(ev){ ev.stopPropagation(); fs()?quit():go(); }, true);
    d.body.appendChild(b);
  });
})();
