__d("WAWebShouldUpdateLastAddOnPreview", [
    "WAWebBackendApi",
    "WAWebDBUpdateLastAddOnPreviewChat",
    "WAWebLastAddOnDBSerialization",
    "WAWebMsgKey",
    "WAWebReactionsBEUtils",
    "WAWebSchemaChat",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = r("WAWebMsgKey").fromString(e.parentMsgKey);
        if (e.type === "comment") {
            return true;
        }
        return (o("WAWebUserPrefsMeUser").isSerializedWidMe(e.sender) || t.fromMe) && !e.isOrphan;
    }
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Map;
            const n = yield o("WAWebSchemaChat").getChatTable().bulkGet(e);
            n.forEach((e)=>{
                if (e != null) {
                    t.set(e.id.toString(), e.chatlistPreview ?? e.lastReactionPreview);
                }
            });
            return t;
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        const t = r("WAWebMsgKey").fromString(e.parentMsgKey);
        return t.remote.toString();
    }
    function d(e, t) {
        if (g(e)) {
            return e.sender === t.sender && e.parentMsgKey === t.parentMsgKey && e.timestamp >= t.timestamp;
        }
        return false;
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = t.filter((t)=>e(t));
            const a = new Map;
            if (!n.length) {
                return a;
            }
            const i = new Set(n.map((e)=>{
                const t = r("WAWebMsgKey").fromString(e.parentMsgKey);
                return t.remote.toString();
            }));
            const l = yield s(Array.from(i));
            n.forEach((e)=>{
                const t = c(e);
                const n = l.get(t);
                const r = a.get(t);
                const i = r ?? n;
                if (g(e)) {
                    if (i && d(e, i) && e.timestamp >= i.timestamp) {
                        a.set(t, undefined);
                    }
                } else if (i) {
                    if (e.timestamp >= i.timestamp) {
                        a.set(t, o("WAWebLastAddOnDBSerialization").lastAddOnPreviewFromCandidate(e));
                    }
                } else {
                    a.set(t, o("WAWebLastAddOnDBSerialization").lastAddOnPreviewFromCandidate(e));
                }
            });
            return a;
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield m(e);
            if (t.size > 0) {
                yield o("WAWebDBUpdateLastAddOnPreviewChat").updateDatabaseForLastAddOnPreview(t);
                o("WAWebBackendApi").frontendFireAndForget("updateChatLastAddOnPreview", {
                    chatMap: t
                });
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        if (e.type === "poll_vote") {
            return e.selectedOptionsCount === 0;
        }
        return e.reactionText === o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT;
    }
    l.isAddOnPreviewUpdateCandidate = e;
    l.bulkGetChatLastAddOnPreviewMap = s;
    l.filterChatsWithAddOnPreviewUpdates = m;
    l.filterAndUpdateChatPreviews = _;
}, 98);