__d("WAWebGetDynamicAIModesAction", [
    "WALogger",
    "WAWebGetDynamicAIModesJob",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[bot][getDynamicAIModesAction] Start"
            ])));
            const t = yield o("WAWebGetDynamicAIModesJob").getDynamicAIModes();
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[bot][getDynamicAIModesAction] End"
            ])));
            return t;
        });
        return c.apply(this, arguments);
    }
    l.getDynamicAIModesAction = u;
}, 98);