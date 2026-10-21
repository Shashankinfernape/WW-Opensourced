__d("WAWebSendMessageToMediaWorker", [
    "Promise",
    "WALogger",
    "WAWebMediaWorkerResource",
    "WebWorker"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c = m();
    function d(t) {
        let r;
        return new (u || (u = n("Promise")))(function(n, a) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "MediaAnalyzer:sendMessageToMediaWorker"
            ])));
            r = c && p(c) ? m() : c;
            r.setMessageHandler(function(e) {
                try {
                    if (e.type === "log") {
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "(via Milan) ",
                            ""
                        ])), e.msg);
                    } else {
                        n(e);
                    }
                } catch (error) {
                    a(error);
                }
            }).setErrorHandler(function(e) {
                const t = new Error(`Milan.onerror = ${e != null && e.message ? e.message : e}`);
                t.stack;
                a(t);
            }).execute();
            r.postMessage(t);
        }).finally(()=>{
            if (r) {
                r.terminate();
                if (!c || !c.isCurrentState("constructed")) {
                    c = m();
                }
            }
        });
    }
    function m() {
        return new (r("WebWorker"))(r("WAWebMediaWorkerResource")).setAllowCrossPageTransition(true);
    }
    function p(e) {
        return e.isCurrentState("preparing") || e.isCurrentState("executing");
    }
    l.sendMessageToMediaWorker = d;
}, 98);