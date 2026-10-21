__d("WAWebStorePollAddOptionDecryptedMsgs", [
    "Promise",
    "WAWebApplyPollAddOptionToParent",
    "WAWebBackendApi",
    "WAWebStoreMsgs",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.length !== 0) {
                yield o("WAWebApplyPollAddOptionToParent").applyPollAddOptionsToParent(t);
                const r = new Map;
                for (const a of t){
                    const i = a.parentMsg.id.remote.toString();
                    const l = r.get(i);
                    if (l != null) {
                        l.push(a);
                    } else {
                        r.set(i, [
                            a
                        ]);
                    }
                }
                yield (e || (e = n("Promise"))).all(Array.from(r.entries()).map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t, n]) {
                        const r = o("WAWebWidFactory").createWid(t);
                        const a = n.map((e)=>e.decryptedAddOption);
                        yield o("WAWebBackendApi").frontendSendAndReceive("processMultipleMessages", {
                            chatId: r,
                            msgObjs: a,
                            meta: {
                                add: "after",
                                isHistory: false
                            },
                            processMessagesOrigin: "pollAddOptionMessage"
                        });
                        yield o("WAWebStoreMsgs").storeMsgs(a);
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
            }
        });
        return u.apply(this, arguments);
    }
    l.storePollAddOptionDecryptedMsgs = s;
}, 98);