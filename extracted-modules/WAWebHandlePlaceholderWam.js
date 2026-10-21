__d("WAWebHandlePlaceholderWam", [
    "Promise",
    "WATimeUtils",
    "WAWebDBGroupsGroupMetadata",
    "WAWebDBMessageSerialization",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebHandlePlaceholderMsgKeyHashUtils",
    "WAWebMsgGetters",
    "WAWebPlaceholderActivityWamEvent",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumPlaceholderAction",
    "WAWebWamEnumPlaceholderChatType",
    "WAWebWamEnumPlaceholderType",
    "WAWebWamGroupMetadataMetricUtils",
    "WAWebWamGroupMetricCache",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield g(e, o("WAWebWamEnumPlaceholderAction").PLACEHOLDER_ACTION.ADD);
            t.forEach((e)=>e.commit());
        });
        return u.apply(this, arguments);
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.map((e)=>o("WAWebDBMessageSerialization").messageFromDbRow(e));
            const n = yield g(t, o("WAWebWamEnumPlaceholderAction").PLACEHOLDER_ACTION.VIEW);
            n.forEach((e)=>e.commit());
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield g(e, o("WAWebWamEnumPlaceholderAction").PLACEHOLDER_ACTION.POPULATE);
            t.forEach((e)=>e.commit());
        });
        return p.apply(this, arguments);
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, placeholderActionInd) {
            const remote = e.id.remote;
            const l = !!(t != null && t.isLidAddressingMode);
            const isLid = o("WAWebWamMsgUtils").msgIsLid(e, remote, l);
            const u = new (o("WAWebPlaceholderActivityWamEvent")).PlaceholderActivityWamEvent({
                placeholderChatTypeInd: S(remote),
                placeholderTimePeriod: Math.max(o("WATimeUtils").unixTime() - (e.t ?? 0), 0),
                placeholderActionInd,
                placeholderTypeInd: e.subtype === "fanout" ? o("WAWebWamEnumPlaceholderType").PLACEHOLDER_TYPE.FANOUT : o("WAWebWamEnumPlaceholderType").PLACEHOLDER_TYPE.CIPHERTEXT,
                messageIsRevoke: o("WAWebMsgGetters").getIsRevoke(e),
                messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(e),
                isLid
            });
            if (e.placeholderAddReason != null) {
                u.placeholderAddReason = e.placeholderAddReason;
            }
            if (placeholderActionInd === o("WAWebWamEnumPlaceholderAction").PLACEHOLDER_ACTION.POPULATE && e.placeholderPopulationType != null) {
                u.placeholderPopulationType = e.placeholderPopulationType;
            }
            if (e.e2eSenderType != null) {
                u.e2eSenderType = e.e2eSenderType;
            }
            if (e.e2eSenderType === o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.MY_HOSTED_COMPANION || e.e2eSenderType === o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.OTHER_HOSTED_COMPANION) {
                u.encryptionType = o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX;
            }
            if (r("WAWebWid").isGroup(remote)) {
                yield y(u, e, t);
            } else if (r("WAWebWid").isUser(remote)) {
                u.isLid = remote.isLid();
            }
            yield b(u, e);
            return u;
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            const a = [];
            const i = [];
            for (const l of t){
                if (R(l)) {
                    if (o("WAWebMsgGetters").getIsGroupMsg(l)) {
                        i.push(l);
                    } else {
                        a.push(l);
                    }
                }
            }
            const s = (yield o("WAWebDBGroupsGroupMetadata").bulkGetGroupMetadata(i.map((e)=>e.id.remote))).map((e, t)=>[
                    i[t],
                    e
                ]);
            return (e || (e = n("Promise"))).all([].concat(a.map((e)=>_(e, null, r)), s.map(([t, n])=>_(t, n, r))));
        });
        return h.apply(this, arguments);
    }
    function y(e, t, n) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
            const r = yield o("WAWebWamGroupMetricCache").getGroupMetrics(t.id.remote);
            if (r != null) {
                if (r.participantCount != null) {
                    e.participantCount = r.participantCount;
                }
                if (r.deviceCount != null) {
                    e.deviceCount = r.deviceCount;
                }
                if (r.deviceSizeBucket != null) {
                    e.deviceSizeBucket = r.deviceSizeBucket;
                }
            }
            if (n) {
                const a = o("WAWebWamGroupMetadataMetricUtils").isCagFromGroupMetadata(n);
                e.isLid = a && o("WAWebMsgGetters").getIsReaction(t);
                e.typeOfGroup = o("WAWebGroupType").groupTypeToWamEnum(o("WAWebGroupMetadataGetters").getGroupType(n));
            }
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebHandlePlaceholderMsgKeyHashUtils").getMessageKeyHash(t);
            if (n != null) {
                e.messageKeyHash = n;
            }
        });
        return v.apply(this, arguments);
    }
    function S(remote) {
        if (r("WAWebWid").isGroup(remote)) {
            return o("WAWebWamEnumPlaceholderChatType").PLACEHOLDER_CHAT_TYPE.GROUP;
        }
        if (r("WAWebWid").isStatus(remote)) {
            return o("WAWebWamEnumPlaceholderChatType").PLACEHOLDER_CHAT_TYPE.STATUS;
        }
        if (r("WAWebWid").isBroadcast(remote)) {
            return o("WAWebWamEnumPlaceholderChatType").PLACEHOLDER_CHAT_TYPE.BROADCAST;
        }
        if (r("WAWebWid").isUser(remote)) {
            return o("WAWebWamEnumPlaceholderChatType").PLACEHOLDER_CHAT_TYPE.INDIVIDUAL;
        }
        if (r("WAWebWid").isNewsletter(remote)) {
            return o("WAWebWamEnumPlaceholderChatType").PLACEHOLDER_CHAT_TYPE.CHANNEL;
        }
        return o("WAWebWamEnumPlaceholderChatType").PLACEHOLDER_CHAT_TYPE.OTHER;
    }
    function R(e) {
        return !(e.subtype === "view_once_unavailable_fanout" || e.subtype === "acp_unavailable_fanout");
    }
    l.postPlaceholderActivityAddEvent = s;
    l.postPlaceholderActivityViewEvent = c;
    l.postPlaceholderActivityPopulateEvent = m;
}, 98);