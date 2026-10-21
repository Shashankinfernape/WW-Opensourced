__d("WAWebFindCommonGroupsContactAction", [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendErrors",
    "WAWebChatCollection",
    "WAWebCommonGroupsCollection",
    "WAWebContactGetters",
    "WAWebGroupsParticipantsApi",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebStateUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = 2;
    const d = 4;
    const m = 3;
    function p(e) {
        const t = e.split(/\s+/).filter(Boolean);
        if (t.length < c || t.length > d) {
            return false;
        }
        return t.every((e)=>e.length >= m);
    }
    function _(t) {
        const a = o("WAWebStateUtils").unproxy(t);
        if (o("WAWebContactGetters").getIsMe(a)) {
            return (u || (u = n("Promise"))).resolve(null);
        }
        const { commonGroups, id, promises } = a;
        if (promises.findCommonGroups) {
            return promises.findCommonGroups;
        }
        if (commonGroups && !commonGroups.stale) {
            commonGroups.set(commonGroups.filter((e)=>!e.isParentGroup));
            return (u || (u = n("Promise"))).resolve(commonGroups);
        }
        return promises.findCommonGroups = f([
            a.id,
            o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(a.id))
        ].filter(Boolean)).then((e)=>{
            const t = r("compactMap")(e, function(e) {
                return o("WAWebChatCollection").ChatCollection.get(e);
            }).filter((e)=>e.isParentGroup !== true && !e.isLocked);
            if (commonGroups) {
                commonGroups.set(t);
                commonGroups.stale = false;
            } else {
                a.commonGroups = new (r("WAWebCommonGroupsCollection"))(t, id);
            }
            return a.commonGroups;
        }).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(t) {
            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "models:Contact:findCommonGroups error: ",
                ""
            ])), t.status);
            return (u || (u = n("Promise"))).reject(r("err")(`models:Contact:findCommonGroups error: ${t.status}`));
        })).finally(()=>{
            promises.findCommonGroups = null;
        });
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaParticipant").getParticipantTable().anyOf([
                "participants"
            ], e.map((e)=>e.toString()));
            const n = new Map(t.map((e)=>[
                    e.groupId,
                    o("WAWebGroupsParticipantsApi").checkMyMembershipForParticipantRecord(e)
                ]));
            const r = t.map((e)=>e.groupId);
            const a = yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().anyOf([
                "id"
            ], r);
            const i = a.filter((e)=>e.defaultSubgroup !== true && n.get(e.id) === true).map((e)=>o("WAWebWidFactory").createWid(e.id));
            return i;
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = [];
            for (const n of e){
                const a = o("WAWebStateUtils").unproxy(n);
                if (!o("WAWebContactGetters").getIsMe(a)) {
                    const i = a.commonGroups;
                    if (i && !i.stale) {
                        i.set(i.filter((e)=>!e.isParentGroup));
                        continue;
                    }
                    t.push(a);
                }
            }
            if (t.length !== 0) {
                const l = new Map;
                const u = [];
                for (const c of t){
                    const d = [
                        c.id,
                        o("WAWebApiContact").getAlternateUserWid(o("WAWebWidFactory").asUserWidOrThrow(c.id))
                    ].filter(Boolean);
                    for (const m of d){
                        const p = m.toString();
                        l.set(p, c);
                        u.push(p);
                    }
                }
                let _;
                try {
                    _ = yield o("WAWebSchemaParticipant").getParticipantTable().anyOf([
                        "participants"
                    ], u);
                } catch (error) {
                    const f = String(error);
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "get from participants table failed"
                    ]))).verbose().sendLogs(`get from participants table failed when finding common groups: ${f}`);
                    throw r("err")("get from participants table failed");
                }
                const g = yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().anyOf([
                    "id"
                ], _.map((e)=>e.groupId));
                const h = new Set(g.filter((e)=>e.defaultSubgroup !== true).map((e)=>e.id));
                const y = new Map;
                for (const C of t){
                    y.set(C, new Map);
                }
                for (const b of _){
                    if (!(!h.has(b.groupId) || !o("WAWebGroupsParticipantsApi").checkMyMembershipForParticipantRecord(b))) {
                        const v = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(b.groupId));
                        if (!(v == null || v.isParentGroup === true || v.isLocked)) {
                            for (const S of b.participants){
                                const R = l.get(S);
                                if (R != null) {
                                    y.get(R)?.set(b.groupId, v);
                                }
                            }
                        }
                    }
                }
                for (const E of t){
                    const T = Array.from(y.get(E)?.values() ?? []);
                    const { commonGroups, id } = E;
                    if (commonGroups) {
                        commonGroups.set(T);
                        commonGroups.stale = false;
                    } else {
                        E.commonGroups = new (r("WAWebCommonGroupsCollection"))(T, id);
                    }
                }
            }
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        const n = new Map;
        const r = (t)=>{
            const e = n.get(t);
            if (e != null) {
                return e;
            }
            const r = o("WAWebStateUtils").unproxy(t);
            n.set(t, r);
            return r;
        };
        const a = e.map((e)=>{
            const t = new Set;
            for (const n of e){
                const o = n.contact;
                const a = r(o);
                if (a.commonGroups) {
                    for (const i of a.commonGroups.getModelsArray()){
                        t.add(i.id.toString());
                    }
                }
            }
            return t;
        });
        if (a.length === 0) {
            return [];
        }
        let i = new Set(a[0]);
        for(let l = 1; l < a.length; l++){
            const s = a[l];
            const u = new Set;
            for (const c of i){
                if (s.has(c)) {
                    u.add(c);
                }
            }
            i = u;
            if (i.size === 0) {
                return [];
            }
        }
        const d = new Map;
        for (const m of e){
            const p = ()=>{
                const __contact = _.contact;
                const t = r(__contact);
                if (t.commonGroups) {
                    for (const n of t.commonGroups.getModelsArray()){
                        const o = n.id.toString();
                        if (i.has(o)) {
                            if (!d.has(n)) {
                                d.set(n, []);
                            }
                            const a = d.get(n);
                            if (a != null && !a.some((t)=>t.id.toString() === __contact.id.toString())) {
                                a.push(__contact);
                            }
                        }
                    }
                }
            };
            for (var _ of m){
                p();
            }
        }
        const e_length = e.length;
        const g = [];
        const h = new Map;
        d.forEach((t, n)=>{
            h.set(n, b(t, e, e_length));
            g.push([
                n,
                t
            ]);
        });
        g.sort((e, t)=>{
            const o = h.get(e[0]) ?? 0;
            const a = h.get(t[0]) ?? 0;
            if (o !== a) {
                return a - o;
            }
            if (e[0].t != null && t[0].t != null) {
                return t[0].t - e[0].t;
            }
            if (e[0].t != null) {
                return -1;
            }
            return 1;
        });
        return g.slice(0, t);
    }
    function b(e, t, n) {
        let r = 0;
        const o = new Set(e.map((e)=>e.id.toString()));
        for(let a = 0; a < n; a++){
            const i = t[a].some(({ contact })=>o.has(contact.id.toString()));
            if (i) {
                r++;
            }
        }
        return r;
    }
    l.shouldRunMultiContactTokenSearch = p;
    l.findCommonGroups = _;
    l.findCommonGroupsForContacts = h;
    l.findGroupsWithContactGroups = C;
}, 98);