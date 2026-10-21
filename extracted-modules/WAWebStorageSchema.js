__d("WAWebStorageSchema", [
    "invariant",
    "$InternalEnum",
    "err"
], function(t, n, r, o, a, i, l, s) {
    const e = n("$InternalEnum")({
        AUTO_INCREMENT: "auto-increment",
        USER_DEFINED: "user-defined",
        COMPOSITE: "composite"
    });
    const u = Object.freeze({
        SIMPLE: "simple",
        COMPOSITE: "composite",
        ARRAY: "array",
        UNIQUE: "unique"
    });
    const c = n("$InternalEnum")({
        STRING: "String",
        ARRAY_BUFFER: "ArrayBuffer"
    });
    function d(e) {
        return {
            name: e,
            columns: [],
            indexes: [],
            encryptedColumns: {}
        };
    }
    function m(e) {
        return {
            name: e.name,
            columns: e.columns.map((e)=>babelHelpers.extends({}, e)),
            indexes: e.indexes.map(f),
            encryptedColumns: babelHelpers.extends({}, e.encryptedColumns || {}),
            deleted: e.deleted
        };
    }
    function p(e) {
        return Object.freeze({
            name: e.name,
            columns: Object.freeze(e.columns.map((e)=>Object.freeze(e))),
            indexes: Object.freeze(e.indexes.map(_)),
            encryptedColumns: Object.freeze(babelHelpers.extends({}, e.encryptedColumns || {})),
            deleted: e.deleted
        });
    }
    function _(e) {
        switch(e.type){
            case u.SIMPLE:
                return Object.freeze({
                    type: u.SIMPLE,
                    column: e.column
                });
            case u.ARRAY:
                return Object.freeze({
                    type: u.ARRAY,
                    column: e.column
                });
            case u.COMPOSITE:
                return Object.freeze({
                    type: u.COMPOSITE,
                    columns: Object.freeze(e.columns.map((e)=>Object.freeze(e)))
                });
            case u.UNIQUE:
                return Object.freeze({
                    type: u.UNIQUE,
                    column: e.column
                });
        }
        throw r("err")(`cannot freeze index of unknown type: ${e.type}`);
    }
    function f(e) {
        switch(e.type){
            case u.SIMPLE:
                return {
                    type: u.SIMPLE,
                    column: e.column
                };
            case u.UNIQUE:
                return {
                    type: u.UNIQUE,
                    column: e.column
                };
            case u.COMPOSITE:
                return {
                    type: u.COMPOSITE,
                    columns: e.columns.map((e)=>e)
                };
            case u.ARRAY:
                return {
                    type: u.ARRAY,
                    column: e.column
                };
        }
        throw r("err")(`cannot clone unknown index type: ${e.type}`);
    }
    function g(e, t) {
        return e.indexes.findIndex((e)=>y(t, e));
    }
    function h(e, t) {
        switch(e.type){
            case u.SIMPLE:
            case u.ARRAY:
            case u.UNIQUE:
                return e.column === t;
            case u.COMPOSITE:
                return !!e.columns.find((e)=>e === t);
        }
        throw r("err")(`cannot check indexes of unknown index type: ${e.type}`);
    }
    function y(e, t) {
        if (e.type !== t.type) {
            return false;
        }
        switch(e.type){
            case u.SIMPLE:
            case u.ARRAY:
            case u.UNIQUE:
                if (t.type !== e.type) {
                    s(0, 32791);
                }
                return e.column === t.column;
            case u.COMPOSITE:
                if (t.type !== e.type) {
                    s(0, 32791);
                }
                return e.columns.length === t.columns.length && e.columns.every((e, n)=>t.columns[n] === e);
        }
        throw r("err")(`cannot compare unknown indexes of types: ${e.type}, ${t.type}`);
    }
    l.PrimaryKeyType = e;
    l.INDEX_TYPE = u;
    l.EncryptedValueType = c;
    l.emptySchema = d;
    l.cloneSchema = m;
    l.freezeSchema = p;
    l.findIndex = g;
    l.indexContainsColumn = h;
}, 98);