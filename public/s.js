(()=>{var e,a,t,c=0,l="className";function n(){e=document.getElementById("c"),a=e?e.children[2].children:null}function s(e){a&&(a[c][l]="",e(),a[c][l]="a")}function o(){s((function(){++c>=a.length&&(c=0)}))}function i(e){s((function(){--c<0&&(c=a.length-1)}))}function r(e){clearTimeout(t),e(),t=S(m,3e4)}function m(){n(),o(),t=S(m,7e3)}S=setTimeout,n(),t=S(m,7e3);const u=(e=location.pathname)=>{const a=document.querySelectorAll("#n>ul>li"),t=a[4].querySelectorAll("ul>li"),c=e.replace(/[^a-zA-Z_]/g,"");if(c)switch(a.forEach((e=>e.className="")),t.forEach((e=>e.className="")),c){case"contacts":a[1].className="active";break;case"documents":a[2].className="active";break;case"cost":a[3].className="active";break;default:switch(a[4].className="active",c){case"drink":t[0].className="active";break;case"alcohol":t[1].className="active";break;case"drug":t[2].className="active";break;case"game":t[3].className="active";break;default:t[4].className="active"}}else a[0].className="active",a[4].className=a[1].className=a[2].className=a[3].className=""};u(),addEventListener("click",(function(e){let a="";if(e.path.find((e=>a=e.pathname)),/\/[a-zA-Z_]{0,}$|^\/$/.test(a)){const t=a.split("/"),c=t[t.length-1];c.length&&1===c.split(".").length&&"/"!==c[c.length-1]&&(a+="/"),e.preventDefault(),location.pathname!==a&&location.pathname+"/"!==a&&fetch(a).then((e=>e.text())).then((e=>{try{const t=document.querySelector("body>header"),c=document.querySelector("body>h2.d"),l=document.querySelector("body>main");console.log(e.match(/<main(.+)<\/main>/)[0]),document.title=e.match(/<title(.+)<\/title>/)[0].substr(7).replace("</title>",""),c.outerHTML=e.match(/<h2 class=['|"]d['|"]>[^<]+<\/h2>/)[0],l.outerHTML=e.match(/<main(.+)<\/main>/)[0],t.outerHTML=e.match(/<header(.+)<\/header>/)[0],history.pushState(null,null,a),u(a),window.scroll(0,0)}catch{location.href=a}}))}else"»"===e.target.innerText?r(o):"«"===e.target.innerText&&r(i)}))})();