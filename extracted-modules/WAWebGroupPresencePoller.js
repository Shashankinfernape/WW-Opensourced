__d("WAWebGroupPresencePoller", [
    "WAWebContactPresenceBridge",
    "WAWebGroupPresenceUtils",
    "WAWebPresenceCollection"
], function(t, n, r, o, a, i, l) {
    const e = 30000;
    const s = new Map;
    const u = new Map;
    function c(e) {
        if (!o("WAWebGroupPresenceUtils").isLargeGroupPresenceEnabled() || !o("WAWebGroupPresenceUtils").isGroupEligibleForPresence(e)) {
            return false;
        }
        const e_groupMetadata = e.groupMetadata;
        if (e_groupMetadata == null) {
            return false;
        }
        const length = e_groupMetadata.participants.length;
        return length > o("WAWebGroupPresenceUtils").getSmallGroupPresenceThreshold() && length <= o("WAWebGroupPresenceUtils").WEB_LARGE_MAX;
    }
    function d(e) {
        o("WAWebContactPresenceBridge").subscribeGroupPresence(e);
    }
    function m(e, t) {
        const n = function() {
            if (e.chatActive === false) {
                _(t);
            }
        };
        e.on("change:chatActive", n);
        u.set(t, function() {
            e.off("change:chatActive", n);
        });
    }
    function p(t) {
        if (c(t)) {
            const n = t.id.toString();
            if (!s.has(n)) {
                d(t.id);
                const r = self.setInterval(function() {
                    return d(t.id);
                }, e);
                s.set(n, r);
                const a = o("WAWebPresenceCollection").PresenceCollection.get(n);
                if (a != null) {
                    m(a, n);
                }
            }
        }
    }
    function _(e) {
        const t = e;
        const n = s.get(t);
        if (n != null) {
            self.clearInterval(n);
            s.delete(t);
        }
        const r = u.get(t);
        if (r != null) {
            r();
            u.delete(t);
        }
    }
    function f() {
        for (const e of s.values()){
            self.clearInterval(e);
        }
        s.clear();
        for (const t of u.values()){
            t();
        }
        u.clear();
    }
    function g(e) {
        return s.has(e);
    }
    l.LARGE_GROUP_POLL_INTERVAL_MS = e;
    l.startLargeGroupPresencePoll = p;
    l.stopLargeGroupPresencePoll = _;
    l.stopAllLargeGroupPresencePolls = f;
    l.hasActivePollForTesting = g;
}, 98);