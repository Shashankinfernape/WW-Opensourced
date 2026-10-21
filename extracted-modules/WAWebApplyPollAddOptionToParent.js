__d("WAWebApplyPollAddOptionToParent", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebCastToPollCreationMsg",
    "WAWebDBMessageSerialization",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebPollsGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (t.length !== 0) {
                const a = p(t);
                const i = Array.from(a.keys());
                const l = [];
                yield o("WAWebModelStorageUtils").getStorage().lock([
                    "message"
                ], (()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*([n]) {
                        const u = yield n.bulkGet(i);
                        const c = [];
                        i.forEach((t, n)=>{
                            const i = u[n];
                            const d = a.get(t);
                            if (i == null || d == null) {
                                if (i == null) {
                                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                        "[applyPollAddOptionsToParent] parent msg not found ",
                                        ""
                                    ])), t).sendLogs("poll_add_option_parent_not_found");
                                }
                                return;
                            }
                            const m = o("WAWebDBMessageSerialization").messageFromDbRow(i);
                            if (m.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
                                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "[applyPollAddOptionsToParent] parent not poll creation msg"
                                ]))).sendLogs("poll_add_option_parent_not_poll");
                                return;
                            }
                            const p = r("WAWebCastToPollCreationMsg")(m);
                            const f = _(p, d);
                            if (f != null) {
                                c.push(f);
                                l.push({
                                    msg: f,
                                    chatId: p.id.remote.toString()
                                });
                            }
                        });
                        if (c.length > 0) {
                            yield n.bulkCreateOrMerge(c.map((e)=>o("WAWebDBMessageSerialization").dbRowFromMessage(e)));
                        }
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })());
                yield f(l);
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        const t = new Map;
        for (const n of e){
            const r = n.parentMsg.id.toString();
            const o = t.get(r);
            if (o != null) {
                o.push(n);
            } else {
                t.set(r, [
                    n
                ]);
            }
        }
        return t;
    }
    function _(e, t) {
        const n = e.pollOptions ? [].concat(e.pollOptions) : [];
        const r = n.length;
        const a = new Set(n.map((e)=>e.name));
        const i = o("WAWebPollsGatingUtils").getMaxPollOptionCount();
        let l = n.length;
        for (const s of t){
            const u = s.decryptedAddOption.pollAddedOption.name;
            if (!a.has(u)) {
                if (n.length >= i) {
                    break;
                }
                n.push({
                    name: u,
                    localId: l,
                    addOptionMsgKey: s.decryptedAddOption.id.toString()
                });
                a.add(u);
                l++;
            }
        }
        if (n.length === r) {
            return null;
        }
        return babelHelpers.extends({}, e, {
            pollOptions: n
        });
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                const t = new Map;
                for (const r of e){
                    const { chatId: a, msg: i } = r;
                    const l = t.get(a);
                    if (l != null) {
                        l.push(i);
                    } else {
                        t.set(a, [
                            i
                        ]);
                    }
                }
                const s = yield (c || (c = n("Promise"))).allSettled(Array.from(t, (()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*([t, n]) {
                        const r = o("WAWebWidFactory").createWid(t);
                        yield o("WAWebBackendApi").frontendSendAndReceive("processMultipleMessages", {
                            chatId: r,
                            msgObjs: n,
                            meta: {
                                add: "last",
                                isHistory: false
                            },
                            processMessagesOrigin: "pollAddOptionMessage"
                        });
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                for (const d of s){
                    if (d.status === "rejected") {
                        o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "applyPollAddOptionsToParent: frontend notification failed"
                        ]))).sendLogs("poll_add_option_notify_failed");
                    }
                }
            }
        });
        return g.apply(this, arguments);
    }
    l.applyPollAddOptionsToParent = d;
    l.groupResultsByParent = p;
    l.mergeAddOptionsIntoParent = _;
}, 98);