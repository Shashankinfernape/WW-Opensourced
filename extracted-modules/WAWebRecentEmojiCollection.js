__d("WAWebRecentEmojiCollection", [
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebDebounce",
    "WAWebEmoji",
    "WAWebRecentEmojiModel",
    "WAWebUserPrefsKeys"
], function(t, n, r, o, a, i, l) {
    const e = 100;
    const s = 36;
    const u = ((t)=>{
        function n() {
            let n;
            n = t.call(this) || this;
            n.dirty = false;
            n.listenTo(n, "change:weight change:length", r("WAWebDebounce")(function() {
                return n._sortTrimScale();
            }, e));
            return n;
        }
        babelHelpers.inheritsLoose(n, t);
        const a = n.prototype;
        a._sortTrimScale = function() {
            const e = this.length;
            if (e) {
                this.sort();
                if (e > s) {
                    this.remove(this.slice(s));
                }
            }
        };
        a.delete = function() {
            t.prototype.delete.call(this);
            this.dirty = false;
        };
        a.increment = function(t) {
            const e = o("WAWebEmoji").EmojiUtil.getSkinToneBase(t) || t;
            if (!this.get(e)) {
                this.add({
                    id: e,
                    weight: 0
                });
            }
            this.forEach((t)=>{
                if (t.id === e) {
                    t.weight += 1;
                } else {
                    t.weight *= 0.9;
                }
            });
            this.dirty = true;
        };
        return n;
    })(o("WAWebBaseCollection").BaseCollection);
    u.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.RECENT_EMOJI_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 2000
    };
    u.comparator = function(e, t) {
        if (e.weight > t.weight) {
            return -1;
        }
        return 1;
    };
    u.model = r("WAWebRecentEmojiModel");
    const c = new u;
    l.RecentEmojiCollection = c;
}, 98);