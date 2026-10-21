__d("WAWebNewsletterHandleMexGetNewsletter", [
    "WAWebMexFetchNewsletterDehydratedJob",
    "WAWebMexFetchNewsletterJob",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const l = e.queryPayloadsArgs.jidQueryIQPayload?.anyJid;
            const s = e.queryPayloadsArgs.inviteQueryIQPayload?.anyKey;
            const p = e.queryPayloadsArgs.jidQueryIQPayload?.anyViewRole ?? e.queryPayloadsArgs.inviteQueryIQPayload?.anyViewRole;
            const _ = l ?? s;
            if (_ != null) {
                let f;
                if (m(e)) {
                    f = yield o("WAWebMexFetchNewsletterDehydratedJob").mexGetNewsletterDehydrated(_, u(p), {
                        fetchWamoSub: o("WAWebNewsletterGatingUtils").isWamoSubExperienceEnabled()
                    });
                } else {
                    f = yield o("WAWebMexFetchNewsletterJob").mexGetNewsletter(_, u(p), {
                        fetchViewerMetadata: c(e),
                        fetchCreationTime: d("hasNewsletterCreationTimeField", e),
                        fetchWamoSub: o("WAWebNewsletterGatingUtils").isWamoSubExperienceEnabled(),
                        fetchStatusMetadata: o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()
                    });
                }
                if (f == null) {
                    return;
                }
                const g = o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(f.xwa2_newsletter);
                return g;
            }
        });
        return s.apply(this, arguments);
    }
    function u(e) {
        if (e == null) {
            return "GUEST";
        }
        if (e === "admin") {
            return "ADMIN";
        }
        if (e === "owner") {
            return "OWNER";
        }
        if (e === "subscriber") {
            return "SUBSCRIBER";
        }
        return "GUEST";
    }
    function c(e) {
        let a = false;
        let i = false;
        a = e.queryPayloadsArgs.jidQueryIQPayload?.allNewsletterMetadataIQRequestPayloadArgs?.hasNewsletterMutedField;
        return a === true || (a = e.queryPayloadsArgs.deprecatedInviteQueryIQPayload?.allNewsletterMetadataIQRequestPayloadArgs?.hasNewsletterMutedField, a === true) || (i = e.queryPayloadsArgs.jidQueryIQPayload?.allNewsletterMetadataIQRequestPayloadArgs?.hasNewsletterMembershipField, i === true) || (i = e.queryPayloadsArgs.deprecatedInviteQueryIQPayload?.allNewsletterMetadataIQRequestPayloadArgs?.hasNewsletterMembershipField, i === true);
    }
    function d(e, t) {
        const a = t.queryPayloadsArgs.jidQueryIQPayload?.allNewsletterMetadataIQRequestPayloadArgs ?? t.queryPayloadsArgs.inviteQueryIQPayload;
        return a == null || Object.getOwnPropertyDescriptor(a, e)?.value === true;
    }
    function m(e) {
        const jidQueryIQPayload = e.queryPayloadsArgs.jidQueryIQPayload;
        if (jidQueryIQPayload != null) {
            const n = jidQueryIQPayload.allNewsletterMetadataIQRequestPayloadArgs;
            return n.hasNewsletterCreationTimeField !== true && n.hasNewsletterNameField !== true && n.hasNewsletterDescriptionField !== true && n.hasNewsletterInviteLinkField !== true && n.hasNewsletterHandleField !== true && n.hasNewsletterPrivacyField !== true && n.hasNewsletterLinkedAccountsField !== true && n.hasNewsletterStateField !== true && n.newsletterPictureFieldMixinArgs == null && n.hasNewsletterMembershipField !== true && n.hasNewsletterMutedField !== true && n.hasNewsletterVerificationField === true && n.hasNewsletterSubscribersField === true;
        }
        return false;
    }
    l.handleMexGetNewsletter = e;
}, 98);