__d("WAWebHandleWaChat", [
    "Promise",
    "WAByteArray",
    "WADeprecatedWapParser",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebBackendJobs.flow",
    "WAWebCommsWapMd",
    "WAWebDBMessageDelete",
    "WAWebHandleMsgProcess",
    "WAWebHandleMsgTypes.flow",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = new (r("WADeprecatedWapParser"))("incomingWAChatNotificationParser", function(e) {
        e.assertTag("notification");
        e.assertAttr("from", o("WAJids").PSA_JID);
        const t = e.attrString("id");
        const n = e.attrTime("t");
        if (e.hasChild("messages")) {
            const a = e.child("messages");
            const i = a.attrString("campaign_id");
            const l = a.mapChildrenWithTag("message", function(e) {
                const n = e.attrString("id");
                let r;
                if (e.hasAttr("type")) {
                    const a = e.attrString("type");
                    r = a === "text" ? e : e.child("media");
                } else {
                    r = e;
                }
                const nativeFlowName = e?.maybeChild("biz")?.maybeChild("interactive")?.maybeChild("native_flow")?.maybeAttrString("name");
                const bizInfo = {
                    nativeFlowName,
                    verifiedNameSerial: null,
                    verifiedLevel: null,
                    verifiedNameCert: null,
                    privacyMode: null,
                    campaignId: null,
                    verifiedHsmEnvelope: true
                };
                const s = {
                    id: n,
                    body: o("WAByteArray").uint8ArrayToBuffer(r.contentBytes()),
                    bizInfo
                };
                return s;
            });
            return {
                type: "messages",
                stanzaId: t,
                ts: n,
                campaignId: i,
                messages: l
            };
        }
        const s = e.child("revoke");
        s.attrString("campaign_id");
        const revokeMessageIds = s.mapChildrenWithTag("message", function(e) {
            const t = new (r("WAWebMsgKey"))({
                fromMe: false,
                remote: o("WAWebWidFactory").createWid(o("WAJids").PSA_JID),
                id: e.attrString("id")
            });
            return t.toString();
        });
        return {
            type: "revoke",
            stanzaId: t,
            ts: n,
            revokeMessageIds
        };
    });
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = c.parse(t);
            if (r.error) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "error while parsing: ",
                    ""
                ])), t.toString());
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    ""
                ])), r.error.toString());
                throw r.error;
            }
            const r_success = r.success;
            const i = o("WAWap").wap("ack", {
                id: o("WAWap").CUSTOM_STRING(r_success.stanzaId),
                class: "notification",
                type: "psa",
                to: o("WAWebCommsWapMd").JID(o("WAWebWidFactory").createWid(o("WAJids").PSA_JID))
            });
            switch(r_success.type){
                case "revoke":
                    {
                        const l = r_success.revokeMessageIds;
                        if (l.length > 0) {
                            yield o("WAWebDBMessageDelete").removeMessagesFromHistory(l);
                            l.forEach((e)=>{
                                const t = o("WAWebMsgCollection").MsgCollection.get(e);
                                if (t) {
                                    t.delete();
                                }
                            });
                        }
                        break;
                    }
                default:
                    r_success.type;
                    yield (u || (u = n("Promise"))).all(r_success.messages.map((e)=>p(r_success, e)));
                    break;
            }
            return i;
        });
        return m.apply(this, arguments);
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ campaignId, ts }, t) {
            const { body, id: externalId } = t;
            const l = o("WAWebWidFactory").createWid(o("WAJids").PSA_JID);
            const info = {
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS,
                externalId,
                ts,
                edit: -1,
                isHsm: false,
                count: null,
                chat: l,
                author: l,
                pushname: null,
                isDirect: false,
                campaignId
            };
            const e2eInfo = {
                retryCount: 0,
                e2eType: o("WAWebBackendJobs.flow").CiphertextType.Msg,
                encMediaType: o("WAWebBackendJobs.flow").EncMediaType.Image,
                hideFail: false
            };
            yield o("WAWebHandleMsgProcess").processDecryptedMessageProto({
                decrypted: body,
                info,
                e2eInfo,
                bizInfo: t.bizInfo,
                hsmInfo: null,
                isPadded: false
            });
        });
        return _.apply(this, arguments);
    }
    l.default = d;
}, 98);