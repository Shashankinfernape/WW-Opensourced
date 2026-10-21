__d("WAWebNewsletterMessageDeliveryUpdateAction", [
    "WAJids",
    "WAWebNewsletterMetadataJob",
    "asyncToGeneratorRuntime",
    "compactMap"
], function(t, n, r, o, a, i, l) {
    function e(e, t) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            yield o("WAWebNewsletterMetadataJob").updateNewsletterMessageDeliveryUpdates(o("WAJids").toNewsletterJid(e.id.toString()), [], r("compactMap")(t, function(e) {
                return e.serverId;
            }));
            e.newsletterMetadata?.messageDeliveryUpdates.remove(t.map((e)=>e.id));
        });
        return s.apply(this, arguments);
    }
    l.removeMessageDeliveryUpdates = e;
}, 98);