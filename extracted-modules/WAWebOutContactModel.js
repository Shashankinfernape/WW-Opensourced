__d("WAWebOutContactModel", [
    "WAJids",
    "WAWebBaseModel",
    "WAWebContactSearchGatingUtils",
    "WAWebExactSearchMatchResult",
    "WAWebFuzzyMatcher",
    "WAWebFuzzySearchMatchResult",
    "WAWebL10NAccentFold",
    "WAWebPrefixSearchMatchResult",
    "WAWebSearchMatchStrategies"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.id = o("WAWebBaseModel").prop();
            t.phoneNumber = o("WAWebBaseModel").prop();
            t.fullName = o("WAWebBaseModel").prop();
            t.firstName = o("WAWebBaseModel").prop();
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.initialize = function() {
            e.prototype.initialize.call(this);
            this.set("phoneNumber", o("WAJids").phoneNumberFromJid(this.id));
        };
        n.getName = function() {
            return this.fullName ?? this.firstName ?? this.phoneNumber;
        };
        n.$OutContact$p_1 = function() {
            return o("WAWebL10NAccentFold").accentFold(this.getName());
        };
        n.$OutContact$p_2 = function(t, n, r) {
            const e = this.$OutContact$p_1();
            if (e) {
                const o = r(e, t);
                if (o != null) {
                    return {
                        match: e,
                        results: o
                    };
                }
            }
            if (n != null && this.phoneNumber.includes(n)) {
                const a = this.phoneNumber.indexOf(n);
                return {
                    match: this.phoneNumber,
                    results: [
                        {
                            startIndex: a,
                            length: n.length
                        }
                    ]
                };
            }
            return null;
        };
        n.searchMatchExact = function(t, n) {
            const e = this.$OutContact$p_2(t, n, o("WAWebSearchMatchStrategies").substringMatch);
            if (e == null) {
                return null;
            }
            return {
                match: e.match,
                results: e.results.map((e)=>new (o("WAWebExactSearchMatchResult")).WAWebExactSearchMatchResult(e.startIndex, e.length))
            };
        };
        n.searchMatchPrefix = function(t, n) {
            const e = this.$OutContact$p_2(t, n, o("WAWebSearchMatchStrategies").wordBoundaryMatch);
            if (e == null) {
                return null;
            }
            return {
                match: e.match,
                results: e.results.map((e)=>new (o("WAWebPrefixSearchMatchResult")).WAWebPrefixSearchMatchResult(e.startIndex, e.length))
            };
        };
        n.searchMatchFuzzy = function(t) {
            const e = t.split(/\s+/).filter(Boolean);
            if (e.length === 0) {
                return null;
            }
            const n = 1 - o("WAWebContactSearchGatingUtils").getFuzzySearchDistanceThreshold();
            const r = this.$OutContact$p_1();
            if (!r) {
                return null;
            }
            const a = [];
            for (const i of e){
                const l = o("WAWebFuzzyMatcher").fuzzyMatch({
                    costTolerance: o("WAWebFuzzySearchMatchResult").MAX_ALLOWED_COST,
                    input: r,
                    query: i
                });
                if (!l.isMatch() || l.getSimilarityRating() < n) {
                    return null;
                }
                a.push(l);
            }
            return {
                match: r,
                results: a
            };
        };
        return t;
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "outContact";
    const s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
}, 98);