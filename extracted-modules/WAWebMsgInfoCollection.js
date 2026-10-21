__d("WAWebMsgInfoCollection", [
    "Promise",
    "WALogger",
    "WAWebApiMessageInfoStore",
    "WAWebBaseCollection",
    "WAWebHandleMsgTypes.flow",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgInfoAction",
    "WAWebMsgInfoModel",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebStaleBaseCollection",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(t, { countedAgents, delivery, deliveryPrivacyMode, deliveryRemaining, played, playedRemaining, read, readRemaining }) {
        const p = {
            id: t,
            read: read.map((e)=>babelHelpers.extends({}, e)),
            readRemaining,
            played: played.map((e)=>babelHelpers.extends({}, e)),
            playedRemaining,
            delivery: delivery.map((e)=>babelHelpers.extends({}, e)),
            deliveryRemaining,
            countedAgents
        };
        if (deliveryPrivacyMode != null) {
            const hostStorage = o("WAWebHandleMsgTypes.flow").HostStorageEnumType.cast(deliveryPrivacyMode.hostStorage);
            const actualActors = o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.cast(deliveryPrivacyMode.actualActors);
            if (actualActors == null || hostStorage == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "queryMsgInfo: got unsupported host storage or actual actors"
                ]))).sendLogs("queryMsgInfo-incorrect-enums");
                throw r("err")("queryMsgInfo: got unsupported host storage or actual actors");
            }
            const g = {
                hostStorage,
                privacyModeTs: deliveryPrivacyMode.privacyModeTs,
                actualActors
            };
            p.deliveryPrivacyMode = g;
        }
        return p;
    }
    const m = ((e)=>{
        function t(...a_1) {
            let t;
            t = e.call(this, ...a_1) || this;
            t.findImpl = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = o("WAWebMsgCollection").MsgCollection.get(e);
                    if (t) {
                        if (!o("WAWebMsgGetters").getIsSentByMe(t)) {
                            return (c || (c = n("Promise"))).reject(new (o("WAWebBaseCollection")).CollectionSilentQueryError("message not sent by me"));
                        }
                    } else {
                        return (c || (c = n("Promise"))).reject(new (o("WAWebBaseCollection")).CollectionSilentQueryError(`No message found for id: ${e.toString()}`));
                    }
                    let r;
                    try {
                        r = yield o("WAWebApiMessageInfoStore").queryMsgInfo(e);
                    } catch (error) {
                        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "queryMsgInfo: failed to find msg info in storage"
                        ]))).verbose().sendLogs("queryMsgInfo failed");
                        throw error;
                    }
                    const a = d(e, r);
                    return babelHelpers.extends({}, a, {
                        usePlayReceipt: t.type === o("WAWebMsgType").MSG_TYPE.PTT || t.isViewOnce
                    });
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })();
            t.findManyAndUpdate = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const t = new Map;
                    const r = [];
                    e.forEach((e)=>{
                        const t = o("WAWebMsgCollection").MsgCollection.get(e);
                        if (t && o("WAWebMsgGetters").getIsSentByMe(t)) {
                            r.push(t);
                        }
                    });
                    let a;
                    try {
                        a = yield o("WAWebApiMessageInfoStore").queryMsgInfos(e);
                    } catch (error) {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "queryMsgInfos: failed to find msg info in storage"
                        ]))).verbose().sendLogs("queryMsgInfos failed");
                        throw error;
                    }
                    r.forEach((e)=>{
                        const r = e.id;
                        const i = a.get(r.toString());
                        if (!i) {
                            return (c || (c = n("Promise"))).reject(new (o("WAWebBaseCollection")).CollectionSilentQueryError(`query returned no msg info for msg ${r.toString()}`));
                        }
                        const l = babelHelpers.extends({}, d(r, i), {
                            usePlayReceipt: e.type === o("WAWebMsgType").MSG_TYPE.PTT || e.isViewOnce
                        });
                        const s = p.gaddUp(l);
                        t.set(r.toString(), s);
                    });
                    return t;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.updateInfo = function(t, n, a, ack, l, ts) {
            const e = new (r("WAWebMsgKey"))({
                from: n,
                to: a,
                id: t,
                participant: l
            });
            const u = new (r("WAWebMsgKey"))({
                from: n,
                to: a,
                id: t
            });
            const msgInfoParam = this.get(e) || this.get(u);
            if (msgInfoParam) {
                return o("WAWebMsgInfoAction").updateMsgInfo({
                    ack,
                    msgInfoParam,
                    participant: l,
                    ts
                });
            }
        };
        return t;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    m.model = o("WAWebMsgInfoModel").MsgInfo;
    var p = new m;
    l.MsgInfoCollection = p;
}, 98);