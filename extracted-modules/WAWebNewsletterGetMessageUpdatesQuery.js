__d("WAWebNewsletterGetMessageUpdatesQuery", [
    "Promise",
    "WASmaxNewslettersGetNewsletterMessageUpdatesRPC",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return o("WAWebNewsletterRpcUtils").runWithBackoff(function() {
            return u(e, t);
        });
    }
    function u(e, t) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, { count, cursor, since }) {
            const s = yield o("WASmaxNewslettersGetNewsletterMessageUpdatesRPC").sendGetNewsletterMessageUpdatesRPC({
                iqTo: t,
                messageUpdatesCount: count,
                messageUpdatesSince: since,
                messageUpdatesBeforeOrAfterMixinMixinGroupArgs: d(cursor)
            });
            switch(s.name){
                case "GetNewsletterMessageUpdatesResponseSuccess":
                    {
                        const c = s.value.messageUpdatesMessagesNewsletterMessageResponsePayloadMixin;
                        return {
                            updates: c.message,
                            timestamp: c.t ?? o("WATimeUtils").unixTime()
                        };
                    }
                case "GetNewsletterMessageUpdatesResponseServerError":
                    {
                        const m = s.value.errorIQErrorInternalServerErrorMixin;
                        const { code, text } = m;
                        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text);
                    }
                case "GetNewsletterMessageUpdatesResponseClientError":
                    {
                        const f = s.value.getNewsletterMessageUpdatesClientErrors;
                        switch(f.name){
                            case "ItemNotFoundIQErrorResponse":
                                {
                                    const g = f.value.errorIQErrorItemNotFoundMixin;
                                    const { code, text } = g;
                                    return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text));
                                }
                            case "RateLimitedIQErrorResponse":
                                {
                                    const C = f.value.errorIQErrorRateOverlimitMixin;
                                    const { code, text } = C;
                                    return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text));
                                }
                            case "BadRequestIQErrorResponse":
                                {
                                    const S = f.value.errorIQErrorBadRequestMixin;
                                    const { code, text } = S;
                                    return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text));
                                }
                            case "SuspendedIQErrorResponse":
                                {
                                    const E = f.value.errorIQErrorLockedMixin;
                                    const { code, text } = E;
                                    return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text));
                                }
                            case "UnavailableForLegalReasonsResponse":
                                {
                                    const T = f.value.errorIQErrorUnavailableForLegalReasonsGenericMixin;
                                    const { code, text } = T;
                                    return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text));
                                }
                        }
                    }
            }
        });
        return c.apply(this, arguments);
    }
    function d(cursor) {
        if (cursor.after != null) {
            return {
                messageUpdatesAfterMixin: {
                    messageUpdatesAfter: cursor.after
                }
            };
        }
        return {
            messageUpdatesBeforeMixin: {
                messageUpdatesBefore: r("nullthrows")(cursor.before)
            }
        };
    }
    l.getNewsletterMessageUpdatesQuery = s;
}, 98);