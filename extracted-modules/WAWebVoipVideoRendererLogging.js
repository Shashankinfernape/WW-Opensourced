__d("WAWebVoipVideoRendererLogging", [
    "WALogger",
    "WAWebRuntimeEnvironmentUtils",
    "WorkerMessagePort"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d = null;
    if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
        d = new (o("WorkerMessagePort")).WorkerMessagePort(self, "WAWebVoipVideoRendererWorker");
    }
    function m(level, t, ...r) {
        const i = String.raw({
            raw: t
        }, ...r);
        if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
            d?.postMessage({
                type: "loggingCallback",
                level,
                message: i
            });
        } else {
            p(level, i);
        }
    }
    function p(t, n) {
        switch(t){
            case 1:
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), n);
                break;
            case 2:
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), n);
                break;
            case 3:
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), n);
                break;
            case 4:
            default:
                o("WALogger").DEV(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    ""
                ])), n);
                break;
        }
    }
    function _(e, ...n) {
        m(1, e, ...n);
    }
    function f(e, ...n) {
        m(2, e, ...n);
    }
    function g(e, ...n) {
        m(3, e, ...n);
    }
    function h(e, ...n) {
        m(4, e, ...n);
    }
    l.handleLog = p;
    l.ERROR = _;
    l.WARN = f;
    l.LOG = g;
    l.DEV = h;
}, 98);