__d("WAWebMmSignalSharingExpirationWindowWorker", [
    "Promise",
    "WALogger",
    "WAPromiseQueue",
    "WAWebDbErrors",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = new Map;
    const d = new (o("WAPromiseQueue")).PromiseQueueMap;
    function m() {
        c.clear();
    }
    function p(e, t) {
        if (o("WAWebMmSignalSharingExpirationWindowUtils").updateMmSignalSharingExpirationWindowImpl(e, t)) {
            c.set(e.id.toString(), {
                contextInfo: t,
                msg: e
            });
        }
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = new Set(t);
            const o = [];
            for (const a of e){
                const i = c.get(a);
                if (i != null) {
                    c.delete(a);
                    if (r.has(a)) {
                        o.push(g(i));
                    }
                }
            }
            yield (u || (u = n("Promise"))).all(o);
        });
        return f.apply(this, arguments);
    }
    function g({ contextInfo, msg }) {
        return d.enqueue(msg.id.remote.toString(), function() {
            return h(msg, contextInfo);
        }).catch((t)=>{
            if (!(t instanceof o("WAWebDbErrors").DbOnLogoutAbort || t instanceof o("WAWebDbErrors").DbClosedOnTakeover || t instanceof o("WAWebDbErrors").DbNotFoundOnTakeover)) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[worker] failed to persist MM signal-sharing expiration window"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("worker-mm-signal-sharing-expiration-window-persist-failed");
            }
        });
    }
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, contextInfo) {
            const n = e.id.remote.toString();
            const r = o("WAWebSchemaChat").getChatTable();
            const a = yield r.get(n);
            if (a == null) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[worker] chat row missing when persisting MM signal-sharing expiration window"
                ]))).sendLogs("worker-mm-signal-sharing-expiration-window-missing-chat");
                return;
            }
            const i = o("WAWebMmSignalSharingExpirationWindowUtils").getMmSignalSharingExpirationWindow({
                contextInfo,
                mmSignalSharingExpirationWindow: a?.mmSignalSharingExpirationWindow,
                msgKey: e.id,
                msgTimeClient: e.clientReceivedTsMillis != null ? Math.round(e.clientReceivedTsMillis / o("WAWebMmSignalSharingExpirationWindowUtils").MILLIS_PER_SECOND) : e.t,
                msgTimeServer: e.t
            });
            if (i != null) {
                yield r.merge(n, {
                    id: n,
                    mmSignalSharingExpirationWindow: i
                });
            }
        });
        return y.apply(this, arguments);
    }
    l.resetMmSignalSharingExpirationWindowWorker = m;
    l.updateMmSignalSharingExpirationWindowWorker = p;
    l.persistPendingMmSignalSharingExpirationWindows = _;
}, 98);