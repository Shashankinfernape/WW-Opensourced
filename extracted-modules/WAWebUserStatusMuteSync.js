__d("WAWebUserStatusMuteSync", [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebLidAwareContactsDB",
    "WAWebNewsletterGatingUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaNewsletterMetadata",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new Set;
            const a = [];
            const i = [];
            const l = [];
            e.forEach(({ indexParts })=>{
                const n = indexParts[1];
                if (!(!n || !r("WAWebWid").isWid(n))) {
                    if (r("WAWebWid").isGroup(n)) {
                        i.push(n);
                    } else if (r("WAWebWid").isNewsletter(n) && o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
                        l.push(n);
                    } else {
                        a.push(n);
                    }
                }
            });
            yield r("WAWebLidAwareContactsDB").bulkGet(a).then((e)=>e.forEach((e)=>{
                    if (e) {
                        t.add(e.id);
                    }
                }));
            if (i.length > 0) {
                yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().bulkGet(i).then((e)=>e.forEach((e)=>{
                        if (e) {
                            t.add(e.id);
                        }
                    }));
            }
            if (l.length > 0 && o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
                yield (u || (u = n("Promise"))).all(l.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        const n = yield o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().equalsPrimaryKeys([
                            "id"
                        ], e);
                        if (n.length > 0) {
                            t.add(e);
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
            }
            return t;
        });
        return d.apply(this, arguments);
    }
    const m = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularHigh;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 7;
        };
        a_prototype.getAction = function() {
            return o("WAWebSyncdConst").Actions.UserStatusMute;
        };
        a_prototype.applyMutations = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const a = this;
                const i = yield c(t);
                const userStatusMuteUpdates = [];
                const groupStatusMuteUpdates = [];
                const newsletterStatusMuteUpdates = [];
                let p = 0;
                const _ = [];
                let f = 0;
                const g = yield (u || (u = n("Promise"))).all(t.map((e)=>{
                    try {
                        if (e.operation === "set") {
                            const { indexParts, value } = e;
                            const u = indexParts[1];
                            if (!u || !r("WAWebWid").isWid(u)) {
                                return a.malformedActionIndex();
                            }
                            const statusMute = value.userStatusMuteAction?.muted;
                            if (statusMute === undefined) {
                                p++;
                                if (_.length < 3) {
                                    _.push(e);
                                }
                                return o("WAWebSyncdIndexUtils").malformedActionValue(a.collectionName);
                            }
                            if (!i.has(u)) {
                                return {
                                    actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
                                    orphanModel: {
                                        modelId: u,
                                        modelType: o("WAWebSyncdConst").SyncModelType.UserStatusMute
                                    }
                                };
                            }
                            const g = {
                                id: u,
                                statusMute
                            };
                            if (r("WAWebWid").isGroup(u)) {
                                groupStatusMuteUpdates.push(g);
                            } else if (r("WAWebWid").isNewsletter(u) && o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled()) {
                                newsletterStatusMuteUpdates.push(g);
                            } else {
                                userStatusMuteUpdates.push(g);
                            }
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Success
                            };
                        }
                        f++;
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    } catch (e) {
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Failed
                        };
                    }
                }));
                if (p > 0) {
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "UserStatusMuteSyncd: ",
                        " malformed mutations => ",
                        ""
                    ])), p, _);
                }
                if (f > 0) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "status mute chat sync: ",
                        " operations not supported"
                    ])), f);
                }
                yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").getContactTable().bulkCreateOrMerge(userStatusMuteUpdates);
                yield o("WAWebSchemaGroupMetadata").getGroupMetadataTable().bulkMergeOnly(groupStatusMuteUpdates);
                yield o("WAWebSchemaNewsletterMetadata").getNewsletterMetadataTable().bulkMergeOnly(newsletterStatusMuteUpdates);
                o("WAWebBackendApi").frontendFireAndForget("updateContactsStatusMute", {
                    groupStatusMuteUpdates,
                    newsletterStatusMuteUpdates,
                    userStatusMuteUpdates
                });
                return g;
            });
            function a(e) {
                return t.apply(this, arguments);
            }
            return a;
        })();
        a_prototype.getMutationForStatusMute = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, muted, n) {
                const r = {
                    userStatusMuteAction: {
                        muted
                    }
                };
                const a = o("WAWebSyncdActionUtils").buildPendingMutation({
                    action: this.getAction(),
                    collection: this.collectionName,
                    indexArgs: [
                        e.toString({
                            legacy: true
                        })
                    ],
                    operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    timestamp: n,
                    value: r,
                    version: this.getVersion()
                });
                return a;
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    const p = new m;
    l.default = p;
}, 98);