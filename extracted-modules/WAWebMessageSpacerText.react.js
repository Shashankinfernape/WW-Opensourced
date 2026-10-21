__d("WAWebMessageSpacerText.react", [
    "WAWebABProps",
    "WAWebCurrentUser",
    "WAWebL10N",
    "WAWebMsgGetters",
    "WAWebSpacerText.react",
    "WAWebStylesEnv",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        text: {
            position: "x1n2onr6",
            overflowWrap: "x1mzt3pk",
            whiteSpace: "x126k92a",
            $$css: true
        },
        textSafari: {
            wordWrap: "x1vvkbs",
            whiteSpace: "x126k92a",
            $$css: true
        },
        textRtl: {
            whiteSpace: "x1fj9vlw",
            $$css: true
        },
        placeholder: {
            fontStyle: "x1k4tb9n",
            color: "xhslqc4",
            $$css: true
        },
        messageSpacer: {
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            $$css: true
        },
        debugBackground: function(t) {
            return [
                {
                    backgroundColor: t != null ? "xl8spv7" : t,
                    $$css: true
                },
                {
                    "--x-backgroundColor": t ?? undefined
                }
            ];
        }
    };
    function d(t) {
        const n = o("react-compiler-runtime").c(14);
        const { children, msgKey, overflowVisible, reserveAiContentLabel, spacer, theme, xstyle } = t;
        let _;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = [
                o("WAWebMsgGetters").getBackgroundColor
            ];
            n[0] = _;
        } else {
            _ = n[0];
        }
        const f = o("useWAWebMsgValues").useMsgValues(msgKey, _);
        const g = f[0];
        const h = spacer ?? true;
        let y = null;
        if (o("WAWebCurrentUser").isEmployee() && o("WAWebABProps").getABPropConfigValue("wa_web_debug_color_code_retry_messages") && g != null && typeof g === "number") {
            y = `#${g.toString(16)}`;
        }
        let C;
        if (n[1] !== y || n[2] !== overflowVisible || n[3] !== theme || n[4] !== xstyle) {
            C = (e || (e = r("stylex"))).props(c.text, theme === "placeholder" && c.placeholder, o("WAWebStylesEnv").hasSafariFix && c.textSafari, r("WAWebL10N").isRTL() && c.textRtl, overflowVisible !== true && c.messageSpacer, xstyle, y != null && c.debugBackground(y));
            n[1] = y;
            n[2] = overflowVisible;
            n[3] = theme;
            n[4] = xstyle;
            n[5] = C;
        } else {
            C = n[5];
        }
        let b;
        if (n[6] !== h || n[7] !== msgKey || n[8] !== reserveAiContentLabel) {
            b = h && u.jsx(r("WAWebSpacerText.react"), {
                msgKey,
                reserveAiContentLabel
            });
            n[6] = h;
            n[7] = msgKey;
            n[8] = reserveAiContentLabel;
            n[9] = b;
        } else {
            b = n[9];
        }
        let v;
        if (n[10] !== children || n[11] !== C || n[12] !== b) {
            v = <div {...babelHelpers.extends({}, C, {
                children: [
                    children,
                    b
                ]
            })}/>;
            n[10] = children;
            n[11] = C;
            n[12] = b;
            n[13] = v;
        } else {
            v = n[13];
        }
        return v;
    }
    l.default = d;
}, 98);