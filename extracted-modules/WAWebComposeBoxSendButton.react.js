__d("WAWebComposeBoxSendButton.react", [
    "fbt",
    "WAGetUserMedia",
    "WAWebPttStartRecordingButton.react",
    "WAWebTabOrder",
    "WAWebWdsIcSendFilledIcon.react",
    "WDSIconWdsIcAiSend.react",
    "WDSIconWdsIcAiSendFilled.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = {
        marginInlineStart5: {
            marginInlineStart: "xpcyujq",
            $$css: true
        }
    };
    const m = {
        childPaddingRefresh: {
            boxSizing: "x9f619",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            alignSelf: "xpvyfi4",
            $$css: true
        },
        sendButtonContainerRefresh: {
            flexShrink: "x2lah0s",
            flexGrow: "x1c4vz4f",
            minWidth: "x1fns5xo",
            minHeight: "x1ba4aug",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            color: "x1pse0pq",
            $$css: true
        },
        sendButtonBgDisabled: {
            color: "x18cpw0e",
            cursor: "x1h6gzvc",
            $$css: true
        }
    };
    function p(e) {
        const t = o("react-compiler-runtime").c(11);
        const { hasText, iconWidth, onClickSend, onStartRecording, recordingSession, supportsPtt } = e;
        const m = !!(o("WAGetUserMedia").getUserMedia && window.AudioContext);
        const p = !hasText && m && supportsPtt;
        if (p) {
            const _ = recordingSession != null;
            let f;
            if (t[0] !== onStartRecording || t[1] !== _) {
                const Component = r("WAWebPttStartRecordingButton.react");
                f = <Component disabled={_} onConfirm={onStartRecording}/>;
                t[0] = onStartRecording;
                t[1] = _;
                t[2] = f;
            } else {
                f = t[2];
            }
            return f;
        }
        const g = iconWidth == null || iconWidth ? 20 : undefined;
        let h;
        let y;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            h = s._("Send");
            y = {
                className: "x1c4vz4f x2lah0s xdl72j9 xhslqc4 x1iy03kw x1lfpgzf"
            };
            t[3] = h;
            t[4] = y;
        } else {
            h = t[3];
            y = t[4];
        }
        const C = !hasText;
        let b;
        if (t[5] !== g) {
            b = c.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
                directional: true,
                width: g
            });
            t[5] = g;
            t[6] = b;
        } else {
            b = t[6];
        }
        let v;
        if (t[7] !== onClickSend || t[8] !== C || t[9] !== b) {
            v = <button {...babelHelpers.extends({
                "data-testid": "compose-btn-send",
                "data-tab": o("WAWebTabOrder").TAB_ORDER.SEND_BUTTON,
                "aria-label": h
            }, y, {
                onClick: onClickSend,
                disabled: C,
                children: b
            })}/>;
            t[7] = onClickSend;
            t[8] = C;
            t[9] = b;
            t[10] = v;
        } else {
            v = t[10];
        }
        return v;
    }
    function _(t) {
        const n = o("react-compiler-runtime").c(20);
        const { buttonVariant, hasTextState, onClickSend, onStartRecording, recordingSession, showAiSendIcon, supportsPtt } = t;
        const g = buttonVariant === undefined ? "filled" : buttonVariant;
        const h = !!(o("WAGetUserMedia").getUserMedia && window.AudioContext);
        const y = !hasTextState && h && supportsPtt;
        const C = !hasTextState;
        let b;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            b = s._("Send");
            n[0] = b;
        } else {
            b = n[0];
        }
        const v = b;
        let S;
        let R;
        let L;
        if (n[1] !== C || n[2] !== onStartRecording || n[3] !== recordingSession || n[4] !== y || n[5] !== showAiSendIcon) {
            L = Symbol.for("react.early_return_sentinel");
            e: {
                const E = [
                    m.childPaddingRefresh,
                    m.sendButtonContainerRefresh,
                    d.marginInlineStart5
                ];
                if (C && !y) {
                    E.push(m.sendButtonBgDisabled);
                }
                if (y) {
                    const k = recordingSession != null;
                    let I;
                    if (n[9] !== onStartRecording || n[10] !== k) {
                        const Component = r("WAWebPttStartRecordingButton.react");
                        I = <Component disabled={k} onConfirm={onStartRecording}/>;
                        n[9] = onStartRecording;
                        n[10] = k;
                        n[11] = I;
                    } else {
                        I = n[11];
                    }
                    L = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(E), {
                        children: I
                    })}/>;
                    break e;
                }
                S = o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon;
                if (showAiSendIcon) {
                    S = r(C ? "WDSIconWdsIcAiSend.react" : "WDSIconWdsIcAiSendFilled.react");
                }
                R = (e || (e = r("stylex"))).props(E);
            }
            n[1] = C;
            n[2] = onStartRecording;
            n[3] = recordingSession;
            n[4] = y;
            n[5] = showAiSendIcon;
            n[6] = S;
            n[7] = R;
            n[8] = L;
        } else {
            S = n[6];
            R = n[7];
            L = n[8];
        }
        if (L !== Symbol.for("react.early_return_sentinel")) {
            return L;
        }
        let T;
        if (n[12] !== g || n[13] !== C || n[14] !== S || n[15] !== onClickSend) {
            const Component = r("WDSMenuBarItem.react");
            T = <Component icon={S} title={v} onClick={onClickSend} tabOrder={o("WAWebTabOrder").TAB_ORDER.SEND_BUTTON} testid="compose-btn-send" disabled={C} buttonSize="medium" buttonVariant={g} buttonType="default"/>;
            n[12] = g;
            n[13] = C;
            n[14] = S;
            n[15] = onClickSend;
            n[16] = T;
        } else {
            T = n[16];
        }
        let D;
        if (n[17] !== R || n[18] !== T) {
            D = <div {...babelHelpers.extends({}, R, {
                children: T
            })}/>;
            n[17] = R;
            n[18] = T;
            n[19] = D;
        } else {
            D = n[19];
        }
        return D;
    }
    l.SendButton = p;
    l.SendButtonRefresh = _;
}, 226);