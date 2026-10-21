__d("WAWebOutContactSync", [
    "WAJids",
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBOutContactDatabaseApi",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 1;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.OutContact;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                let n = 0;
                const r = [];
                const a = [];
                const i = [];
                for (const l of t){
                    const d = l.indexParts[1];
                    if (d == null) {
                        n++;
                        i.push({
                            actionState: o("WAWebSyncdConst").SyncActionState.Skipped
                        });
                        continue;
                    }
                    const _ = o("WAJids").interpretAndValidateJid(d);
                    if (_.jidType !== "phoneUser") {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "OutContactSync: JID missing expected domain: ",
                            ""
                        ])), d);
                        n++;
                        i.push({
                            actionState: o("WAWebSyncdConst").SyncActionState.Skipped
                        });
                        continue;
                    }
                    const f = _.userJid;
                    if (l.operation === "set") {
                        const h = l.value.outContactAction;
                        if (h == null) {
                            n++;
                            i.push({
                                actionState: o("WAWebSyncdConst").SyncActionState.Skipped
                            });
                            continue;
                        }
                        const y = m(h.fullName);
                        const C = m(h.firstName) ?? p(y);
                        r.push({
                            id: f,
                            fullName: y,
                            firstName: C
                        });
                        o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                            "OutContactSync: set ",
                            ""
                        ])), d);
                        i.push({
                            actionState: o("WAWebSyncdConst").SyncActionState.Success
                        });
                    } else {
                        if (l.operation === "remove") {
                            a.push(f);
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "OutContactSync: remove ",
                                ""
                            ])), d);
                            i.push({
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            });
                        } else {
                            n++;
                            i.push({
                                actionState: o("WAWebSyncdConst").SyncActionState.Skipped
                            });
                        }
                    }
                }
                if (r.length > 0) {
                    yield o("WAWebDBOutContactDatabaseApi").putOutContactBatch(r);
                    o("WAWebBackendApi").frontendFireAndForget("bulkUpsertOutContacts", {
                        contacts: r
                    });
                }
                if (a.length > 0) {
                    yield o("WAWebDBOutContactDatabaseApi").removeOutContactBatch(a);
                    o("WAWebBackendApi").frontendFireAndForget("bulkRemoveOutContacts", {
                        ids: a
                    });
                }
                if (n > 0) {
                    o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "OutContactSync: ",
                        " malformed mutations"
                    ])), n).sendLogs(`OutContactSync: ${n} malformed mutation(s) encountered`);
                }
                return i;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    function m(e) {
        if (e == null || e === "") {
            return null;
        }
        return e;
    }
    function p(e) {
        if (e == null) {
            return null;
        }
        const t = e.trim().split(" ")[0];
        return t || null;
    }
    const _ = new d;
    l.default = _;
}, 98);