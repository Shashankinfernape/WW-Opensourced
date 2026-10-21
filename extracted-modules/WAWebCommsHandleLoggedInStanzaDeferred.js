__d("WAWebCommsHandleLoggedInStanzaDeferred", [
    "asyncToGeneratorRuntime",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("requireDeferred")("WAWebCommsHandleLoggedInStanza").__setRef("WAWebCommsHandleLoggedInStanzaDeferred");
    let s = null;
    let u = null;
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (u == null) {
                u = e.load().then((e)=>{
                    s = e;
                    return e;
                });
            }
            return u;
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (s != null) {
                return s.handleLoggedInStanza(e, t);
            }
            const n = yield c();
            return n.handleLoggedInStanza(e, t);
        });
        return p.apply(this, arguments);
    }
    l.handleLoggedInStanza = m;
}, 98);