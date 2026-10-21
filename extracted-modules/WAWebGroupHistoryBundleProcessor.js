__d("WAWebGroupHistoryBundleProcessor", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAddonConstants",
    "WAWebAddonProcessMsgs",
    "WAWebAddonProcessMsgsUtils",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebBackendApi",
    "WAWebCreateNackFromStanza",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBGroupsGroupMetadata",
    "WAWebDBMessageUtils",
    "WAWebDBMsgUtils",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreEncryptedMsgs",
    "WAWebDecompressAndDecodeBundle",
    "WAWebE2EProtoUtils",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryMessageManager",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebGroupHistoryReportingTokenValidator",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebHandleOrphansForNewMsg",
    "WAWebLidMigrationUtils",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessagingGatingUtils",
    "WAWebMsgEphemerality",
    "WAWebMsgHistorySyncExtensions",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebParseWebMessageInfoApi",
    "WAWebProcessBaseMsgInfo",
    "WAWebProtobufMsgKeyUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsGroupHistory.pb",
    "WAWebReportingTokenUtils",
    "WAWebSchemaMessage",
    "WAWebSerializeError",
    "WAWebUpdateMessageHistoryBundleState",
    "WAWebWamEnumReportingTokenValidationFailureReason",
    "asyncToGeneratorRuntime",
    "countWhere",
    "decodeProtobuf",
    "err",
    "sumBy"
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
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    const k = 3;
    function I(e, t, n) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, a) {
            let messagesCount = 0;
            let oowPinsCount = 0;
            try {
                yield o("WAWebUpdateMessageHistoryBundleState").updateGroupHistoryBundleState(e.id, o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.PROCESSING);
                const inflatedBytes = yield o("WAWebDecompressAndDecodeBundle").decompressBundle(t);
                const y = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsGroupHistory.pb").GroupHistorySpec, inflatedBytes);
                messagesCount = y.messages.length;
                oowPinsCount = y.outOfWindowPinnedMessages?.length ?? 0;
                const pinsCount = r("countWhere")(y.messages, function(e) {
                    return e.message?.pinInChatMessage?.type === o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL;
                });
                const uncountedCount = r("sumBy")(y.uncountedAssociatedMessageLists ?? [], function(e) {
                    return e.messages?.length ?? 0;
                });
                o("WAWebBackendApi").frontendFireAndForget("logGroupHistoryParseHistoryProtoSucceeded", {
                    groupId: a.toJid(),
                    messagesCount,
                    oowPinsCount,
                    pinsCount,
                    uncountedCount
                });
                const v = e.unsafe();
                let S = null;
                try {
                    S = yield o("WAWebGroupHistoryReportingTokenValidator").prepareValidationContext({
                        bundleMessageSecret: v.messageSecret,
                        bundleMsgId: e.id,
                        bundleMsgTimestamp: v.t ?? 0,
                        bundleSenderWid: v.author,
                        groupWid: a,
                        inflatedBytes
                    });
                } catch (error) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] Failed to prepare validation context: ",
                        ""
                    ])), r("WAWebSerializeError")(error));
                }
                const baseMessage = o("WAWebProcessBaseMsgInfo").msgToBaseMsgInfo(v);
                const k = yield (E || (E = n("Promise"))).all([
                    D({
                        baseMessage,
                        bundleMessageKey: e.id,
                        bundleProtoMessages: y.messages,
                        chatId: a,
                        validationCtx: S
                    }),
                    oowPinsCount > 0 ? D({
                        baseMessage,
                        bundleMessageKey: e.id,
                        bundleProtoMessages: y.outOfWindowPinnedMessages,
                        chatId: a,
                        skipMessageTooOldCheck: true,
                        validationCtx: null
                    }) : {
                        parsedMessages: [],
                        addonPromises: [],
                        reportingInfoRows: []
                    }
                ]);
                const I = k[0];
                const { addonPromises, parsedMessages, reportingInfoRows } = I;
                const P = k[1];
                const { addonPromises: addonPromises_1, parsedMessages: parsedMessages_1, reportingInfoRows: reportingInfoRows_1 } = P;
                const A = [].concat(parsedMessages, parsedMessages_1);
                const F = [].concat(addonPromises, addonPromises_1);
                const O = [].concat(reportingInfoRows, reportingInfoRows_1);
                if (A.length === 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history]: No valid messages parsed from bundle"
                    ])));
                    return;
                }
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: parsed ",
                    " msgs (",
                    " OOW pins), injecting"
                ])), A.length, parsedMessages_1.length);
                const B = yield q(A);
                const W = yield V(B, a);
                const U = yield G(F, baseMessage);
                const H = W.length < y.messages.length + oowPinsCount ? o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.INJECTED_PARTIAL : o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.INJECTED;
                yield j(W, a, e.id, H);
                if (O.length > 0) {
                    try {
                        const z = new Set(W.flatMap((e)=>{
                            const t = [
                                e.id.toString()
                            ];
                            if (e.protocolMessageKey != null) {
                                t.push(e.protocolMessageKey.toString());
                            }
                            return t;
                        }));
                        const K = O.filter((e)=>z.has(e.msgKey));
                        if (K.length > 0) {
                            yield o("WAWebDBReportingTokenUtils").handleAddReportingInfos(K);
                        }
                    } catch (error) {
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history] Failed to persist reporting infos: ",
                            ""
                        ])), r("WAWebSerializeError")(error));
                    }
                }
                if (W.length > 0) {
                    yield o("WAWebBackendApi").frontendSendAndReceive("hydrateReactionsForMessages", {
                        messageIds: W.map((e)=>e.id.toString())
                    });
                    yield (E || (E = n("Promise"))).all(W.map((e)=>o("WAWebHandleOrphansForNewMsg").handleOrphansForNewMsg(e)));
                }
                if (U.length > 0) {
                    yield o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(U, null, o("WAWebAddonConstants").AddonProcessMode.ProcessGroupHistoryBundle);
                }
                yield o("WAWebUpdateMessageHistoryBundleState").updateGroupHistoryBundleState(e.id, H);
            } catch (error) {
                o("WAWebBackendApi").frontendFireAndForget("logGroupHistoryParseHistoryProtoFailed", {
                    groupId: a.toJid(),
                    messagesCount: messagesCount + oowPinsCount,
                    oowPinsCount
                });
                if (error instanceof r("WAWeb-dexie").BulkError) {
                    yield o("WAWebUpdateMessageHistoryBundleState").updateGroupHistoryBundleState(e.id, o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED_NO_RETRY);
                    return;
                }
                yield o("WAWebUpdateMessageHistoryBundleState").updateGroupHistoryBundleState(e.id, o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED);
                if (error instanceof Error) {
                    o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history]: Failed to process bundle"
                    ]))).catching(error).sendLogs("group-history-bundle-processing-failed");
                } else {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history]: Failed to process bundle"
                    ]))).catching(r("err")(String(error))).sendLogs("group-history-bundle-processing-failed");
                }
            }
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const { baseMessage, bundleMessageKey } = e;
            for(var i = e.bundleProtoMessages, l = e.chatId, s = e.skipMessageTooOldCheck, u = s === undefined ? false : s, c = e.validationCtx, parsedMessages = [], addonPromises = [], reportingInfoRows = [], b = o("WATimeUtils").unixTime(), v = {
                count: 0,
                ids: []
            }, S = {
                count: 0,
                ids: []
            }, R = {
                count: 0,
                ids: []
            }, L = {
                count: 0,
                ids: []
            }, k = {
                count: 0,
                ids: []
            }, I = [], T = o("WAWebGroupHistoryGating").shouldSkipUnsupportedMessagesFromBundle(), D = 0; D < i.length; D++){
                const webMsgInfo = i[D];
                try {
                    if (T && M(webMsgInfo)) {
                        w(k, webMsgInfo.key?.id ?? "unknown");
                        continue;
                    }
                    const q = $(webMsgInfo, baseMessage, bundleMessageKey, T);
                    if (q == null) {
                        continue;
                    }
                    if (T && !N(q)) {
                        w(L, q.id);
                        continue;
                    }
                    if (!P(q, l)) {
                        w(v, q.id);
                        continue;
                    }
                    if (B(q, b)) {
                        w(S, q.id);
                        continue;
                    }
                    if (!u && W(q, b)) {
                        w(R, q.id);
                        continue;
                    }
                    if (c != null) {
                        I.push(A({
                            index: D,
                            parsedMsg: q,
                            validationCtx: c
                        }));
                    }
                    parsedMessages.push(q);
                    addonPromises.push(o("WAWebAddonProcessMsgsUtils").parseHistorySyncMsg({
                        webMsgInfo,
                        parsedWebMsgInfo: q,
                        isFromCag: false
                    }));
                } catch (error) {
                    o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history]: Failed to parse message at index ",
                        ": ",
                        ""
                    ])), D, r("WAWebSerializeError")(error));
                }
            }
            for (const U of yield (E || (E = n("Promise"))).all(I)){
                if (U != null) {
                    reportingInfoRows.push(U);
                }
            }
            if (L.count > 0) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages have an unsupported type => ",
                    ""
                ])), L.count, L.ids);
            }
            if (k.count > 0) {
                o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages are scheduled or reveal-pending => ",
                    ""
                ])), k.count, k.ids).sendLogs("group-history-bundle-scheduled-or-reveal-pending");
            }
            if (v.count > 0) {
                o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages do not belong to chat ",
                    " => ",
                    ""
                ])), v.count, l.toLogString(), v.ids);
            }
            if (S.count > 0) {
                o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages are expired => ",
                    ""
                ])), S.count, S.ids);
            }
            if (R.count > 0) {
                o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: ",
                    " messages exceed message time limit => ",
                    ""
                ])), R.count, R.ids);
            }
            return {
                parsedMessages,
                addonPromises,
                reportingInfoRows
            };
        });
        return x.apply(this, arguments);
    }
    function $(webMsgInfo, baseMessage, bundleMessageKey, a) {
        const c = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(babelHelpers.extends({}, webMsgInfo.key, {
            participant: webMsgInfo.participant
        }), baseMessage);
        const d = webMsgInfo.message?.editedMessage?.message?.protocolMessage?.key != null;
        const m = d ? webMsgInfo.message?.editedMessage?.message?.protocolMessage?.key : webMsgInfo.message?.protocolMessage?.key;
        if (m != null) {
            const p = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(babelHelpers.extends({}, m, {
                participant: webMsgInfo.participant
            }), baseMessage);
            if (p != null) {
                if (d) {
                    webMsgInfo.message = babelHelpers.extends({}, webMsgInfo.message, {
                        editedMessage: babelHelpers.extends({}, webMsgInfo.message?.editedMessage, {
                            message: babelHelpers.extends({}, webMsgInfo.message?.editedMessage?.message, {
                                protocolMessage: babelHelpers.extends({
                                    additionalPromptIds: []
                                }, webMsgInfo.message?.editedMessage?.message?.protocolMessage, {
                                    key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(p)
                                })
                            })
                        })
                    });
                } else {
                    webMsgInfo.message = babelHelpers.extends({}, webMsgInfo.message, {
                        protocolMessage: babelHelpers.extends({
                            additionalPromptIds: []
                        }, webMsgInfo.message?.protocolMessage, {
                            key: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(p)
                        })
                    });
                }
            }
        }
        if (c) {
            const y = o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(c);
            webMsgInfo.key = y;
            if (y.participant != null) {
                webMsgInfo.participant = y.participant;
            }
        }
        const C = webMsgInfo.message?.messageContextInfo?.messageAssociation?.parentMessageKey;
        if (C != null) {
            const v = o("WAWebE2EProtoUtils").translateRegularMessageKeyToLocalReference(babelHelpers.extends({}, C, {
                participant: webMsgInfo.participant
            }), baseMessage);
            if (v != null && webMsgInfo.message?.messageContextInfo?.messageAssociation != null) {
                webMsgInfo.message = babelHelpers.extends({}, webMsgInfo.message, {
                    messageContextInfo: babelHelpers.extends({}, webMsgInfo.message?.messageContextInfo, {
                        messageAssociation: babelHelpers.extends({}, webMsgInfo.message?.messageContextInfo?.messageAssociation, {
                            parentMessageKey: o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(v)
                        })
                    })
                });
            }
        }
        const L = o("WAWebParseWebMessageInfoApi").parseWebMessageInfo(o("WAWebMsgHistorySyncExtensions").omitPrimaryOnlyHistorySyncFields(babelHelpers.extends({}, webMsgInfo, {
            is1PBizBotMessage: undefined,
            botMessageInvokerJid: undefined
        })));
        if (!L) {
            return null;
        }
        const n_author = baseMessage.author;
        if (n_author == null) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] Bundle sender is null"
            ])));
            return null;
        }
        return babelHelpers.extends({}, L, {
            ack: c != null && c.fromMe ? o("WAWebAck").ACK.RECEIVED : o("WAWebAck").ACK.READ,
            hsmTag: a ? undefined : L.hsmTag,
            groupHistoryIndividualMessageInfo: {
                bundleMessageKey,
                bundleSender: n_author,
                isEditedAfterReceivedAsHistory: false
            }
        });
    }
    function P(e, t) {
        return e.id.remote.toString() === t.toString();
    }
    function N(e) {
        if (r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type)) {
            return e.isFromTemplate !== true && e.isDynamicReplyButtonsMsg !== true;
        }
        return false;
    }
    function M(webMsgInfo) {
        return webMsgInfo.message?.conditionalRevealMessage != null;
    }
    function w(e, t) {
        e.count++;
        if (e.ids.length < k) {
            e.ids.push(t.toString());
        }
    }
    function A(e) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ index, parsedMsg, validationCtx }) {
            const i = validationCtx.messageBytesArray[index];
            if (i == null) {
                return null;
            }
            try {
                const l = yield o("WAWebGroupHistoryReportingTokenValidator").validateAndBuildReportingInfoRow(parsedMsg, i, validationCtx);
                const { failureReason, row } = l;
                if (failureReason != null && O(failureReason)) {
                    const msgInfo = o("WAWebReportingTokenUtils").genDebugMsgInfo(parsedMsg);
                    o("WAWebMessageInsertDebugPlaceholderWorkerCompatible").maybeInsertDebugPlaceholder({
                        externalId: msgInfo.externalId,
                        nackReason: o("WAWebCreateNackFromStanza").NackReason.ParsingError,
                        msgInfo,
                        offline: false,
                        additionalInfo: `[ghs] reporting token validation failed (reason ${failureReason}) for msg ${parsedMsg.id.toString()}`
                    });
                }
                return row;
            } catch (error) {
                o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Reporting token validation failed for msg ",
                    ": ",
                    ""
                ])), parsedMsg.id.toString(), r("WAWebSerializeError")(error));
                return null;
            }
        });
        return F.apply(this, arguments);
    }
    function O(failureReason) {
        return failureReason !== o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.UNSUPPORTED_VERSION && failureReason !== o("WAWebWamEnumReportingTokenValidationFailureReason").REPORTING_TOKEN_VALIDATION_FAILURE_REASON.GROUP_HISTORY_MESSAGE_MISSING_FROM_PUBLIC_STANZA && o("WAWebMessagingGatingUtils").isReportingTokenValidationFailureDebugPlaceholderEnabled();
    }
    function B(e, t) {
        const e_ephemeralDuration = e.ephemeralDuration;
        if (e_ephemeralDuration == null || e_ephemeralDuration === 0) {
            return false;
        }
        const a = e.t ?? 0;
        const i = a + e_ephemeralDuration;
        return !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState) && i <= t;
    }
    function W(e, t) {
        const r = e.t ?? 0;
        if (r === 0) {
            return false;
        }
        const a = o("WAWebABProps").getABPropConfigValue("group_history_messages_time_limit_receiver_enforcement_secs");
        return r + 2 * a < t;
    }
    function q(e) {
        return U.apply(this, arguments);
    }
    function U() {
        U = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map((e)=>e.id.toString());
            const n = yield o("WAWebDBMsgUtils").getMsgsExistByMsgKey(t);
            const r = [];
            const a = [];
            for(let i = 0; i < e.length; i++){
                if (!n[i]) {
                    const l = o("WAWebLidMigrationUtils").getAlternateMsgKey(e[i].id);
                    if (l != null) {
                        r.push(i);
                        a.push(l.toString());
                    }
                }
            }
            if (a.length > 0) {
                const s = yield o("WAWebDBMsgUtils").getMsgsExistByMsgKey(a);
                for(let u = 0; u < r.length; u++){
                    if (s[u]) {
                        n[r[u]] = true;
                    }
                }
            }
            return e.filter((e, t)=>!n[t]);
        });
        return U.apply(this, arguments);
    }
    function V(e, t) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
            if (n == null) {
                return e;
            }
            const n_ephemeralDuration = n.ephemeralDuration;
            return e.map((e)=>{
                const n = e.ephemeralDuration ?? 0;
                if (n !== n_ephemeralDuration && o("WAWebMsgEphemerality").messageSupportsEphemerality(e.type)) {
                    return babelHelpers.extends({}, e, {
                        ephemeralOutOfSync: true
                    });
                }
                return e;
            });
        });
        return H.apply(this, arguments);
    }
    function G(e, t) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const a = yield (E || (E = n("Promise"))).all(e);
            const i = [].concat(...a);
            return i.map((e)=>{
                const n = o("WAWebE2EProtoUtils").translateAddonMessageKeyToLocalReference(o("WAWebProtobufMsgKeyUtils").msgKeyToProtobuf(e.id), t);
                if (n == null) {
                    return e;
                }
                const r = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(n, o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon);
                return babelHelpers.extends({}, e, r, {
                    id: n
                });
            });
        });
        return z.apply(this, arguments);
    }
    function j(e, t, n, r) {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, a) {
            let i = null;
            try {
                const m = yield o("WAWebGroupHistoryMessageManager").findGroupHistoryInsertionAnchor(t, n);
                const p = yield o("WAWebGroupHistoryMessageManager").findLastValidMessageBefore(t, m?.anchorMessage);
                const _ = yield o("WAWebApiFilterAndReplaceMessages").filterAndReplaceMessages(e);
                const f = _.newMsgs;
                const g = Q(f, p?.t);
                const h = yield o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(g, false);
                i = m != null ? yield o("WAWebGroupHistoryMessageManager").ensureAnchorHasRoomForHistory(m, h.length) : m;
                o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history]: anchorType=",
                    " anchorInChatMsgId=",
                    " hasAnchorMessage=",
                    " chatId=",
                    " msgCount=",
                    " messagesAfterJoinTime=",
                    " bundleMsgKey=",
                    ""
                ])), i?.anchorMessage?.type ?? "null", i?.anchorInChatMsgId ?? "null", i?.anchorMessage != null, t.toLogString(), h.length, g.length, n.toString());
                yield o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(h, [
                    t.toString()
                ], false, false, i);
                o("WAWebBackendApi").frontendFireAndForget("logGroupHistoryDbInserted", {
                    groupId: t.toJid(),
                    messagesCount: e.length,
                    dbIgnoredOlderMessages: a === o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.INJECTED_PARTIAL
                });
                yield X(g, t, i);
            } catch (error) {
                if (error instanceof r("WAWeb-dexie").BulkError) {
                    const y = i != null ? i.anchorInChatMsgId - 1 : null;
                    let C = "null";
                    if (y != null) {
                        try {
                            const b = o("WAWebDBMessageUtils").craftInternalId({
                                chatId: t.toString(),
                                inChatMsgId: y
                            });
                            const E = yield o("WAWebSchemaMessage").getMessageTable().between([
                                "internalId"
                            ], b, b, {
                                lowerInclusive: true,
                                upperInclusive: true,
                                limit: 1
                            });
                            if (E.length > 0) {
                                const T = E[0];
                                C = `id=${String(T.id)} t=${String(T.t)} type=${String(T.type)} subtype=${String(T.subtype)} isGroupHistoryMsg=${String(T.groupHistoryIndividualMessageInfo != null)} groupHistoryBundleKey=${T?.groupHistoryIndividualMessageInfo?.bundleMessageKey?.toString() ?? "null"}`;
                            }
                        } catch (err) {
                            C = `[group-history] lookup-failed: ${r("WAWebSerializeError")(err)}`;
                        }
                    }
                    o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history]: db insert failed firstCollidingMsg=",
                        ""
                    ])), C).catching(error).sendLogs("group-history-bundle-db-insertion-failed");
                } else {
                    if (error instanceof Error) {
                        o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history]: Failed to store messages"
                        ]))).catching(error);
                    } else {
                        o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history]: Failed to store messages"
                        ]))).catching(r("err")(String(error)));
                    }
                }
                throw error;
            }
        });
        return K.apply(this, arguments);
    }
    function Q(e, t) {
        const n = t ?? 0;
        return e.filter((e)=>(e.t ?? 0) > n);
    }
    function X(e, t, n) {
        return Y.apply(this, arguments);
    }
    function Y() {
        Y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, chatId, n) {
            let a;
            const anchorMsgKey = n != null && (a = n.anchorMessage) != null && a.id ? r("WAWebMsgKey").fromString(n.anchorMessage.id) : null;
            yield o("WAWebBackendApi").frontendSendAndReceive("processMultipleMessages", {
                chatId,
                msgObjs: e.reverse(),
                meta: {
                    add: "before",
                    isHistory: true,
                    anchorMsgKey
                },
                processMessagesOrigin: "messageHistoryBundleProcess"
            });
        });
        return Y.apply(this, arguments);
    }
    l.processMessageHistoryBundle = I;
}, 98);