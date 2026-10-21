__d("WABase64Equal", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        const e_length = e.length;
        const t_length = t.length;
        switch(e_length - t_length){
            case -2:
                return t.charCodeAt(e_length) === 61 && t.charCodeAt(e_length + 1) === 61 && t.substr(0, e_length) === e;
            case -1:
                return t.charCodeAt(e_length) === 61 && t.substr(0, e_length) === e;
            case 0:
                return e === t;
            case 1:
                return e.charCodeAt(t_length) === 61 && e.substr(0, t_length) === t;
            case 2:
                return e.charCodeAt(t_length) === 61 && e.charCodeAt(t_length + 1) === 61 && e.substr(0, t_length) === t;
            default:
                return false;
        }
    }
    i.b64Equal = e;
}, 66);