__d("WAWebHandleMexNotification", [
    "JSResourceForInteraction",
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAParsableWapNode",
    "WAWap",
    "WAWebHandleBrigadingUpdateNotification",
    "WAWebLazyLoadedRetriable",
    "WAWebMexCommunityOwnerUpdateNotificationHandler",
    "WAWebMexGroupPropertyUpdateNotificationHandler",
    "WAWebMexIntegrityChallengeNotificationHandler",
    "WAWebMexLidChangeNotificationHandler",
    "WAWebMexLimitSharingUpdateHandler",
    "WAWebMexNewsletterAIContentNotificationHandler",
    "WAWebMexNewsletterAdminInviteRevokeNotificationHandler",
    "WAWebMexNewsletterAdminNotificationHandler",
    "WAWebMexNewsletterAdminProfileUpdateNotificationHandler",
    "WAWebMexNewsletterJoinHandler",
    "WAWebMexNewsletterLeaveHandler",
    "WAWebMexNewsletterMetadataUpdateNotificationHandler",
    "WAWebMexNewsletterMilestoneNotificationHandler",
    "WAWebMexNewsletterOwnerNotificationHandler",
    "WAWebMexNewsletterPaidPartnershipNotificationHandler",
    "WAWebMexNewsletterQuestionResponseBlockedNotificationHandler",
    "WAWebMexNewsletterQuestionResponseStateChangeNotificationHandler",
    "WAWebMexNewsletterRoleChangeNotificationHandler",
    "WAWebMexNewsletterStateChangeHandler",
    "WAWebMexNewsletterUserSettingChangeHandler",
    "WAWebMexNewsletterWamoSubStatusChangeNotificationHandler",
    "WAWebMexReachoutTimelockNotificationHandler",
    "WAWebMexRelayEnvironment",
    "WAWebMexTextStatusUpdateNotificationHandler",
    "WAWebMexUsernameAccountSyncNotificationHandler",
    "WAWebMexUsernameUpdateNotificationHandler",
    "WAWebNewChatMessageCappingNotificationHandler",
    "WAWebScheduledMsgPostNotificationHandler",
    "WAWebScheduledMsgRevealNotificationHandler",
    "WAWebSharableEventNotificationHandler",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = r("WAWebLazyLoadedRetriable")(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
        return r("JSResourceForInteraction")("WAWebMexOrgMemberUpdateNotificationHandler").__setRef("WAWebHandleMexNotification").load();
    }), "OrgMemberUpdateNotificationHandler");
    const m = new Set([
        "NotificationLinkedProfilesUpdatesSideSub",
        "NotificationAgeCollection",
        "NotificationLinkedProfilesUpdates"
    ]);
    const p = "mexNotificationParser";
    const _ = new (r("WADeprecatedWapParser"))(p, function(e) {
        e.assertTag("notification");
        e.assertAttr("type", "mex");
        const t = e.child("update");
        const n = e.attrString("id");
        const r = e.attrWapJid("from");
        const a = e.maybeAttrString("offline");
        const OperationName = t.attrString("op_name");
        const l = t.contentString();
        let mexResponse;
        try {
            mexResponse = JSON.parse(l);
        } catch (error) {
            throw new (o("WAParsableWapNode")).XmppParsingFailure(p, `JSON parsing error: ${String(error)}`);
        }
        return {
            stanzaId: n,
            from: r,
            offline: a,
            OperationName,
            mexResponse
        };
    });
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = _.parseOrThrow(t);
            try {
                const a = yield h(n);
                return a;
            } catch (error) {
                if (error instanceof o("WAParsableWapNode").XmppParsingFailure) {
                    throw error;
                }
                if (error instanceof y) {
                    if (m.has(error.operationName)) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[mex] handleMexNotification: ",
                            " unsupported, nack"
                        ])), error.operationName).tags("mex", "notification");
                    } else {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[mex] handleMexNotification: ",
                            " unknown op, nack"
                        ])), error.operationName).tags("mex", "notification").sendLogs(`mex-notification-error-${error.operationName}`, {
                            sampling: 0.01
                        });
                        throw error;
                    }
                } else {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex] handleMexNotification: ",
                        " handling failed, nack"
                    ])), n.OperationName).catching(r("getErrorSafe")(error)).tags("mex", "notification").sendLogs(`mex-notification-handling-failed-${n.OperationName}`, {
                        sampling: 0.1
                    });
                }
                throw new (o("WAParsableWapNode")).XmppParsingFailure(p, `unexpected error: ${String(error)}`);
            }
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        if (e.OperationName === "MexNotificationEvent") {
            return C(e, S);
        }
        if (e.OperationName === "NotificationNewsletterUserSettingChange") {
            return C(e, o("WAWebMexNewsletterUserSettingChangeHandler").mexHandleNewsletterUserSettingChange);
        }
        if (e.OperationName === "NotificationNewsletterJoin") {
            return C(e, o("WAWebMexNewsletterJoinHandler").mexHandleNewsletterJoin);
        }
        if (e.OperationName === "NotificationNewsletterLeave") {
            return C(e, o("WAWebMexNewsletterLeaveHandler").mexHandleNewsletterLeave);
        }
        if (e.OperationName === "NotificationNewsletterStateChange") {
            return C(e, o("WAWebMexNewsletterStateChangeHandler").mexHandleNewsletterStateChange);
        }
        if (e.OperationName === "NotificationNewsletterAdminProfileUpdate") {
            return C(e, o("WAWebMexNewsletterAdminProfileUpdateNotificationHandler").mexHandleNewsletterAdminProfileUpdateNotification);
        }
        if (e.OperationName === "NotificationNewsletterAdminMetadataUpdate") {
            return C(e, o("WAWebMexNewsletterAdminNotificationHandler").mexHandleNewsletterAdminNotification);
        }
        if (e.OperationName === "NotificationNewsletterOwnerUpdate") {
            return C(e, o("WAWebMexNewsletterOwnerNotificationHandler").mexHandleNewsletterOwnerNotification);
        }
        if (e.OperationName === "NotificationNewsletterUpdate") {
            return C(e, o("WAWebMexNewsletterMetadataUpdateNotificationHandler").mexHandleNewsletterMetadataUpdate);
        }
        if (e.OperationName === "NotificationNewsletterAdminPromote" || e.OperationName === "NotificationNewsletterAdminDemote") {
            return C(e, o("WAWebMexNewsletterRoleChangeNotificationHandler").mexHandleNewsletterRoleChange);
        }
        if (e.OperationName === "NotificationNewsletterAdminInviteRevoke") {
            return C(e, o("WAWebMexNewsletterAdminInviteRevokeNotificationHandler").handleNewsletterAdminInviteRevoke);
        }
        if (e.OperationName === "NotificationNewsletterWamoSubStatusChange") {
            return C(e, o("WAWebMexNewsletterWamoSubStatusChangeNotificationHandler").mexHandleNewsletterWamoSubStatusChange);
        }
        if (e.OperationName === "NewsletterResponseStateUpdate") {
            return C(e, o("WAWebMexNewsletterQuestionResponseStateChangeNotificationHandler").mexHandleNewsletterQuestionsResponseStateChange);
        }
        if (e.OperationName === "NotificationNewsletterBlockUser") {
            return C(e, o("WAWebMexNewsletterQuestionResponseBlockedNotificationHandler").mexHandleNewsletterQuestionsResponseBlocked);
        }
        if (e.OperationName === "NotificationNewsletterPaidPartnershipUpdate") {
            return C(e, o("WAWebMexNewsletterPaidPartnershipNotificationHandler").mexHandleNewsletterPaidPartnership);
        }
        if (e.OperationName === "NotificationNewsletterAIContentUpdate") {
            return C(e, o("WAWebMexNewsletterAIContentNotificationHandler").mexHandleNewsletterAIContent);
        }
        if (e.OperationName === "NotificationNewsletterMilestone") {
            return C(e, o("WAWebMexNewsletterMilestoneNotificationHandler").mexHandleNewsletterMilestone);
        }
        if (e.OperationName === "NotificationOrgMemberUpdate") {
            return C(e, (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                    const n = yield d();
                    const n_mexHandleOrgMemberUpdate = n.mexHandleOrgMemberUpdate;
                    return n_mexHandleOrgMemberUpdate(e, t);
                });
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            })());
        }
        if (e.OperationName === "TextStatusUpdateNotification") {
            return C(e, o("WAWebMexTextStatusUpdateNotificationHandler").mexHandleTextStatusUpdate);
        }
        if (e.OperationName === "TextStatusUpdateNotificationSideSub") {
            return C(e, o("WAWebMexTextStatusUpdateNotificationHandler").mexHandleTextStatusUpdateSideSub);
        }
        if (e.OperationName === "NotificationGroupPropertyUpdate" || e.OperationName === "NotificationGroupHiddenPropertyUpdate" || e.OperationName === "NotificationGroupSafetyCheckPropertyUpdate" || e.OperationName === "NotificationGroupMemberLinkPropertyUpdate" || e.OperationName === "NotificationGroupMemberShareGroupHistoryModePropertyUpdate" || e.OperationName === "NotificationGroupAppealStatusUpdate") {
            return C(e, o("WAWebMexGroupPropertyUpdateNotificationHandler").mexHandleGroupPropertyUpdate);
        }
        if (e.OperationName === "NotificationCommunityOwnerUpdate") {
            return C(e, o("WAWebMexCommunityOwnerUpdateNotificationHandler").mexHandleCommunityOwnerUpdate);
        }
        if (e.OperationName === "UsernameSetNotification") {
            return C(e, o("WAWebMexUsernameUpdateNotificationHandler").mexHandleUsernameChange);
        }
        if (e.OperationName === "UsernameDeleteNotification") {
            return C(e, o("WAWebMexUsernameUpdateNotificationHandler").mexHandleUsernameDelete);
        }
        if (e.OperationName === "UsernameUpdateNotification") {
            return C(e, o("WAWebMexUsernameUpdateNotificationHandler").mexHandleUsernameChangeForSideSub);
        }
        if (e.OperationName === "AccountSyncUsernameNotification") {
            return C(e, o("WAWebMexUsernameAccountSyncNotificationHandler").mexHandleUsernameAccountSync);
        }
        if (e.OperationName === "LidChangeNotification") {
            return C(e, o("WAWebMexLidChangeNotificationHandler").mexHandleLidChangeNotification);
        }
        if (e.OperationName === "NotificationUserBrigadingUpdate") {
            return C(e, o("WAWebHandleBrigadingUpdateNotification").mexHandleBrigadingNotification);
        }
        if (e.OperationName === "NotificationGroupLimitSharingPropertyUpdate") {
            return C(e, o("WAWebMexLimitSharingUpdateHandler").mexHandleLimitSharingUpdate);
        }
        if (e.OperationName === "NotificationUserReachoutTimelockUpdate") {
            return C(e, o("WAWebMexReachoutTimelockNotificationHandler").mexHandleReachoutTimelockNotification);
        }
        if (e.OperationName === "NotificationIntegrityChallengeRequest") {
            return C(e, o("WAWebMexIntegrityChallengeNotificationHandler").mexHandleIntegrityChallengeNotification);
        }
        if (e.OperationName === "MessageCappingInfoNotification") {
            return C(e, o("WAWebNewChatMessageCappingNotificationHandler").mexHandleNewChatMessageCappingNotification);
        }
        if (e.OperationName === "NotificationScheduledMessagePost") {
            return C(e, o("WAWebScheduledMsgPostNotificationHandler").mexHandleScheduledMsgPost);
        }
        if (e.OperationName === "NotificationScheduledMessageReveal") {
            return C(e, o("WAWebScheduledMsgRevealNotificationHandler").mexHandleScheduledMsgReveal);
        }
        if (e.OperationName === "NotificationEventInvite") {
            return C(e, o("WAWebSharableEventNotificationHandler").mexHandleSharableEventInviteNotification);
        }
        if (e.OperationName === "NotificationEventUpdate") {
            return C(e, o("WAWebSharableEventNotificationHandler").mexHandleSharableEventUpdateNotification);
        }
        if (e.OperationName === "NotificationEventRsvp") {
            return C(e, o("WAWebSharableEventNotificationHandler").mexHandleSharableEventRsvpNotification);
        }
        if (e.OperationName === "NotificationEventDelete") {
            return C(e, o("WAWebSharableEventNotificationHandler").mexHandleSharableEventDeleteNotification);
        }
        if (e.OperationName === "NotificationEventReminder") {
            return C(e, o("WAWebSharableEventNotificationHandler").mexHandleSharableEventReminderNotification);
        }
        if (e.OperationName === "NotificationEventInviteRemove") {
            return C(e, o("WAWebSharableEventNotificationHandler").mexHandleSharableEventInviteRemoveNotification);
        }
        return (c || (c = n("Promise"))).reject(new y(e.OperationName));
    }
    var y = ((e)=>{
        function t(n) {
            let r;
            r = e.call(this, `${t.name}: ${n}`) || this;
            r.name = "MissingMEXNotificationHandler";
            r.operationName = n;
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.toString = function() {
            return `${t.name}: ${this.operationName}`;
        };
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const e_mexResponse = e.mexResponse;
            const r = o("WAWebMexRelayEnvironment").parseFatalExtensionError(e_mexResponse.errors);
            if (r != null) {
                throw new (o("WAParsableWapNode")).XmppParsingFailure(p, "errors list in parsed json has fatal error");
            }
            if (e_mexResponse.data != null) {
                yield t(e, e_mexResponse.data);
                return v(e.stanzaId, e.from);
            }
            throw new (o("WAParsableWapNode")).XmppParsingFailure(p, "null data in parsed json");
        });
        return b.apply(this, arguments);
    }
    function v(stanzaId, from) {
        return o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(stanzaId),
            to: from,
            class: "notification",
            type: "mex"
        });
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {});
        return R.apply(this, arguments);
    }
    l.handleMexNotification = f;
    l.MissingMEXNotificationHandler = y;
}, 98);