__d("WAWebCustomerDataSync", [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebDBCustomerDataDatabaseApi",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = ((t)=>{
        function r(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getVersion = function() {
            return 1;
        };
        r_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.CustomerData;
        };
        r_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const r = this;
                let a = 0;
                let i = 0;
                let l = 0;
                const m = [];
                const p = yield (d || (d = n("Promise"))).all(t.map((()=>{
                    const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                        const { indexParts, value } = t;
                        const u = indexParts[1];
                        try {
                            if (t.operation === "set") {
                                if (!u) {
                                    a++;
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                }
                                const c = o("WAJids").validateChatJid(u);
                                if (c == null) {
                                    a++;
                                    return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                }
                                if (value) {
                                    const d = value.customerDataAction;
                                    if (d == null) {
                                        i++;
                                        return o("WAWebSyncdIndexUtils").malformedActionValue(r.collectionName);
                                    }
                                    yield r.$CustomerDataSync$p_1(c, d);
                                }
                            } else if (t.operation === "remove") {
                                if (u) {
                                    const p = o("WAJids").validateChatJid(u);
                                    if (p != null) {
                                        yield r.$CustomerDataSync$p_2(p);
                                    }
                                }
                            } else {
                                l++;
                                if (m.length < 3) {
                                    m.push(t.operation);
                                }
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                                };
                            }
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        } catch (t) {
                            o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[syncd][customer-data]: mutation failed"
                            ])));
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        }
                    });
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })()));
                if (a > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][customer-data]: no chatJid in index, ",
                        " muts"
                    ])), a);
                }
                if (i > 0) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][customer-data]: ",
                        " malformed mutations"
                    ])), i);
                }
                if (l > 0) {
                    o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][customer-data]: ",
                        " unsupported operations => ",
                        ""
                    ])), l, m);
                }
                return p;
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        r_prototype.$CustomerDataSync$p_1 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(chatJid, t) {
                const u = {
                    chatJid,
                    contactType: t.contactType ?? 0,
                    email: t.email ?? undefined,
                    altPhoneNumbers: t.altPhoneNumbers ?? undefined,
                    birthday: t.birthday != null ? o("WATimeUtils").castLongIntToUnixTime(t.birthday) : undefined,
                    address: t.address ?? undefined,
                    acquisitionSource: t.acquisitionSource ?? undefined,
                    leadStage: t.leadStage ?? undefined,
                    lastOrder: t.lastOrder != null ? o("WATimeUtils").castLongIntToUnixTime(t.lastOrder) : undefined,
                    createdAt: t.createdAt != null ? o("WATimeUtils").castLongIntToUnixTime(t.createdAt) : o("WATimeUtils").unixTime(),
                    modifiedAt: t.modifiedAt != null ? o("WATimeUtils").castLongIntToUnixTime(t.modifiedAt) : o("WATimeUtils").unixTime()
                };
                yield o("WAWebDBCustomerDataDatabaseApi").addOrEditCustomerData(u);
                o("WAWebBackendApi").frontendFireAndForget("syncCustomerData", {
                    chatJid,
                    record: u
                });
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.$CustomerDataSync$p_2 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                yield o("WAWebDBCustomerDataDatabaseApi").removeCustomerDataByChatJid(e);
                o("WAWebBackendApi").frontendFireAndForget("removeCustomerDataFromCollection", {
                    chatJid: e
                });
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.getCustomerDataMutation = function({ chatJid, record }) {
            const r = o("WATimeUtils").unixTimeMs();
            const a = {
                customerDataAction: {
                    chatJid,
                    contactType: record.contactType,
                    email: record.email,
                    altPhoneNumbers: record.altPhoneNumbers,
                    birthday: record.birthday,
                    address: record.address,
                    acquisitionSource: record.acquisitionSource,
                    leadStage: record.leadStage,
                    lastOrder: record.lastOrder,
                    createdAt: record.createdAt,
                    modifiedAt: record.modifiedAt
                }
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                    chatJid
                ],
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                version: this.getVersion(),
                value: a,
                timestamp: r,
                action: this.getAction()
            });
        };
        r_prototype.getCustomerDataRemoveMutation = function(t) {
            const e = o("WATimeUtils").unixTimeMs();
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                    t
                ],
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE,
                version: this.getVersion(),
                value: {},
                timestamp: e,
                action: this.getAction()
            });
        };
        r_prototype.sendCustomerDataUpdate = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
                const r = this;
                const a = this.getCustomerDataMutation({
                    chatJid: e,
                    record: t
                });
                yield o("WAWebSyncdCoreApi").lockForSync([
                    "customerData2"
                ], [
                    a
                ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield r.$CustomerDataSync$p_1(e, {
                        chatJid: e,
                        contactType: t.contactType,
                        email: t.email,
                        altPhoneNumbers: t.altPhoneNumbers,
                        birthday: t.birthday,
                        address: t.address,
                        acquisitionSource: t.acquisitionSource,
                        leadStage: t.leadStage,
                        lastOrder: t.lastOrder,
                        createdAt: t.createdAt,
                        modifiedAt: t.modifiedAt
                    });
                }));
            });
            function t(t, n) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.sendCustomerDataRemove = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const r = this.getCustomerDataRemoveMutation(e);
                yield o("WAWebSyncdCoreApi").lockForSync([
                    "customerData2"
                ], [
                    r
                ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    yield t.$CustomerDataSync$p_2(e);
                }));
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return r;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const p = new m;
    l.default = p;
}, 98);