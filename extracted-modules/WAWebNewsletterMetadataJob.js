__d("WAWebNewsletterMetadataJob", [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebNewsletterCreateJob",
    "WAWebNewsletterMetadataQueryJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
    "WAWebSchemaProfilePicThumb",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    const e = [
        "id"
    ];
    let s;
    function u() {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getAllNewslettersMetadata", function() {
            return o("WAWebNewsletterMetadataQueryJob").queryAllNewslettersMetadata();
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function c(e, t, n) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getNewsletterMetadata", function() {
            return o("WAWebNewsletterMetadataQueryJob").queryNewsletterMetadataByJid(e, t, n);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function d(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("updateNewsletterMetadata", function() {
            if (Array.isArray(e)) {
                return o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().bulkCreateOrMerge(e);
            }
            return o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().createOrMerge(e.id, e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function m(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("deleteNewsletterMetadata", function() {
            return o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().remove(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function p(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("deleteNewsletterPicture", function() {
            return o("WAWebSchemaProfilePicThumb").getProfilePicThumbTable().remove(e);
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function _(e, t, n) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("editNewsletterMetadata", function() {
            const n_picture = n.picture;
            const a = o("WAWebNewsletterCreateJob").encodePicture(n_picture);
            return o("WAWebNewsletterMetadataQueryJob").editNewsletterMetadataQuery(e, t, babelHelpers.extends({}, n, {
                picture: a
            }));
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function f(t, r, a, priority = o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("updateNewsletterMessageDeliveryUpdates", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const i = yield o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().get(t);
            if (i == null) {
                return (s || (s = n("Promise"))).resolve();
            }
            const i_messageDeliveryUpdates = i.messageDeliveryUpdates;
            const u = i_messageDeliveryUpdates === undefined ? new Map : i_messageDeliveryUpdates;
            a.forEach((e)=>{
                u?.delete(e);
            });
            r.forEach((t)=>{
                const n = t.id;
                const r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                u?.set(n, r);
            });
            i.messageDeliveryUpdates = u;
            return o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().merge(t, i);
        }), {
            priority
        }).waitUntilCompleted();
    }
    function g(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("suspendNewsletter", function() {
            return o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().merge(e, {
                id: e,
                suspended: true
            });
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function h(e) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("geosuspendNewsletter", function() {
            return o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().merge(e, {
                id: e,
                suspended: true,
                geosuspended: true
            });
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.getAllNewslettersMetadata = u;
    l.getNewsletterMetadata = c;
    l.updateNewsletterMetadata = d;
    l.deleteNewsletterMetadata = m;
    l.deleteNewsletterPicture = p;
    l.editNewsletterMetadata = _;
    l.updateNewsletterMessageDeliveryUpdates = f;
    l.suspendNewsletter = g;
    l.geosuspendNewsletter = h;
}, 98);