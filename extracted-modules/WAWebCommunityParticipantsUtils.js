__d("WAWebCommunityParticipantsUtils", [
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        const n = new Set;
        const a = e.flatMap((e)=>{
            const a = r("WAWebGroupMetadataCollection").assertGet(e.toString());
            const i = o("WAWebGroupMetadataGetters").getGroupType(a) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? a.participants.getAdmins() : a.participants.toArray();
            return i.map(({ contact })=>{
                const n = o("WAWebLidMigrationUtils").toPn(contact.id);
                if (contact.id.isLid() && n != null) {
                    return o("WAWebContactCollection").ContactCollection.get(n) ?? contact;
                }
                return contact;
            }).filter((e)=>{
                if (n.has(e.id.toString())) {
                    return false;
                }
                return n.add(e.id.toString()) && t(e);
            });
        }).sort(o("WAWebContactComparator").ContactComparator);
        return a;
    }
    function s({ CAGParticipants, isLidAddressingMode, joinedSubgroups, parentGroupMembers }) {
        let l;
        let s;
        const u = [];
        const c = new Set;
        const d = [];
        const m = new Set;
        const p = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        if (p) {
            l = o("WAWebContactCollection").ContactCollection.get(p);
        }
        parentGroupMembers?.forEach(function(e) {
            if (!o("WAWebContactGetters").getIsMe(e.contact)) {
                if (e != null && e.isSuperAdmin) {
                    s = e.contact;
                } else if (e != null && e.isAdmin) {
                    u.push(e.contact);
                    c.add(e.id.toString());
                } else {
                    d.push(e.contact);
                    m.add(e.id.toString());
                }
            }
        });
        const _ = (t)=>!m.has(t.toString()) && !c.has(t.toString()) && !t.equals(s?.id) && !o("WAWebUserPrefsMeUser").isMeAccount(t) && isLidAddressingMode === t.isLid();
        if (parentGroupMembers != null && parentGroupMembers.iAmAdmin()) {
            if (CAGParticipants != null) {
                CAGParticipants.forEach(({ contact })=>{
                    const n = o("WAWebWidFactory").asUserWidOrThrow(contact.id);
                    const r = o("WAWebApiContact").getAlternateUserWid(n);
                    const a = _(n);
                    const i = r ? _(r) : true;
                    const l = a && i;
                    if (l) {
                        d.push(contact);
                        m.add(n.toString());
                    }
                });
            }
        }
        let f = [];
        if (joinedSubgroups.length) {
            f = e(joinedSubgroups, (e)=>e.id.isUser() && _(e.id));
        }
        let g = [];
        if (l) {
            g.push(l);
        }
        if (s) {
            g.push(s);
        }
        g = g.concat(u, d, f);
        return g;
    }
    l.getMembersMyselfSharesSubgroupsWith = e;
    l.mergeAndSortCommunityParticipants = s;
}, 98);