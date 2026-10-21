__d("WAWebPttPauseResumeRecordingButton.react", [
    "fbt",
    "WDSIconIcKeyboardVoiceFilled.react",
    "WDSIconIcPauseFilled.react",
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
    function PttPauseAndResumeRecordingButton(t) {
        const n = o("react-compiler-runtime").c(25);
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
        const { confirmOnMouseUp, disabled, onConfirm, recording, tabOrder } = l;
        const g = disabled === undefined ? false : disabled;
        const h = u_useRef(false);
        let y;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            y = function(t) {
                h.current = true;
                window.addEventListener("mouseup", function() {
                    h.current = false;
                }, {
                    once: true
                });
            };
            n[3] = y;
        } else {
            y = n[3];
        }
        const C = y;
        let b;
        if (n[4] !== confirmOnMouseUp || n[5] !== onConfirm) {
            b = function(t) {
                if (confirmOnMouseUp) {
                    if (!h.current) {
                        if (t.button === 0) {
                            onConfirm(t);
                        }
                    }
                }
            };
            n[4] = confirmOnMouseUp;
            n[5] = onConfirm;
            n[6] = b;
        } else {
            b = n[6];
        }
        const v = b;
        let S;
        if (n[7] !== onConfirm) {
            S = function(t) {
                if (t != null) {
                    onConfirm(t);
                }
            };
            n[7] = onConfirm;
            n[8] = S;
        } else {
            S = n[8];
        }
        const R = S;
        let L;
        if (n[9] !== recording) {
            L = recording ? s._("Pause recording") : s._("Resume recording");
            n[9] = recording;
            n[10] = L;
        } else {
            L = n[10];
        }
        const E = L;
        let k;
        if (n[11] !== g) {
            k = ({
                0: {
                    className: "x14ug900 x144v4sp"
                },
                1: {
                    className: "x14ug900 x144v4sp"
                }
            })[!g << 0];
            n[11] = g;
            n[12] = k;
        } else {
            k = n[12];
        }
        const I = r(recording ? "WDSIconIcPauseFilled.react" : "WDSIconIcKeyboardVoiceFilled.react");
        let T;
        if (n[13] !== g || n[14] !== R || n[15] !== E || n[16] !== i || n[17] !== I || n[18] !== tabOrder) {
            const Component = r("WDSMenuBarItem.react");
            T = <Component ref={i} testid="ptt-pause-and-resume-recording-button" title={E} onClick={R} disabled={g} tabOrder={tabOrder} buttonType="destructive" icon={I}/>;
            n[13] = g;
            n[14] = R;
            n[15] = E;
            n[16] = i;
            n[17] = I;
            n[18] = tabOrder;
            n[19] = T;
        } else {
            T = n[19];
        }
        let D;
        if (n[20] !== v || n[21] !== E || n[22] !== k || n[23] !== T) {
            D = <div {...babelHelpers.extends({
                onMouseUp: v,
                onMouseDown: C,
                "aria-label": E
            }, k, {
                children: T
            })}/>;
            n[20] = v;
            n[21] = E;
            n[22] = k;
            n[23] = T;
            n[24] = D;
        } else {
            D = n[24];
        }
        return D;
    }
    PttPauseAndResumeRecordingButton.displayName = "PttPauseAndResumeRecordingButton";
    l.default = PttPauseAndResumeRecordingButton;
}, 226);