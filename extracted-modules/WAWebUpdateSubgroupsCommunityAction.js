__d("WAWebUpdateSubgroupsCommunityAction", [
    "WAWebApiUnjoinedSubgroupMetadataStore",
    "WAWebChatCollection",
    "WAWebGroupMetadataCollection",
    "WAWebGroupQueryBridge",
    "WAWebGroupUnjoinedSubgroupJob",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        e.joinedSubgroups = r("WAWebGroupMetadataCollection").filter((t)=>t.parentGroup?.equals(e.id) && t.participants.iAmMember()).map((e)=>e.id);
    }
    function s(e) {
        e.unjoinedSubgroups = r("WAWebUnjoinedSubgroupMetadataCollection").filter((t)=>t.parentGroupId.equals(e.id)).map((e)=>e.id);
    }
    function u(t, n) {
        o("WAWebApiUnjoinedSubgroupMetadataStore").removeUnjoinedSubgroupMetadataFromStorage(n);
        m(n);
        s(t);
        e(t);
    }
    function c(t, n) {
        r("WAWebGroupMetadataCollection").add({
            id: n,
            parentGroup: null
        }, {
            merge: true
        });
        e(t);
    }
    function d(t, n) {
        const r = o("WAWebChatCollection").ChatCollection.get(n.toString());
        const a = r?.groupMetadata;
        if (!(r == null || a == null) && (e(t), !(a.participants.length === 0 || !t.participants.iAmAdmin() && a.hiddenSubgroup === true || !t.hasJoined()))) {
            const i = {
                id: n,
                subject: r.formattedTitle,
                defaultSubgroup: !!a.defaultSubgroup,
                generalSubgroup: !!a.generalSubgroup,
                parentGroupId: t.id,
                membershipApprovalMode: a.membershipApprovalMode,
                hiddenSubgroup: !!a.hiddenSubgroup
            };
            o("WAWebGroupUnjoinedSubgroupJob").updateUnjoinedSubgroupsJob([
                i
            ], t.id);
            p([
                i
            ], t.id);
        }
    }
    function m(e) {
        r("WAWebUnjoinedSubgroupMetadataCollection").remove(e.toString());
    }
    function p(e, t, n = true) {
        e.forEach((e)=>{
            if (!n) {
                m(e.id);
                return;
            }
            let e_subject = e.subject;
            let e_subjectTime = e.subjectTime;
            const i = r("WAWebUnjoinedSubgroupMetadataCollection").get(e.id.toString());
            if (i && (i.subjectTime || 0) > (e_subjectTime || 0)) {
                e_subject = i.subject;
                e_subjectTime = i.subjectTime;
            }
            r("WAWebUnjoinedSubgroupMetadataCollection").add(babelHelpers.extends({}, e, {
                parentGroupId: t,
                subject: e_subject,
                subjectTime: e_subjectTime
            }), {
                merge: true
            });
        });
        const o = r("WAWebGroupMetadataCollection").get(t.toString());
        if (o) {
            s(o);
        }
    }
    function _(e, t) {
        const n = r("WAWebUnjoinedSubgroupMetadataCollection").filter((e)=>e.parentGroupId.equals(t)).map((e)=>e.id);
        const o = n.filter((t)=>!e.includes(t));
        r("WAWebUnjoinedSubgroupMetadataCollection").remove(o);
    }
    function f(t, n, a = true) {
        t.forEach((e)=>{
            const { generalSubgroup, hiddenSubgroup, id, subject } = e;
            if (subject != null) {
                o("WAWebGroupQueryBridge").updateSubject(id, subject);
            }
            r("WAWebGroupMetadataCollection").add(babelHelpers.extends({}, e, {
                parentGroup: a ? n : null,
                generalSubgroup: a ? generalSubgroup : null,
                hiddenSubgroup: a ? hiddenSubgroup : null
            }), {
                merge: true
            });
        });
        e(r("WAWebGroupMetadataCollection").assertGet(n.toString()));
    }
    function g(e) {
        let t;
        const n = o("WAWebChatCollection").ChatCollection.get(e.toString());
        return n == null || !((t = n.groupMetadata) != null && t.participants.iAmMember());
    }
    function h(e) {
        return e.filter((e)=>g(e));
    }
    function y(e) {
        const t = h(e.map(({ id })=>id));
        return e.filter((e)=>t.includes(e.id));
    }
    function C(e, t) {
        const n = r("WAWebUnjoinedSubgroupMetadataCollection").get(e);
        if (n != null) {
            n.membershipApprovalRequest = t;
        }
    }
    function b(e, t) {
        o("WAWebApiUnjoinedSubgroupMetadataStore").updateMembershipApprovalRequestinDB(e, t);
        C(e, t);
    }
    function v(e) {
        const t = e.map((e)=>({
                id: e.id,
                size: e.participantCount
            }));
        r("WAWebUnjoinedSubgroupMetadataCollection").add(t, {
            merge: true
        });
    }
    function S(e) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebApiUnjoinedSubgroupMetadataStore").updateSizeInDB(e);
            v(e);
        });
        return R.apply(this, arguments);
    }
    l.updateJoinedSubgroups = e;
    l.updateUnjoinedSubgroups = s;
    l.subgroupUnjoinedToJoined = u;
    l.unlinkParentGroup = c;
    l.subgroupJoinedToUnjoined = d;
    l.updateUnjoinedSubgroupsInCollection = p;
    l.cleanUnjoinedSubgroupsInCollection = _;
    l.updateJoinedSubgroupsInCollection = f;
    l.determineUnjoined = g;
    l.getUnjoinedSubgroups = y;
    l.updateMembershipApprovalRequest = b;
    l.updateUnjoinedSubgroupSize = S;
}, 98);