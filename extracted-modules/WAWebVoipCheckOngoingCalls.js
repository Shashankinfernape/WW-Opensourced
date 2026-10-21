__d("WAWebVoipCheckOngoingCalls", [
    "WAWebVoipInitEventEmitter",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            if (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) {
                const e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
                if (e != null) {
                    yield o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.waitUntilLoaded();
                    const t = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getModelsArray();
                    if (t.length !== 0) {
                        const n = [];
                        const r = [];
                        for (const a of t){
                            const l = a.id?.id;
                            const s = a.callCreator;
                            if (l != null && s != null) {
                                n.push(l);
                                r.push(s.toString());
                            }
                        }
                        if (n.length > 0) {
                            yield e.checkOngoingCalls(n, r);
                        }
                    }
                }
            }
        });
        return s.apply(this, arguments);
    }
    l.checkOngoingCalls = e;
}, 98);