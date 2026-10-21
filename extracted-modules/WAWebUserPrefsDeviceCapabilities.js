__d("WAWebUserPrefsDeviceCapabilities", [
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    const e = {
        chatLockSupportLevel: o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$ChatLockSupportLevel.NONE,
        aiThread: {
            supportLevel: o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.NONE
        }
    };
    function s(t) {
        const l = babelHelpers.extends({
            chatLockSupportLevel: t.chatLockSupportLevel ?? e.chatLockSupportLevel,
            aiThread: {
                supportLevel: t.aiThread.supportLevel ?? o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.NONE
            }
        }, t.bizAiSettingsSync?.handoffRemovalTimingEnabled === true ? {
            bizAiSettingsSync: {
                handoffRemovalTimingEnabled: true
            }
        } : null);
        const s = t.newsletterChatsMigration;
        if (s == null) {
            return l;
        }
        return babelHelpers.extends({}, l, {
            newsletterChatsMigration: {
                countdownEndsAt: s.countdownEndsAt ?? null,
                effectiveMigrated: s.effectiveMigrated ?? null,
                rolledBack: s.rolledBack ?? null
            }
        });
    }
    function u(t) {
        const a = (typeof t === "object" && t != null && typeof t.chatLockSupportLevel === "number" ? o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$ChatLockSupportLevel.cast(t.chatLockSupportLevel) : null) ?? e.chatLockSupportLevel;
        const i = (typeof t === "object" && t != null && t.aiThread != null && typeof t.aiThread.supportLevel === "number" ? o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.cast(t.aiThread.supportLevel) : null) ?? o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.NONE;
        const l = typeof t === "object" && t != null && t.bizAiSettingsSync != null && typeof t.bizAiSettingsSync.handoffRemovalTimingEnabled === "boolean" && t.bizAiSettingsSync.handoffRemovalTimingEnabled;
        const s = c(t);
        const u = babelHelpers.extends({
            chatLockSupportLevel: a,
            aiThread: {
                supportLevel: i
            }
        }, l ? {
            bizAiSettingsSync: {
                handoffRemovalTimingEnabled: true
            }
        } : null);
        if (s != null) {
            return babelHelpers.extends({}, u, {
                newsletterChatsMigration: s
            });
        }
        return u;
    }
    function c(e) {
        const t = typeof e === "object" && e != null ? e.newsletterChatsMigration : null;
        if (typeof t !== "object" || t == null) {
            return null;
        }
        return {
            countdownEndsAt: typeof t.countdownEndsAt === "number" ? t.countdownEndsAt : null,
            effectiveMigrated: typeof t.effectiveMigrated === "boolean" ? t.effectiveMigrated : null,
            rolledBack: typeof t.rolledBack === "boolean" ? t.rolledBack : null
        };
    }
    function d(e) {
        switch(e){
            case "self":
                return o("WAWebUserPrefsKeys").UserPrefs.DeviceCapabilities;
            case "primary":
                return o("WAWebUserPrefsKeys").UserPrefs.PrimaryDeviceCapabilities;
        }
    }
    function m(e, t) {
        const n = s(e);
        r("WAWebUserPrefsStore").setUser(d(t), n, {
            shouldWriteToIdb: false
        });
    }
    function p(e) {
        const t = r("WAWebUserPrefsStore").getUser(d(e));
        return u(t);
    }
    function _(e) {
        return {
            chatLockSupportLevel: e.chatLockSupportLevel ?? o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$ChatLockSupportLevel.NONE,
            aiThread: {
                supportLevel: e.aiThread?.supportLevel ?? o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.NONE
            },
            bizAiSettingsSync: e.bizAiSettingsSync
        };
    }
    function f(e, t) {
        const n = p(t);
        const r = babelHelpers.extends({}, n, e);
        m(r, t);
        return r;
    }
    function g() {
        return p("primary");
    }
    l.mapProtobufToAllDeviceCapabilities = _;
    l.mergeDeviceCapabilitiesToStorage = f;
    l.getPrimaryDeviceCapabilitiesFromLocalStorage = g;
}, 98);