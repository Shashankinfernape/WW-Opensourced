__d("WAWebGetClientPayloadForRegistration", [
    "Promise",
    "WALogger",
    "WAWebClientPayload",
    "WAWebSignalStoreApi",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const a = self.performance.now();
            const i = yield (u || (u = n("Promise"))).all([
                o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
                o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey()
            ]);
            const l = i[0];
            const c = i[1];
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] getClientPayloadForRegistration signalInfo ",
                "ms"
            ])), Math.ceil(self.performance.now() - a)).tags("launch-socket-chat");
            if (!c || !l) {
                throw r("err")("Invalid signal credentials");
            }
            const d = self.performance.now();
            const m = yield o("WAWebClientPayload").getClientPayloadForRegistration(l, c, t);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] getClientPayloadForRegistration payload ",
                "ms"
            ])), Math.ceil(self.performance.now() - d)).tags("launch-socket-chat");
            return m;
        });
        return d.apply(this, arguments);
    }
    l.getClientPayloadForRegistration = c;
}, 98);