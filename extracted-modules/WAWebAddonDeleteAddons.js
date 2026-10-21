__d("WAWebAddonDeleteAddons", [
    "WALogger",
    "WAWebAddonProcessDeleteForMe",
    "WAWebDeleteMessageForMeSync",
    "WAWebSyncd",
    "WAWebSyncdDb",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, t) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield r("WAWebDeleteMessageForMeSync").getDeleteForMeMutations(e, t);
            yield o("WAWebSyncdDb").appendPendingMutationsRows(n);
            const a = n.map((e)=>e.collection);
            o("WAWebSyncd").markCollectionsForSync(a);
        });
        return u.apply(this, arguments);
    }
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            try {
                yield s(t, n);
                yield o("WAWebAddonProcessDeleteForMe").processDeleteForMe([].concat(t));
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "failed outgoing addons delete for me  ",
                    ""
                ])), error).tags("addons", "messaging").sendLogs("sendDeleteAddonsForMe");
            }
        });
        return d.apply(this, arguments);
    }
    l.sendDeleteAddonsForMe = c;
}, 98);