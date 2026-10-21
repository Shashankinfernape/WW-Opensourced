__d("WAWebGroupHistoryMessageManager", [
    "WALogger",
    "WAWebDBGroupHistoryPreProcessor",
    "WAWebDBMessageUtils",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebGroupHistorySupportedMessageTypesUtil",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
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
    const f = 2;
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            const anchorMessage = yield L(t, n);
            if (anchorMessage == null) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] no join message found for chat ",
                    "; anchoring history at start of chat"
                ])), t.toString());
                return y(t);
            }
            if (yield k(t, anchorMessage)) {
                return {
                    chatId: t,
                    anchorMessage,
                    anchorInChatMsgId: o("WAWebDBMessageUtils").getInChatMsgId(r("nullthrows")(anchorMessage.internalId, "join message should have an internal id"))
                };
            }
            return y(t);
        });
        return h.apply(this, arguments);
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield x(e);
            const n = t?.internalId;
            if (n == null) {
                return null;
            }
            return {
                chatId: e,
                anchorMessage: null,
                anchorInChatMsgId: o("WAWebDBMessageUtils").getInChatMsgId(n)
            };
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t <= 0) {
                return e;
            }
            const n = yield S(e.chatId, e.anchorInChatMsgId);
            if (n == null) {
                return e;
            }
            const r = e.anchorInChatMsgId - n - 1;
            if (r >= t) {
                return e;
            }
            const a = yield x(e.chatId);
            const anchorInChatMsgId = a?.internalId != null ? o("WAWebDBMessageUtils").getInChatMsgId(a.internalId) : null;
            if (anchorInChatMsgId == null) {
                return e;
            }
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] insufficient gap below join (",
                " free < ",
                " msgs) for chat ",
                "; rebasing history below start of chat"
            ])), r, t, e.chatId.toString());
            return babelHelpers.extends({}, e, {
                anchorInChatMsgId
            });
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebDBMessageUtils").beginningOfChat(e);
            const r = o("WAWebDBMessageUtils").craftInternalId({
                chatId: e.toString(),
                inChatMsgId: t
            });
            try {
                const i = yield o("WAWebSchemaMessage").getMessageTable().between([
                    "internalId"
                ], n, r, {
                    lowerInclusive: true,
                    upperInclusive: false,
                    reverse: true,
                    limit: 1
                });
                const l = i[0]?.internalId;
                if (l == null) {
                    return null;
                }
                return o("WAWebDBMessageUtils").getInChatMsgId(l);
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] getHighestInChatMsgIdBelow err ",
                    ": ",
                    ""
                ])), e.toString(), error);
                return null;
            }
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebDBMessageUtils").beginningOfChat(e);
            let r;
            if (t != null) {
                const a = yield o("WAWebSchemaMessage").getMessageTable().get(t.toString());
                if (a?.internalId != null) {
                    r = a.internalId;
                }
            }
            if (r == null) {
                r = o("WAWebDBMessageUtils").endOfChat(e);
            }
            try {
                const i = yield o("WAWebSchemaMessage").getMessageTable().between([
                    "internalId"
                ], n, r, {
                    lowerInclusive: true,
                    upperInclusive: false,
                    reverse: true,
                    limit: 1
                }, undefined, function(e) {
                    return o("WAWebDBGroupHistoryPreProcessor").isMeJoined(e);
                });
                if (i.length === 0) {
                    return null;
                }
                return i[0];
            } catch (error) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Error finding join message for chat ",
                    ": ",
                    ""
                ])), e.toString(), error);
                return null;
            }
        });
        return E.apply(this, arguments);
    }
    function k(e, t) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t == null || t.internalId == null) {
                return false;
            }
            const n = o("WAWebDBMessageUtils").getInChatMsgId(t.internalId);
            const r = o("WAWebDBMessageUtils").beginningOfChat(e);
            const a = o("WAWebDBMessageUtils").craftInternalId({
                chatId: e.toString(),
                inChatMsgId: n
            });
            try {
                const i = yield o("WAWebSchemaMessage").getMessageTable().between([
                    "internalId"
                ], r, a, {
                    limit: f + 1
                });
                return i.length > f;
            } catch (error) {
                o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupHistory] last valid msg before join err ",
                    ": ",
                    ""
                ])), e.toString(), error);
                return false;
            }
        });
        return I.apply(this, arguments);
    }
    function T(e, t) {
        return D.apply(this, arguments);
    }
    function D() {
        D = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (t == null || t.internalId == null) {
                return null;
            }
            const n = o("WAWebDBMessageUtils").getInChatMsgId(t.internalId);
            const a = o("WAWebDBMessageUtils").beginningOfChat(e);
            const i = o("WAWebDBMessageUtils").craftInternalId({
                chatId: e.toString(),
                inChatMsgId: n
            });
            try {
                const l = yield o("WAWebSchemaMessage").getMessageTable().between([
                    "internalId"
                ], a, i, {
                    lowerInclusive: true,
                    upperInclusive: false,
                    reverse: true,
                    limit: 1
                }, undefined, function(e) {
                    return r("WAWebGroupHistorySupportedMessageTypesUtil")(e.type);
                });
                if (l.length === 0) {
                    return null;
                }
                return l[0];
            } catch (error) {
                o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupHistory] last valid msg before join err ",
                    ": ",
                    ""
                ])), e.toString(), error);
                return null;
            }
        });
        return D.apply(this, arguments);
    }
    function x(e) {
        return $.apply(this, arguments);
    }
    function $() {
        $ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebDBMessageUtils").beginningOfChat(e);
            const n = o("WAWebDBMessageUtils").endOfChat(e);
            try {
                const r = yield o("WAWebSchemaMessage").getMessageTable().between([
                    "internalId"
                ], t, n, {
                    lowerInclusive: true,
                    upperInclusive: true,
                    reverse: false,
                    limit: 1
                });
                if (r.length === 0) {
                    return null;
                }
                return r[0];
            } catch (error) {
                o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Error finding start of chat ",
                    ": ",
                    ""
                ])), e.toString(), error);
                return null;
            }
        });
        return $.apply(this, arguments);
    }
    const P = new Set([
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.FAILED_NO_RETRY,
        o("WAWebGroupHistoryMsgData.flow").MessageHistoryBundleProcessState.DEDUPED
    ]);
    function N(e, t, n) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = t.toString();
            const a = n?.internalId;
            const i = a ?? o("WAWebDBMessageUtils").beginningOfChat(e);
            const l = o("WAWebDBMessageUtils").endOfChat(e);
            try {
                const s = yield o("WAWebSchemaMessage").getMessageTable().between([
                    "internalId"
                ], i, l, {
                    lowerInclusive: a == null,
                    upperInclusive: true,
                    limit: 1
                }, undefined, function(e) {
                    return w(e, r);
                });
                return s.length > 0;
            } catch (error) {
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] hasReceivedBundleForJoinSession err ",
                    ": ",
                    ""
                ])), e.toString(), error);
                return false;
            }
        });
        return M.apply(this, arguments);
    }
    function w(e, t) {
        if (e.type !== o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE || e.id === t || r("WAWebMsgKey").from(e.id).fromMe) {
            return false;
        }
        const a = e.groupHistoryBundleMetadata?.processState;
        if (a == null) {
            return false;
        }
        return !P.has(a);
    }
    l.findGroupHistoryInsertionAnchor = g;
    l.ensureAnchorHasRoomForHistory = b;
    l.findMostRecentJoinSystemMessage = L;
    l.findLastValidMessageBefore = T;
    l.hasReceivedBundleForJoinSession = N;
}, 98);