__d("WAWebNewsletterQuestionResponseCollection", [
    "WAWebBaseCollection",
    "WAWebCollectionUtils",
    "WAWebNewsletterQuestionResponseModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.byParent = o("WAWebCollectionUtils").aggregated(function(e) {
                return e.parentMsgKey;
            });
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebNewsletterQuestionResponseModel").NewsletterQuestionResponse;
    const s = new e;
    l.QuestionResponseCollection = s;
}, 98);