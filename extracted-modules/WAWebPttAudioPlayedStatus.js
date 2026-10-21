__d("WAWebPttAudioPlayedStatus", [
    "WAWebAck",
    "WAWebAudioStatusIcon.react",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebPttStatusIconStyleable.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        bgIncoming: {
            fill: "x1yd6tts",
            $$css: true
        },
        bgOutgoing: {
            fill: "xnbcrc8",
            $$css: true
        },
        iconBlue: {
            color: "x100la0o",
            $$css: true
        },
        iconGray: {
            color: "x1bbjyja",
            $$css: true
        },
        iconGreen: {
            color: "x1x3uvgb",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(11);
        const e_msgKey = e.msgKey;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebMsgGetters").getAck,
                o("WAWebMsgGetters").getIsSentByMe,
                o("WAWebFrontendMsgGetters").getAsPttLike,
                o("WAWebMsgGetters").getType
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e_msgKey, r);
        const i = a[0];
        const l = a[1];
        const c = a[2];
        const m = a[3];
        const p = i === o("WAWebAck").ACK.PLAYED;
        const background = l ? u.bgOutgoing : u.bgIncoming;
        let f;
        if (t[1] !== l || t[2] !== p) {
            f = d(p, l);
            t[1] = l;
            t[2] = p;
            t[3] = f;
        } else {
            f = t[3];
        }
        const g = f;
        let h;
        let y;
        if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
            h = {
                className: "xexx8yu xrw5ot4 x18d9i69 x7coems"
            };
            y = {
                className: "x11uqc5h x78zum5 x6s0dn4"
            };
            t[4] = h;
            t[5] = y;
        } else {
            h = t[4];
            y = t[5];
        }
        let C;
        if (t[6] !== c || t[7] !== background || t[8] !== g || t[9] !== m) {
            C = <div {...babelHelpers.extends({}, h, {
                children: <div {...babelHelpers.extends({}, y, {
                    children: m === "ptt" || c ? s.jsx(o("WAWebPttStatusIconStyleable.react").PttStatusIconStyleable, {
                        innerStyles: {
                            background,
                            primary: g
                        }
                    }) : s.jsx(o("WAWebAudioStatusIcon.react").AudioStatusIcon, {
                        innerStyles: {
                            background,
                            primary: g
                        }
                    })
                })}/>
            })}/>;
            t[6] = c;
            t[7] = background;
            t[8] = g;
            t[9] = m;
            t[10] = C;
        } else {
            C = t[10];
        }
        return C;
    }
    function d(e, t) {
        if (e) {
            return u.iconBlue;
        }
        if (t) {
            return u.iconGray;
        }
        return u.iconGreen;
    }
    l.default = c;
}, 98);