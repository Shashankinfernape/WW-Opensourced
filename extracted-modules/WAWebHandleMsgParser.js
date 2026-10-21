__d("WAWebHandleMsgParser", [
    "WADeprecatedWapParser",
    "WAHex",
    "WALogger",
    "WAParsableWapNode",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAsISOCountryCode",
    "WAWebBackendJobs.flow",
    "WAWebBotTypes",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCreateNackFromStanza",
    "WAWebCurrentUser",
    "WAWebGroupHistoryGating",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandlePaymentAmountUtils",
    "WAWebIdentityFunction",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebMaibaWASSMigration",
    "WAWebMessagingGatingUtils",
    "WAWebPaymentNotificationParser",
    "WAWebPaymentStatusUtils",
    "WAWebProtobufsWeb.pb",
    "WAWebReportingTokenConstants",
    "WAWebScheduledMsgConstants",
    "WAWebSessionScope",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "justknobx"
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
    const b = new (r("WADeprecatedWapParser"))("incomingMsgParser", function(e) {
        e.assertTag("message");
        const r = e.maybeChild("plaintext");
        if (r != null) {
            r.throw("not to be present in e2ee messages");
        }
        const encs = e.mapChildrenWithTag("enc", function(e) {
            return {
                e2eType: e.attrEnumValues("type", o("WAWebBackendJobs.flow").CiphertextType.members()),
                encMediaType: o("WAWebBackendJobs.flow").EncMediaType.cast(e.maybeAttrString("mediatype")),
                ciphertext: e.contentBytes(),
                retryCount: e.maybeAttrInt("count") ?? 0,
                hideFail: e.maybeAttrString("decrypt-fail") === "hide",
                isStateless: e.maybeAttrString("state") === "false",
                sessionType: e.maybeAttrString("session_type")
            };
        });
        const i = e.maybeChild("device-identity");
        const l = i ? i.contentBytes() : null;
        const s = k(e);
        const msgMeta = L(e, encs);
        const c = S({
            botInfo: s,
            encs,
            msgMeta,
            node: e
        });
        const bizInfo = I(e, c);
        const m = x(e);
        const { dehydratedPaymentNode, paymentInfo } = m;
        const hsmInfo = D(e);
        const reportingTokenInfo = N(e);
        const ghsReportingTokenInfos = M(e, encs);
        const rcat = e.maybeChild("rcat")?.contentBytes() ?? null;
        return {
            encs,
            msgInfo: c,
            msgMeta,
            bizInfo,
            hsmInfo,
            paymentInfo,
            dehydratedPaymentNode,
            deviceIdentity: l,
            rcat,
            msgBotInfo: s,
            reportingTokenInfo,
            ghsReportingTokenInfos
        };
    });
    function v(e, t) {
        const n = o("WAWebUserPrefsMeUser").isMeAccount(e);
        const r = e != null && t != null && e.isLid() && !o("WAWebUserPrefsMeUser").isMeAccount(e) && t.equals(e);
        if (e == null || t == null || !t.isUser() || !(n || r) || !o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()) {
            throw new (o("WAParsableWapNode")).XmppParsingFailure("incomingMsgParser", `${o("WAWebCreateNackFromStanza").NackReason.InvalidHostedCompanionStanza}`);
        }
        const a = o("WAWebWidFactory").asUserWidOrThrow(t);
        const i = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() ? a : o("WAWebLidMigrationUtils").toPn(a);
        if (i == null) {
            throw new (o("WAParsableWapNode")).XmppParsingFailure("incomingMsgParser", `${o("WAWebCreateNackFromStanza").NackReason.InvalidHostedCompanionStanza}`);
        }
        return {
            chat: i,
            metaFrom: e
        };
    }
    function S({ botInfo, encs, msgMeta, node }) {
        const serverStoreTimeMicros = node.maybeAttrInt("sts");
        const f = babelHelpers.extends({
            externalId: node.attrString("id"),
            ts: node.attrTime("t"),
            edit: node.maybeAttrInt("edit") ?? o("WAWebAck").EDIT_ATTR.NONE,
            isHsm: node.hasChild("hsm"),
            count: node.maybeAttrInt("count"),
            pushname: node.maybeAttrString("notify"),
            username: node.maybeAttrString("username"),
            displayName: node.maybeAttrString("display_name"),
            senderPn: node.hasAttr("sender_pn") ? o("WAWebJidToWid").userJidToUserWid(node.attrUserJid("sender_pn")) : null,
            senderLid: node.hasAttr("sender_lid") ? o("WAWebJidToWid").userJidToUserWid(node.attrUserJid("sender_lid")) : null,
            recipientLid: node.hasAttr("recipient_lid") ? o("WAWebJidToWid").lidUserJidToUserLid(node.attrLidUserJid("recipient_lid")) : null,
            recipientPn: node.hasAttr("recipient_pn") ? o("WAWebJidToWid").userJidToUserWid(node.attrUserJid("recipient_pn")) : null,
            peerRecipientPn: node.hasAttr("peer_recipient_pn") ? o("WAWebJidToWid").userJidToUserWid(node.attrUserJid("peer_recipient_pn")) : null,
            peerRecipientLid: node.hasAttr("peer_recipient_lid") ? o("WAWebJidToWid").lidUserJidToUserLid(node.attrLidUserJid("peer_recipient_lid")) : null,
            peerRecipientUsername: node.hasAttr("peer_recipient_username") ? node.attrString("peer_recipient_username") : null,
            recipientLatestLid: node.hasAttr("recipient_latest_lid") ? o("WAWebJidToWid").lidUserJidToUserLid(node.attrLidUserJid("recipient_latest_lid")) : null,
            recipientUsername: node.hasAttr("recipient_username") ? node.attrString("recipient_username") : null,
            participant: node.hasAttr("participant") ? o("WAWebJidToWid").deviceJidToDeviceWid(node.attrDeviceJid("participant")) : null,
            participantLid: node.hasAttr("participant_lid") ? o("WAWebJidToWid").lidUserJidToUserLid(node.attrLidUserJid("participant_lid")) : null,
            participantPn: node.hasAttr("participant_pn") ? o("WAWebJidToWid").userJidToUserWid(node.attrUserJid("participant_pn")) : null,
            participantUsername: node.maybeAttrString("participant_username"),
            category: node.maybeAttrEnum("category", o("WAWebHandleMsgCommon").MSG_CATEGORY),
            offline: node.maybeAttrString("offline"),
            senderCountryCode: w(node.maybeChild("meta"))
        }, serverStoreTimeMicros != null ? {
            serverStoreTimeMicros
        } : null);
        const g = o("WAWebJidToWid").jidWithTypeToWid(node.attrJidWithType("from"));
        if (g.isNewsletter()) {
            node.throw("unexpected `from` attribute with newsletter Jid");
        }
        const author = node.hasAttr("participant") ? o("WAWebJidToWid").deviceJidToDeviceWid(node.attrDeviceJid("participant")) : null;
        const y = node.hasAttr("recipient") ? o("WAWebJidToWid").userJidToUserWid(node.attrUserJid("recipient")) : null;
        const C = !!(author?.isHosted() && (g.isStatus() || g.isGroup() || g.isBroadcast()));
        if (C) {
            throw new (o("WAParsableWapNode")).XmppParsingFailure("incomingMsgParser", `${o("WAWebCreateNackFromStanza").NackReason.InvalidHostedCompanionStanza}`);
        }
        const isDirect = encs.every((e)=>e.e2eType !== o("WAWebBackendJobs.flow").CiphertextType.Skmsg);
        const S = encs.some((e)=>e.retryCount > 0);
        const L = g.isGroup() || g.isBroadcast() ? author : g;
        if (y != null && L != null && !o("WAWebUserPrefsMeUser").isMeAccount(L)) {
            return node.throw("Invalid recipient from non peer device");
        }
        const E = R(node);
        const k = msgMeta?.targetChatJid;
        const I = msgMeta?.from;
        if (g.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)) {
            if (k?.isFbidBot() && !k.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) && (I == null || o("WAWebUserPrefsMeUser").isMeAccount(I)) && o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()) {
                const T = I ?? o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
                if (T != null) {
                    return babelHelpers.extends({
                        type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
                    }, f, {
                        chat: k,
                        author: g,
                        metaFrom: T
                    });
                }
            }
            const D = v(I, k);
            const { chat, metaFrom } = D;
            return babelHelpers.extends({
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
            }, f, {
                chat,
                author: g,
                metaFrom
            });
        }
        if (botInfo && g.isPnBot() && k != null) {
            return babelHelpers.extends({
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
            }, f, {
                chat: o("WAWebWidFactory").asUserWidOrThrow(msgMeta?.targetChatJidLid ?? k),
                author: g,
                botParticipant: g
            });
        } else if (botInfo && g.isFbidBot() && k != null) {
            const N = o("WAWebWidFactory").asUserWidOrThrow(k);
            return babelHelpers.extends({
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
            }, f, {
                chat: o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() ? N : o("WAWebLidMigrationUtils").toPnOrThrow(N),
                author: g,
                botParticipant: g
            });
        } else if (g.isUser()) {
            let M = g;
            if (y != null) {
                if (!o("WAWebUserPrefsMeUser").isMeAccount(g)) {
                    return node.throw("recipient on non peer chat message");
                }
                M = y;
            }
            let originalBotRecipient = null;
            const F = o("WAWebSimpleSignalPNToFBIDMigration").getDeprecatedPnChatForFbidThread(M);
            if (F != null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parseMessageInfo: forwarding ",
                    " to ",
                    ""
                ])), M.toLogString(), F.toLogString());
                if (y != null) {
                    originalBotRecipient = y;
                }
                M = F;
            }
            const O = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(M);
            if (O != null) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[BIZAI] parseMessageInfo: forwarding ",
                    " to ",
                    ""
                ])), M.toLogString(), O.toLogString());
                if (y != null) {
                    originalBotRecipient = y;
                }
                M = O;
            }
            return babelHelpers.extends({
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT
            }, f, {
                chat: o("WAWebWidFactory").asUserWidOrThrow(M),
                author: g,
                originalBotRecipient
            });
        } else if (g.isGroup()) {
            if (author == null) {
                return node.throw("group message with no participant");
            }
            const addressingMode = node.maybeAttrEnum("addressing_mode", o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE) ?? undefined;
            try {
                if (!o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && author.isLid() && f.participantPn == null && f.displayName == null && !o("WAWebUserPrefsMeUser").isMeAccount(author)) {
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[lid group] missing participant_pn for Lid message. sw worker: ",
                        ""
                    ])), o("WAWebUserPrefsNotifications").getGlobalOfflineNotifications().toString());
                    if (o("WAWebCurrentUser").isEmployee()) {
                        o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[lid group] chat id: ",
                            " participant lid: ",
                            ""
                        ])), g.toString(), author.toString());
                        o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[lid group] missing group mapping in message parser for employee"
                        ]))).sendLogs("[lid group] missing group mapping in message parser for employee");
                    } else {
                        o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[lid group] missing group mapping in message parser"
                        ]))).sendLogs("[lid group] missing group mapping in message parser");
                    }
                }
            } catch (error) {
                o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid group] could not report missing lid in group message parser ",
                    ""
                ])), error);
            }
            return babelHelpers.extends({
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
            }, f, {
                chat: g,
                author,
                isDirect,
                addressingMode
            });
        } else {
            if (g.isBroadcast() && !g.isStatus()) {
                if (author == null) {
                    return node.throw("broadcast message with no participant");
                }
                if (o("WAWebUserPrefsMeUser").isMeAccount(author)) {
                    if (E == null && !S) {
                        return node.throw("peer broadcast message with no participants node");
                    }
                    return babelHelpers.extends({
                        type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
                    }, f, {
                        chat: g,
                        author,
                        isDirect,
                        bclParticipants: E ?? [],
                        bclHashValidated: false
                    });
                }
                return babelHelpers.extends({
                    type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_BROADCAST
                }, f, {
                    chat: g,
                    author,
                    isDirect,
                    ephSetting: node.maybeAttrString("eph_setting")
                });
            }
            if (g.isBroadcast() && g.isStatus()) {
                if (author == null) {
                    return node.throw("status message with no participant");
                }
                const statusSetting = node.maybeChild("meta")?.maybeAttrString("status_setting") ?? undefined;
                if (o("WAWebUserPrefsMeUser").isMeAccount(author) && isDirect) {
                    if (E == null) {
                        return babelHelpers.extends({
                            type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.DIRECT_PEER_STATUS
                        }, f, {
                            chat: g,
                            author,
                            isDirect,
                            statusSetting
                        });
                    }
                    const directPeerStatusBclParticipants = E.map((e)=>e.wid);
                    return babelHelpers.extends({
                        type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.DIRECT_PEER_STATUS
                    }, f, {
                        chat: g,
                        author,
                        directPeerStatusBclParticipants,
                        bclHashValidated: false,
                        statusSetting
                    });
                }
                return babelHelpers.extends({
                    type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS
                }, f, {
                    chat: g,
                    author,
                    isDirect,
                    statusSetting
                });
            }
        }
        return node.throw("Unrecognized message type");
    }
    function R(node) {
        const t = node.maybeChild("participants");
        if (!t) {
            return null;
        }
        const n = [];
        let r = 0;
        t.forEachChildWithTag("to", function(e) {
            const wid = o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("jid"));
            const a = e.maybeAttrString("eph_setting");
            const i = e.maybeAttrLidUserJid("peer_recipient_lid");
            const l = e.maybeAttrUserJid("peer_recipient_pn");
            const s = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() ? e.maybeAttrString("peer_recipient_username") : null;
            const u = e.maybeAttrLidUserJid("recipient_latest_lid");
            const c = {
                wid
            };
            if (a != null) {
                c.ephSetting = a;
            }
            if (i != null) {
                c.peerRecipientLid = o("WAWebJidToWid").lidUserJidToUserLid(i);
            }
            if (l != null) {
                c.peerRecipientPn = o("WAWebJidToWid").userJidToUserWid(l);
            }
            if (s != null) {
                c.peerRecipientUsername = s;
            }
            if (u != null) {
                if (i == null && l == null) {
                    r++;
                }
                c.recipientLatestLid = o("WAWebJidToWid").lidUserJidToUserLid(u);
            }
            n.push(c);
        });
        if (r > 0) {
            o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast] Received ",
                " recipient_latest_lid without a peer_recipient_lid nor peer_recipient_pn, this should not happen"
            ])), r);
        }
        return n;
    }
    function L(e, encs) {
        const n = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from"));
        const a = e.hasAttr("participant") ? o("WAWebJidToWid").deviceJidToDeviceWid(e.attrDeviceJid("participant")) : null;
        const i = n.isGroup() || n.isBroadcast() ? a : n;
        if (i == null) {
            return e.throw("incomingMsgParser: to have a sender");
        }
        const isUnavailable = e.hasChild("unavailable");
        if (!isUnavailable && encs.length === 0) {
            e.throw("incomingMsgParser: to have enc node children");
        }
        let isViewOnceUnavailable = false;
        let isHostedMsgUnavailable = false;
        let isAcpUnavailable = false;
        if (isUnavailable) {
            const d = e.maybeChild("unavailable");
            isHostedMsgUnavailable = d?.maybeAttrString("hosted") === "true";
            isViewOnceUnavailable = d?.maybeAttrString("type") === "view_once";
            isAcpUnavailable = d?.maybeAttrString("type") === "sender_drop";
        }
        const m = e.attrEnum("type", o("WAWebHandleMsgCommon").STANZA_MSG_TYPES);
        const p = e.maybeChild("meta");
        const pollType = m === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll ? p?.attrEnumOrNullIfUnknown("polltype", o("WAWebHandleMsgCommon").POLL_TYPES) : null;
        let statusMentioned;
        if (o("WAWebStatusGatingUtils").isStatusPrivateMentionsReceiveEnabled()) {
            statusMentioned = p?.maybeAttrString("status_mentioned") === "true";
        }
        const g = {
            isUnavailable,
            isViewOnceUnavailable,
            isHostedMsgUnavailable,
            isAcpUnavailable,
            type: m,
            pollType,
            origin: p?.maybeAttrEnum("origin", o("WAWebHandleMsgCommon").STANZA_MSG_ORIGIN),
            rawTs: e.attrString("t"),
            urlNumber: e.hasChild("url_number"),
            urlText: e.hasChild("url_text"),
            statusMentioned,
            isSkdm: encs.some((e)=>e.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg) && encs.some((e)=>e.e2eType !== o("WAWebBackendJobs.flow").CiphertextType.Skmsg),
            appdata: p?.maybeAttrEnum("appdata", o("WAWebHandleMsgCommon").APPDATA)
        };
        if (p && p.hasAttr(o("WAWebHandleMsgCommon").BIZ_SOURCE_ATTR)) {
            g.bizSource = p.attrString(o("WAWebHandleMsgCommon").BIZ_SOURCE_ATTR);
        }
        if (p && p.hasAttr("thread_msg_id")) {
            g.threadMsgId = p.attrString("thread_msg_id");
        }
        if (p && p.hasAttr("thread_msg_sender_jid")) {
            g.threadMsgSenderJid = o("WAWebJidToWid").jidWithTypeToWid(p.attrJidWithType("thread_msg_sender_jid"));
        }
        if (p && p.hasAttr("target_id")) {
            g.targetId = p.attrString("target_id");
        }
        if (p && p.hasAttr("target_sender_jid")) {
            g.targetSenderJid = o("WAWebJidToWid").jidWithTypeToWid(p.attrJidWithType("target_sender_jid"));
        }
        if (p && p.hasAttr("target_chat_jid")) {
            g.targetChatJid = o("WAWebJidToWid").jidWithTypeToWid(p.attrJidWithType("target_chat_jid"));
        }
        if (p && p.hasAttr("target_chat_jid_lid")) {
            g.targetChatJidLid = o("WAWebJidToWid").jidWithTypeToWid(p.attrJidWithType("target_chat_jid_lid"));
        }
        if (p && p.hasAttr("from")) {
            g.from = o("WAWebJidToWid").jidWithTypeToWid(p.attrJidWithType("from"));
        }
        if (p && p.hasAttr("capi") && p.attrString("capi") === "true") {
            g.capi = true;
        }
        if (m === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.event && p && p.hasAttr("event_type")) {
            g.eventType = p.attrEnum("event_type", o("WAWebHandleMsgCommon").EVENT_TYPES);
        }
        if (p && p.hasAttr("context_source")) {
            g.context_source = p.attrString("context_source");
        }
        if (p && p.hasAttr("read") && r("justknobx")._("1799")) {
            g.isReadByPeer = p.attrString("read") === "true";
        }
        if (p && p.maybeAttrString("is_group_status") === "true") {
            g.isGroupStatus = true;
        }
        const h = p?.maybeAttrString("session_scope");
        if (h != null) {
            g.metaSessionScope = o("WAWebSessionScope").SessionScope.cast(h);
        }
        if (p && p.maybeAttrString("type") === o("WAWebScheduledMsgConstants").SCHEDULED_MSG_META_TYPE) {
            const scheduledTimestampS = p.maybeAttrInt("st");
            const C = p.maybeChild("key");
            const revealKeyId = C?.maybeAttrString("rkid");
            if (scheduledTimestampS == null || C == null || revealKeyId == null) {
                throw new (o("WAParsableWapNode")).XmppParsingFailure("parseMessageMeta", "scheduled_message stanza missing st/key/rkid");
            }
            const revealKey = E(C.contentBytes());
            if (revealKey == null) {
                throw new (o("WAParsableWapNode")).XmppParsingFailure("parseMessageMeta", "scheduled_message reveal-key content has unexpected length");
            }
            g.scheduledMsgMeta = {
                scheduledTimestampS,
                revealKeyId,
                revealKey
            };
        }
        return g;
    }
    function E(e) {
        if (e.length === o("WAWebScheduledMsgConstants").SCHEDULED_MSG_REVEAL_KEY_BYTES) {
            return e;
        }
        if (e.length === o("WAWebScheduledMsgConstants").SCHEDULED_MSG_REVEAL_KEY_BYTES * 2) {
            try {
                const t = new TextDecoder().decode(e);
                const n = new Uint8Array(o("WAHex").parseHex(t));
                if (n.length === o("WAWebScheduledMsgConstants").SCHEDULED_MSG_REVEAL_KEY_BYTES) {
                    return n;
                }
            } catch (e) {}
        }
        return null;
    }
    function k(e) {
        const t = e.maybeChild("bot");
        if (t) {
            const botSenderTimestampMs = t.maybeAttrString("sender_timestamp_ms");
            const botEditTargetId = t.maybeAttrString("edit_target_id");
            const botEditType = o("WAWebBotTypes").BotMsgEditType.cast(t.maybeAttrString("edit"));
            let bizBotType;
            if (t.hasAttr("biz_bot")) {
                if (t.attrString("biz_bot") === "1") {
                    bizBotType = o("WAWebBotTypes").BizBotType.BIZ_1P;
                } else if (t.attrString("biz_bot") === "3") {
                    bizBotType = o("WAWebBotTypes").BizBotType.BIZ_3P;
                }
            }
            const botMsgBodyType = o("WAWebBotTypes").BotMsgBodyType.cast(t.maybeAttrString("type"));
            const s = {
                botSenderTimestampMs,
                botEditTargetId,
                botEditType,
                botMsgBodyType,
                bizBotType
            };
            return s;
        }
    }
    function I(e, t) {
        let n;
        const l = !!(!(t == null || (n = t.author) == null) && n.isBot());
        if (T(t)) {
            return {
                verifiedNameSerial: null,
                verifiedLevel: null,
                verifiedNameCert: null,
                privacyMode: null,
                nativeFlowName: null,
                campaignId: null
            };
        }
        const verifiedNameCert = e.hasChild("verified_name") ? e.child("verified_name").contentBytes() : null;
        const verifiedLevel = e.maybeAttrEnum("verified_level", o("WAWebHandleMsgCommon").MSG_VERIFIED_LEVEL);
        const verifiedNameSerial = e.hasAttr("verified_name") ? e.attrInt("verified_name") : -1;
        const d = e.maybeChild("biz");
        let privacyMode = null;
        if (d != null) {
            const actualActors = o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.cast(d.maybeAttrInt("actual_actors"));
            const hostStorage = o("WAWebHandleMsgTypes.flow").HostStorageEnumType.cast(d.maybeAttrInt("host_storage"));
            const privacyModeTs = d.maybeAttrInt("privacy_mode_ts");
            if (actualActors != null && hostStorage != null && privacyModeTs != null && !l) {
                privacyMode = {
                    actualActors,
                    hostStorage,
                    privacyModeTs
                };
            }
        }
        const nativeFlowName = d?.maybeChild("interactive")?.maybeChild("native_flow")?.maybeAttrString("name") ?? d?.maybeAttrString("native_flow_name");
        const h = d?.maybeChild("quality_control");
        const deliveryContextSourceType = d?.maybeChild("delivery_context")?.maybeAttrString("source_type");
        const decisionId = h?.maybeAttrString("decision_id");
        const b = h?.maybeAttrString("source_type");
        const v = [];
        h?.forEachChildWithTag("decision_source", function(e) {
            const t = e.maybeAttrString("value");
            if (t != null) {
                v.push(t);
            }
        });
        const campaignId = d?.maybeAttrString("campaign_id");
        return babelHelpers.extends({
            verifiedNameCert,
            verifiedLevel,
            verifiedNameSerial,
            privacyMode,
            nativeFlowName,
            campaignId
        }, d && {
            verifiedButtonsEnvelope: d.hasChild("buttons"),
            verifiedListEnvelope: d.hasChild("list"),
            verifiedHsmEnvelope: e.hasChild("hsm"),
            deliveryContextSourceType,
            decisionId,
            sourceType: b,
            decisionSources: v.length > 0 ? v : undefined
        });
    }
    function T(e) {
        let t;
        let n;
        if (e == null) {
            return false;
        }
        return !!((t = e.author) != null && t.isBot()) && !((n = e.chat) != null && n.isBot()) && !o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(e.author, e.metaFrom);
    }
    function D(e) {
        const t = e.maybeChild("hsm");
        if (t != null) {
            const tag = t.maybeAttrString("tag");
            const r = t.maybeAttrString("category");
            if (tag != null || r != null) {
                return {
                    tag,
                    category: r
                };
            }
        }
        return null;
    }
    function x(e) {
        let paymentInfo = null;
        let dehydratedPaymentNode = null;
        const r = e.hasChild("pay") ? e.child("pay") : null;
        const a = e.hasChild("transaction") ? e.child("transaction") : null;
        const i = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from")).isGroup();
        const l = e.hasAttr("participant") ? o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("participant")) : null;
        if (a) {
            const s = o("WAWebPaymentNotificationParser").parseTransactionNode(a);
            if (s) {
                if ($(i, l, o("WAWebWidFactory").createWid(s.receiver.toString()))) {
                    paymentInfo = {
                        receiverJid: s.receiver.toString(),
                        currency: s.currency,
                        amount1000: s.amount1000,
                        transactionTimestamp: s.ts,
                        txnStatus: o("WAWebPaymentStatusUtils").getPaymentTxnWebStatus(s.status)
                    };
                } else {
                    paymentInfo = {
                        receiverJid: s.receiver.toString(),
                        currency: s.currency,
                        amount1000: s.amount1000,
                        transactionTimestamp: s.ts
                    };
                }
            } else if (o("WAWebHandlePaymentAmountUtils").isDehydratedPaymentNode(a)) {
                dehydratedPaymentNode = "transaction";
            }
        } else if (r) {
            const u = r.attrEnum("type", o("WAWebHandleMsgCommon").PAY_NODE_TYPES);
            switch(u){
                case o("WAWebHandleMsgCommon").PAY_NODE_TYPES.send:
                    {
                        if (o("WAWebABProps").getABPropConfigValue("wa_web_xb_bubble_enabled") !== true && r.hasAttr("transaction-type") && r.attrString("transaction-type") === "remittance") {
                            paymentInfo = {
                                futureproofed: true
                            };
                            break;
                        }
                        if (o("WAWebHandlePaymentAmountUtils").isDehydratedPaymentNode(r)) {
                            dehydratedPaymentNode = "pay";
                            paymentInfo = {
                                futureproofed: true
                            };
                            break;
                        }
                        const c = o("WAWebHandlePaymentAmountUtils").getAmount1000AndCurrency(r);
                        const { amount1000, currency } = c;
                        const receiverJid = r.hasAttr("receiver") ? r.attrString("receiver") : e.attrString("recipient");
                        if ($(i, l, o("WAWebWidFactory").createWid(receiverJid))) {
                            paymentInfo = {
                                receiverJid,
                                currency,
                                amount1000,
                                transactionTimestamp: e.attrInt("t"),
                                txnStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.INIT
                            };
                        } else {
                            paymentInfo = {
                                receiverJid,
                                currency,
                                amount1000,
                                transactionTimestamp: e.attrInt("t")
                            };
                        }
                        break;
                    }
                case o("WAWebHandleMsgCommon").PAY_NODE_TYPES.request:
                    break;
                case o("WAWebHandleMsgCommon").PAY_NODE_TYPES.invite:
                    break;
                default:
                    break;
            }
        }
        return {
            paymentInfo,
            dehydratedPaymentNode
        };
    }
    function $(e, t, n) {
        return !(e && t != null && n != null && !o("WAWebUserPrefsMeUser").isMeAccount(t) && !o("WAWebUserPrefsMeUser").isMeAccount(n));
    }
    const P = new (r("WADeprecatedWapParser"))("incomingMsgParserForAckOnly", function(e) {
        e.assertTag("message");
        let t = null;
        try {
            t = e.attrEnum("type", o("WAWebHandleMsgCommon").STANZA_MSG_TYPES);
        } catch (error) {
            o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "incomingMsgParserForAckOnly: failed to parse stanza type: ",
                ""
            ])), error);
        }
        let offline = null;
        try {
            offline = e.attrString("offline") !== "";
        } catch (e) {}
        let r = null;
        try {
            r = S({
                botInfo: k(e),
                encs: [],
                node: e
            });
        } catch (error) {
            o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "incomingMsgParserForAckOnly: failed to parse msg info: ",
                ""
            ])), error);
        }
        return {
            type: t,
            externalId: e.attrString("id"),
            from: o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from")),
            participant: e.hasAttr("participant") ? o("WAWebJidToWid").deviceJidToDeviceWid(e.attrDeviceJid("participant")) : null,
            msgInfo: r,
            offline
        };
    });
    function N(e) {
        if (!o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled()) {
            return null;
        }
        const t = e.maybeChild("reporting");
        if (t == null) {
            return null;
        }
        const n = {
            stanzaTs: e.attrTime("t")
        };
        const r = t.maybeChild("reporting_token");
        const a = t.maybeChild("reporting_tag");
        if (r != null) {
            n.reportingToken = r.contentBytes();
            n.version = r.maybeAttrInt("v") ?? undefined;
        }
        if (a != null) {
            n.reportingTag = a.contentBytes();
        }
        const l = t.maybeAttrString("validation_policy");
        if (l != null) {
            const s = o("WAWebReportingTokenConstants").ReportingTokenValidationPolicy.cast(l);
            if (s != null) {
                n.validationPolicy = s;
            } else {
                o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "parseReportingTokenInfo: unknown validation_policy ",
                    ""
                ])), l);
            }
        }
        return n;
    }
    function M(e, encs) {
        if (!o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled()) {
            return null;
        }
        const n = encs.some((e)=>e.encMediaType === o("WAWebBackendJobs.flow").EncMediaType.GroupHistory);
        if (!n) {
            return null;
        }
        const r = e.maybeChild("reporting");
        if (r == null) {
            return null;
        }
        const a = r.mapChildrenWithTag("message", o("WAWebIdentityFunction").identityFunction);
        if (a.length === 0 || !o("WAWebGroupHistoryGating").isGroupHistoryReceiverReportingTokenEnabled()) {
            return null;
        }
        const sendTs = e.attrTime("t");
        const l = r.maybeAttrString("validation_policy");
        let validationPolicy = null;
        if (l != null) {
            validationPolicy = o("WAWebReportingTokenConstants").ReportingTokenValidationPolicy.cast(l) ?? null;
            if (validationPolicy == null) {
                o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                    "parseGHSReportingMetadata: unknown validation_policy ",
                    ""
                ])), l);
            }
        }
        const c = [];
        for (const d of a){
            const stanzaId = d.attrString("id");
            const p = d.maybeChild("reporting_token");
            const _ = d.maybeChild("reporting_tag");
            const reportingTag = _ != null ? new Uint8Array(_.contentBytes()) : null;
            const g = {
                stanzaId,
                reportingTag,
                sendTs,
                validationPolicy
            };
            if (p != null) {
                const version = p.maybeAttrInt("v") ?? 1;
                const b = p.contentBytes();
                c.push(babelHelpers.extends({}, g, {
                    reportingToken: new Uint8Array(b),
                    version
                }));
            } else {
                c.push(babelHelpers.extends({}, g, {
                    reportingToken: null,
                    version: null
                }));
            }
        }
        return c;
    }
    function w(e) {
        const t = e?.maybeAttrString("sender_country_code");
        if (t != null) {
            try {
                return o("WAWebAsISOCountryCode").asISOCountryCode(t);
            } catch (e) {
                if (o("WAWebCurrentUser").isEmployee()) {
                    o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to parse sender country code: ",
                        ""
                    ])), t).sendLogs("failed-to-parse-sender-country-code", {
                        sampling: 0.01
                    });
                }
            }
        }
    }
    l.incomingMsgParser = b;
    l.incomingMsgParserForAckOnly = P;
}, 98);