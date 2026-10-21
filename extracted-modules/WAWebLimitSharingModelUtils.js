__d("WAWebLimitSharingModelUtils", [
    "WAWebBackendApi",
    "WAWebContactSystemMsg",
    "WAWebDBUpdateChatTable",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLimitSharingGatingUtils",
    "WAWebProtobufsProtocol.pb",
    "WAWebSchemaChat",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Map;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebSchemaChat").getChatTable().get(e, false);
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, limitSharing) {
            yield o("WAWebDBUpdateChatTable").updateChatTable(e, {
                limitSharing
            });
            o("WAWebBackendApi").frontendFireAndForget("updateChatLimitSharing", {
                id: e,
                limitSharing
            });
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, acp2Setting) {
            yield o("WAWebDBUpdateChatTable").updateChatTable(e, {
                acp2Setting
            });
            o("WAWebBackendApi").frontendFireAndForget("updateChatAcp2Setting", {
                id: e,
                acp2Setting
            });
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const n = yield s(e.toString());
            if (!y(n?.acp2Setting, e) && n?.limitSharing?.sharingLimited === true) {
                const r = {
                    sharingLimited: n.limitSharing.sharingLimited,
                    trigger: n.limitSharing.trigger
                };
                const a = o("WAWebWidFactory").createWid(n.id);
                yield k(a, r);
            }
        });
        return f.apply(this, arguments);
    }
    function g(e) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield s(e.toString());
            const n = t?.acp2Setting;
            if (!(n == null || !y(n, e))) {
                yield L(e, {
                    enabled: true,
                    trigger: n.trigger
                });
            }
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return e?.enabled === true && o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ acp2Enabled, chatWID, sharingLimited }) {
            if (sharingLimited === true) {
                const l = yield s(chatWID.toString());
                if (l?.limitSharing?.limitSharingSettingTimestamp != null) {
                    return;
                }
                if (l?.limitSharing?.sharingLimited !== sharingLimited) {
                    const u = {
                        sharingLimited,
                        trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger.UNKNOWN,
                        limitSharingSettingTimestamp: 0
                    };
                    yield c(chatWID, u);
                    if (acp2Enabled === true && o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(chatWID)) {
                        return undefined;
                    }
                    return k(chatWID, u);
                }
            }
        });
        return b.apply(this, arguments);
    }
    function v(t) {
        e.set(t.toString(), Date.now());
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatWID, enabled, snapshotRequestedAtMs }) {
            if (enabled != null) {
                const a = yield s(chatWID.toString());
                const i = a?.acp2Setting;
                if (i?.enabled !== enabled) {
                    if (enabled && i?.settingTimestamp == null) {
                        const l = {
                            enabled,
                            trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger.UNKNOWN,
                            settingTimestamp: 0
                        };
                        yield m(chatWID, l);
                        return L(chatWID, l);
                    }
                    if (i != null) {
                        if (!T(chatWID, snapshotRequestedAtMs)) {
                            yield m(chatWID, babelHelpers.extends({}, i, {
                                enabled
                            }));
                        }
                    }
                }
            }
        });
        return R.apply(this, arguments);
    }
    function L(e, t, n) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = o("WAWebContactSystemMsg").genAcp2UpdateSystemMsg(e, t);
            const a = n?.beforeTimestamp != null ? babelHelpers.extends({}, r, {
                t: n.beforeTimestamp
            }) : r;
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: e,
                newMsg: a,
                handleSingleMsgOrigin: "acp2"
            });
            return a;
        });
        return E.apply(this, arguments);
    }
    function k(e, t, n) {
        return I.apply(this, arguments);
    }
    function I() {
        I = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(e, t);
            const a = n?.beforeTimestamp != null ? babelHelpers.extends({}, r, {
                t: n.beforeTimestamp
            }) : r;
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: e,
                newMsg: a,
                handleSingleMsgOrigin: "limitSharing"
            });
            return a;
        });
        return I.apply(this, arguments);
    }
    function T(chatWID, snapshotRequestedAtMs) {
        if (snapshotRequestedAtMs == null) {
            return false;
        }
        const o = e.get(chatWID.toString()) ?? 0;
        return o >= snapshotRequestedAtMs;
    }
    l.getChat = s;
    l.updateChat = c;
    l.updateChatAcp2Setting = m;
    l.createLimitSharingMsgOnChatClear = _;
    l.createAcp2MsgOnChatClear = g;
    l.genLimitSharingSystemMessageOnPersistedChat = C;
    l.noteDatedAcp2Write = v;
    l.genAcp2SystemMessageOnPersistedChat = S;
    l.genAcp2SystemMessage = L;
    l.genLimitSharingSystemMessage = k;
}, 98);