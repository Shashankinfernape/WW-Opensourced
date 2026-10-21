__d("WAWebCellV2.react", [
    "WAWebCellFrameV2.react",
    "WAWebFocusTracer",
    "WAWebKeyboardTabUtils",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebFocusState",
    "useWAWebStaticButtonA11y"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "active",
        "applyFocusStyles",
        "ariaLabel",
        "border",
        "colorScheme",
        "containerXStyle",
        "dataTab",
        "detailLeftXStyle",
        "detailRightXStyle",
        "disabled",
        "idle",
        "interactive",
        "isFocusedViaKeyboard",
        "material",
        "middleContainerXStyle",
        "onClick",
        "onContextMenu",
        "onMouseEnter",
        "onMouseLeave",
        "primaryRightXStyle",
        "primaryXStyle",
        "secondaryRightXStyle",
        "secondaryXStyle",
        "tabIndex",
        "testid",
        "title"
    ];
    let u;
    const c = u || (u = o("react"));
    const u_useRef = u.useRef;
    const m = [
        "ArrowRight",
        "ArrowLeft"
    ];
    const p = {
        material: {
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            $$css: true
        }
    };
    const _ = {
        containerActive: {
            backgroundColor: "x4wrhlh",
            $$css: true
        },
        containerInteractive: {
            ":hover_backgroundColor": "x17gydlx",
            ":focus_backgroundColor": "x1jsj9aw",
            $$css: true
        },
        border: {
            borderBottomWidth: "xso031l",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x120ee7l",
            $$css: true
        },
        borderHover: {
            borderBottomColor: "xee4sfp",
            $$css: true
        }
    };
    const f = {
        containerActive: {
            backgroundColor: "x4wrhlh",
            $$css: true
        },
        containerInteractive: {
            ":hover_backgroundColor": "x1ubxc9n",
            ":focus_backgroundColor": "xbmkbis",
            $$css: true
        },
        border: {
            borderBottomWidth: "xso031l",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x120ee7l",
            $$css: true
        },
        borderHover: {
            borderBottomColor: "x6hs5rg",
            $$css: true
        }
    };
    const g = {
        containerActive: {
            outlineColor: "xzu5o23",
            outlineWidth: "xggpgwd",
            outlineStyle: "xaatb59",
            outlineOffset: "x2ssjo2",
            $$css: true
        },
        containerInteractive: {
            ":hover_backgroundColor": "x17gydlx",
            ":focus_backgroundColor": "x1jsj9aw",
            $$css: true
        },
        border: {
            borderBottomWidth: "xso031l",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x120ee7l",
            $$css: true
        },
        borderHover: {
            borderBottomColor: "xee4sfp",
            $$css: true
        }
    };
    const h = {
        containerActive: {
            backgroundColor: "xrkjzwr",
            $$css: true
        },
        containerInteractive: {
            ":hover_backgroundColor": "x4a1f80",
            ":focus_backgroundColor": "xatmcw1",
            $$css: true
        },
        border: {
            borderBottomWidth: "xso031l",
            borderBottomStyle: "x1q0q8m5",
            borderBottomColor: "x120ee7l",
            $$css: true
        },
        borderHover: {
            borderBottomColor: "xtee1b1",
            $$css: true
        }
    };
    function YComponent(t) {
        const n = o("react-compiler-runtime").c(81);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        let l;
        let u;
        let y;
        let C;
        let b;
        let v;
        let S;
        let R;
        let L;
        let E;
        let k;
        let I;
        let T;
        let D;
        let x;
        let $;
        let P;
        let N;
        let M;
        let w;
        let A;
        let F;
        let O;
        let B;
        let W;
        if (n[3] !== a) {
            const q = a;
            const { active, applyFocusStyles, ariaLabel, border, colorScheme, containerXStyle, dataTab, detailLeftXStyle, detailRightXStyle, disabled, idle, interactive, isFocusedViaKeyboard, material, middleContainerXStyle, onClick, onContextMenu, onMouseEnter, onMouseLeave, primaryRightXStyle, primaryXStyle, secondaryRightXStyle, secondaryXStyle, tabIndex, testid, title } = q;
            const _e = babelHelpers.objectWithoutPropertiesLoose(q, s);
            P = active;
            N = applyFocusStyles;
            l = ariaLabel;
            M = colorScheme;
            u = containerXStyle;
            y = dataTab;
            C = detailLeftXStyle;
            b = detailRightXStyle;
            w = disabled;
            A = idle;
            F = interactive;
            v = isFocusedViaKeyboard;
            S = middleContainerXStyle;
            R = onClick;
            L = onContextMenu;
            E = onMouseEnter;
            k = onMouseLeave;
            I = primaryRightXStyle;
            T = primaryXStyle;
            x = secondaryRightXStyle;
            $ = secondaryXStyle;
            O = tabIndex;
            B = testid;
            W = title;
            D = _e;
            n[3] = a;
            n[4] = l;
            n[5] = u;
            n[6] = y;
            n[7] = C;
            n[8] = b;
            n[9] = v;
            n[10] = S;
            n[11] = R;
            n[12] = L;
            n[13] = E;
            n[14] = k;
            n[15] = I;
            n[16] = T;
            n[17] = D;
            n[18] = x;
            n[19] = $;
            n[20] = P;
            n[21] = N;
            n[22] = M;
            n[23] = w;
            n[24] = A;
            n[25] = F;
            n[26] = O;
            n[27] = B;
            n[28] = W;
        } else {
            l = n[4];
            u = n[5];
            y = n[6];
            C = n[7];
            b = n[8];
            v = n[9];
            S = n[10];
            R = n[11];
            L = n[12];
            E = n[13];
            k = n[14];
            I = n[15];
            T = n[16];
            D = n[17];
            x = n[18];
            $ = n[19];
            P = n[20];
            N = n[21];
            M = n[22];
            w = n[23];
            A = n[24];
            F = n[25];
            O = n[26];
            B = n[27];
            W = n[28];
        }
        const fe = P === undefined ? false : P;
        const ge = N === undefined ? true : N;
        const he = M === undefined ? "default" : M;
        const ye = w === undefined ? false : w;
        const Ce = A === undefined ? false : A;
        const be = F === undefined ? true : F;
        const ve = be && !ye;
        const Se = u_useRef(null);
        const Re = r("useWAWebFocusState")();
        const Le = Re[0];
        const Ee = Re[1];
        let ke;
        if (n[29] !== ye || n[30] !== O) {
            ke = {
                tabIndex: O,
                disabled: ye
            };
            n[29] = ye;
            n[30] = O;
            n[31] = ke;
        } else {
            ke = n[31];
        }
        const Ie = r("useWAWebStaticButtonA11y")(R, ke);
        const Te = Ie[0];
        const De = Ie[1];
        const xe = u_useRef(null);
        const $e = r("useMergeRefs")(Se, Te, Le, xe, i);
        let Pe;
        if (n[32] === Symbol.for("react.memo_cache_sentinel")) {
            Pe = function(t) {
                const Se_current = Se.current;
                if (Se_current) {
                    const n = t.key;
                    if (m.includes(n) && Se_current) {
                        const a = o("WAWebKeyboardTabUtils").getNextTabbableElement(Se_current, t.key === "ArrowRight" ? o("WAWebKeyboardTabUtils").TabDirection.FORWARD : o("WAWebKeyboardTabUtils").TabDirection.BACKWARD, o("WAWebKeyboardTabUtils").FocusType.TABBABLE);
                        r("WAWebFocusTracer").focus(a);
                    }
                }
            };
            n[32] = Pe;
        } else {
            Pe = n[32];
        }
        const Ne = Pe;
        let Me;
        if (n[33] !== De || n[34] !== ve || n[35] !== E || n[36] !== k) {
            Me = ve ? babelHelpers.extends({}, De, {
                tabIndex: De.tabIndex,
                onMouseEnter: function(t) {
                    E?.(t);
                },
                onMouseLeave: function(t) {
                    k?.(t);
                }
            }) : {};
            n[33] = De;
            n[34] = ve;
            n[35] = E;
            n[36] = k;
            n[37] = Me;
        } else {
            Me = n[37];
        }
        const we = Me;
        let Ae;
        if (n[38] !== he) {
            Ae = he === "default" ? _ : he === "lighter" ? f : he === "lightest" ? g : he === "negative" ? h : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${he}`);
            })();
            n[38] = he;
            n[39] = Ae;
        } else {
            Ae = n[39];
        }
        const Fe = Ae;
        let Oe;
        if (n[40] !== L) {
            Oe = function(t) {
                t.preventDefault();
                t.stopPropagation();
                if (L) {
                    L({
                        event: t
                    });
                }
            };
            n[40] = L;
            n[41] = Oe;
        } else {
            Oe = n[41];
        }
        const Be = Oe;
        const We = fe && v !== false;
        const qe = We && Fe?.containerActive;
        const Ue = !!ve && !Ce && Fe?.containerInteractive;
        const Ve = Ee && ge && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent;
        let He;
        if (n[42] !== u || n[43] !== qe || n[44] !== Ue || n[45] !== Ve) {
            He = [
                p.material,
                qe,
                Ue,
                Ve,
                u
            ];
            n[42] = u;
            n[43] = qe;
            n[44] = Ue;
            n[45] = Ve;
            n[46] = He;
        } else {
            He = n[46];
        }
        const containerXStyle = He;
        let ze;
        if (n[47] === Symbol.for("react.memo_cache_sentinel")) {
            ze = "x78zum5 xh8yej3 x1iyjqo2 x1n2onr6 x9f619 xkh2ocl";
            n[47] = ze;
        } else {
            ze = n[47];
        }
        const je = B ?? "cell-frame-container";
        const Ke = ve ? y : undefined;
        let detailLeftXStyle;
        if (n[48] !== C) {
            detailLeftXStyle = [
                C
            ];
            n[48] = C;
            n[49] = detailLeftXStyle;
        } else {
            detailLeftXStyle = n[49];
        }
        let Xe;
        if (n[50] !== S) {
            Xe = [
                S
            ];
            n[50] = S;
            n[51] = Xe;
        } else {
            Xe = n[51];
        }
        let primaryXStyle;
        if (n[52] !== T) {
            primaryXStyle = [
                T
            ];
            n[52] = T;
            n[53] = primaryXStyle;
        } else {
            primaryXStyle = n[53];
        }
        let primaryRightXStyle;
        if (n[54] !== I) {
            primaryRightXStyle = [
                I
            ];
            n[54] = I;
            n[55] = primaryRightXStyle;
        } else {
            primaryRightXStyle = n[55];
        }
        let secondaryXStyle;
        if (n[56] !== $) {
            secondaryXStyle = [
                $
            ];
            n[56] = $;
            n[57] = secondaryXStyle;
        } else {
            secondaryXStyle = n[57];
        }
        let secondaryRightXStyle;
        if (n[58] !== x) {
            secondaryRightXStyle = [
                x
            ];
            n[58] = x;
            n[59] = secondaryRightXStyle;
        } else {
            secondaryRightXStyle = n[59];
        }
        let detailRightXStyle;
        if (n[60] !== b) {
            detailRightXStyle = [
                b
            ];
            n[60] = b;
            n[61] = detailRightXStyle;
        } else {
            detailRightXStyle = n[61];
        }
        let nt;
        if (n[62] !== containerXStyle || n[63] !== D || n[64] !== detailLeftXStyle || n[65] !== Xe || n[66] !== primaryXStyle || n[67] !== primaryRightXStyle || n[68] !== secondaryXStyle || n[69] !== secondaryRightXStyle || n[70] !== detailRightXStyle) {
            nt = c.jsx(r("WAWebCellFrameV2.react"), babelHelpers.extends({}, D, {
                containerXStyle,
                detailLeftXStyle,
                middleContainerXStyle: Xe,
                primaryXStyle,
                primaryRightXStyle,
                secondaryXStyle,
                secondaryRightXStyle,
                detailRightXStyle
            }));
            n[62] = containerXStyle;
            n[63] = D;
            n[64] = detailLeftXStyle;
            n[65] = Xe;
            n[66] = primaryXStyle;
            n[67] = primaryRightXStyle;
            n[68] = secondaryXStyle;
            n[69] = secondaryRightXStyle;
            n[70] = detailRightXStyle;
            n[71] = nt;
        } else {
            nt = n[71];
        }
        let rt;
        if (n[72] !== l || n[73] !== Be || n[74] !== we || n[75] !== $e || n[76] !== je || n[77] !== Ke || n[78] !== nt || n[79] !== W) {
            rt = <div {...babelHelpers.extends({
                onKeyDown: Ne,
                ref: $e,
                className: ze,
                "data-testid": je,
                "data-tab": Ke,
                title: W,
                "aria-label": l
            }, we, {
                onContextMenu: Be,
                children: nt
            })}/>;
            n[72] = l;
            n[73] = Be;
            n[74] = we;
            n[75] = $e;
            n[76] = je;
            n[77] = Ke;
            n[78] = nt;
            n[79] = W;
            n[80] = rt;
        } else {
            rt = n[80];
        }
        return rt;
    }
    l.default = YComponent;
}, 98);