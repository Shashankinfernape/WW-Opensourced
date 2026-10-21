__d("WAWebMmsClientPollMediaHosts", [
    "Promise",
    "WAPromiseDelays",
    "WARetryPromise",
    "WAWebMediaHostsMaybeSwitchHost",
    "WAWebMmsMediaTypes",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 300000;
    function u(e, t) {
        return e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT && t > o("WAWebMediaHostsMaybeSwitchHost").THRESHOLD;
    }
    function c(e, t) {
        return e === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT && (t ?? 0) > o("WAWebMediaHostsMaybeSwitchHost").THRESHOLD;
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let a = t.connectionBlock;
            yield o("WAPromiseDelays").delayMs(s, t.signal);
            return r("WARetryPromise")(function({ retry: i }) {
                return new (e || (e = n("Promise")))(function(e) {
                    return t.getMediaHosts().then(({ fallbackHost: r, selectedHost: l })=>{
                        const u = {
                            selectedHost: l,
                            fallbackHost: r
                        };
                        const c = t.getRemainingBytes();
                        if (c == null) {
                            return i(s);
                        }
                        const d = o("WAWebMediaHostsMaybeSwitchHost").maybeSwitchHost(t.getHost(), a, u, c);
                        const { changed: m, host: p } = d;
                        a = u;
                        if (m) {
                            return e(p);
                        }
                        return i(s);
                    });
                });
            }, t.signal);
        });
        return m.apply(this, arguments);
    }
    l.SERVER_POLLING_INTERVAL = s;
    l.shouldPollUploadHosts = u;
    l.shouldPollDownloadHosts = c;
    l.pollMediaHosts = d;
}, 98);