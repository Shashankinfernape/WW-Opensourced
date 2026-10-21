__d("WAWebSystemMessageWithSingleCTA.react", [
    "fbt",
    "WAWebKeyboardIsKeyActivation",
    "WAWebMsgType",
    "WAWebWamEnumSystemMessageCategoryType",
    "WDSFontTokenStyles",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    const m = {
        container: {
            color: "xhslqc4",
            $$css: true
        },
        ctaTextHovered: {
            textDecoration: "x1bvjpef",
            cursor: "x1ypdohk",
            $$css: true
        }
    };
    function p(t) {
        const n = o("react-compiler-runtime").c(33);
        const { bodyText, className, ctaText, ctaXstyle, icon, isBodyTextClickable, onClick, onclickRef, role, testid, xstyle } = t;
        const b = isBodyTextClickable === undefined ? false : isBodyTextClickable;
        const v = u_useState(false);
        const S = v[0];
        const R = v[1];
        const role_1 = role ?? (onClick ? "button" : undefined);
        let E;
        if (n[0] !== onClick) {
            E = function(t) {
                if (r("WAWebKeyboardIsKeyActivation")(t)) {
                    t.stopPropagation();
                    t.preventDefault();
                    if (onClick != null) {
                        onClick(t);
                    }
                }
            };
            n[0] = onClick;
            n[1] = E;
        } else {
            E = n[1];
        }
        const k = E;
        let I;
        if (n[2] !== ctaXstyle || n[3] !== S) {
            I = (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body3Emphasized, S && m.ctaTextHovered, ctaXstyle);
            n[2] = ctaXstyle;
            n[3] = S;
            n[4] = I;
        } else {
            I = n[4];
        }
        let T;
        if (n[5] !== k || n[6] !== b || n[7] !== onClick || n[8] !== role_1) {
            T = b === true ? babelHelpers.extends({
                role: role_1
            }, role_1 === "link" ? {
                tabIndex: 0
            } : {}, {
                onClick,
                onKeyDown: k,
                onMouseEnter: function() {
                    return R(true);
                },
                onMouseLeave: function() {
                    return R(false);
                }
            }) : {};
            n[5] = k;
            n[6] = b;
            n[7] = onClick;
            n[8] = role_1;
            n[9] = T;
        } else {
            T = n[9];
        }
        let D;
        if (n[10] !== ctaText || n[11] !== I || n[12] !== T) {
            D = <span {...babelHelpers.extends({}, I, T, {
                children: ctaText
            })}/>;
            n[10] = ctaText;
            n[11] = I;
            n[12] = T;
            n[13] = D;
        } else {
            D = n[13];
        }
        const x = D;
        let $;
        if (n[14] !== xstyle) {
            $ = (e || (e = r("stylex"))).props(m.container, o("WDSFontTokenStyles").WDSFontTokenStyles.Body3, xstyle);
            n[14] = xstyle;
            n[15] = $;
        } else {
            $ = n[15];
        }
        let P;
        if (n[16] !== bodyText || n[17] !== icon || n[18] !== x) {
            P = s._("{system-message-icon}{system-message-body}. {system-message-cta}", [
                s._param("system-message-icon", icon),
                s._param("system-message-body", bodyText),
                s._param("system-message-cta", x)
            ]);
            n[16] = bodyText;
            n[17] = icon;
            n[18] = x;
            n[19] = P;
        } else {
            P = n[19];
        }
        let N;
        if (n[20] !== $ || n[21] !== P || n[22] !== testid) {
            N = <span {...babelHelpers.extends({
                "data-testid": testid
            }, $, {
                children: P
            })}/>;
            n[20] = $;
            n[21] = P;
            n[22] = testid;
            n[23] = N;
        } else {
            N = n[23];
        }
        const M = N;
        let w;
        if (n[24] !== b || n[25] !== onClick || n[26] !== role_1) {
            w = b === true ? babelHelpers.extends({}, role_1 === "link" ? {
                tabIndex: 0
            } : {}) : babelHelpers.extends({
                role: role_1
            }, role_1 === "link" ? {
                tabIndex: 0
            } : {}, {
                onClick,
                onMouseEnter: function() {
                    return R(true);
                },
                onMouseLeave: function() {
                    return R(false);
                }
            });
            n[24] = b;
            n[25] = onClick;
            n[26] = role_1;
            n[27] = w;
        } else {
            w = n[27];
        }
        const A = w;
        const F = className ?? undefined;
        let O;
        if (n[28] !== A || n[29] !== onclickRef || n[30] !== M || n[31] !== F) {
            O = <div {...babelHelpers.extends({
                ref: onclickRef,
                className: F
            }, A, {
                children: M
            })}/>;
            n[28] = A;
            n[29] = onclickRef;
            n[30] = M;
            n[31] = F;
            n[32] = O;
        } else {
            O = n[32];
        }
        return O;
    }
    function _(e) {
        switch(e){
            case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
                return o("WAWebWamEnumSystemMessageCategoryType").SYSTEM_MESSAGE_CATEGORY_TYPE.PRIVACY;
            case o("WAWebMsgType").MSG_TYPE.GP2:
                return o("WAWebWamEnumSystemMessageCategoryType").SYSTEM_MESSAGE_CATEGORY_TYPE.GROUPS;
        }
    }
    l.SystemMessageWithSingleCTA = p;
    l.getSystemMessageCategoryType = _;
}, 226);