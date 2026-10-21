__d("WAWebChatInfoActionButton.react", [
    "WAWebRound.react",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useCallback, useState } = c;
    const p = {
        button: {
            textAlign: "x2b8uid",
            $$css: true
        },
        label: {
            marginInlineEnd: "x14z9mp",
            marginBottom: "xat24cr",
            marginInlineStart: "x1lziwak",
            fontSize: "x1nxh6w3",
            marginTop: "x1gslohp",
            color: "x1v5yvga",
            $$css: true
        },
        disabled: {
            opacity: "xyd83as",
            $$css: true
        },
        tealColor: {
            color: "x1v5yvga",
            $$css: true
        }
    };
    function Component(t) {
        const n = o("react-compiler-runtime").c(24);
        const { Icon, ariaLabel, disabled, iconHeight, iconWidth, label, onClick, ref, testid, xstyle } = t;
        const y = useF();
        const { isHovered, onMouseEnter, onMouseLeave } = y;
        const S = disabled === true;
        let R;
        if (n[0] !== Icon || n[1] !== iconHeight || n[2] !== iconWidth) {
            R = <Icon iconXstyle={p.tealColor} directional height={iconHeight} width={iconWidth}/>;
            n[0] = Icon;
            n[1] = iconHeight;
            n[2] = iconWidth;
            n[3] = R;
        } else {
            R = n[3];
        }
        const L = R;
        let E;
        if (n[4] !== S || n[5] !== xstyle) {
            E = (e || (e = r("stylex"))).props(p.button, S && p.disabled, xstyle);
            n[4] = S;
            n[5] = xstyle;
            n[6] = E;
        } else {
            E = n[6];
        }
        const k = ariaLabel ?? label;
        const hideBackground = S || !isHovered;
        let T;
        if (n[7] !== disabled || n[8] !== L || n[9] !== hideBackground) {
            const Component = o("WAWebRound.react").Round;
            T = <Component disabled={disabled} hideBackground={hideBackground} inverted>{L}</Component>;
            n[7] = disabled;
            n[8] = L;
            n[9] = hideBackground;
            n[10] = T;
        } else {
            T = n[10];
        }
        let D;
        if (n[11] !== disabled || n[12] !== label || n[13] !== onClick || n[14] !== onMouseEnter || n[15] !== onMouseLeave || n[16] !== k || n[17] !== T || n[18] !== testid) {
            const Component = r("WAWebUnstyledButton.react");
            D = <Component aria-label={k} disabled={disabled} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} testid={testid} xstyle={p.label}>{T}{label}</Component>;
            n[11] = disabled;
            n[12] = label;
            n[13] = onClick;
            n[14] = onMouseEnter;
            n[15] = onMouseLeave;
            n[16] = k;
            n[17] = T;
            n[18] = testid;
            n[19] = D;
        } else {
            D = n[19];
        }
        let x;
        if (n[20] !== ref || n[21] !== E || n[22] !== D) {
            x = <div {...babelHelpers.extends({
                ref
            }, E, {
                children: D
            })}/>;
            n[20] = ref;
            n[21] = E;
            n[22] = D;
            n[23] = x;
        } else {
            x = n[23];
        }
        return x;
    }
    function useF() {
        const e = o("react-compiler-runtime").c(4);
        const t = useState(false);
        const isHovered = t[0];
        const r = t[1];
        let a;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = function() {
                r(true);
            };
            e[0] = a;
        } else {
            a = e[0];
        }
        const i = a;
        let l;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                r(false);
            };
            e[1] = l;
        } else {
            l = e[1];
        }
        const s = l;
        let u;
        if (e[2] !== isHovered) {
            u = {
                isHovered,
                onMouseEnter: i,
                onMouseLeave: s
            };
            e[2] = isHovered;
            e[3] = u;
        } else {
            u = e[3];
        }
        return u;
    }
    l.default = Component;
}, 98);