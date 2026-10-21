__d("WAWebVoipOngoingCallCollection", [
    "Promise",
    "WALogger",
    "WAWebBaseCollection",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebDBMessageFindLocal",
    "WAWebDBUpdateMessageTable",
    "WAWebDbEncryptionKey",
    "WAWebMsgGetters",
    "WAWebMsgModel",
    "WAWebProcessMultipleMsgsAction",
    "WAWebVoipGatingUtils",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    const p = Date.now();
    const _ = ((t)=>{
        function a() {
            let e;
            e = t.call(this) || this;
            e.$WAWebVoipOngoingCallCollectionImpl$p_1 = e.$WAWebVoipOngoingCallCollectionImpl$p_2();
            return e;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.hasOngoingJoinableGroupCalls = function() {
            return this.length > 0;
        };
        a_prototype.chatHasOngoingJoinableGroupCall = function(t) {
            return this.toArray().some((e)=>e.id.remote === t.id);
        };
        a_prototype.getByCallId = function(t) {
            return this.toArray().find((e)=>e.id.id === t);
        };
        a_prototype.getByChat = function(t) {
            return this.toArray().find((e)=>e.id.remote === t.id);
        };
        a_prototype.findOngoingCallActiveOnOtherSelfDevice = function() {
            if (!o("WAWebVoipGatingUtils").isDeviceSwitchingEnabled()) {
                return null;
            }
            const t = r("WAWebCallCollection").activeCall?.id;
            return this.toArray().find((e)=>o("WAWebMsgGetters").getSelfOtherDeviceConnected(e) === true && e.id.id !== t);
        };
        a_prototype.waitUntilLoaded = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (this.$WAWebVoipOngoingCallCollectionImpl$p_1 != null) {
                    try {
                        yield this.$WAWebVoipOngoingCallCollectionImpl$p_1;
                    } catch (e) {}
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$WAWebVoipOngoingCallCollectionImpl$p_2 = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey();
                    const t = yield this.$WAWebVoipOngoingCallCollectionImpl$p_3();
                    yield this.$WAWebVoipOngoingCallCollectionImpl$p_4(t);
                    this.add(t.filter((e)=>o("WAWebMsgGetters").getIsGroupCall(e)));
                } catch (error) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebVoipOngoingCallCollection] init failed: ",
                        ""
                    ])), error).tags("nexus-voip").sendLogs("voip-ongoing-call-collection-init-failed");
                } finally{
                    this.$WAWebVoipOngoingCallCollectionImpl$p_1 = null;
                }
            });
            function r() {
                return t.apply(this, arguments);
            }
            return r;
        })();
        a_prototype.$WAWebVoipOngoingCallCollectionImpl$p_4 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (e.length !== 0) {
                    const a = r("WAWebCallCollection").activeCall?.id;
                    const i = e.filter((e)=>{
                        if (o("WAWebMsgGetters").getIsGroupCall(e) || o("WAWebMsgGetters").getFinalCallOutcome(e) === o("WAWebCallLogMsgData.flow").CallOutcome.Completed) {
                            return false;
                        }
                        if (a != null && e.id.id === a) {
                            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip] crash cleanup: skipping active call ",
                                ""
                            ])), e.id.id);
                            return false;
                        }
                        if (e.t != null && e.t * 1000 >= p) {
                            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[voip] crash cleanup: skip recent call ",
                                " (this session)"
                            ])), e.id.id);
                            return false;
                        }
                        return true;
                    });
                    if (i.length !== 0) {
                        o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[voip] crash cleanup: ",
                            " 1:1 calls marked complete"
                        ])), i.length);
                        const l = i.map((()=>{
                            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                                try {
                                    const t = {
                                        finalCallOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Completed
                                    };
                                    o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, t);
                                    e.set(t);
                                } catch (error) {
                                    o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                                        "voip: crash cleanup: Failed to clean up call log ",
                                        ": ",
                                        ""
                                    ])), e.id?.id, error);
                                }
                            });
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        })());
                        yield (m || (m = n("Promise"))).all(l);
                    }
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.$WAWebVoipOngoingCallCollectionImpl$p_3 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                const msgObjs = yield o("WAWebDBMessageFindLocal").getVoipOngoingCallLogMessages();
                return o("WAWebProcessMultipleMsgsAction")._processMultipleMessages({
                    chatId: undefined,
                    meta: {
                        add: "search"
                    },
                    msgObjs,
                    processMessageOrigin: "msgCollectionGetVoipCallLogs"
                });
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return a;
    })(o("WAWebBaseCollection").BaseCollection);
    _.model = o("WAWebMsgModel").Msg;
    const f = new _;
    l.WAWebVoipOngoingCallCollection = f;
}, 98);