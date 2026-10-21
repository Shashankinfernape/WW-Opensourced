__d("WAWebNewsletterAddAiContentLabelJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebDBMessageUtils",
    "WAWebMexNewsletterLabelAiContentJob",
    "WAWebMsgAIProvenance",
    "WAWebNewsletterDBUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    function c(t, r, a) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("addAiContentLabel", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let n;
            try {
                n = yield o("WAWebMexNewsletterLabelAiContentJob").mexNewsletterLabelAiContentJob(t, r, a);
            } catch (t) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][sgi-ai-content] label ai content mutation failed"
                ]))).tags("newsletter", "sgi", "wa-ice", "wa-spice-web").sendLogs("newsletter-label-ai-content-job-failed");
                return false;
            }
            if (n !== true) {
                return n;
            }
            try {
                const i = a === "STATUS" ? o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus : o("WAWebDBMessageUtils").InternalIdPrefix.Default;
                const l = yield o("WAWebNewsletterDBUtils").getMessageByServerId(Number(r), t, i);
                if (l != null) {
                    yield o("WAWebSchemaMessage").getMessageTable().bulkCreateOrMerge([
                        {
                            id: l.id.toString(),
                            aiProvenance: o("WAWebMsgAIProvenance").withSelfDisclosed(l.aiProvenance)
                        }
                    ]);
                } else {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][sgi-ai-content] msg row missing after label for serverId ",
                        ""
                    ])), r).tags("newsletter", "sgi", "wa-ice", "wa-spice-web").sendLogs("newsletter-label-ai-content-row-missing");
                }
            } catch (e) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][sgi-ai-content] local db merge failed after label for serverId ",
                    ""
                ])), r).tags("newsletter", "sgi", "wa-ice", "wa-spice-web").sendLogs("newsletter-label-ai-content-db-merge-failed");
            }
            return n;
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.addAiContentLabel = c;
}, 98);