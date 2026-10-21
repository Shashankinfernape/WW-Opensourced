__d("useWAWebSaveableProfilePicUrl", [
    "WAAbortError",
    "WALogger",
    "WAWebFetchImageBlobUrl",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useEffect, useState } = u;
    function m(sourceUrl) {
        const a = useState(function() {
            return {
                sourceUrl,
                objectUrl: null
            };
        });
        const i = a[0];
        const l = a[1];
        if (i.sourceUrl !== sourceUrl) {
            l({
                sourceUrl,
                objectUrl: null
            });
        }
        useEffect(function() {
            if (!(sourceUrl == null || sourceUrl === "" || p(sourceUrl))) {
                const a = new AbortController;
                let i = null;
                let s = null;
                const u = (()=>{
                    const u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                        let objectUrl;
                        try {
                            objectUrl = yield r("WAWebFetchImageBlobUrl")(sourceUrl, a.signal);
                        } catch (error) {
                            const u = r("getErrorSafe")(error);
                            if (u.name === o("WAAbortError").ABORT_ERROR) {
                                return;
                            }
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "profile-pic saveable url unavailable: ",
                                ""
                            ])), u.message).sendLogs("profile-pic-saveable-fetch-error", {
                                sampling: 0.01
                            });
                            return;
                        }
                        if (a.signal.aborted) {
                            window.URL.revokeObjectURL(objectUrl);
                            return;
                        }
                        i = objectUrl;
                        s = new Image;
                        s.src = objectUrl;
                        l({
                            sourceUrl,
                            objectUrl
                        });
                    });
                    return function() {
                        return u.apply(this, arguments);
                    };
                })();
                u();
                return function() {
                    a.abort();
                    s = null;
                    if (i != null) {
                        window.URL.revokeObjectURL(i);
                    }
                };
            }
        }, [
            sourceUrl
        ]);
        if (i.sourceUrl === sourceUrl) {
            return i.objectUrl;
        }
        return null;
    }
    function p(sourceUrl) {
        return sourceUrl.startsWith("blob:") || sourceUrl.startsWith("data:");
    }
    l.default = m;
}, 98);