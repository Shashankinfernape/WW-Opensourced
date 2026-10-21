__d("WAWebNewsletterSubscriberModel", [
    "WAWebBaseModel",
    "WAWebModelUtils",
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebModelUtils").prop();
            t.membership = o("WAWebModelUtils").prop();
            t.isPendingAdmin = o("WAWebModelUtils").prop();
            t.adminProfile = o("WAWebModelUtils").session();
            t.contact = o("WAWebModelUtils").session();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "newsletterSubscriber";
    e.idClass = r("WAWebWid");
    const s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterSubscriber = s;
}, 98);