__d("WAWebConsumerTransparencyInfoIconModel", [
    "WAMd5",
    "WATypeUtils",
    "WAWebApiContact",
    "WAWebLid1X1MigrationGating",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const n = (r("WAWebUserPrefsStore").getMaybeMeDevicePn() ?? "").toString();
        const a = e.toString();
        return o("WAMd5").md5(`${n}-${a}`);
    }
    class s {
        constructor(){
            this.chatIds = new Set;
            var e = r("WAWebUserPrefsStore").getUser(o("WAWebUserPrefsKeys").KEYS.CTWA_CONSUMER_TRANSPARENCY_INFO_ICON);
            if (e instanceof Array) {
                this.chatIds = new Set(e.filter(o("WATypeUtils").isString));
            }
        }
        add(n) {
            this.chatIds.add(e(n));
            r("WAWebUserPrefsStore").setUser(o("WAWebUserPrefsKeys").KEYS.CTWA_CONSUMER_TRANSPARENCY_INFO_ICON, Array.from(this.chatIds));
        }
        shouldShowIcon(n) {
            const t = this;
            const r = [
                n
            ];
            if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() && n.isUser()) {
                const a = o("WAWebApiContact").getAlternateUserWid(n);
                if (a != null) {
                    r.push(a);
                }
            }
            return r.some((n)=>t.chatIds.has(e(n)));
        }
    }
    const u = new s;
    l.ConsumerTransparencyInfoIconModel = u;
}, 98);