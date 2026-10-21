__d("WAWebMediaVideoLinkPreview.react", [
    "fbt",
    "WAWebABProps",
    "WAWebClientFeatureFlags",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebMediaLinkPreviewUtils",
    "WAWebMediaStateControls.react",
    "WAWebMsgGetters",
    "WAWebPipAttributionIcon",
    "WAWebPipConst",
    "WAWebPipController",
    "WAWebPipOverlay.react",
    "WAWebStateUtils",
    "WAWebURLUtils",
    "WAWebUnstyledButton.react",
    "WAWebUtilsYoutubeUrlParser",
    "WDSIconWdsIcPipLeftBottomToTopRight.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebListener"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useRef, useState } = c;
    const p = {
        thumbnailWrapper: {
            position: "x1n2onr6",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            width: "xh8yej3",
            maxHeight: "x1wtasar",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            boxSizing: "x9f619",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            borderTopWidth: "xl8et2f",
            borderInlineEndWidth: "xuc0g9m",
            borderBottomWidth: "x1dmim90",
            borderInlineStartWidth: "xs4xcjr",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1v8p93f x1878o1q",
            borderInlineEndColor: "x1o3jo1z xf2y0h5",
            borderBottomColor: "x16stqrj xnv9r3m",
            borderInlineStartColor: "xv5lvn5 xo81p9n",
            $$css: true
        }
    };
    const _ = {
        PREVIEW: "PREVIEW",
        FLOATER: "FLOATER"
    };
    const f = [
        o("WAWebPipConst").HOSTNAME.YOUTUBE,
        o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE,
        o("WAWebPipConst").HOSTNAME.YOUTUBE_SHORTENED
    ];
    function g(e) {
        const t = o("react-compiler-runtime").c(84);
        const e_msg = e.msg;
        const aRef = useRef(null);
        let i;
        if (t[0] !== e_msg) {
            i = function() {
                if (r("WAWebPipController").isOpened(o("WAWebStateUtils").unproxy(e_msg))) {
                    return _.FLOATER;
                }
                return _.PREVIEW;
            };
            t[0] = e_msg;
            t[1] = i;
        } else {
            i = t[1];
        }
        const l = useState(i);
        const c = l[0];
        const f = l[1];
        let g;
        if (t[2] !== c) {
            g = function() {
                if (c !== _.FLOATER) {
                    f(_.FLOATER);
                }
            };
            t[2] = c;
            t[3] = g;
        } else {
            g = t[3];
        }
        const b = g;
        let v;
        if (t[4] !== c) {
            v = function() {
                if (c !== _.PREVIEW) {
                    f(_.PREVIEW);
                }
            };
            t[4] = c;
            t[5] = v;
        } else {
            v = t[5];
        }
        const S = v;
        let R;
        if (t[6] !== e_msg.id) {
            R = e_msg.id.toString();
            t[6] = e_msg.id;
            t[7] = R;
        } else {
            R = t[7];
        }
        o("useWAWebListener").useListener(r("WAWebPipController"), `${R}_pip_did_open`, b);
        let L;
        if (t[8] !== e_msg.id) {
            L = e_msg.id.toString();
            t[8] = e_msg.id;
            t[9] = L;
        } else {
            L = t[9];
        }
        o("useWAWebListener").useListener(r("WAWebPipController"), `${L}_pip_did_close`, S);
        let E;
        if (t[10] === Symbol.for("react.memo_cache_sentinel")) {
            E = function() {
                if (aRef.current) {
                    return aRef.current.getBoundingClientRect();
                }
                return null;
            };
            t[10] = E;
        } else {
            E = t[10];
        }
        const k = E;
        const I = h;
        let T;
        if (t[11] !== e_msg.description) {
            T = r("isStringNullOrEmpty")(e_msg.description) ? null : <div className="x1c4vz4f x7f0hsc xdl72j9 x6ikm8r x10wlt62 x1pg5gke xhslqc4" title={e_msg.description}>{u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: e_msg.description
            })}</div>;
            t[11] = e_msg.description;
            t[12] = T;
        } else {
            T = t[12];
        }
        const D = T;
        let x;
        let $;
        if (t[13] !== e.msg.matchedText) {
            x = r("WAWebURLUtils").hostname(e.msg.matchedText);
            $ = r("WAWebURLUtils").withoutWww(x);
            t[13] = e.msg.matchedText;
            t[14] = x;
            t[15] = $;
        } else {
            x = t[14];
            $ = t[15];
        }
        x = $;
        if (x === o("WAWebPipConst").HOSTNAME.YOUTUBE_SHORTENED) {
            x = o("WAWebPipConst").HOSTNAME.YOUTUBE;
        }
        let P;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            P = {
                className: "x4p5aij x1pg5gke xhslqc4"
            };
            t[16] = P;
        } else {
            P = t[16];
        }
        let N;
        if (t[17] !== x) {
            N = <div {...babelHelpers.extends({}, P, {
                children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: x
                })
            })}/>;
            t[17] = x;
            t[18] = N;
        } else {
            N = t[18];
        }
        const M = N;
        let w;
        if (t[19] !== e.msg.thumbnail) {
            w = ({
                0: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5",
                1: "x9f619 x78zum5 xdt5ytf xl56j7k xh8yej3 x1upyj8d x1yrsyyn x2vl965 x10b6aqq xe2zdcy x6ikm8r x10wlt62 x17fgdl5 x193iq5w"
            })[!e.msg.thumbnail << 0];
            t[19] = e.msg.thumbnail;
            t[20] = w;
        } else {
            w = t[20];
        }
        const A = w;
        let F;
        if (t[21] !== e_msg.t) {
            F = o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(e_msg.t);
            t[21] = e_msg.t;
            t[22] = F;
        } else {
            F = t[22];
        }
        const O = F;
        const B = !O && e.msg.thumbnailHQ ? e.msg.thumbnailHQ : e.msg.thumbnail;
        let W;
        if (t[23] !== x) {
            W = (x === o("WAWebPipConst").HOSTNAME.YOUTUBE || x === o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE) && o("WAWebABProps").getABPropConfigValue("youtube_inline_playback_killswitch");
            t[23] = x;
            t[24] = W;
        } else {
            W = t[24];
        }
        const q = W;
        let U;
        if (c === _.PREVIEW) {
            e: switch(x){
                case o("WAWebPipConst").HOSTNAME.YOUTUBE:
                case o("WAWebPipConst").HOSTNAME.YOUTUBE_MOBILE:
                    {
                        if (q) {
                            let V;
                            if (t[25] !== e) {
                                V = function(n) {
                                    if (n) {
                                        n.stopPropagation();
                                    }
                                    e.onExternalLinkOpen?.();
                                    o("WAWebExternalLink.react").openExternalLink(e.msg.matchedText);
                                };
                                t[25] = e;
                                t[26] = V;
                            } else {
                                V = t[26];
                            }
                            U = V;
                            break e;
                        }
                        let H;
                        let G;
                        if (t[27] !== e.msg.matchedText) {
                            G = o("WAWebUtilsYoutubeUrlParser").parseYoutubeVideoId(e.msg.matchedText);
                            H = r("isStringNullOrEmpty")(G);
                            t[27] = e.msg.matchedText;
                            t[28] = H;
                            t[29] = G;
                        } else {
                            H = t[28];
                            G = t[29];
                        }
                        if (!H) {
                            let z;
                            if (t[30] !== e.msg.matchedText) {
                                z = I(e.msg.matchedText);
                                t[30] = e.msg.matchedText;
                                t[31] = z;
                            } else {
                                z = t[31];
                            }
                            const j = z;
                            let K;
                            if (t[32] !== e.msg || t[33] !== G || t[34] !== j) {
                                K = function(n) {
                                    if (n) {
                                        n.stopPropagation();
                                    }
                                    r("WAWebPipController").openYoutubePiP(G, e.msg, j, k());
                                };
                                t[32] = e.msg;
                                t[33] = G;
                                t[34] = j;
                                t[35] = K;
                            } else {
                                K = t[35];
                            }
                            U = K;
                        }
                        break e;
                    }
                default:
                    return null;
            }
        }
        let Q;
        if (t[36] !== e.msg) {
            Q = ({
                0: "x6ikm8r x10wlt62 x1wl59ut x1fc57z9 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj",
                1: "x6ikm8r x10wlt62 x1wl59ut x1fc57z9 x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj"
            })[!!o("WAWebMsgGetters").getIsSentByMe(e.msg) << 0];
            t[36] = e.msg;
            t[37] = Q;
        } else {
            Q = t[37];
        }
        const X = Q;
        let Y;
        if (t[38] !== c || t[39] !== q) {
            Y = c === _.PREVIEW && !q ? <div className="x10l6tqk x13vifvy x1o0tod x1ja2u2z xh8yej3 x5yr21d x1ypdohk">{u.jsx(o("WAWebMediaStateControls.react").Play, {})}</div> : null;
            t[38] = c;
            t[39] = q;
            t[40] = Y;
        } else {
            Y = t[40];
        }
        const J = Y;
        let Z;
        if (t[41] !== c) {
            const Component = r("WAWebPipOverlay.react");
            Z = c === _.FLOATER ? <Component icon={u.jsx(r("WDSIconWdsIcPipLeftBottomToTopRight.react"), {
                testid: "video-pip-large",
                height: 37,
                width: 37
            })}>{s._("This video is playing in picture in picture.")}</Component> : null;
            t[41] = c;
            t[42] = Z;
        } else {
            Z = t[42];
        }
        const ee = Z;
        let te;
        let ne;
        if (B && Object.values(o("WAWebPipConst").HOSTNAME).includes(x)) {
            let alt;
            let oe;
            if (t[43] !== x || t[44] !== O || t[45] !== e.msg.thumbnailHQ) {
                const ae = y(x);
                alt = "";
                oe = ({
                    0: {
                        className: "x1n2onr6 xjibb99 x3v4nfg x1h1h5sg x1ypdohk x1df5jli"
                    },
                    2: {
                        className: "x1n2onr6 xjibb99 x3v4nfg x1h1h5sg x1ypdohk x1df5jli x1a842fp xl1xv1r"
                    },
                    1: {
                        className: "x1n2onr6 xjibb99 x3v4nfg x1h1h5sg x1ypdohk xkcp37y"
                    },
                    3: {
                        className: "x1n2onr6 xjibb99 x3v4nfg x1h1h5sg x1ypdohk x1a842fp xl1xv1r xkcp37y"
                    }
                })[!!ae << 1 | !!(ae && o("WAWebClientFeatureFlags").isFeatureEnabled("youtube_video_preview_without_blur") || !O && e.msg.thumbnailHQ) << 0];
                t[43] = x;
                t[44] = O;
                t[45] = e.msg.thumbnailHQ;
                t[46] = alt;
                t[47] = oe;
            } else {
                alt = t[46];
                oe = t[47];
            }
            const ie = `data:image/jpeg;base64,${B}`;
            let le;
            if (t[48] !== alt || t[49] !== oe || t[50] !== ie) {
                le = <img {...babelHelpers.extends({
                    alt
                }, oe, {
                    src: ie
                })}/>;
                t[48] = alt;
                t[49] = oe;
                t[50] = ie;
                t[51] = le;
            } else {
                le = t[51];
            }
            te = le;
            let se;
            if (t[52] !== x) {
                se = o("WAWebPipAttributionIcon").getAttributionIcon(x);
                t[52] = x;
                t[53] = se;
            } else {
                se = t[53];
            }
            const ue = se;
            if (ue) {
                let ce;
                if (t[54] === Symbol.for("react.memo_cache_sentinel")) {
                    ce = {
                        className: "x10l6tqk x1bv8kjd x1jn9clo x1vjfegm"
                    };
                    t[54] = ce;
                } else {
                    ce = t[54];
                }
                let de;
                if (t[55] !== ue) {
                    de = <div {...babelHelpers.extends({}, ce, {
                        children: <C Icon={ue}/>
                    })}/>;
                    t[55] = ue;
                    t[56] = de;
                } else {
                    de = t[56];
                }
                ne = de;
            }
        } else {
            let me;
            if (t[57] === Symbol.for("react.memo_cache_sentinel")) {
                me = <div className="x1n2onr6 xh8yej3 xnjobev x8du59y"/>;
                t[57] = me;
            } else {
                me = t[57];
            }
            te = me;
        }
        let pe;
        if (t[58] !== q) {
            pe = q ? s._("Open link") : s._("Open video player");
            t[58] = q;
            t[59] = pe;
        } else {
            pe = t[59];
        }
        let _e;
        if (t[60] !== ne || t[61] !== U || t[62] !== J || t[63] !== ee || t[64] !== pe || t[65] !== te) {
            const Component = r("WAWebUnstyledButton.react");
            _e = <Component tabIndex={0} ref={aRef} xstyle={p.thumbnailWrapper} onClick={U} aria-label={pe}>{ne}{te}{J}{ee}</Component>;
            t[60] = ne;
            t[61] = U;
            t[62] = J;
            t[63] = ee;
            t[64] = pe;
            t[65] = te;
            t[66] = _e;
        } else {
            _e = t[66];
        }
        const matchedText = e.msg.matchedText;
        const e_onExternalLinkOpen = e.onExternalLinkOpen;
        let he;
        if (t[67] === Symbol.for("react.memo_cache_sentinel")) {
            he = {
                className: "x104kibb x1c4vz4f xs83m0k xdl72j9 x13m54ha x6ikm8r x10wlt62 x14ug900 xlyipyv x1h7i4cw x1ua5tub"
            };
            t[67] = he;
        } else {
            he = t[67];
        }
        let ye;
        if (t[68] !== e.msg.title) {
            ye = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: e.msg.title
            });
            t[68] = e.msg.title;
            t[69] = ye;
        } else {
            ye = t[69];
        }
        let Ce;
        if (t[70] !== e.msg.title || t[71] !== ye) {
            Ce = <div {...babelHelpers.extends({}, he, {
                title: e.msg.title,
                children: ye
            })}/>;
            t[70] = e.msg.title;
            t[71] = ye;
            t[72] = Ce;
        } else {
            Ce = t[72];
        }
        let be;
        if (t[73] !== A || t[74] !== D || t[75] !== e.msg.matchedText || t[76] !== e.onExternalLinkOpen || t[77] !== Ce || t[78] !== M) {
            const Component = o("WAWebExternalLink.react").ExternalLink;
            be = <Component className={A} href={matchedText} onClick={e_onExternalLinkOpen} tabIndex={-1}>{Ce}{D}{M}</Component>;
            t[73] = A;
            t[74] = D;
            t[75] = e.msg.matchedText;
            t[76] = e.onExternalLinkOpen;
            t[77] = Ce;
            t[78] = M;
            t[79] = be;
        } else {
            be = t[79];
        }
        let ve;
        if (t[80] !== X || t[81] !== _e || t[82] !== be) {
            ve = <div className={X}>{_e}{be}</div>;
            t[80] = X;
            t[81] = _e;
            t[82] = be;
            t[83] = ve;
        } else {
            ve = t[83];
        }
        return ve;
    }
    function h(e) {
        const t = e.split("?");
        if (t.length !== 2) {
            return 0;
        }
        const n = t[1];
        const a = new URLSearchParams(n).get(o("WAWebPipConst").YOUTUBE_URL_TIME_PARAM_NAME);
        if (r("isStringNullOrEmpty")(a)) {
            return 0;
        }
        const i = a.match(o("WAWebPipConst").YOUTUBE_URL_TIME_PARAM_PATTERN);
        let l = 0;
        if (i != null && i.length) {
            for(let s = 1; s < i.length; s++){
                const u = i[s];
                if (u) {
                    const c = parseInt(u, 10);
                    if (Number.isNaN(c)) {
                        return 0;
                    }
                    if (u.endsWith("h")) {
                        l = l + c * 3600;
                    }
                    if (u.endsWith("m")) {
                        l = l + c * 60;
                    }
                    if (u.endsWith("s")) {
                        l = l + c;
                    }
                    if (/^\d+$/.test(u)) {
                        l = l + c;
                    }
                }
            }
        }
        return l;
    }
    function y(e) {
        return f.includes(e);
    }
    function C(e) {
        const t = o("react-compiler-runtime").c(2);
        const EIcon = e.Icon;
        let r;
        if (t[0] !== EIcon) {
            r = <EIcon/>;
            t[0] = EIcon;
            t[1] = r;
        } else {
            r = t[1];
        }
        return r;
    }
    l.default = g;
}, 226);