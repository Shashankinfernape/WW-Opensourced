__d("WAWebMediaUploadMmsThumbnail", [
    "WAAbortError",
    "WACustomError",
    "WAPromiseRaceAbort",
    "WAPromiseTimeout",
    "WAWebCryptoCalculateFilehash",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaMmsV4Upload",
    "WAWebMediaObject",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ fileOrigin, forwardedFromWeb, isViewOnce, mediaKeyInfo, mediaType, signal, thumbnail, timeout, uploadOrigin }) {
            const p = new (o("WAWebMediaObject")).MediaObject;
            try {
                if (timeout == null) {
                    return yield f();
                }
                return yield o("WAPromiseTimeout").promiseTimeout(f(), timeout);
            } catch (error) {
                const _ = error;
                if (_ instanceof o("WACustomError").TimeoutError) {
                    o("WAWebMediaMmsV4Upload").cancelUploadMedia(p, "thumbnail");
                    return {
                        kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind.TIMEOUT
                    };
                }
                throw _;
            }
            function f() {
                return g.apply(this, arguments);
            }
            function g() {
                g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    try {
                        const e = yield r("WAPromiseRaceAbort")(o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(thumbnail), signal);
                        p.filehash = e;
                        p.mediaBlob = thumbnail;
                        const n = o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMediaType(mediaType) ? o("WAWebMediaMmsV4Upload").uploadMedia : o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia;
                        const d = yield r("WAPromiseRaceAbort")(n({
                            mimetype: "image/jpeg",
                            mediaObject: p,
                            mediaType,
                            forwardedFromWeb,
                            uploadOrigin,
                            fileOrigin,
                            mediaKeyInfo,
                            isViewOnce
                        }), signal);
                        if (d.kind === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS) {
                            return babelHelpers.extends({}, d, {
                                filehash: e
                            });
                        }
                        return {
                            kind: d.kind
                        };
                    } catch (error) {
                        if (typeof error === "object" && r("getErrorSafe")(error).name === o("WAAbortError").ABORT_ERROR) {
                            o("WAWebMediaMmsV4Upload").cancelUploadMedia(p, "thumbnail");
                            return {
                                kind: o("WAWebMediaMmsV4Upload").UploadMediaResultKind.CANCELLATION
                            };
                        }
                    }
                });
                return g.apply(this, arguments);
            }
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);