__d("WAWebCallLogIcon.react", [
    "WDSIconIcLink.react",
    "WDSIconIcPhoneCallbackFilled.react",
    "WDSIconWdsIcCallVideoMadeFilled.react",
    "WDSIconWdsIcCallVideoReceivedFilled.react",
    "WDSIconWdsIcPhoneCallMadeFilled.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        miss: {
            color: "x30a034",
            $$css: true
        },
        ongoing: {
            color: "x1v5yvga",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(8);
        const { iconHeight, isCallLink, isFromMe, isMissedCall, isOngoingCall, isVideoCall, xstyle } = e;
        const p = isOngoingCall === undefined ? false : isOngoingCall;
        let _;
        if (isCallLink === true) {
            _ = r("WDSIconIcLink.react");
        } else if (isFromMe) {
            _ = r(isVideoCall ? "WDSIconWdsIcCallVideoMadeFilled.react" : "WDSIconWdsIcPhoneCallMadeFilled.react");
        } else {
            _ = r(isVideoCall ? "WDSIconWdsIcCallVideoReceivedFilled.react" : "WDSIconIcPhoneCallbackFilled.react");
        }
        let f;
        if (p) {
            f = u.ongoing;
        } else if (isMissedCall) {
            f = u.miss;
        }
        let g;
        if (_ === r("WDSIconWdsIcCallVideoReceivedFilled.react")) {
            g = "video-call-incoming-filled";
        } else if (_ === r("WDSIconWdsIcCallVideoMadeFilled.react")) {
            g = "video-call-outgoing-filled";
        } else if (_ === r("WDSIconIcPhoneCallbackFilled.react")) {
            g = "voice-call-incoming-filled";
        } else if (_ === r("WDSIconWdsIcPhoneCallMadeFilled.react")) {
            g = "voice-call-outgoing-filled";
        }
        let h;
        if (t[0] !== f || t[1] !== xstyle) {
            h = [
                xstyle,
                f
            ];
            t[0] = f;
            t[1] = xstyle;
            t[2] = h;
        } else {
            h = t[2];
        }
        let y;
        if (t[3] !== _ || t[4] !== iconHeight || t[5] !== h || t[6] !== g) {
            y = <_ height={iconHeight} xstyle={h} testid={g}/>;
            t[3] = _;
            t[4] = iconHeight;
            t[5] = h;
            t[6] = g;
            t[7] = y;
        } else {
            y = t[7];
        }
        return y;
    }
    l.CallLogIcon = c;
}, 98);