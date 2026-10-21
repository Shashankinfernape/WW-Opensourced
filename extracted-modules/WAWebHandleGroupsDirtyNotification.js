__d("WAWebHandleGroupsDirtyNotification", [
    "WAComms",
    "WALogger",
    "WASmaxGroupsGroupsDirtyNotificationRPC",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebQueryAndUpdateGroupsMetadataByJidsJob",
    "WAWebRestOperations",
    "WAWebScheduledOperations",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            const n = o("WASmaxGroupsGroupsDirtyNotificationRPC").receiveGroupsDirtyNotificationRPC(t);
            const { makeGroupsDirtyNotificationResponseAck: r, parsedRequest: a } = n;
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "handleGroupsDirtyNotification: rcvd dirty bit notif"
            ])));
            d(a);
            return r();
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            try {
                const t = e.groupsDirtyGroup.map((e)=>e.jid);
                yield o("WAWebRestOperations").runRestOperation(o("WAWebScheduledOperations").ScheduledOperation.QUERY_AND_UPDATE_GROUPS_METADATA_BY_JIDS, function() {
                    return p(t);
                }, function() {
                    return f(t);
                });
            } catch (e) {
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleGroupsDirtyNotification: failed with ",
                    ""
                ])), e).sendLogs("handleGroupsDirtyNotificationJob");
            }
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            yield o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd();
            yield o("WAComms").waitForConnection();
            yield o("WAWebQueryAndUpdateGroupsMetadataByJidsJob").queryAndUpdateDirtyGroupsMetadata(e);
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = yield o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().accessors.maybeCreateJob(o("WAWebPersistedJobDefinitions").jobSerializers.queryAndUpdateGroupsMetadataByJids(e));
            yield o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd();
            yield o("WAComms").waitForConnection();
            return o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().loadAndRunJobFromId(t.id);
        });
        return g.apply(this, arguments);
    }
    l.handleGroupsDirtyNotificationJob = u;
}, 98);