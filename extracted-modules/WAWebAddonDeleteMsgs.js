__d("WAWebAddonDeleteMsgs", [
    "Promise",
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebAddonLogUtils",
    "WAWebAddonPerfUtils",
    "WAWebAddonUpdateDataUtils",
    "WAWebMsgKey",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e, t) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
            let a;
            try {
                a = yield (u || (u = n("Promise"))).all(r.map((e)=>o("WAWebAddonDBTable").addonInternalDBTable.bulkGetByParentMsgKey(t, [
                        e
                    ]))).then((e)=>[].concat(...e));
            } catch (e) {
                return;
            }
            if (a.length !== 0) {
                const i = yield o("WAWebAddonPerfUtils").createAddonQplMarker(o("WAWebAddonPerfUtils").AddonQplMarkerType.UI, {
                    mode: t,
                    type: o("WAWebAddonPerfUtils").AnnotationRequestType.BulkRemoveByParents,
                    size: a.length
                });
                try {
                    yield o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode({
                        processMode: o("WAWebAddonConstants").AddonProcessMode.DeleteWithParent,
                        tableMode: t
                    }, {
                        remove: a
                    });
                    i?.success();
                } catch (n) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "deleteAddonMsgsByParentKeys for ",
                        ": ",
                        ""
                    ])), t, n);
                    i?.fail();
                    throw n;
                }
            }
        });
        return d.apply(this, arguments);
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ parentMsgKeys: t }) {
            const a = t.map((e)=>r("WAWebMsgKey").fromString(e));
            const i = [];
            for (const l of o("WAWebAddonConstants").AddonTableMode.members()){
                if (l !== o("WAWebAddonConstants").AddonTableMode.None) {
                    i.push(c(l, a));
                }
            }
            const d = yield (u || (u = n("Promise"))).allSettled(i);
            if (o("WAWebAddonLogUtils").hasSettledWithError(d)) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "delete addons finished with errors"
                ]))).tags("addons", "messaging").sendLogs("deleteAddonMsgsByParentKeys");
            }
        });
        return p.apply(this, arguments);
    }
    l.deleteAddonMsgsByParentKeys = m;
}, 98);