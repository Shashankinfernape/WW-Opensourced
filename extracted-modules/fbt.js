__d("fbt", [
    "invariant",
    "FbtEnv",
    "FbtHooks",
    "FbtQTOverrides",
    "FbtResultBase",
    "FbtTable",
    "FbtTableAccessor",
    "GenderConst",
    "IntlVariationResolver",
    "intlNumUtils",
    "substituteTokens"
], function(t, n, r, o, a, i, l, s) {
    let e;
    o("FbtEnv").setupOnce();
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    let c = false;
    const d = {
        number: 0,
        gender: 1
    };
    const m = {
        object: 0,
        possessive: 1,
        reflexive: 2,
        subject: 3
    };
    const p = {};
    function _(t, args, options) {
        if ((options?.hk != null && options?.hk !== "" || options?.ehk != null) && c) {
            return {
                text: t,
                fbt: true,
                hashKey: options.hk
            };
        }
        const i = (e || (e = r("FbtHooks"))).getTranslatedInput({
            table: t,
            args,
            options
        });
        let i_args = i.args;
        let i_table = i.table;
        let d = {};
        if (i_table.__vcg != null) {
            i_args = i_args || [];
            const m = (e || (e = r("FbtHooks"))).getViewerContext();
            const p = m.GENDER;
            const _ = r("IntlVariationResolver").getGenderVariations(p);
            i_args.unshift(o("FbtTableAccessor").getGenderResult(_, null, p));
        }
        const tokens = [];
        if (i_args) {
            if (typeof i_table !== "string") {
                i_table = r("FbtTable").access(i_table, i_args, 0, tokens);
            }
            d = f(i_args);
            if (i_table === null) {
                s(0, 479);
            }
        }
        let translation;
        let hash;
        if (Array.isArray(i_table)) {
            translation = i_table[0];
            hash = i_table[1];
            const b = `1_${hash}`;
            if (r("FbtQTOverrides").overrides[b] != null && r("FbtQTOverrides").overrides[b] !== "") {
                translation = r("FbtQTOverrides").overrides[b];
                (e || (e = r("FbtHooks"))).onTranslationOverride(hash);
            }
            const v = {
                inputTable: t,
                tokens
            };
            (e || (e = r("FbtHooks"))).logImpression(hash, v);
        } else if (typeof i_table === "string") {
            translation = i_table;
        } else {
            const S = new Error(`Table access did not result in string: ${i_table === undefined ? "undefined" : JSON.stringify(i_table)}, Type: ${typeof i_table}`);
            S.stack;
            throw S;
        }
        const R = this.cachedResults[translation];
        const L = g(d);
        if (R && !L) {
            return R;
        }
        const E = r("substituteTokens")(translation, d, (e || (e = r("FbtHooks"))).getErrorListener == null ? undefined : (e || (e = r("FbtHooks"))).getErrorListener({
            translation,
            hash
        }));
        const k = this._wrapContent(E, translation, hash, options?.eo);
        if (!L) {
            this.cachedResults[translation] = k;
        }
        return k;
    }
    function f(e) {
        const t = {};
        e.forEach((e)=>{
            const n = e[r("FbtTable").ARG.SUBSTITUTION];
            if (n) {
                for(const o in n){
                    if (hasOwnProperty.call(n, o)) {
                        if (t[o] != null) {
                            s(0, 56656, o);
                        }
                        t[o] = n[o];
                    }
                }
            }
        });
        return t;
    }
    function g(e) {
        for(const t in e){
            return true;
        }
        return false;
    }
    function h(e, t) {
        return o("FbtTableAccessor").getEnumResult(e);
    }
    function y(e) {
        return o("FbtTableAccessor").getGenderResult(r("IntlVariationResolver").getGenderVariations(e), null, e);
    }
    function C(e, t, n) {
        const i = {
            [e]: t
        };
        if (n) {
            if (n[0] === d.number) {
                const l = n.length > 1 ? n[1] : t;
                if (typeof l !== "number") {
                    s(0, 484);
                }
                const u = r("IntlVariationResolver").getNumberVariations(l);
                if (typeof t === "number") {
                    i[e] = r("intlNumUtils").formatNumberWithThousandDelimiters(t);
                }
                return o("FbtTableAccessor").getNumberResult(u, i, l);
            } else if (n[0] === d.gender) {
                const c = n[1];
                if (c == null) {
                    s(0, 485);
                }
                return o("FbtTableAccessor").getGenderResult(r("IntlVariationResolver").getGenderVariations(c), i, c);
            } else {
                s(0, 486);
            }
        } else {
            return o("FbtTableAccessor").getSubstitution(i);
        }
    }
    function b(e, t, n) {
        return this._param(e, t, n);
    }
    function v(e, t, n) {
        const a = r("IntlVariationResolver").getNumberVariations(e);
        const i = {};
        if (t != null && t !== "") {
            if (typeof n === "number") {
                i[t] = r("intlNumUtils").formatNumberWithThousandDelimiters(n);
            } else {
                i[t] = n ?? r("intlNumUtils").formatNumberWithThousandDelimiters(e);
            }
        }
        return o("FbtTableAccessor").getNumberResult(a, i, e);
    }
    function S(e, t, n) {
        if (!(t !== r("GenderConst").NOT_A_PERSON || !n || !n.human)) {
            s(0, 11835);
        }
        const a = R(e, t);
        return o("FbtTableAccessor").getPronounResult(a);
    }
    function R(e, t) {
        switch(t){
            case r("GenderConst").NOT_A_PERSON:
                if (e === m.object || e === m.reflexive) {
                    return r("GenderConst").NOT_A_PERSON;
                }
                return r("GenderConst").UNKNOWN_PLURAL;
            case r("GenderConst").FEMALE_SINGULAR:
            case r("GenderConst").FEMALE_SINGULAR_GUESS:
                return r("GenderConst").FEMALE_SINGULAR;
            case r("GenderConst").MALE_SINGULAR:
            case r("GenderConst").MALE_SINGULAR_GUESS:
                return r("GenderConst").MALE_SINGULAR;
            case r("GenderConst").MIXED_UNKNOWN:
            case r("GenderConst").FEMALE_PLURAL:
            case r("GenderConst").MALE_PLURAL:
            case r("GenderConst").NEUTER_PLURAL:
            case r("GenderConst").UNKNOWN_PLURAL:
                return r("GenderConst").UNKNOWN_PLURAL;
            case r("GenderConst").NEUTER_SINGULAR:
            case r("GenderConst").UNKNOWN_SINGULAR:
                if (e === m.reflexive) {
                    return r("GenderConst").NOT_A_PERSON;
                }
                return r("GenderConst").UNKNOWN_PLURAL;
        }
        return r("GenderConst").NOT_A_PERSON;
    }
    function L(e, t, n) {
        const a = r("IntlVariationResolver").getGenderVariations(n);
        const i = {};
        i[e] = t;
        return o("FbtTableAccessor").getGenderResult(a, i, n);
    }
    function E(t, n, o, extraOptions) {
        const contents = typeof t === "string" ? [
            t
        ] : t;
        const errorListener = (e || (e = r("FbtHooks"))).getErrorListener({
            translation: n,
            hash: o
        });
        const s = e.getFbtResult({
            contents,
            errorListener,
            extraOptions,
            patternHash: o,
            patternString: n
        });
        return s;
    }
    function k() {
        c = true;
    }
    function I() {
        c = false;
    }
    function T(e) {
        return e instanceof r("FbtResultBase");
    }
    const D = function() {};
    D._ = _;
    D._enum = h;
    D._implicitParam = b;
    D._name = L;
    D._param = C;
    D._plural = v;
    D._pronoun = S;
    D._subject = y;
    D._wrapContent = E;
    D.disableJsonExportMode = I;
    D.enableJsonExportMode = k;
    D.isFbtInstance = T;
    D.cachedResults = p;
    D._getCachedFbt = undefined;
    l.default = D;
}, 98);