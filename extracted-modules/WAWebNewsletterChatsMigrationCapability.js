__d("WAWebNewsletterChatsMigrationCapability", [
    "WALongInt",
    "WAWebEventEmitter",
    "WAWebUserPrefsDeviceCapabilities"
], function(t, n, r, o, a, i, l) {
    const e = new (r("WAWebEventEmitter"));
    const s = {
        countdownEndsAt: null,
        effectiveMigrated: null,
        rolledBack: null
    };
    function u(e) {
        const r = e?.newsletterChatsMigration;
        return {
            countdownEndsAt: o("WALongInt").maybeNumber(r?.countdownEndsAt),
            effectiveMigrated: r?.effectiveMigrated ?? null,
            rolledBack: r?.rolledBack ?? null
        };
    }
    function c() {
        return o("WAWebUserPrefsDeviceCapabilities").getPrimaryDeviceCapabilitiesFromLocalStorage().newsletterChatsMigration ?? s;
    }
    function d() {
        return c().effectiveMigrated === true;
    }
    function m(t) {
        const n = c();
        if (!p(n, t)) {
            o("WAWebUserPrefsDeviceCapabilities").mergeDeviceCapabilitiesToStorage({
                newsletterChatsMigration: t
            }, "primary");
            e.trigger("change");
        }
        return n;
    }
    function p(e, t) {
        return e.countdownEndsAt === t.countdownEndsAt && e.effectiveMigrated === t.effectiveMigrated && e.rolledBack === t.rolledBack;
    }
    l.newsletterChatsMigrationEmitter = e;
    l.getNewsletterChatsMigrationFromCapabilities = u;
    l.getPrimaryNewsletterChatsMigration = c;
    l.getPrimaryHasMigratedNewsletterChats = d;
    l.savePrimaryNewsletterChatsMigration = m;
}, 98);