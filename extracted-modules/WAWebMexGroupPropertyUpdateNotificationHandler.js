__d("WAWebMexGroupPropertyUpdateNotificationHandler", [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupHistoryShareMode",
    "WAWebGroupMemberLinkMode",
    "WAWebGroupType",
    "WAWebHandleParsedGroupNotification",
    "WAWebSuspendAppealStatusType",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, { xwa2_notify_group_on_prop_change }) {
            const { id, lid_migration_state, properties, update_time, updated_by } = xwa2_notify_group_on_prop_change;
            const { id: id_1, notify_name, pn } = updated_by;
            let g;
            switch(t.OperationName){
                case "NotificationGroupPropertyUpdate":
                    {
                        if (properties.allow_non_admin_sub_group_creation != null) {
                            g = {
                                actionType: o("WAWebGroupType").GROUP_ACTIONS.ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
                                value: properties.allow_non_admin_sub_group_creation
                            };
                        }
                        break;
                    }
                case "NotificationGroupHiddenPropertyUpdate":
                    g = {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP,
                        value: properties.hidden_group ?? false
                    };
                    break;
                case "NotificationGroupSafetyCheckPropertyUpdate":
                    g = {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK,
                        value: properties.group_safety_check ?? false
                    };
                    break;
                case "NotificationGroupMemberLinkPropertyUpdate":
                    g = {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE,
                        value: o("WAWebGroupMemberLinkMode").getMemberLinkModeFromMexType(properties.member_link_mode)
                    };
                    break;
                case "NotificationGroupMemberShareGroupHistoryModePropertyUpdate":
                    g = {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.MEMBER_SHARE_GROUP_HISTORY_MODE,
                        value: o("WAWebGroupHistoryShareMode").getMemberShareGroupHistoryModeFromMexType(properties.member_share_group_history_mode)
                    };
                    break;
                case "NotificationGroupAppealStatusUpdate":
                    g = {
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL,
                        appealStatus: o("WAWebSuspendAppealStatusType").toSuspendAppealStatus(properties.appeal_status),
                        appealUpdateTime: properties.appeal_update_time ?? null
                    };
                    break;
            }
            if (g != null) {
                const h = {
                    chatId: o("WAWebWidFactory").createWid(id),
                    ts: o("WATimeUtils").castMilliSecondsToUnixTime(Number(update_time)),
                    actions: [
                        g
                    ],
                    author: id_1 != null ? o("WAWebWidFactory").createWid(id_1) : null,
                    authorPhoneNumber: pn != null ? o("WAWebWidFactory").createWid(pn) : null,
                    isLidAddressingMode: lid_migration_state?.addressing_mode == null || lid_migration_state?.addressing_mode === "LID",
                    pushname: notify_name,
                    externalId: t.stanzaId,
                    offline: t.offline,
                    hasIncompleteParticipantInformation: false
                };
                try {
                    yield o("WAWebHandleParsedGroupNotification").handleParsedGroupNotification(h);
                } catch (t) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][group-prop-update] update failed"
                    ]))).tags("mex").sendLogs("mex-group-property-update-notification-fail");
                }
            }
        });
        return u.apply(this, arguments);
    }
    l.mexHandleGroupPropertyUpdate = s;
}, 98);