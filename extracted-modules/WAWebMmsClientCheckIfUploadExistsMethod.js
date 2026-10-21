__d("WAWebMmsClientCheckIfUploadExistsMethod", [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebMmsClientIsErrorRetryable",
    "WAWebMmsClientMmsBackoffOptions",
    "WAWebMmsClientMmsCheckIfUploadExists",
    "WAWebMmsClientMmsLogError",
    "WAWebMmsClientSelectHost",
    "WAWebMmsOperationsConst",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(t) {
        return a;
        function a(e) {
            return i.apply(this, arguments);
        }
        function i() {
            i = n("asyncToGeneratorRuntime").asyncToGenerator(function*(a) {
                const { encFilehash: i, generateThumbnailOnServer: l, mediaId: c, signal: d, type: m } = a;
                let p = false;
                const _ = {
                    encFilehash: a.encFilehash,
                    type: a.type
                };
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsClient.checkIfUploadExists: start"
                ])));
                try {
                    let f = null;
                    const g = yield o("WAExponentialBackoff").exponentialBackoff(babelHelpers.extends({}, r("WAWebMmsClientMmsBackoffOptions"), {
                        signal: d
                    }), (()=>{
                        const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "mmsClient.checkIfUploadExists: attempt #",
                                ""
                            ])), n + 1);
                            yield t.networkStatus.waitIfOffline();
                            try {
                                const u = yield t.mediaHosts.getHostsInfo({
                                    operation: r("WAWebMmsOperationsConst").UPLOAD,
                                    encFilehash: i,
                                    type: m,
                                    signal: d
                                });
                                const { auth: _, fallbackHost: g, selectedHost: h } = u;
                                const y = r("WAWebMmsClientSelectHost")({
                                    selectedHost: h,
                                    fallbackHost: g,
                                    lastHostUsed: f,
                                    attemptCount: n,
                                    lastFetchMadeProgress: p
                                });
                                f = y;
                                return yield r("WAWebMmsClientMmsCheckIfUploadExists")({
                                    auth: _,
                                    encFilehash: i,
                                    hostname: y.hostname,
                                    type: m,
                                    signal: d,
                                    onProgress: function() {
                                        p = true;
                                    },
                                    mediaId: c,
                                    token: a.token,
                                    generateThumbnailOnServer: l
                                });
                            } catch (t) {
                                const C = r("getErrorSafe")(t);
                                if (o("WAWebMmsClientIsErrorRetryable").isErrorRetryable(C)) {
                                    return e(C);
                                }
                                throw C;
                            }
                        });
                        return function(t, n) {
                            return e.apply(this, arguments);
                        };
                    })());
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "mmsClient.checkIfUploadExists: success"
                    ])));
                    return g;
                } catch (e) {
                    const h = r("getErrorSafe")(e);
                    o("WAWebMmsClientMmsLogError").mmsLogError({
                        debug: _,
                        error: h,
                        source: "mmsClient.checkIfUploadExists"
                    });
                    throw h;
                }
            });
            return i.apply(this, arguments);
        }
    }
    l.createCheckIfUploadExistsWithDependencies = c;
}, 98);