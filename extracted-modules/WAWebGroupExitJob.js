__d("WAWebGroupExitJob", [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
    "WAWebJidToWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = new (r("WADeprecatedWapParser"))("leaveGroupsResultParser", function(e) {
        e.assertAttr("type", "result");
        const t = e.child("leave");
        const n = t.mapChildren(function(e) {
            return {
                id: o("WAWebJidToWid").groupJidToWid(e.attrGroupJid("id")),
                code: e.maybeAttrInt("error") ?? 200
            };
        });
        return n;
    });
    const u = new (r("WADeprecatedWapParser"))("leaveCommunitiesResultParser", function(e) {
        e.assertAttr("type", "result");
        const t = e.child("leave");
        const n = t.mapChildren(function(e) {
            return {
                id: o("WAWebJidToWid").groupJidToWid(e.attrGroupJid("parent_group_jid")),
                code: e.maybeAttrInt("error") ?? 200
            };
        });
        return n;
    });
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let r;
            const a = t.map((e)=>o("WAWap").wap("group", {
                    id: o("WAWebCommsWapMd").GROUP_JID(e)
                }));
            const i = (r = o("WAWap")).wap("iq", {
                to: r.G_US,
                type: "set",
                xmlns: "w:g2",
                id: r.generateId()
            }, r.wap("leave", null, a));
            const l = yield o("WADeprecatedSendIq").deprecatedSendIq(i, s);
            if (l.success) {
                return l.result;
            }
            return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(l.errorCode, l.errorText));
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return c([
            e
        ]).then((e)=>e[0]);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let r;
            const a = t.map((e)=>o("WAWap").wap("linked_groups", {
                    parent_group_jid: o("WAWebCommsWapMd").GROUP_JID(e)
                }));
            const i = (r = o("WAWap")).wap("iq", {
                to: r.G_US,
                type: "set",
                xmlns: "w:g2",
                id: r.generateId()
            }, r.wap("leave", null, a));
            const l = yield o("WADeprecatedSendIq").deprecatedSendIq(i, u);
            if (l.success) {
                return l.result;
            }
            return (e || (e = n("Promise"))).reject(new (o("WAWebBackendErrors")).ServerStatusCodeError(l.errorCode, l.errorText));
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return p([
            e
        ]).then((e)=>e[0]);
    }
    l.leaveGroup = m;
    l.leaveCommunities = p;
    l.leaveCommunity = f;
}, 98);