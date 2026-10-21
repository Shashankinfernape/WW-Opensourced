__d("CometComponentWithKeyCommands.react", [
    "CometKeyCommandWrapper.react",
    "react",
    "react-compiler-runtime",
    "useKeyCommands"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "children",
        "commandConfigs",
        "elementType",
        "xstyle"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = {
        displayInherit: {
            display: "x1jfb8zj",
            $$css: true
        },
        inherit: {
            alignContent: "x4k7w5x",
            alignItems: "x1h91t0o",
            flexDirection: "x1beo9mf",
            flexGrow: "xaigb6o",
            flexShrink: "x12ejxvf",
            height: "x3igimt",
            justifyContent: "xarpa2k",
            maxHeight: "xedcshv",
            maxWidth: "x1lytzrv",
            minHeight: "x1t2pt76",
            minWidth: "x7ja8zs",
            position: "x1n2onr6",
            width: "x1qrby5j",
            $$css: true
        }
    };
    function D2({ commandConfigs }) {
        r("useKeyCommands")(commandConfigs);
        return null;
    }
    function m(t) {
        const n = o("react-compiler-runtime").c(16);
        let a;
        let commandConfigs;
        let elementType;
        let s;
        let m;
        if (n[0] !== t) {
            a = t.children;
            commandConfigs = t.commandConfigs;
            elementType = t.elementType;
            m = t.xstyle;
            s = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = commandConfigs;
            n[3] = elementType;
            n[4] = s;
            n[5] = m;
        } else {
            a = n[1];
            commandConfigs = n[2];
            elementType = n[3];
            s = n[4];
            m = n[5];
        }
        let p;
        if (n[6] !== elementType) {
            p = elementType === "span" ? c.inherit : [
                c.inherit,
                c.displayInherit
            ];
            n[6] = elementType;
            n[7] = p;
        } else {
            p = n[7];
        }
        const f = m ?? p;
        let g;
        if (n[8] !== commandConfigs) {
            g = <D2 commandConfigs={commandConfigs}/>;
            n[8] = commandConfigs;
            n[9] = g;
        } else {
            g = n[9];
        }
        let h;
        if (n[10] !== a || n[11] !== elementType || n[12] !== s || n[13] !== f || n[14] !== g) {
            h = u.jsxs(r("CometKeyCommandWrapper.react"), babelHelpers.extends({
                elementType,
                xstyle: f
            }, s, {
                children: [
                    g,
                    a
                ]
            }));
            n[10] = a;
            n[11] = elementType;
            n[12] = s;
            n[13] = f;
            n[14] = g;
            n[15] = h;
        } else {
            h = n[15];
        }
        return h;
    }
    l.default = m;
}, 98);