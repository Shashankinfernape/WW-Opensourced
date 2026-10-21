__d("WAWebEditNewsletterMetadataAction", [
    "WAJids",
    "WALogger",
    "WAWebChatGetters",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "WAWebQueryAndUpdateNewslettersMetadataAction",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t, n) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n, r) {
            if (!o("WAWebChatGetters").getIsNewsletter(t)) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[editNewsletterMetadataAction] not a newsletter"
                ]))).tags("newsletter").sendLogs("edit-metadata-action-not-a-newsletter");
                return;
            }
            const a = o("WAJids").toNewsletterJid(t.id.toJid());
            try {
                const i = yield o("WAWebNewsletterMetadataJob").editNewsletterMetadata(a, n, r);
                if (i == null) {
                    return;
                }
                const l = o("WAWebNewsletterModelUtils").mapNewsletterToModels(babelHelpers.extends({}, i, {
                    newsletterCreationTimeMetadataMixin: null
                }));
                const { chat, metadata, pic } = l;
                yield o("WAWebQueryAndUpdateNewslettersMetadataAction").updateCollections({
                    chats: [
                        chat
                    ],
                    metadata: [
                        metadata
                    ],
                    pics: [
                        pic
                    ]
                });
            } catch (error) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[editNewsletterMetadataAction] edit metadata failed"
                ]))).tags("newsletter").sendLogs("edit-metadata-action-failed");
                throw error;
            }
        });
        return c.apply(this, arguments);
    }
    l.editNewsletterMetadataAction = u;
}, 98);