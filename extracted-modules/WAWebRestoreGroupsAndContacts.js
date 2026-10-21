__d("WAWebRestoreGroupsAndContacts", [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebApiHydrateWidsUtil",
    "WAWebBackendApi",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebDBOutContactDatabaseApi",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupQueryBridge",
    "WAWebLidAwareContactsDB",
    "WAWebModelStorageInitialize",
    "WAWebPerformanceUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebWamMemoryStat",
    "WAWebWamOfflineResumeReporter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    function h() {
        o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreGroupsAndContacts_start");
        return o("WAWebModelStorageInitialize").initializeWithoutGKs().then(n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[init-from-storage] restoreGroupsAndContacts: start"
            ])));
            const t = self.performance.now();
            o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreContactsReadByLid_start");
            const a = r("WAWebLidAwareContactsDB").all().then((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[init-from-storage] contacts: got ",
                        " from db"
                    ])), o("WAWebWamMemoryStat").roundIntForMetrics(e.length));
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("WarmupAllLidMappings_start");
                    yield o("WAWebApiContact").warmUpAllLidPnMappings(e);
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("WarmupAllLidMappings_end");
                    y(e);
                    o("WAWebContactCollection").ContactCollection.add(o("WAWebApiHydrateWidsUtil").hydrateWids(e), {
                        silent: true,
                        merge: true
                    });
                    o("WAWebChatCollection").ChatCollection.forEach(b);
                    o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreContactsReadByLid_end");
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[init-from-storage] contacts: restored ",
                        ", took ",
                        ""
                    ])), o("WAWebWamMemoryStat").roundIntForMetrics(e.length), o("WAWebPerformanceUtils").getElapsedTimeMs(t));
                    return e;
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreGroups_start");
            const i = o("WAWebSchemaGroupMetadata").getGroupMetadataTable().all().then((e)=>{
                r("WAWebGroupMetadataCollection").add(e.map(o("WAWebApiHydrateWidsUtil").hydrateWids), {
                    merge: true
                });
                e.forEach((e)=>{
                    const t = o("WAWebWidFactory").createWidFromWidLike(e.id);
                    if (e.isParentGroup === true) {
                        o("WAWebChatCollection").ChatCollection.gadd({
                            id: t,
                            isReadOnly: false
                        });
                    }
                    o("WAWebGroupQueryBridge").updateSubject(t, e.subject);
                });
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[init-from-storage] groups: restored ",
                    ", took ",
                    ""
                ])), o("WAWebWamMemoryStat").roundIntForMetrics(e.length), o("WAWebPerformanceUtils").getElapsedTimeMs(t));
                o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreGroups_end");
            });
            return (g || (g = n("Promise"))).all([
                a,
                i
            ]);
        })).then(()=>{
            o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint("RestoreGroupsAndContacts_end");
        }).then(()=>{
            o("WAWebDBOutContactDatabaseApi").getAllOutContacts().then((e)=>{
                const contacts = e.map((e)=>({
                        id: e.id,
                        fullName: e.fullName,
                        firstName: e.firstName
                    }));
                o("WAWebBackendApi").frontendFireAndForget("bulkUpsertOutContacts", {
                    contacts
                });
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[init-from-storage] out-contacts: restored ",
                    ""
                ])), o("WAWebWamMemoryStat").roundIntForMetrics(e.length));
            }).catch((e)=>{
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[init-from-storage] restoreOutContacts failed: ",
                    ""
                ])), String(e));
            });
        });
    }
    function y(e) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            o("WAWebApiContact").armContactHashRepairWait();
            try {
                const t = [];
                for (const n of e){
                    if (n.contactHash == null) {
                        n.contactHash = o("WAWebApiContact").getContactHash(n.id);
                        t.push(n);
                    }
                }
                if (t.length > 0) {
                    o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[init-from-storage] contacts: ",
                        " missing hash, updating"
                    ])), t.length);
                    yield o("WAWebApiContact").updateContactsHashes(t);
                }
            } catch (error) {
                o("WALogger").WARN(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[init-from-storage] contacts: hash repair failed: ",
                    ""
                ])), String(error));
            } finally{
                o("WAWebApiContact").markContactHashRepairComplete();
            }
        });
        return C.apply(this, arguments);
    }
    function b(e) {
        try {
            if (e.trusted || !o("WAWebFrontendContactGetters").getIsMyContact(e.contact)) {
                return;
            }
            e.isTrusted();
            o("WAWebChatGroupUtils").updateTitle(e);
        } catch (error) {
            o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "[init-from-storage] contacts: chat refresh failed: ",
                ""
            ])), String(error));
        }
    }
    l.restoreGroupsAndContacts = h;
}, 98);