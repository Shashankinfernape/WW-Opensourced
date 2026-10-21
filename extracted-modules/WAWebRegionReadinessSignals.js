__d("WAWebRegionReadinessSignals", [
    "Promise",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebEventsWaitForBbEvent",
    "WAWebFrontendChatGetters",
    "cr:4145"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = (e || (e = n("Promise"))).resolve();
    const u = 1000;
    function c(e, t) {
        let n = null;
        return {
            getPromise: function() {
                if (e()) {
                    return s;
                }
                if (n == null) {
                    n = t().catch(()=>{});
                }
                return n;
            }
        };
    }
    function d(t) {
        const r = new AbortController;
        return (e || (e = n("Promise"))).race(t(r.signal)).finally(()=>{
            r.abort();
        });
    }
    function m() {
        if (o("WAWebCmd").Cmd.isOfflineDeliveryEnd) {
            return true;
        }
        const e = o("WAWebChatCollection").ChatCollection.filter(o("WAWebFrontendChatGetters").getShouldAppearInList);
        return e.length > 0 && !e.some(o("WAWebChatGetters").getPendingInitialLoading);
    }
    function p(t) {
        return new (e || (e = n("Promise")))(function(a) {
            let i = false;
            const l = function() {
                if (!i) {
                    i = true;
                    (e || (e = n("Promise"))).resolve().then(()=>{
                        i = false;
                        if (!t.aborted && m()) {
                            a(undefined);
                        }
                    });
                }
                return false;
            };
            r("WAWebEventsWaitForBbEvent")(o("WAWebChatCollection").ChatCollection, "add change:msgsLength change:msgsChanged change:pendingInitialLoading change:t sort reset", l, t).catch(()=>{});
        });
    }
    const _ = c(m, ()=>d((e)=>[
                p(e),
                r("WAWebEventsWaitForBbEvent")(o("WAWebCmd").Cmd, "on_initial_chat_synced_from_bridge", undefined, e),
                r("WAWebEventsWaitForBbEvent")(o("WAWebCmd").Cmd, "offline_delivery_end_from_bridge", undefined, e)
            ]));
    function f() {
        if ((n("cr:4145") == null ? undefined : n("cr:4145").getChatlistRowsHold()) != null) {
            return false;
        }
        return g || m();
    }
    var g = false;
    let h = function() {};
    const y = new e(function(e) {
        h = e;
    });
    function C(e) {
        if (e) {
            g = true;
            h();
        }
    }
    function b() {
        return g && !m();
    }
    function v(t) {
        if (!t || document.visibilityState === "hidden") {
            return s;
        }
        return new (e || (e = n("Promise")))(function(e) {
            let t = null;
            let n = null;
            let r = false;
            const o = function() {
                if (!r) {
                    r = true;
                    if (t != null) {
                        globalThis.cancelAnimationFrame(t);
                    }
                    if (n != null) {
                        window.clearTimeout(n);
                    }
                    document.removeEventListener("visibilitychange", a);
                    e();
                }
            };
            var a = function() {
                if (document.visibilityState === "hidden") {
                    o();
                }
            };
            document.addEventListener("visibilitychange", a);
            n = window.setTimeout(o, u);
            t = globalThis.requestAnimationFrame(function() {
                t = globalThis.requestAnimationFrame(o);
            });
        });
    }
    const S = c(f, ()=>(e || (e = n("Promise"))).race([
            y,
            _.getPromise()
        ]));
    const R = {
        getPromise: function() {
            return (n("cr:4145") == null ? undefined : n("cr:4145").getChatlistRowsHold()) ?? S.getPromise();
        }
    };
    l.createReadinessSignal = c;
    l.raceReadinessSubscriptions = d;
    l.isChatlistReady = m;
    l.chatlistReadySignal = _;
    l.isChatlistRowsReady = f;
    l.markChatlistRowsReady = C;
    l.isChatlistRowsLoading = b;
    l.waitForChatlistRowsPaint = v;
    l.chatlistRowsReadySignal = R;
}, 98);