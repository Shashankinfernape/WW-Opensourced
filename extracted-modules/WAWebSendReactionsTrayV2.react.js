__d("WAWebSendReactionsTrayV2.react", [
    "fbt",
    "WAWebCreateEmojiIcon",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebL10N",
    "WAWebReactionGatingUtils",
    "WDSButton.react",
    "WDSGlobalContext",
    "WDSIconIcAdd.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebOnUnmount"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useContext, useEffect, useRef, useState } = d;
    const h = "__more_reactions__";
    const y = "x1p1bido-B";
    const C = "xekv6nw-B";
    const b = "xpldhdr-B";
    const v = "xhi3f1f-B";
    const S = "x1idb06i-B";
    const R = "x4318q0-B";
    const L = {
        trayContainer: {
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            alignItems: "x6s0dn4",
            borderStartStartRadius: "xuqqiot",
            borderStartEndRadius: "x1lkg3h2",
            borderEndEndRadius: "x17mbzc4",
            borderEndStartRadius: "xcouhex",
            paddingTop: "x1tiyuxx",
            paddingInlineStart: "x181vq82",
            paddingBottom: "xa0aww2",
            paddingInlineEnd: "x1j8ymqv",
            position: "x1n2onr6",
            backgroundColor: "xjbqb8w",
            $$css: true
        },
        trayContainerBackground: {
            "::before_content": "x1cpjm7i",
            "::before_position": "x1hmns74",
            "::before_insetInlineStart": "x1682cnc",
            "::before_top": "x1y3wzot",
            "::before_width": "x1rmj1tg",
            "::before_height": "xszcg87",
            "::before_backgroundColor": "x1xkdbmx",
            "::before_boxShadow": "x1gli9xx",
            "::before_borderStartStartRadius": "x13u126r",
            "::before_borderStartEndRadius": "xfd7154",
            "::before_borderEndEndRadius": "x1izptsd",
            "::before_borderEndStartRadius": "xbfqeeh",
            "::before_borderTopColor": "x1wr5goe",
            "::before_borderInlineEndColor": "x71iooo",
            "::before_borderBottomColor": "xkhwigo",
            "::before_borderInlineStartColor": "x4vc7s6",
            "::before_borderTopStyle": "xnvurfn",
            "::before_borderInlineEndStyle": "x1v3rft4",
            "::before_borderBottomStyle": "x1opv7go",
            "::before_borderInlineStartStyle": "x1rovbrg",
            "::before_borderTopWidth": "xm4vf9w",
            "::before_borderInlineEndWidth": "x1ggjbpq",
            "::before_borderBottomWidth": "xu20p9z",
            "::before_borderInlineStartWidth": "x1t6kmxa",
            "::before_zIndex": "xy5mcqj",
            "::before_transform": "x1ox0wv9",
            "::before_animationFillMode": "x4vjblf",
            "::before_willChange": "xmksmyx",
            "::before_animationName": "x9bpk4s",
            "::before_animationDuration": "x11jsb0w",
            "::before_animationTimingFunction": "xihg8qz",
            $$css: true
        },
        trayContainerAnimateLeft: {
            "::before_transformOrigin": "xfqct0e",
            $$css: true
        },
        trayContainerAnimateRight: {
            "::before_transformOrigin": "x7awuxw",
            $$css: true
        },
        trayContainerStatic: {
            backgroundColor: "x16w0wmm",
            boxShadow: "xvktan5",
            borderTopColor: "x1ekq09l",
            borderInlineEndColor: "xlmuga0",
            borderBottomColor: "x54tcbp",
            borderInlineStartColor: "xlzwp1d",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            $$css: true
        },
        trayClosing: {
            animationName: "x15r5tu9",
            animationDuration: "xbn3cbp",
            animationTimingFunction: "xmgxswx",
            animationFillMode: "x10e4vud",
            $$css: true
        },
        selectedButton: {
            backgroundColor: "x4wrhlh",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        }
    };
    const E = {
        emojiItem: {
            backfaceVisibility: "xlp1x4z",
            transform: "x1cmvv92",
            animationFillMode: "x10e4vud",
            animationName: "xqzvon3",
            animationDuration: "x1khvrug",
            animationTimingFunction: "xygk8lx",
            $$css: true
        },
        staggerLeft0: {
            animationDelay: "x1k7gots",
            $$css: true
        },
        staggerLeft1: {
            animationDelay: "x1daqvy5",
            $$css: true
        },
        staggerLeft2: {
            animationDelay: "xgfvxhe",
            $$css: true
        },
        staggerLeft3: {
            animationDelay: "x1yvtal6",
            $$css: true
        },
        staggerLeft4: {
            animationDelay: "x5spour",
            $$css: true
        },
        staggerLeft5: {
            animationDelay: "x1dr692l",
            $$css: true
        },
        staggerLeft6: {
            animationDelay: "x12cbgk8",
            $$css: true
        },
        staggerRight0: {
            animationDelay: "x12cbgk8",
            $$css: true
        },
        staggerRight1: {
            animationDelay: "x1dr692l",
            $$css: true
        },
        staggerRight2: {
            animationDelay: "x5spour",
            $$css: true
        },
        staggerRight3: {
            animationDelay: "x1yvtal6",
            $$css: true
        },
        staggerRight4: {
            animationDelay: "xgfvxhe",
            $$css: true
        },
        staggerRight5: {
            animationDelay: "x1daqvy5",
            $$css: true
        }
    };
    const k = [
        E.staggerLeft0,
        E.staggerLeft1,
        E.staggerLeft2,
        E.staggerLeft3,
        E.staggerLeft4,
        E.staggerLeft5,
        E.staggerLeft6
    ];
    const I = [
        E.staggerRight0,
        E.staggerRight1,
        E.staggerRight2,
        E.staggerRight3,
        E.staggerRight4,
        E.staggerRight5
    ];
    function T(t) {
        const n = o("react-compiler-runtime").c(47);
        const { allowTabEscape, disableAutoFocus, isMoreSelected, isParentMsgSentByMe, onShiftTabToMenu, onTabToMenu, reactions, rotateFocusArrowsRef, selectedCallback, selectedIndex, showMoreOption } = t;
        const T = allowTabEscape === undefined ? false : allowTabEscape;
        const D = disableAutoFocus === undefined ? false : disableAutoFocus;
        const x = isMoreSelected === undefined ? false : isMoreSelected;
        const $ = isParentMsgSentByMe === undefined ? false : isParentMsgSentByMe;
        const P = showMoreOption === undefined ? false : showMoreOption;
        const NRef = useRef(null);
        const M = rotateFocusArrowsRef ?? NRef;
        const w = useContext(o("WDSGlobalContext").WDSContext);
        const w_closeAllMenus = w.closeAllMenus;
        let F;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            F = o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled();
            n[0] = F;
        } else {
            F = n[0];
        }
        const O = F;
        const B = r("WAWebL10N").isRTL() ? $ : !$;
        const W = useState(false);
        const q = W[0];
        const U = W[1];
        const VRef = useRef(null);
        let H;
        if (n[1] === Symbol.for("react.memo_cache_sentinel")) {
            H = function() {
                const VRef_current = VRef.current;
                if (VRef_current != null) {
                    VRef.current = null;
                    VRef_current.send(VRef_current.reaction);
                }
            };
            n[1] = H;
        } else {
            H = n[1];
        }
        const G = H;
        let z;
        let j;
        if (n[2] !== D || n[3] !== M) {
            z = function() {
                if (D !== true) {
                    M.current?.focusFirst();
                }
            };
            j = [
                D,
                M
            ];
            n[2] = D;
            n[3] = M;
            n[4] = z;
            n[5] = j;
        } else {
            z = n[4];
            j = n[5];
        }
        useEffect(z, j);
        r("useWAWebOnUnmount")(G);
        let K;
        if (n[6] !== T || n[7] !== w_closeAllMenus || n[8] !== onShiftTabToMenu) {
            K = T ? null : function(e) {
                e.preventDefault();
                if (onShiftTabToMenu != null) {
                    onShiftTabToMenu();
                } else {
                    w_closeAllMenus();
                }
            };
            n[6] = T;
            n[7] = w_closeAllMenus;
            n[8] = onShiftTabToMenu;
            n[9] = K;
        } else {
            K = n[9];
        }
        let tab;
        if (n[10] !== T || n[11] !== w_closeAllMenus || n[12] !== onTabToMenu) {
            tab = T ? null : function(e) {
                e.preventDefault();
                if (onTabToMenu != null) {
                    onTabToMenu();
                } else {
                    w_closeAllMenus();
                }
            };
            n[10] = T;
            n[11] = w_closeAllMenus;
            n[12] = onTabToMenu;
            n[13] = tab;
        } else {
            tab = n[13];
        }
        let X;
        if (n[14] !== K || n[15] !== tab) {
            X = {
                "shift+tab": K,
                tab
            };
            n[14] = K;
            n[15] = tab;
            n[16] = X;
        } else {
            X = n[16];
        }
        const Y = X;
        let J;
        if (n[17] !== w_closeAllMenus || n[18] !== selectedCallback) {
            J = function() {
                w_closeAllMenus();
                selectedCallback(h);
            };
            n[17] = w_closeAllMenus;
            n[18] = selectedCallback;
            n[19] = J;
        } else {
            J = n[19];
        }
        const Z = J;
        let ee;
        if (n[20] === Symbol.for("react.memo_cache_sentinel")) {
            ee = function(t) {
                if (t.animationName === v.toString()) {
                    G();
                }
            };
            n[20] = ee;
        } else {
            ee = n[20];
        }
        const te = ee;
        let ne;
        if (n[21] === Symbol.for("react.memo_cache_sentinel")) {
            ne = s._("Reactions");
            n[21] = ne;
        } else {
            ne = n[21];
        }
        let re;
        if (n[22] !== B || n[23] !== q) {
            re = (e || (e = r("stylex"))).props(L.trayContainer, O ? [
                L.trayContainerBackground,
                B ? L.trayContainerAnimateLeft : L.trayContainerAnimateRight,
                q && L.trayClosing
            ] : L.trayContainerStatic);
            n[22] = B;
            n[23] = q;
            n[24] = re;
        } else {
            re = n[24];
        }
        const onAnimationEnd = q ? te : undefined;
        let ae;
        if (n[25] !== B || n[26] !== w_closeAllMenus || n[27] !== reactions || n[28] !== selectedCallback || n[29] !== selectedIndex) {
            ae = reactions.map((t, n)=>{
                const a = function() {
                    w_closeAllMenus();
                    if (O) {
                        VRef.current = {
                            reaction: t,
                            send: selectedCallback
                        };
                        U(true);
                        return;
                    }
                    selectedCallback(t);
                };
                const i = selectedIndex != null && n === selectedIndex;
                const l = B ? k : I;
                const Component = r("WDSButton.react");
                return <div key={n} {...babelHelpers.extends({}, O ? (e || (e = r("stylex"))).props(E.emojiItem, l[n] ?? l[l.length - 1]) : undefined, {
                    "data-testid": i ? "selected" : undefined,
                    children: <Component key={n} Icon={r("WAWebCreateEmojiIcon")(t)} variant="borderless" onPress={a} testid={`reactions-option-${n}`} aria-pressed={i} aria-label={t} xstyle={i && L.selectedButton}/>
                })}/>;
            });
            n[25] = B;
            n[26] = w_closeAllMenus;
            n[27] = reactions;
            n[28] = selectedCallback;
            n[29] = selectedIndex;
            n[30] = ae;
        } else {
            ae = n[30];
        }
        let ie;
        if (n[31] !== B || n[32] !== Z || n[33] !== x || n[34] !== P) {
            const Component = r("WDSButton.react");
            const Component_1 = r("WDSButton.react");
            ie = P && (O ? <div {...babelHelpers.extends({}, {
                0: {
                    className: "xg01cxk x10e4vud x1x7npyb x1e3411s x1ci4q39 x1ooo47y"
                },
                1: {
                    className: "xg01cxk x10e4vud x1fbm1x7 x1e3411s x1ci4q39 x1ooo47y"
                }
            }[!!B << 0], {
                children: <Component Icon={r("WDSIconIcAdd.react")} variant="borderless" onPress={Z} aria-label={s._("More reactions")} aria-pressed={x} xstyle={x && L.selectedButton} testid="reactions-show-more"/>
            })}/> : <Component_1 Icon={r("WDSIconIcAdd.react")} variant="borderless" onPress={Z} aria-label={s._("More reactions")} aria-pressed={x} xstyle={x && L.selectedButton} testid="reactions-show-more"/>);
            n[31] = B;
            n[32] = Z;
            n[33] = x;
            n[34] = P;
            n[35] = ie;
        } else {
            ie = n[35];
        }
        let le;
        if (n[36] !== re || n[37] !== onAnimationEnd || n[38] !== ae || n[39] !== ie) {
            le = <div {...babelHelpers.extends({
                "data-menu-content": true,
                role: "toolbar",
                "aria-label": ne
            }, re, {
                onAnimationEnd,
                children: [
                    ae,
                    ie
                ]
            })}/>;
            n[36] = re;
            n[37] = onAnimationEnd;
            n[38] = ae;
            n[39] = ie;
            n[40] = le;
        } else {
            le = n[40];
        }
        let se;
        if (n[41] !== M || n[42] !== le) {
            const Component = r("WAWebKeyboardRotateFocusArrows.react");
            se = <Component ref={M} role={null}>{le}</Component>;
            n[41] = M;
            n[42] = le;
            n[43] = se;
        } else {
            se = n[43];
        }
        let ue;
        if (n[44] !== Y || n[45] !== se) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            ue = <Component handlers={Y} tabIndex={null}>{se}</Component>;
            n[44] = Y;
            n[45] = se;
            n[46] = ue;
        } else {
            ue = n[46];
        }
        return ue;
    }
    l.default = T;
}, 226);