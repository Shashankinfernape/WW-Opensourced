__d("WAWebMediaProvenanceQpl", [
    "WAWebQplFlow",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = r("qpl")._(646388630, "1555");
    const timeoutInMs = 300 * 1000;
    let u = 1;
    function c(t) {
        const instanceKey = u++;
        const r = o("WAWebQplFlow").startQplFlow(e, {
            annotations: {
                int: {
                    input_file_size: t.size
                },
                string: {
                    mimetype: t.type
                }
            },
            instanceKey,
            timeoutInMs
        });
        return babelHelpers.extends({}, r, {
            flowDetails: {
                event: e,
                instanceKey
            }
        });
    }
    l.startProvenanceDetectionQpl = c;
}, 98);