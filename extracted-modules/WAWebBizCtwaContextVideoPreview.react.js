__d("WAWebBizCtwaContextVideoPreview.react", [
    "fbt",
    "WAWebBizCtwaContextSourceButton.react",
    "WAWebBizCtwaContextThumbImage.react",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebMediaStateControls.react",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebPipController",
    "WAWebPipOverlay.react",
    "WAWebSettingsFBT",
    "WAWebURLUtils",
    "WDSIconWdsIcPipLeftBottomToTopRight.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useMemo, useRef, useState } = d;
    const f = {
        preview: {
            marginTop: "xvijh9v",
            marginInlineEnd: "x1mpyi22",
            marginBottom: "x1ty9z65",
            marginInlineStart: "xm2jcoa",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            fontSize: "x1wl59ut",
            lineHeight: "x1fc57z9",
            borderStartStartRadius: "x1i282gy",
            borderStartEndRadius: "xx9ypkp",
            borderEndEndRadius: "xd15eu0",
            borderEndStartRadius: "x11ecxm0",
            $$css: true
        },
        bubbleIn: {
            backgroundColor: "x1bu39yj",
            $$css: true
        },
        bubbleOut: {
            backgroundColor: "x1bu39yj",
            $$css: true
        }
    };
    const g = {
        PREVIEW: "PREVIEW",
        FLOATER: "FLOATER"
    };
    function HComponent(t) {
        const n = o("react-compiler-runtime").c(72);
        const t_context = t.context;
        const i = t_context.sourceApp === "whatsapp";
        let l;
        e: {
            if (t.msg.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
                let u;
                if (n[0] !== t.msg) {
                    const d = t.msg.toJSON();
                    const m = new (r("WAWebMsgKey"))({
                        fromMe: t.msg.id.fromMe,
                        remote: t.msg.id.remote,
                        id: r("WAWebMsgKey").newId_DEPRECATED()
                    });
                    d.id = m;
                    u = new (o("WAWebMsgModel")).Msg(d);
                    n[0] = t.msg;
                    n[1] = u;
                } else {
                    u = n[1];
                }
                l = u;
                break e;
            }
            l = t.msg;
        }
        const h = l;
        const yRef = useRef(null);
        let C;
        if (n[2] !== h) {
            C = function() {
                if (r("WAWebPipController").isOpened(h)) {
                    return g.FLOATER;
                }
                return g.PREVIEW;
            };
            n[2] = h;
            n[3] = C;
        } else {
            C = n[3];
        }
        const b = useState(C);
        const v = b[0];
        const S = b[1];
        let R;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            R = function() {
                S(g.FLOATER);
            };
            n[4] = R;
        } else {
            R = n[4];
        }
        const L = R;
        let E;
        if (n[5] !== v) {
            E = function() {
                if (v !== g.PREVIEW) {
                    S(g.PREVIEW);
                }
            };
            n[5] = v;
            n[6] = E;
        } else {
            E = n[6];
        }
        const k = E;
        let I;
        if (n[7] !== h.id) {
            I = h.id.toString();
            n[7] = h.id;
            n[8] = I;
        } else {
            I = n[8];
        }
        o("useWAWebListener").useListener(r("WAWebPipController"), `${I}_pip_did_open`, L);
        let T;
        if (n[9] !== h.id) {
            T = h.id.toString();
            n[9] = h.id;
            n[10] = T;
        } else {
            T = n[10];
        }
        o("useWAWebListener").useListener(r("WAWebPipController"), `${T}_pip_did_close`, k);
        let D;
        if (n[11] !== t_context.sourceUrl) {
            D = function(t) {
                t.preventDefault();
                t.stopPropagation();
                if (t_context.sourceUrl != null && t_context.sourceUrl !== "") {
                    o("WAWebExternalLink.react").openExternalLink(t_context.sourceUrl);
                }
            };
            n[11] = t_context.sourceUrl;
            n[12] = D;
        } else {
            D = n[12];
        }
        const x = D;
        let $;
        if (n[13] !== t.context.sourceUrl) {
            $ = t.context.sourceUrl != null && t.context.sourceUrl !== "" ? r("WAWebURLUtils").withoutWww(r("WAWebURLUtils").hostname(t.context.sourceUrl)) : null;
            n[13] = t.context.sourceUrl;
            n[14] = $;
        } else {
            $ = n[14];
        }
        const P = $;
        let N;
        if (n[15] === Symbol.for("react.memo_cache_sentinel")) {
            N = {
                className: "x4p5aij x1pg5gke xhslqc4"
            };
            n[15] = N;
        } else {
            N = n[15];
        }
        let M;
        if (n[16] !== P) {
            M = <div {...babelHelpers.extends({}, N, {
                children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: P
                })
            })}/>;
            n[16] = P;
            n[17] = M;
        } else {
            M = n[17];
        }
        const w = M;
        let A;
        if (n[18] !== t.context.thumbnail) {
            A = ({
                0: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5",
                1: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5 x193iq5w"
            })[(t.context.thumbnail != null) << 0];
            n[18] = t.context.thumbnail;
            n[19] = A;
        } else {
            A = n[19];
        }
        const F = A;
        let O;
        if (n[20] !== t_context.description || n[21] !== t_context.isSuspiciousLink || n[22] !== t.context.description) {
            O = t_context.description != null && t_context.isSuspiciousLink !== true ? <div className="x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1pg5gke xhslqc4" title={t.context.description}>{c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: t.context.description
            })}</div> : null;
            n[20] = t_context.description;
            n[21] = t_context.isSuspiciousLink;
            n[22] = t.context.description;
            n[23] = O;
        } else {
            O = n[23];
        }
        const B = O;
        let W;
        let q;
        if (n[24] === Symbol.for("react.memo_cache_sentinel")) {
            W = {
                className: "x1c4vz4f xo1l8bm x1pg5gke x1k4tb9n xhslqc4"
            };
            q = o("WAWebSettingsFBT").wamoNonAGMMessagePreviewDescription();
            n[24] = W;
            n[25] = q;
        } else {
            W = n[24];
            q = n[25];
        }
        let U;
        if (n[26] === Symbol.for("react.memo_cache_sentinel")) {
            U = <div {...babelHelpers.extends({}, W, {
                title: q,
                children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewDescription()
                })
            })}/>;
            n[26] = U;
        } else {
            U = n[26];
        }
        const V = U;
        let H;
        if (n[27] !== t_context.isSuspiciousLink || n[28] !== t_context.title) {
            H = t_context.title != null && t_context.isSuspiciousLink !== true ? <div className="x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub" title={t_context.title}>{c.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: t_context.title
            })}</div> : null;
            n[27] = t_context.isSuspiciousLink;
            n[28] = t_context.title;
            n[29] = H;
        } else {
            H = n[29];
        }
        const G = H;
        let z;
        let j;
        if (n[30] === Symbol.for("react.memo_cache_sentinel")) {
            z = {
                className: "x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub xk50ysn"
            };
            j = o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle();
            n[30] = z;
            n[31] = j;
        } else {
            z = n[30];
            j = n[31];
        }
        let K;
        if (n[32] === Symbol.for("react.memo_cache_sentinel")) {
            K = <div {...babelHelpers.extends({}, z, {
                title: j,
                children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle()
                })
            })}/>;
            n[32] = K;
        } else {
            K = n[32];
        }
        const Q = K;
        let X;
        if (n[33] !== h) {
            X = (e || (e = r("stylex")))(f.preview, o("WAWebMsgGetters").getIsSentByMe(h) && f.bubbleOut || f.bubbleIn);
            n[33] = h;
            n[34] = X;
        } else {
            X = n[34];
        }
        const Y = X;
        let J;
        if (n[35] !== i || n[36] !== v) {
            J = v === g.PREVIEW && !i ? <div className="x10l6tqk x13vifvy x1o0tod x1ja2u2z xh8yej3 x5yr21d x1ypdohk">{c.jsx(o("WAWebMediaStateControls.react").Play, {})}</div> : null;
            n[35] = i;
            n[36] = v;
            n[37] = J;
        } else {
            J = n[37];
        }
        const Z = J;
        let ee;
        if (n[38] !== v) {
            const Component = r("WAWebPipOverlay.react");
            ee = v === g.FLOATER ? <Component icon={c.jsx(r("WDSIconWdsIcPipLeftBottomToTopRight.react"), {
                testid: "video-pip-large",
                height: 37,
                width: 37
            })}>{s._("This video is playing in picture in picture.")}</Component> : null;
            n[38] = v;
            n[39] = ee;
        } else {
            ee = n[39];
        }
        const te = ee;
        let ne;
        if (n[40] === Symbol.for("react.memo_cache_sentinel")) {
            ne = {
                className: "x1n2onr6 x78zum5 x6s0dn4 xl56j7k xh8yej3 x1wtasar x6ikm8r x10wlt62"
            };
            n[40] = ne;
        } else {
            ne = n[40];
        }
        let re;
        if (n[41] !== x || n[42] !== i) {
            re = !i && {
                onClick: x
            };
            n[41] = x;
            n[42] = i;
            n[43] = re;
        } else {
            re = n[43];
        }
        let oe;
        if (n[44] !== x || n[45] !== P || n[46] !== i) {
            const Component = r("WAWebBizCtwaContextSourceButton.react");
            oe = P != null && !i ? <Component hostname={P} onClick={x}/> : null;
            n[44] = x;
            n[45] = P;
            n[46] = i;
            n[47] = oe;
        } else {
            oe = n[47];
        }
        let ae;
        if (n[48] === Symbol.for("react.memo_cache_sentinel")) {
            ae = "x1n2onr6 xjibb99 x3v4nfg xnjobev x1h1h5sg x1ypdohk x1df5jli x13i0172 xl1xv1r";
            n[48] = ae;
        } else {
            ae = n[48];
        }
        let ie;
        if (n[49] !== t_context) {
            const Component = o("WAWebBizCtwaContextThumbImage.react").CtwaContextThumbImage;
            ie = <Component context={t_context} className={ae}/>;
            n[49] = t_context;
            n[50] = ie;
        } else {
            ie = n[50];
        }
        let le;
        if (n[51] !== Z || n[52] !== te || n[53] !== re || n[54] !== oe || n[55] !== ie) {
            le = <div {...babelHelpers.extends({
                ref: yRef
            }, ne, re, {
                children: [
                    oe,
                    ie,
                    Z,
                    te
                ]
            })}/>;
            n[51] = Z;
            n[52] = te;
            n[53] = re;
            n[54] = oe;
            n[55] = ie;
            n[56] = le;
        } else {
            le = n[56];
        }
        let se;
        if (n[57] !== F || n[58] !== t_context.sourceUrl || n[59] !== B || n[60] !== i || n[61] !== G || n[62] !== w) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            se = !i && (t_context.sourceUrl == null || t_context.sourceUrl === "" ? <div>{G}{B}{w}</div> : <Component className={F} href={t_context.sourceUrl}>{G}{B}{w}</Component>);
            n[57] = F;
            n[58] = t_context.sourceUrl;
            n[59] = B;
            n[60] = i;
            n[61] = G;
            n[62] = w;
            n[63] = se;
        } else {
            se = n[63];
        }
        let ue;
        if (n[64] !== F || n[65] !== i) {
            ue = i && <div className={F}>{Q}{V}</div>;
            n[64] = F;
            n[65] = i;
            n[66] = ue;
        } else {
            ue = n[66];
        }
        let ce;
        if (n[67] !== Y || n[68] !== le || n[69] !== se || n[70] !== ue) {
            ce = <div className={Y}>{le}{se}{ue}</div>;
            n[67] = Y;
            n[68] = le;
            n[69] = se;
            n[70] = ue;
            n[71] = ce;
        } else {
            ce = n[71];
        }
        return ce;
    }
    l.default = HComponent;
}, 226);