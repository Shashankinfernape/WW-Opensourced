__d("WAWebContactSyncLogger", [
    "WAWebBackendErrors",
    "WAWebContactSyncEventWamEvent",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = {
        UNKNOWN: 0,
        PERIODIC_SYNC: 6,
        CONTACT_SAVE: 7,
        CONVERSATION_CONTACT_ADD: 14,
        CONTACT_MUTATION_CONTACT_DELETE: 26,
        DM_FORCE_REFRESH: 41,
        STATUS_FORCE_REFRESH: 42,
        DEVICE_REQUEST: 48,
        BOT_REQUEST: 49,
        BUSINESS_CONTACT_CHAT: 56,
        DEBUG_TOOL: 61,
        DEBUG_FULL: 62,
        DEEPLINK: 101,
        CHAT_OPEN: 102,
        PRIVACY_MODE_CHANGE: 103,
        BUSINESS_BROADCAST: 104,
        USERNAME_KEY_VERIFICATION: 105,
        UNKNOWN_CONTACT_SEARCH: 106,
        UNKNOWN_CONTACT_SEARCH_GLOBAL: 107,
        UNKNOWN_CONTACT_SEARCH_GROUP: 108,
        UNKNOWN_CONTACT_SEARCH_CONTACT_LIST: 109,
        UNKNOWN_CONTACT_SEARCH_NEW_CHAT: 110,
        UNKNOWN_CONTACT_SEARCH_DIALER: 111,
        CUSTOMER_MANAGER_IMPORT: 112
    };
    const s = {
        CONTACT: 0,
        STATUS: 2,
        PICTURE: 3,
        BUSINESS: 4,
        DEVICE: 5,
        DISAPPEARING_MODE: 7,
        LID: 8,
        BOT: 9,
        USERNAME: 10
    };
    function u() {
        return {
            statusChange: 0,
            deviceChange: 0,
            businessChange: 0,
            disappearingModeChange: 0
        };
    }
    function c(e) {
        return {
            statusChange: e.statusChange ?? 0,
            deviceChange: e.deviceChange ?? 0,
            businessChange: e.businessChange ?? 0,
            disappearingModeChange: e.disappearingModeChange ?? 0
        };
    }
    function d(e, t) {
        return `${e}_${t}`.toUpperCase();
    }
    const m = {
        contact: s.CONTACT,
        status: s.STATUS,
        picture: s.PICTURE,
        business: s.BUSINESS,
        devices: s.DEVICE,
        disappearing_mode: s.DISAPPEARING_MODE,
        lid: s.LID,
        bot: s.BOT,
        username: s.USERNAME
    };
    function p(protocols) {
        let t = 0;
        for (const n of protocols){
            const r = n.getName();
            if (m[r] != null) {
                t |= 1 << m[r];
            }
        }
        return t;
    }
    function _(error) {
        let t = 0;
        for (const n of Object.keys(error)){
            if (error[n] && m[n] != null) {
                t |= 1 << m[n];
            }
        }
        return t;
    }
    const f = (()=>{
        function e() {}
        const e_prototype = e.prototype;
        e_prototype.createEventContext = function(t) {
            return {
                startTimestamp: Date.now(),
                syncType: t.syncType,
                requestOrigin: t.requestOrigin,
                requestedCount: t.requestedCount,
                requestProtocolBitmask: p(t.protocols)
            };
        };
        e_prototype.logSuccess = function(t, n, r) {
            const e = Date.now();
            const a = _(n.error);
            const i = new (o("WAWebContactSyncEventWamEvent")).ContactSyncEventWamEvent({
                contactSyncType: t.syncType,
                contactSyncRequestOrigin: t.requestOrigin,
                contactSyncSuccess: true,
                contactSyncNoop: t.requestedCount === 0,
                contactSyncStartTimestamp: Math.round(t.startTimestamp / 1000),
                contactSyncEndTimestamp: Math.round(e / 1000),
                contactSyncLatency: e - t.startTimestamp,
                contactSyncRequestedCount: t.requestedCount,
                contactSyncResponseCount: n.list.length,
                contactSyncRequestProtocol: t.requestProtocolBitmask,
                contactSyncFailureProtocol: a,
                contactSyncStatusResponseNew: r?.statusChange,
                contactSyncDeviceResponseNew: r?.deviceChange,
                contactSyncBusinessResponseNew: r?.businessChange,
                contactSyncDisappearingModeResponseNew: r?.disappearingModeChange
            });
            i.commit();
        };
        e_prototype.logFailure = function(t, n, r, a) {
            const i = Date.now();
            const l = r ? _(r.error) : 0;
            const contactSyncErrorCode = n === 429 && a != null ? a : n;
            const u = new (o("WAWebContactSyncEventWamEvent")).ContactSyncEventWamEvent({
                contactSyncType: t.syncType,
                contactSyncRequestOrigin: t.requestOrigin,
                contactSyncSuccess: false,
                contactSyncNoop: false,
                contactSyncErrorCode,
                contactSyncStartTimestamp: Math.round(t.startTimestamp / 1000),
                contactSyncEndTimestamp: Math.round(i / 1000),
                contactSyncLatency: i - t.startTimestamp,
                contactSyncRequestedCount: t.requestedCount,
                contactSyncResponseCount: r?.list.length ?? 0,
                contactSyncRequestProtocol: t.requestProtocolBitmask,
                contactSyncFailureProtocol: l
            });
            u.commit();
        };
        e_prototype.executeWithLogging = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                try {
                    return yield t();
                } catch (error) {
                    const r = error instanceof o("WAWebBackendErrors").ServerStatusCodeError ? error.statusCode : undefined;
                    this.logFailure(e, r, undefined, n);
                    throw error;
                }
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return e;
    })();
    const g = new f;
    l.SYNC_REQUEST_ORIGIN = e;
    l.createUpdateCounter = u;
    l.createUpdateCounterWith = c;
    l.getSyncTypeString = d;
    l.contactSyncLogger = g;
}, 98);