__d("WAWebGetMyAddOnsRPC", [
    "WASmaxNewslettersMyAddOnsRPC",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ count, newsletterJid }) {
            const r = yield o("WASmaxNewslettersMyAddOnsRPC").sendMyAddOnsRPC({
                myAddonsLimit: count,
                myAddonsJid: newsletterJid
            });
            switch(r.name){
                case "MyAddOnsResponseSuccess":
                    return {
                        messagesByNewsletter: r.value.myAddonsMessages
                    };
                case "MyAddOnsResponseServerError":
                    {
                        const a = r.value.errorIQErrorInternalServerErrorMixin;
                        const { code, text } = a;
                        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text);
                    }
                case "MyAddOnsResponseClientError":
                    {
                        const s = r.value.myAddonsClientErrors;
                        switch(s.name){
                            case "ItemNotFoundIQErrorResponse":
                                {
                                    const u = s.value.errorIQErrorItemNotFoundMixin;
                                    const { code, text } = u;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text);
                                }
                            case "RateLimitedIQErrorResponse":
                                {
                                    const m = s.value.errorIQErrorRateOverlimitMixin;
                                    const { code, text } = m;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text);
                                }
                            case "BadRequestIQErrorResponse":
                                {
                                    const f = s.value.errorIQErrorBadRequestMixin;
                                    const { code, text } = f;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text);
                                }
                            case "UnauthorizedIQErrorResponse":
                                {
                                    const y = s.value.errorIQErrorNotAuthorizedMixin;
                                    const { code, text } = y;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text);
                                }
                        }
                    }
            }
        });
        return s.apply(this, arguments);
    }
    l.getMyNewsletterAddOnsRPC = e;
}, 98);