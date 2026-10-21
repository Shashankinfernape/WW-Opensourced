__d("WAWebSMBUserJourneyLogger", [
    "WAWebGetSharedSessionId",
    "WAWebSmbUserJourneyWamEvent",
    "WAWebUnifiedSession"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = (()=>{
        function e() {
            this.$1 = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId() ?? o("WAWebGetSharedSessionId").getSharedSessionId();
            this.$2 = 0;
            this.$3 = new Map;
            this.$4 = new Map;
        }
        const t = e.prototype;
        t.setEntryPoint = function(t, n) {
            this.$4.delete(n);
            this.$3.set(n, t);
        };
        t.getEntryPoint = function(t) {
            return this.$3.get(t);
        };
        t.setEntryPointDetails = function(t, n) {
            this.$4.set(n, t);
        };
        t.log = function(t) {
            const r = new (o("WAWebSmbUserJourneyWamEvent")).SmbUserJourneyWamEvent;
            r.smbFeatureName = t.featureName;
            r.smbUserActionType = t.userActionType;
            r.surface = t.surface;
            r.smbUserSessionId = this.$1;
            r.seqId = this.$2;
            const a = t.entryPoint;
            if (a != null && t.stickyEntryPoint !== false) {
                const i = this.$3.get(t.featureName);
                if (i != null && i !== a && t.entryPointDetails == null) {
                    this.$4.delete(t.featureName);
                }
                this.$3.set(t.featureName, a);
            }
            const l = t.stickyEntryPoint === false ? t.entryPoint : t.entryPoint ?? this.$3.get(t.featureName);
            if (l != null) {
                r.entryPoint = l;
            }
            if (t.entryPointDetails != null && t.stickyEntryPoint !== false) {
                this.$4.set(t.featureName, t.entryPointDetails);
            }
            const s = t.stickyEntryPoint === false ? t.entryPointDetails : t.entryPointDetails ?? this.$4.get(t.featureName);
            if (s != null) {
                r.entryPointDetails = s;
            }
            if (t.userActionTarget != null) {
                r.userActionTarget = t.userActionTarget;
            }
            if (t.prevSurface != null) {
                r.prevSurface = t.prevSurface;
            }
            if (t.extraAttributes != null) {
                r.extraAttributes = JSON.stringify(t.extraAttributes);
            }
            if (t.bbTier != null) {
                r.bbTier = t.bbTier;
            }
            r.commit();
            this.$2 += 1;
        };
        return e;
    })();
    const s = new e;
    l.WAWebSMBUserJourneyLogger = e;
    l.SMBUserJourneyLogger = s;
}, 98);