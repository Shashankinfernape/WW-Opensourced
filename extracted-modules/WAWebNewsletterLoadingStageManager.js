__d("WAWebNewsletterLoadingStageManager", [
    "$InternalEnum",
    "WAWebBaseModel",
    "WAWebModelUtils"
], function(t, n, r, o, a, i, l) {
    const e = n("$InternalEnum").Mirrored([
        "None",
        "Loading",
        "Finished",
        "Failed"
    ]);
    const s = ((t)=>{
        function n(...a) {
            let n;
            n = t.call(this, ...a) || this;
            n.stage = o("WAWebModelUtils").prop(e.None);
            return babelHelpers.assertThisInitialized(n) || babelHelpers.assertThisInitialized(n);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.start = function() {
            this.stage = e.Loading;
        };
        n_prototype.fail = function() {
            this.stage = e.Failed;
        };
        n_prototype.end = function() {
            this.stage = e.Finished;
        };
        return n;
    })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "newsletterLoadingStage";
    const u = o("WAWebBaseModel").defineModel(s);
    const c = new u({
        id: "1"
    });
    l.NewsletterLoadingStage = e;
    l.NewsletterLoadingStageManager = c;
}, 98);