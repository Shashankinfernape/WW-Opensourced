__d("WAWebMessageLocation.react", [
    "WALogger",
    "WAWebBizCtwaContext.react",
    "WAWebBizTemplateMessageFooter.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebExternalLink.react",
    "WAWebFrontendMsgGetters",
    "WAWebMap.react",
    "WAWebMapUtils",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageForwardedIndicator.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageThumbShadeBottom.react",
    "WAWebMsgGetters",
    "WAWebStopEvent",
    "WAWebURLUtils",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = u || (u = o("react"));
    const d = {
        paddingTop3: {
            paddingTop: "xyqdw3p",
            $$css: true
        },
        paddingInlineStart6: {
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        paddingBottom5: {
            paddingBottom: "xs9asl8",
            $$css: true
        },
        marginBottom3: {
            marginBottom: "xahult9",
            $$css: true
        },
        paddingTop7: {
            paddingTop: "xm7lytj",
            $$css: true
        }
    };
    const m = 150;
    const p = 270;
    const _ = 330;
    const f = 250;
    const g = 474;
    const h = [
        "foursquare.com",
        "facebook.com",
        "maps.google.com"
    ];
    const y = {
        title: {
            display: "x1lliihq",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            fontSize: "x1f6kntn",
            fontWeight: "xo1l8bm",
            textOverflow: "xlyipyv",
            width: "xeq5yr9",
            whiteSpace: "xuxw1ft",
            textDecoration: "x1bvjpef x1lku1pv x11iimpl xbvygy2 x1wp9yj1 x1e2wovf",
            color: "x1ph7ams x17f7hit",
            backgroundColor: "xn69kzl",
            textUnderlineOffset: "xrys4gj xhmieyt",
            $$css: true
        },
        text: {
            boxSizing: "x9f619",
            maxWidth: "xaulysm",
            textAlign: "x1yc453h",
            $$css: true
        },
        thumbBody: {
            zIndex: "x1vjfegm",
            flexGrow: "x1c4vz4f",
            flexShrink: "x2lah0s",
            flexBasis: "xdl72j9",
            WebkitTransition: "xtzlr6k",
            $$css: true
        },
        caption: {
            boxSizing: "x9f619",
            maxWidth: "x1xtabgy",
            $$css: true
        }
    };
    function C(t) {
        let n;
        let a;
        const t_msgKey = t.msgKey;
        const l = o("useWAWebMsgValues").useMsgValues(t_msgKey, [
            (n = o("WAWebMsgGetters")).getCaption,
            n.getClientUrl,
            (a = o("WAWebFrontendMsgGetters")).getDir,
            n.getFooter,
            n.getId,
            n.getIsGroupMsg,
            n.getIsSentByMe,
            n.getLat,
            n.getLng,
            a.getRtl,
            a.getSenderObj,
            n.getType,
            n.getCtwaContext,
            n.getSupportsMessageFooter,
            n.getIsDynamicReplyButtonsMsg,
            a.getHasBodyOrFooter,
            n.getLoc,
            a.getShouldShowForwarded,
            n.getIsNewsletterMsg
        ]);
        const u = l[0];
        const C = l[1];
        const dir = l[2];
        const R = l[3];
        const L = l[4];
        const E = l[5];
        const k = l[6];
        const lat = l[7];
        const lng = l[8];
        const rtl = l[9];
        const x = l[10];
        const $ = l[11];
        const P = l[12];
        const N = l[13];
        const M = l[14];
        const w = l[15];
        const A = l[16];
        const F = l[17];
        const O = l[18];
        const B = a.getMaybeChatByMsgKey(t_msgKey, O);
        const loc = v(A);
        const q = loc?.name;
        const plainText = o("WAWebMapUtils").getMapUrl({
            lat,
            lng,
            name: q
        });
        const pageUrl = C || plainText;
        const H = r("WAWebURLUtils").isHttps(pageUrl);
        const G = r("WAWebURLUtils").hostname(pageUrl);
        const isUntrusted = !h.some((e)=>G.includes(e));
        const j = !M && (isUntrusted || !!(H && loc && !pageUrl.includes("javascript")));
        if (!H && pageUrl.toLowerCase().startsWith("javascript:")) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Bad url: ",
                ""
            ])), pageUrl).sendLogs("URL error");
        }
        const K = j ? <B1Component pageUrl={pageUrl} msgKey={t_msgKey} loc={loc} isUntrusted={isUntrusted}/> : null;
        const Q = K != null || N && w ? null : c.jsx(r("WAWebMessageThumbShadeBottom.react"), {});
        const X = o("WAWebDisplayType").isWideDisplay(t.displayType);
        const Y = o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(B);
        const J = (s || (s = r("stylex")))(d.paddingTop3, d.paddingInlineStart6, F ? o("WDSPaddings.stylex").wdsPaddings.paddingBottom0 : d.paddingBottom5, Y && o("WDSPaddings.stylex").wdsPaddings.paddingEnd4);
        const Z = t.displayAuthor ? <div className={J}>{c.jsx(r("WAWebMessageAuthor.react"), {
            msgKey: t_msgKey,
            contact: x,
            displayType: t.displayType
        })}</div> : null;
        const Component = r("WAWebMessageForwardedIndicator.react");
        const ee = F ? <Component msgKey={t_msgKey} className={(s || (s = r("stylex")))(d.paddingTop3, o("WDSPaddings.stylex").wdsPaddings.paddingEnd0, d.paddingInlineStart6, t.displayAuthor ? o("WDSPaddings.stylex").wdsPaddings.paddingTop0 : d.paddingTop3)}/> : null;
        const te = {
            0: "x1n2onr6 xaulysm xyqdw3p x1im30kd xg8j3zb x1djpfga",
            2: "x1n2onr6 xyqdw3p x1im30kd xg8j3zb x1djpfga xdduh5l",
            1: "x1n2onr6 xyqdw3p x1im30kd xg8j3zb x1djpfga xmewjk2",
            3: "x1n2onr6 xyqdw3p x1im30kd xg8j3zb x1djpfga xmewjk2"
        }[(P != null) << 1 | !!X << 0];
        let ne = p;
        if (P) {
            ne = _;
        } else if (X) {
            ne = g;
        }
        const re = X ? f : m;
        const oe = {
            height: re
        };
        const ae = t.quotedMsg ? <div className="xahult9">{t.quotedMsg}</div> : null;
        let ie;
        let le;
        if (N) {
            ie = u != null && u !== "" ? <div {...babelHelpers.extends({}, (s || (s = r("stylex"))).props(y.caption, d.paddingTop7, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, d.paddingInlineStart6, d.paddingBottom5), {
                children: c.jsx(r("WAWebMessageCaption.react"), {
                    msgKey: t_msgKey,
                    spacer: !R,
                    trusted: t.trusted
                })
            })}/> : null;
            le = c.jsx(r("WAWebBizTemplateMessageFooter.react"), {
                dir,
                footer: R,
                isShown: N,
                msgKey: t_msgKey,
                rtl,
                type: $,
                trusted: t.trusted
            });
        }
        const Component_1 = o("WAWebCopyPasteSelectable.react").SelectableDiv;
        const Component_2 = r("WAWebMessageBubbleHiddenText.react");
        return <div><Component_2 className={te} contact={x} msgKey={t_msgKey}>{Z}{ee}{ae}{c.jsx(r("WAWebBizCtwaContext.react"), {
            msgKey: t_msgKey,
            wrapperClass: s(o("WDSMargins.stylex").wdsMargins.marginTop0, o("WDSMargins.stylex").wdsMargins.marginEnd0, d.marginBottom3, o("WDSMargins.stylex").wdsMargins.marginStart0)
        })}<Component_1 className="x1n2onr6 x78zum5 x6s0dn4 xl56j7k x6ikm8r x10wlt62 x1i282gy xx9ypkp xd15eu0 x11ecxm0" onClick={o("WAWebStopEvent").stopPropagation} plainText={plainText} selectable style={oe}>{c.jsx(r("WAWebMap.react"), {
            lat,
            lng,
            width: ne,
            height: re,
            name: q,
            xstyle: y.thumbBody
        })}{Q}</Component_1>{K}{ie}{le}<div {...babelHelpers.extends({}, {
            0: {
                className: "x10l6tqk x11dcrhx xrb244j xhtitgo"
            },
            1: {
                className: "x10l6tqk xhtitgo x1inkcgm xy1j3rs"
            }
        }[!!K << 0], {
            children: c.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey: t_msgKey
            })
        })}/></Component_2></div>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function B1Component(e) {
        const t = o("react-compiler-runtime").c(22);
        const { isUntrusted, loc, msgKey, pageUrl } = e;
        let u;
        let m;
        let p;
        if (t[0] !== pageUrl) {
            p = r("WAWebURLUtils").hostname(pageUrl);
            t[0] = pageUrl;
            t[1] = p;
        } else {
            p = t[1];
        }
        const _ = p;
        let f;
        if (t[2] !== isUntrusted || t[3] !== _) {
            f = isUntrusted ? <span className="x1ncwhqj x1d3mw78 xthy82k">{_}</span> : null;
            t[2] = isUntrusted;
            t[3] = _;
            t[4] = f;
        } else {
            f = t[4];
        }
        const g = f;
        if (loc != null && loc.name) {
            if (!isUntrusted && !pageUrl.includes("javascript")) {
                let h;
                if (t[5] !== loc.name || t[6] !== pageUrl) {
                    const Component = o("WAWebExternalLink.react").ExternalLink;
                    h = <Component xstyle={y.title} href={pageUrl}>{loc.name}</Component>;
                    t[5] = loc.name;
                    t[6] = pageUrl;
                    t[7] = h;
                } else {
                    h = t[7];
                }
                u = h;
            } else {
                let C;
                if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
                    C = {
                        className: "x1lliihq x6ikm8r x10wlt62 x1f6kntn xo1l8bm xlyipyv xeq5yr9 xuxw1ft"
                    };
                    t[8] = C;
                } else {
                    C = t[8];
                }
                let b;
                if (t[9] !== loc.name) {
                    b = <span {...babelHelpers.extends({}, C, {
                        children: loc.name
                    })}/>;
                    t[9] = loc.name;
                    t[10] = b;
                } else {
                    b = t[10];
                }
                u = b;
            }
        }
        if (loc) {
            let v;
            if (t[11] !== isUntrusted) {
                v = ({
                    0: "x1pg5gke",
                    1: "x1pg5gke x1lliihq"
                })[!!isUntrusted << 0];
                t[11] = isUntrusted;
                t[12] = v;
            } else {
                v = t[12];
            }
            const S = v;
            let R;
            if (t[13] !== S || t[14] !== loc.addr) {
                const Component = o("WAWebCopyPasteSelectable.react").SelectableDiv;
                R = (loc.addr ?? "") !== "" ? <Component className={S} selectable title={loc.addr}>{loc.addr}</Component> : null;
                t[13] = S;
                t[14] = loc.addr;
                t[15] = R;
            } else {
                R = t[15];
            }
            m = R;
        }
        let E;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            E = (s || (s = r("stylex"))).props(y.text, d.paddingTop7, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, o("WDSPaddings.stylex").wdsPaddings.paddingBottom4, d.paddingInlineStart6);
            t[16] = E;
        } else {
            E = t[16];
        }
        let k;
        if (t[17] !== m || t[18] !== msgKey || t[19] !== u || t[20] !== g) {
            const Component = r("WAWebMessageSpacerText.react");
            k = <div {...babelHelpers.extends({
                "data-testid": "location-msg"
            }, E, {
                children: <Component msgKey={msgKey} data-id={msgKey}>{u}{m}{g}</Component>
            })}/>;
            t[17] = m;
            t[18] = msgKey;
            t[19] = u;
            t[20] = g;
            t[21] = k;
        } else {
            k = t[21];
        }
        return k;
    }
    function v(e) {
        if (e == null || e === "") {
            return null;
        }
        const t = e.split("\n");
        if (t.length === 2) {
            return {
                name: t[0],
                addr: t[1]
            };
        }
        return {
            name: e
        };
    }
    l.PREVIEW_HEIGHT = m;
    l.Location = C;
}, 98);