__d("WAWebNewsletterCreateJob", [
    "WABase64",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebCreateChat",
    "WAWebNewsletterCreateQueryJob",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterSystemMessages",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNewsletterUpdateNewslettersRecordsJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebURLUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e, t) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("createNewsletter", function() {
            return o("WAWebNewsletterCreateQueryJob").createNewsletterQuery(e).then((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(newsletter) {
                    if (newsletter == null) {
                        return null;
                    }
                    const n = t?.preserveServerResultOnLocalHydrationFailure === true;
                    let r;
                    if (n) {
                        try {
                            r = o("WAWebNewsletterModelUtils").mapNewsletterToModels(newsletter);
                        } catch (error) {
                            c(error);
                            return {
                                newsletter,
                                msgs: []
                            };
                        }
                    } else {
                        r = o("WAWebNewsletterModelUtils").mapNewsletterToModels(newsletter);
                    }
                    const a = r;
                    const { chat, metadata } = a;
                    let s = [];
                    try {
                        s = o("WAWebNewsletterSystemMessages").genNewsletterCreationSystemMessages({
                            id: chat.id,
                            name: chat.name,
                            t: metadata.creationTime,
                            role: metadata.membershipType
                        });
                        yield o("WAWebNewsletterUpdateNewslettersRecordsJob").updateNewsletterChatRecords([
                            o("WAWebCreateChat").createNewsletterObjectForStorage(chat)
                        ]);
                        yield o("WAWebNewsletterUpdateMsgsRecordsJob").addNewsletterMsgsRecords(s);
                        yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(o("WAWebNewsletterStorageUtils").createNewsletterMetadataObjectForStorage(metadata));
                    } catch (error) {
                        d(error);
                        if (!n) {
                            return null;
                        }
                        s = [];
                    }
                    return {
                        newsletter,
                        msgs: s
                    };
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
        }, {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    function c(error) {
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "[newsletter][create] model hydration failed"
        ]))).catching(r("getErrorSafe")(error)).tags("newsletter").sendLogs("newsletter-create-model-hydration-fail");
    }
    function d(error) {
        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "[newsletter][create] local persistence failed"
        ]))).catching(r("getErrorSafe")(error)).tags("newsletter").sendLogs("newsletter-create-local-persistence-fail");
    }
    function m(e) {
        if (e == null) {
            return null;
        }
        const data = r("WAWebURLUtils").parseDataURL(e).data;
        const n = o("WABase64").decodeB64(data);
        return new Uint8Array(n);
    }
    l.createNewsletter = u;
    l.encodePicture = m;
}, 98);