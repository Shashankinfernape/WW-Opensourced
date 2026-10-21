__d("WAWebGetClientPayloadForLogin", [
    "WALogger",
    "WAWebClientPayload",
    "WAWebPageLoadLogging",
    "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = t || {
                passive: false,
                pull: true
            };
            const r = self.performance.now();
            yield o("WAWebRegisterPassiveTasksForConnectWorkerCompatible").registerPassiveTasksForConnect();
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] getClientPayloadForLogin reg passive tasks ",
                "ms"
            ])), Math.ceil(self.performance.now() - r)).tags("launch-socket-chat");
            n.passive = yield o("WAWebRegisterPassiveTasksForConnectWorkerCompatible").shouldConnectAsPassiveMode();
            o("WAWebPageLoadLogging").addPageLoadQplAnnotationNow({
                passive_login_flag: n.passive
            });
            const a = self.performance.now();
            const i = yield o("WAWebClientPayload").getClientPayloadForLogin(n);
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[comms] getClientPayloadForLogin generated payload in ",
                "ms"
            ])), Math.ceil(self.performance.now() - a)).tags("launch-socket-chat");
            return i;
        });
        return c.apply(this, arguments);
    }
    l.getClientPayloadForLogin = u;
}, 98);