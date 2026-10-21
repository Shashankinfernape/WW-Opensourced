__d("ResponsiveTrackerMainThread", [
    "ClientServiceWorkerMessage",
    "FBLogger",
    "Promise",
    "RSTCloseObserver",
    "RSTConfig",
    "RSTConstants",
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTEventsRegisterUseCasesMainThread",
    "RSTIncidentLoggingMainThread",
    "RSTIndexedDBSafe",
    "RSTLocalStorageMainThread",
    "RSTMarkFirstUnrecoverableMainThread",
    "RSTMetadataCollectorMainThread",
    "RSTMetadataMainThread",
    "RSTSessionID",
    "RSTUtils",
    "RSTUtilsMainThread",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    r("RSTEventsRegisterUseCasesMainThread")();
    const s = (()=>{
        function t() {
            this.$1 = null;
            this.$2 = new Set;
            this.$3 = false;
            this.$4 = false;
        }
        const t_prototype = t.prototype;
        t_prototype.init = function(t) {
            this.$1 = t;
            this.startLoggingUnresponsiveEvents();
            this.startSendingHeartBeatToWorker();
            this.startMonitorPageHiding();
            this.startMonitoringPageUnload();
            o("RSTMetadataCollectorMainThread").start();
            r("RSTLocalStorageMainThread").probeAndInit();
            r("RSTIndexedDBSafe").maybeClearObsoleteIncidents();
        };
        t_prototype.startLoggingUnresponsiveEvents = function() {
            const e = this;
            this.logAndDeleteUnresponsiveEvents();
            window.setInterval(function() {
                e.logAndDeleteUnresponsiveEvents();
            }, r("RSTConfig").MAIN_THREAD_LOGGING_INTERVAL_MS);
        };
        t_prototype.startSendingHeartBeatToWorker = function() {
            const e = this;
            window.setInterval(function() {
                e.postEvent(o("RSTEvents").RSTEvent.HEART_BEAT);
            }, r("RSTConfig").HEART_BEAT_INTERVAL_MS);
        };
        t_prototype.startMonitorPageHiding = function() {
            const e = this;
            document.addEventListener("visibilitychange", function() {
                if (document.hidden) {
                    e.postEvent(o("RSTEvents").RSTEvent.BROWSER_TAB_BACKGROUND);
                } else {
                    e.postEvent(o("RSTEvents").RSTEvent.BROWSER_TAB_FOREGROUND);
                }
            });
        };
        t_prototype.startMonitoringPageUnload = function() {
            o("RSTCloseObserver").initPageCloseObserver();
        };
        t_prototype.postEvent = function(t, n = o("RSTMetadataMainThread").getMainThreadMetadata()) {
            const e = {
                type: r("RSTConfig").MESSAGE_TYPE,
                event: t,
                eventTime: Date.now(),
                DOMData: {
                    hidden: document.hidden
                },
                sessionID: o("RSTSessionID").getSessionID(),
                metadata: n
            };
            o("RSTEventsMessageQueue").notify(t, {
                mainToWorkerMessage: e
            });
            this.$5(e);
            this.$6(e);
        };
        t_prototype.postEventLightweight = function(t, n = o("RSTMetadataMainThread").getMainThreadMetadataWithExternalAnnotationsOnly()) {
            const e = {
                type: r("RSTConfig").MESSAGE_TYPE,
                event: t,
                eventTime: Date.now(),
                DOMData: {
                    hidden: document.hidden
                },
                sessionID: o("RSTSessionID").getSessionID(),
                metadata: n
            };
            o("RSTEventsMessageQueue").notify(t, {
                mainToWorkerMessage: e
            });
            this.$5(e);
            this.$6(e);
        };
        t_prototype.$6 = function(t) {
            try {
                this.$1?.postMessage(t);
            } catch (error) {
                if (this.$4) {
                    return;
                }
                const o = r("getErrorSafe")(error);
                r("FBLogger")("responsive-tracker").catching(o).warn(o.message ?? "Failed to post message to web worker");
                this.$4 = true;
            }
        };
        t_prototype.$5 = function(t) {
            if (r("RSTConfig").ENABLE_SERVICE_WORKER) {
                try {
                    new (r("ClientServiceWorkerMessage"))(r("RSTConfig").MESSAGE_TYPE, t).sendViaController();
                } catch (error) {
                    if (this.$3) {
                        return;
                    }
                    const n = r("getErrorSafe")(error);
                    r("FBLogger")("responsive-tracker").catching(n).warn(n.message ?? "Failed to post message to service worker");
                    this.$3 = true;
                }
            }
        };
        t_prototype.$7 = function(t) {
            return Date.now() - (t.remoteLoggerProposeTime ?? 0) > r("RSTConfig").INCIDENT_PROPOSED_PROCESSOR_OWNERSHIP_EXPIRE_MS;
        };
        t_prototype.$8 = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t, n) {
                if (e != null) {
                    const a = e.incidentID;
                    if (o("RSTIncidentLoggingMainThread").getLoggedIncidentIDs().has(a)) {
                        t.add(a);
                        return;
                    }
                    const i = e.sessionID === o("RSTSessionID").getSessionID();
                    if (i) {
                        e.hasRecovered = true;
                        o("RSTEventsMessageQueue").notify(o("RSTEvents").RSTEvent.RECOVERABLE_UNRESPONSIVENESS, {
                            unresponsiveEventRecord: e
                        });
                        t.add(a);
                        return;
                    }
                    const l = Date.now() - e.lastHeartBeatTimeStamp;
                    if (!(l < r("RSTConfig").WAIT_MS_FOR_OTHER_SESSION_BEFORE_PROCESSING)) {
                        if (l > r("RSTConfig").OBSOLETE_PENDING_INCIDENT_THRESHOLD_MS) {
                            if (o("RSTUtilsMainThread").shouldSkipProcessingIncident(a)) {
                                return;
                            }
                            o("RSTUtils").debugLogImportant(`pending incident ${a} cleaned`);
                            t.add(a);
                            return;
                        }
                        const s = e.remoteLoggerSessionID == null || this.$7(e);
                        if (s) {
                            o("RSTUtils").debugLogImportant(`propose as logger for incident ${a}`);
                            n.add(a);
                            return;
                        }
                        if (e.remoteLoggerSessionID === o("RSTSessionID").getSessionID() && !this.$7(e)) {
                            o("RSTUtils").debugLogImportant(`act as logger for incident ${a}`);
                            if (e.hasRecovered) {
                                o("RSTEventsMessageQueue").notify(o("RSTEvents").RSTEvent.RECOVERABLE_UNRESPONSIVENESS, {
                                    unresponsiveEventRecord: e
                                });
                                t.add(a);
                            } else {
                                if (e.incidentType !== r("RSTConstants").incidentType.unexpectedExit && e.unrecoverLastsForMs < r("RSTConfig").UNRECOVER_LASTS_THRESHOLD_MS) {
                                    return;
                                }
                                if (!r("RSTConfig").ONE_UNRECOVERABLE_INCIDENT_PER_SESSION || !this.$2.has(e.sessionID)) {
                                    yield o("RSTMarkFirstUnrecoverableMainThread").markFirstUnrecoverableIncident(e);
                                    o("RSTEventsMessageQueue").notify(o("RSTEvents").RSTEvent.CRASH_INCIDENT, {
                                        unresponsiveEventRecord: e
                                    });
                                    this.$2.add(e.sessionID);
                                } else {
                                    o("RSTUtils").debugLogImportant(`skip logging unrecoverable incident ${a} ${`from session ${e.sessionID} since it has been logged`}`);
                                }
                                t.add(a);
                            }
                        }
                    }
                }
            });
            function t(t, n, r) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        t_prototype.$9 = function(a, i) {
            const t = this;
            if (a.size === 0 && i.size === 0) {
                return (e || (e = n("Promise"))).resolve();
            }
            const l = o("RSTSessionID").getSessionID();
            const s = Date.now();
            return r("RSTIndexedDBSafe").mutateIncidentsInDB(function(e) {
                const e_incidentID = e.incidentID;
                if (a.has(e_incidentID)) {
                    return "delete";
                }
                if (i.has(e_incidentID)) {
                    if (e.remoteLoggerSessionID != null && e.remoteLoggerSessionID !== l && !t.$7(e)) {
                        return "keep";
                    }
                    e.remoteLoggerSessionID = l;
                    e.remoteLoggerProposeTime = s;
                    return "update";
                }
                return "keep";
            });
        };
        t_prototype.logAndDeleteUnresponsiveEvents = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                try {
                    o("RSTEventsMessageQueue").notify(o("RSTEvents").RSTEvent.CHECKING_INDEXDB_FOR_EVENTS, {});
                    const e = yield r("RSTIndexedDBSafe").readEventsFromDB();
                    const t = new Set;
                    const n = new Set;
                    for (const a of e){
                        try {
                            yield o("RSTUtils").scheduleYield();
                            yield this.$8(a, t, n);
                        } catch (error) {
                            const l = r("getErrorSafe")(error);
                            r("FBLogger")("responsive-tracker").catching(l).warn(l.message ?? "Failed to process incident");
                        }
                    }
                    yield this.$9(t, n);
                } catch (error) {
                    const u = r("getErrorSafe")(error);
                    r("FBLogger")("responsive-tracker").catching(u).warn(u.message ?? "Failed to log incidents");
                }
            });
            function t() {
                return e.apply(this, arguments);
            }
            return t;
        })();
        return t;
    })();
    const u = new s;
    l.default = u;
}, 98);