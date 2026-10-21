__d("WAWebMediaMsgFailIcon.react", [
    "fbt",
    "WAWebFailIcon.react",
    "WAWebFrontendMsgGetters",
    "WAWebMediaDataGetters",
    "WAWebMediaMsgTooLargeFailIcon.react",
    "WAWebMediaTypes",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "react",
    "react-compiler-runtime",
    "useWAWebMediaDataValues",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(17);
        const { displayType, mediaData, msgKey } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebMsgGetters").getIsFailed,
                o("WAWebMsgGetters").getType,
                o("WAWebFrontendMsgGetters").getIsUnsentMedia
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const c = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const d = c[0];
        const m = c[1];
        const p = c[2];
        let _;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                o("WAWebMediaDataGetters").getMediaStage,
                o("WAWebMediaDataGetters").getType
            ];
            t[1] = _;
        } else {
            _ = t[1];
        }
        const f = o("useWAWebMediaDataValues").useMediaDataValues(mediaData, _);
        const g = f[0];
        const h = f[1];
        if (m === o("WAWebMsgType").MSG_TYPE.REVOKED) {
            return null;
        }
        if (g === o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE) {
            let y;
            if (t[2] !== displayType || t[3] !== h) {
                y = u.jsx(r("WAWebMediaMsgTooLargeFailIcon.react"), {
                    displayType,
                    mediaType: h
                });
                t[2] = displayType;
                t[3] = h;
                t[4] = y;
            } else {
                y = t[4];
            }
            return y;
        }
        if (p && (g === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING || g === o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED || g === o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN)) {
            let C;
            if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                C = s._("Couldn't send this message.");
                t[5] = C;
            } else {
                C = t[5];
            }
            const b = C;
            let v;
            if (t[6] !== displayType) {
                v = u.jsx(r("WAWebFailIcon.react"), {
                    displayType,
                    tooltip: b,
                    ariaLabel: b
                });
                t[6] = displayType;
                t[7] = v;
            } else {
                v = t[7];
            }
            return v;
        }
        if (d) {
            if (g === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING) {
                let S;
                if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                    S = s._("Couldn't forward this message because the file is no longer on your phone.");
                    t[8] = S;
                } else {
                    S = t[8];
                }
                const R = S;
                let L;
                if (t[9] !== displayType) {
                    L = u.jsx(r("WAWebFailIcon.react"), {
                        displayType,
                        tooltip: R,
                        ariaLabel: R
                    });
                    t[9] = displayType;
                    t[10] = L;
                } else {
                    L = t[10];
                }
                return L;
            }
            if (m === o("WAWebMsgType").MSG_TYPE.PTT && g === o("WAWebMediaTypes").MediaDataStage.PREPARING) {
                let E;
                if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
                    E = s._("Couldn't send this voice message.");
                    t[11] = E;
                } else {
                    E = t[11];
                }
                const k = E;
                let I;
                if (t[12] !== displayType) {
                    I = u.jsx(r("WAWebFailIcon.react"), {
                        displayType,
                        tooltip: k,
                        ariaLabel: k
                    });
                    t[12] = displayType;
                    t[13] = I;
                } else {
                    I = t[13];
                }
                return I;
            }
            let T;
            if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
                T = s._("Couldn't send this message.");
                t[14] = T;
            } else {
                T = t[14];
            }
            const D = T;
            let x;
            if (t[15] !== displayType) {
                x = u.jsx(r("WAWebFailIcon.react"), {
                    displayType,
                    tooltip: D,
                    ariaLabel: D
                });
                t[15] = displayType;
                t[16] = x;
            } else {
                x = t[16];
            }
            return x;
        }
        return null;
    }
    l.default = c;
}, 226);