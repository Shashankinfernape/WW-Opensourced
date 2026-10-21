__d("WAWebGalaxyFlowsSessionsCache", [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebLruCacheMap"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const sizeLimit = 1000;
    const s = new (o("WAWebLruCacheMap")).LruCacheMap({
        sizeLimit
    });
    function u() {
        return new (o("WAWebLruCacheMap")).LruCacheMap({
            sizeLimit: o("WAWebABProps").getABPropConfigValue("extensions_user_report_store_max_data_max_sessions_per_message")
        });
    }
    function c() {
        return new (o("WAWebLruCacheMap")).LruCacheMap({
            sizeLimit: o("WAWebABProps").getABPropConfigValue("extensions_user_report_store_max_data_exchanges_per_session")
        });
    }
    function d(e, t) {
        const n = `${e}_${t}`;
        const r = o("WATimeUtils").unixTime();
        const a = `session_${n}_${r.toString()}`;
        let i = s.get(n);
        if (i == null) {
            i = {
                timestamp: r,
                sessions: u(),
                latestSessionId: null
            };
            s.set(n, i);
        }
        const l = {
            timestamp: r,
            sessionData: c()
        };
        i.sessions.set(a, l);
        i.timestamp = r;
        i.latestSessionId = a;
        return a;
    }
    function m(messageId, sessionId) {
        const n = `${messageId}_${sessionId}`;
        const r = s.get(n);
        if (r == null) {
            return null;
        }
        const r_latestSessionId = r.latestSessionId;
        if (r_latestSessionId == null) {
            return null;
        }
        return r.sessions.get(r_latestSessionId);
    }
    function p({ data, messageId, screenName, sessionId }) {
        const i = m(messageId, sessionId);
        if (i != null) {
            const l = o("WATimeUtils").unixTime();
            const s = {
                timestamp: l,
                screenName,
                data
            };
            i.sessionData.set(`navigation_${l.toString()}`, s);
        }
    }
    function _(e, t) {
        const n = `${e}_${t}`;
        const r = s.get(n);
        if (r == null) {
            return [];
        }
        const o = [];
        r.sessions.iterateOnEach(function(e) {
            e.sessionData.iterateOnEach(function(e) {
                o.push({
                    screenName: e.screenName,
                    timestamp: e.timestamp,
                    data: e.data
                });
            });
        });
        return o;
    }
    l.GalaxyFlowSessionsCache = s;
    l.createFlowSession = d;
    l.addDataToLatestSession = p;
    l.getFlowDataForMessage = _;
}, 98);