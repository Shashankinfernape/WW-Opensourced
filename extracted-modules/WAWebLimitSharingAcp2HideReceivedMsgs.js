__d("WAWebLimitSharingAcp2HideReceivedMsgs", [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBackendApi",
    "WAWebCommonMsgUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebLimitSharingProtoUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgDataUtils",
    "WAWebParseLimitSharingHistorySyncProto",
    "WAWebProtobufsE2E.pb",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = new Set([
        (d = o("WAWebProtobufsE2E.pb")).Message$ProtocolMessage$Type.ACP2_SETTING,
        d.Message$ProtocolMessage$Type.LIMIT_SHARING,
        d.Message$ProtocolMessage$Type.REVOKE,
        d.Message$ProtocolMessage$Type.EPHEMERAL_SETTING,
        d.Message$ProtocolMessage$Type.EPHEMERAL_SYNC_RESPONSE
    ]);
    const p = new Set([
        o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT,
        o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
    ]);
    const _ = 5000;
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ messageType: n, msgs: r, proto: a }) {
            if (!p.has(n) || r.length === 0 || !o("WAWebLimitSharingGatingUtils").isAcp2Enabled() || a != null && E(a)) {
                return r;
            }
            const i = r[0].id.remote;
            if (!(yield C(i))) {
                return r;
            }
            const l = k(r);
            if (l != null) {
                yield I(i.toString(), l);
            }
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[acp2] hid ",
                " message(s) received in a restricted chat"
            ])), r.length).sendLogs("acp2-restricted-chat-msg-hidden", {
                sampling: 0.01
            });
            return [];
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatWid: t, messageType: n, t: r }) {
            if (!p.has(n) || !o("WAWebLimitSharingGatingUtils").isAcp2Enabled() || !(yield C(t))) {
                return false;
            }
            yield I(t.toString(), r);
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[acp2] hid a scheduled message received in a restricted chat"
            ]))).sendLogs("acp2-restricted-chat-msg-hidden", {
                sampling: 0.01
            });
            return true;
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.toString();
            const n = yield R(t);
            const r = n ? o("WAWebLimitSharingProtoUtils").getPendingLimitSharingUpdate(t) : o("WAWebLimitSharingProtoUtils").getPendingAcp2Update(t);
            if (!n && r == null || !o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(e)) {
                return false;
            }
            if (r == null) {
                return true;
            }
            return v(t, r);
        });
        return b.apply(this, arguments);
    }
    function v(e, t) {
        return S.apply(this, arguments);
    }
    function S() {
        S = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield o("WAPromiseTimeout").promiseTimeout(t, _).catch(()=>{
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[acp2] pending update wait timed out"
                ])));
            });
            return R(e);
        });
        return S.apply(this, arguments);
    }
    function R(e) {
        return L.apply(this, arguments);
    }
    function L() {
        L = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const n = yield o("WAWebLimitSharingModelUtils").getChat(e);
                return n?.acp2Setting?.enabled === true;
            } catch (e) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[acp2] restriction check failed, keeping the message: ",
                    ""
                ])), e);
                return false;
            }
        });
        return L.apply(this, arguments);
    }
    function E(e) {
        const l = e.deviceSentMessage?.message ?? e;
        return [
            l.protocolMessage?.type,
            o("WAWebParseLimitSharingHistorySyncProto").getAcp2EnvelopeFromProtobuf(l)?.type,
            o("WAWebParseLimitSharingHistorySyncProto").getLimitSharingEnvelopeFromProtobuf(l)?.type
        ].some((e)=>e != null && m.has(e));
    }
    function k(e) {
        let t = null;
        for (const n of e){
            if (o("WAWebMsgDataUtils").eventTypeFromMsgType(n) !== o("WAWebCommonMsgUtils").EventType.IGNORE && n.t != null && (t == null || n.t > t)) {
                t = n.t;
            }
        }
        return t;
    }
    function I(e, t) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const r = yield o("WAWebModelStorageUtils").getStorage().lock([
                "chat"
            ], (()=>{
                const r = n("asyncToGeneratorRuntime").asyncToGenerator(function*([r]) {
                    const o = yield r.get(e, false);
                    if (o == null || o.t != null && o.t >= t) {
                        return false;
                    }
                    yield r.createOrMerge(e, {
                        id: e,
                        t
                    });
                    return true;
                });
                return function(e) {
                    return r.apply(this, arguments);
                };
            })());
            if (r) {
                o("WAWebBackendApi").frontendFireAndForget("updateChatToLatest", {
                    chatIdToLatestUpdates: [
                        {
                            id: e,
                            t
                        }
                    ]
                });
            }
        });
        return T.apply(this, arguments);
    }
    l.hideMsgsReceivedInAcp2RestrictedChat = f;
    l.hideScheduledMsgInAcp2RestrictedChat = h;
}, 98);