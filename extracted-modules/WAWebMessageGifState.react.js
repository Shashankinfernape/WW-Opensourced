__d("WAWebMessageGifState.react", [
    "WAWebMediaStateControlDownload.react",
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(9);
        const { isFailed, mediaDataFileSize, mediaStage, onClick, shouldPlay } = e;
        switch(mediaStage){
            case o("WAWebMediaTypes").MediaDataStage.INIT:
            case o("WAWebMediaTypes").MediaDataStage.EXISTS:
                return null;
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
                {
                    if (shouldPlay) {
                        let c;
                        if (t[0] !== onClick) {
                            const Component = o("WAWebMediaStateControls.react").GifIcon;
                            c = <Component onClick={onClick}/>;
                            t[0] = onClick;
                            t[1] = c;
                        } else {
                            c = t[1];
                        }
                        return c;
                    }
                    return null;
                }
            case o("WAWebMediaTypes").MediaDataStage.FETCHING:
            case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
                {
                    let d;
                    if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                        d = s.jsx(o("WAWebMediaStateControls.react").Pending, {
                            cancelable: true
                        });
                        t[2] = d;
                    } else {
                        d = t[2];
                    }
                    return d;
                }
            case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
                {
                    let m;
                    if (t[3] !== mediaDataFileSize) {
                        m = s.jsx(r("WAWebMediaStateControlDownload.react"), {
                            filesize: mediaDataFileSize
                        });
                        t[3] = mediaDataFileSize;
                        t[4] = m;
                    } else {
                        m = t[4];
                    }
                    return m;
                }
            case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
                {
                    let p;
                    if (t[5] !== mediaDataFileSize) {
                        p = s.jsx(o("WAWebMediaStateControls.react").Upload, {
                            filesize: mediaDataFileSize
                        });
                        t[5] = mediaDataFileSize;
                        t[6] = p;
                    } else {
                        p = t[6];
                    }
                    return p;
                }
            case o("WAWebMediaTypes").MediaDataStage.SENDING:
                {
                    if (isFailed) {
                        return null;
                    }
                    let _;
                    if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
                        _ = s.jsx(o("WAWebMediaStateControls.react").Pending, {
                            cancelable: true
                        });
                        t[7] = _;
                    } else {
                        _ = t[7];
                    }
                    return _;
                }
            case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
            case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
                return null;
            default:
                {
                    let f;
                    if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                        f = s.jsx(o("WAWebMediaStateControls.react").Pending, {});
                        t[8] = f;
                    } else {
                        f = t[8];
                    }
                    return f;
                }
        }
    }
    l.default = u;
}, 98);