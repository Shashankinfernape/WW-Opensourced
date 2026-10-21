__d("WAWebMessageLoadingMedia.react", [
    "WATimeUtils",
    "WAWebBotTypes",
    "WAWebMediaGenerationFailedContent.react",
    "WAWebMediaHubLoadingSkeletons.react",
    "WAWebMessageCropping",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = o("WATimeUtils").MINUTE_SECONDS * 2;
    function c(e) {
        if (e === "loading_image") {
            return o("WAWebMessageCropping").DEFAULT_HEIGHT_PICTURE;
        }
        return o("WAWebMessageCropping").DEFAULT_HEIGHT_VIDEO;
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(7);
        const e_msgKey = e.msgKey;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebMsgGetters").getBotEditType,
                o("WAWebMsgGetters").getT,
                o("WAWebMsgGetters").getSubtype
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e_msgKey, r);
        const i = a[0];
        const l = a[1];
        const d = a[2];
        const p = o("WATimeUtils").unixTime();
        const _ = i === o("WAWebBotTypes").BotMsgEditType.LAST || p - l > u;
        if (_) {
            let f;
            if (t[1] !== d) {
                f = <M5Component subtype={d}/>;
                t[1] = d;
                t[2] = f;
            } else {
                f = t[2];
            }
            return f;
        }
        let g;
        if (t[3] !== d) {
            g = c(d);
            t[3] = d;
            t[4] = g;
        } else {
            g = t[4];
        }
        let h;
        if (t[5] !== g) {
            h = <div>{s.jsx(o("WAWebMediaHubLoadingSkeletons.react").WAWebMediaHubLoadingText, {
                width: o("WAWebMessageCropping").DEFAULT_WIDTH,
                height: g
            })}</div>;
            t[5] = g;
            t[6] = h;
        } else {
            h = t[6];
        }
        return h;
    }
    function M5Component(e) {
        const t = o("react-compiler-runtime").c(9);
        const e_subtype = e.subtype;
        let a;
        if (t[0] !== e_subtype) {
            a = c(e_subtype);
            t[0] = e_subtype;
            t[1] = a;
        } else {
            a = t[1];
        }
        const i = `${a}px`;
        let l;
        if (t[2] !== i) {
            l = {
                width: `${o("WAWebMessageCropping").DEFAULT_WIDTH}px`,
                height: i
            };
            t[2] = i;
            t[3] = l;
        } else {
            l = t[3];
        }
        const u = l;
        const d = e_subtype !== "loading_image";
        let m;
        if (t[4] !== d) {
            m = s.jsx(r("WAWebMediaGenerationFailedContent.react"), {
                isVideo: d
            });
            t[4] = d;
            t[5] = m;
        } else {
            m = t[5];
        }
        let p;
        if (t[6] !== u || t[7] !== m) {
            p = <div style={u}>{m}</div>;
            t[6] = u;
            t[7] = m;
            t[8] = p;
        } else {
            p = t[8];
        }
        return p;
    }
    l.default = d;
}, 98);