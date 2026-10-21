__d("BaseMenuFocusGroup", [
    "fbt",
    "CometComponentWithKeyCommands.react",
    "CometKeys",
    "FocusGroup.react",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    const e = [
        "useKeyCommands"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = o("FocusGroup.react").createFocusGroup(o("focusScopeQueries").tabbableScopeQuery);
    const M2 = d[0];
    const FocusItem = d[1];
    function FocusGroup(t) {
        const n = o("react-compiler-runtime").c(8);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.useKeyCommands;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = i === undefined ? true : i;
        if (!l) {
            let u;
            if (n[3] !== a) {
                u = <M2 {...babelHelpers.extends({}, a)}/>;
                n[3] = a;
                n[4] = u;
            } else {
                u = n[4];
            }
            return u;
        }
        let d;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                {
                    command: {
                        key: r("CometKeys").UP
                    },
                    description: s._("Previous item"),
                    handler: g
                },
                {
                    command: {
                        key: r("CometKeys").DOWN
                    },
                    description: s._("Next item"),
                    handler: f
                }
            ];
            n[5] = d;
        } else {
            d = n[5];
        }
        const commandConfigs = d;
        let _;
        if (n[6] !== a) {
            const Component = r("CometComponentWithKeyCommands.react");
            _ = <Component commandConfigs={commandConfigs}>{<M2 {...babelHelpers.extends({}, a)}/>}</Component>;
            n[6] = a;
            n[7] = _;
        } else {
            _ = n[7];
        }
        return _;
    }
    function f() {}
    function g() {}
    const h = {
        FocusGroup,
        FocusItem
    };
    l.default = h;
}, 226);