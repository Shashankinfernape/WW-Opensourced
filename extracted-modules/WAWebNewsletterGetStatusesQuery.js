__d("WAWebNewsletterGetStatusesQuery", [
    "invariant",
    "WASmaxNewslettersGetNewsletterStatusesRPC",
    "WAWebBackendErrors",
    "WAWebNewsletterRpcUtils",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l, s) {
    const e = 100;
    function u(e, t, n, r, o) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(anyJid, anyViewRole, statusesAfter, statusesBefore, l) {
            if (statusesAfter != null && statusesBefore != null) {
                s(0, 145243);
            }
            o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(anyJid);
            return o("WAWebNewsletterRpcUtils").runWithBackoff(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                let statusDirectionsArgs;
                if (statusesAfter != null) {
                    statusDirectionsArgs = {
                        statusAfterMixin: {
                            statusesAfter
                        }
                    };
                } else if (statusesBefore != null) {
                    statusDirectionsArgs = {
                        statusBeforeMixin: {
                            statusesBefore
                        }
                    };
                }
                const s = yield o("WASmaxNewslettersGetNewsletterStatusesRPC").sendGetNewsletterStatusesRPC({
                    queryNewsletterParamsMixinArgs: {
                        queryNewsletterParamsArgs: {
                            queryNewsletterJIDParams: {
                                anyJid,
                                anyViewRole
                            }
                        }
                    },
                    newsletterStatusRequestPayloadMixinArgs: {
                        statusesCount: Math.min(l ?? e, e),
                        statusDirectionsArgs
                    }
                });
                switch(s.name){
                    case "GetNewsletterStatusesResponseSuccess":
                        {
                            const u = s.value.statusesNewsletterStatusResponsePayloadMixin;
                            return u.status;
                        }
                    case "GetNewsletterStatusesResponseClientError":
                        {
                            const c = s.value.getNewsletterStatusesClientErrors;
                            switch(c.name){
                                case "ItemNotFoundIQErrorResponse":
                                    {
                                        const d = c.value.errorIQErrorItemNotFoundMixin;
                                        const { code, text } = d;
                                        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                    }
                                case "RateLimitedIQErrorResponse":
                                    {
                                        const _ = c.value.errorIQErrorRateOverlimitMixin;
                                        const { code, text } = _;
                                        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                    }
                                case "BadRequestIQErrorResponse":
                                    {
                                        const h = c.value.errorIQErrorBadRequestMixin;
                                        const { code, text } = h;
                                        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                    }
                                case "SuspendedIQErrorResponse":
                                    {
                                        const b = c.value.errorIQErrorLockedMixin;
                                        const { code, text } = b;
                                        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                    }
                                case "UnavailableForLegalReasonsResponse":
                                    {
                                        const R = c.value.errorIQErrorUnavailableForLegalReasonsGenericMixin;
                                        const { code, text } = R;
                                        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                    }
                                case "NotAllowedIQErrorResponse":
                                    {
                                        const k = c.value.errorIQErrorNotAllowedMixin;
                                        const { code, text } = k;
                                        throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                    }
                            }
                            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(0, `Unhandled client error: ${c.name}`);
                        }
                    case "GetNewsletterStatusesResponseServerError":
                        {
                            const D = s.value.errorIQErrorInternalServerErrorMixin;
                            const { code, text } = D;
                            throw new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text);
                        }
                }
            }));
        });
        return c.apply(this, arguments);
    }
    l.queryNewsletterStatuses = u;
}, 98);