__d("WAWebPttSendButton.react", [
    "fbt",
    "WDSIconIcSendFilled.react",
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
        const n = o("react-compiler-runtime").c(18);
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
        const { confirmOnMouseUp, disabled, onConfirm, tabOrder } = l;
        const f = disabled === undefined ? false : disabled;
        const g = u_useRef(false);
        let h;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            h = function(t) {
                g.current = true;
                window.addEventListener("mouseup", function() {
                    g.current = false;
                }, {
                    once: true
                });
            };
            n[3] = h;
        } else {
            h = n[3];
        }
        const y = h;
        let C;
        if (n[4] !== confirmOnMouseUp || n[5] !== onConfirm) {
            C = function(t) {
                if (confirmOnMouseUp) {
                    if (!g.current) {
                        if (t.button === 0) {
                            onConfirm(t);
                        }
                    }
                }
            };
            n[4] = confirmOnMouseUp;
            n[5] = onConfirm;
            n[6] = C;
        } else {
            C = n[6];
        }
        const b = C;
        let v;
        if (n[7] !== onConfirm) {
            v = function(t) {
                if (t != null) {
                    onConfirm(t);
                }
            };
            n[7] = onConfirm;
            n[8] = v;
        } else {
            v = n[8];
        }
        const S = v;
        let R;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Send");
            n[9] = R;
        } else {
            R = n[9];
        }
        const L = R;
        let E;
        if (n[10] !== f || n[11] !== S || n[12] !== i || n[13] !== tabOrder) {
            const Component = r("WDSMenuBarItem.react");
            E = <Component ref={i} testid="ptt-send-btn" disabled={f} title={L} onClick={S} icon={r("WDSIconIcSendFilled.react")} buttonVariant="filled" tabOrder={tabOrder}/>;
            n[10] = f;
            n[11] = S;
            n[12] = i;
            n[13] = tabOrder;
            n[14] = E;
        } else {
            E = n[14];
        }
        let k;
        if (n[15] !== b || n[16] !== E) {
            k = <div onMouseUp={b} onMouseDown={y} role="button" tabIndex={0}>{E}</div>;
            n[15] = b;
            n[16] = E;
            n[17] = k;
        } else {
            k = n[17];
        }
        return k;
    }
    l.default = m;
}, 226);