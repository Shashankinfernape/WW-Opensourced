__d("useWAWebRegPromo", [
    "WAWebAppRootInteractionContext.react",
    "WAWebInteractionTracePolicy",
    "WAWebPhoneNumberCaptureValidation",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useCallback: u, useState: c } = s;
    const d = "US";
    const m = 10;
    function p(e) {
        const t = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
            manualHold: false,
            shouldUseNavigationAsInteraction: true,
            tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN_GET_STARTED
        });
        const a = t.startInteraction;
        const i = c("");
        const l = i[0];
        const s = i[1];
        const p = d;
        const _ = u(function(e, t) {
            s(t.substr(0, m));
        }, []);
        const f = e.loading || e.blockRetry || !r("WAWebPhoneNumberCaptureValidation")(p, l);
        const g = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!f) {
                    a();
                    yield e.sendSms(p, l);
                }
            });
            return function() {
                return t.apply(this, arguments);
            };
        })();
        return {
            handleChangePhoneNumber: _,
            handleSubmit: g,
            isDisabled: f,
            phoneNumberWithoutCountryCode: l,
            selectedCountryId: p
        };
    }
    l.default = p;
}, 98);