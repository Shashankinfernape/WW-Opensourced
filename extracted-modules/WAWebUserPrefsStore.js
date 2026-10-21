__d("WAWebUserPrefsStore", [
    "WALogger",
    "WAMd5",
    "WAWebPermanentStorage",
    "WAWebTemporaryStorage",
    "WAWebUserPrefsBase",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsTypes",
    "cr:34987",
    "unionArrays"
], function(t, n, r, o, a, i, l) {
    let s;
    const u = n("cr:34987") ?? {};
    const c = u.notifyUserSettingChangeHandler;
    const d = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.getMaybeMeDevicePn = function() {
            return o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        };
        n.getKeys = function(t, n, r = false) {
            const e = {};
            n.forEach((n)=>{
                e[n] = t.getItem(n, r);
            });
            return e;
        };
        n.updatePreservedUserKeys = function() {
            const t = this;
            const n = this.getMaybeMeDevicePn();
            if (n != null) {
                const a = n.toString();
                const i = e.prototype.get.call(this, o("WAWebUserPrefsKeys").KEYS.PRESERVED_USER_KEYS, {
                    storage: r("WAWebPermanentStorage")
                });
                const l = i instanceof Array ? i : [];
                const s = o("WAWebUserPrefsTypes").LS_PRESERVE_USER_KEYS.map((e)=>o("WAMd5").md5(t.$UserPreferencesStore$p_1(a, e)));
                e.prototype.set.call(this, o("WAWebUserPrefsKeys").KEYS.PRESERVED_USER_KEYS, r("unionArrays")(l, s), {
                    storage: r("WAWebPermanentStorage")
                });
            }
        };
        n.getPSIgnoringCache = function(n) {
            return e.prototype.get.call(this, n, {
                storage: r("WAWebPermanentStorage"),
                ignoreCache: true
            });
        };
        n.getTS = function(n) {
            return e.prototype.get.call(this, n, {
                storage: r("WAWebTemporaryStorage")
            });
        };
        n.setTS = function(n, o) {
            e.prototype.set.call(this, n, o, {
                storage: r("WAWebTemporaryStorage")
            });
        };
        n.getCollection = function(t) {
            return this.getUser(t);
        };
        n.setCollection = function(t, n, r = false) {
            if (this.getMaybeMeDevicePn() != null && !r) {
                this.setUser(t, n);
            }
        };
        n.getUser = function(n) {
            const t = this.$UserPreferencesStore$p_2(n);
            if (t != null) {
                return e.prototype.get.call(this, t);
            }
            return null;
        };
        n.setUser = function(n, r, o) {
            const t = this.$UserPreferencesStore$p_2(n);
            if (t != null) {
                e.prototype.set.call(this, t, r, o);
                if (c != null) {
                    c(n, r);
                }
            }
        };
        n.$UserPreferencesStore$p_2 = function(t) {
            const e = this.getMaybeMeDevicePn();
            if (!e) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "userPrefs: Me has not loaded yet."
                ])));
                return null;
            }
            const n = o("WAMd5").md5(this.$UserPreferencesStore$p_1(e.toString(), t));
            return n;
        };
        n.$UserPreferencesStore$p_1 = function(t, n) {
            return [
                t,
                n
            ].join(":");
        };
        return t;
    })(o("WAWebUserPrefsBase").UserPreferencesStoreBase);
    const m = new d;
    l.default = m;
}, 98);