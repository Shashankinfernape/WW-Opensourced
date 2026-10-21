__d("WAWebGetGroupKeyDistributionMsg", [
    "Promise",
    "WALogger",
    "WAWebAdvMetadataCreationFailureWamEvent",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoGenerator",
    "WAWebEncryptMsgProtobuf",
    "WAWebIdentityIcdcApi",
    "WAWebSendMsgCommonApi",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t, n, r, o, a, i) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, a, skDistributionList, axolotlSenderKeyDistributionMessage, shouldWrapDeviceSendMessage, dsmPhash, p) {
            const proto = {
                senderKeyDistributionMessage: {
                    groupId: a.toString({
                        legacy: true
                    }),
                    axolotlSenderKeyDistributionMessage
                }
            };
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getKeyDistributionMsg: precalculate ICDC for ",
                ""
            ])), t == null ? undefined : t.id.toString()).tags("messaging");
            const f = yield m({
                dsmPhash,
                groupId: a,
                proto,
                shouldWrapDeviceSendMessage,
                skDistributionList
            });
            const g = skDistributionList.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    try {
                        const a = f.get(o("WAWebWidFactory").asUserWidOrThrow(e).toString()) ?? babelHelpers.extends({}, proto);
                        const i = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(e, 0, a, undefined, undefined, p);
                        return {
                            type: i.type,
                            ciphertext: i.ciphertext,
                            participant: e
                        };
                    } catch (error) {
                        const c = o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(e));
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "getKeyDistributionMsg: encryption fail for ",
                            ", altWid: ",
                            ", ",
                            ""
                        ])), e.toString(), c?.toString() ?? "null", error).tags("messaging");
                        if (o("WAWebSendMsgCommonApi").isPrimaryDevice(e)) {
                            return (u || (u = n("Promise"))).reject(r("err")("getKeyDistributionMsg: encryption fail for primary device"));
                        }
                    }
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            const h = yield (u || (u = n("Promise"))).all(g);
            return h.filter(Boolean);
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ dsmPhash, groupId, proto, shouldWrapDeviceSendMessage, skDistributionList }) {
            const s = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
            const c = [].concat(Array.from(new Set(skDistributionList.map(o("WAWebWidFactory").asUserWidOrThrow))));
            const d = yield o("WAWebApiDeviceList").bulkGetDeviceRecord([
                s
            ].concat(c));
            const m = d[0];
            const p = babelHelpers.arrayLikeToArray(d).slice(1);
            let _ = null;
            try {
                _ = yield o("WAWebIdentityIcdcApi").getICDCMetaFromDeviceRecord(s, m);
            } catch (error) {
                new (o("WAWebAdvMetadataCreationFailureWamEvent")).AdvMetadataCreationFailureWamEvent({
                    advMetadataIsMe: true
                }).commit();
                throw error;
            }
            const f = new Map;
            yield (u || (u = n("Promise"))).all(p.map((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, n) {
                    const l = c[n];
                    let s = babelHelpers.extends({}, proto);
                    let u = null;
                    if (o("WAWebUserPrefsMeUser").isMeAccount(l)) {
                        if (shouldWrapDeviceSendMessage) {
                            s = o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(s, groupId);
                            if (dsmPhash != null && s.deviceSentMessage != null) {
                                s = babelHelpers.extends({}, s, {
                                    deviceSentMessage: babelHelpers.extends({}, s.deviceSentMessage, {
                                        phash: dsmPhash
                                    })
                                });
                            }
                        }
                    } else {
                        try {
                            u = yield o("WAWebIdentityIcdcApi").getICDCMetaFromDeviceRecord(l, e);
                        } catch (error) {
                            new (o("WAWebAdvMetadataCreationFailureWamEvent")).AdvMetadataCreationFailureWamEvent({
                                advMetadataIsMe: false
                            }).commit();
                            throw error;
                        }
                    }
                    o("WAWebE2EProtoGenerator").populateMessageContextInfo(s, _, u);
                    f.set(l.toString(), s);
                });
                return function(t, n) {
                    return e.apply(this, arguments);
                };
            })()));
            return f;
        });
        return p.apply(this, arguments);
    }
    l.getKeyDistributionMsg = c;
    l.generateMsgProtobufs = m;
}, 98);