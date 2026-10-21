__d("WAWebMessageLiveLocation.react", [
    "fbt",
    "WATimeUtils",
    "WAWebConfirmPopup.react",
    "WAWebDetailImage.react",
    "WAWebDisplayType",
    "WAWebElevatedPushNamesFlag",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMap.react",
    "WAWebMessageAuthor.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageMeta.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = {
        paddingTop3: {
            paddingTop: "xyqdw3p",
            $$css: true
        },
        paddingBottom5: {
            paddingBottom: "xs9asl8",
            $$css: true
        },
        paddingTop7: {
            paddingTop: "xm7lytj",
            $$css: true
        },
        paddingInlineStart6: {
            paddingInlineStart: "x25sj25",
            $$css: true
        },
        paddingInline3: {
            paddingInlineStart: "x1djpfga",
            paddingInlineEnd: "x1im30kd",
            paddingLeft: null,
            paddingRight: null,
            $$css: true
        }
    };
    const p = {
        caption: {
            boxSizing: "x9f619",
            maxWidth: "xaulysm",
            $$css: true
        },
        captionAnnouncement: {
            maxWidth: "xmewjk2",
            $$css: true
        },
        avatar: {
            position: "x10l6tqk",
            top: "x13vifvy",
            right: "x3m8u43",
            bottom: "x1ey2m1c",
            left: "xu96u03",
            width: "x187nhsf",
            height: "xn3w4p2",
            filter: "xkozzs",
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
        hidden: {
            visibility: "xlshs6z",
            $$css: true
        },
        metaWithCaption: {
            bottom: "xy1j3rs",
            position: "x10l6tqk",
            insetInlineEnd: "x11dcrhx",
            left: null,
            right: null,
            zIndex: "xhtitgo",
            $$css: true
        }
    };
    const _ = 150;
    const f = 270;
    const g = 30;
    const h = 40;
    const y = 250;
    const C = 474;
    const b = _ + g + h;
    function VComponent(t) {
        const n = o("react-compiler-runtime").c(54);
        const { displayAuthor, msgKey, quotedMsg, trusted } = t;
        let g;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let h;
            g = [
                (h = o("WAWebMsgGetters")).getComment,
                h.getFinalLat,
                h.getFinalLng,
                h.getLat,
                h.getLng,
                o("WAWebFrontendMsgGetters").getSenderObj,
                h.getSender,
                h.getShareDuration,
                h.getT
            ];
            n[0] = g;
        } else {
            g = n[0];
        }
        const b = o("useWAWebMsgValues").useMsgValues(msgKey, g);
        const v = b[0];
        const R = b[1];
        const L = b[2];
        const E = b[3];
        const k = b[4];
        const I = b[5];
        const T = b[6];
        const D = b[7];
        const x = b[8];
        const $ = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(msgKey, false);
        const P = u_useState(false);
        const N = P[0];
        const M = P[1];
        const w = SComponent;
        let A;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            A = function() {
                M(true);
            };
            n[1] = A;
        } else {
            A = n[1];
        }
        const onLoad = A;
        let O;
        if (n[2] !== D || n[3] !== x) {
            O = function() {
                if (D == null) {
                    return x;
                }
                return x + D;
            };
            n[2] = D;
            n[3] = x;
            n[4] = O;
        } else {
            O = n[4];
        }
        const B = O;
        const W = !!v;
        const q = o("WAWebDisplayType").isWideDisplay(t.displayType);
        const U = displayAuthor ? <div {...babelHelpers.extends({}, {
            0: {
                className: "x25sj25 xyqdw3p xs9asl8"
            },
            1: {
                className: "x25sj25 xyqdw3p xs9asl8 x1uc92m"
            }
        }[!!o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled($) << 0], {
            children: c.jsx(r("WAWebMessageAuthor.react"), {
                msgKey,
                contact: I,
                displayType: t.displayType
            })
        })}/> : null;
        let V;
        if (n[5] !== quotedMsg) {
            V = quotedMsg ? <div className="xahult9">{quotedMsg}</div> : null;
            n[5] = quotedMsg;
            n[6] = V;
        } else {
            V = n[6];
        }
        const H = V;
        const G = o("WATimeUtils").unixTime() >= B();
        const z = G && R !== undefined && L !== undefined;
        let lat = E;
        let lng = k;
        if (z) {
            lat = R;
            lng = L;
        }
        const Q = w;
        const X = q ? C : f;
        const Y = q ? y : _;
        let J;
        if (n[7] !== Y) {
            J = {
                height: Y
            };
            n[7] = Y;
            n[8] = J;
        } else {
            J = n[8];
        }
        const Z = J;
        let ee;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            ee = "x1n2onr6 x78zum5 x6s0dn4 xl56j7k x6ikm8r x10wlt62 x1i282gy xx9ypkp";
            n[9] = ee;
        } else {
            ee = n[9];
        }
        let te;
        if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
            te = {
                className: "x1n2onr6"
            };
            n[10] = te;
        } else {
            te = n[10];
        }
        let ne;
        if (n[11] !== Y || n[12] !== lat || n[13] !== lng || n[14] !== X) {
            const Component = r("WAWebMap.react");
            ne = <div {...babelHelpers.extends({}, te, {
                children: <Component lat={lat} lng={lng} width={X} height={Y} xstyle={p.thumbBody} linkify={false} showMarker={false} onLoad={onLoad}/>
            })}/>;
            n[11] = Y;
            n[12] = lat;
            n[13] = lng;
            n[14] = X;
            n[15] = ne;
        } else {
            ne = n[15];
        }
        let re;
        if (n[16] !== N) {
            re = (e || (e = r("stylex"))).props(p.avatar, o("WDSMargins.stylex").wdsMargins.marginAuto, !N && p.hidden);
            n[16] = N;
            n[17] = re;
        } else {
            re = n[17];
        }
        let oe;
        if (n[18] !== T) {
            oe = c.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: T,
                size: 40,
                border: true
            });
            n[18] = T;
            n[19] = oe;
        } else {
            oe = n[19];
        }
        let ae;
        if (n[20] !== re || n[21] !== oe) {
            ae = <div {...babelHelpers.extends({}, re, {
                children: oe
            })}/>;
            n[20] = re;
            n[21] = oe;
            n[22] = ae;
        } else {
            ae = n[22];
        }
        let ie;
        if (n[23] !== G) {
            ie = G && <div className="x10l6tqk x13vifvy x1ey2m1c xu96u03 xh8yej3 x5yr21d x1lliihq xki6t65"/>;
            n[23] = G;
            n[24] = ie;
        } else {
            ie = n[24];
        }
        let le;
        if (n[25] !== Z || n[26] !== ae || n[27] !== ie || n[28] !== ne) {
            le = <div className={ee} onClick={Q} style={Z}>{ne}{ae}{ie}</div>;
            n[25] = Z;
            n[26] = ae;
            n[27] = ie;
            n[28] = ne;
            n[29] = le;
        } else {
            le = n[29];
        }
        const se = le;
        let ue;
        if (n[30] === Symbol.for("react.memo_cache_sentinel")) {
            ue = s._("Live location not available");
            n[30] = ue;
        } else {
            ue = n[30];
        }
        const ce = ue;
        let de;
        if (n[31] === Symbol.for("react.memo_cache_sentinel")) {
            de = {
                className: "x1n2onr6 x1ey2m1c xu96u03 x1gnnpzl xexx8yu x1im30kd x18d9i69 x1djpfga x1bu39yj x11ecxm0 xd15eu0 xdpxx8g"
            };
            n[31] = de;
        } else {
            de = n[31];
        }
        let me;
        if (n[32] === Symbol.for("react.memo_cache_sentinel")) {
            me = <div {...babelHelpers.extends({}, de, {
                onClick: Q,
                children: <span className="x1n2onr6 xndqk7f x1pg5gke xhslqc4 xxymvpz">{ce}</span>
            })}/>;
            n[32] = me;
        } else {
            me = n[32];
        }
        const pe = me;
        const _e = W ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.caption, m.paddingTop7, o("WDSPaddings.stylex").wdsPaddings.paddingEnd4, m.paddingBottom5, m.paddingInlineStart6, q && p.captionAnnouncement), {
            children: c.jsx(r("WAWebMessageCaption.react"), {
                msgKey,
                trusted
            })
        })}/> : null;
        const fe = W && p.metaWithCaption;
        let ge;
        if (n[33] !== W) {
            ge = !W && [
                m.paddingInline3,
                m.paddingTop3
            ];
            n[33] = W;
            n[34] = ge;
        } else {
            ge = n[34];
        }
        let he;
        if (n[35] !== fe || n[36] !== ge) {
            he = [
                fe,
                ge
            ];
            n[35] = fe;
            n[36] = ge;
            n[37] = he;
        } else {
            he = n[37];
        }
        let ye;
        if (n[38] !== msgKey) {
            ye = c.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey
            });
            n[38] = msgKey;
            n[39] = ye;
        } else {
            ye = n[39];
        }
        let Ce;
        if (n[40] !== he || n[41] !== ye) {
            const Component = o("WAWebFlex.react").FlexRow;
            Ce = <Component justify="end" xstyle={he}>{ye}</Component>;
            n[40] = he;
            n[41] = ye;
            n[42] = Ce;
        } else {
            Ce = n[42];
        }
        const be = Ce;
        const Ve = r("WAWebMessageBubbleHiddenText.react");
        const Se = {
            0: "x1n2onr6 xaulysm xt0e3qv xyqdw3p x1im30kd xg8j3zb x1djpfga",
            2: "x1n2onr6 xt0e3qv xyqdw3p x1im30kd xg8j3zb x1djpfga xmewjk2",
            1: "x1n2onr6 xaulysm xyqdw3p x1im30kd xg8j3zb x1djpfga x1ypdohk",
            3: "x1n2onr6 xyqdw3p x1im30kd xg8j3zb x1djpfga xmewjk2 x1ypdohk"
        }[!!q << 1 | !!Q << 0];
        let Re;
        if (n[43] !== Ve || n[44] !== U || n[45] !== _e || n[46] !== se || n[47] !== be || n[48] !== msgKey || n[49] !== H || n[50] !== I || n[51] !== pe || n[52] !== Se) {
            Re = <Ve className={Se} contact={I} msgKey={msgKey}>{U}{H}{se}{pe}{_e}{be}</Ve>;
            n[43] = Ve;
            n[44] = U;
            n[45] = _e;
            n[46] = se;
            n[47] = be;
            n[48] = msgKey;
            n[49] = H;
            n[50] = I;
            n[51] = pe;
            n[52] = Se;
            n[53] = Re;
        } else {
            Re = n[53];
        }
        return Re;
    }
    function SComponent() {
        const Component = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component tsNavigationData={{
            surface: "unknown",
            viewName: "live-location"
        }} okText={r("WAWebFbtCommon")("OK")} onOK={o("WAWebModalManager").closeModalManager}>{s._("Live location is not available on this device. View location on your phone.")}</Component>);
    }
    l.MSG_HEIGHT = b;
    l.LiveLocation = VComponent;
}, 226);