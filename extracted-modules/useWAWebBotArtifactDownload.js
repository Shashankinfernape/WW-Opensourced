__d("useWAWebBotArtifactDownload", [
    "fbt",
    "WALogger",
    "WAWebBotPrimaryFeaturesFrontend",
    "WAWebDownloadRichResponseMedia",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "WAWebFilenameManager",
    "WAWebMediaUrlAllowlist",
    "WAWebPrimaryFeaturesModel",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "fbs",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useEffect, useRef, useState } = d;
    const g = new Map([
        [
            "docx",
            o("WAWebFileSaverTypes").AllowedFileExtensions.DOCX
        ],
        [
            "html",
            o("WAWebFileSaverTypes").AllowedFileExtensions.HTML
        ],
        [
            "pdf",
            o("WAWebFileSaverTypes").AllowedFileExtensions.PDF
        ]
    ]);
    function useH(t) {
        const a = o("react-compiler-runtime").c(17);
        const { fileExtension, fileLength, isForwardedMessage, title, url } = t;
        const d = useState(0);
        const m = d[1];
        let h;
        if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
            h = function() {
                m(y);
            };
            a[0] = h;
        } else {
            h = a[0];
        }
        o("useWAWebListener").useListener(o("WAWebPrimaryFeaturesModel").PrimaryFeatures, o("WAWebBotPrimaryFeaturesFrontend").BOT_PRIMARY_FEATURE_CHANGE_EVENTS, h);
        let S;
        if (a[1] !== fileExtension) {
            S = g.get(fileExtension?.toLowerCase() ?? "");
            a[1] = fileExtension;
            a[2] = S;
        } else {
            S = a[2];
        }
        const L = S;
        const E = o("WAWebBotPrimaryFeaturesFrontend").isBotArtifactDownloadEnabled() && !isForwardedMessage && L != null && o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(url);
        const k = useState("idle");
        const I = k[0];
        const T = k[1];
        const D = useState(null);
        const progressPercent = D[0];
        const $ = D[1];
        const PRef = useRef(null);
        let N;
        let M;
        if (a[3] === Symbol.for("react.memo_cache_sentinel")) {
            N = function() {
                return function() {
                    const PRef_current = PRef.current;
                    PRef.current = null;
                    if (PRef_current != null) {
                        PRef_current.abortController.abort();
                    }
                };
            };
            M = [];
            a[3] = N;
            a[4] = M;
        } else {
            N = a[3];
            M = a[4];
        }
        useEffect(N, M);
        let w;
        if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
            w = function() {
                const PRef_current = PRef.current;
                PRef.current = null;
                if (PRef_current != null) {
                    PRef_current.cancelController.abort();
                }
                $(null);
                T("idle");
            };
            a[5] = w;
        } else {
            w = a[5];
        }
        const cancel = w;
        let F;
        if (a[6] !== L || a[7] !== fileExtension || a[8] !== fileLength || a[9] !== isForwardedMessage || a[10] !== title || a[11] !== url) {
            F = function() {
                if (!(!o("WAWebBotPrimaryFeaturesFrontend").isBotArtifactDownloadEnabled() || isForwardedMessage || L == null || !o("WAWebMediaUrlAllowlist").isAllowedMediaUrl(url) || PRef.current != null)) {
                    const t = {
                        abortController: new AbortController,
                        cancelController: new AbortController
                    };
                    PRef.current = t;
                    $(null);
                    T("downloading");
                    n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        try {
                            const n = yield o("WAWebDownloadRichResponseMedia").downloadRichResponseArtifact({
                                lifecycleSignal: t.abortController.signal,
                                cancelSignal: t.cancelController.signal,
                                fileLength,
                                onProgress: function(n) {
                                    if (PRef.current === t) {
                                        $(n == null ? null : Math.round(n * 100));
                                    }
                                },
                                url
                            });
                            if (PRef.current !== t) {
                                return;
                            }
                            if (n == null) {
                                PRef.current = null;
                                $(null);
                                T("idle");
                                C();
                                return;
                            }
                            yield o("WAWebFileSaver").FileSaver.downloadData(n, b(title, fileExtension), L);
                            if (PRef.current === t) {
                                PRef.current = null;
                                $(null);
                                T("idle");
                            }
                        } catch (error) {
                            const a = error;
                            if (PRef.current !== t) {
                                return;
                            }
                            PRef.current = null;
                            $(null);
                            T("idle");
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[bot-artifact] saving the downloaded file failed"
                            ]))).catching(r("getErrorSafe")(a)).sendLogs("bot-artifact-save-failed");
                            C();
                        }
                    })();
                }
            };
            a[6] = L;
            a[7] = fileExtension;
            a[8] = fileLength;
            a[9] = isForwardedMessage;
            a[10] = title;
            a[11] = url;
            a[12] = F;
        } else {
            F = a[12];
        }
        const start = F;
        const B = E ? I : "unsupported";
        let W;
        if (a[13] !== progressPercent || a[14] !== start || a[15] !== B) {
            W = {
                cancel,
                progressPercent,
                start,
                status: B
            };
            a[13] = progressPercent;
            a[14] = start;
            a[15] = B;
            a[16] = W;
        } else {
            W = a[16];
        }
        return W;
    }
    function y(e) {
        return e + 1;
    }
    function C() {
        o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
            msg: s._("Couldn't download this file. Check your connection and try again.")
        }));
    }
    function b(title, fileExtension) {
        let n = o("WAWebFilenameManager").sanitizeFileName(title).trim();
        if (fileExtension != null) {
            const a = `.${fileExtension}`;
            if (n.toLowerCase().endsWith(a.toLowerCase())) {
                n = n.slice(0, -a.length).trim();
            }
        }
        return n || r("fbs")._("Untitled").toString();
    }
    l.default = useH;
}, 226);