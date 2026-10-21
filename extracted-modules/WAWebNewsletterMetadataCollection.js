__d("WAWebNewsletterMetadataCollection", [
    "Promise",
    "WALogger",
    "WAWebCollectionUtils",
    "WAWebNewsletterMetadataModel",
    "WAWebStaleBaseCollection",
    "WAWebWid",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function a(...l) {
            let a;
            a = t.call(this, ...l) || this;
            a.byInviteCode = o("WAWebCollectionUtils").aggregated(function(e) {
                return e.inviteCode;
            });
            a.findImpl = function(t) {
                if (r("WAWebWid").isNewsletter(t)) {
                    return (s || (s = n("Promise"))).resolve({
                        id: t
                    });
                }
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "newsletterMetadata:find trying to fetch non-newsletter wid ",
                    ""
                ])), t.toString());
                return (s || (s = n("Promise"))).reject(r("err")(`newsletterMetadata:find trying to fetch non-newsletter  wid ${t.toString()}`));
            };
            return babelHelpers.assertThisInitialized(a) || babelHelpers.assertThisInitialized(a);
        }
        babelHelpers.inheritsLoose(a, t);
        return a;
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    u.model = o("WAWebNewsletterMetadataModel").NewsletterMetadata;
    const c = new u;
    l.default = c;
}, 98);