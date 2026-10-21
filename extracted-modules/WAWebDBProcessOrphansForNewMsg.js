__d("WAWebDBProcessOrphansForNewMsg", [
    "Promise",
    "WALogger",
    "WAWebAddonProcessMsgsUtils",
    "WAWebDBGetByParentMsgKey",
    "WAWebDBMapOrphansToProviders",
    "WAWebDBProcessReactionsMsgs",
    "WAWebLidMigrationUtils",
    "WAWebSchemaMessageOrphans",
    "WAWebStoreMsgs",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e.id);
            const r = yield o("WAWebDBGetByParentMsgKey").bulkGetMessageOrphansByParentMsgKey([
                e.id,
                t
            ].filter(Boolean));
            if (r.length) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "processOrphansForNewMsg: found orphans"
                ])));
            }
            const a = o("WAWebAddonProcessMsgsUtils").sortAddonOrphans(r);
            const { legacyReactionAddons: i, otherOrphans: l, unifiedAddons: c } = a;
            const d = yield o("WAWebDBMapOrphansToProviders").mapOrphansToProviders(l);
            const p = [
                o("WAWebStoreMsgs").storeMsgs(c),
                o("WAWebDBProcessReactionsMsgs").processReactionMsgs(i)
            ];
            const _ = [];
            const f = function*() {
                const t = g[0];
                const n = g[1];
                _.push(t.processOrphansForNewMsg(e, n).then((e)=>{
                    const t = new Set;
                    m(e, t);
                    return n.map((e)=>e.msgKey).filter((e)=>!t.has(e));
                }));
            };
            for (var g of d.entries()){
                yield* f();
            }
            const h = yield (u || (u = n("Promise"))).all([
                u.all(p),
                u.all(_)
            ]);
            const y = h[1];
            let C = y.flat();
            C = C.concat(c.map((e)=>e.id.toString()));
            if (i.length) {
                C = C.concat(i.map((e)=>e.id.toString()));
            }
            yield o("WAWebSchemaMessageOrphans").getMessageOrphanTable().bulkRemove(C);
        });
        return d.apply(this, arguments);
    }
    function m(e, t) {
        if (!(e == null || typeof e !== "object") && "retainedOrphanMsgKeys" in e) {
            const n = e.retainedOrphanMsgKeys;
            if (!Array.isArray(n)) {
                p("not an array");
                return;
            }
            let r = 0;
            for (const o of n){
                if (typeof o === "string") {
                    t.add(o);
                } else {
                    r += 1;
                }
            }
            if (r > 0) {
                p(`${r} non-string entries`);
            }
        }
    }
    function p(t) {
        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "processOrphansForNewMsg: unusable retainedOrphanMsgKeys (",
            ")"
        ])), t).tags("messaging").sendLogs("orphan-retention-malformed", {
            sampling: 0.01
        });
    }
    l.processOrphansForNewMsg = c;
}, 98);