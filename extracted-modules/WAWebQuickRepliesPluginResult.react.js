__d("WAWebQuickRepliesPluginResult.react", [
    "WAWebQuickReplyGetters",
    "WDSPaddings.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebQuickReplyValues"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        paddingBlock10: {
            paddingTop: "x889kno",
            paddingBottom: "x1a8lsjc",
            $$css: true
        }
    };
    const d = {
        quickReplyResult: {
            display: "x78zum5",
            alignItems: "x6s0dn4",
            fontSize: "x1nxh6w3",
            borderStartStartRadius: "xyi3aci",
            borderStartEndRadius: "xwf5gio",
            borderEndEndRadius: "x1p453bz",
            borderEndStartRadius: "x1suzm8a",
            textAlign: "x1yc453h",
            $$css: true
        },
        quickReplyResultSelected: {
            color: "x14ug900",
            backgroundColor: "x4wrhlh",
            $$css: true
        }
    };
    function m(t) {
        const n = o("react-compiler-runtime").c(24);
        let a;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = [
                o("WAWebQuickReplyGetters").getShortcut,
                o("WAWebQuickReplyGetters").getMessage
            ];
            n[0] = a;
        } else {
            a = n[0];
        }
        const i = o("useWAWebQuickReplyValues").useQuickReplyValues(t.quickReply.id, a);
        const l = i[0];
        const s = i[1];
        const { onMouseUp, query, selected } = t;
        let f;
        if (n[1] !== query.length || n[2] !== l) {
            f = l.slice(query.length);
            n[1] = query.length;
            n[2] = l;
            n[3] = f;
        } else {
            f = n[3];
        }
        const g = f;
        let h;
        if (n[4] !== selected) {
            const y = [
                d.quickReplyResult,
                c.paddingBlock10,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor8
            ];
            if (selected === true) {
                y.push(d.quickReplyResultSelected);
            }
            h = (e || (e = r("stylex"))).props(y);
            n[4] = selected;
            n[5] = h;
        } else {
            h = n[5];
        }
        let C;
        let b;
        if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
            C = {
                className: "x78zum5 xeuugli xdt5ytf xh8yej3"
            };
            b = {
                className: "x78zum5 x6s0dn4"
            };
            n[6] = C;
            n[7] = b;
        } else {
            C = n[6];
            b = n[7];
        }
        let v;
        if (n[8] !== query) {
            const Component = r("WDSText.react");
            v = <Component type="Body1" colorName="contentDefault">{query}</Component>;
            n[8] = query;
            n[9] = v;
        } else {
            v = n[9];
        }
        let S;
        if (n[10] !== g) {
            const Component = r("WDSText.react");
            S = <Component type="Body1" colorName="contentDefault">{g}</Component>;
            n[10] = g;
            n[11] = S;
        } else {
            S = n[11];
        }
        let R;
        if (n[12] !== v || n[13] !== S) {
            R = <div {...babelHelpers.extends({}, b, {
                children: [
                    v,
                    S
                ]
            })}/>;
            n[12] = v;
            n[13] = S;
            n[14] = R;
        } else {
            R = n[14];
        }
        let L;
        if (n[15] !== s) {
            const Component = r("WDSText.react");
            L = <div data-testid="quick-reply-message"><Component type="Body2" colorName="contentDeemphasized">{s}</Component></div>;
            n[15] = s;
            n[16] = L;
        } else {
            L = n[16];
        }
        let E;
        if (n[17] !== R || n[18] !== L) {
            E = <div {...babelHelpers.extends({}, C, {
                children: [
                    R,
                    L
                ]
            })}/>;
            n[17] = R;
            n[18] = L;
            n[19] = E;
        } else {
            E = n[19];
        }
        let k;
        if (n[20] !== onMouseUp || n[21] !== h || n[22] !== E) {
            k = <div {...babelHelpers.extends({}, h, {
                onMouseUp,
                "data-testid": "quick-reply-list-item",
                children: E
            })}/>;
            n[20] = onMouseUp;
            n[21] = h;
            n[22] = E;
            n[23] = k;
        } else {
            k = n[23];
        }
        return k;
    }
    l.default = m;
}, 98);