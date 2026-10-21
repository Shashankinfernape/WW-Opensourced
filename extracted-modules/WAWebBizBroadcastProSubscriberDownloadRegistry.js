__d("WAWebBizBroadcastProSubscriberDownloadRegistry", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = "subscriber_downloads_changed";
    const s = 100;
    const u = new (r("WAWebEventEmitter"));
    const c = new Map;
    function d() {
        return Array.from(c.values());
    }
    function m(e) {
        return c.get(e);
    }
    function p() {
        for (const e of c.values()){
            if (e.status === "preparing") {
                return true;
            }
        }
        return false;
    }
    function _() {
        let t = false;
        for (const n of Array.from(c.values())){
            if (n.status !== "preparing") {
                t = y(n.key) || t;
            }
        }
        if (t) {
            u.trigger(e);
        }
    }
    function f(t) {
        c.set(t.key, t);
        u.trigger(e);
    }
    function g(t, n) {
        const r = c.get(t);
        if (r != null) {
            const o = babelHelpers.extends({}, r, n);
            c.set(t, o);
            if (!C(r, o)) {
                u.trigger(e);
            }
        }
    }
    function h(t) {
        if (y(t)) {
            u.trigger(e);
        }
    }
    function y(e) {
        return c.delete(e);
    }
    function C(e, t) {
        return e.cdnUrl === t.cdnUrl && e.completionPercentage === t.completionPercentage && e.exportId === t.exportId && e.filename === t.filename && e.key === t.key && e.poolName === t.poolName && e.status === t.status;
    }
    function b(e) {
        return Math.floor(Math.min(Math.max(e, 0), s - 1));
    }
    function v(e, t) {
        const o = c.get(e)?.completionPercentage ?? 0;
        return Math.min(Math.max(o, t), s);
    }
    l.SUBSCRIBER_DOWNLOADS_CHANGED = e;
    l.COMPLETE_PERCENTAGE = s;
    l.SubscriberDownloadEmitter = u;
    l.getSubscriberDownloads = d;
    l.getSubscriberDownload = m;
    l.hasPreparingDownload = p;
    l.removeSettledDownloads = _;
    l.putSubscriberDownload = f;
    l.patchSubscriberDownload = g;
    l.removeSubscriberDownload = h;
    l.getPreparingPercentage = b;
    l.clampProgress = v;
}, 98);