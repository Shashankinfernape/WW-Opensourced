__d("WAWebMmsClientMmsCheckIfUploadExists", [
    "WALogger",
    "WAWebHttpErrors",
    "WAWebMmsClientErrors",
    "WAWebMmsClientMmsGetUploadProgress",
    "WAWebMmsClientMmsLogError",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = "complete";
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = {
                encFilehash: t.encFilehash,
                type: t.type
            };
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "mmsCheckIfUploadExists: start"
            ])));
            try {
                const a = yield r("WAWebMmsClientMmsGetUploadProgress")(t);
                const { directPath: i, handle: l, resume: d, url: m } = a;
                if (d === c) {
                    if (i == null || i === "") {
                        throw new (o("WAWebHttpErrors")).HttpInvalidResponseError("mmsCheckIfUploadExists: missing directPath");
                    }
                    if (m == null || m === "") {
                        throw new (o("WAWebHttpErrors")).HttpInvalidResponseError("mmsCheckIfUploadExists: missing url");
                    }
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "mmsCheckIfUploadExists: success"
                    ])));
                    return {
                        directPath: i,
                        url: m,
                        handle: l,
                        complete: true
                    };
                }
                const p = parseInt(d, 10);
                if (p === 0) {
                    throw new (o("WAWebMmsClientErrors")).MediaNotFoundError("mmsCheckIfUploadExists");
                }
                if (Number.isNaN(p)) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "mmsCheckIfUploadExists: resume is NaN, resume=",
                        ""
                    ])), p).sendLogs("upload-offset-is-NaN");
                    throw new (o("WAWebHttpErrors")).HttpInvalidResponseError("mmsCheckIfUploadExists: invalid resume");
                }
                return {
                    complete: false,
                    resume: p
                };
            } catch (e) {
                o("WAWebMmsClientMmsLogError").mmsLogError({
                    debug: n,
                    error: e,
                    source: "mmsCheckIfUploadExists"
                });
                throw e;
            }
        });
        return m.apply(this, arguments);
    }
    l.default = d;
}, 98);