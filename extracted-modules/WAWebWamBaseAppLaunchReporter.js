__d("WAWebWamBaseAppLaunchReporter", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = function(n, r) {
        const t = this;
        this.$1 = false;
        this.initializeAppLaunchWamEvent = function(e) {
            if (!t.$1) {
                t.$1 = true;
                if (e) {
                    t.$2 = t.$3();
                }
            }
        };
        this.commitAppLaunchWamEvent = function() {
            try {
                if (t.$2 != null) {
                    const n = t.$2;
                    t.$4(n);
                }
            } catch (t) {
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "commitAppLaunchWamEvent: failed: ",
                    ""
                ])), t);
            } finally{
                t.$2 = null;
            }
        };
        this.$3 = n;
        this.$4 = r;
    };
    l.BaseAppLaunchReporter = s;
}, 98);