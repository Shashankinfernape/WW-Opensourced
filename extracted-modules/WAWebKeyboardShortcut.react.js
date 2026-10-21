__d("WAWebKeyboardShortcut.react", [
    "WAWebActions",
    "WAWebFlex.react",
    "WAWebKeyboardShortcuts",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "children"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = "Shift+";
    const d = {
        key: {
            backgroundColor: "xmhyiyy",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "x1cienrf",
            borderInlineEndColor: "x1eproq3",
            borderBottomColor: "x1ntcio7",
            borderInlineStartColor: "x1dd54ck",
            borderStartStartRadius: "xrxyp3c",
            borderStartEndRadius: "xv0oops",
            borderEndEndRadius: "x1isl5vh",
            borderEndStartRadius: "xn8zj9a",
            boxShadow: "xx8lszd",
            color: "x14ug900",
            fontSize: "x1pg5gke",
            $$css: true
        }
    };
    function M13(e) {
        const t = o("react-compiler-runtime").c(3);
        const e_value = e.value;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                4,
                8
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] !== e_value) {
            const Component = o("WAWebFlex.react").FlexItem;
            a = <Component inline xstyle={d.key} padding={r}>{e_value}</Component>;
            t[1] = e_value;
            t[2] = a;
        } else {
            a = t[2];
        }
        return a;
    }
    function P7(t) {
        const n = o("react-compiler-runtime").c(6);
        let r;
        let a;
        if (n[0] !== t) {
            r = t.children;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = r;
            n[2] = a;
        } else {
            r = n[1];
            a = n[2];
        }
        let i;
        if (n[3] !== r || n[4] !== a) {
            i = u.jsx(o("WAWebFlex.react").FlexRow, babelHelpers.extends({
                inline: true,
                align: "center",
                gap: 4
            }, a, {
                children: r
            }));
            n[3] = r;
            n[4] = a;
            n[5] = i;
        } else {
            i = n[5];
        }
        return i;
    }
    function _(e) {
        const t = o("react-compiler-runtime").c(13);
        const { action, addModifiers } = e;
        const a = addModifiers === undefined ? true : addModifiers;
        if (action === o("WAWebActions").Action.OPEN_NTH_CHAT) {
            let i;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                i = <P7><M13 value="Ctrl"/><M13 value="1..9"/></P7>;
                t[0] = i;
            } else {
                i = t[0];
            }
            return i;
        }
        let l;
        let s;
        if (t[1] !== action) {
            s = Symbol.for("react.early_return_sentinel");
            e: {
                const d = o("WAWebKeyboardShortcuts").getShortcutKey(action);
                if (!d) {
                    s = null;
                    break e;
                }
                const _ = g(d, true);
                const h = _.indexOf(c);
                if (h === -1) {
                    l = <M13 value={_}/>;
                } else {
                    let y;
                    if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                        y = <M13 value="Shift"/>;
                        t[4] = y;
                    } else {
                        y = t[4];
                    }
                    const C = <M13 value={_.substr(c.length)}/>;
                    let b;
                    if (t[5] !== C) {
                        b = <>{y}{C}</>;
                        t[5] = C;
                        t[6] = b;
                    } else {
                        b = t[6];
                    }
                    l = b;
                }
            }
            t[1] = action;
            t[2] = l;
            t[3] = s;
        } else {
            l = t[2];
            s = t[3];
        }
        if (s !== Symbol.for("react.early_return_sentinel")) {
            return s;
        }
        let v;
        if (t[7] !== action || t[8] !== a) {
            v = a ? f(action) : null;
            t[7] = action;
            t[8] = a;
            t[9] = v;
        } else {
            v = t[9];
        }
        const S = v;
        let R;
        if (t[10] !== S || t[11] !== l) {
            R = <P7>{S}{l}</P7>;
            t[10] = S;
            t[11] = l;
            t[12] = R;
        } else {
            R = t[12];
        }
        return R;
    }
    function f(action) {
        const t = o("WAWebKeyboardShortcuts").getShortcutDisplayModifiers(action);
        if (t) {
            return t.map((e)=><M13 key={e} value={e}/>);
        }
        return [];
    }
    function g(e, t = false) {
        if (e.length !== 1 && e !== "DELETE") {
            return e;
        }
        switch(e){
            case ">":
                return `${c}.`;
            case "<":
                return `${c},`;
            case "7":
                return `${c}7`;
            case "8":
                if (t) {
                    return "8";
                }
                return `${c}8`;
            case "}":
                return `${c}]`;
            case "{":
                return `${c}[`;
            case "DELETE":
                return `${c}Delete`;
        }
        if (e.toLowerCase() !== e) {
            return `${c}${e}`;
        }
        return e.toUpperCase();
    }
    l.KeyboardKey = M13;
    l.KeyboardKeyGroup = P7;
    l.KeyboardShortcut = _;
    l.expandRawShortcut = g;
}, 98);