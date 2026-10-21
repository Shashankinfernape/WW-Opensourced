__d("WAWebNewChatMessageCappingNotificationHandler", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebMessageCappingWamEvent",
    "WAWebNux",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsNuxPreferences",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumMessageCappingActionType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            new (o("WAWebMessageCappingWamEvent")).MessageCappingWamEvent({
                messageCappingActionType: o("WAWebWamEnumMessageCappingActionType").MESSAGE_CAPPING_ACTION_TYPE.API,
                userActionTarget: "capping_notification_received",
                extraAttributes: JSON.stringify({
                    capping_info: n.xwa2_notify_new_chat_messages_capping_info_update
                })
            }).commit();
            const n_xwa2_notify_new_chat_messages_capping_info_update = n.xwa2_notify_new_chat_messages_capping_info_update;
            const { capping_status, cycle_end_timestamp, cycle_start_timestamp, mv_status, ote_status, server_sent_timestamp, subscription_status, total_quota, used_quota } = n_xwa2_notify_new_chat_messages_capping_info_update;
            try {
                yield c({
                    total_quota,
                    used_quota,
                    cycle_start_timestamp,
                    cycle_end_timestamp,
                    capping_status,
                    ote_status,
                    mv_status,
                    server_sent_timestamp,
                    subscription_status
                });
                o("WAWebBackendApi").frontendFireAndForget("individualNewChatMessageCappingStateChange", {});
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][msg-capping] handle notif failed"
                ]))).sendLogs("mex-handle-individual-new-chat-message-capping-notification-failed");
            }
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ capping_status, cycle_end_timestamp, cycle_start_timestamp, mv_status, ote_status, server_sent_timestamp, subscription_status, total_quota, used_quota }) {
            const client_capping_info = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(o("WAWebIndividualNewChatMessageCappingLimitUtils").NEW_CHAT_MESSAGE_CAPPING_IDB_KEY);
            const m = subscription_status == null ? undefined : o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingSubscriptionStatusType(subscription_status.status);
            if (client_capping_info == null || client_capping_info.server_sent_timestamp < Number(server_sent_timestamp)) {
                let _;
                yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set((_ = o("WAWebIndividualNewChatMessageCappingLimitUtils")).NEW_CHAT_MESSAGE_CAPPING_IDB_KEY, {
                    capping_status: _.getCappingStatusType(capping_status),
                    ote_status: _.getCappingOTEStatusType(ote_status),
                    mv_status: _.getCappingMVStatusType(mv_status),
                    subscription_status: subscription_status == null || m == null ? undefined : {
                        status: m,
                        name: o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingSubscriptionName(subscription_status.name)
                    },
                    total_quota,
                    used_quota: Math.min(used_quota, total_quota),
                    cycle_start_timestamp: Number(cycle_start_timestamp),
                    cycle_end_timestamp: Number(cycle_end_timestamp),
                    server_sent_timestamp: Number(server_sent_timestamp)
                });
                const f = client_capping_info?.subscription_status?.status;
                if (m === o("WAWebUserPrefsTypes").NewChatMessageCappingSubscriptionStatusType.ACTIVE && f !== o("WAWebUserPrefsTypes").NewChatMessageCappingSubscriptionStatusType.ACTIVE) {
                    o("WAWebUserPrefsNuxPreferences").resetNux(o("WAWebNux").NUX.NCT_CAPPING_SUBSCRIPTION_TOAST);
                }
            } else {
                new (o("WAWebMessageCappingWamEvent")).MessageCappingWamEvent({
                    messageCappingActionType: o("WAWebWamEnumMessageCappingActionType").MESSAGE_CAPPING_ACTION_TYPE.DEBUG,
                    userActionTarget: "capping_info_not_saved_on_client",
                    extraAttributes: JSON.stringify({
                        reason: "stale_data",
                        server_capping_info: {
                            total_quota,
                            used_quota,
                            cycle_start_timestamp,
                            cycle_end_timestamp,
                            capping_status,
                            ote_status,
                            mv_status,
                            subscription_status,
                            server_sent_timestamp
                        },
                        client_capping_info
                    })
                }).commit();
            }
        });
        return d.apply(this, arguments);
    }
    l.mexHandleNewChatMessageCappingNotification = s;
    l.handleCapStatusUpdate = c;
}, 98);