__d("WAWebChatThreadLoggingUtils", [
    "WABase64",
    "WACryptoHmac",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebApiParse",
    "WAWebEphemeralityTypes",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebLidAwareContactsDB",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebWamEnumEphemeralityInitiatorType",
    "WAWebWamEnumEphemeralityTriggerActionType",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new TextEncoder;
    function u(e) {
        return s.encode(e).buffer;
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WACryptoHmac").hmacSha256(e, t);
            return o("WABase64").encodeB64(n);
        });
        return d.apply(this, arguments);
    }
    function m(e, t, n) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = u(t + n);
            return c(e, r);
        });
        return p.apply(this, arguments);
    }
    function _(e, t) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = u(t);
            return c(e, n);
        });
        return f.apply(this, arguments);
    }
    const g = "ctwa_3pd_aggregated";
    function h(e, t) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = u(t + g);
            return c(e, n);
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = u(t);
            return c(e, n);
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return o("WATimeUtils").toDate(o("WATimeUtils").castToUnixTime(e - 8 * o("WATimeUtils").HOUR_SECONDS)).toISOString().split("T")[0].replace(/-/g, "/");
    }
    function S(e) {
        return v(e).replace(/\//g, "-");
    }
    function R(e) {
        const t = o("WATimeUtils").toDate(o("WATimeUtils").castToUnixTime(e - 8 * o("WATimeUtils").HOUR_SECONDS));
        const n = t.getUTCFullYear();
        const r = String(t.getUTCMonth() + 1).padStart(2, "0");
        return `${n}/${r}`;
    }
    function L(e, t) {
        const n = t % o("WATimeUtils").DAY_SECONDS;
        const r = t - n;
        if (n >= e) {
            return r + e;
        }
        return r - o("WATimeUtils").DAY_SECONDS + e;
    }
    function E(e, t, n) {
        return L(e, t) > n;
    }
    function k(e) {
        return e.type !== o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT;
    }
    function I(e) {
        const n = new Set([
            o("WAWebMsgType").MSG_TYPE.PRODUCT,
            o("WAWebMsgType").MSG_TYPE.ORDER,
            o("WAWebMsgType").MSG_TYPE.LIST
        ]);
        return n.has(e.type) || n.has(e.quotedMsg?.type) || !!(e.matchedText != null && e.matchedText !== "" && T(e.matchedText)) || e.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW && (e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS || e.nativeFlowName === r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS);
    }
    function T(matchedText) {
        return o("WAWebApiParse").matchCatalogUrl(matchedText) || o("WAWebApiParse").matchProductUrl(matchedText);
    }
    function D(e) {
        if (e == null) {
            return null;
        }
        switch(e){
            case o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings:
                return o("WAWebWamEnumEphemeralityTriggerActionType").EPHEMERALITY_TRIGGER_ACTION_TYPE.ACCOUNT_SETTINGS;
            case o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings:
                return o("WAWebWamEnumEphemeralityTriggerActionType").EPHEMERALITY_TRIGGER_ACTION_TYPE.CHAT_SETTINGS;
            case o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange:
                return o("WAWebWamEnumEphemeralityTriggerActionType").EPHEMERALITY_TRIGGER_ACTION_TYPE.BULK_CHANGE;
            default:
                return null;
        }
    }
    function x(e) {
        if (e == null) {
            return null;
        }
        switch(e){
            case o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings:
                return o("WAWebWamEnumEphemeralityTriggerActionType").EPHEMERALITY_TRIGGER_ACTION_TYPE.ACCOUNT_SETTINGS;
            case o("WAWebEphemeralityTypes").DisappearingModeTrigger.ChatSettings:
                return o("WAWebWamEnumEphemeralityTriggerActionType").EPHEMERALITY_TRIGGER_ACTION_TYPE.CHAT_SETTINGS;
            case o("WAWebEphemeralityTypes").DisappearingModeTrigger.BulkChange:
                return o("WAWebWamEnumEphemeralityTriggerActionType").EPHEMERALITY_TRIGGER_ACTION_TYPE.BULK_CHANGE;
            default:
                return null;
        }
    }
    function $(e) {
        if (e == null) {
            return null;
        }
        if (e) {
            return o("WAWebWamEnumEphemeralityInitiatorType").EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_ME;
        }
        return o("WAWebWamEnumEphemeralityInitiatorType").EPHEMERALITY_INITIATOR_TYPE.INITIATED_BY_OTHER;
    }
    function P() {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            const t = yield r("WAWebLidAwareContactsDB").get(e.toJid());
            return o("WAWebUsernameTypes").isPresentUsername(t?.username);
        });
        return N.apply(this, arguments);
    }
    function M() {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
            const t = yield r("WAWebLidAwareContactsDB").get(e.toJid());
            return t?.usernameKey != null;
        });
        return w.apply(this, arguments);
    }
    function A(e) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (B(t)) {
                return null;
            }
            return o("WAWebModelStorageUtils").getStorage().lock([
                "contact"
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                let n;
                let a;
                if (t.isLid()) {
                    const i = o("WAWebApiContact").getPhoneNumber(t);
                    if (i == null) {
                        n = t.toString();
                        a = "lid";
                    } else {
                        n = o("WAJids").toPhoneUserJid(i.user);
                        a = "pn";
                    }
                } else {
                    n = o("WAJids").toPhoneUserJid(t.user);
                    a = "pn";
                }
                const l = yield r("WAWebLidAwareContactsDB").get(n);
                if (l == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[getOppositeVisibleIdentificationType] contact not found ",
                        ""
                    ])), t);
                    return null;
                }
                return O(l, a);
            }));
        });
        return F.apply(this, arguments);
    }
    function O(e, t) {
        if (e == null) {
            return o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER;
        }
        let MASKED_PHONE_NUMBER = o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.MASKED_PHONE_NUMBER;
        if (e == null) {
            MASKED_PHONE_NUMBER = o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PLACEHOLDER;
        } else if (e.isAddressBookContact) {
            MASKED_PHONE_NUMBER = o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME;
        } else if (e.verifiedName) {
            MASKED_PHONE_NUMBER = o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.VERIFIED_BUSINESS_NAME;
        } else if (t === "pn") {
            MASKED_PHONE_NUMBER = o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PHONE_NUMBER;
        } else if (o("WAWebUsernameTypes").isPresentUsername(e.username)) {
            MASKED_PHONE_NUMBER = o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME;
        }
        return MASKED_PHONE_NUMBER;
    }
    function B(e) {
        return !e.isUser() || e.isPSA() || e.isBot();
    }
    l.generateThreadID = m;
    l.generateThreadIDHMAC = _;
    l.CTWA_3PD_AGGREGATED_THREAD_ID_HMAC_SALT = g;
    l.generateCtwa3pdAggregatedThreadIDHMAC = h;
    l.generateMessageIDHMAC = C;
    l.getThreadDs = v;
    l.getThreadDsForDb = S;
    l.getThreadMonthDs = R;
    l.computeStartTs = L;
    l.shouldUpdateChatEvent = E;
    l.shouldIncrementMsgSendAndReceive = k;
    l.isCommerceMessage = I;
    l.getWamDisappearingModeTrigger = D;
    l.getWamDisappearingModeTriggerGroups = x;
    l.getWamDisappearingModeInitiatedByMe = $;
    l.getMeHasUsername = P;
    l.getMeHasUsernamePin = M;
    l.getOppositeVisibleIdentification = A;
    l.getOppositeVisibleIdentificationType = O;
}, 98);