__d("WAWebPnForLidChatSync", [
    "WALogger",
    "WAWebDBCreateLidPnMappings",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.Regular;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 8;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.PnForLidChat;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const n = this;
                const r = [];
                let a = 0;
                let i = 0;
                let l = 0;
                const c = t.map((e)=>{
                    if (e.operation !== "set") {
                        a++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    }
                    const s = e.indexParts[1];
                    if (!o("WAWebWidFactory").isWidlike(s)) {
                        i++;
                        return n.malformedActionIndex();
                    }
                    const u = e.value.pnForLidChatAction?.pnJid;
                    if (u == null || !o("WAWebWidFactory").isWidlike(u)) {
                        l++;
                        return o("WAWebSyncdIndexUtils").malformedActionValue(n.collectionName);
                    }
                    const pn = o("WAWebWidFactory").createUserWidOrThrow(u);
                    const d = o("WAWebWidFactory").createUserLidOrThrow(s);
                    r.push({
                        lid: d,
                        pn
                    });
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                });
                if (a > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "pn_for_lid_chat sync: ",
                        " operations not supported"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "pn_for_lid_chat sync: ",
                        " malformed mutations - invalid key"
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "pn_for_lid_chat sync: ",
                        " malformed mutations - invalid pnJid"
                    ])), l);
                }
                yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                    mappings: r,
                    flushImmediately: true,
                    learningSource: "pn-for-lid-chat-sync"
                });
                return c;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const d = new c;
    l.default = d;
}, 98);