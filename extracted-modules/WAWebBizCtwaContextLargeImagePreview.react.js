__d("WAWebBizCtwaContextLargeImagePreview.react", [
    "WAWebBizCtwaContextSourceButton.react",
    "WAWebBizCtwaContextThumbImage.react",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebLinkify",
    "WAWebModalManager",
    "WAWebSettingsFBT",
    "WAWebStopEvent",
    "WAWebSuspiciousLinkPopup.react",
    "WAWebURLUtils",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useRef = e.useRef;
    function c(e) {
        const t = o("react-compiler-runtime").c(60);
        const { context, isSentByMe } = e;
        const i = context.sourceApp === "whatsapp";
        const l = e_useRef(null);
        const c = context.isSuspiciousLink === true || context.thumbnailUrl == null && context.thumbnail == null;
        let d;
        if (t[0] !== context.isSuspiciousLink || t[1] !== context.sourceUrl) {
            d = function(t) {
                o("WAWebStopEvent").stopEvent(t);
                if (context.isSuspiciousLink === true && context.sourceUrl != null) {
                    const e = o("WAWebLinkify").findLink({
                        text: context.sourceUrl
                    });
                    if (e) {
                        o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebSuspiciousLinkPopup.react"), {
                            link: e
                        }));
                    }
                } else {
                    if (context.sourceUrl != null && context.sourceUrl !== "") {
                        o("WAWebExternalLink.react").openExternalLink(context.sourceUrl);
                    }
                }
            };
            t[0] = context.isSuspiciousLink;
            t[1] = context.sourceUrl;
            t[2] = d;
        } else {
            d = t[2];
        }
        const m = d;
        let p;
        if (t[3] !== context.sourceUrl) {
            p = context.sourceUrl != null ? r("WAWebURLUtils").withoutWww(r("WAWebURLUtils").hostname(context.sourceUrl)) : null;
            t[3] = context.sourceUrl;
            t[4] = p;
        } else {
            p = t[4];
        }
        const _ = p;
        let f;
        if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
            f = {
                className: "x4p5aij x1pg5gke xhslqc4"
            };
            t[5] = f;
        } else {
            f = t[5];
        }
        let g;
        if (t[6] !== _) {
            g = <div {...babelHelpers.extends({}, f, {
                children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: _
                })
            })}/>;
            t[6] = _;
            t[7] = g;
        } else {
            g = t[7];
        }
        const h = g;
        let y;
        if (t[8] !== context.thumbnail) {
            y = ({
                0: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5",
                1: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5 x193iq5w"
            })[(context.thumbnail != null) << 0];
            t[8] = context.thumbnail;
            t[9] = y;
        } else {
            y = t[9];
        }
        const C = y;
        let b;
        if (t[10] !== context.description || t[11] !== context.isSuspiciousLink) {
            b = context.description != null && context.isSuspiciousLink !== true ? <div className="x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1pg5gke xhslqc4" title={context.description}>{s.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: context.description
            })}</div> : null;
            t[10] = context.description;
            t[11] = context.isSuspiciousLink;
            t[12] = b;
        } else {
            b = t[12];
        }
        const v = b;
        let S;
        let R;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            S = {
                className: "x1c4vz4f xo1l8bm x1pg5gke x1k4tb9n xhslqc4"
            };
            R = o("WAWebSettingsFBT").wamoNonAGMMessagePreviewDescription();
            t[13] = S;
            t[14] = R;
        } else {
            S = t[13];
            R = t[14];
        }
        let L;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            L = <div {...babelHelpers.extends({}, S, {
                title: R,
                children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewDescription()
                })
            })}/>;
            t[15] = L;
        } else {
            L = t[15];
        }
        const E = L;
        let k;
        if (t[16] !== context.isSuspiciousLink || t[17] !== context.title) {
            k = context.title != null && context.isSuspiciousLink !== true ? <div className="x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub" title={context.title}>{s.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: context.title
            })}</div> : null;
            t[16] = context.isSuspiciousLink;
            t[17] = context.title;
            t[18] = k;
        } else {
            k = t[18];
        }
        const I = k;
        let T;
        let D;
        if (t[19] === Symbol.for("react.memo_cache_sentinel")) {
            T = {
                className: "x104kibb x1c4vz4f xs83m0k xdl72j9 xjpr12u x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub xk50ysn"
            };
            D = o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle();
            t[19] = T;
            t[20] = D;
        } else {
            T = t[19];
            D = t[20];
        }
        let x;
        if (t[21] === Symbol.for("react.memo_cache_sentinel")) {
            x = <div {...babelHelpers.extends({}, T, {
                title: D,
                children: s.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: o("WAWebSettingsFBT").wamoNonAGMMessagePreviewTitle()
                })
            })}/>;
            t[21] = x;
        } else {
            x = t[21];
        }
        const $ = x;
        let P;
        if (t[22] !== isSentByMe) {
            P = ({
                0: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa x6ikm8r x10wlt62 x1wl59ut x1fc57z9 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj",
                1: "xvijh9v x1mpyi22 x1ty9z65 xm2jcoa x6ikm8r x10wlt62 x1wl59ut x1fc57z9 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj"
            })[!!isSentByMe << 0];
            t[22] = isSentByMe;
            t[23] = P;
        } else {
            P = t[23];
        }
        const N = P;
        let M;
        if (t[24] === Symbol.for("react.memo_cache_sentinel")) {
            M = {
                className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x1wtasar x6ikm8r x10wlt62"
            };
            t[24] = M;
        } else {
            M = t[24];
        }
        let w;
        if (t[25] !== m || t[26] !== i) {
            w = !i && {
                onClick: m
            };
            t[25] = m;
            t[26] = i;
            t[27] = w;
        } else {
            w = t[27];
        }
        let A;
        if (t[28] !== c) {
            A = ({
                0: {
                    className: "x78zum5 x6s0dn4 x1n2onr6 x6ikm8r x10wlt62"
                },
                1: {
                    className: "x78zum5 x6s0dn4 x1n2onr6 x6ikm8r x10wlt62 xh8yej3"
                }
            })[!!c << 0];
            t[28] = c;
            t[29] = A;
        } else {
            A = t[29];
        }
        let F;
        if (t[30] !== context.isSuspiciousLink || t[31] !== m || t[32] !== _ || t[33] !== i) {
            const Component = r("WAWebBizCtwaContextSourceButton.react");
            F = context.isSuspiciousLink !== true && _ != null && !i && <Component hostname={_} onClick={m}/>;
            t[30] = context.isSuspiciousLink;
            t[31] = m;
            t[32] = _;
            t[33] = i;
            t[34] = F;
        } else {
            F = t[34];
        }
        const O = `x1n2onr6 xjibb99 x9823lz x1h1h5sg xnjobev xl1xv1r${i ? "" : " x1ypdohk"}`;
        let B;
        if (t[35] !== context || t[36] !== O) {
            const Component = o("WAWebBizCtwaContextThumbImage.react").CtwaContextThumbImage;
            B = <Component context={context} className={O}/>;
            t[35] = context;
            t[36] = O;
            t[37] = B;
        } else {
            B = t[37];
        }
        let W;
        if (t[38] !== A || t[39] !== F || t[40] !== B) {
            W = <div {...babelHelpers.extends({}, A, {
                children: [
                    F,
                    B
                ]
            })}/>;
            t[38] = A;
            t[39] = F;
            t[40] = B;
            t[41] = W;
        } else {
            W = t[41];
        }
        let q;
        if (t[42] !== w || t[43] !== W) {
            q = <div {...babelHelpers.extends({
                ref: l
            }, M, w, {
                children: W
            })}/>;
            t[42] = w;
            t[43] = W;
            t[44] = q;
        } else {
            q = t[44];
        }
        let U;
        if (t[45] !== context.sourceUrl || t[46] !== v || t[47] !== C || t[48] !== i || t[49] !== I || t[50] !== h) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            U = context.sourceUrl != null && !i && <Component className={C} href={context.sourceUrl} testid="ctwa_ad_context_link">{I}{v}{h}</Component>;
            t[45] = context.sourceUrl;
            t[46] = v;
            t[47] = C;
            t[48] = i;
            t[49] = I;
            t[50] = h;
            t[51] = U;
        } else {
            U = t[51];
        }
        let V;
        if (t[52] !== C || t[53] !== i) {
            V = i && <div className={C}>{$}{E}</div>;
            t[52] = C;
            t[53] = i;
            t[54] = V;
        } else {
            V = t[54];
        }
        let H;
        if (t[55] !== N || t[56] !== q || t[57] !== U || t[58] !== V) {
            H = <div className={N}>{q}{U}{V}</div>;
            t[55] = N;
            t[56] = q;
            t[57] = U;
            t[58] = V;
            t[59] = H;
        } else {
            H = t[59];
        }
        return H;
    }
    l.default = c;
}, 98);