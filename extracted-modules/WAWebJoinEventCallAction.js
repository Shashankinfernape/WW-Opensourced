__d("WAWebJoinEventCallAction", [
    "fbt",
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebApiParse",
    "WAWebChatGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumLobbyEntryPointType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    let d;
    let m;
    const p = m || (m = o("react"));
    const sampling = 0.01;
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebApiParse").parseCallLink(e.callLink);
            if (t != null) {
                const a = t.data;
                const { callType, token } = a;
                const isVideo = callType === "video";
                const lobbyEntryPoint = o("WAWebChatGetters").getIsGroup(e.chat) ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.EVENT_GROUP_CHAT : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.EVENT_INDIVIDUAL_CHAT;
                const p = yield (d || (d = n("Promise"))).all([
                    r("JSResourceForInteraction")("WAWebVoipCallBlockedModals").__setRef("WAWebJoinEventCallAction").load().catch((e)=>{
                        y(e, "blocked_modals");
                        return null;
                    }),
                    r("JSResourceForInteraction")("WAWebVoipPreviewCallLinkAction").__setRef("WAWebJoinEventCallAction").load().catch((e)=>{
                        y(e, "preview_action");
                        return null;
                    })
                ]);
                const f = p[0];
                const g = p[1];
                if (f == null) {
                    h();
                    return;
                }
                try {
                    if (yield f.showCallBlockedModalIfNeeded()) {
                        return;
                    }
                } catch (error) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: event call blocked check failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-event-call-blocked-check-failed");
                    f.showCouldNotPlaceCallModal();
                    return;
                }
                if (g == null) {
                    f.showCouldNotPlaceCallModal();
                    return;
                }
                try {
                    yield g.previewCallLinkWithVoipInit({
                        callLinkCode: token,
                        isVideo,
                        lobbyEntryPoint
                    });
                } catch (error) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: event call-link preview failed"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("voip-event-call-link-preview-failed", {
                        sampling
                    });
                }
            }
        });
        return g.apply(this, arguments);
    }
    function h() {
        o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, {
            msg: s._("Couldn't join call. Please try again.")
        }));
    }
    function y(t, n) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: event call-link resource load failed resource=",
            ""
        ])), n).catching(r("getErrorSafe")(t)).sendLogs("voip-event-call-resource-load-failed");
    }
    l.joinEventCall = f;
}, 226);