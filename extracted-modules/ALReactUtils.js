__d("ALReactUtils", [
    "FBLogger",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = function() {
        return true;
    };
    const s = (t)=>{
        const e = Object.keys(t).find((e)=>e.startsWith("__reactFiber$"));
        if (e != null) {
            return t[e];
        }
        return null;
    };
    const u = (t)=>{
        const r = t.displayName ?? t.name;
        if (r == null) {
            return null;
        }
        const o = r.match(/.*\[from (.*)\.react\]/);
        return o?.[1] ?? r;
    };
    function c(t, n) {
        if (t == null) {
            r("FBLogger")("ads_manager_auto_logging").warn("[AL] Null element passed to getReactComponentName_THIS_CAN_BREAK.");
            return null;
        }
        const o = n || e;
        try {
            for(let i = s(t); i;){
                const l = i.type;
                if (l == null || typeof l === "string") {
                    i = i.return;
                    continue;
                }
                let c = u(l);
                if (c == null && l.render != null) {
                    c = u(l.render);
                }
                if (c != null && c !== "" && o(c)) {
                    return c;
                }
                i = i.return;
            }
        } catch (error) {
            const d = r("getErrorSafe")(error);
            r("FBLogger")("ads_manager_auto_logging").catching(d).warn("[AL] Caught exception in getReactComponentName_THIS_CAN_BREAK.");
            return null;
        }
    }
    l.getReactComponentName_THIS_CAN_BREAK = c;
}, 98);