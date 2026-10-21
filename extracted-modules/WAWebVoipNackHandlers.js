__d("WAWebVoipNackHandlers", [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebCoreActionsODS",
    "WAWebFrontendContactGetters",
    "WAWebGroupQueryJob",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNoop",
    "WAWebUserPrefsMeUser",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipUiManager",
    "WAWebWidFactory",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    const v = b || (b = o("react"));
    const S = {
        NackCallerCountry: 401,
        NackCallerNotEnabled: 403,
        NackCalleeCountry: 405,
        NackCalleePlatform: 406,
        NackUnknownReason: 409,
        NackDuplicateLinkedGroupCall: 411,
        NackCalleeAppVersion: 426,
        NackGroupCallNotEnabled: 427,
        NackLinkedGroupCallMembershipMismatch: 412,
        NackGroupCallMaximumLimit: 428,
        NackGroupCallCapacityFull: 434,
        NackCalleeOSVersion: 460,
        NackUnavailable: 473
    };
    function R(e, t, n) {
        const Component = r("WDSText.react");
        const Component_1 = o("WAWebConfirmPopup.react").ConfirmPopup;
        o("WAWebModalManager").ModalManager.open(<Component_1 onOK={function() {
            o("WAWebModalManager").ModalManager.close();
            t?.();
        }} okText={s._("OK")} title={n}><Component type="Body1" colorName="contentDefault">{e}</Component></Component_1>);
    }
    function L() {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (e != null && e.type === "web") {
                yield e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Self, true);
            } else {
                r("WAWebCallCollection").setActiveCall(null);
                r("WAWebCallCollection").setIsInConnectedCall(false);
            }
        });
        return E.apply(this, arguments);
    }
    function k(errorJid) {
        const n = errorJid != null && o("WAWebUserPrefsMeUser").isMeAccount(errorJid);
        if (n) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleCallOfferNacked: Self nacked for NackGroupCallNotEnabled (427)"
            ])));
            R(s._("Your version of WhatsApp doesn't support group calls."), r("WAWebNoop"));
            return;
        }
        o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: handleCallOfferNacked: Showing dialog for NackGroupCallNotEnabled (427) for peer"
        ])));
        const a = errorJid != null ? o("WAWebContactCollection").ContactCollection.gadd(errorJid, {
            silent: true
        }) : null;
        R(a != null ? s._("{name} can't join WhatsApp group calls right now.", [
            s._param("name", v.jsx(o("WAWebName.react").Name, {
                contact: a
            }))
        ]) : s._("This person's version of WhatsApp doesn't support group calls. Ask them to update WhatsApp and try again."));
    }
    function I(activeCall, t) {
        if (!activeCall.didRefreshGroupInfoOnMismatch) {
            if (o("WAWebVoipGatingUtils").isRefreshGroupInfoOnMismatchEnabled()) {
                activeCall.didRefreshGroupInfoOnMismatch = true;
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleCallOfferNacked: refreshing group info after membership mismatch (412)"
                ])));
                o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                    id: t
                }).catch((t)=>{
                    activeCall.didRefreshGroupInfoOnMismatch = false;
                    o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: handleCallOfferNacked: group info refresh failed"
                    ]))).catching(r("getErrorSafe")(t)).sendLogs("voip-refresh-group-info-on-mismatch");
                });
            }
        }
    }
    function T(e) {
        const activeCall = r("WAWebCallCollection").activeCall;
        if (activeCall) {
            for (const n of e.errors){
                switch(n.errorCode){
                    case S.NackUnknownReason:
                    case S.NackUnavailable:
                        o("WAWebCoreActionsODS").logCallErrorTerminal();
                        break;
                    case S.NackCallerCountry:
                    case S.NackCallerNotEnabled:
                    case S.NackCalleeCountry:
                    case S.NackCalleePlatform:
                    case S.NackCalleeAppVersion:
                    case S.NackCalleeOSVersion:
                        break;
                    case S.NackGroupCallMaximumLimit:
                    case S.NackGroupCallCapacityFull:
                        break;
                    default:
                        break;
                }
            }
            for (const a of e.errors){
                switch(a.errorCode){
                    case S.NackDuplicateLinkedGroupCall:
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: handleCallOfferNacked: NackDuplicateLinkedGroupCall (411)"
                        ])));
                        R(s._("Each group can only have one ongoing call at a time."), r("WAWebNoop"), s._("Couldn't start call"));
                        break;
                    case S.NackGroupCallNotEnabled:
                        {
                            k(a.errorJid);
                            break;
                        }
                    case S.NackLinkedGroupCallMembershipMismatch:
                        {
                            const i = activeCall.groupJid;
                            if (activeCall.isGroup && i != null) {
                                I(activeCall, i);
                            }
                            break;
                        }
                    default:
                        break;
                }
            }
            if (e.isFatalNack) {
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: Fatal offer nack received, ending call"
                ])));
                L();
                return;
            }
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Offer nack received, call continuing"
            ])));
        }
    }
    const D = {
        BadRequest: 400,
        DoesNotExist: 404,
        UnsupportedAppVersion: 427,
        CallFull: 428,
        NotCompatible: 432,
        ServiceUnavailable: 503
    };
    function x(e) {
        o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
            "voip: handleCallLinkNacked: nackCode=",
            ""
        ])), e);
        const t = $(e);
        R(t);
    }
    function $(e) {
        switch(e){
            case D.DoesNotExist:
                return s._("Invalid call link");
            case D.CallFull:
                return s._("This call is full.");
            case D.UnsupportedAppVersion:
                return s._("Please update WhatsApp to join this call.");
            case D.ServiceUnavailable:
                return s._("Couldn't connect. Please try again later.");
            default:
                return s._("Couldn't join this call.");
        }
    }
    $.displayName = `${$.name} [from ${i.id}]`;
    function P() {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleLobbyNacked: ending call"
            ])));
            const e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (e != null && e.type === "web") {
                yield e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, true);
            } else {
                r("WAWebCallCollection").setActiveCall(null);
                r("WAWebCallCollection").setIsInConnectedCall(false);
            }
            o("WAWebVoipUiManager").closeAllVoipWindows({
                callEnded: true,
                surveyInteracted: false
            });
            R(s._("Couldn't connect."));
        });
        return N.apply(this, arguments);
    }
    function M() {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleLobbyTimeout: ending call"
            ])));
            const e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (e != null && e.type === "web") {
                yield e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, true);
            } else {
                r("WAWebCallCollection").setActiveCall(null);
                r("WAWebCallCollection").setIsInConnectedCall(false);
            }
            o("WAWebVoipUiManager").closeAllVoipWindows({
                callEnded: true,
                surveyInteracted: false
            });
            R(s._("Call preview has timed out."));
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
            "voip: showUserRemovedDialog: removerJid=",
            ""
        ])), e ?? "null");
        let t = "";
        if (e != null && e !== "") {
            const n = o("WAWebContactCollection").ContactCollection.get(e);
            if (n != null) {
                t = o("WAWebFrontendContactGetters").getDisplayName(n);
            }
            if (t === "") {
                t = e;
            }
        }
        const r = t !== "" ? s._("You have been removed from the call by {name}.", [
            s._param("name", t)
        ]) : s._("You have been removed from the call.");
        R(r, function() {
            o("WAWebVoipUiManager").closeAllVoipWindows({
                callEnded: true,
                surveyInteracted: false
            });
        }, s._("Call has ended"));
    }
    function F(e) {
        let jid;
        try {
            jid = o("WAWebWidFactory").createWid(e);
        } catch (t) {
            o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: showParticipantRemovedToast: invalid jid ",
                ""
            ])), e);
            return;
        }
        r("WAWebCallCollection").trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.PARTICIPANT_REMOVED), {
            jid
        });
    }
    l.showErrorDialog = R;
    l.handleCallOfferNacked = T;
    l.handleCallLinkNacked = x;
    l.handleLobbyNacked = P;
    l.handleLobbyTimeout = M;
    l.showUserRemovedDialog = A;
    l.showParticipantRemovedToast = F;
}, 226);