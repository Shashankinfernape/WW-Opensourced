__d("prop-types/prop-types", [
    "fbjs/lib/emptyFunction",
    "fbjs/lib/invariant",
    "fbjs/lib/warning",
    "prop-types/checkPropTypes",
    "prop-types/lib/ReactPropTypesSecret"
], function(t, n, r, o, a, i) {
    const e = function() {
        n("fbjs/lib/invariant")(0, 1492);
    };
    const l = function() {
        return e;
    };
    e.isRequired = e;
    const u = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: l,
        element: e,
        instanceOf: l,
        node: e,
        objectOf: l,
        oneOf: l,
        oneOfType: l,
        shape: l
    };
    u.checkPropTypes = n("fbjs/lib/emptyFunction");
    u.PropTypes = u;
    a.exports = u;
}, null);