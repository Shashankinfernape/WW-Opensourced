__d("WAWebOpenGroupAgentProfile.react", [
    "WALogger",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebFindChatAction",
    "WAWebGroupAgentProfileDrawerLoadable",
    "WAWebGroupAgentProfileErrorMessage",
    "WAWebGroupAgentProfileRouting",
    "WAWebMaybeSyncBotSupportFields",
    "WAWebToast.react",
    "WAWebToastManager",
    "getErrorSafe",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    function c(e, t, sourceGroupChat, r, a) {
        if (e == null || t == null) {
            return false;
        }
        const Component = o("WAWebGroupAgentProfileDrawerLoadable").GroupAgentProfileDrawerLoadable;
        if (o("WAWebBotProfileCollection").BotProfileCollection.get(t.id)?.lastFetchedTimeMs == null) {
            o("WAWebMaybeSyncBotSupportFields").maybeSyncBotSupportFields(t.id, {
                sourceGroupWid: sourceGroupChat.id
            });
        }
        if (e === o("WAWebGroupAgentProfileRouting").GroupAgentProfileDestination.BASIC_CARD && a != null) {
            return a(), true;
        }
        return o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component contact={t} origin={r} sourceGroupChat={sourceGroupChat} onClose={o("WAWebDrawerManager").closeDrawerRight}/>, {
            transition: "slide-left"
        }), true;
    }
    function d(e, t) {
        if (o("WAWebBotProfileCollection").BotProfileCollection.get(e.id)?.lastFetchedTimeMs == null) {
            o("WAWebMaybeSyncBotSupportFields").maybeSyncBotSupportFields(e.id, {});
        }
        const Component = o("WAWebGroupAgentProfileDrawerLoadable").GroupAgentProfileDrawerLoadable;
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(<Component contact={e} origin={t} sourceGroupChat={null} onClose={o("WAWebDrawerManager").closeDrawerRight}/>, {
            transition: "slide-left"
        });
    }
    function m(t, n, a) {
        o("WAWebFindChatAction").findOrCreateLatestChat(o("WAWebBotUtils").HATCH_BOT_FBID_WID, n).then(({ chat })=>{
            if (a != null) {
                a(chat);
                return;
            }
            o("WAWebCmd").Cmd.chatInfoDrawer(chat, {
                sourceGroupChatOrNewsletter: t ?? undefined
            });
        }).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "Hatch profile lookup failed"
            ]))).catching(r("getErrorSafe")(t)).sendLogs("group-agent-hatch-profile-open-failed");
            o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                msg: o("WAWebGroupAgentProfileErrorMessage").getRetryProfileErrorMessage()
            }));
        });
    }
    l.openGroupAgentProfile = c;
    l.openMuseAgentProfileOutsideGroup = d;
    l.openGroupAgentOwnerInfo = m;
}, 98);