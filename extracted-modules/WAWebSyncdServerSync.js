__d("WAWebSyncdServerSync", [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebGetPendingMutation",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSyncd",
    "WAWebSyncdCollectionHandler",
    "WAWebSyncdConst",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
    "WAWebSyncdMetrics",
    "WAWebSyncdRequestBuilder",
    "WAWebSyncdResponseParser",
    "WAWebSyncdWamAppState",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
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
    const y = 5;
    const C = 500;
    function b(e) {
        return v.apply(this, arguments);
    }
    function v() {
        v = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            let r = Math.random().toString(36).substr(2, 5);
            yield I(t, `${r} start serverSync`);
            let a = [];
            for(var i = [].concat(t), l = 0; (l < y || i.length > 0 && l < C) && i.length !== 0;){
                const s = yield S(i, r);
                const { doneCollections, refetchCollections } = s;
                yield (h || (h = n("Promise"))).all(doneCollections.map((e)=>I([
                        e.name
                    ], `${r} done collection ${e.name},
            state: ${e.state}`)));
                i = refetchCollections;
                a = a.concat(doneCollections);
                l++;
                r = Math.random().toString(36).substr(2, 5);
            }
            if (i.length > 0) {
                yield I(i, "error: max iterations");
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: reached max iterations for collections: ",
                    ""
                ])), i).tags("syncd").sendLogs("syncd: max iteration");
                a = a.concat(i.map((e)=>({
                        state: o("WAWebSyncdConst").CollectionState.ErrorRetry,
                        name: e
                    })));
            }
            return a;
        });
        return v.apply(this, arguments);
    }
    function S(e, t) {
        return R.apply(this, arguments);
    }
    function R() {
        R = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            if (e.length === 0) {
                return {
                    doneCollections: [],
                    refetchCollections: []
                };
            }
            try {
                const r = yield L(e, t);
                const { collectionsToRefetch, collectionWithEncryptedMutations, collectionWithPendingMutationsIds, localCollectionVersions, rawResponseNode } = r;
                if (collectionsToRefetch.length > 0) {
                    o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: deferred local mutation upload for ",
                        ""
                    ])), collectionsToRefetch);
                }
                o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: local collection versions:",
                    ""
                ])), t, Array.from(localCollectionVersions.entries()).map(([t, n])=>`
\t${t} v${n ?? "(undefined)"}`).join(""));
                const y = o("WAWebSyncdResponseParser").syncResponseParser.parseOrThrow(rawResponseNode.node());
                o("WAWebSyncdCriticalBootstrapProcessingApi").logCriticalBootstrapStageIfNecessary(o("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.RESPONSE_PARSED_VALID);
                o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: received sync response for collections:\n      ",
                    ""
                ])), t, y.map((e)=>{
                    let t = `
${e.name}`;
                    if (e.version != null) {
                        t += `
\tupdated to version ${e.version}`;
                    }
                    if (e.snapshot != null) {
                        t += "\n	contains snapshot";
                    }
                    if (e.patches != null) {
                        t += `
\tcontains ${e.patches.length} patches`;
                    }
                    return t;
                }));
                const C = y.map((e)=>babelHelpers.extends({}, e, {
                        syncedPendingMutationsId: collectionWithPendingMutationsIds.get(e.name) ?? [],
                        syncedEncryptedMutations: collectionWithEncryptedMutations.get(e.name) ?? []
                    }));
                const b = [];
                const v = [];
                C.forEach((e)=>{
                    switch(e.state){
                        case o("WAWebSyncdConst").CollectionState.ErrorRetry:
                        case o("WAWebSyncdConst").CollectionState.ErrorFatal:
                        case o("WAWebSyncdConst").CollectionState.Blocked:
                            v.push(e);
                            return;
                        default:
                            b.push(e);
                    }
                    if (e.state === o("WAWebSyncdConst").CollectionState.Conflict || e.state === o("WAWebSyncdConst").CollectionState.ConflictHasMore) {
                        o("WAWebSyncdWamAppState").incConflict();
                    }
                });
                o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: start apply collections:\n      ",
                    ""
                ])), t, b.map((e)=>e.name));
                const syncdEventFlow = new (o("WAWebSyncdMetrics")).SyncdEventFlow;
                const R = yield (h || (h = n("Promise"))).all(b.map((collectionDetails)=>o("WAWebSyncdCollectionHandler").applyAppStateSyncResponse({
                        collectionDetails,
                        localVersion: localCollectionVersions.get(collectionDetails.name),
                        session: t,
                        syncdEventFlow
                    })));
                syncdEventFlow.end();
                o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: end apply collections: ",
                    ""
                ])), b.map((e)=>e.name));
                const refetchCollections = [];
                yield h.all(R.map((()=>{
                    const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                        if (e.state === o("WAWebSyncdConst").CollectionState.Conflict) {
                            const t = (yield o("WAWebGetPendingMutation").getSyncPendingMutationsByCollectionInTransaction(e.name)).length > 0;
                            if (t) {
                                refetchCollections.push(e.name);
                            } else {
                                e.state = o("WAWebSyncdConst").CollectionState.Success;
                                v.push(e);
                            }
                        } else {
                            if (e.state === o("WAWebSyncdConst").CollectionState.ConflictHasMore || e.state === o("WAWebSyncdConst").CollectionState.SuccessHasMore || e.state === o("WAWebSyncdConst").CollectionState.Success && collectionsToRefetch.some((t)=>t === e.name)) {
                                refetchCollections.push(e.name);
                            } else {
                                v.push(e);
                            }
                        }
                    });
                    return function(t) {
                        return e.apply(this, arguments);
                    };
                })()));
                return {
                    doneCollections: v,
                    refetchCollections
                };
            } catch (error) {
                if (error instanceof o("WAWebSyncdError").SyncdFatalError) {
                    o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: fatal error: syncd global throws"
                    ]))).catching(error).sendLogs(`syncd: fatal error: syncd global throws ${error.message}`);
                    yield I(e, `${t} moving to fatal state: ${error.name} ${error.message} ${error.stack}`);
                    const k = e.map((e)=>({
                            state: o("WAWebSyncdConst").CollectionState.ErrorFatal,
                            name: e
                        }));
                    return {
                        doneCollections: k,
                        refetchCollections: []
                    };
                }
                o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: retryable error: syncd global throws ",
                    ""
                ])), t, error.message).sendLogs(`syncd: retryable error: syncd global throws ${error.message}`);
                yield I(e, `[${t}] retryable error: ${error}`);
                const T = e.map((e)=>({
                        state: o("WAWebSyncdConst").CollectionState.ErrorRetry,
                        name: e,
                        serverBackoff: error.errorBackoff
                    }));
                return {
                    doneCollections: T,
                    refetchCollections: []
                };
            }
        });
        return R.apply(this, arguments);
    }
    function L(e, t) {
        return E.apply(this, arguments);
    }
    function E() {
        E = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebSyncdRequestBuilder").buildAppStateSyncRequest(e, t);
            const { collectionsToRefetch, collectionWithEncryptedMutations, collectionWithPendingMutationsIds, localCollectionVersions, syncIqNode } = n;
            o("WAWebSyncdCriticalBootstrapProcessingApi").logCriticalBootstrapStageIfNecessary(o("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.REQUEST_BUILT);
            const c = `[${t}] syncd: before sendIq for collections:
    ${e.map((e)=>`
\t
          ${e} v${localCollectionVersions.get(e) ?? "(undefined)"} ${(collectionWithPendingMutationsIds.get(e)?.length ?? 0) > 0 && localCollectionVersions.get(e) != null ? " with local changes" : ""}`).join(",")}

  in flight: ${Array.from(o("WAWebSyncd").getInFlightCollections()).join(",")}
  pending: ${Array.from(o("WAWebSyncd").getPendingCollections()).join(",")}
  is worker? ${o("WAWebRuntimeEnvironmentUtils").isWorker().toString()}
  `;
            o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: ",
                ""
            ])), t, c);
            yield I(e, c);
            const d = new (r("WADeprecatedWapParser"))("rawSyncResponseParser", function(e) {
                return e;
            });
            const m = yield o("WADeprecatedSendIq").deprecatedSendIq(syncIqNode, d);
            o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: completed network operation for collections:\n    ",
                ""
            ])), t, e);
            o("WAWebSyncdCriticalBootstrapProcessingApi").logCriticalBootstrapStageIfNecessary(o("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.RESPONSE_RECEIVED);
            if (m.success) {
                yield I(e, `[${t}] after sendIq success`);
                return {
                    rawResponseNode: m.result,
                    collectionWithPendingMutationsIds,
                    collectionWithEncryptedMutations,
                    localCollectionVersions,
                    collectionsToRefetch
                };
            }
            const { errorBackoff, errorCode, errorText } = m;
            throw k(errorCode, errorText, errorBackoff);
        });
        return E.apply(this, arguments);
    }
    function k(errorCode, errorText, errorBackoff) {
        e: {
            if (errorCode === 400) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.XMPP_BAD_REQUEST_GLOBAL_ERROR);
                return new (o("WAWebSyncdError")).SyncdFatalError(errorText);
                break e;
            }
            if (errorCode === 404) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.XMPP_NOT_FOUND_GLOBAL_ERROR);
                return new (o("WAWebSyncdError")).SyncdFatalError(errorText);
                break e;
            }
            if (errorCode === 405) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.XMPP_BAD_METHOD_GLOBAL_ERROR);
                return new (o("WAWebSyncdError")).SyncdFatalError(errorText);
                break e;
            }
            if (errorCode === 406) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.XMPP_NOT_ACCEPTABLE_GLOBAL_ERROR);
                return new (o("WAWebSyncdError")).SyncdFatalError(errorText);
                break e;
            }
            return new (o("WAWebSyncdError")).SyncdRetryableError(errorText, errorBackoff);
        }
    }
    function I(e, t) {
        return (h || (h = n("Promise"))).all(e.map((e)=>o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, t)));
    }
    l.serverSync = b;
}, 98);