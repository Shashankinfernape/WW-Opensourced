__d("WAWebMsmsgMsgSecretCache", [
    "WAWebBackendEventBus",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey"
], function(t, n, r, o, a, i, l) {
    class e {
        constructor(){
            var e = this;
            this.cache = new Map;
            o("WAWebBackendEventBus").BackendEventBus.onLogout(function() {
                return e.clearCache();
            });
        }
        addMsmsgMsgSecretToCache(t, n) {
            this.cache.set(t, n);
        }
        getMsmsgMsgSecretFromCache(t) {
            return this.cache.get(t);
        }
        clearCache() {
            this.cache = new Map;
        }
    }
    function s(participants, t) {
        if (participants != null && participants.length > 0) {
            return {
                isLegacySingular: false,
                participants
            };
        }
        if (t != null) {
            return {
                isLegacySingular: true,
                participants: [
                    t
                ]
            };
        }
        return null;
    }
    class u {
        constructor(){
            var e = this;
            this.cache = new Map;
            o("WAWebBackendEventBus").BackendEventBus.onLogout(function() {
                e.cache = new Map;
            });
        }
        addMsmsgBotGroupGossipDataToCache(t, participants, isLegacySingular) {
            this.cache.set(t, {
                isLegacySingular,
                participants
            });
        }
        getMsmsgBotGroupGossipDataFromCache({ fromMe, id, participant, remote }) {
            const l = new (r("WAWebMsgKey"))({
                fromMe,
                remote,
                id,
                participant
            }).toString();
            let s = this.cache.get(l);
            if (s == null) {
                const c = new (r("WAWebMsgKey"))({
                    fromMe,
                    remote,
                    id,
                    participant: o("WAWebLidMigrationUtils").toPn(participant) ?? participant
                }).toString();
                s = this.cache.get(c);
            }
            return s;
        }
        deleteMsmsgBotGroupGossipDataFromCache(t) {
            this.cache.delete(t);
        }
    }
    function c(e, t, n) {
        if (e == null) {
            return null;
        }
        const { isLegacySingular, participants } = e;
        if (isLegacySingular) {
            return participants[0] ?? null;
        }
        if (t == null || !t.isFbidBot()) {
            return null;
        }
        const t_user = t.user;
        if (n) {
            const l = participants.find((e)=>e.user === t_user);
            if (l != null) {
                return l;
            }
        }
        return null;
    }
    const d = new e;
    const m = new u;
    l.createBotGroupGossipData = s;
    l.getBotGroupParticipantForResponse = c;
    l.msmsgMsgSecretCache = d;
    l.msmsgBotGroupGossipDataCache = m;
}, 98);