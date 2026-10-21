__d("IntlVariationResolver", [
    "IntlVariationHoldout",
    "IntlVariationResolverImpl"
], function(t, n, r, o, a, i, l) {
    const e = {
        getNumberVariations: function(t) {
            return o("IntlVariationResolverImpl").getNumberVariations(t);
        },
        getGenderVariations: function(t) {
            if (o("IntlVariationHoldout").disable_variation) {
                return [
                    "*"
                ];
            }
            return o("IntlVariationResolverImpl").getGenderVariations(t);
        }
    };
    l.default = e;
}, 98);