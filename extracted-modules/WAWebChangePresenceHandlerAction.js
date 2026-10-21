__d("WAWebChangePresenceHandlerAction", [
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebLimitSharingGatingUtils",
    "WAWebPresenceCollection",
    "WAWebPresenceGetters",
    "WAWebUserPrefsMeUser"
], function(t, n, r, o, a, i, l) {
    const e = 25000;
    function s(e, t = true) {
        const n = e.id;
        if (!u(e) && !o("WAWebUserPrefsMeUser").isMeAccount(n)) {
            const r = o("WAWebPresenceCollection").PresenceCollection.get(n);
            if (r) {
                d(r, e);
                if (t) {
                    r.set({
                        stale: false
                    });
                }
            }
        }
    }
    function u(e) {
        if (e.type !== "typing" && e.type !== "recording_audio") {
            return false;
        }
        const n = o("WAWebChatCollection").ChatCollection.get(e.id);
        return n != null && n.acp2Setting?.enabled === true && o("WAWebLimitSharingGatingUtils").isAcp2EnabledForChat(n);
    }
    function c(e, t) {
        const e_type = e.type;
        if (e_type === "typing" || e_type === "recording_audio") {
            e.type = t.isOnline ? "available" : "unavailable";
        }
    }
    function d(t, n) {
        const r = n.type === "typing";
        let a = false;
        if (typeof n.type === "undefined") {
            n.type = t.chatstate.type || "unavailable";
        } else if (n.type === "idle") {
            a = true;
            n.type = t.isOnline ? "available" : "unavailable";
        }
        if (o("WAWebPresenceGetters").getIsGroup(t) && n.type !== "available" && !a) {
            n.updateTime = Date.now();
        }
        let i;
        if (o("WAWebPresenceGetters").getIsGroup(t)) {
            const l = n.participant;
            if (l == null) {
                return;
            }
            const s = n.id;
            const u = o("WAWebChatCollection").ChatCollection.get(s);
            if (u == null || r && m(l, u)) {
                return;
            }
            n.id = l;
            n.participant = undefined;
            i = t.chatstates.gadd(n.id);
        } else {
            i = t.chatstate;
        }
        if (!a || i.type === "typing" || i.type === "recording_audio") {
            i.set(n);
        }
        if (i.expireTimerId != null) {
            self.clearTimeout(i.expireTimerId);
        }
        if (i.type === "typing" || i.type === "recording_audio") {
            i.expireTimerId = self.setTimeout(function() {
                return c(i, t);
            }, e);
        } else {
            i.expireTimerId = undefined;
        }
        const forceDisplay = t.forceDisplay || t.isOnline || o("WAWebPresenceGetters").getIsUser(t) && !t.chatstate.deny;
        t.set({
            hasData: true,
            isSubscribed: true,
            forceDisplay
        });
    }
    function m(e, { groupMetadata }) {
        return o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e) && groupMetadata != null && !groupMetadata.stale && groupMetadata.participants.get(e) == null && o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    l.default = s;
}, 98);