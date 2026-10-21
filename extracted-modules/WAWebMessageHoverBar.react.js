__d("WAWebMessageHoverBar.react", [
    "fbt",
    "WAWebABProps",
    "WAWebCreateEmojiIcon",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardRotateFocusArrows.react",
    "WAWebReactionGatingUtils",
    "WDSButton.react",
    "WDSIconIcAdd.react",
    "WDSIconIcChevronLeft.react",
    "WDSIconIcEdit.react",
    "WDSIconIcMoreVert.react",
    "WDSIconIcReply.react",
    "WDSIconWdsIcMoodAdd.react",
    "WDSMenu.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useMergeRefs"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useLayoutEffect, useRef } = c;
    const _ = "x1x8a09s-B";
    const f = "xekv6nw-B";
    const g = {
        selectedButton: {
            backgroundColor: "x4wrhlh",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            $$css: true
        },
        reactionPopIn: {
            animationName: "x6rgwf7",
            animationDuration: "x1p1cywj x1ddz9gh",
            animationTimingFunction: "x1j02p76",
            animationFillMode: "x1u6ievf",
            $$css: true
        },
        reactionStagger0: {
            animationDelay: "x1k7gots",
            $$css: true
        },
        reactionStagger1: {
            animationDelay: "xkgrfdk",
            $$css: true
        },
        reactionStagger2: {
            animationDelay: "x9ch8kx",
            $$css: true
        },
        reactionStagger3: {
            animationDelay: "xrfifu6",
            $$css: true
        },
        reactionStagger4: {
            animationDelay: "x7nwlfj",
            $$css: true
        },
        reactionStagger5: {
            animationDelay: "x1a0zpit",
            $$css: true
        }
    };
    const h = [
        g.reactionStagger0,
        g.reactionStagger1,
        g.reactionStagger2,
        g.reactionStagger3,
        g.reactionStagger4,
        g.reactionStagger5
    ];
    function YComponent(e) {
        const t = o("react-compiler-runtime").c(81);
        const { allowTabEscape, canAnimateExpand, canReact, collapseLabel, disableAutoFocus, isExpanded, messageSenderDisplayName, onCollapseEmojiPicker, onEdit, onEscape, onMoreOptions, onMouseEnter, onMouseLeave, onOpenEmojiPicker, onReaction, onReply, onShiftTabToMenu, onTabToMenu, reactions, reactionsChangeOnExpand, rotateFocusArrowsRef, selectedIndex, toggleButtonRef } = e;
        const w = allowTabEscape === undefined ? false : allowTabEscape;
        const A = canAnimateExpand === undefined ? false : canAnimateExpand;
        const F = canReact === undefined ? true : canReact;
        const O = collapseLabel === undefined ? "less" : collapseLabel;
        const B = disableAutoFocus === undefined ? true : disableAutoFocus;
        const W = isExpanded === undefined ? false : isExpanded;
        const q = reactionsChangeOnExpand === undefined ? true : reactionsChangeOnExpand;
        const URef = useRef(null);
        const V = rotateFocusArrowsRef ?? URef;
        let H;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            H = o("WAWebReactionGatingUtils").isReactionsMotionV2Enabled();
            t[0] = H;
        } else {
            H = t[0];
        }
        const G = H;
        const z = O === "less" && o("WAWebABProps").getABPropConfigValue("wa_web_quick_reactions") === true ? r("WDSIconWdsIcMoodAdd.react") : r("WDSIconIcAdd.react");
        let j;
        if (t[1] !== z) {
            j = function(t) {
                if (Array.isArray(t) && t.length === 2 && t[0] === false) {
                    return z;
                }
                if (Array.isArray(t) && t.length === 2 && t[0] === true && t[1] === "menu") {
                    return r("WDSIconIcMoreVert.react");
                }
                if (Array.isArray(t) && t.length === 2 && t[0] === true) {
                    return r("WDSIconIcChevronLeft.react");
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${t}`);
            };
            t[1] = z;
            t[2] = j;
        } else {
            j = t[2];
        }
        let K;
        if (t[3] !== O || t[4] !== W) {
            K = [
                W,
                O
            ];
            t[3] = O;
            t[4] = W;
            t[5] = K;
        } else {
            K = t[5];
        }
        let Q;
        if (t[6] !== K || t[7] !== j) {
            Q = j(K);
            t[6] = K;
            t[7] = j;
            t[8] = Q;
        } else {
            Q = t[8];
        }
        const X = Q;
        const Y = W ? onCollapseEmojiPicker : onOpenEmojiPicker;
        let J;
        if (t[9] !== O || t[10] !== W || t[11] !== messageSenderDisplayName) {
            let Z;
            if (messageSenderDisplayName != null) {
                Z = s._("React to message from {senderName}", [
                    s._param("senderName", messageSenderDisplayName)
                ]);
            } else {
                Z = s._("React to message");
            }
            let ee;
            if (t[13] !== O || t[14] !== W) {
                ee = [
                    W,
                    O
                ];
                t[13] = O;
                t[14] = W;
                t[15] = ee;
            } else {
                ee = t[15];
            }
            J = ((e)=>{
                if (Array.isArray(e) && e.length === 2 && e[0] === false) {
                    return Z;
                }
                if (Array.isArray(e) && e.length === 2 && e[0] === true && e[1] === "menu") {
                    return s._("Back to menu");
                }
                if (Array.isArray(e) && e.length === 2 && e[0] === true) {
                    return s._("Collapse reactions");
                }
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
            })(ee);
            t[9] = O;
            t[10] = W;
            t[11] = messageSenderDisplayName;
            t[12] = J;
        } else {
            J = t[12];
        }
        const te = J;
        const ne = A && G;
        const re = ne && q;
        let oe;
        if (t[16] !== O || t[17] !== W) {
            oe = b([
                W,
                O
            ]);
            t[16] = O;
            t[17] = W;
            t[18] = oe;
        } else {
            oe = t[18];
        }
        const ae = oe;
        const ie = F && onReaction != null;
        let le = ie && re ? reactions.length : 0;
        const se = ie && Y != null ? le++ : null;
        const ue = onReply != null ? le++ : null;
        const ce = onEdit != null ? le++ : null;
        const de = onMoreOptions != null ? le++ : null;
        const me = C;
        let pe;
        let _e;
        if (t[19] !== B || t[20] !== V) {
            pe = function() {
                if (B !== true) {
                    V.current?.focusFirst();
                }
            };
            _e = [
                B,
                V
            ];
            t[19] = B;
            t[20] = V;
            t[21] = pe;
            t[22] = _e;
        } else {
            pe = t[21];
            _e = t[22];
        }
        useLayoutEffect(pe, _e);
        const feRef = useRef(false);
        let ge;
        if (t[23] === Symbol.for("react.memo_cache_sentinel")) {
            ge = function(t) {
                if (t != null && feRef.current) {
                    feRef.current = false;
                    t.focus();
                }
            };
            t[23] = ge;
        } else {
            ge = t[23];
        }
        const ye = r("useMergeRefs")(toggleButtonRef, ge);
        let esc;
        if (t[24] !== onEscape) {
            esc = function(t) {
                t.preventDefault();
                t.stopPropagation();
                onEscape?.();
            };
            t[24] = onEscape;
            t[25] = esc;
        } else {
            esc = t[25];
        }
        let be;
        if (t[26] !== w || t[27] !== onShiftTabToMenu) {
            be = w ? null : function(e) {
                e.preventDefault();
                e.stopPropagation();
                onShiftTabToMenu?.();
            };
            t[26] = w;
            t[27] = onShiftTabToMenu;
            t[28] = be;
        } else {
            be = t[28];
        }
        let tab;
        if (t[29] !== w || t[30] !== onTabToMenu) {
            tab = w ? null : function(e) {
                e.preventDefault();
                e.stopPropagation();
                onTabToMenu?.();
            };
            t[29] = w;
            t[30] = onTabToMenu;
            t[31] = tab;
        } else {
            tab = t[31];
        }
        let Se;
        if (t[32] !== esc || t[33] !== be || t[34] !== tab) {
            Se = {
                esc,
                "shift+tab": be,
                tab
            };
            t[32] = esc;
            t[33] = be;
            t[34] = tab;
            t[35] = Se;
        } else {
            Se = t[35];
        }
        let Re;
        if (t[36] !== ne || t[37] !== re || t[38] !== te || t[39] !== Y || t[40] !== X || t[41] !== ae || t[42] !== ie || t[43] !== W || t[44] !== ye || t[45] !== onEdit || t[46] !== onMoreOptions || t[47] !== onReaction || t[48] !== onReply || t[49] !== reactions || t[50] !== q || t[51] !== selectedIndex || t[52] !== se) {
            const Component = r("WDSButton.react");
            const Component_1 = r("WDSTooltip.react");
            Re = ie && onReaction != null && <>{reactions.map((e, t)=>{
                const n = selectedIndex != null && t === selectedIndex;
                const Component = r("WDSButton.react");
                return <Component key={q ? `${t}-${String(W)}` : t} Icon={r("WAWebCreateEmojiIcon")(e, 22)} variant="borderless" size="small" onPress={function() {
                    return onReaction(e);
                }} testid={`hover-bar-reaction-${t}`} aria-pressed={n} xstyle={[
                    n && g.selectedButton,
                    re && g.reactionPopIn,
                    re && me(t)
                ]}/>;
            })}{Y != null && <Component_1 label={ae}><Component key={String(W)} ref={ye} Icon={X} variant="borderless" size="small" onPress={function() {
                feRef.current = true;
                Y();
            }} aria-label={te} testid={W ? "hover-bar-collapse-reactions" : "hover-bar-emoji-picker"} xstyle={[
                ne && g.reactionPopIn,
                ne && me(se)
            ]}/></Component_1>}{(onReply != null || onEdit != null || onMoreOptions != null) && <div className="x1i1rx1s xxk0z11 x3x0x6p x1wbi8v6 x7g7pl8 x2lah0s"/>}</>;
            t[36] = ne;
            t[37] = re;
            t[38] = te;
            t[39] = Y;
            t[40] = X;
            t[41] = ae;
            t[42] = ie;
            t[43] = W;
            t[44] = ye;
            t[45] = onEdit;
            t[46] = onMoreOptions;
            t[47] = onReaction;
            t[48] = onReply;
            t[49] = reactions;
            t[50] = q;
            t[51] = selectedIndex;
            t[52] = se;
            t[53] = Re;
        } else {
            Re = t[53];
        }
        let Le;
        if (t[54] !== ne || t[55] !== onReply || t[56] !== ue) {
            const Component = r("WDSButton.react");
            const Component_1 = r("WDSTooltip.react");
            Le = onReply != null && <Component_1 label={s._("Reply")}><Component Icon={r("WDSIconIcReply.react")} variant="borderless" size="small" onPress={onReply} aria-label={s._("Reply to message")} testid="hover-bar-reply" xstyle={[
                ne && g.reactionPopIn,
                ne && me(ue)
            ]}/></Component_1>;
            t[54] = ne;
            t[55] = onReply;
            t[56] = ue;
            t[57] = Le;
        } else {
            Le = t[57];
        }
        let Ee;
        if (t[58] !== ne || t[59] !== ce || t[60] !== onEdit) {
            const Component = r("WDSButton.react");
            const Component_1 = r("WDSTooltip.react");
            Ee = onEdit != null && <Component_1 label={s._("Edit")}><Component Icon={r("WDSIconIcEdit.react")} variant="borderless" size="small" onPress={onEdit} aria-label={s._("Edit message")} testid="hover-bar-edit" xstyle={[
                ne && g.reactionPopIn,
                ne && me(ce)
            ]}/></Component_1>;
            t[58] = ne;
            t[59] = ce;
            t[60] = onEdit;
            t[61] = Ee;
        } else {
            Ee = t[61];
        }
        let ke;
        if (t[62] !== ne || t[63] !== de || t[64] !== onMoreOptions) {
            const Component = r("WDSButton.react");
            const Component_1 = r("WDSTooltip.react");
            ke = onMoreOptions != null && <Component_1 label={s._("Menu")}><Component Icon={r("WDSIconIcMoreVert.react")} variant="borderless" size="small" onPress={onMoreOptions} aria-label={s._("Open message options")} testid="hover-bar-more-options" xstyle={[
                ne && g.reactionPopIn,
                ne && me(de)
            ]}/></Component_1>;
            t[62] = ne;
            t[63] = de;
            t[64] = onMoreOptions;
            t[65] = ke;
        } else {
            ke = t[65];
        }
        let Ie;
        if (t[66] !== Re || t[67] !== Le || t[68] !== Ee || t[69] !== ke) {
            const Component = r("WDSMenu.react");
            Ie = <Component isHorizontalMenu gap={2}>{Re}{Le}{Ee}{ke}</Component>;
            t[66] = Re;
            t[67] = Le;
            t[68] = Ee;
            t[69] = ke;
            t[70] = Ie;
        } else {
            Ie = t[70];
        }
        let Te;
        if (t[71] !== V || t[72] !== Ie) {
            const Component = r("WAWebKeyboardRotateFocusArrows.react");
            Te = <Component ref={V}>{Ie}</Component>;
            t[71] = V;
            t[72] = Ie;
            t[73] = Te;
        } else {
            Te = t[73];
        }
        let De;
        if (t[74] !== Se || t[75] !== Te) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            De = <Component handlers={Se} tabIndex={null}>{Te}</Component>;
            t[74] = Se;
            t[75] = Te;
            t[76] = De;
        } else {
            De = t[76];
        }
        let xe;
        if (t[77] !== onMouseEnter || t[78] !== onMouseLeave || t[79] !== De) {
            xe = <div onKeyPress={onKeyPress} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{De}</div>;
            t[77] = onMouseEnter;
            t[78] = onMouseLeave;
            t[79] = De;
            t[80] = xe;
        } else {
            xe = t[80];
        }
        return xe;
    }
    function C(e) {
        if (e == null) {
            return null;
        }
        return h[e] ?? h[h.length - 1];
    }
    function b(e) {
        if (Array.isArray(e) && e.length === 2 && e[0] === false) {
            return s._("More");
        }
        if (Array.isArray(e) && e.length === 2 && e[0] === true && e[1] === "menu") {
            return s._("Menu");
        }
        if (Array.isArray(e) && e.length === 2 && e[0] === true) {
            return s._("Less");
        }
        throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
    }
    function onKeyPress(e) {
        if (e.key === "Enter" || e.key === " ") {
            e.stopPropagation();
        }
    }
    l.default = YComponent;
}, 226);