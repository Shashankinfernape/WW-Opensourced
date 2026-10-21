__d("WAWebFailIcon.react", [
    "WAWebAppContext.react",
    "WAWebDisplayType",
    "WAWebErrorTooltip.react",
    "WAWebRound.react",
    "WDSIconIcError.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const s_useState = s.useState;
    const d = {
        container: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            height: "x5yr21d",
            pointerEvents: "x47corl",
            position: "x10l6tqk",
            insetInlineEnd: "x4e0jua",
            left: null,
            right: null,
            top: "x13vifvy",
            zIndex: "xfo81ep",
            "@media screen and (max-width: 900px)_insetInlineEnd": "xjn1kfi",
            "@media screen and (max-width: 900px)_left": null,
            "@media screen and (max-width: 900px)_right": null,
            "@media screen and (min-width: 901px) and (max-width: 1024px)_marginInlineEnd": "x1pmzizn",
            $$css: true
        },
        containerWithRightDrawer: {
            "@media screen and (min-width: 1025px) and (max-width: 1300px)_insetInlineEnd": "x1a5125j",
            "@media screen and (min-width: 1025px) and (max-width: 1300px)_left": null,
            "@media screen and (min-width: 1025px) and (max-width: 1300px)_right": null,
            $$css: true
        },
        groupChatProfilePictureDisplayed: {
            "@media screen and (max-width: 900px)_insetInlineEnd": "x1p46kum",
            "@media screen and (max-width: 900px)_left": null,
            "@media screen and (max-width: 900px)_right": null,
            $$css: true
        },
        notFromMe: {
            insetInlineStart: "x65okc",
            left: null,
            right: null,
            $$css: true
        },
        compact: {
            insetInlineEnd: "xtez0ps",
            left: null,
            right: null,
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(22);
        const { ariaLabel, displayType, fromMe, isGroupChatProfilePictureDisplayed, onClick, tooltip } = t;
        const _ = s_useState(false);
        const f = _[0];
        const g = _[1];
        const h = o("WAWebAppContext.react").useAppContext();
        const h_rightDrawerOpen = h.rightDrawerOpen;
        let C;
        if (n[0] !== ariaLabel || n[1] !== onClick) {
            const Component = o("WAWebRound.react").Round;
            C = onClick ? <Component key="error-button" onClick={onClick} theme={o("WAWebRound.react").RoundTheme.Error} label={ariaLabel}>{u.jsx(r("WDSIconIcError.react"), {
                colorName: "persistentAlwaysWhite",
                height: 16,
                width: 16
            })}</Component> : <div key="error-icon" className="x6s0dn4 xk0ssx3 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1zfx7y x1gj3efs x151wx5t xea0m3l x1c9tyrk xeusxvb x1pahc9y x1ertn4p x17t9dm2 x78zum5 xxk0z11 xl56j7k xnei2rj x67bb7w xvy4d1p">{u.jsx(r("WDSIconIcError.react"), {
                colorName: "persistentAlwaysWhite",
                height: 16,
                width: 16
            })}</div>;
            n[0] = ariaLabel;
            n[1] = onClick;
            n[2] = C;
        } else {
            C = n[2];
        }
        const b = C;
        let v;
        if (n[3] !== displayType || n[4] !== b || n[5] !== fromMe || n[6] !== f || n[7] !== tooltip) {
            v = [
                b
            ];
            if (f && displayType !== o("WAWebDisplayType").DISPLAY_TYPE.COMMENT) {
                let S;
                if (n[9] !== fromMe || n[10] !== tooltip) {
                    const Component = r("WAWebErrorTooltip.react");
                    S = <Component key="error-tooltip" fromMe={fromMe}>{tooltip}</Component>;
                    n[9] = fromMe;
                    n[10] = tooltip;
                    n[11] = S;
                } else {
                    S = n[11];
                }
                v.unshift(S);
            }
            if (fromMe === false) {
                v = v.reverse();
            }
            n[3] = displayType;
            n[4] = b;
            n[5] = fromMe;
            n[6] = f;
            n[7] = tooltip;
            n[8] = v;
        } else {
            v = n[8];
        }
        let L;
        if (n[12] !== displayType || n[13] !== fromMe || n[14] !== isGroupChatProfilePictureDisplayed || n[15] !== h_rightDrawerOpen) {
            L = (e || (e = r("stylex"))).props([
                displayType !== o("WAWebDisplayType").DISPLAY_TYPE.COMMENT && d.container,
                displayType === o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO && d.compact,
                fromMe === false && d.notFromMe,
                isGroupChatProfilePictureDisplayed === true && d.groupChatProfilePictureDisplayed,
                h_rightDrawerOpen && d.containerWithRightDrawer
            ]);
            n[12] = displayType;
            n[13] = fromMe;
            n[14] = isGroupChatProfilePictureDisplayed;
            n[15] = h_rightDrawerOpen;
            n[16] = L;
        } else {
            L = n[16];
        }
        let E;
        let k;
        if (n[17] === Symbol.for("react.memo_cache_sentinel")) {
            E = function() {
                return g(true);
            };
            k = function() {
                return g(false);
            };
            n[17] = E;
            n[18] = k;
        } else {
            E = n[17];
            k = n[18];
        }
        let I;
        if (n[19] !== v || n[20] !== L) {
            I = <div {...babelHelpers.extends({}, L, {
                onMouseEnter: E,
                onMouseLeave: k,
                "data-testid": "fail-container",
                children: v
            })}/>;
            n[19] = v;
            n[20] = L;
            n[21] = I;
        } else {
            I = n[21];
        }
        return I;
    }
    l.default = m;
}, 98);