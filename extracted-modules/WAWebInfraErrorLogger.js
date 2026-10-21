__d("WAWebInfraErrorLogger", [
    "ErrorNormalizeUtils",
    "ErrorPubSub",
    "WALogger",
    "WALoggerUtils",
    "WAWebFBLogger",
    "WAWebLogLineSanitizer",
    "err",
    "justknobx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = [
        {
            partialMessage: 'Converting to a string will drop content data. Hash="undefined"'
        },
        {
            partialMessage: "Failed to preload resource"
        },
        {
            partialMessage: "Invalid bootloader response 0"
        }
    ];
    const c = [
        "ONUNHANDLEDREJECTION",
        "ONERROR",
        "PROMISE_DONE",
        "REACT_FIBER",
        "DEPRECATED"
    ];
    const d = /^(?:[a-z][a-z\d+.-]*:|\/\/)/i;
    function m(e) {
        if (e == null || !d.test(e)) {
            return e;
        }
        const t = e.indexOf("?");
        const n = e.indexOf("#");
        let r = t;
        if (r === -1 || n !== -1 && n < r) {
            r = n;
        }
        if (r === -1) {
            return e;
        }
        return e.slice(0, r);
    }
    function p(e) {
        return e.stackFrames.map((e)=>o("WAWebLogLineSanitizer").sanitizeLine(r("ErrorNormalizeUtils").formatStackFrame(babelHelpers.extends({}, e, {
                script: m(e.script)
            })))).join("\n");
    }
    function _({ message: t, project: n, source: r }) {
        if (c.includes(r) || o("WAWebFBLogger").PROJECT.includes(n)) {
            return true;
        }
        return u.some(({ partialMessage: n })=>String(t).includes(n));
    }
    function f() {
        const t = r("justknobx")._("860");
        if (t !== 0) {
            const n = o("WALoggerUtils").dynamicLoggingSampling(t / 100);
            (s || (s = r("ErrorPubSub"))).addListener(function(t, a) {
                if (!(t.type === "debug" || t.type === "info")) {
                    const l = _({
                        message: t.message,
                        project: t.project ?? "",
                        source: a
                    });
                    if (!l) {
                        const u = r("err")(o("WAWebLogLineSanitizer").sanitizeLine(t.message));
                        u.forcedKey = t.forcedKey == null ? void 0 : o("WAWebLogLineSanitizer").sanitizeLine(t.forcedKey);
                        u.messageFormat = o("WAWebLogLineSanitizer").sanitizeLine(t.messageFormat);
                        u.messageParams = t.messageParams.map(o("WAWebLogLineSanitizer").sanitizeLine);
                        u.name = o("WAWebLogLineSanitizer").sanitizeLine(t.name ?? "Error");
                        u.stack = p(t);
                        u.taalOpcodes = t.taalOpcodes == null ? void 0 : [].concat(t.taalOpcodes);
                        const c = t.type === "warn" ? o("WALogger").WARN : o("WALogger").ERROR;
                        c(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[ErrorPubSub]"
                        ]))).catching(u).sendLogs("error-pubsub", {
                            sampling: n
                        }).tags("ErrorPubSub");
                    }
                }
            });
        }
    }
    l.addListenerToErrorPubSub = f;
}, 98);