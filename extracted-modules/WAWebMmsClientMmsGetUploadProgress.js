__d("WAWebMmsClientMmsGetUploadProgress", [
    "WALogger",
    "WAWebHttpErrors",
    "WAWebHttpExtendedFetch",
    "WAWebMmsClientErrors",
    "WAWebMmsClientFormatUploadUrl",
    "WAWebMmsClientMmsLogError",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ auth: n, encFilehash: a, generateThumbnailOnServer: i, hostname: l, mediaId: u, onProgress: c, signal: d, token: m, type: p }) {
            const _ = r("WAWebMmsClientFormatUploadUrl")({
                auth: n,
                encFilehash: a,
                hostname: l,
                query: {
                    resume: 1,
                    server_thumb_gen: i === true ? 1 : void 0
                },
                type: p,
                mediaId: u,
                token: m
            });
            const f = {
                encFilehash: a,
                type: p,
                url: _
            };
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "mmsGetUploadProgress: start"
            ])));
            try {
                const g = yield o("WAWebHttpExtendedFetch").extendedFetch(_, {
                    method: "post",
                    signal: d,
                    onProgress: c
                });
                if (!g.ok) {
                    e: throw g.status === 401 ? new (o("WAWebMmsClientErrors")).MMSUnauthorizedError("mmsGetUploadProgress", {
                        url: _
                    }) : g.status === 404 ? new (o("WAWebMmsClientErrors")).MediaNotFoundError("mmsGetUploadProgress", {
                        url: _
                    }) : new (o("WAWebHttpErrors")).HttpStatusCodeError(g.status, "mmsGetUploadProgress", {
                        url: _
                    });
                }
                const h = yield g.json();
                if (!h.resume) {
                    throw new (o("WAWebHttpErrors")).HttpInvalidResponseError("mmsGetUploadProgress: missing resume", {
                        url: _
                    });
                }
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsGetUploadProgress: success"
                ])));
                return {
                    directPath: h.direct_path,
                    resume: h.resume,
                    url: h.url,
                    handle: h.handle
                };
            } catch (e) {
                o("WAWebMmsClientMmsLogError").mmsLogError({
                    debug: f,
                    error: e,
                    source: "mmsUpload"
                });
                throw e;
            }
        });
        return c.apply(this, arguments);
    }
    l.default = u;
}, 98);