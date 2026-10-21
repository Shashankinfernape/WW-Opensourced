__d("WAWebPtvDownloadState.react", [
    "WAWebMediaStateControlDownload.react",
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(14);
        const { isPlaying, mediaDataFileSize, mediaStage, onDownloadClick } = e;
        let u;
        e: switch(mediaStage){
            case o("WAWebMediaTypes").MediaDataStage.INIT:
                {
                    let c;
                    if (t[0] !== mediaDataFileSize || t[1] !== onDownloadClick) {
                        const Component = r("WAWebMediaStateControlDownload.react");
                        c = <Component filesize={mediaDataFileSize} onClick={onDownloadClick}/>;
                        t[0] = mediaDataFileSize;
                        t[1] = onDownloadClick;
                        t[2] = c;
                    } else {
                        c = t[2];
                    }
                    u = c;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.EXISTS:
            case o("WAWebMediaTypes").MediaDataStage.FETCHING:
            case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
            case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
                {
                    let d;
                    if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                        d = s.jsx(o("WAWebMediaStateControls.react").Pending, {});
                        t[3] = d;
                    } else {
                        d = t[3];
                    }
                    u = d;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
                {
                    let m;
                    if (t[4] !== mediaDataFileSize || t[5] !== onDownloadClick) {
                        const Component = r("WAWebMediaStateControlDownload.react");
                        m = <Component filesize={mediaDataFileSize} onClick={onDownloadClick}/>;
                        t[4] = mediaDataFileSize;
                        t[5] = onDownloadClick;
                        t[6] = m;
                    } else {
                        m = t[6];
                    }
                    u = m;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
            case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
                {
                    let p;
                    if (t[7] !== mediaDataFileSize) {
                        p = s.jsx(o("WAWebMediaStateControls.react").Upload, {
                            filesize: mediaDataFileSize
                        });
                        t[7] = mediaDataFileSize;
                        t[8] = p;
                    } else {
                        p = t[8];
                    }
                    u = p;
                    break e;
                }
            case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
                {
                    let _;
                    if (t[9] !== isPlaying) {
                        _ = isPlaying ? null : s.jsx(o("WAWebMediaStateControls.react").Play, {});
                        t[9] = isPlaying;
                        t[10] = _;
                    } else {
                        _ = t[10];
                    }
                    u = _;
                    break e;
                }
            default:
                {
                    let f;
                    if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
                        f = s.jsx(o("WAWebMediaStateControls.react").Pending, {});
                        t[11] = f;
                    } else {
                        f = t[11];
                    }
                    u = f;
                }
        }
        let g;
        if (t[12] !== u) {
            const Component = r("WAWebVelocityTransitionGroup");
            g = <Component transitionName="fade-ease-out">{u}</Component>;
            t[12] = u;
            t[13] = g;
        } else {
            g = t[13];
        }
        return g;
    }
    l.default = u;
}, 98);