__d("WAWebMexFetchNewChatMessageCappingInfoJob", [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebMessageCappingWamEvent",
    "WAWebMexClient",
    "WAWebMexFetchNewChatMessageCappingInfoJobQuery.graphql",
    "WAWebWamEnumMessageCappingActionType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = e !== undefined ? e : e = n("WAWebMexFetchNewChatMessageCappingInfoJobQuery.graphql");
    function c() {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const i = {
                input: {
                    type: "INDIVIDUAL_NEW_CHAT_THREAD"
                }
            };
            new (o("WAWebMessageCappingWamEvent")).MessageCappingWamEvent({
                messageCappingActionType: o("WAWebWamEnumMessageCappingActionType").MESSAGE_CAPPING_ACTION_TYPE.API,
                userActionTarget: "fetch_capping_data",
                extraAttributes: JSON.stringify(o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData() || {})
            }).commit();
            const capping_info = yield o("WAWebMexClient").fetchQuery(u, i);
            const c = capping_info?.xwa2_message_capping_info;
            if (capping_info?.xwa2_message_capping_info == null) {
                new (o("WAWebMessageCappingWamEvent")).MessageCappingWamEvent({
                    messageCappingActionType: o("WAWebWamEnumMessageCappingActionType").MESSAGE_CAPPING_ACTION_TYPE.API,
                    userActionTarget: "fetch_capping_data_response",
                    extraAttributes: JSON.stringify({
                        api_status: "failure"
                    })
                }).commit();
                throw new (o("WAWebBackendErrors")).ServerStatusCodeError(500, "Mex unexpected null response for new chat message capping info");
            }
            new (o("WAWebMessageCappingWamEvent")).MessageCappingWamEvent({
                messageCappingActionType: o("WAWebWamEnumMessageCappingActionType").MESSAGE_CAPPING_ACTION_TYPE.API,
                userActionTarget: "fetch_capping_data_response",
                extraAttributes: JSON.stringify({
                    api_status: "success",
                    capping_info
                })
            }).commit();
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[MEX][CAP] fetched new chat msg capping info"
            ]))).tags("GQL", "MEX", "wa_biz_tools", "CAP");
            return {
                total_quota: c?.total_quota ?? 0,
                used_quota: c?.used_quota ?? 0,
                cycle_start_timestamp: c?.cycle_start_timestamp ?? "",
                cycle_end_timestamp: c?.cycle_end_timestamp ?? "",
                server_sent_timestamp: c?.server_sent_timestamp ?? "",
                ote_status: c?.ote_status,
                mv_status: c?.mv_status,
                capping_status: c?.capping_status,
                subscription_status: c?.subscription_status == null ? null : {
                    status: c.subscription_status.status,
                    name: c.subscription_status.name
                }
            };
        });
        return d.apply(this, arguments);
    }
    l.mexFetchNewChatMessageCapping = c;
}, 98);