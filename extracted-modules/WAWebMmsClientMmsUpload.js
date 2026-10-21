__d("WAWebMmsClientMmsUpload", [
    "WALogger",
    "WAWebHttpErrors",
    "WAWebHttpExtendedFetch",
    "WAWebMmsClientErrors",
    "WAWebMmsClientFormatUploadUrl",
    "WAWebMmsClientMmsLogError",
    "WAWebMmsMediaTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        if (e.direct_path == null || e.direct_path === "") {
            throw new (o("WAWebHttpErrors")).HttpInvalidResponseError("mmsUpload: missing direct_path");
        }
        if (e.url == null || e.url === "") {
            throw new (o("WAWebHttpErrors")).HttpInvalidResponseError("mmsUpload: missing url");
        }
        return {
            directPath: e.direct_path,
            url: e.url,
            handle: e.handle,
            thumbnailDirectPath: e.thumbnail_info?.thumbnail_direct_path,
            thumbnailSha256: e.thumbnail_info?.thumbnail_sha256,
            metadataUrl: e.metadata_url,
            dashManifestUrl: e.dash_manifest_url
        };
    }
    function c(e) {
        if (e.ts == null) {
            throw new (o("WAWebHttpErrors")).HttpInvalidResponseError("mmsUpload: missing ts (timestamp)");
        }
        if (e.meta_hmac == null) {
            throw new (o("WAWebHttpErrors")).HttpInvalidResponseError("mmsUpload: missing meta_hmac");
        }
        if (e.fbid == null) {
            throw new (o("WAWebHttpErrors")).HttpInvalidResponseError("mmsUpload: missing fbid");
        }
        return {
            directPath: "",
            url: "",
            ts: e.ts,
            metaHmac: e.meta_hmac,
            fbid: e.fbid
        };
    }
    function d(e) {
        if (e.direct_path == null || e.direct_path === "") {
            throw new (o("WAWebHttpErrors")).HttpInvalidResponseError("mmsUpload: missing direct_path");
        }
        if (e.url == null || e.url === "") {
            throw new (o("WAWebHttpErrors")).HttpInvalidResponseError("mmsUpload: missing url");
        }
        if (e.fbid == null) {
            throw new (o("WAWebHttpErrors")).HttpInvalidResponseError("mmsUpload: missing fbid");
        }
        return {
            directPath: e.direct_path,
            url: e.url,
            fbid: e.fbid
        };
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const { auth: n, byteRange: a, ciphertextHmac: i, encFilehash: l, generateThumbnailOnServer: m, hostname: p, mediaId: _, onProgress: f, signal: g, type: h } = t;
            const y = r("WAWebMmsClientFormatUploadUrl")({
                auth: n,
                encFilehash: l,
                hostname: p,
                type: h,
                byteRange: a,
                mediaId: _,
                token: t.token,
                query: {
                    server_thumb_gen: m === true ? 1 : void 0
                }
            });
            const C = {
                encFilehash: l,
                type: h,
                url: y
            };
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "mmsUpload: start"
            ])));
            try {
                const b = h === o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_IMAGE || h === o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_VIDEO ? d : h === o("WAWebMmsMediaTypes").MEDIA_TYPES.BIZ_COVER_PHOTO ? c : u;
                const v = yield o("WAWebHttpExtendedFetch").extendedFetch(y, {
                    method: "post",
                    body: i,
                    signal: g,
                    onProgress: f
                }).then((e)=>{
                    if (!e.ok) {
                        switch(e.status){
                            case 401:
                                throw new (o("WAWebMmsClientErrors")).MMSUnauthorizedError("mmsUpload", {
                                    url: y
                                });
                            case 413:
                                throw new (o("WAWebMmsClientErrors")).MediaTooLargeError("mmsUpload", {
                                    url: y
                                });
                            case 415:
                                throw new (o("WAWebMmsClientErrors")).MediaInvalidError("mmsUpload: hash mismatch", {
                                    url: y
                                });
                            case 507:
                                throw new (o("WAWebMmsClientErrors")).MMSThrottleError("mmsUpload", {
                                    url: y
                                });
                            default:
                                throw new (o("WAWebHttpErrors")).HttpStatusCodeError(e.status, "mmsUpload", {
                                    url: y
                                });
                        }
                    }
                    return e.json();
                }).then(b);
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsUpload: success"
                ])));
                return v;
            } catch (e) {
                o("WAWebMmsClientMmsLogError").mmsLogError({
                    debug: C,
                    error: e,
                    hasExpectedErrors: false,
                    source: "mmsUpload"
                });
                throw e;
            }
        });
        return p.apply(this, arguments);
    }
    l.default = m;
}, 98);