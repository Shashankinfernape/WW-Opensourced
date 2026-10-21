__d("WAWebNewsletterMetadataUpdateUtils", [
    "WAWebBackendApi",
    "WAWebContactProfilePicThumbBridge",
    "WAWebDBBulkPersistProfilePic",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterStorageUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(newsletter, t, pic) {
            yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(o("WAWebNewsletterStorageUtils").createNewsletterMetadataObjectForStorage(t));
            if (Object.hasOwn(pic, "eurl")) {
                const s = o("WAWebWidFactory").createWid(pic.id.toString());
                yield o("WAWebDBBulkPersistProfilePic").bulkPersistProfilePicChanges([
                    o("WAWebContactProfilePicThumbBridge").mapProfilePictureToProfilePicThumbRowType(s, {
                        id: s,
                        tag: pic.tag ?? undefined,
                        eurl: pic.eurl ?? undefined,
                        previewEurl: pic.previewEurl ?? undefined,
                        stale: pic.stale,
                        eurlStale: false,
                        timestamp: pic.timestamp ?? Date.now()
                    })
                ]);
            }
            yield o("WAWebBackendApi").frontendSendAndReceive("updateNewsletterMetadata", {
                metadata: t,
                newsletter,
                pic
            });
        });
        return s.apply(this, arguments);
    }
    l.updateNewsletterMetadataAndPic = e;
}, 98);