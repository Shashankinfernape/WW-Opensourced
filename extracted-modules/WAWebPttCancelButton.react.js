__d("WAWebPttCancelButton.react", [
    "fbt",
    "WDSIconIcDelete.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const u_useRef = u.useRef;
    function m(t) {
        const n = o("react-compiler-runtime").c(17);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { confirmOnMouseUp, onConfirm, tabOrder } = l;
        const _ = u_useRef(false);
        let f;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = function(t) {
                _.current = true;
                window.addEventListener("mouseup", function() {
                    _.current = false;
                }, {
                    once: true
                });
            };
            n[3] = f;
        } else {
            f = n[3];
        }
        const g = f;
        let h;
        if (n[4] !== confirmOnMouseUp || n[5] !== onConfirm) {
            h = function(t) {
                if (confirmOnMouseUp) {
                    if (!_.current) {
                        if (t.button === 0) {
                            onConfirm(t);
                        }
                    }
                }
            };
            n[4] = confirmOnMouseUp;
            n[5] = onConfirm;
            n[6] = h;
        } else {
            h = n[6];
        }
        const y = h;
        let C;
        if (n[7] !== onConfirm) {
            C = function(t) {
                if (t != null) {
                    onConfirm(t);
                }
            };
            n[7] = onConfirm;
            n[8] = C;
        } else {
            C = n[8];
        }
        const b = C;
        let v;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            v = s._("Cancel");
            n[9] = v;
        } else {
            v = n[9];
        }
        const S = v;
        let R;
        if (n[10] !== b || n[11] !== i || n[12] !== tabOrder) {
            const Component = r("WDSMenuBarItem.react");
            R = <Component ref={i} testid="ptt-cancel-btn" onClick={b} tabOrder={tabOrder} title={S} icon={r("WDSIconIcDelete.react")}/>;
            n[10] = b;
            n[11] = i;
            n[12] = tabOrder;
            n[13] = R;
        } else {
            R = n[13];
        }
        let L;
        if (n[14] !== y || n[15] !== R) {
            L = <div onMouseUp={y} onMouseDown={g} aria-label={S}>{R}</div>;
            n[14] = y;
            n[15] = R;
            n[16] = L;
        } else {
            L = n[16];
        }
        return L;
    }
    l.default = m;
}, 226);