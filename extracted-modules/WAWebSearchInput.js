__d("WAWebSearchInput", [
    "fbt",
    "Lexical",
    "LexicalExtensionComposer",
    "WAWebClickable.react",
    "WAWebEditorRefPlugin",
    "WAWebEditorStatePlugin.react",
    "WAWebFlex.react",
    "WAWebKeyboardConstants",
    "WAWebL10N",
    "WAWebLexicalUtils",
    "WAWebNoop",
    "WAWebOnKeyDownPlugin",
    "WAWebRichTextInput.react",
    "WAWebSearchFilterChip.react",
    "WAWebSpinner.react",
    "WDSIconIcArrowBack.react",
    "WDSIconIcClose.react",
    "WDSIconIcSearch.react",
    "WDSPaddings.stylex",
    "nullthrows",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useRef, useState } = c;
    const p = {
        container: {
            position: "x1n2onr6",
            width: "xh8yej3",
            boxSizing: "x9f619",
            $$css: true
        },
        containerRefreshed: {
            height: "xdd8jsf",
            alignItems: "x7a106z",
            $$css: true
        },
        iconCloseSearch: {
            insetInlineEnd: "x11dcrhx",
            left: null,
            right: null,
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            $$css: true
        },
        inputWrapper: {
            position: "x1n2onr6",
            boxSizing: "x9f619",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            alignItems: "x6s0dn4",
            height: "x1s1d1n7",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            $$css: true
        },
        inputWrapperRefreshed: {
            color: "x14ug900",
            caretColor: "xjdcl3y",
            borderStartStartRadius: "x1ekkm8c",
            borderStartEndRadius: "x1143rjc",
            borderEndEndRadius: "xum4auv",
            borderEndStartRadius: "xj21bgg",
            height: "x1vqgdyp",
            boxShadow: "x1gnnqk1 x19qpdui",
            paddingInlineStart: "x1p4gyq8",
            $$css: true
        },
        inputWrapperFocusRefreshed: {
            borderTopColor: "xlze6vy",
            borderInlineEndColor: "x47fsot",
            borderBottomColor: "x1rrvw3c",
            borderInlineStartColor: "x18djku1",
            boxShadow: "xu8d7ss",
            ":hover_borderTopColor": "x1lfjbn8",
            ":hover_borderInlineEndColor": "xwj740h",
            ":hover_borderBottomColor": "xdeyfa3",
            ":hover_borderInlineStartColor": "x1pig4h2",
            $$css: true
        },
        inputWrapperMaterial: {
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            $$css: true
        },
        fullWidth: {
            width: "xh8yej3",
            $$css: true
        },
        iconColorRefreshed: {
            color: "x14ug900",
            $$css: true
        },
        startIconRefreshed: {
            height: "x1qx5ct2",
            width: "xw4jnvo",
            flexShrink: "x2lah0s",
            position: "x10l6tqk",
            top: "x1eu8d0j",
            insetInlineStart: "x9p6ekw",
            left: null,
            right: null,
            $$css: true
        },
        backIconRefreshed: {
            position: "x10l6tqk",
            insetInlineStart: "xl3v32j",
            left: null,
            right: null,
            top: "x1qiirwl",
            color: "x14ug900",
            $$css: true
        },
        tealLighterColor: {
            color: "x1v5yvga",
            $$css: true
        },
        placeholderTruncate: {
            maxWidth: "x193iq5w",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            $$css: true
        }
    };
    const _ = {
        inputWrapper: {
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        inputWrapperRefreshed: {
            backgroundColor: "x4wrhlh x1l0ey4t",
            $$css: true
        },
        inputPlaceholder: {
            color: "xhslqc4",
            $$css: true
        },
        iconSearch: {
            color: "xhslqc4",
            $$css: true
        },
        iconCloseSearch: {
            color: "xhslqc4",
            $$css: true
        }
    };
    const f = {
        inputWrapper: {
            backgroundColor: "x1od0jb8",
            $$css: true
        },
        inputWrapperRefreshed: {
            backgroundColor: "x4wrhlh x1l0ey4t",
            $$css: true
        },
        inputPlaceholder: {
            color: "xhslqc4",
            $$css: true
        },
        iconSearch: {
            color: "xhslqc4",
            $$css: true
        },
        iconCloseSearch: {
            color: "xhslqc4",
            $$css: true
        }
    };
    function G11(e) {
        const t = o("react-compiler-runtime").c(86);
        const { children, colorScheme, containerXStyle, detailLeft, detailRight, filter, focusOnMount, loading, onArrowDown, onCancel, onClearFilter, onClick, onSearch, padding, placeholder, searchInputA11yLabel, showBackButton, showCloseButton, tabOrder } = e;
        const $ = focusOnMount === undefined ? true : focusOnMount;
        const P = showBackButton === undefined ? false : showBackButton;
        const N = showCloseButton === undefined ? false : showCloseButton;
        const M = useState("");
        const w = M[0];
        const A = M[1];
        const FRef = useRef();
        const ORef = useRef();
        const B = w || filter != null;
        const W = useState(false);
        const q = W[0];
        const U = W[1];
        let V;
        if (t[0] !== onSearch) {
            V = function({ text }) {
                A(text);
                onSearch?.(text);
            };
            t[0] = onSearch;
            t[1] = V;
        } else {
            V = t[1];
        }
        const H = V;
        let G;
        if (t[2] !== H) {
            G = function() {
                if (FRef.current) {
                    o("WAWebLexicalUtils").setTextContent(FRef.current, "");
                    H({
                        text: "",
                        parsableText: "",
                        data: {}
                    });
                }
            };
            t[2] = H;
            t[3] = G;
        } else {
            G = t[3];
        }
        const z = G;
        let j;
        if (t[4] !== onClearFilter) {
            j = function() {
                onClearFilter?.();
            };
            t[4] = onClearFilter;
            t[5] = j;
        } else {
            j = t[5];
        }
        const K = j;
        let Q;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            Q = function() {
                ORef.current?.blur();
                r("nullthrows")(FRef.current).focus();
                U(true);
            };
            t[6] = Q;
        } else {
            Q = t[6];
        }
        const X = Q;
        let Y;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            Y = function() {
                ORef.current?.blur();
                r("nullthrows")(FRef.current).blur();
                U(false);
            };
            t[7] = Y;
        } else {
            Y = t[7];
        }
        const J = Y;
        let Z;
        if (t[8] !== K || t[9] !== z) {
            Z = function() {
                z();
                K();
            };
            t[8] = K;
            t[9] = z;
            t[10] = Z;
        } else {
            Z = t[10];
        }
        const ee = Z;
        let te;
        if (t[11] !== e) {
            te = function(n) {
                X();
                if (e.onFocus != null) {
                    e.onFocus(n);
                }
            };
            t[11] = e;
            t[12] = te;
        } else {
            te = t[12];
        }
        const ne = te;
        let re;
        if (t[13] !== ee || t[14] !== onCancel) {
            re = function() {
                ee();
                X();
                onCancel?.();
            };
            t[13] = ee;
            t[14] = onCancel;
            t[15] = re;
        } else {
            re = t[15];
        }
        const oe = re;
        let ae;
        if (t[16] !== ee) {
            ae = function() {
                J();
                ee();
            };
            t[16] = ee;
            t[17] = ae;
        } else {
            ae = t[17];
        }
        const ie = ae;
        let le;
        if (t[18] !== e) {
            le = function(n) {
                J();
                if (e.onBlur != null) {
                    e.onBlur(n);
                }
            };
            t[18] = e;
            t[19] = le;
        } else {
            le = t[19];
        }
        const se = le;
        let ue;
        e: switch(colorScheme){
            case "darker":
                {
                    ue = f;
                    break e;
                }
            case "default":
            default:
                ue = _;
        }
        let ce = null;
        let de;
        if (t[20] === Symbol.for("react.memo_cache_sentinel")) {
            de = u.jsx(r("WDSIconIcSearch.react"), {
                testid: "search-refreshed-thin",
                height: 20,
                width: 20,
                iconXstyle: p.iconColorRefreshed
            });
            t[20] = de;
        } else {
            de = t[20];
        }
        const me = de;
        let pe;
        if (t[21] !== ie || t[22] !== q || t[23] !== B || t[24] !== P) {
            pe = P ? <button aria-label={s._("Cancel search")} onClick={ie}><div {...babelHelpers.extends({}, {
                0: {
                    className: "x47corl xg01cxk x1hzlkrz x1eppysm"
                },
                1: {
                    className: "x1hc1fzr x7a90jq x1nb0u29"
                }
            }[!!(q || B) << 0], {
                children: u.jsx(r("WDSIconIcArrowBack.react"), {
                    iconXstyle: p.tealLighterColor,
                    height: 24,
                    overrideDirection: r("WAWebL10N").isRTL() ? "rtl" : "ltr",
                    width: 24,
                    xstyle: p.backIconRefreshed
                })
            })}/><div {...babelHelpers.extends({}, {
                0: {
                    className: "x1sazirq x165colc"
                },
                1: {
                    className: "xg01cxk x7a90jq x11t6m9b"
                }
            }[!!(q || B) << 0], {
                children: me
            })}/></button> : me;
            t[21] = ie;
            t[22] = q;
            t[23] = B;
            t[24] = P;
            t[25] = pe;
        } else {
            pe = t[25];
        }
        const _e = pe;
        if (loading === true) {
            let fe;
            if (t[26] === Symbol.for("react.memo_cache_sentinel")) {
                const Component = o("WAWebFlex.react").FlexRow;
                fe = <Component marginEnd={16}>{u.jsx(o("WAWebSpinner.react").Spinner, {
                    color: "highlight",
                    size: 20,
                    stroke: 6
                })}</Component>;
                t[26] = fe;
            } else {
                fe = t[26];
            }
            ce = fe;
        } else if (B || N) {
            let ge;
            if (t[27] === Symbol.for("react.memo_cache_sentinel")) {
                ge = s._("Cancel search");
                t[27] = ge;
            } else {
                ge = t[27];
            }
            let he;
            if (t[28] !== ue.iconCloseSearch) {
                he = [
                    p.iconCloseSearch,
                    ue.iconCloseSearch
                ];
                t[28] = ue.iconCloseSearch;
                t[29] = he;
            } else {
                he = t[29];
            }
            let ye;
            if (t[30] === Symbol.for("react.memo_cache_sentinel")) {
                ye = u.jsx(r("WDSIconIcClose.react"), {});
                t[30] = ye;
            } else {
                ye = t[30];
            }
            let Ce;
            if (t[31] !== oe || t[32] !== he) {
                const Component = o("WAWebClickable.react").Clickable;
                const Component_1 = o("WAWebFlex.react").FlexRow;
                Ce = <Component_1 paddingEnd={20}><Component key="icon-clear-search" ariaLabel={ge} dataTestId="clear-search-input" onClick={oe} xstyle={he}>{ye}</Component></Component_1>;
                t[31] = oe;
                t[32] = he;
                t[33] = Ce;
            } else {
                Ce = t[33];
            }
            ce = Ce;
        }
        const be = useState(h);
        const ve = be[0];
        let Se;
        if (t[34] !== K) {
            Se = function() {
                K();
                X();
            };
            t[34] = K;
            t[35] = Se;
        } else {
            Se = t[35];
        }
        const Re = Se;
        let Le;
        if (t[36] !== onArrowDown || t[37] !== w.length) {
            Le = function(t) {
                e: {
                    if (t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.BACKSPACE) {
                        Ee();
                        break e;
                    }
                    if (t.key === o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.ARROW_DOWN) {
                        t.preventDefault();
                        onArrowDown?.();
                        break e;
                    }
                }
            };
            var Ee = ()=>{
                if (w.length === 0) {
                    ORef.current?.focus();
                }
            };
            t[36] = onArrowDown;
            t[37] = w.length;
            t[38] = Le;
        } else {
            Le = t[38];
        }
        let ke;
        if (t[39] !== filter || t[40] !== Re) {
            const Component = r("WAWebSearchFilterChip.react");
            ke = filter != null && <Component onClearFilter={Re} ref={ORef} text={filter} xstyle={o("WDSPaddings.stylex").wdsPaddings.paddingHor4}/>;
            t[39] = filter;
            t[40] = Re;
            t[41] = ke;
        } else {
            ke = t[41];
        }
        const Ie = ke;
        let Te;
        if (t[42] !== padding) {
            Te = padding ?? [
                0,
                20,
                12,
                20
            ];
            t[42] = padding;
            t[43] = Te;
        } else {
            Te = t[43];
        }
        let De;
        if (t[44] !== containerXStyle) {
            De = [
                p.container,
                p.containerRefreshed,
                containerXStyle
            ];
            t[44] = containerXStyle;
            t[45] = De;
        } else {
            De = t[45];
        }
        let xe;
        if (t[46] === Symbol.for("react.memo_cache_sentinel")) {
            xe = [
                p.inputWrapperRefreshed
            ];
            t[46] = xe;
        } else {
            xe = t[46];
        }
        const $e = !(w.length > 0) && o("WDSPaddings.stylex").wdsPaddings.paddingEnd0;
        const Pe = q && p.inputWrapperFocusRefreshed;
        let Ne;
        if (t[47] !== ue.inputWrapperRefreshed || t[48] !== $e || t[49] !== Pe) {
            Ne = [
                p.inputWrapper,
                p.inputWrapperMaterial,
                xe,
                $e,
                ue.inputWrapperRefreshed,
                Pe
            ];
            t[47] = ue.inputWrapperRefreshed;
            t[48] = $e;
            t[49] = Pe;
            t[50] = Ne;
        } else {
            Ne = t[50];
        }
        let Me;
        if (t[51] !== _e) {
            const Component = o("WAWebFlex.react").FlexRow;
            Me = <Component marginStart={0} xstyle={p.startIconRefreshed}>{_e}</Component>;
            t[51] = _e;
            t[52] = Me;
        } else {
            Me = t[52];
        }
        let we;
        if (t[53] !== Le) {
            const Component = r("WAWebOnKeyDownPlugin");
            we = <Component onKeyDown={Le}/>;
            t[53] = Le;
            t[54] = we;
        } else {
            we = t[54];
        }
        let Ae;
        if (t[55] !== se || t[56] !== H || t[57] !== ne) {
            const Component = r("WAWebEditorStatePlugin.react");
            Ae = <Component onBlur={se} onChange={H} onFocus={ne}/>;
            t[55] = se;
            t[56] = H;
            t[57] = ne;
            t[58] = Ae;
        } else {
            Ae = t[58];
        }
        let Fe;
        if (t[59] === Symbol.for("react.memo_cache_sentinel")) {
            Fe = u.jsx(r("WAWebEditorRefPlugin"), {
                editorRef: FRef
            });
            t[59] = Fe;
        } else {
            Fe = t[59];
        }
        let Oe;
        if (t[60] !== we || t[61] !== Ae) {
            Oe = <>{we}{Ae}{Fe}</>;
            t[60] = we;
            t[61] = Ae;
            t[62] = Oe;
        } else {
            Oe = t[62];
        }
        let Be;
        if (t[63] !== $ || t[64] !== onClick || t[65] !== placeholder || t[66] !== searchInputA11yLabel || t[67] !== Oe || t[68] !== tabOrder) {
            const Component = r("WAWebRichTextInput.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            Be = <Component_1 paddingEnd={8} xstyle={p.fullWidth}><Component focusOnMount={$} lineWrap={false} multiline={false} onClick={onClick} placeholder={placeholder} placeholderTextXStyle={p.placeholderTruncate} tabOrder={tabOrder} testid="search-input" title={searchInputA11yLabel} xstyle={false}>{Oe}</Component></Component_1>;
            t[63] = $;
            t[64] = onClick;
            t[65] = placeholder;
            t[66] = searchInputA11yLabel;
            t[67] = Oe;
            t[68] = tabOrder;
            t[69] = Be;
        } else {
            Be = t[69];
        }
        let We;
        if (t[70] !== ce || t[71] !== Ie || t[72] !== Ne || t[73] !== Me || t[74] !== Be) {
            const Component = o("WAWebFlex.react").FlexRow;
            We = <Component align="center" grow={1} padding={0} xstyle={Ne}>{Me}{Ie}{Be}{ce}</Component>;
            t[70] = ce;
            t[71] = Ie;
            t[72] = Ne;
            t[73] = Me;
            t[74] = Be;
            t[75] = We;
        } else {
            We = t[75];
        }
        let qe;
        if (t[76] !== detailLeft || t[77] !== detailRight || t[78] !== Te || t[79] !== De || t[80] !== We) {
            const Component = o("WAWebFlex.react").FlexRow;
            qe = <Component align="center" basis="auto" grow={0} padding={Te} shrink={0} xstyle={De}>{detailLeft}{We}{detailRight}</Component>;
            t[76] = detailLeft;
            t[77] = detailRight;
            t[78] = Te;
            t[79] = De;
            t[80] = We;
            t[81] = qe;
        } else {
            qe = t[81];
        }
        let Ue;
        if (t[82] !== children || t[83] !== ve || t[84] !== qe) {
            const Component = o("LexicalExtensionComposer").LexicalExtensionComposer;
            Ue = <Component contentEditable={null} extension={ve}>{qe}{children}</Component>;
            t[82] = children;
            t[83] = ve;
            t[84] = qe;
            t[85] = Ue;
        } else {
            Ue = t[85];
        }
        return Ue;
    }
    function h() {
        return o("Lexical").defineExtension({
            name: "[root]",
            namespace: "CommandPaletteInput",
            onError: r("WAWebNoop")
        });
    }
    function y(e) {
        const t = o("react-compiler-runtime").c(3);
        let n;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            n = [
                0,
                20
            ];
            t[0] = n;
        } else {
            n = t[0];
        }
        let r;
        if (t[1] !== e) {
            const Component = o("WAWebFlex.react").FlexColumn;
            r = <Component align="stretch"><G11 {...babelHelpers.extends({}, e, {
                padding: n
            })}/></Component>;
            t[1] = e;
            t[2] = r;
        } else {
            r = t[2];
        }
        return r;
    }
    l.SearchInput = G11;
    l.DrawerSearchInput = y;
}, 226);