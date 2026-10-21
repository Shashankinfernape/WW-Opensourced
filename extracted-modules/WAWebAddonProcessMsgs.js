__d("WAWebAddonProcessMsgs", [
    "Promise",
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonEncryptAddonMsgData",
    "WAWebAddonLogUtils",
    "WAWebAddonPlaceholderMsgsUtils",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebAddonSortUtils",
    "WAWebAddonUpdateDataUtils",
    "WAWebHandleMsgError",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    function g(e, t) {
        return h.apply(this, arguments);
    }
    function h() {
        h = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { addons, processMode, processor }) {
            const toDualDecryptedMsgData = processor.convert.toDualDecryptedMsgData;
            if (toDualDecryptedMsgData == null || processMode === o("WAWebAddonConstants").AddonProcessMode.HistorySync || processMode !== o("WAWebAddonConstants").AddonProcessMode.OnlineReceive) {
                return addons;
            }
            const s = [];
            const u = yield (f || (f = n("Promise"))).allSettled(addons.map((()=>{
                const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                    if (o("WAWebAddonCrossWindowUtils").isRealAddonType(t)) {
                        return toDualDecryptedMsgData(t, e.getForAddon(t));
                    }
                    return t;
                });
                return function(e) {
                    return t.apply(this, arguments);
                };
            })()));
            const m = [];
            for (const p of u){
                if (p.status === "fulfilled") {
                    s.push(p.value);
                } else if (m.length < 3) {
                    m.push(p.reason);
                }
            }
            if (m.length > 0) {
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Cannot decrypt ",
                    " message(s) => ",
                    ""
                ])), m.length, m);
            }
            if (o("WAWebAddonLogUtils").hasSettledWithError(u)) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[addon-infra] Failed to decrypt a message"
                ]))).tags("messagings", "addons").sendLogs(`${String(processMode)}-decription-failed`, {
                    sampling: 0.01
                });
            }
            return s;
        });
        return h.apply(this, arguments);
    }
    function y(e, t) {
        return C.apply(this, arguments);
    }
    function C() {
        C = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const { addons, processMode, processor, tableMode } = t;
            const toDualDecryptedMsgData = processor.convert.toDualDecryptedMsgData;
            let s = [];
            let u = toDualDecryptedMsgData == null ? addons : yield g(e, t);
            if (processor.type === o("WAWebAddonConstants").AddonProcessorType.DualEncryptedWithMessageTraits) {
                const c = o("WAWebAddonPlaceholderMsgsUtils").getIncomingPlaceholderKeys(t);
                if (c != null) {
                    const d = yield o("WAWebAddonPlaceholderMsgsUtils").getPlaceholderMsgKeys(tableMode, c);
                    u = u.filter((e)=>!d.has(e.id.toString()));
                }
            }
            s = yield processor.beforeUpsert(u, {
                processMode,
                parents: e
            });
            return {
                processor,
                processMode,
                tableMode,
                addons: s
            };
        });
        return C.apply(this, arguments);
    }
    function b(e, t) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, { addons, processMode, processor, tableMode }) {
            if (processor.type === o("WAWebAddonConstants").AddonProcessorType.DualEncryptedWithMessageTraits) {
                const existingPlaceholderKeys = yield o("WAWebAddonPlaceholderMsgsUtils").getPlaceholderMsgKeys(tableMode, addons.map((e)=>e.id));
                yield processor.afterUpsert(addons, {
                    processMode,
                    parents: e,
                    existingPlaceholderKeys
                });
            } else {
                yield processor.afterUpsert(addons, {
                    processMode,
                    parents: e
                });
            }
        });
        return v.apply(this, arguments);
    }
    function S(e, t, n, r, o) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r, a, i) {
            const s = yield (f || (f = n("Promise"))).all(o("WAWebAddonSortUtils").groupAddonsByProcessor(e.mode, t, r).map((e)=>y(a, e)));
            const u = [].concat(...s.map(({ addons })=>addons));
            if (u.length) {
                yield o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode({
                    processMode: e.mode,
                    tableMode: t
                }, {
                    add: u
                }, {
                    metricReporter: i
                });
            }
            yield f.all(s.map((e)=>b(a, e)));
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "[addon-infra]: processed ",
                " addon(s) during ",
                ", table mode ",
                ""
            ])), r.length, e.mode, o("WAWebAddonConstants").AddonTableMode.getName(t));
        });
        return R.apply(this, arguments);
    }
    function L({ addons, failSilently, metricReporter, parents, process }) {
        return Array.from(o("WAWebAddonSortUtils").groupAddonsByTableMode(addons), function([c, d]) {
            return S(process, c, d, parents, metricReporter).catch((e)=>{
                const a = r("getErrorSafe")(e);
                if (e instanceof o("WAWebHandleMsgError").MessageValidationError) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "failed incoming addons processing"
                    ]))).catching(a).tags("addons", "messaging").sendLogs(`processAddonMsgs: ${addons[0]?.type} in ${String(c)}`);
                } else {
                    const m = `addon-${String(process.mode)}-error: ${addons[0]?.type}`;
                    o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[AddonInfraError] failed saving addons in ",
                        ""
                    ])), c).catching(a).tags("addons", "messaging").sendLogs(m);
                }
                if (!failSilently) {
                    throw e;
                }
            });
        });
    }
    function E(e, t, n) {
        return k.apply(this, arguments);
    }
    function k() {
        k = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, r) {
            if (e.length === 0) {
                return {
                    orphans: []
                };
            }
            const a = {
                mode: r ?? o("WAWebAddonConstants").AddonProcessMode.OnlineReceive
            };
            const i = yield o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(e, a.mode);
            const l = i[0];
            const s = i[1];
            const u = o("WAWebAddonSortUtils").collectValidAndOrphanAddons(s, l);
            const { orphans, validAddons } = u;
            const m = L({
                addons: validAddons,
                failSilently: true,
                metricReporter: t,
                parents: o("WAWebAddonSelectUtils").createAddonParentSelector(l),
                process: a
            });
            yield (f || (f = n("Promise"))).allSettled(m);
            return {
                orphans
            };
        });
        return k.apply(this, arguments);
    }
    function I(e, t, n, r) {
        return T.apply(this, arguments);
    }
    function T() {
        T = n("asyncToGeneratorRuntime").asyncToGenerator(function*(mode, t, r, a) {
            const i = {
                mode
            };
            const l = L({
                addons: [
                    t
                ],
                failSilently: false,
                metricReporter: a,
                parents: o("WAWebAddonSelectUtils").createAddonParentSelector(r),
                process: i
            });
            yield (f || (f = n("Promise"))).all(l);
        });
        return T.apply(this, arguments);
    }
    function D(e) {
        return x.apply(this, arguments);
    }
    function x() {
        x = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ decryptedMsgData, metricReporter, parentSelector, processMode }) {
            const parent = parentSelector.getForAddon(decryptedMsgData);
            const decryptedMsgData_1 = parent.isGroupStatus === true ? babelHelpers.extends({}, decryptedMsgData, {
                isGroupStatus: true
            }) : decryptedMsgData;
            const u = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = o("WAWebAddonEncryptAddonMsgData").createDualEncryptionHelper(decryptedMsgData_1, parent);
                    if (e) {
                        return e.encrypt();
                    }
                    return decryptedMsgData_1;
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            const c = yield (f || (f = n("Promise"))).all([
                u(),
                S({
                    mode: processMode
                }, o("WAWebAddonSelectUtils").getAddonTableMode(decryptedMsgData_1), [
                    decryptedMsgData_1
                ], parentSelector, metricReporter)
            ]);
            const d = c[0];
            const encryptedMsgData = parent.isGroupStatus === true ? babelHelpers.extends({}, d, {
                isGroupStatus: true
            }) : d;
            return {
                encryptedMsgData,
                decryptedMsgData: decryptedMsgData_1,
                parent
            };
        });
        return x.apply(this, arguments);
    }
    function $(e, t, n) {
        return P.apply(this, arguments);
    }
    function P() {
        P = n("asyncToGeneratorRuntime").asyncToGenerator(function*(processMode, t, n) {
            try {
                const i = o("WAWebAddonPluginProcessor").getAddonProcessor(t);
                i.updateCollection({
                    add: [
                        t
                    ],
                    remove: []
                }, processMode);
                const l = o("WAWebAddonProcessMsgsUtils").getParentMsgKey(t);
                const s = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(t);
                const u = l.participant?.isLid();
                o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[addon-infra] optimistic update ",
                    " (",
                    ") id=",
                    " parent=",
                    " lid=",
                    ""
                ])), s, t.type, t.id.id, l.id, u);
                const c = yield o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs([
                    t
                ], processMode);
                const d = c[0];
                const m = c[1];
                const f = yield D({
                    decryptedMsgData: m[0],
                    metricReporter: n,
                    parentSelector: o("WAWebAddonSelectUtils").createAddonParentSelector(d),
                    processMode
                });
                return f;
            } catch (error) {
                const g = r("getErrorSafe")(error);
                o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "process optimistic addon msg send"
                ]))).catching(g).tags("addons", "messaging").sendLogs("failed-optimistic-addon-send");
                throw g;
            }
        });
        return P.apply(this, arguments);
    }
    function N(e) {
        return M.apply(this, arguments);
    }
    function M() {
        M = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (e.length !== 0) {
                const t = {
                    mode: o("WAWebAddonConstants").AddonProcessMode.HistorySync
                };
                const r = o("WAWebAddonSelectUtils").createAddonParentSelector(new Map);
                const a = L({
                    addons: e,
                    failSilently: true,
                    parents: r,
                    process: t
                });
                yield (f || (f = n("Promise"))).allSettled(a);
            }
        });
        return M.apply(this, arguments);
    }
    l.processMsgsAndGetOrphans = E;
    l.processOutgoingMsg = I;
    l.processOutgoingMsgOptimisticUpdate = $;
    l.processHistoryMsgs = N;
}, 98);