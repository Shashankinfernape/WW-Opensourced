__d("WAWebMediaStage.react", [
    "WAWebMediaDataGetters",
    "WAWebMediaStateControlDownload.react",
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "WAWebMediaUnsupportedModal.react",
    "WAWebModalManager",
    "WAWebStateUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "react-compiler-runtime",
    "useWAWebIsMsgStreamable",
    "useWAWebMediaDataValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e, msg) {
        e.stopPropagation();
        msg.downloadMedia({
            downloadEvenIfExpensive: true,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
            isUserInitiated: true
        });
    }
    function c(e, msg) {
        e.stopPropagation();
        msg.cancelDownload();
    }
    function d(e, msg) {
        e.stopPropagation();
        o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebMediaUnsupportedModal.react"), {
            msg: o("WAWebStateUtils").unproxy(msg)
        }));
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(16);
        const { mediaData, msg } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = [
                o("WAWebMediaDataGetters").getMediaStage,
                o("WAWebMediaDataGetters").getSize
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const l = o("useWAWebMediaDataValues").useMediaDataValues(mediaData, i);
        const m = l[0];
        const filesize = l[1];
        const _ = r("useWAWebIsMsgStreamable")(msg, mediaData);
        if (_) {
            return null;
        }
        switch(m){
            case o("WAWebMediaTypes").MediaDataStage.INIT:
            case o("WAWebMediaTypes").MediaDataStage.EXISTS:
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
            case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
            case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
                return null;
            case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
                {
                    let f;
                    if (t[1] !== msg) {
                        f = function(t) {
                            return u(t, msg);
                        };
                        t[1] = msg;
                        t[2] = f;
                    } else {
                        f = t[2];
                    }
                    let g;
                    if (t[3] !== filesize || t[4] !== f) {
                        const Component = r("WAWebMediaStateControlDownload.react");
                        g = <Component filesize={filesize} onClick={f}/>;
                        t[3] = filesize;
                        t[4] = f;
                        t[5] = g;
                    } else {
                        g = t[5];
                    }
                    return g;
                }
            case o("WAWebMediaTypes").MediaDataStage.FETCHING:
            case o("WAWebMediaTypes").MediaDataStage.PREPARING:
            case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
            case o("WAWebMediaTypes").MediaDataStage.SENDING:
            case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
                {
                    let h;
                    if (t[6] !== msg) {
                        h = function(t) {
                            return c(t, msg);
                        };
                        t[6] = msg;
                        t[7] = h;
                    } else {
                        h = t[7];
                    }
                    let y;
                    if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                        y = s.jsx(o("WAWebMediaStateControls.react").Pending, {
                            cancelable: true
                        });
                        t[8] = y;
                    } else {
                        y = t[8];
                    }
                    let C;
                    if (t[9] !== h) {
                        C = <div onClick={h}>{y}</div>;
                        t[9] = h;
                        t[10] = C;
                    } else {
                        C = t[10];
                    }
                    return C;
                }
            case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
                {
                    let b;
                    if (t[11] !== msg) {
                        b = function(t) {
                            return d(t, msg);
                        };
                        t[11] = msg;
                        t[12] = b;
                    } else {
                        b = t[12];
                    }
                    let v;
                    if (t[13] !== filesize || t[14] !== b) {
                        const Component = r("WAWebMediaStateControlDownload.react");
                        v = <Component filesize={filesize} onClick={b}/>;
                        t[13] = filesize;
                        t[14] = b;
                        t[15] = v;
                    } else {
                        v = t[15];
                    }
                    return v;
                }
        }
    }
    l.default = m;
}, 98);