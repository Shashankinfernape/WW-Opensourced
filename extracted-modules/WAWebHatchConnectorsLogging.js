__d("WAWebHatchConnectorsLogging", [
    "WAWebHatchLogging"
], function(t, n, r, o, a, i, l) {
    function e(e, t, n) {
        o("WAWebHatchLogging").logHatchConnector(e, babelHelpers.extends({}, n, {
            connectorId: t.id,
            connectorType: s(t)
        }));
    }
    function s(e) {
        if (e.isCustom) {
            return "custom";
        }
        if (e.managementKind === "auth") {
            return "web";
        }
        if (e.managementKind === "policy_only") {
            return "device";
        }
        if (e.managementKind === "unknown") {
            return undefined;
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e.managementKind}`);
        })();
    }
    l.logHatchConnectorEvent = e;
    l.getHatchConnectorLogType = s;
}, 98);