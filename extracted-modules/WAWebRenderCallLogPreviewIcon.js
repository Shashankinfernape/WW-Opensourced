__d("WAWebRenderCallLogPreviewIcon", [
    "WAWebCallLogIcon.react",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebFlex.react",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        container: {
            height: "x5yr21d",
            $$css: true
        },
        paddingEnd2: {
            paddingInlineEnd: "x1j8ymqv",
            $$css: true
        }
    };
    function c(e) {
        const t = o("react-compiler-runtime").c(14);
        const e_msg = e.msg;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let a;
            r = [
                (a = o("WAWebMsgGetters")).getIsVideoCall,
                a.getIsMissedCall,
                a.getIsSentByMe,
                a.getIsCallLink,
                a.getCallOutcome,
                a.getFinalCallOutcome,
                a.getCallParticipants
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const i = o("useWAWebMsgValues").useMsgValues(e_msg.id, r);
        const isVideoCall = i[0];
        const c = i[1];
        const isFromMe = i[2];
        const m = i[3];
        const p = i[4];
        const _ = i[5];
        const f = i[6];
        const isOngoingCall = p === o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing && _ !== o("WAWebCallLogMsgData.flow").CallOutcome.Completed;
        let h;
        if (t[1] !== p || t[2] !== f || t[3] !== _ || t[4] !== c || t[5] !== isFromMe) {
            const y = o("WAWebCallLogUtils").getIsSelfConnected(f);
            h = o("WAWebCallLogUtils").getIsMissedCallOrNotConnected(c, y, isFromMe, p, _);
            t[1] = p;
            t[2] = f;
            t[3] = _;
            t[4] = c;
            t[5] = isFromMe;
            t[6] = h;
        } else {
            h = t[6];
        }
        const isMissedCall = h;
        let b;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            b = [
                u.container,
                u.paddingEnd2
            ];
            t[7] = b;
        } else {
            b = t[7];
        }
        const isCallLink = m ?? false;
        let S;
        if (t[8] !== isMissedCall || t[9] !== isOngoingCall || t[10] !== isFromMe || t[11] !== isVideoCall || t[12] !== isCallLink) {
            const Component = o("WAWebFlex.react").FlexColumn;
            S = <Component xstyle={b} align="center" justify="center">{s.jsx(o("WAWebCallLogIcon.react").CallLogIcon, {
                iconHeight: 16,
                isMissedCall,
                isVideoCall,
                isFromMe,
                isCallLink,
                isOngoingCall
            })}</Component>;
            t[8] = isMissedCall;
            t[9] = isOngoingCall;
            t[10] = isFromMe;
            t[11] = isVideoCall;
            t[12] = isCallLink;
            t[13] = S;
        } else {
            S = t[13];
        }
        return S;
    }
    l.default = c;
}, 98);