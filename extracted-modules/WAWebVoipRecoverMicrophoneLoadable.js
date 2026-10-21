__d("WAWebVoipRecoverMicrophoneLoadable", [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        const e = yield r("JSResourceForInteraction")("WAWebVoipRecoverMicrophone").__setRef("WAWebVoipRecoverMicrophoneLoadable").load();
        return e.prepareMicrophoneForUnmute;
    }), "WAWebVoipRecoverMicrophone");
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = yield e();
            return n(t);
        });
        return u.apply(this, arguments);
    }
    l.prepareMicrophoneForUnmuteLoadable = s;
}, 98);