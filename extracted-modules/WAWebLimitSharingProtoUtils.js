__d("WAWebLimitSharingProtoUtils", [
    "Promise",
    "WALogger",
    "WAPromiseQueue",
    "WATimeUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebLimitSharingPropMappingUtils",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsWeb.pb",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = 60000;
    const _ = new (o("WAPromiseQueue")).PromiseQueueMap(p);
    const f = new Map;
    const g = 10080 * 60 * 1000;
    const h = 50;
    const y = new Map;
    const C = new Map;
    function b(e) {
        const t = e?.acp2Setting;
        if (t == null || !Re(t) || !o("WAWebLimitSharingGatingUtils").isAcp2Enabled()) {
            return null;
        }
        return o("WAWebParseLimitSharingHistorySyncProto").getAcp2SettingFromEnvelope(t);
    }
    function v(e, t, n) {
        if (e == null || !o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t)) {
            return false;
        }
        return !n.some((e)=>e?.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Acp2SystemMessage);
    }
    function S(e, t) {
        const r = e?.acp2Setting;
        if (r == null || !Re(r)) {
            return false;
        }
        const a = e?.id;
        if (a == null || !o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(o("WAWebWidFactory").createWid(a))) {
            return false;
        }
        const i = t?.message;
        return !(i?.messageStubType === o("WAWebProtobufsWeb.pb").WebMessageInfo$StubType.CHANGE_ACP2_SETTING || i?.message?.protocolMessage?.type === o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.ACP2_SETTING);
    }
    function R(t) {
        return (m || (m = n("Promise"))).all(Array.from(t, function([n, a]) {
            return pe(n, ()=>L(n, a)).catch((t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[acp2] history sync adoption failed"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("acp2-history-sync-adoption-failed");
            });
        })).then(r("WAWebNoop"));
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (!Ce(t)) {
                const n = yield o("WAWebLimitSharingModelUtils").getChat(e);
                if (!(n == null || !ve(t, n))) {
                    yield o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(o("WAWebWidFactory").createWid(n.id), t);
                }
            }
        });
        return E.apply(this, arguments);
    }
    function k(e) {
        return {
            sharingLimited: e.limitSharing,
            trigger: o("WAWebLimitSharingPropMappingUtils").getLimitSharingTriggerFromHistorySyncStubParameter(String(e.limitSharingTrigger)),
            initiatedByMe: e.limitSharingInitiatedByMe,
            limitSharingSettingTimestamp: e.limitSharingSettingTimestamp
        };
    }
    function I(e, t, n) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled() && !(t == null || e?.from == null || e?.id?.remote == null)) {
                const i = Ee(t);
                if (i) {
                    yield D(e, i);
                    return;
                }
                const l = t.messageContextInfo?.limitSharingV2;
                const s = e.id.remote.isUser() && ue(t) != null;
                const u = s ? null : $(e, t, n);
                if (l != null || u != null) {
                    yield P(e, l, u, n, !s);
                }
            }
        });
        return T.apply(this, arguments);
    }
    function D(e, t) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = o("WAWebParseLimitSharingHistorySyncProto").getLimitSharingFromEnvelope(t, o("WAWebWidFactory").createWid(e.from.toString()));
            e.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE;
            e.subtype = o("WAWebCommonMsgSubtypeTypes").MsgSubtype.LimitSharingSystemMessage;
            e.limitSharing = n;
            yield V(e.id.remote.toString(), n);
        });
        return x.apply(this, arguments);
    }
    function $(e, t, n) {
        const i = t.messageContextInfo?.acp2Setting;
        if (i?.enabled !== true || Number(i.settingTimestamp ?? 0) <= 0 || n === "history" || !e.id.remote.isUser() || !o("WAWebLimitSharingGatingUtils").isAcp2Enabled()) {
            return null;
        }
        return {
            enabled: true,
            trigger: i.trigger,
            settingTimestamp: i.settingTimestamp
        };
    }
    function P(e, t, n, r, o) {
        return N.apply(this, arguments);
    }
    function N() {
        N = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, acp2Rider, r, addsNotice) {
            const i = {
                limitSharing: t != null ? o("WAWebParseLimitSharingHistorySyncProto").getLimitSharingFromEnvelope(t) : null,
                acp2Rider,
                addsNotice
            };
            const l = e.id.remote.toString();
            const s = r === "history" ? null : e.id.toString();
            const u = function() {
                return M(l, i, s);
            };
            if (acp2Rider != null) {
                yield pe(l, u);
            } else {
                yield _.enqueue(l, u);
            }
        });
        return N.apply(this, arguments);
    }
    function M(e, t, n) {
        return w.apply(this, arguments);
    }
    function w() {
        w = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = yield o("WAWebLimitSharingModelUtils").getChat(e);
            if (r == null) {
                if (n != null) {
                    B(y, n, t);
                }
                return;
            }
            const a = o("WAWebWidFactory").createWid(r.id);
            if (!te(r, a)) {
                const { acp2Rider, limitSharing } = t;
                if (acp2Rider != null && (yield A(r, a, acp2Rider))) {
                    yield Y(babelHelpers.extends({}, r, {
                        acp2Setting: acp2Rider
                    }), a, limitSharing ?? O(acp2Rider), "onValueChange");
                    return;
                }
                if (limitSharing != null) {
                    yield Y(r, a, limitSharing, t.addsNotice ? "onValueChange" : undefined);
                }
            }
        });
        return w.apply(this, arguments);
    }
    function A(e, t, n) {
        return F.apply(this, arguments);
    }
    function F() {
        F = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (!o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t) || Ce(n) || !he(n, e)) {
                return false;
            }
            o("WAWebLimitSharingModelUtils").noteDatedAcp2Write(t);
            yield o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(t, n);
            yield o("WAWebLimitSharingModelUtils").genAcp2SystemMessage(t, n);
            return true;
        });
        return F.apply(this, arguments);
    }
    function O(acp2Rider) {
        return {
            sharingLimited: true,
            trigger: acp2Rider.trigger,
            limitSharingSettingTimestamp: acp2Rider.settingTimestamp
        };
    }
    function B(e, t, n) {
        if (e.size >= h) {
            const r = e.keys().next().value;
            if (r != null) {
                e.delete(r);
            }
        }
        e.set(t, n);
    }
    function W(e) {
        if (!(C.size === 0 && y.size === 0)) {
            for (const t of e){
                const n = t.id.toString();
                const r = t.id.remote.toString();
                U(r, n);
                q(r, n);
            }
        }
    }
    function q(e, t) {
        const n = C.get(t);
        if (n != null) {
            C.delete(t);
            ie(e, n).catch((e)=>{
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[acp2] applying held ACP2 setting failed"
                ]))).catching(r("getErrorSafe")(e)).sendLogs("acp2-held-setting-apply-failed");
            });
        }
    }
    function U(e, t) {
        const n = y.get(t);
        if (n != null) {
            y.delete(t);
            if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
                _.enqueue(e, function() {
                    return M(e, n, null);
                }).catch((e)=>{
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[acp2] applying held riders failed"
                    ]))).catching(r("getErrorSafe")(e)).sendLogs("acp2-held-riders-apply-failed");
                });
            }
        }
    }
    function V(e, t, n) {
        return H.apply(this, arguments);
    }
    function H() {
        H = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
                return _.enqueue(e, function() {
                    return Q(e, t, n);
                });
            }
        });
        return H.apply(this, arguments);
    }
    function G(e, t, n) {
        return z.apply(this, arguments);
    }
    function z() {
        z = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (n == null) {
                return V(e, t, "onValueChange");
            }
            if (o("WAWebLimitSharingGatingUtils").isAcp2GroupEnabled()) {
                return pe(e, ()=>j(e, t, n));
            }
            yield ce(e, n);
            return V(e, t, "onValueChange");
        });
        return z.apply(this, arguments);
    }
    function j(e, t, n) {
        return K.apply(this, arguments);
    }
    function K() {
        K = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = n.enabled === t.sharingLimited;
            const a = yield fe(e, n, r ? "onValueChange" : undefined);
            if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
                const i = !a && n.enabled !== true;
                yield Q(e, t, i ? "onValueChange" : undefined);
            }
        });
        return K.apply(this, arguments);
    }
    function Q(e, t, n) {
        return X.apply(this, arguments);
    }
    function X() {
        X = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = yield o("WAWebLimitSharingModelUtils").getChat(e);
            if (r != null) {
                yield Y(r, o("WAWebWidFactory").createWid(r.id), t, n);
            }
        });
        return X.apply(this, arguments);
    }
    function Y(e, t, n, r) {
        return J.apply(this, arguments);
    }
    function J() {
        J = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            if (Le(n, e)) {
                const l = t.isUser() && e.acp2Setting != null && o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t) && Number(e.acp2Setting?.settingTimestamp) >= Number(n.limitSharingSettingTimestamp);
                const s = !l && (r === "always" || r === "onValueChange" && e.limitSharing?.sharingLimited === true != (n.sharingLimited === true));
                yield Z(e, t, n);
                yield o("WAWebLimitSharingModelUtils").updateChat(t, n);
                if (s) {
                    yield o("WAWebLimitSharingModelUtils").genLimitSharingSystemMessage(t, n);
                }
            }
        });
        return J.apply(this, arguments);
    }
    function Z(e, t, n) {
        return ee.apply(this, arguments);
    }
    function ee() {
        ee = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (!(n.sharingLimited !== false || !t.isUser() || e.acp2Setting?.enabled !== true)) {
                yield fe(e.id, {
                    enabled: false,
                    trigger: n.trigger,
                    settingTimestamp: n.limitSharingSettingTimestamp,
                    initiatedBy: n.initiatedBy
                });
            }
        });
        return ee.apply(this, arguments);
    }
    function te(e, t) {
        return e.acp2Setting?.enabled === true && o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(t);
    }
    function ne(e, t, n) {
        return re.apply(this, arguments);
    }
    function re() {
        re = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            if (!(t == null || e?.from == null || e?.id?.remote == null) && e.id.remote.isUser()) {
                const o = Se(t);
                if (o) {
                    yield oe(e, o, n);
                }
            }
        });
        return re.apply(this, arguments);
    }
    function oe(e, t, n) {
        return ae.apply(this, arguments);
    }
    function ae() {
        ae = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = o("WAWebParseLimitSharingHistorySyncProto").getAcp2SettingFromEnvelope(t, o("WAWebWidFactory").createWid(e.from.toString()));
            e.type = o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE;
            e.subtype = o("WAWebCommonMsgSubtypeTypes").MsgSubtype.Acp2SystemMessage;
            e.acp2Setting = r;
            if (n !== "history") {
                yield ie(e.id.remote.toString(), r, undefined, e.id.toString());
            }
        });
        return ae.apply(this, arguments);
    }
    function ie(e, t, r, a) {
        if (o("WAWebLimitSharingGatingUtils").isAcp2Enabled()) {
            return pe(e, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield fe(e, t, r, a);
            }));
        }
        return (m || (m = n("Promise"))).resolve();
    }
    function le(e, t, n) {
        return se.apply(this, arguments);
    }
    function se() {
        se = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const i = e?.id?.remote;
            if (!(t == null || e?.from == null || i == null || !i.isUser() || n === "history")) {
                const l = ue(t);
                if (l != null) {
                    try {
                        yield ce(i.toString(), o("WAWebParseLimitSharingHistorySyncProto").getAcp2SettingFromEnvelope(l, o("WAWebWidFactory").createWid(e.from.toString())));
                    } catch (error) {
                        o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[acp2] ACP2 update outside the rollout failed: ",
                            ""
                        ])), r("getErrorSafe")(error));
                    }
                }
            }
        });
        return se.apply(this, arguments);
    }
    function ue(e) {
        const t = o("WAWebParseLimitSharingHistorySyncProto").getAcp2EnvelopeFromProtobuf(e);
        if (t?.type !== o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.ACP2_SETTING) {
            return null;
        }
        return t?.acp2Setting;
    }
    function ce(e, t) {
        return _.enqueue(e, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const n = yield o("WAWebLimitSharingModelUtils").getChat(e);
            if (n?.acp2Setting != null) {
                yield fe(e, t);
            }
        }));
    }
    function de(e) {
        return _.waitIfPending(e);
    }
    function me(e) {
        if (f.has(e)) {
            return _.waitIfPending(e);
        }
        return null;
    }
    function pe(e, t) {
        _e(e, 1);
        return _.enqueue(e, n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            try {
                yield t();
            } finally{
                _e(e, -1);
            }
        }));
    }
    function _e(e, t) {
        const r = (f.get(e) ?? 0) + t;
        if (r > 0) {
            f.set(e, r);
        } else {
            f.delete(e);
        }
    }
    function fe(e, t, n, r) {
        return ge.apply(this, arguments);
    }
    function ge() {
        ge = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n, r) {
            if (Ce(t)) {
                return false;
            }
            const l = yield o("WAWebLimitSharingModelUtils").getChat(e);
            if (l == null) {
                if (r != null) {
                    B(C, r, t);
                }
                return false;
            }
            if (!he(t, l)) {
                return false;
            }
            const s = o("WAWebWidFactory").createWid(l.id);
            const u = l.limitSharing != null && Number(l.limitSharing?.limitSharingSettingTimestamp) === Number(t.settingTimestamp);
            const c = o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(s) && !u && (n === "always" || n === "onValueChange" && l.acp2Setting?.enabled === true !== t.enabled);
            o("WAWebLimitSharingModelUtils").noteDatedAcp2Write(s);
            yield o("WAWebLimitSharingModelUtils").updateChatAcp2Setting(s, t);
            if (c) {
                yield o("WAWebLimitSharingModelUtils").genAcp2SystemMessage(s, t);
            }
            return c;
        });
        return ge.apply(this, arguments);
    }
    function he(e, t) {
        return ve(e, t) && !ye(e, t);
    }
    function ye(e, t) {
        const o = t.limitSharing?.limitSharingSettingTimestamp;
        return e.enabled === true && !be(o) && Number(e.settingTimestamp ?? 0) < Number(o ?? 0);
    }
    function Ce(e) {
        if (be(e.settingTimestamp)) {
            o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[acp2] ignoring a setting dated more than the drift allowance ahead"
            ])));
            return true;
        }
        return false;
    }
    function be(e) {
        return Number(e ?? 0) > o("WATimeUtils").unixTimeMs() + g;
    }
    function ve(e, t) {
        const a = e?.settingTimestamp ?? 0;
        const i = t?.acp2Setting?.settingTimestamp ?? 0;
        return Number(a) > Number(i);
    }
    function Se(e) {
        if (o("WAWebLimitSharingGatingUtils").isAcp2Enabled()) {
            return ue(e);
        }
        return null;
    }
    function Re(e) {
        return e.enabled === true && Number(e.settingTimestamp ?? 0) > 0;
    }
    function Le(e, t) {
        const a = e?.limitSharingSettingTimestamp ?? 0;
        const i = t?.limitSharing?.limitSharingSettingTimestamp ?? 0;
        return Number(a) > Number(i);
    }
    function Ee(e) {
        return o("WAWebParseLimitSharingHistorySyncProto").getLimitSharingEnvelopeFromProtobuf(e)?.limitSharing;
    }
    l.getAcp2SettingFromProtocolHistorySyncConversation = b;
    l.shouldInjectAcp2HistorySyncNotice = v;
    l.shouldWithholdHistorySyncMessage = S;
    l.applyAcp2HistorySyncAdoptions = R;
    l.getLimitSharingFromProtocolHistorySyncConversation = k;
    l.parseLimitSharingFromMessage = I;
    l.applyLimitSharingHeldForStoredMsgs = W;
    l.updateChatWithLimitSharingIfNewer = V;
    l.updateGroupWithLimitSharingIfNewer = G;
    l.parseAcp2SettingFromMessage = ne;
    l.updateChatWithAcp2IfNewer = ie;
    l.updateExistingAcp2SettingFromMessage = le;
    l.getPendingLimitSharingUpdate = de;
    l.getPendingAcp2Update = me;
}, 98);