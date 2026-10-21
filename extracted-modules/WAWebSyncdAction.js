__d("WAWebSyncdAction", [
    "Promise",
    "WALogger",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = (()=>{
        function t() {}
        const t_prototype = t.prototype;
        t_prototype.malformedActionIndex = function() {
            const e = this.asSyncdActionHandler();
            return o("WAWebSyncdIndexUtils").malformedActionIndex(e.collectionName, e.getAction());
        };
        t_prototype.resolveConflicts = function(t, { timestamp }) {
            if (timestamp >= t.timestamp) {
                return (u || (u = n("Promise"))).resolve(o("WAWebSyncdConst").ConflictResolutionState.ApplyRemoteAndDropLocal);
            }
            return (u || (u = n("Promise"))).resolve(o("WAWebSyncdConst").ConflictResolutionState.SkipRemote);
        };
        t_prototype.shouldDropPendingMutationForRemoteRemove = function(t, n) {
            return t.operation === o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE;
        };
        t_prototype.dropMutationDueToCrossIndexConflict = function(t, r) {
            return (u || (u = n("Promise"))).resolve(false);
        };
        t_prototype.getValidatedContent = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                switch(e.operation){
                    case "remove":
                        return this.getValidatedContentRemove(e);
                    case "set":
                        return this.getValidatedContentSet(e);
                }
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getValidatedContentSet = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                throw r("err")("You must implement getValidatedContent on your handler before using `withValidatedContent`");
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.getValidatedContentRemove = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                return {
                    result: "unsupported"
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.withValidatedContent = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
                const r = yield this.getValidatedContent(t);
                const a = this.asSyncdActionHandler();
                switch(r.result){
                    case "malformed_index":
                        return this.malformedActionIndex();
                    case "malformed_value":
                        return o("WAWebSyncdIndexUtils").malformedActionValue(a.collectionName);
                    case "unsupported":
                        return {
                            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported
                        };
                    case "ok":
                        return n(r.content).catch((t)=>{
                            const n = t instanceof Error ? t.message : String(t);
                            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[syncd] withValidatedContent err: ",
                                ": ",
                                ""
                            ])), a.getAction(), n);
                            return {
                                actionState: o("WAWebSyncdConst").SyncActionState.Failed
                            };
                        });
                }
            });
            function r(e, n) {
                return t.apply(this, arguments);
            }
            return r;
        })();
        t_prototype.asSyncdActionHandler = function() {
            if (this.isSyncdAction()) {
                return this;
            }
            throw r("err")("Invalid cast to SyncdAction");
        };
        t_prototype.isLidMutation = function(t) {
            return false;
        };
        t_prototype.isSyncdAction = function() {
            return true;
        };
        t_prototype.isAccountSyncdAction = function() {
            return false;
        };
        t_prototype.isChatSyncdAction = function() {
            return false;
        };
        t_prototype.isChatOrContactSyncdAction = function() {
            return false;
        };
        t_prototype.isChatMessageRangeSyncdAction = function() {
            return false;
        };
        t_prototype.isMessageSyncdAction = function() {
            return false;
        };
        return t;
    })();
    const d = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.isAccountSyncdAction = function() {
            return true;
        };
        t_prototype.asAccountSyncdActionHandler = function() {
            if (this.isAccountSyncdAction()) {
                return this;
            }
            throw r("err")("Invalid cast to AccountSyncdAction");
        };
        return t;
    })(c);
    const m = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.isChatSyncdAction = function() {
            return true;
        };
        t_prototype.asChatSyncdActionHandler = function() {
            if (this.isChatSyncdAction()) {
                return this;
            }
            throw r("err")("Invalid cast to ChatSyncdAction");
        };
        t_prototype.isLidMutation = function(t) {
            const e = this.asChatSyncdActionHandler();
            const n = t[e.chatJidIndex];
            if (n == null) {
                return false;
            }
            try {
                return o("WAWebWidFactory").createWid(n).isLid();
            } catch (error) {
                const a = r("getErrorSafe")(error);
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "isLidMutation: invalid wid in mutation index, error: ",
                    ""
                ])), a.message).sendLogs("syncd: isLidMutation invalid wid");
                return false;
            }
        };
        return t;
    })(c);
    const p = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.isChatOrContactSyncdAction = function() {
            return true;
        };
        t_prototype.asChatOrContactSyncdActionHandler = function() {
            if (this.isChatOrContactSyncdAction()) {
                return this;
            }
            throw r("err")("Invalid cast to ChatOrContactSyncdAction");
        };
        return t;
    })(m);
    const _ = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.isMessageSyncdAction = function() {
            return true;
        };
        t_prototype.asMessageSyncdActionHandler = function() {
            if (this.isMessageSyncdAction()) {
                return this;
            }
            throw r("err")("Invalid cast to MessageSyncdAction");
        };
        return t;
    })(m);
    const f = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const t_prototype = t.prototype;
        t_prototype.isChatMessageRangeSyncdAction = function() {
            return true;
        };
        t_prototype.asChatMessageRangeSyncdActionHandler = function() {
            if (this.isChatMessageRangeSyncdAction()) {
                return this;
            }
            throw r("err")("Invalid cast to ChatMessageRangeSyncdActionBase");
        };
        return t;
    })(m);
    l.AccountSyncdActionBase = d;
    l.ChatSyncdActionBase = m;
    l.ChatOrContactSyncdActionBase = p;
    l.MessageSyncdActionBase = _;
    l.ChatMessageRangeSyncdActionBase = f;
}, 98);