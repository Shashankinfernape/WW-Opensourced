__d("WAWebMetaAIIcon.react", [
    "WAWebBotUtils",
    "WAWebImg.react",
    "WAWebMetaAiRingAssetResolver",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        borderStartStartRadius: "x1c9tyrk",
        borderStartEndRadius: "xeusxvb",
        borderEndEndRadius: "x1pahc9y",
        borderEndStartRadius: "x1ertn4p",
        backgroundColor: "x1ew7x2d",
        display: "x78zum5",
        alignItems: "x6s0dn4",
        justifyContent: "xl56j7k",
        $$css: true
    };
    const d = {
        container: function(t, n) {
            return [
                c,
                {
                    width: t != null ? "x5lhr3w" : t,
                    height: n != null ? "x16ye13r" : n,
                    $$css: true
                },
                {
                    "--x-width": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(t),
                    "--x-height": ((e)=>{
                        if (typeof e === "number") {
                            return `${e}px`;
                        }
                        return e ?? undefined;
                    })(n)
                }
            ];
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(11);
        const { height, wid, width } = t;
        const s = height === undefined ? 24 : height;
        const c = width === undefined ? 24 : width;
        let m;
        if (n[0] !== wid) {
            m = wid != null && (o("WAWebBotUtils").isMetaAiBot(wid) || o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(wid));
            n[0] = wid;
            n[1] = m;
        } else {
            m = n[1];
        }
        const p = m;
        let _;
        if (n[2] === Symbol.for("react.memo_cache_sentinel")) {
            _ = o("WAWebMetaAiRingAssetResolver").getBotAssistantIconURL();
            n[2] = _;
        } else {
            _ = n[2];
        }
        let f;
        if (n[3] !== s || n[4] !== c) {
            const Component = r("WAWebImg.react");
            f = <Component src={_} style={{
                width: c,
                height: s
            }} draggable={false}/>;
            n[3] = s;
            n[4] = c;
            n[5] = f;
        } else {
            f = n[5];
        }
        const g = f;
        let h;
        if (n[6] !== s || n[7] !== g || n[8] !== p || n[9] !== c) {
            h = p ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.container(c, s)), {
                children: g
            })}/> : g;
            n[6] = s;
            n[7] = g;
            n[8] = p;
            n[9] = c;
            n[10] = h;
        } else {
            h = n[10];
        }
        return h;
    }
    l.default = m;
}, 98);