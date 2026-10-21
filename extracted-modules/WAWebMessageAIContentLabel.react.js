__d("WAWebMessageAIContentLabel.react", [
    "fbt",
    "WAWebFlex.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebUnstyledButton.react",
    "WDSIconWdsIcAiContent.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { useCallback, useSyncExternalStore } = c;
    const p = {
        iconSecondary: {
            color: "xhslqc4",
            $$css: true
        },
        iconPrimary: {
            color: "x14ug900",
            $$css: true
        },
        iconLight: {
            color: "x17t9dm2",
            $$css: true
        }
    };
    const _ = {
        light: p.iconLight,
        primary: p.iconPrimary,
        secondary: p.iconSecondary
    };
    const f = {
        light: "persistentAlwaysWhite",
        primary: "contentDefault",
        secondary: "contentDeemphasized"
    };
    const g = [];
    function h(e, t) {
        const n = o("react-compiler-runtime").c(6);
        let r;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let a;
            r = [
                (a = o("WAWebMsgGetters")).getIsAiContent,
                a.getIsNewsletterMsg,
                a.getType,
                a.getIsAiSticker
            ];
            n[0] = r;
        } else {
            r = n[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e, r);
        const l = i[0];
        const s = i[1];
        const u = i[2];
        const c = i[3];
        const d = useY(u, t);
        let m;
        if (n[1] !== l || n[2] !== d || n[3] !== c || n[4] !== s) {
            m = s && (l || c || d) && o("WAWebNewsletterGatingUtils").isChannelSGIUiLabelEnabled();
            n[1] = l;
            n[2] = d;
            n[3] = c;
            n[4] = s;
            n[5] = m;
        } else {
            m = n[5];
        }
        return m;
    }
    function useY(e, t) {
        const n = o("react-compiler-runtime").c(4);
        const r = e === o("WAWebMsgType").MSG_TYPE.ALBUM || e === o("WAWebMsgType").MSG_TYPE.POLL_CREATION;
        const a = r && t != null ? t : g;
        let i;
        if (n[0] !== a) {
            i = function(t) {
                a.forEach((e)=>e.on("change:aiProvenance", t));
                return function() {
                    return a.forEach((e)=>e.off("change:aiProvenance", t));
                };
            };
            n[0] = a;
            n[1] = i;
        } else {
            i = n[1];
        }
        const l = i;
        let s;
        if (n[2] !== a) {
            s = function() {
                return a.some(C);
            };
            n[2] = a;
            n[3] = s;
        } else {
            s = n[3];
        }
        return useSyncExternalStore(l, s);
    }
    function C(e) {
        return o("WAWebMsgGetters").getIsAiContent(e);
    }
    function BComponent(e) {
        const t = o("react-compiler-runtime").c(6);
        const { associatedMessages, color, msgKey, onPress } = e;
        const color_1 = color === undefined ? "secondary" : color;
        const d = h(msgKey, associatedMessages);
        if (!d) {
            return null;
        }
        let m;
        if (t[0] !== color_1) {
            m = <V2Component color={color_1}/>;
            t[0] = color_1;
            t[1] = m;
        } else {
            m = t[1];
        }
        const p = m;
        if (onPress == null) {
            return p;
        }
        let _;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("AI content");
            t[2] = _;
        } else {
            _ = t[2];
        }
        let f;
        if (t[3] !== p || t[4] !== onPress) {
            const Component = r("WAWebUnstyledButton.react");
            f = <Component onClick={onPress} aria-label={_}>{p}</Component>;
            t[3] = p;
            t[4] = onPress;
            t[5] = f;
        } else {
            f = t[5];
        }
        return f;
    }
    function V2Component(e) {
        const t = o("react-compiler-runtime").c(9);
        const { color, testid } = e;
        const i = color === undefined ? "secondary" : color;
        const l = testid === undefined ? "ai-content-label" : testid;
        const c = _[i];
        let d;
        if (t[0] !== c) {
            d = u.jsx(r("WDSIconWdsIcAiContent.react"), {
                width: 12,
                height: 12,
                "aria-hidden": true,
                xstyle: c
            });
            t[0] = c;
            t[1] = d;
        } else {
            d = t[1];
        }
        const m = f[i];
        let p;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            p = s._("AI content");
            t[2] = p;
        } else {
            p = t[2];
        }
        let g;
        if (t[3] !== m) {
            const Component = r("WDSText.react");
            g = <Component type="Body3" colorName={m}>{p}</Component>;
            t[3] = m;
            t[4] = g;
        } else {
            g = t[4];
        }
        let h;
        if (t[5] !== d || t[6] !== g || t[7] !== l) {
            const Component = o("WAWebFlex.react").FlexRow;
            h = <Component inline align="center" columnGap={4} testid={l}>{d}{g}</Component>;
            t[5] = d;
            t[6] = g;
            t[7] = l;
            t[8] = h;
        } else {
            h = t[8];
        }
        return h;
    }
    l.useShouldShowAiContentLabel = h;
    l.WAWebMessageAIContentLabel = BComponent;
    l.WAWebAiContentLabelChip = V2Component;
}, 226);