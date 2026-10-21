__d("WAWebDeviceCapabilitiesSyncBase", [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebMobilePlatforms",
    "WAWebNewsletterChatsMigrationForwarder",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdDb",
    "WAWebUserPrefsDeviceCapabilities",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err"
], function(t, n, r, o, a, i, l) {
    const e = [
        "newsletterChatsMigration"
    ];
    let s;
    let u;
    let c;
    const d = "0";
    const m = 1;
    function p(e) {
        const t = e.indexOf(":");
        const n = e.indexOf("@");
        if (t === -1 || n === -1 || t >= n) {
            return null;
        }
        return e.substring(t + 1, n);
    }
    const _ = ((t)=>{
        function a(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getVersion = function() {
            return 7;
        };
        a_prototype.getAction = function() {
            throw r("err")("DeviceCapabilitiesSyncBase.getAction must be overridden by a subclass");
        };
        a_prototype.getJidIndex = function() {
            throw r("err")("DeviceCapabilitiesSyncBase.getJidIndex must be overridden by a subclass");
        };
        a_prototype.getValueField = function() {
            return "deviceCapabilities";
        };
        a_prototype.getCapabilitiesFromValue = function(t) {
            if (this.getValueField() === "deviceCapabilitiesV2") {
                return t?.deviceCapabilitiesV2;
            }
            return t?.deviceCapabilities;
        };
        a_prototype.capabilitiesHaveChanged = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                const n = yield o("WAWebSyncdDb").getSyncActionsRows([
                    "index"
                ], [
                    e.index
                ]);
                const currentCapabilities = n.reduce((acc, item)=>{
                    if (item.actionState === o("WAWebSyncdConst").SyncActionState.Success) {
                        const r = o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, item.binarySyncData);
                        const a = r.value;
                        const i = t.getCapabilitiesFromValue(a);
                        if (i) {
                            return i;
                        }
                    }
                }, {});
                const newCapabilities = this.getCapabilitiesFromValue(o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionValueSpec, e.binarySyncAction));
                return {
                    hasChanged: JSON.stringify(currentCapabilities) !== JSON.stringify(newCapabilities),
                    currentCapabilities,
                    newCapabilities
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.applyMutations = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const t = this;
                let r = 0;
                const a = [];
                const i = e.map((e)=>{
                    if (e.operation === "set") {
                        const n = t.getCapabilitiesFromValue(e.value);
                        if (n != null) {
                            const i = e.indexParts[m];
                            const l = i != null ? p(i) : null;
                            if (l === d) {
                                const u = o("WAWebUserPrefsDeviceCapabilities").mapProtobufToAllDeviceCapabilities(n);
                                o("WAWebUserPrefsDeviceCapabilities").mergeDeviceCapabilitiesToStorage(u, "primary");
                                a.push(o("WAWebNewsletterChatsMigrationForwarder").forwardPrimaryNewsletterChatsMigration(n));
                                r++;
                                const c = u.aiThread?.supportLevel;
                                if (c === o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.INFRA || c === o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilities$AiThread$SupportLevel.FULL) {
                                    o("WAWebBackendApi").frontendFireAndForget("initializeMetaAiBotAiThreads", {});
                                }
                                if (o("WAWebMobilePlatforms").isSMB()) {
                                    const _ = n.businessBroadcast;
                                    const f = !!(_ != null && _.companionSupportEnabled) && !!(_ != null && _.campaignSyncEnabled);
                                    const g = o("WAWebBizBroadcastDeviceCapabilityCommon").getPrimarySupportsBusinessBroadcast();
                                    if (f !== g) {
                                        o("WAWebBizBroadcastDeviceCapabilityCommon").saveBizBroadcastCapabilityToStorage(f);
                                        if (f) {
                                            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget("loadQuickPromotions", {
                                                trigger: "prefetch"
                                            });
                                        }
                                    }
                                    o("WAWebBizBroadcastDeviceCapabilityCommon").saveBizBroadcastProCapabilityToStorage(_?.proCompanionSupportEnabled);
                                    o("WAWebBackendApi").frontendFireAndForget("refreshBizBroadcastProEligibility", {});
                                    o("WAWebBizBroadcastDeviceCapabilityCommon").saveBizBroadcastRecipientLimitToStorage(_?.recipientLimit);
                                }
                            }
                        }
                    }
                    return {
                        actionState: o("WAWebSyncdConst").SyncActionState.Success
                    };
                });
                if (r > 0) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[DeviceCapabilitiesSync] primary caps updated ",
                        "x"
                    ])), r);
                }
                yield (c || (c = n("Promise"))).all(a);
                return i;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.getMutation = function(t, n) {
            return o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                    this.getJidIndex()
                ],
                value: this.getValueField() === "deviceCapabilitiesV2" ? {
                    deviceCapabilitiesV2: babelHelpers.extends({}, n)
                } : {
                    deviceCapabilities: babelHelpers.extends({}, n)
                },
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp: t,
                action: this.getAction()
            });
        };
        a_prototype.sendMutation = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
                const t_newsletterChatsMigration = t.newsletterChatsMigration;
                const a = babelHelpers.objectWithoutPropertiesLoose(t, e);
                const i = this.getMutation(o("WATimeUtils").unixTimeMs(), a);
                const l = yield this.capabilitiesHaveChanged(i);
                if (!l.hasChanged) {
                    o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[DeviceCapabilitiesSync] skip sync, no change"
                    ])));
                    return;
                }
                yield o("WAWebSyncdCoreApi").lockForSync([], [
                    i
                ], function() {
                    return (c || (c = n("Promise"))).resolve();
                });
            });
            function r(e) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        return a;
    })(o("WAWebSyncdAction").AccountSyncdActionBase);
    l.default = _;
}, 98);