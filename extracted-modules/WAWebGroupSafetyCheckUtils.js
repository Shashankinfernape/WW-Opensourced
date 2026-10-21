__d("WAWebGroupSafetyCheckUtils", [
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebFrontendMsgGetters",
    "WAWebGroupSafetyCheckModalLoadable",
    "WAWebGroupSafetyCheckModalLoggingUtils",
    "WAWebModalManager",
    "WAWebMuteGetters",
    "WAWebNotificationHelpers",
    "WAWebStateUtils",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        let t;
        if (!e) {
            return false;
        }
        const n = o("WAWebStateUtils").unproxy(e);
        return o("WAWebChatGetters").getIsGroup(n) && !!((t = n.groupMetadata) != null && t.groupSafetyCheck);
    }
    function c(e, t, n) {
        const r = n === true && !t;
        const a = n === false && !t;
        if (r) {
            o("WAWebGroupSafetyCheckModalLoggingUtils").logGroupSafetyCheckEnabledEvent({
                groupJid: e.id.toJid(),
                initiallyMuted: o("WAWebMuteGetters").getIsMuted(e.mute)
            });
        }
        _(e, r, a);
    }
    function d(e, t) {
        const n = o("WAWebStateUtils").unproxy(e);
        const n_groupMetadata = n.groupMetadata;
        if (n_groupMetadata) {
            const a = n_groupMetadata.groupSafetyCheck;
            if (a === true) {
                const i = !t;
                _(n, i, !i);
            }
        }
    }
    function m(e) {
        o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebGroupSafetyCheckModalLoadable").GroupSafetyCheckModalLoadable, {
            chat: e
        }), {
            transition: "modal-flow"
        });
    }
    function p(e) {
        const t = o("WAWebFrontendMsgGetters").getChat(e);
        return o("WAWebNotificationHelpers").isMeUserMentionedOrQuoted(e) && f(t);
    }
    function _(e, t, n) {
        if (t) {
            o("WAWebCmd").Cmd.muteChat(e, t, false, false);
        } else if (n) {
            o("WAWebCmd").Cmd.muteChat(e, false, false, false);
        }
    }
    function f(e) {
        return u(e) && !e.isTrusted();
    }
    l.isGroupSafetyChecked = u;
    l.handleGroupSafetyCheckStateUpdate = c;
    l.handleIsTrustedChangeForGroupSafety = d;
    l.openGroupSafetyCheckModal = m;
    l.shouldMuteMentionWhileGroupSafetyChecked = p;
    l.shouldShowGroupSafetyCheckUI = f;
}, 98);