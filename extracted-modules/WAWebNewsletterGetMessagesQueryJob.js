__d("WAWebNewsletterGetMessagesQueryJob", [
    "Promise",
    "WALogger",
    "WASmaxNewslettersGetNewsletterMessagesRPC",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterQueryUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(cursor) {
        if (cursor?.before != null) {
            return {
                beforeMixin: {
                    messagesBefore: cursor.before
                }
            };
        }
        if (cursor?.after != null) {
            return {
                afterMixin: {
                    messagesAfter: cursor.after
                }
            };
        }
    }
    function c(e, messagesCount, cursor) {
        const r = o("WAWebNewsletterQueryUtils").getNewsletterMessagesQueryParams(e);
        return m({
            cursor,
            messagesCount,
            queryArgs: r
        });
    }
    function d({ cursor, inviteCode, messagesCount, qpl }) {
        const i = o("WAWebNewsletterQueryUtils").getNewsletterMessagesQueryParams(inviteCode);
        return m({
            cursor,
            messagesCount,
            qpl,
            queryArgs: i
        });
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ cursor, messagesCount, qpl, queryArgs }) {
            const messageDirectionsArgs = u(cursor);
            if (messagesCount > o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer()) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[queryNewsletterMessages] ",
                    " messages requested"
                ])), messagesCount).tags("newsletter").sendLogs("newsletter-server-msg-count-exceeded");
            }
            qpl?.markFetchStart();
            const d = yield o("WASmaxNewslettersGetNewsletterMessagesRPC").sendGetNewsletterMessagesRPC({
                queryNewsletterParamsMixinArgs: {
                    queryNewsletterParamsArgs: queryArgs
                },
                newsletterMessageRequestPayloadMixinArgs: {
                    messagesCount: Math.min(messagesCount, o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer()),
                    messageDirectionsArgs
                }
            });
            qpl?.markFetchEnd();
            switch(d.name){
                case "GetNewsletterMessagesResponseSuccess":
                    {
                        const m = d.value.messagesNewsletterMessageResponsePayloadMixin;
                        const { message, t } = m;
                        return {
                            messages: message,
                            end: message.length < messagesCount,
                            timestamp: t ?? o("WATimeUtils").unixTime()
                        };
                    }
                case "GetNewsletterMessagesResponseClientError":
                    {
                        const f = d.value.getNewsletterMessagesClientErrors;
                        switch(f.name){
                            case "ItemNotFoundIQErrorResponse":
                                {
                                    const g = f.value.errorIQErrorItemNotFoundMixin;
                                    const { code, text } = g;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                }
                            case "RateLimitedIQErrorResponse":
                                {
                                    const C = f.value.errorIQErrorRateOverlimitMixin;
                                    const { code, text } = C;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                }
                            case "BadRequestIQErrorResponse":
                                {
                                    const S = f.value.errorIQErrorBadRequestMixin;
                                    const { code, text } = S;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                }
                            case "SuspendedIQErrorResponse":
                                {
                                    const E = f.value.errorIQErrorLockedMixin;
                                    const { code, text } = E;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                }
                            case "UnavailableForLegalReasonsResponse":
                                {
                                    const T = f.value.errorIQErrorUnavailableForLegalReasonsGenericMixin;
                                    const { code, text } = T;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                }
                            case "NotAllowedIQErrorResponse":
                                {
                                    const $ = f.value.errorIQErrorNotAllowedMixin;
                                    const { code, text } = $;
                                    throw new (o("WAWebBackendErrors")).ServerStatusCodeError(code, text);
                                }
                        }
                        break;
                    }
                case "GetNewsletterMessagesResponseServerError":
                    {
                        const M = d.value.errorIQErrorInternalServerErrorMixin;
                        const { code, text } = M;
                        return (s || (s = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(Number(code), text));
                    }
            }
        });
        return p.apply(this, arguments);
    }
    l.queryNewsletterMessagesByJid = c;
    l.queryNewsletterMessagesByInviteCode = d;
}, 98);