(()=>{"use strict";const t=[{x:10,y:11},{x:11,y:11},{x:12,y:11}];let e=[{x:0,y:0}];console.log("add food");let o=document.getElementById("game-board");setInterval((function(){var d;d=o,t.forEach((t=>{const e=document.createElement("div");e.classList.add("snake"),e.style.gridRowStart=t.y,e.style.gridColumnStart=t.x,d.appendChild(e)})),console.log(t),function(t){e.forEach((e=>{const o=document.createElement("div");o.classList.add("food"),o.style.gridRowStart=e.y,o.style.gridColumnStart=e.x,t.appendChild(o)})),console.log(e)}(o)}),1500)})();