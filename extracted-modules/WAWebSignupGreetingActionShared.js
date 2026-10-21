__d("WAWebSignupGreetingActionShared", [
    "WALogger",
    "WAWebChatDeleteBridge",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCommonMsgUtils"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new Set;
    const u = new Map;
    const c = new Set;
    const d = 5;
    function m(t) {
        o("WAWebChatDeleteBridge").deleteFromStorage(t.id).catch((t)=>{
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[deleteSignupChat] failed to delete from storage ",
                ""
            ])), t);
        });
        t.delete();
    }
    function p(e, t) {
        const n = e.msgs.getModelsArray();
        if (n.length > d) {
            return false;
        }
        return !n.some((e)=>(t == null || !t.includes(e)) && e.subtype !== o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard && !o("WAWebCommonMsgUtils").isNotificationType(e.type, e.subtype));
    }
    l.signupCardInjectedChats = s;
    l.inFlightDeepLinks = u;
    l.cancelledSignups = c;
    l.deleteSignupChat = m;
    l.isChatSafeToDelete = p;
}, 98);