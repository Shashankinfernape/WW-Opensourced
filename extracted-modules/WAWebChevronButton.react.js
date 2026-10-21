__d("WAWebChevronButton.react", [
    "fbt",
    "$InternalEnum",
    "WAWebChevronCustomIcons",
    "WAWebFbtCommon",
    "WAWebRound.react",
    "WDSIconIcChevronRight.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = n("$InternalEnum").Mirrored([
        "Prev",
        "Next"
    ]);
    const d = n("$InternalEnum").Mirrored([
        "BotPluginCarousel",
        "BotReelsPluginCarousel",
        "SupportCitationsCarousel"
    ]);
    const m = {
        btn: {
            position: "x10l6tqk",
            top: "x8jeoy8",
            zIndex: "xupqr0c",
            $$css: true
        },
        overMedia: {
            backgroundColor: "x1kz0r3c",
            $$css: true
        },
        backgroundColorBtn: {
            backgroundColor: "x1sr6hwe",
            $$css: true
        },
        btnMediaPrev: {
            insetInlineStart: "xi5uv41",
            left: null,
            right: null,
            $$css: true
        },
        btnMediaNext: {
            insetInlineEnd: "xo2ifbc",
            left: null,
            right: null,
            $$css: true
        },
        disabledBtn: {
            opacity: "xbyyjgo",
            $$css: true
        }
    };
    function PComponent(e) {
        const t = o("react-compiler-runtime").c(19);
        const { disabled, onClick, onKeyDown, overMedia, testid, theme, type } = e;
        let p;
        if (t[0] !== type) {
            p = _(type);
            t[0] = type;
            t[1] = p;
        } else {
            p = t[1];
        }
        const f = p;
        const { Icon, label } = f;
        const y = type === c.Prev && m.btnMediaPrev;
        const C = type === c.Next && m.btnMediaNext;
        const b = disabled === true ? m.disabledBtn : m.backgroundColorBtn;
        const v = overMedia === true && m.overMedia;
        let S;
        if (t[2] !== y || t[3] !== C || t[4] !== b || t[5] !== v) {
            S = [
                m.btn,
                y,
                C,
                b,
                v
            ];
            t[2] = y;
            t[3] = C;
            t[4] = b;
            t[5] = v;
            t[6] = S;
        } else {
            S = t[6];
        }
        const R = disabled === true ? null : onClick;
        let L;
        if (t[7] !== Icon || t[8] !== label) {
            L = <Icon aria-label={label} directional height={30} width={30}/>;
            t[7] = Icon;
            t[8] = label;
            t[9] = L;
        } else {
            L = t[9];
        }
        let E;
        if (t[10] !== disabled || t[11] !== label || t[12] !== onKeyDown || t[13] !== S || t[14] !== R || t[15] !== L || t[16] !== testid || t[17] !== theme) {
            const Component = o("WAWebRound.react").Round;
            E = <Component xstyle={S} onClick={R} onKeyDown={onKeyDown} label={label} title={label} theme={theme} disabled={disabled} testid={testid}>{L}</Component>;
            t[10] = disabled;
            t[11] = label;
            t[12] = onKeyDown;
            t[13] = S;
            t[14] = R;
            t[15] = L;
            t[16] = testid;
            t[17] = theme;
            t[18] = E;
        } else {
            E = t[18];
        }
        return E;
    }
    function _(type) {
        switch(type){
            case c.Prev:
                return {
                    Icon: o("WAWebChevronCustomIcons").ChevronLeftCustomIcon,
                    label: s._("Previous")
                };
            case c.Next:
                return {
                    Icon: r("WDSIconIcChevronRight.react"),
                    label: r("WAWebFbtCommon")("Next")
                };
        }
    }
    l.ButtonType = c;
    l.ChevronButtonDisplayType = d;
    l.ChevronButton = PComponent;
}, 226);