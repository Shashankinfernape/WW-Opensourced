__d("WAWebFileSaver", [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebDataLink",
    "WAWebDualUploadsPreferredMsg",
    "WAWebFileSaverDownloadData",
    "WAWebMediaGatingShouldClearDownloadedBlobs",
    "WAWebMiscBrowserUtils",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = (()=>{
        function t() {}
        const t_prototype = t.prototype;
        t_prototype.downloadData = function(r, a, i) {
            const t = window.URL.createObjectURL(r);
            const l = o("WAWebDataLink").createDataLink(t);
            l.style.display = "none";
            l.download = `${a}${i}`;
            if (document.body) {
                document.body.appendChild(l);
            }
            l.click();
            if (document.body) {
                document.body.removeChild(l);
            }
            o("WAPromiseDelays").delayMs(100).then(()=>{
                window.URL.revokeObjectURL(l.href);
            }).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[file-saver] downloadData: revokeObjectURL failed, ",
                    ""
                ])), t);
            });
            return (d || (d = n("Promise"))).resolve();
        };
        t_prototype.downloadAsync = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ isPreResolved = false, msg, onBeforeDownload = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {}), shouldThrowAbortError = false }) {
                let f = isPreResolved ? msg : p(msg);
                r("WAWebMiscBrowserUtils").startDownloading();
                try {
                    const C = yield o("WAWebFileSaverDownloadData").getMultiMsgDownloadData(f, shouldThrowAbortError);
                    if (r("isStringNullOrEmpty")(C.url) && !C.blob) {
                        const b = f;
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed! ",
                            ""
                        ])), Array.isArray(b) ? "download a zip file" : `download ${b.id.toString()} type ${b.type} with state ${b.mediaData && b.mediaData.mediaStage}`).sendLogs("download-url-creation-error");
                    }
                    const v = C.url ?? window.URL.createObjectURL(C.blob);
                    [].concat(f).forEach((e)=>{
                        if (r("WAWebMediaGatingShouldClearDownloadedBlobs")(e)) {
                            e.mediaObject?.clearBlob({
                                reset: true
                            });
                        }
                    });
                    const S = o("WAWebDataLink").createDataLink(v);
                    S.download = C.name;
                    S.style.display = "none";
                    if (Array.isArray(f) && f.length === 1) {
                        f = f[0];
                    }
                    if (!S.href) {
                        const R = f;
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed! ",
                            ""
                        ])), Array.isArray(R) ? "download a zip file" : `download ${R.id.toString()} type ${R.type} with state ${R.mediaData && R.mediaData.mediaStage}`).sendLogs("no-download-url");
                    }
                    yield onBeforeDownload(S.href, S.download, Array.isArray(f) ? "" : f.mediaData?.filehash ?? "");
                    if (document.body) {
                        document.body.appendChild(S);
                    }
                    S.click();
                    if (document.body) {
                        document.body.removeChild(S);
                    }
                    if (r("isStringNullOrEmpty")(C.url)) {
                        yield o("WAPromiseDelays").delayMs(100);
                        window.URL.revokeObjectURL(S.href);
                    }
                } catch (error) {
                    const L = r("getErrorSafe")(error);
                    if (shouldThrowAbortError && L.name === o("WAAbortError").ABORT_ERROR) {
                        throw L;
                    }
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Download failed, error: ",
                        ""
                    ])), String(error));
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.initDownload = function(t, onBeforeDownload = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {});
            return function() {
                return e.apply(this, arguments);
            };
        })()) {
            this.downloadAsync({
                msg: t,
                onBeforeDownload
            }).catch(r("WAWebNoop"));
        };
        return t;
    })();
    function p(msg) {
        if (Array.isArray(msg)) {
            return o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsgs(msg);
        }
        return o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(msg);
    }
    const _ = new m;
    l.FileSaver = _;
}, 98);