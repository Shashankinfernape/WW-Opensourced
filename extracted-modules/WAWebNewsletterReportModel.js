__d("WAWebNewsletterReportModel", [
    "WAWebBaseModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.reportStatus = o("WAWebBaseModel").prop();
            t.creationTime = o("WAWebBaseModel").prop();
            t.newsletterName = o("WAWebBaseModel").prop();
            t.newsletterId = o("WAWebBaseModel").prop();
            t.reportContentData = o("WAWebBaseModel").prop();
            t.appeal = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "newsletter_report";
    const s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterReport = s;
}, 98);