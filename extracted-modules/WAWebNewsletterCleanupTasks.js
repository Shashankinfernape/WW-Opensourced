__d("WAWebNewsletterCleanupTasks", [
    "WAWebBackendApi",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterStorageUtils",
    "WAWebSchemaNewsletterMetadata",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = o("WAWebNewsletterStorageUtils").mapNewsletterMembershipTypeForStorage(o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest);
    function s() {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = yield o("WAWebBackendApi").frontendSendAndReceive("getActiveNewsletter");
            const n = t?.toJid();
            const r = yield o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().all();
            const a = r.filter((t)=>t.membershipType === e && t.id !== n && !o("WAWebNewsletterStorageUtils").maybeHasValidStatus(t)).map((e)=>e.id);
            yield o("WAWebNewsletterDeleteChatJob").bulkDeleteNewsletterChats(a.map(o("WAWebWidFactory").createWid));
        });
        return u.apply(this, arguments);
    }
    l.deletePreviewNewsletters = s;
}, 98);