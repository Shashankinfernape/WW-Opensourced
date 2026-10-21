__d("WAWebMessageHoverBarProvider.react", [
    "fbt",
    "ReactDOM",
    "WALogger",
    "WAWebAck",
    "WAWebChatThemeModeContext",
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMessageHoverBarContainer.react",
    "WAWebMessageHoverBarContext",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgReply",
    "WAWebNoop",
    "WAWebPortalThemeWrapper.react",
    "WAWebReactionGatingUtils",
    "WAWebReactionUserJourneyLogger",
    "WAWebReactionsBEUtils",
    "WAWebReactionsUtils",
    "WAWebSendReactionMsgAction",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
    "useWAWebOnUnmount",
    "useWAWebReactionEmojiPickerMenu",
    "useWAWebStableCallback",
    "useWAWebTimeout",
    "useWDSMenu"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useContext, useEffect, useMemo, useRef, useState } = d;
    const y = 50;
    const C = 0.45;
    const b = 0.4;
    const v = 0.2;
    const S = 0.4;
    const R = 90;
    const L = 500;
    const E = 200;
    const k = 300;
    const I = 1500;
    const T = "xlcm4rn-B";
    const D = "x17qceat-B";
    function XComponent(e) {
        const n = o("react-compiler-runtime").c(162);
        const e_children = e.children;
        const i = useState(null);
        const l = i[0];
        const u = i[1];
        const d = useState(false);
        const m = d[0];
        const f = d[1];
        const T = useState(null);
        const D = T[0];
        const x = T[1];
        const N = useState(o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION);
        const M = N[0];
        const w = N[1];
        const A = useContext(r("WAWebChatThemeModeContext"));
        const A_wallpaperStyle = A.wallpaperStyle;
        const O = useState(false);
        const B = O[0];
        const W = O[1];
        const q = useState(null);
        const U = q[0];
        const V = q[1];
        const H = useState(false);
        const G = H[0];
        const z = H[1];
        const j = useState(false);
        const K = j[0];
        const Q = j[1];
        const X = useState(false);
        const Y = X[0];
        const J = X[1];
        const ZRef = useRef(null);
        const eeRef = useRef(null);
        const teRef = useRef(null);
        const neRef = useRef(null);
        const reRef = useRef(null);
        const oeRef = useRef(null);
        const aeRef = useRef(false);
        const ieRef = useRef(false);
        const leRef = useRef(null);
        const seRef = useRef(0);
        const ueRef = useRef(false);
        const ceRef = useRef(null);
        const deRef = useRef(null);
        const me = useState(null);
        const menuOwnerMsgId = me[0];
        const _e = me[1];
        const feRef = useRef(r("WAWebNoop"));
        const geRef = useRef(false);
        const heRef = useRef(null);
        const yeRef = useRef(null);
        let Ce;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            Ce = function() {
                J(true);
            };
            n[0] = Ce;
        } else {
            Ce = n[0];
        }
        const be = o("useWAWebTimeout").useManualTimeout(Ce);
        const ve = be[0];
        const Se = be[1];
        let Re;
        if (n[1] !== Se) {
            Re = function() {
                const e = leRef.current != null;
                leRef.current = null;
                u(null);
                x(null);
                W(false);
                V(null);
                z(false);
                Se();
                J(false);
                geRef.current = false;
                ZRef.current = null;
                eeRef.current = null;
                if (ceRef.current == null && e) {
                    ueRef.current = false;
                }
                teRef.current = null;
                aeRef.current = false;
            };
            n[1] = Se;
            n[2] = Re;
        } else {
            Re = n[2];
        }
        const Le = Re;
        let Ee;
        if (n[3] !== Le) {
            Ee = function() {
                if (geRef.current) {
                    Le();
                }
            };
            n[3] = Le;
            n[4] = Ee;
        } else {
            Ee = n[4];
        }
        const ke = o("useWAWebTimeout").useManualTimeout(Ee);
        const Ie = ke[0];
        const Te = ke[1];
        let De;
        if (n[5] !== Te || n[6] !== Le || n[7] !== Ie) {
            De = function() {
                if (!geRef.current) {
                    const e = o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled() && leRef.current != null && neRef.current != null;
                    if (!e) {
                        Te();
                        Le();
                        return;
                    }
                    geRef.current = true;
                    z(true);
                    Ie(E);
                }
            };
            n[5] = Te;
            n[6] = Le;
            n[7] = Ie;
            n[8] = De;
        } else {
            De = n[8];
        }
        const xe = De;
        let $e;
        let Pe;
        if (n[9] !== l || n[10] !== xe) {
            $e = function() {
                if (l != null) {
                    const e = ZRef.current;
                    const root = e?.closest('[data-testid="conversation-panel-messages"]');
                    if (!(e == null || root == null)) {
                        const n = new IntersectionObserver(function([t]) {
                            if (t != null && t.intersectionRatio === 0 && !ieRef.current) {
                                xe();
                            }
                        }, {
                            root
                        });
                        n.observe(e);
                        return function() {
                            n.disconnect();
                        };
                    }
                }
            };
            Pe = [
                l,
                xe
            ];
            n[9] = l;
            n[10] = xe;
            n[11] = $e;
            n[12] = Pe;
        } else {
            $e = n[11];
            Pe = n[12];
        }
        useEffect($e, Pe);
        let Ne;
        if (n[13] !== xe) {
            Ne = function() {
                Q(false);
                if (!ieRef.current) {
                    const t = ceRef.current == null && Date.now() - seRef.current < k;
                    const n = eeRef.current ?? (()=>ZRef.current?.matches(":hover") === true);
                    if (!(t && n())) {
                        xe();
                    }
                }
            };
            n[13] = xe;
            n[14] = Ne;
        } else {
            Ne = n[14];
        }
        const Me = o("useWAWebTimeout").useManualTimeout(Ne);
        const we = Me[0];
        const Ae = Me[1];
        let Fe;
        if (n[15] !== we) {
            Fe = function(t) {
                Q(true);
                we(t);
            };
            n[15] = we;
            n[16] = Fe;
        } else {
            Fe = n[16];
        }
        const Oe = Fe;
        let Be;
        if (n[17] !== Ae) {
            Be = function() {
                Q(false);
                Ae();
            };
            n[17] = Ae;
            n[18] = Be;
        } else {
            Be = n[18];
        }
        const cancelDismiss = Be;
        let qe;
        if (n[19] === Symbol.for("react.memo_cache_sentinel")) {
            qe = function() {
                aeRef.current = false;
            };
            n[19] = qe;
        } else {
            qe = n[19];
        }
        const Ue = o("useWAWebTimeout").useManualTimeout(qe);
        const Ve = Ue[0];
        let He;
        if (n[20] !== cancelDismiss || n[21] !== Te || n[22] !== ve) {
            He = function(t, n, r, o, a) {
                if (ceRef.current == null) {
                    eeRef.current = a;
                    cancelDismiss();
                    if (geRef.current) {
                        Te();
                        geRef.current = false;
                        z(false);
                    }
                    const e = n.id.toString();
                    if (!(leRef.current !== e && (ieRef.current || aeRef.current))) {
                        if (leRef.current === e) {
                            ZRef.current = t;
                            teRef.current = o;
                            w(o.displayType);
                            return;
                        }
                        leRef.current = e;
                        ZRef.current = t;
                        teRef.current = o;
                        V(t);
                        u(n);
                        f(r);
                        x(o.menuContent);
                        w(o.displayType);
                        W(false);
                        J(false);
                        if (r) {
                            ve(I);
                        }
                    }
                }
            };
            n[20] = cancelDismiss;
            n[21] = Te;
            n[22] = ve;
            n[23] = He;
        } else {
            He = n[23];
        }
        const Ge = He;
        let ze;
        if (n[24] !== Ge) {
            ze = function() {
                const heRef_current = heRef.current;
                const yeRef_current = yeRef.current;
                if (yeRef_current != null) {
                    document.removeEventListener("mousemove", yeRef_current, true);
                    yeRef.current = null;
                }
                heRef.current = null;
                if (heRef_current != null) {
                    Ge(heRef_current.bubbleEl, heRef_current.msg, heRef_current.isSentByMe, heRef_current.actions, heRef_current.isPointerOverMsg);
                }
            };
            n[24] = Ge;
            n[25] = ze;
        } else {
            ze = n[25];
        }
        const je = r("useWAWebStableCallback")(ze);
        let Ke;
        if (n[26] !== je) {
            Ke = function() {
                je();
            };
            n[26] = je;
            n[27] = Ke;
        } else {
            Ke = n[27];
        }
        const Qe = o("useWAWebTimeout").useManualTimeout(Ke);
        const Xe = Qe[0];
        const Ye = Qe[1];
        let Je;
        if (n[28] !== Ye) {
            Je = function() {
                const yeRef_current = yeRef.current;
                if (yeRef_current != null) {
                    document.removeEventListener("mousemove", yeRef_current, true);
                    yeRef.current = null;
                }
                Ye();
                heRef.current = null;
            };
            n[28] = Ye;
            n[29] = Je;
        } else {
            Je = n[29];
        }
        const Ze = Je;
        let et;
        if (n[30] !== je || n[31] !== Ye || n[32] !== Ze || n[33] !== Xe) {
            et = function(t) {
                Ze();
                heRef.current = t;
                const e = {
                    emaVelocity: -1,
                    lastT: 0,
                    lastX: 0,
                    lastY: 0,
                    peakVelocity: 0
                };
                const n = function(n) {
                    Xe(R);
                    const n_timeStamp = n.timeStamp;
                    if (e.lastT === 0) {
                        e.lastT = n_timeStamp;
                        e.lastX = n.clientX;
                        e.lastY = n.clientY;
                        return;
                    }
                    const r = n_timeStamp - e.lastT;
                    if (!(r <= 0)) {
                        const o = Math.hypot(n.clientX - e.lastX, n.clientY - e.lastY);
                        const a = o / r;
                        e.lastT = n_timeStamp;
                        e.lastX = n.clientX;
                        e.lastY = n.clientY;
                        e.emaVelocity = e.emaVelocity < 0 ? a : S * a + (1 - S) * e.emaVelocity;
                        if (e.emaVelocity > e.peakVelocity) {
                            e.peakVelocity = e.emaVelocity;
                        }
                        if (e.peakVelocity >= b && e.emaVelocity < e.peakVelocity * C && e.emaVelocity < v) {
                            Ye();
                            je();
                        }
                    }
                };
                yeRef.current = n;
                document.addEventListener("mousemove", n, {
                    capture: true,
                    passive: true
                });
                Xe(R);
            };
            n[30] = je;
            n[31] = Ye;
            n[32] = Ze;
            n[33] = Xe;
            n[34] = et;
        } else {
            et = n[34];
        }
        const tt = et;
        let nt;
        if (n[35] !== Ge || n[36] !== tt) {
            nt = function(bubbleEl, n, r, o, isPointerOverMsg) {
                if (ceRef.current == null) {
                    ueRef.current = true;
                }
                const i = n.id.toString();
                if (leRef.current === i) {
                    Ge(bubbleEl, n, r, o, isPointerOverMsg);
                    return;
                }
                if (heRef.current?.msg.id.toString() === i) {
                    heRef.current = {
                        actions: o,
                        bubbleEl,
                        isPointerOverMsg,
                        isSentByMe: r,
                        msg: n
                    };
                    return;
                }
                tt({
                    actions: o,
                    bubbleEl,
                    isPointerOverMsg,
                    isSentByMe: r,
                    msg: n
                });
            };
            n[35] = Ge;
            n[36] = tt;
            n[37] = nt;
        } else {
            nt = n[37];
        }
        const onHoverStart = nt;
        r("useWAWebOnUnmount")(Ze);
        let ot;
        if (n[38] !== Ze || n[39] !== Oe) {
            ot = function() {
                Ze();
                Oe(y);
            };
            n[38] = Ze;
            n[39] = Oe;
            n[40] = ot;
        } else {
            ot = n[40];
        }
        const at = ot;
        let it;
        if (n[41] !== Ge) {
            it = function(t, n, r, o) {
                const e = ceRef.current != null || Date.now() - seRef.current < k;
                if (!e) {
                    ueRef.current = false;
                }
                Ge(t, n, r, o);
            };
            n[41] = Ge;
            n[42] = it;
        } else {
            it = n[42];
        }
        const onFocusStart = it;
        let st;
        if (n[43] === Symbol.for("react.memo_cache_sentinel")) {
            st = function() {
                return ueRef.current;
            };
            n[43] = st;
        } else {
            st = n[43];
        }
        const isBarPointerRaised = st;
        let ct;
        if (n[44] !== Oe) {
            ct = function() {
                if (!(ieRef.current || aeRef.current)) {
                    Oe(y);
                }
            };
            n[44] = Oe;
            n[45] = ct;
        } else {
            ct = n[45];
        }
        const dt = ct;
        let mt;
        if (n[46] !== dt) {
            mt = function(t) {
                if (leRef.current === t) {
                    dt();
                }
            };
            n[46] = dt;
            n[47] = mt;
        } else {
            mt = n[47];
        }
        const onFocusEnd = mt;
        let _t;
        if (n[48] !== l) {
            _t = function(t) {
                if (l != null) {
                    o("WAWebSendReactionMsgAction").sendReactionToMsg(l, t).then(()=>{
                        if (t === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT) {
                            o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionUnselect();
                        } else {
                            o("WAWebReactionUserJourneyLogger").ReactionUserJourneyLogger.reactionSelect(t);
                        }
                    }).catch($);
                }
            };
            n[48] = l;
            n[49] = _t;
        } else {
            _t = n[49];
        }
        const ft = _t;
        let gt;
        if (n[50] !== cancelDismiss) {
            gt = function() {
                cancelDismiss();
            };
            n[50] = cancelDismiss;
            n[51] = gt;
        } else {
            gt = n[51];
        }
        const ht = gt;
        let yt;
        if (n[52] !== cancelDismiss) {
            yt = function() {
                cancelDismiss();
            };
            n[52] = cancelDismiss;
            n[53] = yt;
        } else {
            yt = n[53];
        }
        const Ct = yt;
        let bt;
        if (n[54] !== dt) {
            bt = function({ relatedTarget }) {
                const neRef_current = neRef.current;
                if (!(relatedTarget instanceof Node && neRef_current?.contains(relatedTarget) === true)) {
                    dt();
                }
            };
            n[54] = dt;
            n[55] = bt;
        } else {
            bt = n[55];
        }
        const vt = bt;
        let St;
        if (n[56] !== Te || n[57] !== Le) {
            St = function(t) {
                if (t.target === t.currentTarget && geRef.current) {
                    Te();
                    Le();
                }
            };
            n[56] = Te;
            n[57] = Le;
            n[58] = St;
        } else {
            St = n[58];
        }
        const Rt = St;
        let Lt;
        if (n[59] !== xe) {
            Lt = function() {
                let e;
                if (!geRef.current) {
                    if ((e = teRef.current) != null) {
                        e.onReply();
                    }
                    xe();
                }
            };
            n[59] = xe;
            n[60] = Lt;
        } else {
            Lt = n[60];
        }
        const Et = Lt;
        let kt;
        if (n[61] !== xe) {
            kt = function() {
                let e;
                if (!geRef.current) {
                    if ((e = teRef.current) != null) {
                        e.onEdit();
                    }
                    xe();
                }
            };
            n[61] = xe;
            n[62] = kt;
        } else {
            kt = n[62];
        }
        const It = kt;
        let Tt;
        if (n[63] === Symbol.for("react.memo_cache_sentinel")) {
            Tt = function() {
                let e;
                if (!((e = teRef.current) == null || e.returnFocusToMessage == null)) {
                    e.returnFocusToMessage();
                }
            };
            n[63] = Tt;
        } else {
            Tt = n[63];
        }
        const onEscape = Tt;
        let xt;
        if (n[64] !== Le || n[65] !== ft) {
            xt = function(t) {
                if (!geRef.current) {
                    ft(t);
                    Le();
                    feRef.current();
                }
            };
            n[64] = Le;
            n[65] = ft;
            n[66] = xt;
        } else {
            xt = n[66];
        }
        const $t = xt;
        let Pt;
        if (n[67] !== D || n[68] !== A_wallpaperStyle) {
            const Component = r("WAWebPortalThemeWrapper.react");
            Pt = D != null ? <Component wallpaperStyle={A_wallpaperStyle}>{D}</Component> : null;
            n[67] = D;
            n[68] = A_wallpaperStyle;
            n[69] = Pt;
        } else {
            Pt = n[69];
        }
        const Nt = Pt;
        let msgId;
        if (n[70] !== l?.id) {
            msgId = (l == null ? undefined : l.id.toString()) ?? null;
            n[70] = l?.id;
            n[71] = msgId;
        } else {
            msgId = n[71];
        }
        let At;
        if (n[72] !== l || n[73] !== xe) {
            At = function() {
                if (l == null) {
                    xe();
                } else {
                    oeRef.current?.focus();
                }
            };
            n[72] = l;
            n[73] = xe;
            n[74] = At;
        } else {
            At = n[74];
        }
        let Ft;
        if (n[75] !== $t || n[76] !== msgId || n[77] !== At || n[78] !== A_wallpaperStyle) {
            Ft = {
                targetRef: neRef,
                msgId,
                onSelection: $t,
                align: "start",
                themeXstyle: A_wallpaperStyle,
                onClose: At
            };
            n[75] = $t;
            n[76] = msgId;
            n[77] = At;
            n[78] = A_wallpaperStyle;
            n[79] = Ft;
        } else {
            Ft = n[79];
        }
        const Ot = r("useWAWebReactionEmojiPickerMenu")(Ft);
        const { closeMenu, isMenuOpen, menuPortal, openMenu } = Ot;
        let Vt;
        let Ht;
        if (n[80] !== closeMenu) {
            Vt = function() {
                feRef.current = closeMenu;
            };
            Ht = [
                closeMenu
            ];
            n[80] = closeMenu;
            n[81] = Vt;
            n[82] = Ht;
        } else {
            Vt = n[81];
            Ht = n[82];
        }
        useEffect(Vt, Ht);
        let Gt;
        if (n[83] !== l || n[84] !== xe) {
            Gt = function() {
                if (l == null) {
                    xe();
                }
            };
            n[83] = l;
            n[84] = xe;
            n[85] = Gt;
        } else {
            Gt = n[85];
        }
        let zt;
        if (n[86] !== Nt || n[87] !== Gt) {
            zt = {
                targetRef: neRef,
                menu: Nt,
                position: "below",
                align: "end",
                enableUIM: true,
                onClose: Gt
            };
            n[86] = Nt;
            n[87] = Gt;
            n[88] = zt;
        } else {
            zt = n[88];
        }
        const jt = r("useWDSMenu")(zt);
        const { isMenuOpen: isMenuOpen_1, menuPortal: menuPortal_1, openMenu: openMenu_1 } = jt;
        const Yt = isMenuOpen || isMenuOpen_1;
        let Jt;
        if (n[89] !== cancelDismiss || n[90] !== openMenu_1 || n[91] !== Ve) {
            Jt = function() {
                if (!geRef.current) {
                    x(teRef.current?.menuContent ?? null);
                    cancelDismiss();
                    aeRef.current = true;
                    Ve(L);
                    openMenu_1();
                }
            };
            n[89] = cancelDismiss;
            n[90] = openMenu_1;
            n[91] = Ve;
            n[92] = Jt;
        } else {
            Jt = n[92];
        }
        const Zt = Jt;
        const enRef = useRef(false);
        let tn;
        let nn;
        if (n[93] !== Yt || n[94] !== at) {
            tn = function() {
                const enRef_current = enRef.current;
                enRef.current = Yt;
                ieRef.current = Yt;
                if (Yt) {
                    aeRef.current = false;
                    const n = leRef.current;
                    if (n != null) {
                        deRef.current = n;
                        ceRef.current = n;
                        _e(n);
                    }
                    return;
                }
                if (enRef_current) {
                    const r = deRef.current;
                    deRef.current = null;
                    if (r != null && ceRef.current === r) {
                        ceRef.current = null;
                        _e(null);
                    }
                    const o = neRef.current?.contains(document.activeElement) === true;
                    if (!(!ueRef.current || o)) {
                        seRef.current = Date.now();
                        at();
                    }
                }
            };
            nn = [
                Yt,
                at
            ];
            n[93] = Yt;
            n[94] = at;
            n[95] = tn;
            n[96] = nn;
        } else {
            tn = n[95];
            nn = n[96];
        }
        useEffect(tn, nn);
        let rn;
        if (n[97] !== cancelDismiss || n[98] !== openMenu || n[99] !== Ve) {
            rn = function() {
                if (!geRef.current) {
                    cancelDismiss();
                    aeRef.current = true;
                    Ve(L);
                    openMenu();
                }
            };
            n[97] = cancelDismiss;
            n[98] = openMenu;
            n[99] = Ve;
            n[100] = rn;
        } else {
            rn = n[100];
        }
        const on = rn;
        let an;
        if (n[101] !== closeMenu || n[102] !== Le || n[103] !== ft || n[104] !== isMenuOpen) {
            an = function(t) {
                if (!geRef.current) {
                    ft(t);
                    Le();
                    if (isMenuOpen) {
                        closeMenu();
                    }
                }
            };
            n[101] = closeMenu;
            n[102] = Le;
            n[103] = ft;
            n[104] = isMenuOpen;
            n[105] = an;
        } else {
            an = n[105];
        }
        const ln = an;
        let sn;
        if (n[106] === Symbol.for("react.memo_cache_sentinel")) {
            sn = [
                o("WAWebMsgGetters").getAck,
                o("WAWebMsgGetters").getIsFailed
            ];
            n[106] = sn;
        } else {
            sn = n[106];
        }
        const un = o("useWAWebMsgValues").useOptionalMsgValues(l?.id ?? null, sn);
        const cn = un?.[0];
        const isFailed = un?.[1] === true;
        let mn;
        if (n[107] !== cn || n[108] !== M || n[109] !== isFailed || n[110] !== l || n[111] !== m) {
            mn = P({
                ack: cn,
                displayType: M,
                isFailed,
                isSentByMe: m,
                msg: l
            });
            n[107] = cn;
            n[108] = M;
            n[109] = isFailed;
            n[110] = l;
            n[111] = m;
            n[112] = mn;
        } else {
            mn = n[112];
        }
        const pn = mn;
        const { canReact, hasEdit, hasReply, isInFlight } = pn;
        const yn = isInFlight && !Y;
        const Cn = l != null && !yn || Yt;
        let bn;
        if (n[113] === Symbol.for("react.memo_cache_sentinel")) {
            bn = function() {
                const neRef_current = neRef.current;
                const ZRef_current = ZRef.current;
                if (!(neRef_current == null || ZRef_current == null)) {
                    W(neRef_current.offsetWidth > ZRef_current.offsetWidth);
                }
            };
            n[113] = bn;
        } else {
            bn = n[113];
        }
        const vn = bn;
        let Sn;
        if (n[114] === Symbol.for("react.memo_cache_sentinel")) {
            Sn = function(t) {
                reRef.current?.disconnect();
                reRef.current = null;
                neRef.current = t;
                if (t != null) {
                    const n = new ResizeObserver(vn);
                    n.observe(t);
                    reRef.current = n;
                    vn();
                }
            };
            n[114] = Sn;
        } else {
            Sn = n[114];
        }
        const Rn = Sn;
        let Ln;
        if (n[115] !== l?.id) {
            Ln = (l == null ? undefined : l.id.toString()) ?? null;
            n[115] = l?.id;
            n[116] = Ln;
        } else {
            Ln = n[116];
        }
        const kn = Ln;
        let In;
        if (n[117] !== kn || n[118] !== B) {
            In = function(t) {
                return kn === t && B;
            };
            n[117] = kn;
            n[118] = B;
            n[119] = In;
        } else {
            In = n[119];
        }
        const isBridgeActiveForMsg = In;
        let Dn;
        if (n[120] === Symbol.for("react.memo_cache_sentinel")) {
            Dn = function(t) {
                ceRef.current = t;
                _e(t);
            };
            n[120] = Dn;
        } else {
            Dn = n[120];
        }
        const onMessageMenuOpen = Dn;
        let $n;
        if (n[121] === Symbol.for("react.memo_cache_sentinel")) {
            $n = function(t) {
                if (ceRef.current === t) {
                    ceRef.current = null;
                    _e(null);
                    seRef.current = Date.now();
                }
            };
            n[121] = $n;
        } else {
            $n = n[121];
        }
        const onMessageMenuClose = $n;
        let Nn;
        if (n[122] !== cancelDismiss || n[123] !== isBridgeActiveForMsg || n[124] !== menuOwnerMsgId || n[125] !== onFocusEnd || n[126] !== onFocusStart || n[127] !== at || n[128] !== onHoverStart) {
            Nn = {
                isAvailable: true,
                onHoverStart,
                onHoverEnd: at,
                onFocusStart,
                onFocusEnd,
                cancelDismiss,
                isBridgeActiveForMsg,
                isBarPointerRaised,
                onMessageMenuOpen,
                onMessageMenuClose,
                menuOwnerMsgId
            };
            n[122] = cancelDismiss;
            n[123] = isBridgeActiveForMsg;
            n[124] = menuOwnerMsgId;
            n[125] = onFocusEnd;
            n[126] = onFocusStart;
            n[127] = at;
            n[128] = onHoverStart;
            n[129] = Nn;
        } else {
            Nn = n[129];
        }
        const Mn = Nn;
        const wn = m ? !B : B;
        let An;
        let Fn;
        let On;
        let Bn;
        if (n[130] !== l || n[131] !== wn || n[132] !== canReact || n[133] !== e_children || n[134] !== Mn || n[135] !== It || n[136] !== Rt || n[137] !== vt || n[138] !== Ct || n[139] !== ht || n[140] !== Zt || n[141] !== on || n[142] !== ln || n[143] !== Et || n[144] !== hasEdit || n[145] !== hasReply || n[146] !== G || n[147] !== K || n[148] !== Cn || n[149] !== at || n[150] !== U) {
            const Wn = o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled();
            An = r("WAWebMessageHoverBarContext").Provider;
            Fn = Mn;
            On = e_children;
            const Component = r("WAWebMessageHoverBarContainer.react");
            Bn = Cn && l != null && U != null && o("ReactDOM").createPortal(<div key={l.id.toString()} {...babelHelpers.extends({
                ref: Rn
            }, {
                0: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o xtijo5x"
                },
                8: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o x1o0tod"
                },
                4: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o xtijo5x xvma63k xtsvl71 x9urbn7 x1n6iynp x1u6ievf x1larqbn"
                },
                12: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o x1o0tod xvma63k xtsvl71 x9urbn7 x1n6iynp x1u6ievf x1larqbn"
                },
                2: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o xtijo5x x47corl"
                },
                10: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o x1o0tod x47corl"
                },
                6: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o xtijo5x xvma63k xtsvl71 x9urbn7 x1n6iynp x1u6ievf x1larqbn x47corl"
                },
                14: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o x1o0tod xvma63k xtsvl71 x9urbn7 x1n6iynp x1u6ievf x1larqbn x47corl"
                },
                1: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o xtijo5x x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8"
                },
                9: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o x1o0tod x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8"
                },
                5: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o xtijo5x x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8"
                },
                13: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x67bb7w x87ps6o x1o0tod x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8"
                },
                3: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o xtijo5x x47corl x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8"
                },
                11: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o x1o0tod x47corl x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8"
                },
                7: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o xtijo5x x47corl x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8"
                },
                15: {
                    className: "x10l6tqk x10w3d4m x4vbgl9 xezivpi x1oy9qf3 x87ps6o x1o0tod x47corl x1eyc3vh xfbpl4g x9urbn7 xoad59s x1u6ievf xhmqdbg x1q1rmc8"
                }
            }[!!wn << 3 | !!(Wn && G) << 2 | !!G << 1 | !!(Wn && !G) << 0], {
                "data-testid": "reactions_hover_bar_content",
                role: "group",
                "aria-label": s._("Message actions"),
                onAnimationEnd: Wn ? Rt : undefined,
                onFocus: Ct,
                onBlur: vt,
                onMouseEnter: ht,
                onMouseLeave: at,
                children: <Component msg={l} canReact={canReact} isDismissing={G || K} onReaction={ln} onOpenEmojiPicker={on} onReply={hasReply ? Et : null} onEdit={hasEdit ? It : null} onMoreOptions={Zt} onEscape={onEscape} onMouseEnter={ht} toggleButtonRef={oeRef}/>
            })}/>, U);
            n[130] = l;
            n[131] = wn;
            n[132] = canReact;
            n[133] = e_children;
            n[134] = Mn;
            n[135] = It;
            n[136] = Rt;
            n[137] = vt;
            n[138] = Ct;
            n[139] = ht;
            n[140] = Zt;
            n[141] = on;
            n[142] = ln;
            n[143] = Et;
            n[144] = hasEdit;
            n[145] = hasReply;
            n[146] = G;
            n[147] = K;
            n[148] = Cn;
            n[149] = at;
            n[150] = U;
            n[151] = An;
            n[152] = Fn;
            n[153] = On;
            n[154] = Bn;
        } else {
            An = n[151];
            Fn = n[152];
            On = n[153];
            Bn = n[154];
        }
        let qn;
        if (n[155] !== An || n[156] !== menuPortal || n[157] !== menuPortal_1 || n[158] !== Fn || n[159] !== On || n[160] !== Bn) {
            qn = <An value={Fn}>{On}{Bn}{menuPortal}{menuPortal_1}</An>;
            n[155] = An;
            n[156] = menuPortal;
            n[157] = menuPortal_1;
            n[158] = Fn;
            n[159] = On;
            n[160] = Bn;
            n[161] = qn;
        } else {
            qn = n[161];
        }
        return qn;
    }
    function $(t) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "Failed to send reaction from hover bar"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("hover-bar-send-reaction-failed");
    }
    function P({ ack, displayType, isFailed, isSentByMe, msg }) {
        if (msg == null) {
            return {
                canReact: false,
                hasEdit: false,
                hasReply: false,
                isInFlight: false
            };
        }
        return {
            canReact: o("WAWebReactionsUtils").canReactToMessage(msg),
            hasEdit: isSentByMe && o("WAWebMsgActionCapability").canShowMsgEditAction(msg, displayType, o("WAWebFrontendMsgGetters").getChat(msg)),
            hasReply: o("WAWebMsgReply").canReplyMsg(msg),
            isInFlight: isSentByMe && ack === o("WAWebAck").ACK.CLOCK && !isFailed
        };
    }
    l.default = XComponent;
}, 226);