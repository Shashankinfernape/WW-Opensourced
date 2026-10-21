__d("WAWebStorageTableBuilder", [
    "invariant",
    "WAWebStorageMutationUtils",
    "WAWebStorageSchema"
], function(t, n, r, o, a, i, l, s) {
    function e(e) {
        return e;
    }
    function u(e) {
        return e;
    }
    const c = (()=>{
        function t(e, t, n) {
            this.maxVersion = -1;
            this.versions = new Map;
            this.upgraders = new Map;
            this.shouldEnablePropFilter = true;
            this.shouldUseDbMsgEncKeyForEncryptedCol = true;
            this.name = e;
            this.versionManager = t;
            this.maxVersionAllowedRollout = n;
        }
        const n = t.prototype;
        n.version = function(n, r, a) {
            const t = this.versionManager.claim(n, this.maxVersionAllowedRollout, this.name);
            if (!t) {
                return this;
            }
            if (this.versions.has(n)) {
                s(0, 75719, this.name, +n);
            }
            if (!(n > this.maxVersion)) {
                s(0, 75720, this.name);
            }
            this.maxVersion = n;
            const i = this.schema(n) || o("WAWebStorageSchema").emptySchema(this.name);
            const l = o("WAWebStorageMutationUtils").sortMutations(r).reduce((e, t)=>{
                t.validate(e);
                return t.apply(e);
            }, o("WAWebStorageSchema").cloneSchema(i));
            this.versions.set(n, o("WAWebStorageSchema").freezeSchema(l));
            this.upgraders.set(n, a);
            return this;
        };
        n.devOnlyDoNotUseInitWithMaxVersion = function(t, n) {
            const e = this.versionManager.getMax() + 1;
            return this.version(e, t, n);
        };
        n.delete = function(n) {
            const t = this.versionManager.claim(n, this.maxVersionAllowedRollout, this.name);
            if (!t) {
                return this;
            }
            if (this.versions.has(n)) {
                s(0, 75719, this.name, +n);
            }
            if (!(n > this.maxVersion)) {
                s(0, 75720, this.name);
            }
            this.maxVersion = n;
            const r = this.schema(n) || o("WAWebStorageSchema").emptySchema(this.name);
            const a = babelHelpers.extends({}, r, {
                deleted: true
            });
            this.versions.set(n, o("WAWebStorageSchema").freezeSchema(a));
            return this;
        };
        n.view = function(t) {
            this.rowview = t;
            return this;
        };
        n.enablePropFilter = function(t) {
            this.shouldEnablePropFilter = t;
            return this;
        };
        n.useDbMsgEncKeyForEncryptedCol = function(t) {
            this.shouldUseDbMsgEncKeyForEncryptedCol = t;
            return this;
        };
        n.schema = function(n) {
            const t = this.versions.get(n);
            if (t) {
                return t;
            }
            const r = Array.from(this.versions.keys()).map(e).sort((e, t)=>e - t).filter((t)=>t < n);
            const a = r.pop();
            if (a == null || Number.isNaN(a)) {
                return null;
            }
            return this.versions.get(a) || o("WAWebStorageSchema").emptySchema(this.name);
        };
        n.tableExists = function() {
            return this.maxVersion !== -1;
        };
        n.commit = function() {
            return this;
        };
        return t;
    })();
    l.default = c;
}, 98);