__d("WAWebSearchTheWebEventLogger", [
    "WAWebSearchTheWebFunnelWamEvent"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ messageType, stwEntryPoint, stwFormat, stwInteraction, stwLensApiErrorType }) {
        new (o("WAWebSearchTheWebFunnelWamEvent")).SearchTheWebFunnelWamEvent({
            stwEntryPoint,
            stwFormat,
            stwInteraction,
            imageSearchFailedErrorType: stwLensApiErrorType,
            messageType
        }).commit();
    }
    l.logSTWEvent = e;
}, 98);