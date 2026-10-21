__d("WAWebPinMessageAction", [
    "WALogger",
    "WAWebDeleteExpiredPinsJob",
    "WAWebMsgGetters",
    "WAWebPinInChatCollection",
    "WAWebPinMsgConstants",
    "WAWebPinMsgGatingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(pinMessageType) {
        if (pinMessageType === o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL) {
            return o("WAWebPinMsgConstants").PIN_STATE.PIN;
        }
        if (pinMessageType === o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL) {
            return o("WAWebPinMsgConstants").PIN_STATE.UNPIN;
        }
        return o("WAWebPinMsgConstants").PIN_STATE.INVALID;
    }
    function c(e) {
        const t = r("nullthrows")(o("WAWebMsgGetters").getSender(e));
        const n = {
            msgKey: e.id,
            parentMsgKey: r("nullthrows")(e.pinParentKey),
            senderTimestampMs: r("nullthrows")(e.pinSenderTimestampMs),
            sender: o("WAWebWidFactory").asUserWidOrThrow(t),
            pinType: u(e.pinMessageType),
            pinExpiryDuration: e.pinExpiryDuration,
            t: e.t,
            chatId: o("WAWebWidFactory").asChatWid(e.id.remote),
            ack: e.ack,
            read: o("WAWebUserPrefsMeUser").isMeAccount(t)
        };
        return n;
    }
    function d(e, t) {
        const n = new Map;
        const r = [];
        for (const a of e){
            const i = c(a);
            if (i != null) {
                r.push(i);
                const l = i.msgKey.remote;
                if (!n.has(l.toString())) {
                    n.set(l.toString(), o("WAWebWidFactory").asChatWid(l));
                }
            }
        }
        const s = r.map((e)=>babelHelpers.extends({
                id: o("WAWebPinInChatCollection").getPinInChatId(e.parentMsgKey)
            }, e));
        o("WAWebPinInChatCollection").PinInChatCollection.add(s, {
            merge: true
        });
        const u = [];
        for (const d of t){
            const m = o("WAWebPinInChatCollection").PinInChatCollection.getByMsgKey(d);
            if (m != null) {
                u.push(m.parentMsgKey);
                const p = m.msgKey.remote;
                if (!n.has(p.toString())) {
                    n.set(p.toString(), o("WAWebWidFactory").asChatWid(p));
                }
            }
        }
        if (u.length) {
            o("WAWebPinInChatCollection").PinInChatCollection.remove(u.map(o("WAWebPinInChatCollection").getPinInChatId));
        }
        for (const _ of n.values()){
            o("WAWebPinInChatCollection").PinInChatCollection.byChatId(_).filter((e)=>e.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN).sort((e, t)=>t.senderTimestampMs - e.senderTimestampMs).slice(o("WAWebPinMsgGatingUtils").getMaxPins()).forEach((e)=>{
                e.pinType = o("WAWebPinMsgConstants").PIN_STATE.UNPIN;
            });
        }
        return r;
    }
    function m(e) {
        const validPins = [];
        const expiredPinParentKeys = [];
        for (const r of e){
            if (o("WAWebPinInChatCollection").isPinExpired(r)) {
                expiredPinParentKeys.push(r.parentMsgKey);
            } else {
                validPins.push(r);
            }
        }
        return {
            validPins,
            expiredPinParentKeys
        };
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = m(t);
            const { expiredPinParentKeys, validPins } = n;
            if (expiredPinParentKeys.length > 0) {
                try {
                    yield o("WAWebDeleteExpiredPinsJob").deleteExpiredPins(expiredPinParentKeys.map((e)=>e.toString()));
                    o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "deleteExpiredPins Success"
                    ])));
                    expiredPinParentKeys.forEach((e)=>o("WAWebPinInChatCollection").PinInChatCollection.deleteByParentMessageKey(e));
                } catch (error) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "deleteExpiredPins: error deleting expired pins from DB: ",
                        ""
                    ])), error);
                }
            }
            return validPins;
        });
        return _.apply(this, arguments);
    }
    l.craftPinMessage = c;
    l.updatePinCollection = d;
    l.checkPinExpiration = m;
    l.seekAndDestroyExpiredPins = p;
}, 98);