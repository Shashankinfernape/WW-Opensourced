__d("WAWebPttStartRecordingButton.react", [
    "fbt",
    "WAWebTabOrder",
    "WDSFocusStateStyles",
    "WDSIconIcMic.react",
    "WDSIconIcMicFilled.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebFocusState"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const u_useState = u.useState;
    function m(t) {
        const n = o("react-compiler-runtime").c(23);
        const { disabled, onConfirm } = t;
        const l = u_useState(false);
        const u = l[0];
        const m = l[1];
        const _ = r("useWAWebFocusState")();
        const f = _[1];
        let g;
        if (n[0] !== onConfirm) {
            g = function(t) {
                if (t.button === 0) {
                    onConfirm();
                }
            };
            n[0] = onConfirm;
            n[1] = g;
        } else {
            g = n[1];
        }
        const h = g;
        let y;
        if (n[2] !== onConfirm) {
            y = function(t) {
                onConfirm();
            };
            n[2] = onConfirm;
            n[3] = y;
        } else {
            y = n[3];
        }
        const onTouchStart = y;
        const onTouchEnd = p;
        let v;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            v = s._("Voice message");
            n[4] = v;
        } else {
            v = n[4];
        }
        const S = v;
        const R = f && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent;
        let L;
        if (n[5] !== disabled || n[6] !== h || n[7] !== onTouchStart || n[8] !== u || n[9] !== onConfirm || n[10] !== R) {
            const E = [
                R
            ];
            let k;
            let I;
            if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
                k = function() {
                    return m(true);
                };
                I = function() {
                    return m(false);
                };
                n[12] = k;
                n[13] = I;
            } else {
                k = n[12];
                I = n[13];
            }
            const T = r(u ? "WDSIconIcMicFilled.react" : "WDSIconIcMic.react");
            const D = disabled ?? false;
            const x = u ? "filled" : "borderless";
            let $;
            if (n[14] !== onConfirm || n[15] !== x || n[16] !== T || n[17] !== D) {
                const Component = r("WDSMenuBarItem.react");
                $ = <Component icon={T} title={S} onClick={onConfirm} tabOrder={o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON} testid="ptt-ready-btn" disabled={D} buttonSize="medium" buttonVariant={x} buttonType="default"/>;
                n[14] = onConfirm;
                n[15] = x;
                n[16] = T;
                n[17] = D;
                n[18] = $;
            } else {
                $ = n[18];
            }
            let P;
            if (n[19] !== h || n[20] !== onTouchStart || n[21] !== $) {
                P = <button onMouseEnter={k} onMouseLeave={I} onMouseDown={h} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} aria-label={S}>{$}</button>;
                n[19] = h;
                n[20] = onTouchStart;
                n[21] = $;
                n[22] = P;
            } else {
                P = n[22];
            }
            L = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(E), {
                children: P
            })}/>;
            n[5] = disabled;
            n[6] = h;
            n[7] = onTouchStart;
            n[8] = u;
            n[9] = onConfirm;
            n[10] = R;
            n[11] = L;
        } else {
            L = n[11];
        }
        return L;
    }
    function p() {}
    l.default = m;
}, 226);