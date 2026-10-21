__d("WAWebDBMessageStoreUtils", [
    "WALogger",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAddonGatingUtils",
    "WAWebApiMessageInfoStore",
    "WAWebBotBaseGating",
    "WAWebDBAddOnProviders",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebFutureproofReparseMsgsAction",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOrderPreservingHex",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = 10;
    const m = 1000000000;
    function p(e) {
        const t = e.toString(16);
        return (t.length - 1).toString(16) + t;
    }
    function _(e) {
        if (e == null || e.length < 3) {
            return null;
        }
        const t = e.split("_")[2];
        if (t) {
            return o("WAWebOrderPreservingHex").undoOrderPreservingHex(t);
        }
        return null;
    }
    function f(e, t, n) {
        const r = n != null ? p(n) : "";
        return `${e.toString()}_${t}_${r}`;
    }
    function g(e, t) {
        return `${e.toString()}_${t}_g`;
    }
    function h(e, t, n) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = yield o("WAWebSchemaMessage").getMessageTable().between([
                "internalId"
            ], e, t, n);
            const a = r.filter((e)=>E(e));
            yield k(a);
            return a;
        });
        return y.apply(this, arguments);
    }
    function C() {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaMessage").getMessageTable().startsWithAnyOf([
                "internalId"
            ], [
                o("WAWebDBMessageUtils").InternalIdPrefix.GroupStatus
            ]);
            return e;
        });
        return b.apply(this, arguments);
    }
    function v() {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebSchemaMessage").getMessageTable().startsWithAnyOf([
                "internalId"
            ], [
                o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus
            ]);
            return e;
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        if (!o("WAWebGroupUtils").INVALID_CAG_NON_ADMIN_SYSTEM_MSG_SUBTYPES.has(e.subtype) || !r("WAWebWid").isGroup(e.from)) {
            return false;
        }
        const t = r("WAWebGroupMetadataCollection").get(e.from);
        if (t == null || !o("WAWebGroupMetadataGetters").getIsCag(t)) {
            return false;
        }
        const n = t.participants.iAmAdmin();
        return !n;
    }
    function L(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN;
    }
    function E(e, t = []) {
        const n = o("WAWebDBMessageSerialization").messageFromDbRow(e);
        const r = x(e);
        const a = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(n);
        return !(r || L(e) && e.futureproofReparsed === true || a && a.canRenderInUi(n) && !t.includes(e.id.toString()) || e.type === o("WAWebMsgType").MSG_TYPE.DEBUG || !o("WAWebBotBaseGating").isBizBot1pEnabled() && e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && e.subtype === "biz_bot_1p_disclosure");
    }
    function k(e) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = T(e);
            if (t.length !== 0) {
                const n = yield o("WAWebApiMessageInfoStore").getHighestMsgAcks(t.map((e)=>r("WAWebMsgKey").from(e.id)));
                const a = [];
                t.forEach((e)=>{
                    const { ack, id } = e;
                    const o = n.get(id);
                    if (o != null && o > ack) {
                        a.push({
                            id,
                            ack: o
                        });
                        e.ack = o;
                    }
                });
                if (a.length > 0) {
                    o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "maybeUpdateMsgAck: storing ack updates ",
                        ""
                    ])), JSON.stringify(a)).tags("message-store");
                    o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge(a);
                }
            }
        });
        return I.apply(this, arguments);
    }
    function T(t) {
        const n = [];
        const a = t.filter((e)=>{
            if (!o("WAWebMsgGetters").getIsUnreadType(e) || e.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT || e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN || e.ack <= o("WAWebAck").ACK.CLOCK) {
                return false;
            }
            const t = r("WAWebMsgKey").fromString(e.id);
            if (!t.fromMe) {
                return false;
            }
            if (t.remote.isGroup() && (e.rowId != null && e.rowId < m || e.count == null)) {
                if (n.length < 3) {
                    n.push(e.id);
                }
                return false;
            }
            if (o("WAWebMsgGetters").getIsAckPlayable(e)) {
                if (e.ack === o("WAWebAck").ACK.PLAYED) {
                    return false;
                }
            } else if (e.ack === o("WAWebAck").ACK.READ) {
                return false;
            }
            return true;
        });
        if (n.length > 0) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgMayNeedAckUpdate: skipped ",
                " history group messages => ",
                ""
            ])), n.length, n).tags("message-store");
        }
        return a;
    }
    function D(e, t) {
        const r = self.performance.now();
        const a = o("WAWebABProps").getABPropConfigValue("web_init_chat_max_unread_message_count");
        let i;
        let e_unreadCount = e.unreadCount;
        let c = e.unreadDividerOffset ?? 0;
        let m;
        let p;
        let lastReceivedKey;
        let f = 0;
        const g = [];
        let h = 0;
        const y = function(r) {
            if (R(r) || (f++, r.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && r.subtype !== "ephemeral_setting")) {
                return false;
            }
            const n = o("WAWebDBMessageSerialization").messageFromDbRow(r);
            const u = x(r);
            if (u) {
                return false;
            }
            if (L(r)) {
                const y = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(n);
                if (r.futureproofReparsed === true) {
                    return false;
                }
                if (!t) {
                    g.push(r);
                } else if (y != null && y.canRenderInUi(n)) {
                    if (a !== 0 && h >= a) {
                        if (lastReceivedKey == null) {
                            lastReceivedKey = r.id;
                        }
                        if (!p) {
                            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[init-from-storage] getKeyMsgsFromChatHistory: non-fp limit ",
                                ""
                            ])), a);
                            p = r;
                        }
                        return true;
                    }
                    h++;
                    return false;
                }
            }
            if (lastReceivedKey == null) {
                lastReceivedKey = r.id;
            }
            if (!p) {
                p = r;
            }
            if (!m && !u && r.botPluginReferenceIndex == null && o("WAWebViewModeUtils").isViewModeVisibleInSurface(o("WAWebViewMode.flow").ViewModeSurface.CHAT_LIST, r.viewMode) && ![
                o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION,
                o("WAWebMsgType").MSG_TYPE.PROTOCOL,
                o("WAWebMsgType").MSG_TYPE.DEBUG
            ].includes(r.type)) {
                m = r;
            }
            if (!t && (m != null || f > d)) {
                return true;
            }
            if (e_unreadCount === 0 && c > 0) {
                if (r.type === o("WAWebMsgType").MSG_TYPE.REVOKED) {
                    c -= 1;
                    if (c === 0) {
                        i = r.id.toString();
                        return true;
                    }
                } else {
                    return true;
                }
            }
            return !!((e_unreadCount === 0 && c === 0 || a !== 0 && e.unreadCount >= a) && m || e_unreadCount > 0 && o("WAWebMsgGetters").getIsUnreadType(r) && (e_unreadCount -= 1, e_unreadCount === 0 && (i = r.id.toString(), c === 0)));
        };
        return o("WAWebSchemaMessage").getMessageTable().between([
            "internalId"
        ], `${e.id}_/`, `${e.id}_g`, {
            reverse: true
        }, y).then(()=>{
            if (g.length) {
                o("WAWebFutureproofReparseMsgsAction").processFutureproof(g).catch((e)=>{
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[init-from-storage] getKeyMsgsFromChatHistory: processFutureproof failed: ",
                        ""
                    ])), String(e));
                });
            }
            return {
                anchor: i,
                previewMsg: m || p,
                lastReceivedKey
            };
        });
    }
    function x(e) {
        if (e.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT) {
            return true;
        }
        const e_futureproofType = e.futureproofType;
        if (e_futureproofType != null) {
            return o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e_futureproofType);
        }
        return o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e.type);
    }
    const $ = new Map([
        [
            o("WAWebMsgType").MSG_TYPE.GP2,
            [
                "remove",
                "add",
                "ephemeral",
                "invite",
                "leave"
            ]
        ],
        [
            o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION,
            [
                "encrypt",
                "encrypt_now",
                "e2e_identity_unavailable",
                "identity",
                "device",
                "chat_psa"
            ]
        ],
        [
            o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
            [
                "change_number",
                "masked_thread_created",
                "cag_masked_thread_created",
                "verified_initial_unknown",
                "verified_initial_low",
                "verified_initial_high",
                "verified_transition_any_to_none",
                "verified_transition_any_to_high",
                "verified_transition_high_to_low",
                "verified_transition_high_to_unknown",
                "verified_transition_unknown_to_low",
                "verified_transition_low_to_unknown",
                "verified_transition_none_to_low",
                "verified_transition_none_to_unknown",
                "payment_transaction_status_update_failed",
                "payment_transaction_status_update_refunded",
                "payment_transaction_status_update_refund_failed",
                "payment_transaction_status_receiver_pending_setup",
                "payment_transaction_status_receiver_success_after_hiccup",
                "payment_transaction_request_cancelled",
                "payment_action_account_setup_reminder",
                "payment_action_send_payment_reminder",
                "payment_action_send_payment_invitation",
                "payment_action_request_declined",
                "payment_action_request_expired",
                "biz_bot_1p_disclosure",
                "biz_bot_3p_disclosure",
                "bot_init"
            ]
        ]
    ]);
    function P(e) {
        return $.get(e.type)?.includes(e.subtype) || false;
    }
    function N(e, t) {
        return o("WAWebSchemaMessage").getMessageTable().between([
            "internalId"
        ], `${e}_/`, `${e}_g`, {
            reverse: true
        }, t);
    }
    function M(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION && e.subtype === "encrypt" || e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && e.subtype === "biz_privacy_mode_init_fb" || e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && e.subtype === "biz_me_account_type_is_hosted" || e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && e.subtype === "biz_me_account_type_is_hosted_transition" || e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && e.subtype === "biz_account_type_is_hosted" || e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && e.subtype === "biz_account_type_changed_to_hosted";
    }
    function w(e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && (e.subtype === "bot_init" || e.subtype === "biz_bot_1p_disclosure" || e.subtype === "biz_bot_3p_disclosure" || e.subtype === "bot_session_transparency_notice");
    }
    l.extractC2STimestampFromMessageRangeIndex = _;
    l.beginningOfMessageRange = f;
    l.endOfMessageRange = g;
    l.queryChatMessageHelper = h;
    l.queryGroupStatusMsgsHelper = C;
    l.queryNewsletterStatusMsgsHelper = v;
    l.isInvalidCAGSystemMessage = R;
    l.isFutureproof = L;
    l.shouldRenderInUI = E;
    l.maybeUpdateMsgAck = k;
    l.getKeyMsgsFromChatHistory = D;
    l.isSecuritySensitiveMessage = P;
    l.getMessagesBefore = N;
    l.isInitialEncryptionMessage = M;
    l.isBotSystemMessageToPreserveOnClear = w;
}, 98);