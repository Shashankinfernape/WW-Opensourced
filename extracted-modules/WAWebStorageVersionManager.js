__d("WAWebStorageVersionManager", [
    "WALogger"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "DuplicateVersionError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const u = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "InvalidVersionError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const c = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.name = "MissingVersionError";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    const d = (()=>{
        function t() {
            this.versions = new Set;
            this.$1 = -1;
        }
        const n = t.prototype;
        n.claim = function(n, r, a) {
            if (n < 0) {
                throw new u("Versions must by greater than or equal to zero!");
            }
            if (this.versions.has(n)) {
                throw new s(`Version #${n} has already been claimed!`);
            }
            if (r != null && r < n) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] v",
                    " skipped (",
                    "): > max ",
                    ""
                ])), n, a, r);
                return false;
            }
            this.versions.add(n);
            this.$1 = Math.max(this.getMax(), n);
            return true;
        };
        n.version = function(t) {
            if (t < 0) {
                throw new u("Versions must by greater than or equal to zero!");
            }
            return t;
        };
        n.validate = function() {
            for(let e = 0; e <= this.getMax(); ++e){
                if (!this.versions.has(e)) {
                    throw new c(`Schema version #${e} is missing!`);
                }
            }
        };
        n.getMax = function() {
            return this.$1;
        };
        return t;
    })();
    l.StorageVersionManager = d;
}, 98);