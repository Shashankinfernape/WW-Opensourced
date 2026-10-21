__d("PressableText.react", [
    "ExecutionEnvironment",
    "Pressability",
    "PressableGroupContext",
    "RecoverableViolationWithComponentStack.react",
    "emptyHook",
    "joinClasses",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useCometErrorProject",
    "useMergeRefs",
    "useWebPressableTouchStartHandler"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "accessibilityLabel",
        "accessibilityRelationship",
        "accessibilityRole",
        "accessibilityState",
        "children",
        "className_DEPRECATED",
        "direction",
        "disabled",
        "draggable",
        "focusable",
        "focusableDisabled",
        "forwardedRef",
        "link",
        "nativeID",
        "onBlur",
        "onContextMenu",
        "onFocus",
        "onFocusChange",
        "onFocusVisibleChange",
        "onHoverChange",
        "onHoverEnd",
        "onHoverMove",
        "onHoverStart",
        "onPress",
        "onPressChange",
        "onPressEnd",
        "onPressMove",
        "onPressStart",
        "preventContextMenu",
        "preventDefault",
        "selectable",
        "style",
        "suppressFocusRing",
        "testID",
        "testOnly_state",
        "xstyle"
    ];
    let s;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useCallback, useContext, useRef, useState } = m;
    const h = [
        "menuitem",
        "tab",
        "none"
    ];
    const y = {
        article: "article",
        banner: "header",
        complementary: "aside",
        contentinfo: "footer",
        figure: "figure",
        form: "form",
        heading: "h1",
        label: "label",
        link: "a",
        list: "ul",
        listitem: "li",
        main: "main",
        navigation: "nav",
        none: "div",
        region: "section"
    };
    function C(e, t) {
        let n = "div";
        if (t?.url != null && t?.url !== "#" || e != null && h.includes(e) && t?.url != null) {
            n = "a";
        } else if (e != null && e in y) {
            const r = y[e];
            n = r;
        }
        return n;
    }
    function b(e) {
        const n = o("react-compiler-runtime").c(9);
        const { accessibilityRole, link } = e;
        const projectName = r("useCometErrorProject")() ?? "comet_infra";
        if (accessibilityRole === "link" && link == null) {
            let s;
            if (n[0] !== projectName) {
                s = d.jsx(r("RecoverableViolationWithComponentStack.react"), {
                    errorMessage: "The 'link' prop is required with an 'accessibilityRole' of 'link'.",
                    fallback: null,
                    projectName
                });
                n[0] = projectName;
                n[1] = s;
            } else {
                s = n[1];
            }
            return s;
        } else if (link != null) {
            if (accessibilityRole === "link" || accessibilityRole != null && h.includes(accessibilityRole)) {
                if (typeof link.url !== "string") {
                    let u;
                    if (n[2] !== projectName) {
                        u = d.jsx(r("RecoverableViolationWithComponentStack.react"), {
                            errorMessage: "The value of 'link.url' must be a valid string.",
                            fallback: null,
                            projectName
                        });
                        n[2] = projectName;
                        n[3] = u;
                    } else {
                        u = n[3];
                    }
                    return u;
                } else if (link.url === "") {
                    let c;
                    if (n[4] !== projectName) {
                        c = d.jsx(r("RecoverableViolationWithComponentStack.react"), {
                            errorMessage: "An empty string is not valid for 'link.url'. Did you mean '#'?",
                            fallback: null,
                            projectName
                        });
                        n[4] = projectName;
                        n[5] = c;
                    } else {
                        c = n[5];
                    }
                    return c;
                }
            } else if (link.url != null && link.url !== "" && link.url !== "#") {
                let m;
                if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
                    m = h.toString();
                    n[6] = m;
                } else {
                    m = n[6];
                }
                let p;
                if (n[7] !== projectName) {
                    p = d.jsx(r("RecoverableViolationWithComponentStack.react"), {
                        errorMessage: `The 'link' prop can only be used with an 'accessibilityRole' of 'link', ${m}`,
                        fallback: null,
                        projectName
                    });
                    n[7] = projectName;
                    n[8] = p;
                } else {
                    p = n[8];
                }
                return p;
            }
        }
        return null;
    }
    const v = (t)=>{
        const t_target = t.target;
        const e_tagName = t_target.tagName;
        const r = t_target.isContentEditable || e_tagName === "A" && t_target.href != null || e_tagName === "BUTTON" || e_tagName === "INPUT" || e_tagName === "SELECT" || e_tagName === "TEXTAREA";
        if (t_target.tabIndex === 0 && !r) {
            const o = t.key;
            if (o === "Enter") {
                return true;
            }
            const a = t_target.getAttribute("role");
            if ((o === " " || o === "Spacebar") && (a === "button" || a === "combobox" || a === "menuitem" || a === "menuitemradio" || a === "option" || a === "tab")) {
                return true;
            }
        }
        return false;
    };
    function S(target) {
        if ((s || (s = r("ExecutionEnvironment"))).canUseDOM && typeof document.contains === "function") {
            return document.contains(target);
        }
        return false;
    }
    function R(e) {
        for(let t = e; t != null;){
            if (t instanceof HTMLAnchorElement && t.href != null) {
                return true;
            }
            t = t.parentNode;
        }
        return false;
    }
    const L = (s || (s = r("ExecutionEnvironment"))).canUseDOM ? o("Pressability").usePressability : r("emptyHook").thatReturnsNull;
    function E({ altKey, ctrlKey, currentTarget, metaKey, shiftKey, target }, t) {
        const s = target instanceof Node && S(target) ? target : currentTarget;
        const u = R(s);
        const c = altKey || ctrlKey || metaKey || shiftKey;
        return t !== false && u && !c;
    }
    function KComponent(t) {
        const V = o("react-compiler-runtime").c(109);
        const HRef = useRef(null);
        const G = useState(false);
        const z = G[0];
        const j = G[1];
        const K = useState(false);
        const Q = K[0];
        const X = K[1];
        const Y = useState(false);
        const J = Y[0];
        const Z = Y[1];
        const ee = useState(false);
        const te = ee[0];
        const ne = ee[1];
        const re = useContext(r("PressableGroupContext"));
        let oe;
        let ae;
        let ie;
        let le;
        let se;
        let ue;
        let ce;
        let de;
        let draggable;
        let pe;
        let _e;
        let fe;
        let ge;
        let he;
        let ye;
        let Ce;
        let be;
        let ve;
        let Se;
        let Re;
        let Le;
        let Ee;
        let ke;
        let Ie;
        let Te;
        let onPressEnd;
        let onPressMove;
        let $e;
        let preventContextMenu;
        let Ne;
        let Me;
        let we;
        let Ae;
        let Fe;
        let Oe;
        let Be;
        let We;
        if (V[0] !== t) {
            oe = t.accessibilityLabel;
            ae = t.accessibilityRelationship;
            ie = t.accessibilityRole;
            le = t.accessibilityState;
            se = t.children;
            ue = t.className_DEPRECATED;
            ce = t.direction;
            de = t.disabled;
            draggable = t.draggable;
            pe = t.focusable;
            _e = t.focusableDisabled;
            fe = t.forwardedRef;
            ge = t.link;
            he = t.nativeID;
            ye = t.onBlur;
            Ce = t.onContextMenu;
            be = t.onFocus;
            ve = t.onFocusChange;
            Se = t.onFocusVisibleChange;
            Re = t.onHoverChange;
            Le = t.onHoverEnd;
            Ee = t.onHoverMove;
            ke = t.onHoverStart;
            Ie = t.onPress;
            Te = t.onPressChange;
            onPressEnd = t.onPressEnd;
            onPressMove = t.onPressMove;
            $e = t.onPressStart;
            preventContextMenu = t.preventContextMenu;
            Ne = t.preventDefault;
            we = t.selectable;
            Ae = t.style;
            Fe = t.suppressFocusRing;
            Oe = t.testID;
            Be = t.testOnly_state;
            We = t.xstyle;
            Me = babelHelpers.objectWithoutPropertiesLoose(t, e);
            V[0] = t;
            V[1] = oe;
            V[2] = ae;
            V[3] = ie;
            V[4] = le;
            V[5] = se;
            V[6] = ue;
            V[7] = ce;
            V[8] = de;
            V[9] = draggable;
            V[10] = pe;
            V[11] = _e;
            V[12] = fe;
            V[13] = ge;
            V[14] = he;
            V[15] = ye;
            V[16] = Ce;
            V[17] = be;
            V[18] = ve;
            V[19] = Se;
            V[20] = Re;
            V[21] = Le;
            V[22] = Ee;
            V[23] = ke;
            V[24] = Ie;
            V[25] = Te;
            V[26] = onPressEnd;
            V[27] = onPressMove;
            V[28] = $e;
            V[29] = preventContextMenu;
            V[30] = Ne;
            V[31] = Me;
            V[32] = we;
            V[33] = Ae;
            V[34] = Fe;
            V[35] = Oe;
            V[36] = Be;
            V[37] = We;
        } else {
            oe = V[1];
            ae = V[2];
            ie = V[3];
            le = V[4];
            se = V[5];
            ue = V[6];
            ce = V[7];
            de = V[8];
            draggable = V[9];
            pe = V[10];
            _e = V[11];
            fe = V[12];
            ge = V[13];
            he = V[14];
            ye = V[15];
            Ce = V[16];
            be = V[17];
            ve = V[18];
            Se = V[19];
            Re = V[20];
            Le = V[21];
            Ee = V[22];
            ke = V[23];
            Ie = V[24];
            Te = V[25];
            onPressEnd = V[26];
            onPressMove = V[27];
            $e = V[28];
            preventContextMenu = V[29];
            Ne = V[30];
            Me = V[31];
            we = V[32];
            Ae = V[33];
            Fe = V[34];
            Oe = V[35];
            Be = V[36];
            We = V[37];
        }
        let qe;
        if (V[38] !== ie || V[39] !== ge) {
            qe = C(ie, ge);
            V[38] = ie;
            V[39] = ge;
            V[40] = qe;
        } else {
            qe = V[40];
        }
        const Ue = qe;
        const Ve = de === true || le?.disabled === true;
        const He = le?.hidden;
        const Ge = Ue === "a" && Ve !== true;
        const ze = {
            disabled: Ve === true || Be?.disabled === true || false,
            focused: z || Be?.focused === true,
            focusVisible: Q && Fe !== true || Be?.focusVisible === true,
            hovered: J || Be?.hovered === true,
            pressed: te || Be?.pressed === true
        };
        const je = typeof se === "function" ? se(ze) : se;
        const Ke = typeof ue === "function" ? ue(ze) : ue;
        const Qe = typeof Ae === "function" ? Ae(ze) : Ae;
        const Xe = typeof We === "function" ? We(ze) : We;
        const Ye = _e === true ? false : Ve;
        const onFocusChange = I(j, ve);
        const Ze = I(X, Se);
        const onHoverChange = I(Z, Re);
        const onPressChange = I(ne, Te);
        const nt = Ne ?? true;
        let rt;
        if (V[41] !== ye || V[42] !== Ce || V[43] !== be || V[44] !== Le || V[45] !== Ee || V[46] !== ke || V[47] !== onPressEnd || V[48] !== onPressMove || V[49] !== $e || V[50] !== preventContextMenu || V[51] !== Ye || V[52] !== onFocusChange || V[53] !== Ze || V[54] !== onHoverChange || V[55] !== onPressChange || V[56] !== nt) {
            rt = {
                disabled: Ye,
                onBlur: ye,
                onContextMenu: Ce,
                onFocus: be,
                onFocusChange,
                onFocusVisibleChange: Ze,
                onHoverChange,
                onHoverEnd: Le,
                onHoverMove: Ee,
                onHoverStart: ke,
                onPressChange,
                onPressEnd,
                onPressMove,
                onPressStart: $e,
                preventContextMenu,
                preventDefault: nt
            };
            V[41] = ye;
            V[42] = Ce;
            V[43] = be;
            V[44] = Le;
            V[45] = Ee;
            V[46] = ke;
            V[47] = onPressEnd;
            V[48] = onPressMove;
            V[49] = $e;
            V[50] = preventContextMenu;
            V[51] = Ye;
            V[52] = onFocusChange;
            V[53] = Ze;
            V[54] = onHoverChange;
            V[55] = onPressChange;
            V[56] = nt;
            V[57] = rt;
        } else {
            rt = V[57];
        }
        L(HRef, rt);
        let ot;
        if (V[58] !== ge || V[59] !== Ie || V[60] !== Ne) {
            ot = function(t) {
                if (Ie) {
                    Ie(t);
                }
                if (Ie || ge != null) {
                    t.stopPropagation();
                }
                if (E(t, Ne)) {
                    t.nativeEvent.preventDefault();
                }
            };
            V[58] = ge;
            V[59] = Ie;
            V[60] = Ne;
            V[61] = ot;
        } else {
            ot = V[61];
        }
        const at = ot;
        let it;
        if (V[62] !== Ie) {
            it = function(t) {
                if (v(t)) {
                    const e = t.key;
                    if (e === " " || e === "Spacebar") {
                        t.preventDefault();
                    }
                    if (Ie) {
                        Ie(t);
                        t.stopPropagation();
                    }
                }
            };
            V[62] = Ie;
            V[63] = it;
        } else {
            it = V[63];
        }
        const lt = it;
        let dir;
        e: switch(ce){
            case "none":
                break e;
            default:
                if (ce != null) {
                    dir = ce;
                }
        }
        const ut = r("useMergeRefs")(HRef, fe);
        r("useWebPressableTouchStartHandler")(HRef, re, at);
        let ct;
        const dt = Ue === "a" || ie === "button";
        const mt = Ve === true && _e === true;
        if (dt) {
            if (He === true || pe === false || Ve === true && !mt) {
                ct = -1;
            } else {
                ct = 0;
            }
        } else if ((Ve !== true || mt) && He !== true && pe !== false && ie !== "none") {
            ct = 0;
        }
        const pt = ge?.download;
        const _t = (pt === true || typeof pt === "string") && Ge;
        const ft = ie === "none" ? "presentation" : ie;
        const gt = ae?.activedescendant;
        const ht = le?.busy;
        const yt = le?.checked;
        const Ct = ae?.controls;
        const bt = ae?.current;
        const vt = ae?.describedby;
        const St = ae?.details;
        const Rt = Ve === true && ft !== "presentation" ? Ve : undefined;
        const Lt = le?.expanded;
        const Et = ae?.haspopup;
        const kt = le?.invalid;
        const It = ae?.labelledby;
        const Tt = ae?.owns;
        const Dt = le?.pressed;
        const xt = le?.readonly;
        const $t = le?.required;
        const Pt = le?.selected;
        const Nt = Ge ? ge?.attributionsrc : undefined;
        const Mt = r("joinClasses")((u || (u = r("stylex")))(T.root, we === false && T.notSelectable, ze.disabled && T.disabled, !ze.focusVisible && T.focusNotVisible, ze.focusVisible && dt && T.linkFocusRing, Xe, re && T.rootInGroup), Ke);
        const download = _t ? pt : undefined;
        const At = Ge ? ge?.url : undefined;
        const Ft = Ve ? undefined : at;
        const Ot = Ve ? undefined : lt;
        const Bt = Ge ? ge?.rel : undefined;
        const Wt = Ge ? ge?.target : undefined;
        let qt;
        if (V[64] !== Ue || V[65] !== oe || V[66] !== je || V[67] !== ft || V[68] !== Qe || V[69] !== dir || V[70] !== draggable || V[71] !== He || V[72] !== ut || V[73] !== he || V[74] !== Me || V[75] !== gt || V[76] !== ht || V[77] !== yt || V[78] !== Ct || V[79] !== bt || V[80] !== vt || V[81] !== St || V[82] !== Rt || V[83] !== Lt || V[84] !== Et || V[85] !== kt || V[86] !== It || V[87] !== Tt || V[88] !== Dt || V[89] !== xt || V[90] !== $t || V[91] !== Pt || V[92] !== Nt || V[93] !== Mt || V[94] !== download || V[95] !== At || V[96] !== Ft || V[97] !== Ot || V[98] !== Bt || V[99] !== Wt || V[100] !== ct || V[101] !== Oe) {
            qt = <Ue {...babelHelpers.extends({}, Me, {
                "aria-activedescendant": gt,
                "aria-busy": ht,
                "aria-checked": yt,
                "aria-controls": Ct,
                "aria-current": bt,
                "aria-describedby": vt,
                "aria-details": St,
                "aria-disabled": Rt,
                "aria-expanded": Lt,
                "aria-haspopup": Et,
                "aria-hidden": He,
                "aria-invalid": kt,
                "aria-label": oe,
                "aria-labelledby": It,
                "aria-owns": Tt,
                "aria-pressed": Dt,
                "aria-readonly": xt,
                "aria-required": $t,
                "aria-selected": Pt,
                attributionsrc: Nt,
                children: je,
                className: Mt,
                "data-testid": undefined,
                dir,
                download,
                draggable,
                href: At,
                id: he,
                onClick: Ft,
                onKeyDown: Ot,
                ref: ut,
                rel: Bt,
                role: ft,
                style: Qe,
                tabIndex: ct,
                target: Wt
            })}/>;
            V[64] = Ue;
            V[65] = oe;
            V[66] = je;
            V[67] = ft;
            V[68] = Qe;
            V[69] = dir;
            V[70] = draggable;
            V[71] = He;
            V[72] = ut;
            V[73] = he;
            V[74] = Me;
            V[75] = gt;
            V[76] = ht;
            V[77] = yt;
            V[78] = Ct;
            V[79] = bt;
            V[80] = vt;
            V[81] = St;
            V[82] = Rt;
            V[83] = Lt;
            V[84] = Et;
            V[85] = kt;
            V[86] = It;
            V[87] = Tt;
            V[88] = Dt;
            V[89] = xt;
            V[90] = $t;
            V[91] = Pt;
            V[92] = Nt;
            V[93] = Mt;
            V[94] = download;
            V[95] = At;
            V[96] = Ft;
            V[97] = Ot;
            V[98] = Bt;
            V[99] = Wt;
            V[100] = ct;
            V[101] = Oe;
            V[102] = qt;
        } else {
            qt = V[102];
        }
        return qt;
    }
    function I(e, t) {
        const n = o("react-compiler-runtime").c(3);
        let r;
        if (n[0] !== t || n[1] !== e) {
            r = function(r) {
                e(r);
                if (t) {
                    t(r);
                }
            };
            n[0] = t;
            n[1] = e;
            n[2] = r;
        } else {
            r = n[2];
        }
        return r;
    }
    var T = {
        disabled: {
            cursor: "x1h6gzvc",
            $$css: true
        },
        focusNotVisible: {
            outline: "x1a2a7pz",
            $$css: true
        },
        linkFocusRing: {
            outline: "x1gje4rg",
            $$css: true
        },
        notSelectable: {
            userSelect: "x87ps6o",
            $$css: true
        },
        root: {
            WebkitTapHighlightColor: "x1i10hfl",
            backgroundColor: "xjbqb8w",
            borderTopStyle: "x1ejq31n",
            borderInlineEndStyle: "x18oe1m7",
            borderBottomStyle: "x1sy0etr",
            borderInlineStartStyle: "xstzfhl",
            borderTopWidth: "x972fbf",
            borderInlineEndWidth: "x10w94by",
            borderBottomWidth: "x1qhh985",
            borderInlineStartWidth: "x14e42zd",
            boxSizing: "x9f619",
            cursor: "x1ypdohk",
            display: "xt0psk2",
            listStyleType: "x3ct3a4",
            marginTop: "xdj266r",
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            paddingTop: "xexx8yu",
            paddingInlineEnd: "xyri2b",
            paddingBottom: "x18d9i69",
            paddingInlineStart: "x1c1uobl",
            textAlign: "x16tdsg8",
            textDecoration: "x1hl2dhg",
            touchAction: "xggy1nq",
            $$css: true
        },
        rootInGroup: {
            touchAction: "x5ve5x3",
            $$css: true
        }
    };
    l.default = KComponent;
}, 98);