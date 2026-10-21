__d("WAWebQueryAndUpdateAllNewslettersMetadataAction", [
    "Promise",
    "WAJids",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebCommonNewsletterEnums",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterDeleteChatJob",
    "WAWebNewsletterGetAdminInfoJob",
    "WAWebNewsletterGetNewsletterEnforcementAlertAction",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
    "WAWebSchemaChat",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(entryPoint, r = {}) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[queryAndUpdateAllNewsletterMetadataAction] Start"
            ])));
            const a = r ?? {};
            const { addSystemMsgs, messageCount, qplEvent } = a;
            try {
                qplEvent?.annotate({
                    string: {
                        entryPoint
                    }
                });
                qplEvent?.addPoint("getAllNewslettersMetadata_start");
                const g = yield o("WAWebNewsletterMetadataJob").getAllNewslettersMetadata();
                const { deletedNewsletters, newsletters } = g;
                const b = newsletters.reduce((acc, newsletter)=>{
                    acc.chats.push(o("WAWebNewsletterModelUtils").mapNewsletterToChat(newsletter));
                    acc.metadata.push(o("WAWebNewsletterModelUtils").mapNewsletterToMetadata(newsletter));
                    const r = newsletter.newsletterPictureMetadataMixin?.picture;
                    if (r != null) {
                        acc.pics.push(o("WAWebNewsletterModelUtils").mapPicturesToProfilePicThumb(newsletter.idJid, r));
                    }
                    return acc;
                }, {
                    chats: [],
                    metadata: [],
                    pics: []
                });
                const { chats, metadata, pics } = b;
                qplEvent?.addPoint("getAllNewslettersMetadata_end");
                qplEvent?.addPoint("processDeletedNewsletters_start");
                yield f(deletedNewsletters);
                qplEvent?.addPoint("processDeletedNewsletters_end");
                const L = newsletters.map((e)=>e.idJid).concat(...(deletedNewsletters?.id || []).map((e)=>e.jid));
                if (entryPoint === o("WAWebCommonNewsletterEnums").NewsletterMetadataUpdateEntryPoint.DirtyBit) {
                    if (qplEvent != null) {
                        qplEvent.addPoint("processUnsubscribedNewsletters_start");
                    }
                    yield h(L);
                    if (qplEvent != null) {
                        qplEvent.addPoint("processUnsubscribedNewsletters_end");
                    }
                }
                qplEvent?.addPoint("fetchAdminCountsForOwnerNewsletter_start");
                yield (m || (m = n("Promise"))).all(metadata.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        if (o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(e)) {
                            const t = yield o("WAWebNewsletterGetAdminInfoJob").getNewsletterAdminInfo(o("WAJids").toNewsletterJid(e.id.toString()));
                            const { adminCount, adminProfile, adminProfilesSettingEnabled } = t;
                            if (o("WAWebNewsletterMembershipUtil").iAmOwner(e)) {
                                e.adminCount = adminCount;
                            }
                            e.adminProfile = adminProfile;
                            e.adminProfilesSettingEnabled = adminProfilesSettingEnabled;
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                qplEvent?.addPoint("fetchAdminCountsForOwnerNewsletter_end");
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[queryAndUpdateAllNewsletterMetadataAction] update model"
                ])));
                yield o("WAWebQueryAndUpdateNewslettersMetadataAction").updateCollections({
                    chats,
                    metadata,
                    pics,
                    messageCount,
                    addSystemMsgs,
                    qplEvent
                });
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[getNewsletterEnforcementsUpdatesAction] update model"
                ])));
                qplEvent?.addPoint("processChannelEnforcementsUpdates_start");
                yield m.all(metadata.map((e)=>{
                    if (o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(e)) {
                        o("WAWebNewsletterGetNewsletterEnforcementAlertAction").getNewsletterEnforcementAlertAction(o("WAWebWidFactory").createWid(e.id.toString()), o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION);
                    }
                }));
                qplEvent?.addPoint("processChannelEnforcementsUpdates_end");
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[queryAndUpdateAllNewsletterMetadataAction] End"
                ])));
                return {
                    chats,
                    success: true
                };
            } catch (e) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[queryAndUpdateAllNewsletterMetadataAction] fetch failed"
                ]))).tags("newsletter").sendLogs("newsletter-failed-to-retrieve-newsletters");
                return {
                    success: false
                };
            }
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e != null) {
                const t = e.id.map((e)=>({
                        id: e.jid.toString(),
                        terminated: true
                    }));
                const n = e.id.map((e)=>({
                        id: o("WAWebWidFactory").createWid(e.jid),
                        terminated: true
                    }));
                yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(t);
                r("WAWebNewsletterMetadataCollection").add(n, {
                    merge: true
                });
            }
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebSchemaChat").getChatTable().all();
            const r = t.map((e)=>o("WAWebWidFactory").createWid(e.id)).filter((t)=>{
                const n = o("WAJids").validateNewsletterJid(t.toJid());
                return n != null && !e.includes(n);
            });
            const a = [];
            r.map((e)=>{
                a.push(o("WAWebNewsletterBridgeApi").NewsletterBridgeApi.deleteNewsletter({
                    id: e,
                    keep: false,
                    newsletterDeleted: false
                }));
                a.push(o("WAWebNewsletterMetadataJob").deleteNewsletterMetadata(e.toString()));
                a.push(o("WAWebNewsletterDeleteChatJob").deleteNewsletterChat(e));
                a.push(o("WAWebNewsletterMetadataJob").deleteNewsletterPicture(e.toString()));
            });
            yield (m || (m = n("Promise"))).all(a);
        });
        return y.apply(this, arguments);
    }
    l.queryAndUpdateAllNewsletterMetadataAction = p;
}, 98);