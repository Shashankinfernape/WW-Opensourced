__d("WAWebNewsletterPendingAdminsCollection", [
    "WAWebBaseCollection",
    "WAWebNewsletterSubscriberModel"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebNewsletterSubscriberModel").NewsletterSubscriber;
    l.default = e;
}, 98);