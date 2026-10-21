__d("WAWebNewsletterReportCollection", [
    "WAWebBaseCollection",
    "WAWebNewsletterReportModel"
], function(t, n, r, o, a, i, l) {
    const e = function(t, n) {
        const o = (n.appeal.creationTime ?? 0) - (t.appeal.creationTime ?? 0);
        if (o !== 0) {
            return o;
        }
        return n.creationTime - t.creationTime;
    };
    const s = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebNewsletterReportModel").NewsletterReport;
    s.comparator = e;
    const u = new s;
    l.NewsletterReportCollection = u;
}, 98);