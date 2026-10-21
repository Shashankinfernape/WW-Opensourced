__d("WAWebUpdaterVersion", [
    "WACustomError",
    "WAWebBuildConstants"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this, t ?? "") || this;
            n.name = "InvalidVersion";
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(o("WACustomError").CustomError);
    const s = (()=>{
        function t(t) {
            const n = t.split(".");
            if (n.length !== 3) {
                throw new e("Version format does not contain 3 numbers.");
            }
            this.primary = Number.parseInt(n[0], 10);
            this.secondary = Number.parseInt(n[1], 10);
            this.tertiary = Number.parseInt(n[2], 10);
            if (Number.isNaN(this.primary) || Number.isNaN(this.secondary) || Number.isNaN(this.tertiary)) {
                throw new e("Version contains a non-parseable string.");
            }
        }
        const t_prototype = t.prototype;
        t_prototype.lt = function(n) {
            let e = n;
            if (typeof e === "string") {
                e = new t(e);
            }
            return this.primary < e.primary || this.primary === e.primary && this.secondary < e.secondary || this.primary === e.primary && this.secondary === e.secondary && this.tertiary < e.tertiary;
        };
        t_prototype.equals = function(n) {
            let e = n;
            if (e == null || e === "") {
                return false;
            }
            if (typeof e === "string") {
                e = new t(e);
            }
            return this.primary === e.primary && this.secondary === e.secondary && this.tertiary === e.tertiary;
        };
        t_prototype.toString = function() {
            return `${this.primary}.${this.secondary}.${this.tertiary}`;
        };
        return t;
    })();
    function u(e) {
        return e.replace(/\.[di]$/, "");
    }
    const c = u(o("WAWebBuildConstants").VERSION_STR);
    l.Version = s;
    l.sanitizeVersionStr = u;
    l.SANITIZED_VERSION_STR = c;
}, 98);