__d("WAWebDBCommunity", [
    "Promise",
    "WABatcher",
    "WAWebDBCommunityTypes",
    "WAWebGroupsParticipantsApi",
    "WAWebSchemaChat",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaUnjoinedSubgroupMetadata",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = new Map;
            const a = new Map;
            t.forEach((e)=>{
                e.subgroups.forEach((e)=>{
                    a.set(String(e.id), null);
                });
                switch(e.action){
                    case o("WAWebDBCommunityTypes").CommunityLinkOperation.SiblingGroupLink:
                    case o("WAWebDBCommunityTypes").CommunityLinkOperation.SiblingGroupUnlink:
                        r.set(String(e.chatId), null);
                        break;
                    default:
                        return;
                }
            });
            (yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().bulkGet(Array.from(r.keys()))).forEach((e)=>{
                if (e && e.parentGroup != null) {
                    r.set(e.id, String(e.parentGroup));
                }
            });
            (yield o("WAWebSchemaChat").getChatTable().bulkGet(Array.from(a.keys()))).forEach((e)=>{
                if (e) {
                    a.set(e.id, e);
                }
            });
            const i = new Map;
            const l = new Map;
            const s = new Set;
            const u = function({ link: e, parentGroupId: n, subgroups: r }) {
                r.forEach((t)=>{
                    const r = String(t.id);
                    const o = a.get(r);
                    if (o != null && !o.isReadOnly) {
                        i.set(r, {
                            id: r,
                            parentGroup: e ? n : void 0
                        });
                    } else if (e) {
                        s.delete(r);
                        const c = {
                            id: r,
                            subject: t.subject,
                            subjectTime: t.subjectTime ?? 0,
                            parentGroup: n
                        };
                        const d = l.get(r);
                        if (d && d.subjectTime > c.subjectTime) {
                            c.subject = d.subject;
                            c.subjectTime = d.subjectTime;
                        }
                        l.set(r, c);
                    } else {
                        l.delete(r);
                        s.add(r);
                    }
                });
            };
            t.forEach((e)=>{
                let t = null;
                let n = false;
                switch(e.action){
                    case o("WAWebDBCommunityTypes").CommunityLinkOperation.SiblingGroupLink:
                        t = r.get(String(e.chatId));
                        n = true;
                        break;
                    case o("WAWebDBCommunityTypes").CommunityLinkOperation.SiblingGroupUnlink:
                        t = r.get(String(e.chatId));
                        n = false;
                        break;
                    case o("WAWebDBCommunityTypes").CommunityLinkOperation.SubGroupLink:
                        t = String(e.chatId);
                        n = true;
                        break;
                    case o("WAWebDBCommunityTypes").CommunityLinkOperation.SubGroupUnlink:
                        t = String(e.chatId);
                        n = false;
                }
                if (t != null) {
                    u({
                        link: n,
                        parentGroupId: t,
                        subgroups: e.subgroups
                    });
                }
            });
            yield (e || (e = n("Promise"))).all([
                o("WAWebSchemaGroupMetadata").getGroupMetadataTable().bulkCreateOrMerge(Array.from(i.values())),
                o("WAWebSchemaUnjoinedSubgroupMetadata").getUnjoinedSubgroupMetadataTable().bulkRemove(Array.from(s)),
                o("WAWebSchemaUnjoinedSubgroupMetadata").getUnjoinedSubgroupMetadataTable().bulkGet(Array.from(l.keys())).then((e)=>{
                    e.forEach((e)=>{
                        if (e) {
                            const t = l.get(e.id);
                            if (t && e.subjectTime != null && e.subjectTime > t.subjectTime) {
                                t.subjectTime = e.subjectTime;
                                t.subject = e.subject;
                            }
                        }
                    });
                    return o("WAWebSchemaUnjoinedSubgroupMetadata").getUnjoinedSubgroupMetadataTable().bulkCreateOrMerge(Array.from(l.values()).map((e)=>babelHelpers.extends({}, e)));
                })
            ]);
        });
        return u.apply(this, arguments);
    }
    const c = (()=>{
        const t = 5000;
        return o("WABatcher").batch({
            delayMs: t
        }, (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                yield s(t);
                return (e || (e = n("Promise"))).resolve(t.map((e)=>{}));
            });
            return function(e) {
                return t.apply(this, arguments);
            };
        })());
    })();
    function d({ action: t, chatId: n, isOffline: o = false, subgroups: a }) {
        const i = {
            chatId: n,
            subgroups: a,
            action: t
        };
        if (o) {
            return c(i);
        }
        return s([
            i
        ]);
    }
    function m(e) {
        return o("WAWebSchemaGroupMetadata").getGroupMetadataTable().equals([
            "parentGroup"
        ], e.toString());
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return (yield m(e)).find((e)=>e.defaultSubgroup === true);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield p(e);
            if (t == null) {
                return null;
            }
            return o("WAWebWidFactory").createWid(t.id);
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield m(e);
            const n = (yield o("WAWebGroupsParticipantsApi").bulkCheckMyMembership(t.map(({ id: t })=>o("WAWebWidFactory").createWid(t)))).map((e, n)=>[
                    t[n],
                    e
                ]);
            return n.filter(([, t])=>t).map(([t])=>t);
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return (yield h(e)).map(({ id: t })=>o("WAWebWidFactory").createWid(t));
        });
        return b.apply(this, arguments);
    }
    function v(e) {
        return o("WAWebSchemaUnjoinedSubgroupMetadata").getUnjoinedSubgroupMetadataTable().equals([
            "parentGroup"
        ], e.toString());
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = e.parentGroup;
            if (t == null) {
                return false;
            }
            const n = o("WAWebWidFactory").createWid(e.id);
            const r = yield C(o("WAWebWidFactory").createWid(t));
            return r.length === 1 && r[0].equals(n);
        });
        return R.apply(this, arguments);
    }
    l.persistCommunityLink = d;
    l.getDefaultSubgroup = f;
    l.getJoinedSubgroupsMetadata = h;
    l.getJoinedSubgroups = C;
    l.getUnjoinedSubgroupsMetadata = v;
    l.isLastJoinedSubgroup = S;
}, 98);