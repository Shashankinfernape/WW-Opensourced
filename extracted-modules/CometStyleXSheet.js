__d("CometStyleXSheet", [
    "CometStyleXDarkTheme_DO_NOT_ADD_MORE_VALUES",
    "CometStyleXDefaultTheme_DO_NOT_ADD_MORE_VALUES",
    "ExecutionEnvironment",
    "StyleXSheet"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const s = ((e)=>{
        function t() {
            return e.call(this, {
                rootDarkTheme: r("CometStyleXDarkTheme_DO_NOT_ADD_MORE_VALUES"),
                rootTheme: r("CometStyleXDefaultTheme_DO_NOT_ADD_MORE_VALUES")
            }) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("StyleXSheet"));
    const u = new s;
    l.CometStyleXSheet = s;
    l.rootStyleSheet = u;
}, 98);