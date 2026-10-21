__d("WAWebUsernameKeyVerificationFlowLazy", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebUsernameKeyVerificationFlow").__setRef("WAWebUsernameKeyVerificationFlowLazy").load();
    }, "UsernameKeyVerificationFlow");
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield e();
            const n_usernameKeyVerificationFlow = n.usernameKeyVerificationFlow;
            return n_usernameKeyVerificationFlow(t);
        });
        return u.apply(this, arguments);
    }
    l.usernameKeyVerificationFlow = s;
}, 98);