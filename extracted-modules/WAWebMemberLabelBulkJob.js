__d("WAWebMemberLabelBulkJob", [
    "Promise",
    "WABatcher",
    "WALogger",
    "WAWebSchemaMemberLabel",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const delayMs = 3000;
    function d(memberLabelMap) {
        return new Map(memberLabelMap);
    }
    function m(prevRecord, member, memberLabel) {
        const r = prevRecord.memberLabelMap.get(member);
        return r != null && r.lastEditTimestamp > memberLabel.lastEditTimestamp;
    }
    function p({ chatId, member, memberLabel, prevRecord }) {
        if (!prevRecord) {
            return {
                chatId,
                memberLabelMap: new Map([
                    [
                        member,
                        memberLabel
                    ]
                ])
            };
        }
        const a = d(prevRecord.memberLabelMap);
        if (m(prevRecord, member, memberLabel)) {
            return prevRecord;
        }
        a.set(member, memberLabel);
        return babelHelpers.extends({}, prevRecord, {
            memberLabelMap: a
        });
    }
    function _({ member, prevRecord }) {
        const r = d(prevRecord.memberLabelMap);
        r.delete(member);
        return babelHelpers.extends({}, prevRecord, {
            memberLabelMap: r
        });
    }
    const f = o("WABatcher").batch({
        delayMs
    }, (()=>{
        const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const r = Array.from(new Set(t.map((e)=>e.data.chatId)));
            const a = o("WAWebSchemaMemberLabel").getMemberLabelTable();
            const i = new Map((yield a.bulkGet(r)).filter(Boolean).map((e)=>[
                    e.chatId,
                    e
                ]));
            const l = [];
            for (const c of t){
                const { data, type } = c;
                const { chatId, member, memberLabel } = data;
                const prevRecord = i.get(chatId);
                let C = null;
                let b = false;
                switch(type){
                    case "UPSERT":
                        {
                            if (memberLabel == null) {
                                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "[updateMemberLabelsBatched] memberLabel null for upsert"
                                ])));
                                l.push(null);
                                continue;
                            }
                            C = p({
                                chatId,
                                member,
                                memberLabel,
                                prevRecord
                            });
                            b = true;
                            break;
                        }
                    case "DELETE":
                        {
                            if (!prevRecord) {
                                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "[updateMemberLabelsBatched]: no record found for chat ",
                                    ""
                                ])), chatId);
                                l.push(null);
                                continue;
                            }
                            C = _({
                                prevRecord,
                                member
                            });
                            b = true;
                            break;
                        }
                }
                if (C != null) {
                    i.set(C.chatId, C);
                }
                l.push(b ? c : null);
            }
            const v = Array.from(i.values());
            const S = [];
            const R = [];
            for (const L of v){
                if (L.memberLabelMap.size === 0) {
                    S.push(L);
                } else {
                    R.push(L);
                }
            }
            yield (u || (u = n("Promise"))).all([
                a.bulkRemove(S.map((e)=>e.chatId)),
                a.bulkCreateOrReplace(R)
            ]);
            return l;
        });
        return function(e) {
            return t.apply(this, arguments);
        };
    })());
    l.updateMemberLabelsBatched = f;
}, 98);