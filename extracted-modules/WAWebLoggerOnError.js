__d("WAWebLoggerOnError", [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebCrashlog",
    "WAWebDbErrors",
    "WAWebLoggerImpl",
    "WAWebNoop",
    "WAWebUim",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = [
        {
            partialMsg: "webpackJsonp is not defined"
        },
        {
            partialMsg: "WUPE is not defined"
        },
        {
            partialMsg: "spectrum is not a function"
        },
        {
            partialMsg: "evaluating 'document.getElementsByClassName('_3B9bf')"
        },
        {
            partialMsg: "onWebLoad is not defined"
        },
        {
            partialMsg: "SyntaxError: Identifier 'ZapSuiteSvgIcons' has already been declared"
        },
        {
            partialMsg: "SyntaxError: Identifier 'SuiteFunil' has already been declared"
        },
        {
            partialMsg: "SyntaxError: Identifier 'DBZapSuite' has already been declared"
        },
        {
            partialMsg: "Identifier 'newMakeStore' has already been declared"
        }
    ];
    const c = [
        {
            partialUserAgent: "Chrome",
            partialMsg: "ResizeObserver loop limit exceeded"
        },
        {
            partialUserAgent: "",
            partialMsg: "Failed to execute 'put' on 'Cache'"
        }
    ];
    const d = [
        {
            partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
            partialMsg: "Cannot read property 'style' of null"
        },
        {
            partialUserAgent: "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36",
            partialMsg: "Unexpected token :"
        },
        {
            partialUserAgent: "Firefox/52.0,,Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.4) Gecko/20100101 Firefox/52.0",
            partialMsg: "Cannot read property 'style' of undefined"
        },
        {
            partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15",
            partialMsg: "is not an object"
        },
        {
            partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
            partialMsg: "Cannot read property 'getElementsByTagName' of undefined"
        },
        {
            partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
            partialMsg: "Can't find variable: dismissKeyboard"
        },
        {
            partialUserAgent: "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36",
            partialMsg: "ReferenceError: None is not defined"
        },
        {
            partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
            partialMsg: "Cannot read properties of null (reading 'style')"
        },
        {
            partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
            partialMsg: "Cannot read properties of undefined (reading 'getElementsByTagName')"
        },
        {
            partialUserAgent: "Chrome/60.0.3112.113",
            partialMsg: "Cannot read properties of null (reading 'removeChild')"
        },
        {
            partialUserAgent: "Chrome/60.0.3112.113",
            partialMsg: "Cannot read properties of undefined (reading 'isSettingDark')"
        },
        {
            partialUserAgent: "Chrome/60.0.3112.113",
            partialMsg: "TypeError: Cannot read properties of null (reading 'children')"
        }
    ];
    const m = window.navigator.userAgent;
    function p(e) {
        const t = [
            o("WAWebDbErrors").DbOnLogoutAbort,
            o("WAWebDbErrors").DbClosedOnTakeover,
            o("WAWebDbErrors").DbNotFoundOnTakeover
        ];
        return !t.some((t)=>e instanceof t);
    }
    function _(e) {
        const t = [].concat(c);
        if (r("gkx")("26258")) {
            t.push(...d);
        }
        return t.some(({ partialMsg: n, partialUserAgent: r })=>m.includes(r) && String(e).includes(n));
    }
    function f(e, t) {
        const n = u.some(({ partialMsg: n })=>String(e).includes(n));
        return n || t instanceof Error && t.stack != null && t.stack.includes("evalmachine.<anonymous>");
    }
    function g(e) {
        return e instanceof Error && e.stack != null && e.stack.includes("chrome-extension://");
    }
    function h(t, n, a, i, l) {
        if (_(t)) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Ignored Error: ",
                ""
            ])), t || (l || "").toString());
            return true;
        }
        try {
            o("WAWebUim").UIM.pprint(true);
        } catch (e) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "UIM Print Failed!"
            ])));
        }
        const u = n.split("?")[0];
        let c;
        if (u && typeof a === "number") {
            c = ` (${u}:${a}:${i})`;
        } else if (u) {
            c = ` (${u})`;
        } else {
            c = "";
        }
        if (t === "Script error." && !l) {
            o("WAWebLoggerImpl").Logger.logUncaughtError(`${c} ${t}`);
            if (!o("WAWebCoreActionsODS").isPageLoadComplete()) {
                o("WAWebCoreActionsODS").logPageLoadErrorJsException();
            }
            if (u) {
                o("WAWebCrashlog").upload({
                    reason: "script-error",
                    hasTaggedMessage: true,
                    sendLogsType: o("WALogger").SendLogsType.UNCAUGHT_EXCEPTION
                }).catch(r("WAWebNoop"));
            }
            return false;
        }
        const d = l instanceof Error && l.stack ? l : `${t || `Given: ${String(l)}`}`;
        const m = o("WAWebLoggerImpl").Logger.logUncaughtError(d);
        if (!(!p(l) || f(t, l) || g(l))) {
            if (!o("WAWebCoreActionsODS").isPageLoadComplete()) {
                o("WAWebCoreActionsODS").logPageLoadErrorJsException();
            }
            o("WAWebCrashlog").upload({
                reason: m,
                hasTaggedMessage: true,
                sendLogsType: o("WALogger").SendLogsType.UNCAUGHT_EXCEPTION
            }).catch(r("WAWebNoop"));
        }
        return r("gkx")("26258");
    }
    function y({ promise: t, reason: n }) {
        const a = o("WAWebLoggerImpl").Logger.logUncaughtError(n, t);
        if (p(n)) {
            if (!o("WAWebCoreActionsODS").isPageLoadComplete()) {
                o("WAWebCoreActionsODS").logPageLoadErrorUnhandledRejection();
            }
            o("WAWebCrashlog").upload({
                reason: a,
                hasTaggedMessage: true,
                sendLogsType: o("WALogger").SendLogsType.UNHANDLED_REJECTED_PROMISE
            }).catch(r("WAWebNoop"));
        }
    }
    l.onErrorHandler = h;
    l.onUnhandledPromiseRejection = y;
}, 98);