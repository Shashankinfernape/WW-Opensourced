;
const dataElement = document.getElementById("envjson");
if (dataElement != null) {
    const copyVariables = function(e) {
        for(const n in variables){
            e[n] = variables[n];
        }
    };
    var variables = JSON.parse(dataElement.textContent);
    if (window.requireLazy) {
        window.requireLazy([
            "Env"
        ], copyVariables);
    } else {
        window.Env = window.Env || {};
        copyVariables(window.Env);
    }
}
