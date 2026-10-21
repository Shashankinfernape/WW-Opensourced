__d("WAWebWamLoginReporter", [
    "WALogger",
    "WAStorageEstimator",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebCollectionConstants",
    "WAWebContactCollection",
    "WAWebEventEmitter",
    "WAWebMsgCollection",
    "WAWebNetworkType",
    "WAWebStreamModel",
    "WAWebWamQrCodeCount",
    "WAWebWebcLoginWamEvent"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u() {
        return Math.floor(window.performance.now());
    }
    const c = ((t)=>{
        function n() {
            let e;
            let n;
            n = t.call(this) || this;
            n.timings = {
                chatSync: undefined,
                contactSync: undefined,
                endSync: undefined,
                msgSync: undefined,
                startSync: undefined
            };
            n.data = {
                webcPersistentLoginEnabled: false,
                webcQrCodes: 0,
                webcSyncMessageCount: 0,
                webcSyncMessageSize: 0
            };
            if ((e = window.performance) != null && e.now) {
                n.init();
                return n;
            }
            return babelHelpers.assertThisInitialized(n);
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.init = function() {
            this.timings.startSync = o("WAWebStreamModel").Stream.lastSyncStart;
            this.listenTo(o("WAWebStreamModel").Stream, "change:mode", this.changeStreamMode);
            this.listenTo(o("WAWebChatCollection").ChatCollection, o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED, this._handleChatSync);
            this.listenTo(o("WAWebContactCollection").ContactCollection, o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED, this._handleContactSync);
            this.listenTo(o("WAWebMsgCollection").MsgCollection, o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED, this._handleMsgSync);
            this.listenTo(o("WAWebMsgCollection").MsgCollection, "handle:msg_history", this._handleMsgHistory);
        };
        n_prototype.changeStreamMode = function() {
            if (o("WAWebStreamModel").Stream.mode === o("WAWebStreamModel").StreamMode.SYNCING) {
                this.timings.startSync = u();
                this.data.webcPersistentLoginEnabled = true;
            }
            if (o("WAWebStreamModel").Stream.mode === o("WAWebStreamModel").StreamMode.MAIN) {
                this.timings.endSync = u();
                this.maybeLogToWam();
            }
        };
        n_prototype._handleChatSync = function(t) {
            if (t.timing != null) {
                this.data.webcSyncChatT = t.timing;
            } else {
                this.timings.chatSync = u();
            }
            this.data.webcSyncChatCount = t.count;
            this.data.webcSyncChatSize = 10;
            this.maybeLogToWam();
        };
        n_prototype._handleMsgSync = function(t) {
            if (t) {
                this.timings.msgSync = u();
                this.data.webcSyncMessageCount += t.count;
            }
            this.maybeLogToWam();
        };
        n_prototype._handleContactSync = function(t) {
            if (t.timing != null) {
                this.data.webcSyncContactT = t.timing;
            } else {
                this.timings.contactSync = u();
            }
            this.data.webcSyncContactCount = t.count;
            this.maybeLogToWam();
        };
        n_prototype._handleMsgHistory = function(t) {
            this.data.webcSyncMessageSize += t.binarySize;
            this.data.webcSyncMessageCount += t.count;
            if (this.timings.msgSync != null) {
                this.timings.msgSync = u();
            }
        };
        n_prototype.maybeLogToWam = function() {
            const t = this;
            const timings = this.timings;
            const { chatSync, contactSync, msgSync } = timings;
            const l = chatSync != null && Number.isFinite(chatSync || this.data.webcSyncChatT);
            const s = contactSync != null && Number.isFinite(contactSync || this.data.webcSyncContactT);
            const u = Number.isFinite(msgSync);
            if (!(!l || !s || !u || this._commitPromise)) {
                this._commitPromise = o("WAStorageEstimator").estimateStorage().then((n)=>{
                    if (n.success) {
                        t._commitEvent(n.value);
                    } else {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[wam] Error committing login event"
                        ])));
                    }
                }).then(()=>t.reset());
            }
        };
        n_prototype._commitEvent = function(t) {
            const timings = this.timings;
            const { chatSync, contactSync, endSync, msgSync, startSync } = timings;
            const initialDisplayDate = r("WAWebWamQrCodeCount").initialDisplayDate;
            if (initialDisplayDate != null && initialDisplayDate !== 0 && startSync != null && endSync != null && msgSync != null && chatSync != null && contactSync != null && Number.isFinite(initialDisplayDate) && Number.isFinite(startSync) && Number.isFinite(endSync)) {
                this.data.webcQrLoadT = initialDisplayDate;
                this.data.webcQrCodes = r("WAWebWamQrCodeCount").get();
                this.data.webcLoginT = startSync - initialDisplayDate;
                this.data.webcSyncT = endSync - startSync;
                this.data.webcSyncMessageT = msgSync - startSync;
                if (this.data.webcSyncChatT == null || this.data.webcSyncChatT === 0) {
                    this.data.webcSyncChatT = chatSync - startSync;
                }
                if (this.data.webcSyncContactT == null || this.data.webcSyncContactT === 0) {
                    this.data.webcSyncContactT = contactSync - startSync;
                }
                this.data.webcBrowserNetworkType = o("WAWebNetworkType").getEffectiveNetworkType();
                if (t) {
                    this.data.webcBrowserStorageQuotaBytes = t.quota;
                    this.data.webcBrowserStorageQuotaUsedBytes = t.usage;
                }
                const d = new (o("WAWebWebcLoginWamEvent")).WebcLoginWamEvent(this.data);
                d.commit();
            } else {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "One or more of the login timings was not logged: "
                ])));
            }
        };
        n_prototype.reset = function() {
            this.stopListening();
            this.data = {
                webcPersistentLoginEnabled: false,
                webcQrCodes: 0,
                webcSyncMessageCount: 0,
                webcSyncMessageSize: 0
            };
            this.timings = {
                chatSync: undefined,
                contactSync: undefined,
                endSync: undefined,
                msgSync: undefined,
                startSync: undefined
            };
            this._commitPromise = undefined;
            this.listenToOnce(o("WAWebCmd").Cmd, "logout_from_bridge", this.init);
        };
        return n;
    })(r("WAWebEventEmitter"));
    const d = function() {
        return new c;
    };
    l.initialize = d;
}, 98);