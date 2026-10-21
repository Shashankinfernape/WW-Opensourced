__d("WAWebUsyncBackoff", [
    "Promise",
    "WALogger"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = new Map;
    function d(t, r) {
        o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "usync: ",
            " protocol: ",
            "ms backoff started"
        ])), t, r);
        c.set(t, new (u || (u = n("Promise")))(function(e) {
            return self.setTimeout(e, r);
        }).then(()=>{
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "usync: ",
                " protocol: ",
                "ms backoff ended"
            ])), t, r);
        }));
    }
    function m(e) {
        if (p(e)) {
            return (u || (u = n("Promise"))).all(e.protocols.map((e)=>c.get(e.getName())));
        }
        return (u || (u = n("Promise"))).resolve();
    }
    function p(e) {
        if (e.context === "interactive") {
            return false;
        }
        const t = e.protocols.map((e)=>e.getName());
        return !(t.includes("devices") && (e.context === "message" || e.context === "voip"));
    }
    l.setProtocolBackoffMs = d;
    l.waitForBackoff = m;
}, 98);