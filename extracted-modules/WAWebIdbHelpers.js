__d("WAWebIdbHelpers", [
    "invariant",
    "WALogger",
    "WAWebStorageSchema",
    "err",
    "gkx"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    function d({ schemas: t, tableColumns: n, tableEncryptedColumns: r, tableNames: a }) {
        return t.reduce((e, t)=>{
            const i = o("WAWebStorageSchema").cloneSchema(t);
            if (i.name in e) {
                s(0, 107631);
            }
            if (i.deleted === true) {
                e[i.name] = null;
                return e;
            }
            a.set(t.name, i.name);
            n.set(t.name, i.columns.reduce((e, t)=>{
                e.set(t.name, t);
                return e;
            }, new Map));
            r.set(t.name, i.encryptedColumns || {});
            const l = i.columns.filter((e)=>e.primaryKey);
            if (!(l.length >= 1)) {
                s(0, 75745, t.name);
            }
            const u = [
                m(l)
            ].concat(i.indexes.map(p)).join(", ");
            e[i.name] = u;
            return e;
        }, {});
    }
    function m(e) {
        if (e.length > 1) {
            e.forEach((e)=>{
                if (!(e.primaryKey && e.primaryKey === o("WAWebStorageSchema").PrimaryKeyType.COMPOSITE)) {
                    s(0, 56354);
                }
            });
            return `[${e.map((e)=>e.packedName).join("+")}]`;
        }
        const t = e[0];
        if (!(t.primaryKey && t.primaryKey !== o("WAWebStorageSchema").PrimaryKeyType.COMPOSITE)) {
            s(0, 56354);
        }
        if (t.primaryKey === o("WAWebStorageSchema").PrimaryKeyType.AUTO_INCREMENT) {
            return `${t.packedName}++`;
        }
        return t.packedName;
    }
    function p(e) {
        switch(e.type){
            case o("WAWebStorageSchema").INDEX_TYPE.SIMPLE:
                return e.column;
            case o("WAWebStorageSchema").INDEX_TYPE.COMPOSITE:
                return `[${e.columns.join("+")}]`;
            case o("WAWebStorageSchema").INDEX_TYPE.ARRAY:
                return `*${e.column}`;
            case o("WAWebStorageSchema").INDEX_TYPE.UNIQUE:
                return `&${e.column}`;
        }
        throw r("err")(`Cannot format index of type "${e.type}"`);
    }
    function _(t, n) {
        const a = t.map((a)=>{
            const i = n.get(a);
            if (i == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[storage] query with non-existing column ",
                    " in index ",
                    ""
                ])), a, t.join(","));
                throw r("err")("format-query-index-nonexistent-column");
            }
            return i.packedName;
        });
        if (a.length === 1) {
            return a[0];
        }
        return `[${a.join("+")}]`;
    }
    function f(e, t) {
        let n = e;
        if (t?.reverse === true) {
            n = n.reverse();
        }
        if (t?.offset != null) {
            n = n.offset(t.offset);
        }
        if (t?.limit != null && t.limit !== 0) {
            n = n.limit(t.limit);
        }
        return n;
    }
    function g(e) {
        if (e) {
            return function(t) {
                const n = {};
                e.forEach(({ name })=>{
                    if (Object.prototype.hasOwnProperty.call(t, name)) {
                        n[name] = t[name];
                    }
                });
                return n;
            };
        }
        return function(e) {
            return e;
        };
    }
    function h({ error: t, operation: n, tableName: r }) {
        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
            "idb failed to do Operation: ",
            " on Table: ",
            ". Failed with error ",
            ""
        ])), n, r, t).sendLogs("storage-error", {
            sampling: 0
        }).verbose();
    }
    function y(e, t) {
        const n = Array.from(t.entries());
        let a = 0;
        e.forEach((e)=>{
            n.forEach(([n, o])=>{
                if (e[n] && !(e[n]._keyId && e[n]._data && e[n].iv)) {
                    if (!r("gkx")("26258")) {
                        throw r("err")("[CRITICAL] Records contain unencrypted field");
                    }
                    a++;
                }
            });
        });
        if (a > 0) {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[CRITICAL] ",
                " records contain unencrypted field"
            ])), a);
        }
    }
    function C(e) {
        try {
            if (e == null) {
                return 0;
            }
            if (e instanceof ArrayBuffer) {
                return e.byteLength;
            }
            if (typeof e === "object") {
                const t = JSON.stringify(e);
                return t.length;
            }
            return String(e).length;
        } catch (e) {
            return 0;
        }
    }
    l.schemasToStores = d;
    l.formatQueryIndex = _;
    l.applyOptions = f;
    l.columnPropFilter = g;
    l.logStorageError = h;
    l.assertAllColsAreEncrypted = y;
    l.calculateWriteDataSize = C;
}, 98);