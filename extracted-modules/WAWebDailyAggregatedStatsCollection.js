__d("WAWebDailyAggregatedStatsCollection", [
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebDailyAggregatedStats",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsKeys",
    "nullthrows"
], function(t, n, r, o, a, i, l) {
    const e = 86400000;
    const s = ((t)=>{
        function n() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.gaddForDate = function(n) {
            const a = o("WAWebUserPrefsGeneral").getDailyStatsStartTime();
            const i = n.getTime() - a;
            const l = Math.floor(i / e);
            const startTime = a + e * l;
            return this.get(startTime.toString()) ?? r("nullthrows")(this.add({
                id: startTime.toString(),
                startTime
            })[0]);
        };
        n_prototype.gaddForToday = function() {
            return this.gaddForDate(new Date);
        };
        n_prototype.initializeFromCache = function(t) {
            if (t != null) {
                const e = t.map((e)=>new (o("WAWebDailyAggregatedStats")).DailyAggregatedStats(e)).filter((e)=>c(e) && !e.isExpired());
                this.add(e);
            }
        };
        n_prototype.serialize = function() {
            return this.toArray().filter((e)=>c(e) && !e.isExpired()).map((e)=>e.toJSON());
        };
        return n;
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = o("WAWebDailyAggregatedStats").DailyAggregatedStats;
    s.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.DAILY_AGGREGATED_STATS_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1000
    };
    const u = new s;
    function c(t) {
        return (t.startTime - o("WAWebUserPrefsGeneral").getDailyStatsStartTime()) % e === 0;
    }
    l.DailyAggregatedStatsCollectionImpl = s;
    l.DailyAggregatedStatsCollection = u;
}, 98);