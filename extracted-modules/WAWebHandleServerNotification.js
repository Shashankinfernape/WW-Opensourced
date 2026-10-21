__d("WAWebHandleServerNotification", [
    "$InternalEnum",
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebAbPropsSyncJob",
    "WAWebCrashlog"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = n("$InternalEnum")({
        LOG: "log",
        ABPROPS: "abprops"
    });
    const d = new (r("WADeprecatedWapParser"))("incomingServerNotificationParser", function(e) {
        e.assertTag("notification");
        const t = e.attrString("id");
        const n = e.attrWapJid("from");
        if (e.hasChild(c.LOG)) {
            const r = e.child(c.LOG);
            const bugId = r.hasAttr("bug_id") ? r.attrString("bug_id") : null;
            const isReporter = r.hasAttr("is_bug_reporter") ? r.attrString("is_bug_reporter") === "true" : false;
            return {
                type: c.LOG,
                stanzaId: t,
                from: n,
                bugId,
                isReporter
            };
        }
        if (e.hasChild(c.ABPROPS)) {
            return {
                type: c.ABPROPS,
                stanzaId: t,
                from: n
            };
        }
        return {
            type: null,
            stanzaId: t,
            from: n
        };
    });
    function m(success) {
        const r = o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(success.stanzaId),
            class: "notification",
            type: "server",
            to: success.from
        });
        if (success.type == null) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[server-notif] unsupported type, ack-ing"
            ])));
            return (u || (u = n("Promise"))).resolve(r);
        }
        switch(success.type){
            case c.LOG:
                o("WAWebCrashlog").upload({
                    reason: o("WAWebCrashlog").SERVER_REQUESTED,
                    immediate: true,
                    isHighPri: true,
                    bugId: success.bugId,
                    isReporter: success.isReporter
                });
                return (u || (u = n("Promise"))).resolve(r);
            case c.ABPROPS:
                return o("WAWebAbPropsSyncJob").syncABPropsTask({
                    shouldSendHash: false
                }).then(()=>r);
        }
    }
    function p(e) {
        const t = d.parse(e);
        if (t.error) {
            o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                ""
            ])), t.error.toString());
            return (u || (u = n("Promise"))).reject(t.error);
        }
        return m(t.success);
    }
    l.handleServerNotification = p;
}, 98);