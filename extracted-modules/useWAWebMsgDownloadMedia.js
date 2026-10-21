__d("useWAWebMsgDownloadMedia", [
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebMediaDataGetters",
    "WAWebMediaStore",
    "WAWebMediaTypes",
    "WAWebMsgCollection",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useEffect, useState } = u;
    function p(t) {
        const n = useState(null);
        const r = n[0];
        const a = n[1];
        const i = useState(t);
        const l = i[0];
        const s = i[1];
        if (l !== t) {
            s(t);
            a(null);
        }
        useEffect(function() {
            if (t != null) {
                let n = true;
                o("WAWebMediaStore").LruMediaStore.has(t).then((e)=>{
                    if (n) {
                        a(e);
                    }
                }).catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[useIsFileInCache] Failed to get file from cache: ",
                        ""
                    ])), t);
                });
                return function() {
                    n = false;
                };
            }
        }, [
            t
        ]);
        return r;
    }
    function _(e) {
        switch(e){
            case o("WAWebMediaTypes").TYPE.AUDIO:
                return o("WAWebUserPrefsGeneral").getAutoDownloadAudio();
            case o("WAWebMediaTypes").TYPE.STICKER:
            case o("WAWebMediaTypes").TYPE.IMAGE:
                return o("WAWebUserPrefsGeneral").getAutoDownloadPhotos();
            case o("WAWebMediaTypes").TYPE.VIDEO:
            case o("WAWebMediaTypes").TYPE.PTV:
                return o("WAWebUserPrefsGeneral").getAutoDownloadVideos();
            case o("WAWebMediaTypes").TYPE.DOCUMENT:
                return o("WAWebUserPrefsGeneral").getAutoDownloadDocuments();
        }
        return false;
    }
    function f(e) {
        const a = o("react-compiler-runtime").c(6);
        const i = o("useWAWebMsgValues").useOptionalMsgValues(e, [
            o("WAWebFrontendMsgGetters").getMediaData
        ]) ?? [
            null
        ];
        const l = i[0];
        const s = o("useWAWebMediaDataValues").useOptionalMediaDataValues(l, [
            o("WAWebMediaDataGetters").getFilehash
        ]) ?? [
            null
        ];
        const u = s[0];
        const c = p(u != null && u !== "" ? u : null);
        let m;
        if (a[0] !== c || a[1] !== e) {
            m = (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const n = o("WAWebMsgCollection").MsgCollection.get(e);
                    if (n != null) {
                        const r = c === true || _(n.mediaObject?.type);
                        if (!(o("WAWebFrontendMsgGetters").getChat(n).isSuspendedOrTerminated() || !r)) {
                            yield n.downloadMedia({
                                downloadEvenIfExpensive: false,
                                rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_RENDER,
                                isUserInitiated: false
                            });
                        }
                    }
                });
                return function() {
                    return t.apply(this, arguments);
                };
            })();
            a[0] = c;
            a[1] = e;
            a[2] = m;
        } else {
            m = a[2];
        }
        const f = m;
        let g;
        let h;
        if (a[3] !== f) {
            g = function() {
                f();
            };
            h = [
                f
            ];
            a[3] = f;
            a[4] = g;
            a[5] = h;
        } else {
            g = a[4];
            h = a[5];
        }
        useEffect(g, h);
        return f;
    }
    l.useIsFileInCache = p;
    l.useMsgDownloadMedia = f;
}, 98);