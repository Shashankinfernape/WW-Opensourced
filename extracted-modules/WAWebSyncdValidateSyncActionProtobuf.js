__d("WAWebSyncdValidateSyncActionProtobuf", [
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError"
], function(t, n, r, o, a, i, l) {
    "use strict";
    class e {
        static validateSyncActionDataProtobuf(t, { index, padding, value, version }) {
            if (!index) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_ACTION_INDEX, {
                    collection: t
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing action index");
            }
            if (version == null) {
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(o("WAWebSyncdMetricFatalError").SyncdFatalErrorType.MISSING_ACTION_VERSION, {
                    collection: t
                });
                throw new (o("WAWebSyncdError")).SyncdFatalError("missing action version");
            }
            return {
                index,
                value,
                padding,
                version
            };
        }
    }
    l.default = e;
}, 98);