__d("WAWebHDMediaIconWrapper.react", [
    "WAWebHDMediaUtils",
    "WAWebMediaTypes",
    "WDSIconIcVideocamFilled.react",
    "WDSIconWdsIcHdFilled.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        icon: {
            color: "x1ln3su4",
            width: "xw4jnvo",
            height: "x1qx5ct2",
            opacity: "x1iy03kw",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(5);
        const { height, type, width, xstyle } = e;
        e: switch(type){
            case o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE:
                {
                    if (o("WAWebHDMediaUtils").isHdPhoto(height, width)) {
                        let c;
                        if (t[0] !== xstyle) {
                            c = s.jsx(r("WDSIconWdsIcHdFilled.react"), {
                                height: 24,
                                width: 24,
                                testid: "wds-ic-hd-filled",
                                xstyle,
                                iconXstyle: u.icon
                            });
                            t[0] = xstyle;
                            t[1] = c;
                        } else {
                            c = t[1];
                        }
                        return c;
                    }
                    break e;
                }
            case o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO:
                {
                    if (o("WAWebHDMediaUtils").isHdVideo(height, width)) {
                        let d;
                        if (t[2] !== xstyle) {
                            d = s.jsx(r("WDSIconWdsIcHdFilled.react"), {
                                height: 24,
                                width: 24,
                                testid: "wds-ic-hd-filled",
                                xstyle,
                                iconXstyle: u.icon
                            });
                            t[2] = xstyle;
                            t[3] = d;
                        } else {
                            d = t[3];
                        }
                        return d;
                    }
                    let m;
                    if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                        m = s.jsx(r("WDSIconIcVideocamFilled.react"), {
                            height: 16,
                            width: 16,
                            testid: "msg-video"
                        });
                        t[4] = m;
                    } else {
                        m = t[4];
                    }
                    return m;
                }
        }
        return null;
    }
    l.default = c;
}, 98);