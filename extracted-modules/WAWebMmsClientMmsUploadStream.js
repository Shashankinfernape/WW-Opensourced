__d("WAWebMmsClientMmsUploadStream", [
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
    function u(e, t, n) {
        e: throw e === 401 ? new (o("WAWebMmsClientErrors")).MMSUnauthorizedError(t, {
            url: n
        }) : e === 413 ? new (o("WAWebMmsClientErrors")).MediaTooLargeError(t, {
            url: n
        }) : e === 415 ? new (o("WAWebMmsClientErrors")).MediaInvalidError(`${t}: hash mismatch`, {
            url: n
        }) : e === 507 ? new (o("WAWebMmsClientErrors")).MMSThrottleError("mmsUploadStreamFinalize", {
            url: n
        }) : new (o("WAWebHttpErrors")).HttpStatusCodeError(e, t, {
            url: n
        });
    }
    function c({ auth: t, byteEnd: n, byteStart: a, chunk: i, encFilehash: l, generateThumbnailOnServer: s, hostname: c, mediaId: d, onProgress: m, signal: p, token: _, type: f }) {
        const g = r("WAWebMmsClientFormatUploadUrl")({
            auth: t,
            encFilehash: l,
            type: f,
            hostname: c,
            query: {
                stream: 1,
                server_thumb_gen: s === true ? 1 : void 0
            },
            byteRange: {
                start: a,
                end: n
            },
            mediaId: d,
            token: _
        });
        return o("WAWebHttpExtendedFetch").extendedFetch(g, {
            method: "post",
            body: i,
            signal: p,
            onProgress: m
        }).then((e)=>{
            if (!e.ok) {
                u(e.status, "mmsUploadStream", g);
            }
        });
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ auth: n, encFilehash: a, finalHash: i, generateThumbnailOnServer: l, hostname: c, mediaId: d, signal: m, type: p }) {
            const _ = r("WAWebMmsClientFormatUploadUrl")({
                auth: n,
                encFilehash: a,
                type: p,
                hostname: c,
                query: {
                    stream: 1,
                    final_hash: i,
                    server_thumb_gen: l === true ? 1 : void 0
                },
                mediaId: d,
                token: a
            });
            const f = {
                encFilehash: a,
                type: p,
                url: _
            };
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "mmsUploadStreamFinalize: start"
            ])));
            try {
                const g = yield o("WAWebHttpExtendedFetch").extendedFetch(_, {
                    method: "post",
                    signal: m
                }).then((e)=>{
                    if (!e.ok) {
                        u(e.status, "mmsUploadStreamFinalize", _);
                    }
                    return e.json();
                }).then((e)=>{
                    if (e.direct_path == null || e.direct_path === "") {
                        throw new (o("WAWebHttpErrors")).HttpInvalidResponseError("mmsUploadStreamFinalize: missing direct_path");
                    }
                    if (e.url == null || e.url === "") {
                        throw new (o("WAWebHttpErrors")).HttpInvalidResponseError("mmsUploadStreamFinalize: missing url");
                    }
                    return {
                        directPath: e.direct_path,
                        url: e.url,
                        handle: e.handle
                    };
                });
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsUploadStreamFinalize: success"
                ])));
                return g;
            } catch (e) {
                o("WAWebMmsClientMmsLogError").mmsLogError({
                    debug: f,
                    error: e,
                    hasExpectedErrors: false,
                    source: "mmsUpload"
                });
                throw e;
            }
        });
        return m.apply(this, arguments);
    }
    l.mmsUploadStream = c;
    l.mmsUploadStreamFinalize = d;
}, 98);