;/*FB_PKG_DELIM*/

var dataElement=document.getElementById("envjson");if(dataElement!=null){var copyVariables=function(e){for(var n in variables)e[n]=variables[n]},variables=JSON.parse(dataElement.textContent);window.requireLazy?window.requireLazy(["Env"],copyVariables):(window.Env=window.Env||{},copyVariables(window.Env))}
//# sourceURL=https://static.whatsapp.net/rsrc.php/v4/yB/r/dHbqtdrFvun.js
