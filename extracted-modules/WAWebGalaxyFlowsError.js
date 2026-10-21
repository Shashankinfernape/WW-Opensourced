__d("WAWebGalaxyFlowsError", [
    "$InternalEnum"
], function(t, n, r, o, a, i) {
    const e = n("$InternalEnum").Mirrored([
        "SANCTIONED",
        "METADATA_EMPTY_RESPONSE",
        "METADATA_INVALID_EXTENSIONS_ID",
        "METADATA_INVALID_PUBLIC_KEY",
        "PUBLIC_KEY_SIGNATURE_VERIFICATION_EXCEPTION",
        "MISSING_IDENTITY_KEY",
        "EXTENSIONS_METADATA_GRAPHQL_RESPONSE_ERROR"
    ]);
    const l = ((e)=>{
        function t(t) {
            let n;
            n = e.call(this) || this;
            n.name = t;
            return n;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(babelHelpers.wrapNativeSuper(Error));
    i.WaeGalaxyFlowMetadataErrors = e;
    i.WaeGalaxyFlowError = l;
}, 66);