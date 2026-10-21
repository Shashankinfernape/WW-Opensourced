__d("WAWebMmsClientMmsDownload", [
    "Promise",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WATimeUtils",
    "WAWebHttpErrors",
    "WAWebHttpExtendedFetch",
    "WAWebMediaLoadErrors",
    "WAWebMediaUrlAllowlist",
    "WAWebMmsCdnUrlValidationUtils",
    "WAWebMmsClientErrors",
    "WAWebMmsClientFormatDownloadUrl",
    "WAWebMmsClientMmsLogError",
    "WAWebMmsMediaTypes",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ ciphertextValidator, debug, debugString, onData, onHeadersReceived, onProgress, signal, url }) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "mmsDownload: [",
                "] start"
            ])), debugString);
            try {
                const p = yield o("WAWebHttpExtendedFetch").extendedFetch(url, {
                    signal,
                    onProgress,
                    onData,
                    onHeadersReceived
                });
                yield y({
                    response: p,
                    functionName: "mmsDownload",
                    url
                });
                const _ = yield p.arrayBuffer();
                if (ciphertextValidator && !(yield ciphertextValidator(_))) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "download hash mismatch error. downloaded size: ",
                        ""
                    ])), _.byteLength);
                    throw new (o("WAWebHttpErrors")).MmsDownloadFilehashMismatchError({
                        url
                    });
                }
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "mmsDownload: [",
                    "] success"
                ])), debugString);
                return _;
            } catch (error) {
                o("WAWebMmsClientMmsLogError").mmsLogError({
                    debug,
                    error,
                    source: "mmsDownload"
                });
                throw error instanceof TypeError ? new (o("WAWebHttpErrors")).HttpNetworkError(error.message) : error;
            }
        });
        return m.apply(this, arguments);
    }
    function p({ byteRange, debugString, directPath, downloadBucket, encFilehash, hostname, mode, onData, onHeadersReceived, onProgress, signal, staticUrl, type }) {
        let C;
        const b = o("WAWebMediaUrlAllowlist").allowlistedMediaUrl(staticUrl);
        if (b != null) {
            C = b;
        } else if (directPath != null && directPath !== "") {
            C = r("WAWebMmsClientFormatDownloadUrl")({
                directPath,
                encFilehash,
                hostname,
                type,
                mode,
                byteRange,
                downloadBucket
            });
        } else if (encFilehash != null && encFilehash !== "") {
            C = r("WAWebMmsClientFormatDownloadUrl")({
                encFilehash,
                hostname,
                type,
                mode,
                byteRange,
                downloadBucket
            });
        } else {
            return (c || (c = n("Promise"))).reject(r("err")(b == null && !r("isStringNullOrEmpty")(staticUrl) ? "staticUrl rejected by the media CDN allow-list, and no directPath or encFilehash available for download" : "No staticUrl, directPath, or encFilehash available for download"));
        }
        if (encFilehash == null && !byteRange && type !== o("WAWebMmsMediaTypes").MEDIA_TYPES.PRODUCT) {
            return (c || (c = n("Promise"))).reject(r("err")(`expected encFilehash for ciphertext validation, media type: ${type}`));
        }
        const ciphertextValidator = byteRange || r("isStringNullOrEmpty")(encFilehash) ? null : (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                return (yield o("WAMediaCalculateFilehash").calculateFilehash(e)) === encFilehash;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })();
        return d({
            url: C,
            signal,
            onHeadersReceived,
            onProgress,
            onData,
            ciphertextValidator,
            debugString,
            debug: {
                encFilehash,
                type,
                url: C
            }
        });
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ directPath, encFilehash, hostname, signal, type }) {
            yield b({
                directPath,
                encFilehash,
                hostname,
                type,
                signal,
                functionName: "mmsCheckExistence"
            });
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ directPath, encFilehash, hostname, signal, type }) {
            const l = yield b({
                directPath,
                encFilehash,
                hostname,
                type,
                signal,
                functionName: "mmsGetEncryptedMediaSize"
            });
            const s = l.headers.get("content-length");
            if (s == null || s === "") {
                throw new (o("WAWebMediaLoadErrors")).UnableToGetContentLengthError;
            }
            return parseInt(s, 10);
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ functionName, response, url }) {
            if (!response.ok) {
                e: {
                    if (response.status === 401) {
                        throw new (o("WAWebMmsClientErrors")).MMSUnauthorizedError(functionName, {
                            url
                        });
                    }
                    if (response.status === 403) {
                        const a = yield response.text();
                        if (a.includes("URL signature expired")) {
                            throw new (o("WAWebMmsClientErrors")).MediaNotFoundError(functionName, {
                                url,
                                status: response.status
                            });
                        }
                        const i = o("WAWebMmsCdnUrlValidationUtils").parseCdnUrlParams(url);
                        const l = i.expirationDate;
                        throw l != null && o("WATimeUtils").toDate(o("WATimeUtils").unixTime()) >= l ? new (o("WAWebMmsClientErrors")).MediaNotFoundError(functionName, {
                            url,
                            status: response.status
                        }) : new (o("WAWebMmsClientErrors")).MMSForbiddenError(functionName, {
                            url
                        });
                    }
                    throw response.status === 404 || response.status === 410 ? new (o("WAWebMmsClientErrors")).MediaNotFoundError(functionName, {
                        url,
                        status: response.status
                    }) : response.status === 507 ? new (o("WAWebMmsClientErrors")).MMSThrottleError(functionName, {
                        url
                    }) : new (o("WAWebHttpErrors")).HttpStatusCodeError(response.status, functionName, {
                        url
                    });
                }
            }
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ directPath, encFilehash, functionName, hostname, signal, type }) {
            let u;
            if (directPath != null && directPath !== "") {
                u = r("WAWebMmsClientFormatDownloadUrl")({
                    directPath,
                    encFilehash,
                    hostname,
                    type,
                    mode: "auto"
                });
            } else if (encFilehash != null && encFilehash !== "") {
                u = r("WAWebMmsClientFormatDownloadUrl")({
                    encFilehash,
                    hostname,
                    type,
                    mode: "auto"
                });
            } else {
                throw r("err")("No directPath or encFilehash available for HEAD request");
            }
            const c = yield o("WAWebHttpExtendedFetch").extendedFetch(u, {
                method: "HEAD",
                signal
            });
            yield y({
                response: c,
                functionName,
                url: u
            });
            return c;
        });
        return v.apply(this, arguments);
    }
    l.mms4Download = p;
    l.mmsCheckExistence = _;
    l.mmsGetEncryptedMediaSize = g;
    l.validateMmsResponse = y;
}, 98);