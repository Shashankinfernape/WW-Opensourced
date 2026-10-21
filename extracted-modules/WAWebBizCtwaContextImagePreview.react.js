__d("WAWebBizCtwaContextImagePreview.react", [
    "WAWebBizCtwaContextThumbImage.react",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebLinkify",
    "WAWebModalManager",
    "WAWebSuspiciousLinkPopup.react",
    "WAWebURLUtils",
    "punycode",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        emojiNoPointerEvents: {
            pointerEvents: "x47corl",
            $$css: true
        }
    };
    function CComponent(e) {
        const t = o("react-compiler-runtime").c(30);
        const { compose, context, sourceUrl } = e;
        let l;
        if (t[0] !== compose || t[1] !== context) {
            l = function() {
                if (!compose) {
                    if (context == null || context.sourceUrl == null || context.sourceUrl === "") {
                        return;
                    }
                    if (context.isSuspiciousLink === true) {
                        const e = o("WAWebLinkify").findLink({
                            text: context.sourceUrl
                        });
                        if (e) {
                            o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebSuspiciousLinkPopup.react"), {
                                link: e
                            }));
                        }
                    } else {
                        o("WAWebExternalLink.react").openExternalLink(context.sourceUrl);
                    }
                }
            };
            t[0] = compose;
            t[1] = context;
            t[2] = l;
        } else {
            l = t[2];
        }
        const c = l;
        let d;
        if (t[3] !== context) {
            d = context?.description != null && context.isSuspiciousLink !== true && <div className="x1lqm0kl x6ikm8r x10wlt62 x1pg5gke xhslqc4 xlyipyv">{s.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: context.description,
                titlify: true,
                emojiXstyle: u.emojiNoPointerEvents
            })}</div>;
            t[3] = context;
            t[4] = d;
        } else {
            d = t[4];
        }
        const m = d;
        let p = sourceUrl;
        if (context && context.sourceUrl != null && (p = context.sourceUrl, context.isSuspiciousLink !== true && (context.title != null && context.title !== "" || context.thumbnailUrl != null && context.thumbnailUrl !== "" || context.thumbnail != null && context.thumbnail !== ""))) {
            if (t[5] !== p) {
                p = r("WAWebURLUtils").hostname(p);
                try {
                    p = r("punycode").toUnicode(p);
                } catch (e) {}
                t[5] = p;
                t[6] = p;
            } else {
                p = t[6];
            }
        }
        let _;
        if (t[7] !== p) {
            _ = p != null && p !== "" ? <div className="x1okw0bk x4p5aij x6ikm8r x10wlt62 x1pg5gke xhslqc4 xlyipyv">{s.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: p,
                emojiXstyle: u.emojiNoPointerEvents
            })}</div> : null;
            t[7] = p;
            t[8] = _;
        } else {
            _ = t[8];
        }
        const f = _;
        const g = context?.isSuspiciousLink === true ? null : context?.title;
        let h;
        if (t[9] !== compose) {
            h = ({
                0: {
                    className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1ypdohk x1i282gy xx9ypkp xd15eu0 x11ecxm0"
                },
                2: {
                    className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1ypdohk x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj"
                },
                1: {
                    className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1sqbtui"
                },
                3: {
                    className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj x1sqbtui"
                }
            })[!compose << 1 | !!compose << 0];
            t[9] = compose;
            t[10] = h;
        } else {
            h = t[10];
        }
        let y;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
            y = "x3psx0u x41jr8d x1266fpw xeghe2j x1td4c2q xl1xv1r";
            t[11] = y;
        } else {
            y = t[11];
        }
        let C;
        if (t[12] !== context) {
            const Component = o("WAWebBizCtwaContextThumbImage.react").CtwaContextThumbImage;
            C = <Component context={context} className={y}/>;
            t[12] = context;
            t[13] = C;
        } else {
            C = t[13];
        }
        let b;
        let v;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "x9f619 x78zum5 x12lumcd xdt5ytf xl56j7k x1upyj8d x1yrsyyn x10b6aqq xe2zdcy x2vl965 x6ikm8r x10wlt62 x17fgdl5"
            };
            v = {
                className: "xkz0k9k xjpr12u x6ikm8r x10wlt62 x1fc57z9 x14ug900 xlyipyv"
            };
            t[14] = b;
            t[15] = v;
        } else {
            b = t[14];
            v = t[15];
        }
        let S;
        if (t[16] !== g) {
            S = s.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: g,
                emojiXstyle: u.emojiNoPointerEvents
            });
            t[16] = g;
            t[17] = S;
        } else {
            S = t[17];
        }
        let R;
        if (t[18] !== S || t[19] !== g) {
            R = <div {...babelHelpers.extends({}, v, {
                title: g,
                children: S
            })}/>;
            t[18] = S;
            t[19] = g;
            t[20] = R;
        } else {
            R = t[20];
        }
        let L;
        if (t[21] !== m || t[22] !== R || t[23] !== f) {
            L = <div {...babelHelpers.extends({}, b, {
                children: [
                    R,
                    m,
                    f
                ]
            })}/>;
            t[21] = m;
            t[22] = R;
            t[23] = f;
            t[24] = L;
        } else {
            L = t[24];
        }
        let E;
        if (t[25] !== c || t[26] !== L || t[27] !== h || t[28] !== C) {
            E = <div {...babelHelpers.extends({}, h, {
                "data-testid": "ctwa_image_preview",
                onClick: c,
                children: [
                    C,
                    L
                ]
            })}/>;
            t[25] = c;
            t[26] = L;
            t[27] = h;
            t[28] = C;
            t[29] = E;
        } else {
            E = t[29];
        }
        return E;
    }
    l.default = CComponent;
}, 98);