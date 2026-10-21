__d("WAWebNewsletterPollVotersCache", [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebLruCacheMap"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 10;
    const s = 5000;
    class u {
        constructor(){
            this.$1 = new (o("WAWebLruCacheMap")).LruCacheMap({
                sizeLimit: e
            });
        }
        static isValidEntry(t) {
            return t != null && o("WATimeUtils").unixTime() - t.timestamp < o("WAWebABProps").getABPropConfigValue("channels_poll_voters_summary_cache_ttl_ms") / 1000;
        }
        set(t, n) {
            const e = o("WATimeUtils").unixTime();
            const r = {
                timestamp: e,
                votersMap: n
            };
            this.$1.set(t.toString(), r);
        }
        get(t) {
            return this.$1.get(t.toString());
        }
    }
    class c {
        constructor(){
            this.$1 = new (o("WAWebLruCacheMap")).LruCacheMap({
                sizeLimit: s,
                getSize: function(t) {
                    return t.votersMap.size;
                }
            });
        }
        $2(t, n) {
            return `${t.toString()}-${n}`;
        }
        static isValidEntry(t) {
            return t != null && o("WATimeUtils").unixTime() - t.timestamp < o("WAWebABProps").getABPropConfigValue("channels_poll_voters_details_cache_ttl_ms") / 1000;
        }
        set(t, n, r) {
            const e = o("WATimeUtils").unixTime();
            const a = {
                timestamp: e,
                votersMap: n
            };
            this.$1.set(this.$2(t, r), a);
        }
        get(t, n) {
            return this.$1.get(this.$2(t, n));
        }
    }
    const d = new u;
    const m = new c;
    function p(e, t) {
        if (t == null) {
            const n = d.get(e);
            const r = function(n) {
                return d.set(e, n);
            };
            if (u.isValidEntry(n)) {
                return [
                    n,
                    r
                ];
            }
            return [
                null,
                r
            ];
        }
        const o = m.get(e, t);
        const a = function(r) {
            return m.set(e, r, t);
        };
        if (c.isValidEntry(o)) {
            return [
                o,
                a
            ];
        }
        return [
            null,
            a
        ];
    }
    l.getPollVotersFromCache = p;
}, 98);