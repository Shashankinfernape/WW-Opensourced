__d("WAWebCallsTabCallCell.react", [
    "WAWebBoolFunc",
    "WAWebCallLogEntryChatImage.react",
    "WAWebCallLogTitle.react",
    "WAWebChatCell.react",
    "WDSButton.react",
    "WDSIconIcCallFilled.react",
    "WDSIconIcVideocamFilled.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(24);
        const { active, bottomSpacing, buttonDisabled, buttonLabel, buttonVariant, callLogMsg, handleKeyboardClick, isVideoCall, onButtonPress, onCardClick, secondary, testid } = e;
        const h = bottomSpacing === undefined ? false : bottomSpacing;
        const y = buttonDisabled === undefined ? false : buttonDisabled;
        const C = handleKeyboardClick === undefined ? false : handleKeyboardClick;
        const b = r(isVideoCall ? "WDSIconIcVideocamFilled.react" : "WDSIconIcCallFilled.react");
        const variant = buttonVariant ?? (y ? "outline" : "filled");
        let S;
        if (t[0] !== onButtonPress) {
            S = function(t) {
                t.stopPropagation();
                onButtonPress();
            };
            t[0] = onButtonPress;
            t[1] = S;
        } else {
            S = t[1];
        }
        let R;
        if (t[2] !== y || t[3] !== buttonLabel || t[4] !== b || t[5] !== variant || t[6] !== S) {
            const Component = r("WDSButton.react");
            R = <Component label={buttonLabel} Icon={b} variant={variant} disabled={y} onPress={S}/>;
            t[2] = y;
            t[3] = buttonLabel;
            t[4] = b;
            t[5] = variant;
            t[6] = S;
            t[7] = R;
        } else {
            R = t[7];
        }
        const L = R;
        let E;
        let k;
        if (t[8] !== callLogMsg) {
            E = s.jsx(r("WAWebCallLogEntryChatImage.react"), {
                msg: callLogMsg
            });
            k = s.jsx(r("WAWebCallLogTitle.react"), {
                callLogMsg
            });
            t[8] = callLogMsg;
            t[9] = E;
            t[10] = k;
        } else {
            E = t[9];
            k = t[10];
        }
        const I = onCardClick ?? undefined;
        const handleKeyboardClick_1 = C && onCardClick != null;
        let D;
        if (t[11] !== h || t[12] !== onCardClick) {
            D = ({
                0: "xdmi676 x1qafhyn x16ovd2e x12xbjc7",
                2: "xdmi676 x1qafhyn x16ovd2e x12xbjc7 xefnzgg",
                1: "xdmi676 x1qafhyn x16ovd2e x12xbjc7 x1citr7e",
                3: "xdmi676 x1qafhyn x16ovd2e x12xbjc7 xefnzgg x1citr7e"
            })[!!h << 1 | (onCardClick != null) << 0];
            t[11] = h;
            t[12] = onCardClick;
            t[13] = D;
        } else {
            D = t[13];
        }
        let x;
        if (t[14] !== active || t[15] !== L || t[16] !== secondary || t[17] !== I || t[18] !== handleKeyboardClick_1 || t[19] !== D || t[20] !== E || t[21] !== k || t[22] !== testid) {
            const Component = r("WAWebChatCell.react");
            x = <Component theme="voip-ongoing-call" idle contextEnabled={o("WAWebBoolFunc").returnFalse} active={active} image={E} primary={k} secondary={secondary} detail={L} onClick={I} handleKeyboardClick={handleKeyboardClick_1} testid={testid} className={D}/>;
            t[14] = active;
            t[15] = L;
            t[16] = secondary;
            t[17] = I;
            t[18] = handleKeyboardClick_1;
            t[19] = D;
            t[20] = E;
            t[21] = k;
            t[22] = testid;
            t[23] = x;
        } else {
            x = t[23];
        }
        return x;
    }
    l.default = u;
}, 98);