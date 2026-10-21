__d("WAWebStoreMsgs", [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebAddonGatingUtils",
    "WAWebAddonProcessMsgs",
    "WAWebAddonProcessMsgsUtils",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebApiOrphanRevoke",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebCastToReactionMsg",
    "WAWebCheckUpdateOrphanReactions",
    "WAWebCommonMsgUtils",
    "WAWebCurrentUser",
    "WAWebDBAddOnProviders",
    "WAWebDBExperienceIdStore",
    "WAWebDBMessageBulkHelper",
    "WAWebDBMessageSerialization",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebDBProcessGroupInviteMsgs",
    "WAWebDBProcessPaymentMessages",
    "WAWebDBProcessPollUpdateMsgs",
    "WAWebDBProcessReactionsMsgs",
    "WAWebDBProcessReplyMsgs",
    "WAWebDBProcessRevokeMsgs",
    "WAWebDBReplaceUnknownAssociations",
    "WAWebDBStoreMessage",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebDeriveViewRepliesThreadIdForIncomingMsgs",
    "WAWebHandleForMessageRange",
    "WAWebHandlePlaceholderWam",
    "WAWebHatchBrowserTaskMessageData",
    "WAWebLinkify",
    "WAWebMessageAssociationUIUpdateFromStorage",
    "WAWebMmSignalSharingExpirationWindowWorker",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProcessMessageAssociationMessages",
    "WAWebQuarantineDataStore",
    "WAWebRequestDeleteAddOns",
    "WAWebSchemaMessage",
    "WAWebStoreOrphans",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "gkx",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebSchemaMessage").getMessageTable().bulkRemove(e.map((e)=>e.id.toString()));
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.length !== 0) {
                try {
                    const a = yield E(t);
                    const i = r("compactMap")(Object.entries(a), function([t, n]) {
                        if (Array.isArray(n) && n.length > 0) {
                            return `${t}: ${n.length}`;
                        }
                        if (n instanceof Map && n.size > 0) {
                            return `${t}: ${n.size}`;
                        }
                    }).join(", ");
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[store-msgs] start: ",
                        ""
                    ])), i);
                    let l = [];
                    const { botInvokeSystemMsgs, chatsWithNewOfflineMsg, editProtocolMsgs, groupInviteMsgs, keepInChatMessages, newAssociatedMsgs, newMsgsMap, newsletterMsgs, paymentMsgs, pollUpdateMsgs, reactionMsgs, removedPlaceholders, replaceCommentMsgs, replaceMsgs, replyMsgs, revokeMsgs, unifiedAddons } = a;
                    const w = yield o("WAWebProcessMessageAssociationMessages").classifyAssociatedMsgsUsingExistingParentsCache(newAssociatedMsgs, newMsgsMap);
                    const A = Array.from(newMsgsMap.values());
                    if (w != null && w.orphanAssociatedMsgs.length) {
                        l = l.concat(w?.orphanAssociatedMsgs ?? []);
                    }
                    let O;
                    if (w) {
                        O = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(w?.validAssociatedMsgs);
                    }
                    const B = yield o("WAWebApiFilterAndReplaceMessages").filterAndReplaceMessages(A, O);
                    const W = B.newMsgs;
                    yield o("WAWebDBMessageBulkHelper").persistNewMessagesInBulk(W, chatsWithNewOfflineMsg);
                    yield o("WAWebDBMessageBulkHelper").persistNewNewsletterMessagesInBulk(newsletterMsgs);
                    yield o("WAWebDBThreadMetadataBulkHelper").persistNewMessagesThreadMetadataInBulk(W);
                    const q = [
                        v(replaceMsgs, t)
                    ];
                    const U = [];
                    replaceMsgs.forEach((e)=>{
                        if (e.associationType != null && e.parentMsgKey != null && e.internalId != null) {
                            U.push({
                                msgKey: e.id,
                                parentMsgKey: e.parentMsgKey,
                                associationType: e.associationType,
                                msgKeyInternalId: e.internalId
                            });
                        }
                    });
                    if (U.length > 0) {
                        q.push(...o("WAWebDBReplaceUnknownAssociations").replaceUnknownAssociations(U));
                    }
                    yield (g || (g = n("Promise"))).all(q);
                    yield o("WAWebMmSignalSharingExpirationWindowWorker").persistPendingMmSignalSharingExpirationWindows(t.map(({ id })=>id.toString()), [].concat(W, newsletterMsgs, replaceMsgs).map(({ id })=>id.toString()));
                    yield h(replaceCommentMsgs);
                    const V = yield o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(unifiedAddons);
                    const H = V.orphans;
                    if (H.length) {
                        l = l.concat(H);
                    }
                    if (l.length !== 0) {
                        yield o("WAWebStoreOrphans").storeOrphans(l);
                    }
                    const G = yield o("WAWebApiOrphanRevoke").applyAddonRevokes(unifiedAddons);
                    if (G.length > 0) {
                        for (const z of G){
                            revokeMsgs.push(z);
                        }
                    }
                    yield L(revokeMsgs);
                    yield o("WAWebDBProcessPaymentMessages").processPaymentMessages(paymentMsgs);
                    yield o("WAWebDBProcessReactionsMsgs").processReactionMsgs(reactionMsgs);
                    yield o("WAWebDBProcessGroupInviteMsgs").processGroupInviteMessages(groupInviteMsgs);
                    if (w != null && w.detachedAssociatedMsgs.length) {
                        o("WAWebMessageAssociationUIUpdateFromStorage").updateAssociatedMsgsUIFromStorage(w?.detachedAssociatedMsgs);
                    }
                    yield o("WAWebBackendApi").frontendSendAndReceive("processKeepInChatMessages", {
                        keepInChatMessages,
                        allowNotification: false
                    });
                    yield o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs(editProtocolMsgs);
                    yield o("WAWebDBProcessReplyMsgs").processReplyMsgs(replyMsgs);
                    yield o("WAWebDeriveViewRepliesThreadIdForIncomingMsgs").maybeGenerateViewRepliesThreadIdsForIncomingMsgs(replyMsgs);
                    yield o("WAWebDBProcessPollUpdateMsgs").processPollUpdateMsgs(pollUpdateMsgs);
                    yield o("WAWebHandleForMessageRange").handleOfflineForMessageRange(t);
                    if (botInvokeSystemMsgs.length > 0) {
                        const j = new Set;
                        botInvokeSystemMsgs.forEach((e)=>{
                            if (!j.has(e.id.remote.toString())) {
                                j.add(e.id.remote.toString());
                                o("WAWebBackendApi").frontendFireAndForget("updateBotInvokeSystemMsgCreated", {
                                    chatId: e.id.remote
                                });
                            }
                        });
                    }
                    const msgIds = t.map((e)=>e.id.toString());
                    try {
                        const Q = t.flatMap((e)=>(e.threadIds ?? []).map((e)=>e.toString()));
                        yield o("WAWebBackendApi").frontendSendAndReceive("checkOrphanMutations", {
                            msgIds,
                            chatIds: chatsWithNewOfflineMsg,
                            threadIds: Q
                        });
                        yield o("WAWebCheckUpdateOrphanReactions").checkUpdateForOrphanReactions(msgIds);
                    } catch (error) {
                        const X = r("getErrorSafe")(error);
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "storeMsgs: checkOrphanMutations failed during handleSingleMsg for: ",
                            " chat: ",
                            ""
                        ])), String(msgIds.join(" ")), String(t[0].id.remote)).catching(X);
                    }
                    R(A, removedPlaceholders);
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[store-msgs] done: ",
                        ""
                    ])), i);
                } catch (error) {
                    const Y = r("getErrorSafe")(error);
                    if (r("gkx")("26258")) {
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[store-msgs] error"
                        ]))).catching(Y).sendLogs("storeMsgs-error", {
                            sampling: 0.01
                        });
                    } else {
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[store-msgs] error"
                        ]))).catching(Y).sendLogs("storeMsgs-error");
                    }
                }
            }
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = new Set(e.map((e)=>e.id));
            const a = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(t.filter((e)=>r.has(e.id.toString())));
            const i = [
                "message"
            ];
            if (a.length > 0) {
                i.push("quarantine-data");
            }
            if (o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(e)) {
                i.push("experience-id");
            }
            yield o("WAWebModelStorageUtils").getStorage().lock(i, (()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n, r]) {
                    yield n.bulkCreateOrReplace(e);
                    yield o("WAWebQuarantineDataStore").bulkCreateOrReplaceQuarantineData(a, r);
                    yield o("WAWebDBExperienceIdStore").recordReceivedExperienceIds(e);
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })());
        });
        return S.apply(this, arguments);
    }
    function R(e, removedPlaceholders) {
        const n = e.filter((e)=>o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type) && e.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER);
        if (n.length > 0) {
            o("WAWebHandlePlaceholderWam").postPlaceholderActivityAddEvent(n);
        }
        if (removedPlaceholders.length > 0) {
            o("WAWebHandlePlaceholderWam").postPlaceholderActivityPopulateEvent(removedPlaceholders);
        }
    }
    function L(e) {
        const t = [];
        e.forEach((e)=>{
            if (e.protocolMessageKey) {
                const a = r("nullthrows")(e.t, "revoke timestamp is null");
                t.push({
                    revokeMsgKey: e.protocolMessageKey,
                    newMsgKey: e.id,
                    timestamp: a,
                    subtype: e.subtype,
                    authenticatedSender: e.senderWithDevice ?? o("WAWebMsgGetters").getSender(e),
                    sender: o("WAWebMsgGetters").getSender(e),
                    revokeTimestamp: a,
                    viewMode: e.viewMode
                });
            }
        });
        return o("WAWebDBProcessRevokeMsgs").processRevokeMsgsAndGetCleanupEligibleKeys(t).then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const n = t.filter((t)=>e.has(t.revokeMsgKey.toString()));
                if (n.length > 0) {
                    const r = [];
                    const a = new Set;
                    n.forEach((e)=>{
                        r.push(e.revokeMsgKey.toString());
                        const t = e.revokeMsgKey.remote.toString();
                        a.add(t);
                    });
                    yield o("WAWebRequestDeleteAddOns").requestDeleteAddOns(Array.from(a.values()).join(","), r);
                }
                return e;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })());
    }
    function E(e) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(e.map((e)=>String(e.id)), false);
            const n = [];
            const replaceMsgs = [];
            const revokeMsgs = [];
            const reactionMsgs = [];
            const paymentMsgs = [];
            const pollUpdateMsgs = [];
            const keepInChatMessages = [];
            const groupInviteMsgs = [];
            const editProtocolMsgs = [];
            const replyMsgs = [];
            const newsletterMsgs = [];
            const y = [];
            const C = new Set;
            const newMsgsMap = new Map;
            const v = new Map;
            const botInvokeSystemMsgs = [];
            const replaceCommentMsgs = [];
            const newAssociatedMsgs = [];
            const E = [];
            e.forEach((e, _)=>{
                const f = e;
                const k = String(e.id);
                const x = t[_];
                if (x != null && D(e, x)) {
                    if (e.type === o("WAWebMsgType").MSG_TYPE.COMMENT) {
                        const $ = o("WAWebAddonProcessMsgsUtils").castToAddonMsgData(f);
                        if (o("WAWebAddonGatingUtils").isUnifiedInfraEnabled(e) && $ != null) {
                            y.push($);
                        }
                        replaceCommentMsgs.push(e);
                    } else {
                        replaceMsgs.push(I(e, f, x));
                    }
                    if (o("WAWebCommonMsgUtils").isPlaceholderMsg(x.type) && !o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type)) {
                        v.set(k, f);
                    }
                } else if (x && !(o("WAWebCommonMsgUtils").isFutureproofMsg(x.type) && T(e))) {
                    if (o("WAWebCurrentUser").isEmployee()) {
                        o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[store-msgs] [classify-msgs]: duplicate skip detail: existingType=",
                            " incomingType=",
                            " isExistingFutureproof=",
                            " isIncomingFutureproof=",
                            " id=",
                            ""
                        ])), String(x.type), String(e.type), String(o("WAWebCommonMsgUtils").isFutureproofMsg(x.type)), String(o("WAWebCommonMsgUtils").isFutureproofMsg(e.type)), e.id.id);
                    }
                    n.push(e.id.id);
                } else {
                    const P = newMsgsMap.get(k);
                    const N = P != null && !o("WAWebCommonMsgUtils").isPlaceholderMsg(P.type);
                    if (N) {
                        n.push(e.id.id);
                    } else {
                        if (e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && e.subtype === "bot_invoke_disclaimer") {
                            botInvokeSystemMsgs.push(f);
                        }
                        if (o("WAWebMsgGetters").getIsNewsletterMsg(e) && e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL && e.subtype !== "admin_revoke") {
                            newsletterMsgs.push(f);
                        } else if (o("WAWebAddonGatingUtils").isUnifiedInfraEnabled(e) && o("WAWebAddonProcessMsgsUtils").castToAddonMsgData(f) != null) {
                            const M = o("WAWebAddonProcessMsgsUtils").castToAddonMsgData(f);
                            if (M != null) {
                                y.push(M);
                            }
                        } else {
                            if (e.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT) {
                                keepInChatMessages.push(f);
                            } else if (o("WAWebCastToReactionMsg").castToReactionMsgData(f) != null) {
                                reactionMsgs.push(o("WAWebCastToReactionMsg").assertReactionMsgData(f));
                            } else if (e.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted) {
                                pollUpdateMsgs.push(e);
                            } else if (e.kind === o("WAWebMsgType").MsgKind.ProtocolRevoke) {
                                revokeMsgs.push(e);
                            } else if ([
                                "sender_revoke",
                                "admin_revoke"
                            ].includes(e.subtype)) {
                                revokeMsgs.push(e);
                                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                                    "storeMsgs: receive a protocol message with a type ",
                                    ""
                                ])), e.type).tags("messaging").sendLogs("storeMsgs-protocol", {
                                    sampling: 0.01
                                });
                            } else if (e.type === o("WAWebMsgType").MSG_TYPE.PAYMENT && e.subtype === "send" || e.subtype === "payment_action_request_declined" || e.subtype === "payment_transaction_request_cancelled") {
                                paymentMsgs.push(f);
                                newMsgsMap.set(k, f);
                                C.add(String(e.id.remote));
                            } else if (e.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) {
                                groupInviteMsgs.push(f);
                                newMsgsMap.set(k, f);
                                C.add(String(e.id.remote));
                            } else if (e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && e.subtype === "message_edit") {
                                editProtocolMsgs.push(f);
                            } else if (e.quotedMsg || e.quotedStanzaID != null) {
                                replyMsgs.push(f);
                                newMsgsMap.set(k, f);
                                C.add(String(e.id.remote));
                            } else if (e.associationType != null) {
                                newMsgsMap.set(k, f);
                                newAssociatedMsgs.push(e);
                                C.add(String(e.id.remote));
                            } else if (e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && e.subtype === "ephemeral_setting" || e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL) {
                                newMsgsMap.set(k, f);
                                C.add(String(e.id.remote));
                            } else if (E.length < 3) {
                                E.push({
                                    type: e.type,
                                    subtype: e.subtype
                                });
                            }
                        }
                    }
                }
            });
            if (E.length > 0) {
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "storeMsgs: skipped ",
                    " unhandled messages => ",
                    ""
                ])), E.length, E.map((e)=>`type: ${String(e.type)}, subtype: ${String(e.subtype)}`));
            }
            if (n.length > 0) {
                o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[store-msgs] [classify-msgs]: skip for ",
                    " duplicate messages, with id ",
                    ""
                ])), n.length, n);
            }
            return {
                newMsgsMap,
                newAssociatedMsgs,
                chatsWithNewOfflineMsg: Array.from(C),
                removedPlaceholders: Array.from(v.values()),
                replaceMsgs,
                revokeMsgs,
                paymentMsgs,
                reactionMsgs,
                pollUpdateMsgs,
                keepInChatMessages,
                groupInviteMsgs,
                editProtocolMsgs,
                replyMsgs,
                newsletterMsgs,
                unifiedAddons: y,
                botInvokeSystemMsgs,
                replaceCommentMsgs
            };
        });
        return k.apply(this, arguments);
    }
    function I(e, t, n) {
        const i = o("WAWebDBMessageSerialization").dbRowFromMessage(t);
        i.unifiedResponse = o("WAWebHatchBrowserTaskMessageData").preserveBrowserTaskMessageResponse(i, n);
        i.t = n.t;
        i.internalId = n.internalId;
        i.rowId = n.rowId;
        i.pendingReadReceipt = n.pendingReadReceipt;
        if (n.placeholderCreatedWhenAccountIsHosted === false && i.senderOrRecipientAccountTypeHosted === true && e.id?.remote?.isUser()) {
            i.hostedBizEncStateMismatch = true;
            if (o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus().isMainStreamReadyMd) {
                o("WAWebBackendApi").frontendFireAndForget("updateMsgModelHostedBizEncStateMismatchFlagToTrue", {
                    msgId: e.id
                });
            }
        }
        if (o("WAWebCommonMsgUtils").isPlaceholderMsg(n.type) && n.ack > (i.ack ?? o("WAWebAck").ACK.CLOCK)) {
            i.ack = n.ack;
        }
        const l = o("WAWebDBStoreMessage").isPendingUnreadReceipt(t.id, t);
        return o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
            msg: i,
            chatId: t.id.remote.toString(),
            hasLink: o("WAWebLinkify").hasHttpLink(t),
            pendingReadReceipt: l
        });
    }
    function T(e) {
        if (o("WAWebAddonGatingUtils").isUnifiedInfraEnabled(e)) {
            return true;
        }
        return !!o("WAWebDBAddOnProviders").getAddOnProviderForMsg(e);
    }
    function D(e, t) {
        return o("WAWebCommonMsgUtils").isPlaceholderMsg(t.type) && !o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type) || o("WAWebCommonMsgUtils").isFutureproofMsg(t.type) && !o("WAWebCommonMsgUtils").isFutureproofMsg(e.type) && !T(e) || o("WAWebCommonMsgUtils").isRichResponseMsg(t.type) && o("WAWebCommonMsgUtils").isSomewhatParsedRichResponseMsg(e) || o("WAWebCommonMsgUtils").isPlaceholderSubtypeUpgrade(e.subtype, t.subtype);
    }
    l.storeMsgs = C;
    l.processOfflineRevokes = L;
    l.classifyMsgs = E;
}, 98);