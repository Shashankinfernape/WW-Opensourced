__d("WAWebMessageStickerMediaControl.react", [
    "WALogger",
    "WAWebMediaDataGetters",
    "WAWebMediaMissingModal.react",
    "WAWebMediaStateControlDownload.react",
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WDSMargins.stylex",
    "err",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMediaDataValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = d || (d = o("react"));
    const p = {
        paddingBottom10: {
            paddingBottom: "x1a8lsjc",
            $$css: true
        }
    };
    const _ = {
        thumb: {
            alignItems: "x6s0dn4",
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            cursor: "x1ypdohk",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            maxWidth: "x193iq5w",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            position: "x1n2onr6",
            $$css: true
        },
        container: {
            cursor: "x1sqbtui",
            $$css: true
        }
    };
    function FComponent(e) {
        const t = o("react-compiler-runtime").c(31);
        const e_msgKey = e.msgKey;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebMediaDataGetters").getMediaStage,
                o("WAWebMediaDataGetters").getSize
            ];
            t[0] = a;
        } else {
            a = t[0];
        }
        const i = o("useWAWebMediaDataValues").useMediaDataValues(e.mediaData, a);
        const l = i[0];
        const filesize = i[1];
        let u;
        if (t[1] !== e_msgKey) {
            u = function() {
                const e = o("WAWebMsgCollection").MsgCollection.get(e_msgKey);
                if (e != null) {
                    o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebMediaMissingModal.react"), {
                        msg: e
                    }));
                }
            };
            t[1] = e_msgKey;
            t[2] = u;
        } else {
            u = t[2];
        }
        const d = u;
        let f;
        if (t[3] !== e_msgKey) {
            f = function() {
                const e = o("WAWebMsgCollection").MsgCollection.get(e_msgKey);
                if (e != null) {
                    e.forceDownloadMediaEvenIfExpensive().catch(y);
                }
            };
            t[3] = e_msgKey;
            t[4] = f;
        } else {
            f = t[4];
        }
        const C = f;
        let b;
        if (t[5] !== e_msgKey) {
            b = function() {
                o("WAWebMsgCollection").MsgCollection.get(e_msgKey)?.cancelDownload();
            };
            t[5] = e_msgKey;
            t[6] = b;
        } else {
            b = t[6];
        }
        const v = b;
        let S;
        if (t[7] !== e_msgKey) {
            S = function() {
                o("WAWebMsgCollection").MsgCollection.get(e_msgKey)?.cancelUpload();
            };
            t[7] = e_msgKey;
            t[8] = S;
        } else {
            S = t[8];
        }
        const R = S;
        let L;
        if (t[9] !== e_msgKey) {
            L = function() {
                const e = o("WAWebMsgCollection").MsgCollection.get(e_msgKey);
                if (e != null) {
                    e.resumeUpload().catch(h);
                }
            };
            t[9] = e_msgKey;
            t[10] = L;
        } else {
            L = t[10];
        }
        const E = L;
        let k;
        if (t[11] !== e_msgKey) {
            k = function() {
                const e = o("WAWebMsgCollection").MsgCollection.get(e_msgKey);
                if (e != null) {
                    e.resumeRemoteUpload().catch(g);
                }
            };
            t[11] = e_msgKey;
            t[12] = k;
        } else {
            k = t[12];
        }
        const I = k;
        let T;
        let D;
        e: switch(l){
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
                {
                    T = null;
                    D = null;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.FETCHING:
                {
                    T = v;
                    let x;
                    if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
                        x = m.jsx(o("WAWebMediaStateControls.react").Pending, {
                            cancelable: true
                        });
                        t[13] = x;
                    } else {
                        x = t[13];
                    }
                    D = x;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
                {
                    T = C;
                    let $;
                    if (t[14] !== filesize) {
                        $ = m.jsx(r("WAWebMediaStateControlDownload.react"), {
                            filesize
                        });
                        t[14] = filesize;
                        t[15] = $;
                    } else {
                        $ = t[15];
                    }
                    D = $;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
            case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
                {
                    T = R;
                    let P;
                    if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
                        P = m.jsx(o("WAWebMediaStateControls.react").Pending, {
                            cancelable: true
                        });
                        t[16] = P;
                    } else {
                        P = t[16];
                    }
                    D = P;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
                {
                    T = E;
                    let N;
                    if (t[17] !== filesize) {
                        N = m.jsx(o("WAWebMediaStateControls.react").Upload, {
                            filesize
                        });
                        t[17] = filesize;
                        t[18] = N;
                    } else {
                        N = t[18];
                    }
                    D = N;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
                {
                    T = I;
                    let M;
                    if (t[19] !== filesize) {
                        M = m.jsx(o("WAWebMediaStateControls.react").Upload, {
                            filesize
                        });
                        t[19] = filesize;
                        t[20] = M;
                    } else {
                        M = t[20];
                    }
                    D = M;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
                {
                    T = d;
                    let w;
                    if (t[21] !== filesize) {
                        w = m.jsx(o("WAWebMediaStateControls.react").Upload, {
                            filesize
                        });
                        t[21] = filesize;
                        t[22] = w;
                    } else {
                        w = t[22];
                    }
                    D = w;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
                {
                    T = d;
                    let A;
                    if (t[23] !== filesize) {
                        A = m.jsx(r("WAWebMediaStateControlDownload.react"), {
                            filesize
                        });
                        t[23] = filesize;
                        t[24] = A;
                    } else {
                        A = t[24];
                    }
                    D = A;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
                break e;
            case o("WAWebMediaTypes").MediaDataStage.SENDING:
            case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
            case o("WAWebMediaTypes").MediaDataStage.INIT:
            case o("WAWebMediaTypes").MediaDataStage.PREPARING:
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.EXISTS:
                {
                    let F;
                    if (t[25] === Symbol.for("react.memo_cache_sentinel")) {
                        F = m.jsx(o("WAWebMediaStateControls.react").Pending, {});
                        t[25] = F;
                    } else {
                        F = t[25];
                    }
                    D = F;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
            case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
                throw r("err")(`invalid value for sticker mediaStage '${l}'`);
        }
        let O;
        if (t[26] === Symbol.for("react.memo_cache_sentinel")) {
            O = (c || (c = r("stylex"))).props(_.thumb, _.container, o("WDSMargins.stylex").wdsMargins.marginBottom2, p.paddingBottom10);
            t[26] = O;
        } else {
            O = t[26];
        }
        let B;
        if (t[27] !== T || t[28] !== D || t[29] !== e.children) {
            B = <div {...babelHelpers.extends({}, O, {
                onClick: T,
                children: [
                    D,
                    e.children
                ]
            })}/>;
            t[27] = T;
            t[28] = D;
            t[29] = e.children;
            t[30] = B;
        } else {
            B = t[30];
        }
        return B;
    }
    function g(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Failed to resume remote sticker upload"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("sticker-resume-remote-upload-failed");
    }
    function h(e) {
        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "Failed to resume sticker upload"
        ]))).catching(r("getErrorSafe")(e)).sendLogs("sticker-resume-upload-failed");
    }
    function y(e) {
        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "Failed to force download sticker media"
        ]))).catching(r("getErrorSafe")(e)).sendLogs("sticker-force-download-failed");
    }
    l.default = FComponent;
}, 98);