__d("WAWebGalaxyFlowsDrawerGetFlowDataQuery", [
    "Promise",
    "WAWebABProps",
    "WAWebGalaxyFlowQPLLoggerUtils",
    "WAWebGalaxyFlowWamLoggerUtils",
    "WAWebGalaxyFlowsDrawerGetFlowDataQuery.graphql",
    "WAWebGalaxyFlowsError",
    "WAWebGalaxyFlowsUnifiedEncryptionVerifier",
    "WAWebGalaxyFlowsUtils",
    "WAWebGraphQLServerError",
    "WAWebLidMigrationUtils",
    "WAWebRelayClient",
    "WAWebWamEnumInteractionType",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    function u({ chat, messageData, msg, signal }) {
        let i;
        o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataStart();
        o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate(o("WAWebGalaxyFlowQPLLoggerUtils").getWaeMetadataAnnotations(msg.unsafe(), messageData));
        const _ = messageData.flowMetadata?.data_api_version != null;
        if (o("WAWebABProps").getABPropConfigValue("commerce_sanctioned")) {
            const f = new (o("WAWebGalaxyFlowsError")).WaeGalaxyFlowError(o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.SANCTIONED);
            f.stack;
            return (s || (s = n("Promise"))).reject(f);
        }
        if (signal != null && signal.aborted) {
            const g = r("err")("Request aborted");
            return (s || (s = n("Promise"))).reject(g);
        }
        const contactId = chat.contact.id;
        const biz_jid = contactId.isLid() && (i = o("WAWebLidMigrationUtils").toPn(contactId)?.toString()) != null ? i : contactId.toString();
        const messageData_flowId = messageData.flowId;
        o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataPoint(o("WAWebGalaxyFlowQPLLoggerUtils").WaeMetadataQPLPoints.METADATA_NETWORK_START);
        o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeScreenNavigationPoint(o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLPoints.METADATA_NETWORK_START);
        return o("WAWebRelayClient").fetchQuery(e !== undefined ? e : e = n("WAWebGalaxyFlowsDrawerGetFlowDataQuery.graphql"), {
            request: {
                extensions: {
                    biz_jid,
                    flow_id: messageData_flowId
                }
            }
        }).then((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                if (!(signal != null && signal.aborted)) {
                    let t;
                    (t = o("WAWebGalaxyFlowQPLLoggerUtils")).qplWaeMetadataPoint(t.WaeMetadataQPLPoints.METADATA_NETWORK_END);
                    t.qplWaeScreenNavigationPoint(t.WaeScreenNavigationQPLPoints.METADATA_NETWORK_END);
                    t.qplAnnotateMetadataSize(e);
                    if (e == null || e.xwa_extensions_get_flow_data == null || e.xwa_extensions_get_flow_data.extensions_flow_data == null || e.xwa_extensions_get_flow_data.extensions_flow_data == null || e.xwa_extensions_get_flow_data.extensions_flow_data.length === 0) {
                        o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({
                            string: {
                                error_type: o("WAWebGalaxyFlowQPLLoggerUtils").WaeMetadataQPLErrorTypes.EXTENSIONS_METADATA_EMPTY_RESPONSE
                            }
                        });
                        const n = new (o("WAWebGalaxyFlowsError")).WaeGalaxyFlowError(o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.METADATA_EMPTY_RESPONSE);
                        n.stack;
                        throw n;
                    }
                    if (_) {
                        if (c(e)) {
                            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({
                                bool: {
                                    endpoint_public_key_received: false
                                }
                            });
                            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({
                                string: {
                                    error_type: o("WAWebGalaxyFlowQPLLoggerUtils").WaeMetadataQPLErrorTypes.EXTENSIONS_INVALID_PUBLIC_KEY
                                }
                            });
                            const r = new (o("WAWebGalaxyFlowsError")).WaeGalaxyFlowError(o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.METADATA_INVALID_PUBLIC_KEY);
                            r.stack;
                            throw r;
                        } else {
                            o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({
                                bool: {
                                    endpoint_public_key_received: true
                                }
                            });
                            yield o("WAWebGalaxyFlowsUnifiedEncryptionVerifier").UnifiedEncryptionVerifier.arePublicKeyWithSignatureValid({
                                callback: {
                                    onComplete: function(t) {
                                        if (!t) {
                                            const e = new (o("WAWebGalaxyFlowsError")).WaeGalaxyFlowError(o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION);
                                            e.stack;
                                            throw e;
                                        }
                                    }
                                },
                                contactId,
                                publicKeyPem: e.xwa_extensions_get_flow_data?.endpoint_public_key?.key,
                                publicKeySignature: e.xwa_extensions_get_flow_data?.endpoint_public_key?.signature
                            });
                        }
                    }
                    if (o("WAWebGalaxyFlowsUtils").getFlowDataFromFetchedData(messageData_flowId, e) == null) {
                        o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataAnnotate({
                            string: {
                                error_type: o("WAWebGalaxyFlowQPLLoggerUtils").WaeMetadataQPLErrorTypes.EXTENSIONS_INVALID_EXTENSIONS_ID
                            }
                        });
                        const l = new (o("WAWebGalaxyFlowsError")).WaeGalaxyFlowError(o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.METADATA_INVALID_EXTENSIONS_ID);
                        l.stack;
                        throw l;
                    }
                    o("WAWebGalaxyFlowQPLLoggerUtils").qplWaeMetadataEnd(2);
                }
                return e;
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })()).catch((e)=>{
            if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
                o("WAWebGalaxyFlowWamLoggerUtils").logStructuredMessageInteractionWAMEvent(messageData, chat, msg.unsafe(), o("WAWebWamEnumInteractionType").INTERACTION_TYPE.FLOW_ERROR, o("WAWebGalaxyFlowQPLLoggerUtils").WaeScreenNavigationQPLErrorTypes.EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR);
                const t = new (o("WAWebGalaxyFlowsError")).WaeGalaxyFlowError(o("WAWebGalaxyFlowsError").WaeGalaxyFlowMetadataErrors.EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR);
                t.stack;
                throw t;
            }
            throw e;
        });
    }
    function c(e) {
        return !(e.xwa_extensions_get_flow_data?.endpoint_public_key?.key != null && e.xwa_extensions_get_flow_data.endpoint_public_key.key.length > 0 && e.xwa_extensions_get_flow_data?.endpoint_public_key?.signature != null && e.xwa_extensions_get_flow_data.endpoint_public_key.signature.length > 0);
    }
    l.default = u;
}, 98);