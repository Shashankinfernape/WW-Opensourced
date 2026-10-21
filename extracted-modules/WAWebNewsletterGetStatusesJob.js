__d("WAWebNewsletterGetStatusesJob", [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebJidToWid",
    "WAWebNewsletterGetStatusesQuery",
    "WAWebNewsletterStatusUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(t, a, i) {
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getNewsletterStatuses", n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const n = o("WAWebJidToWid").jidWithTypeToWid({
                jidType: "newsletter",
                newsletterJid: t
            });
            let l;
            try {
                l = yield o("WAWebNewsletterGetStatusesQuery").queryNewsletterStatuses(t, a, i?.afterServerId, i?.beforeServerId, i?.count);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status] Failed to fetch statuses for ",
                    ": ",
                    ""
                ])), t, r("getErrorSafe")(error).message).sendLogs("newsletter-status-fetch-error");
                return {
                    msgs: [],
                    from: n,
                    viewCounts: new Map,
                    reactionCounts: new Map,
                    revokedServerIds: []
                };
            }
            const msgs = [];
            const viewCounts = new Map;
            const reactionCounts = new Map;
            const revokedServerIds = [];
            for (const p of l){
                try {
                    if (p.statusNewsletterContentMixin?.newsletterStatusContentTypeMixins.name === "StatusNewsletterRevoke") {
                        revokedServerIds.push(p.serverId);
                        continue;
                    }
                    const f = o("WAWebNewsletterStatusUtils").mapStatusEntryToMsgData(p, n);
                    if (f != null) {
                        const viewCount = p.statusNewsletterViewsCountsMixin?.viewsCountCount;
                        const C = f.id.toString();
                        msgs.push(babelHelpers.extends({}, f, {
                            isNewsletterStatus: true,
                            author: n,
                            viewCount
                        }));
                        if (viewCount != null) {
                            viewCounts.set(C, viewCount);
                        }
                        const b = o("WAWebNewsletterStatusUtils").buildEmojiCountMap(p.statusNewsletterReactionsMixin?.reactionsReaction);
                        if (b != null) {
                            reactionCounts.set(C, b);
                        }
                    }
                } catch (error) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status] Skipping unparseable status entry ",
                        " for ",
                        ""
                    ])), String(p.serverId), t).catching(r("getErrorSafe")(error)).tags("newsletter", "status").sendLogs("newsletter-status-entry-skipped");
                }
            }
            return {
                msgs,
                from: n,
                viewCounts,
                reactionCounts,
                revokedServerIds
            };
        }), {
            priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted();
    }
    l.getNewsletterStatuses = u;
}, 98);