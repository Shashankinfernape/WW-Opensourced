__d("WAWebNewsletterSubscribeToLiveUpdatesQuery", [
    "WASmaxNewslettersSubscribeToLiveUpdatesRPC",
    "WAWebBackendErrors",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return o("WAWebNewsletterRpcUtils").runWithBackoff(function() {
            return s(e);
        });
    }
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(iqTo) {
            const t = yield o("WASmaxNewslettersSubscribeToLiveUpdatesRPC").sendSubscribeToLiveUpdatesRPC({
                iqTo
            });
            switch(t.name){
                case "SubscribeToLiveUpdatesResponseSuccess":
                    return {
                        duration: t.value.liveUpdatesDuration * 1000
                    };
                case "SubscribeToLiveUpdatesResponseServerError":
                    {
                        const n = t.value.errorIQErrorInternalServerErrorMixin;
                        const { code, text } = n;
                        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                    }
                case "SubscribeToLiveUpdatesResponseClientError":
                    {
                        const i = t.value.subscribeToLiveUpdatesClientErrors;
                        switch(i.name){
                            case "ItemNotFoundIQErrorResponse":
                                {
                                    const l = i.value.errorIQErrorItemNotFoundMixin;
                                    const { code, text } = l;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                }
                            case "RateLimitedIQErrorResponse":
                                {
                                    const c = i.value.errorIQErrorRateOverlimitMixin;
                                    const { code, text } = c;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                }
                            case "BadRequestIQErrorResponse":
                                {
                                    const p = i.value.errorIQErrorBadRequestMixin;
                                    const { code, text } = p;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                }
                            case "SuspendedIQErrorResponse":
                                {
                                    const g = i.value.errorIQErrorLockedMixin;
                                    const { code, text } = g;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                }
                            case "UnavailableForLegalReasonsResponse":
                                {
                                    const C = i.value.errorIQErrorUnavailableForLegalReasonsGenericMixin;
                                    const { code, text } = C;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                }
                        }
                    }
            }
        });
        return u.apply(this, arguments);
    }
    l.subscribeToLiveUpdatesQuery = e;
}, 98);