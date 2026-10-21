__d("WAWebGalaxyFlowsData", [
    "Promise",
    "WAWebDBUpdateMessageTable",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebGalaxyFlowsDrawerGetFlowDataQuery",
    "WAWebGalaxyFlowsDrawerUtils",
    "WAWebGalaxyFlowsError",
    "WAWebGalaxyFlowsMetadataUtils",
    "WAWebGalaxyFlowsSessionsCache",
    "WAWebGalaxyFlowsUtils",
    "WAWebWamEnumFlowEntryPoint",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e) {
        return u.apply(this, arguments);
    }
    function u() {
        u = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, messageData, msg, signal }) {
            try {
                if (messageData.flowJSON != null || signal != null && signal.aborted) {
                    return messageData;
                }
                const p = msg.unsafe();
                const _ = p.galaxyFlowWAMMessageId == null || p.galaxyFlowQPLMessageId == null;
                const f = _ ? yield o("WAWebGalaxyFlowsUtils").computeMessageIds(p.id) : null;
                if (f) {
                    c(p, f.flowWAMMessageId, f.flowQPLMessageId);
                }
                const g = p.galaxyFlowQPLMessageId ?? f?.flowQPLMessageId;
                if (g != null) {
                    const h = o("WAWebGalaxyFlowsSessionsCache").createFlowSession(p.id.id.toString(), g);
                    messageData.flowQPLSessionId = `qpl_${h}`;
                    messageData.flowWAMSessionId = `wam_${h}`;
                }
                o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate(o("WAWebGalaxyFlowQPLLoggerUtils").getWaeScreenNavigationAnnotations(p, messageData));
                o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints.FETCHING_FLOW_DATA_START);
                const y = o("WAWebGalaxyFlowsMetadataUtils").skipIfStaleMedatadataOrNullDataApiVersion(messageData) || !!messageData.isResponseFlow;
                const C = yield (e || (e = n("Promise"))).all([
                    o("WAWebGalaxyFlowsUtils").fetchFlowJSON(messageData.flowId, signal),
                    y ? (e || (e = n("Promise"))).resolve(null) : r("WAWebGalaxyFlowsDrawerGetFlowDataQuery")({
                        chat,
                        messageData,
                        msg,
                        signal
                    })
                ]);
                const flowJSON = C[0];
                const flowFetchedMetadata = C[1];
                o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints.FETCHING_FLOW_DATA_END);
                return babelHelpers.extends({}, messageData, {
                    flowJSON,
                    flowWAMMessageId: f?.flowWAMMessageId ?? p.galaxyFlowWAMMessageId,
                    flowQPLMessageId: f?.flowQPLMessageId ?? p.galaxyFlowQPLMessageId,
                    hsmTag: p.hsmTag,
                    categories: o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(messageData.flowId, messageData.flowFetchedMetadata)?.categories,
                    flowEntryPoint: o("WAWebWamEnumFlowEntryPoint").FLOW_ENTRY_POINT.MESSAGE_CTA,
                    mode: String(o("WAWebGalaxyFlowsDrawerUtils").getFlowStatus(messageData, flowFetchedMetadata)),
                    isTemplate: p.templateId != null ? 1 : 0,
                    flowFetchedMetadata
                });
            } catch (error) {
                if (signal != null && signal.aborted) {
                    throw error;
                }
                if (!navigator.onLine) {
                    o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate({
                        string: {
                            error_type: o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLErrorTypes.NO_NETWORK_ERROR
                        }
                    });
                } else {
                    const S = o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.cast(error instanceof o("WAWebGalaxyFlowsError").WaeGalaxyFlowError ? error.name : "");
                    e: {
                        if (S === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.SANCTIONED) {
                            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationDrop();
                            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataDrop();
                            break e;
                        }
                        if (S === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.METADATA_EMPTY_RESPONSE) {
                            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                            break e;
                        }
                        if (S === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.METADATA_INVALID_EXTENSIONS_ID) {
                            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                            break e;
                        }
                        if (S === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.METADATA_INVALID_PUBLIC_KEY) {
                            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                            break e;
                        }
                        if (S === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION) {
                            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({
                                string: {
                                    error_type: o("WAWebGalaxyFlowQPLLoggerUtils").WaeMetadataQPLErrorTypes.EXTENSIONS_PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION
                                }
                            });
                            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                            break e;
                        }
                        if (S === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.MISSING_IDENTITY_KEY) {
                            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({
                                string: {
                                    error_type: o("WAWebGalaxyFlowQPLLoggerUtils").WaeMetadataQPLErrorTypes.EXTENSIONS_PUBLIC_KEY_MISSING_IDENTITY_KEY_ERROR
                                }
                            });
                            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                            break e;
                        }
                        if (S === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR) {
                            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({
                                string: {
                                    error_type: o("WAWebGalaxyFlowQPLLoggerUtils").WaeMetadataQPLErrorTypes.EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR
                                }
                            });
                            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(3);
                            break e;
                        }
                        {
                            let R;
                            (R = o("WAWebGalaxyFlowQPLLoggerUtils")).qplWaeMetadataAnnotate({
                                string: {
                                    error_type: R.WaeMetadataQPLErrorTypes.EXTENSIONS_METADATA_RESPONSE_ERROR
                                }
                            });
                            R.qplWaeMetadataAnnotate({
                                bool: {
                                    endpoint_public_key_received: false
                                }
                            });
                            R.qplWaeMetadataEnd(3);
                            break e;
                        }
                    }
                    o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationAnnotate({
                        string: {
                            error_type: S === o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR ? o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLErrorTypes.EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR : o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLErrorTypes.EXTENSION_METADATA_RESPONSE_ERROR
                        }
                    });
                }
                o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationEnd(3);
                throw error;
            }
        });
        return u.apply(this, arguments);
    }
    function c(e, galaxyFlowWAMMessageId, galaxyFlowQPLMessageId) {
        e.galaxyFlowWAMMessageId = galaxyFlowWAMMessageId;
        e.galaxyFlowQPLMessageId = galaxyFlowQPLMessageId;
        return o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
            galaxyFlowWAMMessageId,
            galaxyFlowQPLMessageId
        });
    }
    l.default = s;
}, 98);