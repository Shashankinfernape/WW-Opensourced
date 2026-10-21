__d("WAWebNewsletterMetadataQueryJob", [
    "WABase64",
    "WAWebMexFetchAllNewslettersMetadataJob",
    "WAWebMexNewsletterParseUtils",
    "WAWebMexUpdateNewsletterJob",
    "WAWebNewsletterHandleMexGetNewsletter",
    "WAWebNewsletterQueryUtils",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    function e() {
        const e = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                return o("WAWebMexFetchAllNewslettersMetadataJob").handleMexGetAllNewsletters();
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        return o("WAWebNewsletterRpcUtils").runWithBackoff(e);
    }
    function s(e, t) {
        const n = o("WAWebNewsletterQueryUtils").getNewsletterMetadataQueryParamArgs(e, t, {
            creationTime: true,
            name: true,
            picture: true,
            description: true,
            inviteLink: true,
            handle: true,
            subscribers: true,
            privacy: true,
            verification: true,
            linkedAccounts: true,
            state: true
        });
        return o("WAWebNewsletterRpcUtils").runWithBackoff(function() {
            return c(n);
        });
    }
    function u(e, t, n) {
        const r = o("WAWebNewsletterQueryUtils").getNewsletterMetadataQueryParamArgs(e, t, n);
        return o("WAWebNewsletterRpcUtils").runWithBackoff(function() {
            return c(r);
        });
    }
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            return o("WAWebNewsletterHandleMexGetNewsletter").handleMexGetNewsletter(e);
        });
        return d.apply(this, arguments);
    }
    function m(e, t, n) {
        return _(e, t, n);
    }
    function p(idJid) {
        return {
            idJid,
            newsletterUserSettingsMetadataMixin: [],
            newsletterCreationTimeMetadataMixin: null,
            newsletterNameMetadataMixin: null,
            newsletterPictureMetadataMixin: null,
            newsletterDescriptionMetadataMixin: null,
            newsletterInviteLinkMetadataMixin: null,
            newsletterSubscribersMetadataMixin: null,
            newsletterPrivacyMetadataMixin: null,
            newsletterVerificationMetadataMixin: null,
            hasNewsletterLinkedAccountsMetadataMixin: false,
            newsletterMembershipMetadataMixin: null,
            newsletterStateMetadataMixin: null
        };
    }
    function _(e, t, n) {
        return f.apply(this, arguments);
    }
    function f() {
        f = n("asyncToGeneratorRuntime").asyncToGenerator(function*(newsletterID, { editDescription, editName, editPicture, editReactionCodesSetting }, { description, name, picture, reactionCodesSetting }) {
            let m;
            if (picture != null) {
                m = o("WABase64").encodeB64(picture);
            }
            const base64EncodedPic = g(editPicture, m);
            const _ = g(editName, name);
            const f = g(editDescription, description);
            const reactionCodesSetting_1 = editReactionCodesSetting === true ? reactionCodesSetting : null;
            const y = yield o("WAWebNewsletterRpcUtils").runWithBackoff(function() {
                return o("WAWebMexUpdateNewsletterJob").mexUpdateNewsletter({
                    base64EncodedPic,
                    description: f,
                    name: _,
                    newsletterID,
                    reactionCodesSetting: reactionCodesSetting_1
                });
            });
            return o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(y.xwa2_newsletter_update);
        });
        return f.apply(this, arguments);
    }
    function g(e, t) {
        if (e === true) {
            return t ?? "";
        }
    }
    l.queryAllNewslettersMetadata = e;
    l.queryNewsletterMetadataByInviteCode = s;
    l.queryNewsletterMetadataByJid = u;
    l.editNewsletterMetadataQuery = m;
    l.emptyNewsletterMetadataType = p;
}, 98);