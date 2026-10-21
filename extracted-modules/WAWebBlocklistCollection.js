__d("WAWebBlocklistCollection", [
    "WALogger",
    "WAWebBaseCollection",
    "WAWebBlocklistMigration",
    "WAWebBlocklistModel",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWidFactory"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = ((t)=>{
        function n() {
            let e;
            e = t.call(this) || this;
            e.listenTo(e, "add", function(t) {
                e.$BlocklistCollectionImpl$p_1(t.id, true);
            });
            e.listenTo(e, "remove", function(t) {
                e.$BlocklistCollectionImpl$p_1(t.id, false);
            });
            return e;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.$BlocklistCollectionImpl$p_1 = function(t, n) {
            if (o("WAWebBlocklistMigration").applyBlocklistV2Rules()) {
                this.$BlocklistCollectionImpl$p_2(t, n);
            } else {
                this.$BlocklistCollectionImpl$p_3(t, n);
            }
        };
        n_prototype.$BlocklistCollectionImpl$p_3 = function(t, n) {
            const e = o("WAWebWidFactory").asUserWidOrThrow(t);
            for (const r of [
                o("WAWebLidMigrationUtils").toPn(e),
                o("WAWebLidMigrationUtils").toLid(e)
            ]){
                if (r) {
                    o("WAWebContactCollection").ContactCollection.get(r)?.set("isContactBlocked", n);
                }
            }
        };
        n_prototype.$BlocklistCollectionImpl$p_2 = function(t, n) {
            o("WAWebContactCollection").ContactCollection.get(t)?.set("isContactBlocked", n);
            if (t.isRegularUser()) {
                if (!t.isLid()) {
                    this.$BlocklistCollectionImpl$p_4(t, n);
                    return;
                }
                const r = o("WAWebChatCollection").ChatCollection.getChatByAccountLid(t);
                if (r && !r.id.isLid()) {
                    o("WAWebContactCollection").ContactCollection.get(r.id)?.set("isContactBlocked", n);
                }
            }
        };
        n_prototype.$BlocklistCollectionImpl$p_4 = function(n, r) {
            const t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get("WAReceivedBlocklistMigrationBefore1x1Migration");
            const a = r === false;
            if (t === true || a) {
                const i = a ? "remove" : "between blocklist and 1x1 migration";
                o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[blocklist] blocklist collection: not a lid: ",
                    ", ",
                    ""
                ])), n.toLogString(), i);
            } else {
                const l = o("WAWebBlocklistMigration").isBlocklistMigrated();
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[blocklist] blocklist collection: not a lid: ",
                    ", migrated: ",
                    ""
                ])), n.toLogString(), l).sendLogs("blocklist-migrated-non-lid");
            }
        };
        n_prototype.replaceAllWith = function(t) {
            const e = this;
            const n = new Map(t.map((e)=>[
                    e.toString(),
                    new (r("WAWebBlocklistModel"))({
                        id: e
                    })
                ]));
            this.toArray().forEach((t)=>{
                if (n.has(t.id.toString())) {
                    n.delete(t.id.toString());
                } else {
                    e.remove(t);
                }
            });
            n.forEach((t)=>e.add(t));
        };
        n_prototype.dedupedList = function() {
            const e = this;
            return this.filter((t)=>{
                const n = t.contact();
                const n_phoneNumber = n.phoneNumber;
                if (n.id.isLid() && n_phoneNumber != null) {
                    return e.get(n_phoneNumber) == null;
                }
                return true;
            });
        };
        return n;
    })(o("WAWebBaseCollection").BaseCollection);
    u.model = r("WAWebBlocklistModel");
    const c = new u;
    l.BlocklistCollection = c;
}, 98);