__d("WAWebBackendEventBus", [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBusTypes",
    "WAWebBackendWorkerClient",
    "WAWebEventEmitter",
    "WAWebSocketConstants",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    let m;
    let p;
    let _;
    let f;
    let g;
    let h;
    let y;
    let C;
    let b;
    let v;
    let S;
    let R;
    let L;
    let E;
    let k;
    let I;
    let T;
    let D;
    let x;
    let $;
    let P;
    let N;
    let M;
    let w;
    const A = ((t)=>{
        function n() {
            let e;
            e = t.call(this) || this;
            e.isMainStreamReadyMd = false;
            e.isOfflineDeliveryEnd = false;
            e.socketState = o("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED;
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.APP_STATE_SYNC_COMPLETED, function(e) {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((t)=>{
                    t.fireAndForget("backendEventBusSync", "onAppStateSyncCompleted", {
                        collectionDetails: e
                    });
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.LOGOUT, function() {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    e.fireAndForget("backendEventBusSync", "onLogout");
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.REFRESH_QR, function() {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    e.fireAndForget("backendEventBusSync", "onRefreshQR");
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.ON_INITIAL_CHAT_SYNCED, function() {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    e.fireAndForget("backendEventBusSync", "onInitialChatHistorySynced");
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.ON_RECENT_CHAT_HISTORY_SYNCED, function() {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    e.fireAndForget("backendEventBusSync", "onRecentChatHistorySynced");
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.ON_FULL_CHAT_HISTORY_SYNCED, function() {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    e.fireAndForget("backendEventBusSync", "onFullChatHistorySynced");
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.ON_CRITICAL_SYNC_DONE, function() {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    e.fireAndForget("backendEventBusSync", "onCriticalSyncDone");
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.STORAGE_INITIALIZATION_ERROR, function() {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    e.fireAndForget("backendEventBusSync", "onStorageInitializationError");
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.SOCKET_STREAM_DISCONNECTED, function() {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    e.fireAndForget("backendEventBusSync", "onSocketStreamDisconnected");
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.OPEN_SOCKET_STREAM, function() {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    e.fireAndForget("backendEventBusSync", "onOpenSocketStream");
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.RECONNECT_SOCKET, function() {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    e.fireAndForget("backendEventBusSync", "onReconnectSocket");
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.SET_SOCKET_STATE, function(e) {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((t)=>{
                    t.fireAndForget("backendEventBusSync", "onSetSocketState", {
                        state: e
                    });
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.MAIN_STREAM_MODE_READY, function() {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    e.fireAndForget("backendEventBusSync", "onMainStreamModeReady");
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.OFFLINE_DELIVERY_END, function() {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    e.fireAndForget("backendEventBusSync", "onOfflineDeliveryEnd");
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.OFFLINE_DELIVERY_STATE_RESET, function() {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    e.fireAndForget("backendEventBusSync", "onOfflineDeliveryStateReset");
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.ON_AB_PROPS_UPDATE, function(e) {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((t)=>{
                    t.fireAndForget("backendEventBusSync", "onAbPropsUpdate", e);
                });
            });
            e.on(o("WAWebBackendEventBusTypes").BackendEvent.AB_PROPS_LOADED, function() {
                o("WAWebBackendWorkerClient").getBackendWorkerBridge().then((e)=>{
                    e.fireAndForget("backendEventBusSync", "onAbPropsLoaded");
                });
            });
            return e;
        }
        babelHelpers.inheritsLoose(n, t);
        const a = n.prototype;
        a.onAppStateSyncCompleted = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.APP_STATE_SYNC_COMPLETED, t);
            return this;
        };
        a.onceAppStateSyncCompleted = function(t) {
            this.once(o("WAWebBackendEventBusTypes").BackendEvent.APP_STATE_SYNC_COMPLETED, t);
            return this;
        };
        a.triggerAppStateSyncCompleted = function(n) {
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: app_state_sync_completed"
            ])));
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.APP_STATE_SYNC_COMPLETED, n);
            o("WAWebBackendApi").frontendFireAndForget("triggerAppStateSyncCompletedFromBridge", {});
        };
        a.onLogout = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.LOGOUT, t);
            return this;
        };
        a.triggerLogout = function() {
            o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: logout"
            ])));
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.LOGOUT);
            o("WAWebBackendApi").frontendFireAndForget("triggerLogoutFromBridge", {});
        };
        a.triggerStartingLogout = function() {
            o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: starting_logout"
            ])));
            o("WAWebBackendApi").frontendFireAndForget("triggerStartingLogoutFromBridge", {});
        };
        a.onRefreshQR = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.REFRESH_QR, t);
            return this;
        };
        a.triggerRefreshQR = function() {
            o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: refresh_qr"
            ])));
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.REFRESH_QR);
        };
        a.onInitialChatHistorySynced = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.ON_INITIAL_CHAT_SYNCED, t);
            return this;
        };
        a.triggerInitialChatHistorySynced = function() {
            o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: on_initial_chat_synced"
            ])));
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.ON_INITIAL_CHAT_SYNCED);
            o("WAWebBackendApi").frontendFireAndForget("triggerInitialChatHistorySyncedFromBridge", {});
        };
        a.onRecentChatHistorySynced = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.ON_RECENT_CHAT_HISTORY_SYNCED, t);
            return this;
        };
        a.triggerRecentChatHistorySynced = function() {
            o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: on_recent_chat_history_synced"
            ])));
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.ON_RECENT_CHAT_HISTORY_SYNCED);
        };
        a.onFullChatHistorySynced = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.ON_FULL_CHAT_HISTORY_SYNCED, t);
            return this;
        };
        a.triggerFullChatHistorySynced = function() {
            o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: on_full_chat_history_synced"
            ])));
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.ON_FULL_CHAT_HISTORY_SYNCED);
        };
        a.onCriticalSyncDone = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.ON_CRITICAL_SYNC_DONE, t);
            return this;
        };
        a.triggerCriticalSyncDone = function() {
            o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: on_critical_sync_done"
            ])));
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.ON_CRITICAL_SYNC_DONE);
            o("WAWebBackendApi").frontendFireAndForget("triggerCriticalSyncDoneFromBridge", {});
        };
        a.triggerHistorySyncChunkProcessed = function(t) {
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: new_history_sync_chunk_processed"
            ])));
            o("WAWebBackendApi").frontendFireAndForget("triggerHistorySyncChunkProcessedFromBridge", {
                chatsUpdated: Array.from(t)
            });
        };
        a.onStorageInitializationError = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.STORAGE_INITIALIZATION_ERROR, t);
            return this;
        };
        a.triggerStorageInitializationError = function(t) {
            if (t != null) {
                o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                    "BackendEventBus: storage_initialization_error"
                ]))).catching(r("getErrorSafe")(t)).sendLogs("storage-initialization-error");
            } else {
                o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose([
                    "BackendEventBus: storage_initialization_error"
                ]))).sendLogs("storage-initialization-error-not-provided");
            }
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.STORAGE_INITIALIZATION_ERROR);
        };
        a.onSocketStreamDisconnected = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.SOCKET_STREAM_DISCONNECTED, t);
            return this;
        };
        a.triggerSocketStreamDisconnected = function() {
            o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: socket_stream_disconnected"
            ])));
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.SOCKET_STREAM_DISCONNECTED);
            o("WAWebBackendApi").frontendFireAndForget("triggerSocketStreamDisconnectedFromBridge", {});
        };
        a.onOpenSocketStream = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.OPEN_SOCKET_STREAM, t);
            return this;
        };
        a.triggerOpenSocketStream = function() {
            o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: open_socket_stream"
            ])));
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.OPEN_SOCKET_STREAM);
            o("WAWebBackendApi").frontendFireAndForget("triggerOpenSocketStreamFromBridge", {});
        };
        a.onReconnectSocket = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.RECONNECT_SOCKET, t);
            return this;
        };
        a.triggerReconnectSocket = function() {
            o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: reconnect_socket"
            ])));
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.RECONNECT_SOCKET);
        };
        a.onSetSocketState = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.SET_SOCKET_STATE, t);
            return this;
        };
        a.triggerSetSocketState = function(t) {
            o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: set_socket_state ",
                ""
            ])), t);
            this.socketState = t;
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.SET_SOCKET_STATE, t);
        };
        a.triggerUpdateStatusPrivacySettings = function(t) {
            o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: update_status_privacy_settings"
            ])));
            o("WAWebBackendApi").frontendFireAndForget("triggerUpdateStatusPrivacySettingsFromBridge", t);
        };
        a.triggerUpdateCrosspostAutoShareSettings = function(t) {
            o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: update_crosspost_auto_share_settings"
            ])));
            o("WAWebBackendApi").frontendFireAndForget("triggerUpdateCrosspostAutoShareSettingsFromBridge", t);
        };
        a.triggerTemporaryBan = function(t) {
            o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: account_temporarily_banned banned=",
                ""
            ])), t.banned);
            o("WAWebBackendApi").frontendFireAndForget("triggerTemporaryBanFromBridge", t);
        };
        a.triggerAccountSyncForPrivacy = function(t) {
            o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: account_sync_for_privacy"
            ])));
            o("WAWebBackendApi").frontendFireAndForget("triggerAccountSyncForPrivacyFromBridge", t);
        };
        a.triggerUnexpectedLogoutModal = function(t) {
            o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: unexpected_logout_modal"
            ])));
            o("WAWebBackendApi").frontendFireAndForget("triggerUnexpectedLogoutModalFromBridge", {
                reason: t
            });
        };
        a.triggerInitialLoadReady = function() {
            o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: initial_load_ready"
            ])));
            o("WAWebBackendApi").frontendFireAndForget("triggerInitialLoadReadyFromBridge", {});
        };
        a.triggerServiceUnavailable = function() {
            o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: service_unavailable_503"
            ])));
            o("WAWebBackendApi").frontendFireAndForget("triggerServiceUnavailableFromBridge", {});
        };
        a.onMainStreamModeReady = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.MAIN_STREAM_MODE_READY, t);
            return this;
        };
        a.triggerMainStreamModeReady = function() {
            o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: main_stream_mode_ready"
            ])));
            this.isMainStreamReadyMd = true;
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.MAIN_STREAM_MODE_READY);
            o("WAWebBackendApi").frontendFireAndForget("triggerMainStreamModeReadyFromBridge", {});
        };
        a.triggerOfflineProcessReady = function() {
            o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: offline_process_ready"
            ])));
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.OFFLINE_PROCESS_READY);
        };
        a.onOfflineDeliveryEnd = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.OFFLINE_DELIVERY_END, t);
            return this;
        };
        a.onceOfflineDeliveryEnd = function(t) {
            this.once(o("WAWebBackendEventBusTypes").BackendEvent.OFFLINE_DELIVERY_END, t);
            return this;
        };
        a.triggerOfflineDeliveryEnd = function() {
            o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: offline_delivery_end"
            ])));
            this.isOfflineDeliveryEnd = true;
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.OFFLINE_DELIVERY_END);
            o("WAWebBackendApi").frontendFireAndForget("triggerOfflineDeliveryEndFromBridge", {});
        };
        a.onOfflineDeliveryStateReset = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.OFFLINE_DELIVERY_STATE_RESET, t);
            return this;
        };
        a.triggerOfflineDeliveryStateReset = function() {
            o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: offline_delivery_state_reset"
            ])));
            this.isOfflineDeliveryEnd = false;
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.OFFLINE_DELIVERY_STATE_RESET);
            o("WAWebBackendApi").frontendFireAndForget("triggerOfflineDeliveryStateResetFromBridge", {});
        };
        a.onAbPropsUpdate = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.ON_AB_PROPS_UPDATE, t);
            return this;
        };
        a.triggerAbPropsUpdate = function(t) {
            o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: on_ab_props_update"
            ])));
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.ON_AB_PROPS_UPDATE, t);
            o("WAWebBackendApi").frontendFireAndForget("triggerAbPropsUpdateFromBridge", t);
        };
        a.onAbPropsLoaded = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.AB_PROPS_LOADED, t);
            return this;
        };
        a.triggerAbPropsLoaded = function() {
            o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: ab_props_loaded"
            ])));
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.AB_PROPS_LOADED);
            o("WAWebBackendApi").frontendFireAndForget("triggerAbPropsLoadedFromBridge");
        };
        a.onPrimaryFeaturesSynced = function(t) {
            this.on(o("WAWebBackendEventBusTypes").BackendEvent.PRIMARY_FEATURES_SYNCED, t);
            return this;
        };
        a.triggerPrimaryFeaturesSynced = function(t) {
            o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose([
                "BackendEventBus: primary_features_synced"
            ])));
            this.trigger(o("WAWebBackendEventBusTypes").BackendEvent.PRIMARY_FEATURES_SYNCED, t);
        };
        return n;
    })(r("WAWebEventEmitter"));
    const F = new A;
    l.BackendEvent = o("WAWebBackendEventBusTypes").BackendEvent;
    l.BackendEventBus = F;
}, 98);