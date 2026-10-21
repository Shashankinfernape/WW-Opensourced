__d("isClickIDBlocklistSVUrlPath", [
    "ClickIDURLBlocklistSVConfig.experimental",
    "URI"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = [
        "http",
        "https"
    ];
    function u(t) {
        if (!s.includes(t.getProtocol())) {
            return false;
        }
        const n = t.getDomain();
        const o = t.getPath();
        const a = n !== null ? n + o : null;
        return r("ClickIDURLBlocklistSVConfig.experimental").block_list_url.some((n)=>{
            let o;
            if (n != null && n.startsWith("http")) {
                o = new (e || (e = r("URI")))(n);
            } else {
                o = new (e || (e = r("URI")))(`http://${n}`);
            }
            const i = o.getDomain() + o.getPath();
            const l = a != null && a === i;
            if (l) {
                const s = o.getQueryData();
                const u = t.getQueryData();
                for (const [d, m] of Object.entries(s)){
                    if (u[d] == null || u[d] !== m) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        });
    }
    l.default = u;
}, 98);