__d("WAWebPasswordInputWithEmojiSupport.react", [
    "fbt",
    "WAWebABProps",
    "WAWebClassnames",
    "WAWebClickable.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebDropdown.react",
    "WAWebEmojiPanel.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WDSButton.react",
    "WDSIconIcMood.react",
    "WDSIconIcVisibility.react",
    "WDSIconIcVisibilityOff.react",
    "WDSMargins.stylex",
    "WDSRichTextField.react",
    "react",
    "react-compiler-runtime",
    "react-gui-use-focus",
    "useMergeRefs",
    "useWAWebIsKeyboardUser",
    "useWAWebTextFieldEmojiPicker",
    "useWAWebToggle"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useEffect, useRef, useState } = c;
    function Component(e) {
        const t = o("react-compiler-runtime").c(4);
        if (o("WAWebABProps").getABPropConfigValue("wds_web_rich_text_field") && f()) {
            let n;
            if (t[0] !== e) {
                n = <G1Component {...babelHelpers.extends({}, e)}/>;
                t[0] = e;
                t[1] = n;
            } else {
                n = t[1];
            }
            return n;
        }
        let r;
        if (t[2] !== e) {
            r = <V1Component {...babelHelpers.extends({}, e)}/>;
            t[2] = e;
            t[3] = r;
        } else {
            r = t[3];
        }
        return r;
    }
    function f() {
        let e;
        return ((e = globalThis.CSS) == null || e.supports == null ? undefined : e.supports("-webkit-text-security", "disc")) === true;
    }
    function G1Component(e) {
        const n = o("react-compiler-runtime").c(19);
        const { focusOnMount, onValueChange } = e;
        const l = focusOnMount === undefined ? false : focusOnMount;
        let c;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                emojiPickerAriaLabel: s._("Open emojis panel, password input")
            };
            n[0] = c;
        } else {
            c = n[0];
        }
        const m = r("useWAWebTextFieldEmojiPicker")(c);
        const { emojiPicker, nodes, openEmojiPicker, richTextFieldRef } = m;
        let y;
        let C;
        if (n[1] !== l || n[2] !== richTextFieldRef) {
            y = function() {
                if (l) {
                    richTextFieldRef.current?.focus();
                }
            };
            C = [
                l,
                richTextFieldRef
            ];
            n[1] = l;
            n[2] = richTextFieldRef;
            n[3] = y;
            n[4] = C;
        } else {
            y = n[3];
            C = n[4];
        }
        useEffect(y, C);
        let b;
        let v;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            b = {
                className: "x78zum5 x6s0dn4 x1qvou4u x1s70e7g"
            };
            v = {
                className: "x1iyjqo2 xeuugli x6ikm8r x10wlt62"
            };
            n[5] = b;
            n[6] = v;
        } else {
            b = n[5];
            v = n[6];
        }
        const S = e.testid ?? "password-input";
        let endIconAriaLabel;
        if (n[7] === Symbol.for("react.memo_cache_sentinel")) {
            endIconAriaLabel = s._("Open emojis panel, password input");
            n[7] = endIconAriaLabel;
        } else {
            endIconAriaLabel = n[7];
        }
        let L;
        if (n[8] !== nodes || n[9] !== onValueChange || n[10] !== openEmojiPicker || n[11] !== e.onSubmit || n[12] !== e.placeholder || n[13] !== richTextFieldRef || n[14] !== S) {
            const Component = r("WDSRichTextField.react");
            L = <div {...babelHelpers.extends({}, v, {
                children: <Component ref={richTextFieldRef} placeholder={e.placeholder} testid={S} type="password" onValueChange={onValueChange} onEnter={e.onSubmit} EndIcon={r("WDSIconIcMood.react")} endIconAriaLabel={endIconAriaLabel} onEndIconClick={openEmojiPicker} nodes={nodes} visibilityToggleButtonAriaLabel={visibilityToggleButtonAriaLabel}/>
            })}/>;
            n[8] = nodes;
            n[9] = onValueChange;
            n[10] = openEmojiPicker;
            n[11] = e.onSubmit;
            n[12] = e.placeholder;
            n[13] = richTextFieldRef;
            n[14] = S;
            n[15] = L;
        } else {
            L = n[15];
        }
        let E;
        if (n[16] !== emojiPicker || n[17] !== L) {
            E = <div {...babelHelpers.extends({}, b, {
                children: [
                    L,
                    emojiPicker
                ]
            })}/>;
            n[16] = emojiPicker;
            n[17] = L;
            n[18] = E;
        } else {
            E = n[18];
        }
        return E;
    }
    function visibilityToggleButtonAriaLabel(e) {
        if (e) {
            return s._("Hide");
        }
        return s._("Show");
    }
    const y = {
        emojiButton: {
            color: "x1v5yvga",
            alignSelf: "xamitd3",
            $$css: true
        },
        accentIconColor: {
            color: "x1v5yvga",
            $$css: true
        }
    };
    function C(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e.iconXstyle) {
            n = [
                e.iconXstyle,
                y.accentIconColor
            ];
            t[0] = e.iconXstyle;
            t[1] = n;
        } else {
            n = t[1];
        }
        let a;
        if (t[2] !== e || t[3] !== n) {
            a = u.jsx(r("WDSIconIcVisibility.react"), babelHelpers.extends({}, e, {
                iconXstyle: n
            }));
            t[2] = e;
            t[3] = n;
            t[4] = a;
        } else {
            a = t[4];
        }
        return a;
    }
    function b(e) {
        const t = o("react-compiler-runtime").c(5);
        let n;
        if (t[0] !== e.iconXstyle) {
            n = [
                e.iconXstyle,
                y.accentIconColor
            ];
            t[0] = e.iconXstyle;
            t[1] = n;
        } else {
            n = t[1];
        }
        let a;
        if (t[2] !== e || t[3] !== n) {
            a = u.jsx(r("WDSIconIcVisibilityOff.react"), babelHelpers.extends({}, e, {
                iconXstyle: n
            }));
            t[2] = e;
            t[3] = n;
            t[4] = a;
        } else {
            a = t[4];
        }
        return a;
    }
    function V1Component(e) {
        const t = o("react-compiler-runtime").c(46);
        const { enableShowPassword, focusOnMount, onSubmit, onValueChange, placeholder, testid } = e;
        const f = enableShowPassword === undefined ? false : enableShowPassword;
        const g = focusOnMount === undefined ? false : focusOnMount;
        const h = useState("");
        const y = h[0];
        const v = h[1];
        const R = r("useWAWebToggle")(false);
        const L = R[0];
        const E = R[1];
        const kRef = useRef(null);
        const I = useState(false);
        const T = I[0];
        const onFocusChange = I[1];
        let x;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            x = {
                onFocusChange
            };
            t[0] = x;
        } else {
            x = t[0];
        }
        const $ = o("react-gui-use-focus").useFocus(x);
        const P = r("useMergeRefs")(kRef, $);
        const N = r("useWAWebIsKeyboardUser")();
        const N_isKeyboardUser = N.isKeyboardUser;
        let w;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            w = function() {
                kRef.current?.focus();
            };
            t[1] = w;
        } else {
            w = t[1];
        }
        const A = w;
        let F;
        let O;
        if (t[2] !== g) {
            F = function() {
                if (g) {
                    kRef.current?.focus();
                }
            };
            O = [
                g
            ];
            t[2] = g;
            t[3] = F;
            t[4] = O;
        } else {
            F = t[3];
            O = t[4];
        }
        useEffect(F, O);
        const B = L ? C : b;
        let W;
        if (t[5] !== L) {
            W = L ? s._("Hide") : s._("Show");
            t[5] = L;
            t[6] = W;
        } else {
            W = t[6];
        }
        const q = W;
        const URef = useRef(null);
        const V = useState(null);
        const H = V[0];
        const G = V[1];
        let z;
        if (t[7] !== onValueChange) {
            z = function(t) {
                const value = t.currentTarget.value;
                v(value);
                onValueChange(value);
            };
            t[7] = onValueChange;
            t[8] = z;
        } else {
            z = t[8];
        }
        const j = z;
        let K;
        if (t[9] !== onSubmit) {
            K = function(t) {
                if (t.key === "Enter") {
                    if (onSubmit != null) {
                        onSubmit();
                    }
                }
            };
            t[9] = onSubmit;
            t[10] = K;
        } else {
            K = t[10];
        }
        const Q = K;
        let onEmoji;
        let Y;
        if (t[11] !== N_isKeyboardUser || t[12] !== onValueChange) {
            onEmoji = function(t) {
                const kRef_current = kRef.current;
                if (kRef_current) {
                    kRef_current.focus();
                    const o = kRef_current.selectionStart ?? 0;
                    const a = kRef_current.selectionEnd ?? 0;
                    const i = kRef_current.value;
                    const s = i.substring(0, o) + t + i.substring(a);
                    kRef_current.value = s;
                    kRef_current.setSelectionRange(a + t.length, a + t.length);
                    v(s);
                    onValueChange(s);
                }
                if (N_isKeyboardUser) {
                    Y();
                }
            };
            Y = function() {
                G(null);
                if (N_isKeyboardUser) {
                    A();
                }
            };
            t[11] = N_isKeyboardUser;
            t[12] = onValueChange;
            t[13] = onEmoji;
            t[14] = Y;
        } else {
            onEmoji = t[13];
            Y = t[14];
        }
        let J = null;
        if (H) {
            let Z;
            if (t[15] !== H) {
                Z = u.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: H
                });
                t[15] = H;
                t[16] = Z;
            } else {
                Z = t[16];
            }
            let ee;
            if (t[17] !== Y || t[18] !== Z) {
                const Component = o("WAWebUimUie.react").UIE;
                ee = <Component dismissOnWindowResize displayName="EmojiPicker" escapable popable ref={URef} requestDismiss={Y}>{Z}</Component>;
                t[17] = Y;
                t[18] = Z;
                t[19] = ee;
            } else {
                ee = t[19];
            }
            J = ee;
        }
        let te;
        if (t[20] !== onEmoji) {
            te = function(t) {
                t.preventDefault();
                t.stopPropagation();
                const Component = r("WAWebEmojiPanel.react");
                const e = <Component onEmoji={onEmoji} onFocusNext={A} onFocusPrev={A}/>;
                G({
                    menu: e,
                    dirY: o("WAWebDropdown.react").DirY.TOP,
                    type: o("WAWebDropdown.react").MenuType.EmojiPicker,
                    anchor: t.target
                });
                A();
            };
            t[20] = onEmoji;
            t[21] = te;
        } else {
            te = t[21];
        }
        const ne = te;
        let re;
        if (t[22] !== T) {
            re = ({
                0: {
                    className: "x1n2onr6 x78zum5 xk7ee7b xt7fyls xso031l x1q0q8m5 x16pkwpw x1j85h84"
                },
                1: {
                    className: "x1n2onr6 x78zum5 xk7ee7b xt7fyls xv7zg05 x1q0q8m5 x1rrvw3c x18d9i69"
                }
            })[!!T << 0];
            t[22] = T;
            t[23] = re;
        } else {
            re = t[23];
        }
        let oe;
        if (t[24] === Symbol.for("react.memo_cache_sentinel")) {
            oe = o("WAWebClassnames").classnamesConvertMeToStylexPlease(o("WAWebCopyPasteSelectable.react").SELECTABLE_CSS_CLASS, "x1jchvi3 x14ug900 x1iyjqo2 xsl91qr x1aq9cx1 xe0m388 xhe8bae xe73qa2 xsgwwv8 xuhg6hn xli3dgm x1isl193 x1e225iy x1bnlyaz x12ws5rt x1a2a7pz xk7ee7b x6ikm8r x10wlt62 x1yrsyyn x1icxu4v x10b6aqq x25sj25");
            t[24] = oe;
        } else {
            oe = t[24];
        }
        const placeholder_1 = String(placeholder);
        const ie = L ? "text" : "password";
        let le;
        if (t[25] !== j || t[26] !== Q || t[27] !== P || t[28] !== placeholder_1 || t[29] !== ie || t[30] !== testid || t[31] !== y) {
            le = <input className={oe} data-testid={testid} onChange={j} onKeyDown={Q} placeholder={placeholder_1} ref={P} type={ie} value={y}/>;
            t[25] = j;
            t[26] = Q;
            t[27] = P;
            t[28] = placeholder_1;
            t[29] = ie;
            t[30] = testid;
            t[31] = y;
            t[32] = le;
        } else {
            le = t[32];
        }
        let se;
        if (t[33] !== B || t[34] !== q || t[35] !== f || t[36] !== E) {
            const Component = r("WDSButton.react");
            se = f && <Component Icon={B} aria-label={q} xstyle={o("WDSMargins.stylex").wdsMargins.marginEnd8} onPress={E} variant="borderless"/>;
            t[33] = B;
            t[34] = q;
            t[35] = f;
            t[36] = E;
            t[37] = se;
        } else {
            se = t[37];
        }
        let ue;
        if (t[38] !== ne) {
            ue = <SComponent onClick={ne}/>;
            t[38] = ne;
            t[39] = ue;
        } else {
            ue = t[39];
        }
        let ce;
        if (t[40] !== re || t[41] !== le || t[42] !== se || t[43] !== ue || t[44] !== J) {
            ce = <div {...babelHelpers.extends({}, re, {
                children: [
                    le,
                    se,
                    ue,
                    J
                ]
            })}/>;
            t[40] = re;
            t[41] = le;
            t[42] = se;
            t[43] = ue;
            t[44] = J;
            t[45] = ce;
        } else {
            ce = t[45];
        }
        return ce;
    }
    function SComponent(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_onClick = e.onClick;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = s._("Open emojis panel, password input");
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            i = u.jsx(r("WDSIconIcMood.react"), {});
            t[1] = i;
        } else {
            i = t[1];
        }
        let l;
        if (t[2] !== e_onClick) {
            const Component = o("WAWebClickable.react").Clickable;
            l = <Component onClick={e_onClick} title={a} xstyle={y.emojiButton}>{i}</Component>;
            t[2] = e_onClick;
            t[3] = l;
        } else {
            l = t[3];
        }
        return l;
    }
    l.default = Component;
}, 226);