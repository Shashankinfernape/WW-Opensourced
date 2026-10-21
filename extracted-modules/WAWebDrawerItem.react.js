__d("WAWebDrawerItem.react", [
    "fbt",
    "WAWebCopyPasteSelectable.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebL10N",
    "react",
    "react-compiler-runtime",
    "useWAWebIsKeyboardUser"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(44);
        const { children, dataTab, disabled, disableKeydownHandling, icon, isLastItem, onClick, onDisabledClick, tabIndex, testid, theme, title } = e;
        const y = tabIndex === undefined ? 0 : tabIndex;
        const C = theme === undefined ? "default" : theme;
        let b;
        if (t[0] !== icon || t[1] !== isLastItem) {
            b = ({
                0: "xso031l x1q0q8m5 x120ee7l x1g2khh7 xdpxx8g",
                4: "xso031l x1q0q8m5 x120ee7l x1g2khh7 x1hr2gdg",
                2: "xso031l x1q0q8m5 x120ee7l x1g2khh7 xdpxx8g x6s0dn4 x78zum5",
                6: "xso031l x1q0q8m5 x120ee7l x1g2khh7 x1hr2gdg x6s0dn4 x78zum5",
                1: "xso031l x120ee7l x1g2khh7 xdpxx8g x1sy0etr",
                5: "xso031l x120ee7l x1g2khh7 x1hr2gdg x1sy0etr",
                3: "xso031l x120ee7l x1g2khh7 xdpxx8g x6s0dn4 x78zum5 x1sy0etr",
                7: "xso031l x120ee7l x1g2khh7 x1hr2gdg x6s0dn4 x78zum5 x1sy0etr"
            })[!!r("WAWebL10N").isRTL() << 2 | (icon != null) << 1 | (isLastItem === true) << 0];
            t[0] = icon;
            t[1] = isLastItem;
            t[2] = b;
        } else {
            b = t[2];
        }
        const v = b;
        let S;
        if (t[3] !== icon) {
            S = ({
                0: "",
                1: "x98rzlu"
            })[(icon != null) << 0];
            t[3] = icon;
            t[4] = S;
        } else {
            S = t[4];
        }
        const R = S;
        let L;
        if (t[5] !== icon) {
            L = ({
                0: "",
                1: "xhslqc4 x1okw0bk"
            })[(icon != null) << 0];
            t[5] = icon;
            t[6] = L;
        } else {
            L = t[6];
        }
        const E = L;
        const k = r("useWAWebIsKeyboardUser")();
        const k_isKeyboardUser = k.isKeyboardUser;
        const T = disabled === true ? onDisabledClick : onClick;
        const D = T != null;
        let x;
        if (t[7] !== disabled) {
            x = disabled === true ? {
                "aria-label": s._("Disabled drawer item")
            } : {};
            t[7] = disabled;
            t[8] = x;
        } else {
            x = t[8];
        }
        const $ = x;
        const P = D ? y : null;
        let N;
        if (t[9] !== disabled || t[10] !== k_isKeyboardUser) {
            N = ({
                0: {
                    className: "x1fc57z9 xisnujt xyinxu5"
                },
                2: {
                    className: "x1fc57z9 xisnujt xyinxu5 x1jsj9aw"
                },
                1: {
                    className: "x1fc57z9 xisnujt xyinxu5 xbyyjgo"
                },
                3: {
                    className: "x1fc57z9 xisnujt xyinxu5 x1jsj9aw xbyyjgo"
                }
            })[!!k_isKeyboardUser << 1 | (disabled === true) << 0];
            t[9] = disabled;
            t[10] = k_isKeyboardUser;
            t[11] = N;
        } else {
            N = t[11];
        }
        const M = D ? "button" : "";
        let w;
        if (t[12] !== T || t[13] !== disableKeydownHandling) {
            w = function(t) {
                if (!(disableKeydownHandling === true || !r("WAWebKeyboardIsKeyActivation")(t) || !T)) {
                    T();
                }
            };
            t[12] = T;
            t[13] = disableKeydownHandling;
            t[14] = w;
        } else {
            w = t[14];
        }
        let A;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            A = "x14ug900 x6prxxf";
            t[15] = A;
        } else {
            A = t[15];
        }
        let F;
        if (t[16] !== title) {
            const Component = o("WAWebCopyPasteSelectable.react").SelectableDiv;
            F = <Component className={A} selectable>{title}</Component>;
            t[16] = title;
            t[17] = F;
        } else {
            F = t[17];
        }
        let O;
        if (t[18] !== C) {
            O = ({
                0: {
                    className: "x1v5yvga x1f6kntn xd4r4e8"
                },
                1: {
                    className: "x1f6kntn xd4r4e8 x1164gpu"
                }
            })[(C === "privacy") << 0];
            t[18] = C;
            t[19] = O;
        } else {
            O = t[19];
        }
        let B;
        if (t[20] !== children || t[21] !== O) {
            B = <div {...babelHelpers.extends({}, O, {
                children
            })}/>;
            t[20] = children;
            t[21] = O;
            t[22] = B;
        } else {
            B = t[22];
        }
        let W;
        if (t[23] !== F || t[24] !== B || t[25] !== R) {
            W = <div className={R} dir="auto">{F}{B}</div>;
            t[23] = F;
            t[24] = B;
            t[25] = R;
            t[26] = W;
        } else {
            W = t[26];
        }
        let q;
        if (t[27] !== icon || t[28] !== E) {
            q = <div className={E}>{icon}</div>;
            t[27] = icon;
            t[28] = E;
            t[29] = q;
        } else {
            q = t[29];
        }
        let U;
        if (t[30] !== v || t[31] !== W || t[32] !== q) {
            U = <div className={v}>{W}{q}</div>;
            t[30] = v;
            t[31] = W;
            t[32] = q;
            t[33] = U;
        } else {
            U = t[33];
        }
        let V;
        if (t[34] !== T || t[35] !== dataTab || t[36] !== $ || t[37] !== w || t[38] !== U || t[39] !== P || t[40] !== N || t[41] !== M || t[42] !== testid) {
            V = <div {...babelHelpers.extends({
                tabIndex: P,
                "data-tab": dataTab
            }, N, {
                onClick: T,
                role: M,
                onKeyDown: w
            }, $, {
                "data-testid": testid,
                children: U
            })}/>;
            t[34] = T;
            t[35] = dataTab;
            t[36] = $;
            t[37] = w;
            t[38] = U;
            t[39] = P;
            t[40] = N;
            t[41] = M;
            t[42] = testid;
            t[43] = V;
        } else {
            V = t[43];
        }
        return V;
    }
    l.default = c;
}, 226);