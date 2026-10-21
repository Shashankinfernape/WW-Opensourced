__d("WASuspiciousLinks", [
    "WAIdn",
    "WAJids",
    "WAPhoneFindCC"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = /^(?:https?:\/\/)?([^/?#]+)(?:[/?#]|$)/i;
    const s = "ZZ";
    function u(t, n, r, a) {
        const i = t.match(e);
        const l = i && i[1];
        if (l == null) {
            return null;
        }
        const u = o("WAPhoneFindCC").phoneCC(r);
        let c;
        if (n === "whatsapp") {
            c = "";
        } else {
            const d = o("WAJids").interpretAndValidateJid(n.toString());
            c = d.jidType !== "lidUser" ? o("WAPhoneFindCC").phoneCC(o("WAJids").toPhoneUserJid(n)) : s;
        }
        const m = a.map((e)=>e.toLowerCase());
        return o("WAIdn").findSuspiciousCharacters(l, c, u, m);
    }
    l.findSuspiciousCharacters = u;
}, 98);