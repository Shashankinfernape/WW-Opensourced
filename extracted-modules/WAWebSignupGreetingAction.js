__d("WAWebSignupGreetingAction", [
    "WALogger",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDBMessageDelete",
    "WAWebMsgType",
    "WAWebSignupFlowLoggerLazy",
    "WAWebSignupGating",
    "WAWebSignupGreetingActionShared",
    "WAWebSignupLoadingState",
    "WAWebSignupQPLLogger"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c() {
        o("WAWebSignupGreetingActionShared").signupCardInjectedChats.clear();
    }
    function d(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE && e.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Signup && e.signupCtaTapped !== true;
    }
    function m(e) {
        const t = e.id.toString();
        let n = null;
        let signupId = o("WAWebSignupGreetingActionShared").inFlightDeepLinks.get(t);
        if (signupId != null) {
            n = t;
        } else if (o("WAWebSignupLoadingState").isSignupLoading(t)) {
            for (const [i, l] of o("WAWebSignupGreetingActionShared").inFlightDeepLinks){
                n = i;
                signupId = l;
                break;
            }
        }
        if (!(signupId == null || n == null)) {
            o("WAWebSignupGreetingActionShared").inFlightDeepLinks.delete(n);
            o("WAWebSignupGreetingActionShared").cancelledSignups.add(signupId);
            o("WAWebSignupQPLLogger").deepLinkCancel(signupId);
            o("WAWebSignupFlowLoggerLazy").logSignupOp({
                operation: o("WAWebSignupFlowLoggerLazy").SIGNUP_USER_JOURNEY_OPERATION.AGM_CANCELLED_USER_LEFT,
                signupId,
                businessWid: e.id,
                chatTimestamp: e.t
            });
        }
    }
    function p(t) {
        const n = t.msgs.last();
        if (!(n == null || !d(n)) && !(!o("WAWebSignupGating").isSignupAGMEnabled() || !o("WAWebSignupGating").isSignupAGMCleanupEnabled()) && !(t.draftMessage != null && t.draftMessage.text !== "")) {
            const r = t.msgs.getModelsArray();
            const a = r.filter(d);
            if (o("WAWebSignupGreetingActionShared").isChatSafeToDelete(t, a)) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[maybeCleanupSignupAGM] deleting signup chat"
                ])));
                o("WAWebSignupGreetingActionShared").deleteSignupChat(t);
            } else {
                const i = [];
                for (const l of a){
                    t.msgs.remove(l);
                    i.push(l.id.toString());
                }
                if (i.length > 0) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[maybeCleanupSignupAGM] removing ",
                        " AGMs from existing chat"
                    ])), String(i.length));
                    o("WAWebDBMessageDelete").removeMessagesFromHistory(i, {
                        deleteAssociatedMsgs: false
                    }).catch((e)=>{
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[maybeCleanupSignupAGM] failed to remove from history ",
                            ""
                        ])), e);
                    });
                }
            }
            o("WAWebSignupGreetingActionShared").signupCardInjectedChats.delete(t.id.toString());
        }
    }
    l.resetSignupCardInjectedChats = c;
    l.cancelInFlightSignups = m;
    l.maybeCleanupSignupAGM = p;
}, 98);