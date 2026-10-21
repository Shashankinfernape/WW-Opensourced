__d("WAWebBulkChatAction", [
    "Promise",
    "WALogger",
    "WAPromiseEach",
    "WAWebActionToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = c || (c = o("react"));
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, { failureToast, itemFailedLogTag, operation, partialFailureLogTag, successToast }) {
            const m = Array.from(new Set(t));
            const p = yield o("WAPromiseEach").promiseEach(m, (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    try {
                        const success = yield operation(t);
                        return {
                            chat: t,
                            success,
                            error: null
                        };
                    } catch (error) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Bulk chat action threw for one chat"
                        ]))).catching(r("getErrorSafe")(error)).sendLogs(itemFailedLogTag);
                        return {
                            chat: t,
                            success: false,
                            error
                        };
                    }
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })());
            const successes = [];
            const failures = [];
            p.forEach((e)=>{
                if (e.success) {
                    successes.push(e.chat);
                } else {
                    failures.push({
                        chat: e.chat,
                        error: e.error
                    });
                }
            });
            if (successes.length > 0) {
                _(successToast(successes.length));
            }
            if (failures.length > 0) {
                _(failureToast(failures.length));
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Bulk chat action failed for ",
                    " out of ",
                    " chats"
                ])), failures.length, m.length).sendLogs(partialFailureLogTag);
            }
            return {
                successes,
                failures
            };
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        const t = new (o("WAWebActionToast.react")).ActionType(e);
        o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: t,
            pendingAction: (u || (u = n("Promise"))).resolve(t)
        }));
    }
    l.runBulkChatAction = m;
}, 98);