__d("WAWebNewsletterBridgeApi", [
    "WALogger",
    "WAWebCommonNewsletterEnums",
    "WAWebContactCollection",
    "WAWebDBUpdateLastAddOnPreviewChat",
    "WAWebDeleteStatusAction",
    "WAWebLastAddOnDBSerialization",
    "WAWebMexNewsletterUtils",
    "WAWebMsgAIProvenance",
    "WAWebMsgCollection",
    "WAWebMsgModelFromData",
    "WAWebMsgType",
    "WAWebNewsletterBridgeMsgAddOnsUtils",
    "WAWebNewsletterChatsMigrationBanners",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNewsletterSubscriberModel",
    "WAWebNewsletterValidationUtils",
    "WAWebProfilePicThumbCollection",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
    "WAWebShouldUpdateLastAddOnPreview",
    "WAWebShowNewsletterMetadataUpdateNotification",
    "WAWebShowNewsletterMilestoneNotification",
    "WAWebShowNewsletterRoleChangeNotification",
    "WAWebStatusCollection",
    "WAWebUpdateLastAddOnPreviewChatAction",
    "WAWebUpdateNewsletterMsgUIAction",
    "WAWebUpdateUnreadChatAction",
    "WAWebUserPrefsNewsletter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "filterObject",
    "requireDeferred"
], function(t, n, r, o, a, i, l) {
    const e = [
        "id"
    ];
    const s = [
        "id"
    ];
    const u = [
        "id"
    ];
    const c = [
        "id"
    ];
    const d = [
        "id"
    ];
    const m = [
        "id"
    ];
    let p;
    let _;
    let f;
    let g;
    let h;
    const y = r("requireDeferred")("WAWebNewsletterRouteBridgeApi").__setRef("WAWebNewsletterBridgeApi");
    function C(e, muteExpirationValue, fromMultiselect) {
        const o = r("WAWebNewsletterCollection").get(e);
        if (o != null) {
            o.mute.setMute(muteExpirationValue, false, true, fromMultiselect);
        }
    }
    function b(e) {
        o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
            "[newsletter] failed to load route bridge api"
        ]))).sendLogs("newsletter-route-bridge-load-failed");
    }
    const v = {
        updateNewsletterMessageUI: function({ chatID, isOrphan, msg }) {
            if (!isOrphan) {
                const a = o("WAWebMsgModelFromData").msgModelFromMsgData(msg);
                return o("WAWebUpdateNewsletterMsgUIAction").updateNewsletterMessageUI(a, chatID);
            }
        },
        deleteNewsletter: function({ id, keep, newsletterDeleted }) {
            const l = r("WAWebNewsletterCollection") == null ? undefined : r("WAWebNewsletterCollection").get(id);
            const s = l?.newsletterMetadata;
            if (newsletterDeleted) {
                r("WAWebNewsletterMetadataCollection").get(id)?.unset("statusMetadata");
                o("WAWebDeleteStatusAction").deleteStatusForContact(id).catch(()=>{
                    o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter] failed to delete status for deleted channel"
                    ]))).sendLogs("newsletter-delete-status-for-contact-failed");
                });
            }
            if (keep) {
                if (s != null) {
                    s.membershipType = o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest;
                }
                o("WAWebDeleteStatusAction").clearStatusForRemovedContact();
                return;
            }
            const c = l?.msgs;
            if (c != null) {
                o("WAWebMsgCollection").MsgCollection.remove(c);
            }
            l?.delete();
            l?.newsletterMetadata?.delete();
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.remove(id);
            o("WAWebDeleteStatusAction").clearStatusForRemovedContact();
        },
        joinNewsletter: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ metadata, msgs, newsletter, noEarlierMsgs, pic }) {
                const s = r("WAWebNewsletterCollection").gadd(newsletter, {
                    merge: true
                });
                if (msgs != null) {
                    yield o("WAWebMsgCollection").MsgCollection.processMultipleMessages(s.id, msgs, {
                        isHistory: true,
                        add: "search"
                    }, "joinNewsletter", s.msgs);
                }
                if (noEarlierMsgs === true) {
                    s.msgs.msgLoadState.noEarlierMsgs = true;
                }
                o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.add(pic, {
                    merge: true
                });
                r("WAWebNewsletterMetadataCollection").add(metadata, {
                    merge: true
                });
                o("WAWebStatusCollection").StatusCollection.sync();
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateNewsletterMetadata: function({ metadata, newsletter, pic }) {
            const metadata_id = metadata.id;
            const c = babelHelpers.objectWithoutPropertiesLoose(metadata, e);
            const newsletter_id = newsletter.id;
            const m = babelHelpers.objectWithoutPropertiesLoose(newsletter, s);
            const pic_id = pic.id;
            const _ = babelHelpers.objectWithoutPropertiesLoose(pic, u);
            r("WAWebNewsletterCollection").gadd(metadata_id).set(r("filterObject")(m, function(e) {
                return e != null;
            }), {
                merge: true
            });
            r("WAWebNewsletterMetadataCollection").gadd(metadata_id).set(r("filterObject")(c, function(e) {
                return e != null;
            }), {
                merge: true
            });
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(metadata_id).set(_, {
                merge: true
            });
            if (c.name != null) {
                o("WAWebContactCollection").ContactCollection.gadd(metadata_id).set({
                    name: c.name
                }, {
                    merge: true
                });
            }
        },
        toggleNewsletterAdminActivityMuteState: function({ fromMultiselect, id, muteExpirationValue }) {
            C(id, muteExpirationValue, fromMultiselect);
        },
        toggleNewsletterFollowerActivityMuteState: function({ id, muteExpirationValue }) {
            const a = r("WAWebNewsletterCollection").get(id);
            a?.newsletterMetadata?.setFollowerActivityMuteExpiration(muteExpirationValue);
        },
        updateNewsletterSubscriberCount: function({ id, update }) {
            let e;
            const i = r("WAWebNewsletterCollection") == null || (e = r("WAWebNewsletterCollection").get(id)) == null ? undefined : e.newsletterMetadata;
            if (i != null) {
                const l = i.size;
                const s = update.newSubscriberCount ?? Number(update.increment) + l;
                i.set("size", s);
            }
        },
        updateNewsletterUnreadMsgCount: function({ id }) {
            const n = r("WAWebNewsletterCollection").get(id);
            if (n != null) {
                o("WAWebUpdateUnreadChatAction").updateUnreadCountMD(n, 0, false);
            }
        },
        updatePrimaryNewsletterChatsMigration: function({ hasFollowedChannels, migration }) {
            o("WAWebNewsletterChatsMigrationBanners").applyPrimaryNewsletterChatsMigration(migration, hasFollowedChannels);
        },
        subscribeToNewsletter: function({ newsletter }) {
            const newsletter_newsletterMetadata = newsletter.newsletterMetadata;
            if (newsletter_newsletterMetadata == null) {
                o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[subscribeToNewsletter] newsletterMetadata=null"
                ])));
                return;
            }
            newsletter_newsletterMetadata.membershipType = o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber;
            r("WAWebNewsletterCollection").add(newsletter, {
                merge: true
            });
        },
        loadNewsletterPreviewChat: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ messages, metadata, newsletter, pic }) {
                const metadata_id = metadata.id;
                const s = babelHelpers.objectWithoutPropertiesLoose(metadata, c);
                r("WAWebNewsletterMetadataCollection").gadd(metadata_id).set(s, {
                    merge: true
                });
                if (pic != null) {
                    const u = pic.id;
                    const m = babelHelpers.objectWithoutPropertiesLoose(pic, d);
                    o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(metadata_id).set(m, {
                        merge: true
                    });
                }
                o("WAWebContactCollection").ContactCollection.add({
                    id: metadata_id,
                    name: metadata.name
                }, {
                    merge: true
                });
                r("WAWebNewsletterCollection").add(newsletter, {
                    merge: true
                });
                const p = r("WAWebNewsletterCollection").get(metadata_id);
                if (p != null && messages != null) {
                    yield o("WAWebMsgCollection").MsgCollection.processMultipleMessages(p.id, messages, {
                        isHistory: true,
                        add: "search"
                    }, "loadPreviewNewsletter", p.msgs);
                }
                return p;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        terminateNewsletter: function({ id, msgs }) {
            if (r("WAWebNewsletterMetadataCollection") != null) {
                r("WAWebNewsletterMetadataCollection").gadd(id).set({
                    terminated: true
                }, {
                    merge: true
                });
            }
            if (msgs != null) {
                r("WAWebNewsletterCollection").get(id)?.msgs.add(msgs.map((e)=>o("WAWebMsgModelFromData").msgModelFromMsgData(e)));
            }
        },
        updateNewsletterPicture: function({ pic }) {
            const pic_id = pic.id;
            const r = babelHelpers.objectWithoutPropertiesLoose(pic, m);
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(pic_id).set(r, {
                merge: true
            });
        },
        updateNewsletterMsgPaidPartnershipLabel: function({ id }) {
            const n = o("WAWebMsgCollection").MsgCollection.get(id);
            n?.set("hasPaidPartnershipLabel", true);
        },
        updateNewsletterMsgAiContentLabel: function({ id }) {
            const n = o("WAWebMsgCollection").MsgCollection.get(id);
            n?.set("aiProvenance", o("WAWebMsgAIProvenance").withSelfDisclosed(n?.aiProvenance));
        },
        updateNewsletterMessages: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ forwardsCounts, ids, msgs, pollVotes, questionResponsesCounts, reactionIdsToRemove, reactions, timestamp, viewCounts }) {
                let t;
                yield (t = o("WAWebNewsletterBridgeMsgAddOnsUtils")).updateReactions({
                    ids,
                    reactions,
                    reactionIdsToRemove
                });
                yield t.updatePollVotes({
                    ids,
                    pollVotes
                });
                t.updateForwardCounts(forwardsCounts);
                t.updateViewCounts(viewCounts);
                t.updateQuestionResponsesCounts(questionResponsesCounts);
                t.updateLastUpdateTs(ids, timestamp);
                const m = msgs?.filter(function(e) {
                    return e.kind === o("WAWebMsgType").MsgKind.RevokedMessage;
                });
                if (m != null && m.length > 0) {
                    yield o("WAWebMsgCollection").MsgCollection.processMultipleMessages(m[0].id.remote, m, {}, "updateNewsletterMessages");
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateNewsletterMessageDeliveryUpdate: function({ id, modelUpdatesToAdd, modelUpdatesToRemove }) {
            let e;
            let n;
            const s = r("WAWebNewsletterCollection").get(id);
            if (s != null) {
                if ((e = s.newsletterMetadata) != null) {
                    e.messageDeliveryUpdates.remove(modelUpdatesToRemove);
                }
                if ((n = s.newsletterMetadata) != null) {
                    n.messageDeliveryUpdates.add(modelUpdatesToAdd.map((e)=>{
                        const msgModel = o("WAWebMsgModelFromData").msgModelFromMsgData(e.msgData);
                        o("WAWebMsgCollection").MsgCollection.add(msgModel, {
                            merge: true
                        });
                        return babelHelpers.extends({}, e, {
                            msgModel
                        });
                    }), {
                        merge: true
                    });
                }
            }
        },
        findMsgKeyFromServerId: function({ from, serverId }) {
            const a = r("WAWebNewsletterCollection").get(from);
            return a?.msgs?.findFirst(function(e) {
                return e.serverId === serverId;
            })?.id;
        },
        updateMsgsViewed: function({ ids }) {
            ids.forEach((e)=>{
                o("WAWebMsgCollection").MsgCollection.get(e)?.set("viewed", true);
            });
        },
        updateGeosuspendedCountry: function({ countryCodes, id, toAdd }) {
            const a = r("WAWebNewsletterCollection").get(id);
            if (a != null) {
                if (toAdd) {
                    a.newsletterMetadata?.geosuspendedCountries.add(countryCodes.map((e)=>({
                            id: e,
                            geosuspended: true
                        })));
                } else {
                    a.newsletterMetadata?.geosuspendedCountries.remove(countryCodes.map((e)=>e));
                }
            }
        },
        suspendNewsletter: function({ id }) {
            r("WAWebNewsletterMetadataCollection").gadd(id).set({
                suspended: true
            }, {
                merge: true
            });
        },
        geosuspendNewsletter: function({ id }) {
            r("WAWebNewsletterMetadataCollection").gadd(id).set({
                suspended: true,
                geosuspended: true
            }, {
                merge: true
            });
        },
        updateProfilePictureDeletionAlertState: function({ newsletterWid }) {
            r("WAWebNewsletterMetadataCollection").gadd(newsletterWid).set({
                hasProfilePictureDeletionAlerts: true
            }, {
                merge: true
            });
        },
        updateNewsletterAdminProfile: function({ adminProfile, id }) {
            r("WAWebNewsletterMetadataCollection").gadd(id).set({
                adminProfile
            }, {
                merge: true
            });
        },
        updateNewsletterAdminProfileSetting: function({ adminProfilesSettingEnabled, id }) {
            r("WAWebNewsletterMetadataCollection").gadd(id).set({
                adminProfilesSettingEnabled
            }, {
                merge: true
            });
        },
        getActiveNewsletter: function() {
            return r("WAWebNewsletterCollection").getActive()?.id;
        },
        getNewsletterMetadata: function({ id }) {
            return r("WAWebNewsletterCollection").get(id)?.newsletterMetadata;
        },
        handleMyRoleChangeNotification: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ jid }) {
                const a = o("WAWebWidFactory").createWid(jid);
                const i = r("WAWebNewsletterCollection").get(a);
                i?.newsletterMetadata?.subscribers?.reset();
                const l = i != null;
                yield o("WAWebQueryAndUpdateNewslettersMetadataAction").queryAndUpdateNewsletterMetadataAction(jid, {
                    messageCount: l ? undefined : 1,
                    fields: {
                        membership: true,
                        state: true,
                        creationTime: l ? undefined : true,
                        description: l ? undefined : true,
                        handle: l ? undefined : true,
                        inviteLink: l ? undefined : true,
                        linkedAccounts: l ? undefined : true,
                        muted: l ? undefined : true,
                        name: l ? undefined : true,
                        picture: l ? undefined : true,
                        privacy: l ? undefined : true,
                        subscribers: l ? undefined : true,
                        verification: l ? undefined : true
                    }
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        displayRoleChangeDesktopNotification: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ notification }) {
                const i = notification.xwa2_notify_newsletter_admin_promote != null ? "promote" : "demote";
                const l = notification.xwa2_notify_newsletter_admin_promote ?? notification.xwa2_notify_newsletter_admin_demote;
                if (l != null) {
                    const s = l != null ? r("WAWebNewsletterCollection").get(l?.id) : null;
                    const u = l.user.id != null ? o("WAWebWidFactory").createUserWidOrThrow(l.user.id) : null;
                    const newRole = o("WAWebMexNewsletterUtils").mapRoleToMembership(l.user_new_role);
                    if (!(u == null || s == null || newRole == null)) {
                        const admin = l.admin?.id != null ? o("WAWebWidFactory").createUserWidOrThrow(l.admin.id) : null;
                        const m = s;
                        yield o("WAWebShowNewsletterRoleChangeNotification").showNewsletterRoleChangeNotification({
                            mode: i,
                            user: u,
                            admin,
                            chat: m,
                            newRole
                        });
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        displayNewsletterMilestoneDesktopNotification: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                o("WAWebShowNewsletterMilestoneNotification").showNewsletterMilestoneNotification(e);
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        handleOtherUserRoleChangeNotification: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ jid, newRole, userId }) {
                const s = o("WAWebWidFactory").createWid(jid);
                const u = r("WAWebNewsletterCollection").get(s);
                const c = u?.newsletterMetadata?.subscribers?.get(userId);
                if (c != null) {
                    c.membership = newRole;
                } else {
                    let d = o("WAWebContactCollection").ContactCollection.get(userId);
                    if (!d) {
                        d = o("WAWebContactCollection").ContactCollection.gadd({
                            id: userId,
                            type: "out"
                        });
                    }
                    if (newRole === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin && d) {
                        u?.newsletterMetadata?.subscribers?.add(new (o("WAWebNewsletterSubscriberModel")).NewsletterSubscriber({
                            id: userId,
                            membership: newRole,
                            isPendingAdmin: false,
                            contact: d
                        }));
                    }
                }
                u?.newsletterMetadata?.subscribers?.sort();
                if (newRole === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin) {
                    u?.newsletterMetadata?.pendingAdmins?.remove(userId);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateChatPreviewFromReaction: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ parentMsgKey, reactionMsgObj }) {
                const r = yield o("WAWebShouldUpdateLastAddOnPreview").filterChatsWithAddOnPreviewUpdates([
                    o("WAWebLastAddOnDBSerialization").lastAddOnPreviewCandidateFromReactionRowType(babelHelpers.extends({}, reactionMsgObj, {
                        parentMsgKey: parentMsgKey.toString()
                    }))
                ]);
                if (r.size > 0) {
                    yield o("WAWebDBUpdateLastAddOnPreviewChat").updateDatabaseForLastAddOnPreview(r);
                    o("WAWebUpdateLastAddOnPreviewChatAction").updateModelsForLastAddOnPreview(r);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateChatPreviewFromVote: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ parentMsgKey, voteMsgObj }) {
                const r = yield o("WAWebShouldUpdateLastAddOnPreview").filterChatsWithAddOnPreviewUpdates([
                    o("WAWebLastAddOnDBSerialization").lastAddOnPreviewCandidateFromVoteData(babelHelpers.extends({}, voteMsgObj, {
                        parentMsgKey
                    }))
                ]);
                if (r.size > 0) {
                    yield o("WAWebDBUpdateLastAddOnPreviewChat").updateDatabaseForLastAddOnPreview(r);
                    o("WAWebUpdateLastAddOnPreviewChatAction").updateModelsForLastAddOnPreview(r);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateNewsletterReports: function(t) {
            y.load().then((e)=>e.NewsletterRouteBridgeApi.updateNewsletterReports(t)).catch(b);
        },
        updateNewsletterReport: function(t) {
            y.load().then((e)=>e.NewsletterRouteBridgeApi.updateNewsletterReport(t)).catch(b);
        },
        updateNewsletterEnforcementAlerts: function(t) {
            y.load().then((e)=>e.NewsletterRouteBridgeApi.updateNewsletterEnforcementAlerts(t)).catch(b);
        },
        updateNewsletterQuestionResponses: function(t) {
            y.load().then((e)=>e.NewsletterRouteBridgeApi.updateNewsletterQuestionResponses(t)).catch(b);
        },
        hideNewsletterQuestionResponse: function(t) {
            y.load().then((e)=>e.NewsletterRouteBridgeApi.hideNewsletterQuestionResponse(t)).catch(b);
        },
        updateNewsletterQuestionResponseStarredState: function(t) {
            y.load().then((e)=>e.NewsletterRouteBridgeApi.updateNewsletterQuestionResponseStarredState(t)).catch(b);
        },
        updateMyNewsletterMembershipRole: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ newRole, newsletter }) {
                const newsletter_newsletterMetadata = newsletter.newsletterMetadata;
                if (newsletter_newsletterMetadata == null) {
                    o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[updateNewsletterMembershipRole] newsletterMetadata=null"
                    ])));
                    return;
                }
                newsletter_newsletterMetadata.membershipType = newRole;
                r("WAWebNewsletterCollection").add(newsletter, {
                    merge: true
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateNewsletterMemberRole: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ member, newRole, newsletter }) {
                const newsletter_newsletterMetadata = newsletter.newsletterMetadata;
                if (newsletter_newsletterMetadata == null) {
                    o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[updateNewsletterMembershipRole] newsletterMetadata=null"
                    ])));
                    return;
                }
                const l = newsletter_newsletterMetadata.subscribers?.get(member.id);
                if (l != null) {
                    l.membership = newRole;
                    newsletter.newsletterMetadata?.subscribers?.sort();
                    const u = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(newsletter.id.toJid());
                    yield o("WAWebUserPrefsNewsletter").flushCachedNewsletterSubscribers(u);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        displayNewsletterMetadataUpdateNotification: function({ notification }) {
            const { actorId, newsletterId, updates } = notification;
            const l = r("WAWebNewsletterCollection").get(newsletterId);
            if (l != null) {
                o("WAWebShowNewsletterMetadataUpdateNotification").showNewsletterMetadataUpdateNotification({
                    chat: l,
                    user: actorId,
                    updates
                });
            }
        },
        expireNewsletterAdminInvites: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ expiredMsgData }) {
                expiredMsgData.forEach(({ id, newsletterAdminInviteInfo })=>{
                    o("WAWebMsgCollection").MsgCollection.get(id)?.set({
                        newsletterAdminInviteInfo
                    });
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })(),
        updateNewsletterInsights: function(t) {
            return y.load().then((e)=>e.NewsletterRouteBridgeApi.updateNewsletterInsights(t));
        },
        handleNewsletterWamoSubStatusChangeNotification: (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ jid, wamoSubStatus }) {
                const a = o("WAWebWidFactory").createWid(jid);
                const i = r("WAWebNewsletterCollection").get(a);
                if (i != null) {
                    const l = i.newsletterMetadata;
                    if (l != null) {
                        l.wamoSubStatus = wamoSubStatus;
                    }
                    yield o("WAWebQueryAndUpdateNewslettersMetadataAction").queryAndUpdateNewsletterMetadataAction(jid);
                    if (wamoSubStatus === o("WAWebCommonNewsletterEnums").WamoSubStatus.ACTIVE) {
                        yield o("WAWebNewsletterPullMessagesFromServerAction").pullNewsletterMessagesFromServer(i, {
                            messageCount: o("WAWebNewsletterGatingUtils").getMaxMsgCountFromServer()
                        });
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })()
    };
    l.NewsletterBridgeApi = v;
}, 98);