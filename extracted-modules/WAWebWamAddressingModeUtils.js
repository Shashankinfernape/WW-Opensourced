__d("WAWebWamAddressingModeUtils", [
    "WAWebHandleMsgCommon",
    "WAWebWamEnumAddressingMode"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        switch(e){
            case true:
                return o("WAWebWamEnumAddressingMode").ADDRESSING_MODE.LID;
            case false:
                return o("WAWebWamEnumAddressingMode").ADDRESSING_MODE.PN;
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function s(e) {
        if (e === o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid) {
            return o("WAWebWamEnumAddressingMode").ADDRESSING_MODE.LID;
        }
        return o("WAWebWamEnumAddressingMode").ADDRESSING_MODE.PN;
    }
    function u(t) {
        if (t.isLidAddressingMode != null) {
            return e(t.isLidAddressingMode);
        }
    }
    l.getWamAddressingModeFromString = s;
    l.getAddressingModeMetricsFromGroupMetadata = u;
}, 98);