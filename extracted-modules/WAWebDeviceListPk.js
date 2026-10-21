__d("WAWebDeviceListPk", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        if (e.server === "lid" || e.server === "hosted.lid") {
            return `${e.user}@lid`;
        }
        if (e.server === "c.us" || e.server === "hosted") {
            return e.user;
        }
        if (e.server === "bot") {
            return `${e.user}@bot`;
        }
        if (e.server === "s.whatsapp.net" || e.server === "g.us" || e.server === "broadcast" || e.server === "call" || e.server === "newsletter") {
            return s(false, 'Jid %s is not fully qualified to create a device list pk, jid.server should be "c.us" or "lid"', e.toString({
                legacy: true
            }));
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e.server}`);
        })();
    }
    l.createDeviceListPK = e;
}, 98);