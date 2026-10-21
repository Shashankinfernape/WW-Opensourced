__d("useWAWebDualUploadsMediaSource", [
    "WALogger",
    "WAWebMediaDataGetters",
    "WAWebMediaTypes",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebHdImageChildMsg",
    "useWAWebIsBlobInMemoryCache",
    "useWAWebMediaDataValues",
    "useWAWebMsgDownloadMedia"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const { useCallback, useEffect, useEffectEvent, useRef } = m;
    function useH(t, a, i) {
        const d = o("useWAWebHdImageChildMsg").useHdImageChildMsg(t);
        const m = i ? d : null;
        const hdMediaData = m?.mediaData;
        const C = o("useWAWebMediaDataValues").useOptionalMediaDataValues(hdMediaData, [
            o("WAWebMediaDataGetters").getFullHeight,
            o("WAWebMediaDataGetters").getFullWidth,
            o("WAWebMediaDataGetters").getMediaStage,
            o("WAWebMediaDataGetters").getSize,
            o("WAWebMediaDataGetters").getType
        ]) ?? [
            undefined,
            undefined,
            undefined,
            undefined,
            undefined
        ];
        const b = C[0];
        const v = C[1];
        const hdStage = C[2];
        const hdFilesize = C[3];
        const L = C[4];
        const filehash = m?.mediaObject?.filehash;
        const k = o("useWAWebMsgDownloadMedia").useIsFileInCache(filehash);
        const I = r("useWAWebIsBlobInMemoryCache")(filehash);
        const isHdReachable = I ? true : k;
        const isDisplayingHd = hdStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED && hdMediaData != null && I;
        const requestHd = useCallback(function() {
            if (m != null) {
                m.forceDownloadMediaEvenIfExpensive().catch((t)=>{
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[dual-uploads] failed to download the HD child"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("failed-to-download-hd-child");
                });
            }
        }, [
            m
        ]);
        const resumeHdUpload = useCallback(function() {
            if (m != null) {
                const e = hdStage === o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD ? m.resumeRemoteUpload() : m.resumeUpload();
                e.catch((e)=>{
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[dual-uploads] failed to resume the HD child upload"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("failed-to-resume-hd-child-upload");
                });
            }
        }, [
            m,
            hdStage
        ]);
        const PRef = useRef(null);
        const N = useCallback(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (m == null || k !== true) {
                return false;
            }
            const t = m.mediaObject?.filehash;
            if (t != null && PRef.current === t) {
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[dual-uploads] concurrent HD read-back"
                ]))).sendLogs("dual-uploads-concurrent-read-back", {
                    sampling: 0.01
                });
            }
            PRef.current = t;
            try {
                yield m.downloadMedia({
                    downloadEvenIfExpensive: false,
                    isUserInitiated: false,
                    rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MSG_RENDER
                });
                return true;
            } finally{
                if (PRef.current === t) {
                    PRef.current = null;
                }
            }
        }), [
            m,
            k
        ]);
        const rehydrateHd = useCallback(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield N();
            } catch (error) {
                y(error);
            }
        }), [
            N
        ]);
        const wRef = useRef(null);
        const A = useEffectEvent(N);
        useEffect(function() {
            if (!(filehash == null || k !== true)) {
                if (I) {
                    wRef.current = {
                        filehash,
                        wasCached: true
                    };
                    return;
                }
                const e = wRef.current;
                if (!(e != null && e.filehash === filehash && !e.wasCached)) {
                    let t = true;
                    A().then((e)=>{
                        if (t && e) {
                            wRef.current = {
                                filehash,
                                wasCached: false
                            };
                        }
                    }, (e)=>{
                        if (t) {
                            y(e);
                        }
                    });
                    return function() {
                        t = false;
                    };
                }
            }
        }, [
            filehash,
            I,
            k
        ]);
        return {
            displayMediaData: isDisplayingHd && hdMediaData != null ? hdMediaData : a,
            hdFilesize,
            hdMediaData,
            hdStage,
            isDisplayingHd,
            isHdReachable,
            rehydrateHd,
            requestHd,
            resumeHdUpload
        };
    }
    function y(e) {
        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
            "[dual-uploads] failed to rehydrate the HD child"
        ]))).catching(r("getErrorSafe")(e)).sendLogs("failed-to-rehydrate-hd-child");
    }
    l.useDualUploadsMediaSource = useH;
}, 98);