__d("invariant", [
    "Env",
    "fb-error-lite",
    "sprintf"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e, t, ...args) {
        if (!e) {
            let n = t;
            for(var o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++){
                a[i - 2] = arguments[i];
            }
            if (typeof n === "number") {
                const l = u(n, a);
                const { decoderLink, message } = l;
                n = message;
                a.unshift(decoderLink);
            } else if (n === undefined) {
                n = "Invariant: ";
                for(let d = 0; d < a.length; d++){
                    n += "%s,";
                }
            }
            const p = new Error(n);
            p.name = "Invariant Violation";
            p.messageFormat = n;
            p.messageParams = a.map((e)=>String(e));
            p.taalOpcodes = [
                r("fb-error-lite").TAALOpcode.PREVIOUS_FRAME
            ];
            p.stack;
            throw p;
        }
    }
    function u(t, n) {
        let message = `Minified invariant #${t}; %s`;
        if (n.length > 0) {
            message += ` Params: ${n.map((e)=>"%s").join(", ")}`;
        }
        const decoderLink = (e || (e = r("Env"))).show_invariant_decoder === true ? `visit ${c(t, n)} to see the full message.` : "";
        return {
            message,
            decoderLink
        };
    }
    function c(e, t) {
        let n = `https://www.internalfb.com/intern/invariant/${e}/`;
        if (t.length > 0) {
            n += `?${t.map((e, t)=>`args[${t}]=${encodeURIComponent(String(e))}`).join("&")}`;
        }
        return n;
    }
    l.default = s;
}, 98);