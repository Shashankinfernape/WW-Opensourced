__d("WAWebVoipBridgeChatHandlers", [
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters",
    "WAWebVoipEventConstants",
    "WAWebVoipOngoingCallCollection",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = {
        getTcToken: (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ wid }) {
                if (!wid.isUser()) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getTcToken: wid is not a user wid, wid domain: ",
                        ""
                    ])), wid.server);
                    return {
                        tcToken: null
                    };
                }
                try {
                    const callDestinationWid = o("WAWebWidFactory").asUserWidOrThrow(wid);
                    const a = yield o("WAWebCallLogUtils").get1x1CallLidOrPnDestination({
                        callDestinationWid
                    });
                    const i = o("WAWebChatCollection").ChatCollection.get(a);
                    if (i == null) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: getTcToken: chat not found, chat domain: ",
                            ""
                        ])), wid.server);
                    }
                    return {
                        tcToken: i?.tcToken
                    };
                } catch (error) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getTcToken: get1x1CallLidOrPnDestination failed, error: ",
                        ""
                    ])), error);
                    return {
                        tcToken: null
                    };
                }
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })(),
        getOngoingCallInfo: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.waitUntilLoaded();
                const t = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.findOngoingCallActiveOnOtherSelfDevice();
                if (t == null) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getOngoingCallInfo: no call active on another self device"
                    ])));
                    return null;
                }
                const remote = t.id.remote;
                const participantJids = (o("WAWebMsgGetters").getCallParticipants(t) ?? []).map(({ participant })=>participant.toString());
                const t_callCreator = t.callCreator;
                if (participantJids.length === 0 && t_callCreator != null) {
                    participantJids.push(t_callCreator.toString());
                }
                return {
                    callId: t.id.id,
                    isVideoCall: o("WAWebMsgGetters").getIsVideoCall(t),
                    groupJid: remote.isGroup() ? remote.toString() : null,
                    participantJids
                };
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        handleMutedByOthers: function({ muterJid }) {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleMutedByOthers muterJid=",
                ""
            ])), String(muterJid));
            let n = "";
            if (muterJid != null) {
                const a = o("WAWebContactCollection").ContactCollection.get(muterJid);
                if (a != null) {
                    n = o("WAWebFrontendContactGetters").getFormattedShortName(a);
                }
            }
            r("WAWebCallCollection").trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.MUTED_BY_OTHERS), {
                name: n
            });
        }
    };
    l.VoipBridgeChatHandlers = m;
}, 98);