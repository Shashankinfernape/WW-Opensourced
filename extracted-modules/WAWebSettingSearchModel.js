__d("WAWebSettingSearchModel", [
    "WAWebSearchModel",
    "WAWebSearchUtils",
    "WAWebSettingsHierarchy"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = "SettingSearch";
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.preloadData = function() {
            this.data = o("WAWebSettingsHierarchy").buildSearchableHierarchy(o("WAWebSettingsHierarchy").getSettingsSearchHierarchy(true)).filter((e)=>{
                if (e.parent != null && !s(e.parent.isAvailable)) {
                    return false;
                }
                return s(e.isAvailable);
            });
        };
        t_prototype.queryFn = function(t) {
            const e = o("WAWebSearchUtils").normalizeString(t);
            return {
                type: "setting",
                results: this.data.filter((t)=>t.searchCriteria != null && t.searchCriteria.includes(e)).map((e)=>({
                        id: e.id,
                        type: "setting",
                        data: e
                    }))
            };
        };
        return t;
    })(o("WAWebSearchModel").Search);
    function s(isAvailable) {
        if (typeof isAvailable === "function") {
            return isAvailable();
        }
        return isAvailable;
    }
    l.SettingSearch = e;
}, 98);