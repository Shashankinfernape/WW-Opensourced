__d("WAWebApiStatus", [
    "Promise",
    "WAArrayUtils",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebDbEncryptionKey",
    "WAWebLidStatusMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "countWhere"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    function m() {
        return o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey().then(()=>{
            const t = [
                p(),
                _(),
                f()
            ];
            return (d || (d = n("Promise"))).all(t).then((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    const n = t.flat(1);
                    const a = [];
                    const i = [];
                    let l = 0;
                    let u = 0;
                    n.forEach((e)=>{
                        if (e.author) {
                            if (e.viewMode === o("WAWebViewMode.flow").ViewModeType.HIDDEN) {
                                u++;
                            } else if (o("WATimeUtils").happenedWithin(o("WATimeUtils").castToUnixTime(e.t), o("WATimeUtils").DAY_SECONDS) && e.type !== o("WAWebMsgType").MSG_TYPE.REVOKED) {
                                if (e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL) {
                                    i.push(o("WAWebDBMessageSerialization").messageFromDbRow(e));
                                }
                            } else {
                                a.push(e.id);
                            }
                        } else {
                            l++;
                        }
                    });
                    if (l > 0) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " status messages have null author"
                        ])), l);
                    }
                    if (u > 0) {
                        o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " status messages have hidden viewMode"
                        ])), u);
                    }
                    yield o("WAWebSchemaMessage").getMessageTable().bulkRemove(a);
                    const c = i.map((e)=>babelHelpers.extends({}, e, {
                            id: new (r("WAWebMsgKey"))({
                                id: e.id.id,
                                remote: e.id.remote,
                                fromMe: e.id.fromMe,
                                participant: e.id.participant == null ? undefined : o("WAWebLidStatusMigrationUtils").matWidConvert(e.id.participant)
                            }),
                            from: o("WAWebLidStatusMigrationUtils").matWidConvert(e.from),
                            author: e.author == null ? undefined : o("WAWebLidStatusMigrationUtils").matWidConvert(e.author)
                        }));
                    const d = o("WAArrayUtils").groupBy(c, function(e) {
                        if (e.from.isStatus() && e.author != null) {
                            return e.author.toString();
                        }
                        return o("WAWebMsgGetters").getSender(e)?.toString() ?? e.from.toString();
                    });
                    const m = [];
                    for (const [_, f] of d){
                        const g = r("countWhere")(f, function(e) {
                            return e.ack !== undefined && e.ack < o("WAWebAck").ACK.READ;
                        });
                        const h = f[f.length - 1].t;
                        m.push({
                            id: o("WAWebWidFactory").createWid(_),
                            unreadCount: g,
                            totalCount: f.length,
                            t: h,
                            statusMsgs: f
                        });
                    }
                    return m;
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })());
        });
    }
    function p() {
        const e = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
        return o("WAWebDBMessageStoreUtils").queryChatMessageHelper(o("WAWebDBMessageUtils").beginningOfChat(e), o("WAWebDBMessageUtils").endOfChat(e), {
            lowerInclusive: false,
            upperInclusive: false
        });
    }
    function _() {
        try {
            return o("WAWebDBMessageStoreUtils").queryGroupStatusMsgsHelper();
        } catch (error) {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "getAllGroupStatusesPromise: ",
                ""
            ])), error).sendLogs("query-group-status");
        }
        return (d || (d = n("Promise"))).resolve([]);
    }
    function f() {
        try {
            if (o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
                return o("WAWebDBMessageStoreUtils").queryNewsletterStatusMsgsHelper();
            }
        } catch (error) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "getAllNewsletterStatusesPromise: ",
                ""
            ])), error).sendLogs("query-newsletter-status");
        }
        return (d || (d = n("Promise"))).resolve([]);
    }
    l.getAllStatuses = m;
}, 98);