__d("WAWebMediaPreProcessQpl", [
    "Random",
    "WAWebBrowserApi",
    "WAWebQplFlow",
    "gkx",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const event = r("qpl")._(891421895, "3466");
    const s = 300 * 1000;
    const cpu_core_count = o("WAWebBrowserApi").getNumCpu();
    const mem_class = o("WAWebBrowserApi").getMemClass();
    const cpu_performance = o("WAWebBrowserApi").readCpuPerformanceClass();
    function m(preprocess_type, n) {
        const a = Date.now() + (Math.round(o("Random").random() * 10000) + 10000);
        const i = o("WAWebQplFlow").startQplFlow(event, {
            annotations: {
                bool: {
                    wa_web_media_wasm_worker_split: r("gkx")("24042")
                },
                string: {
                    preprocess_type
                }
            },
            instanceKey: a,
            timeoutInMs: s
        });
        if (n) {
            i.addAnnotations({
                int: {
                    input_file_size: n.size
                },
                string: {
                    mimetype: n.type
                }
            });
        }
        if (cpu_core_count != null) {
            i.addAnnotations({
                int: {
                    cpu_core_count
                }
            });
        }
        if (mem_class != null) {
            i.addAnnotations({
                int: {
                    mem_class
                }
            });
        }
        if (cpu_performance != null) {
            i.addAnnotations({
                string: {
                    cpu_performance
                }
            });
        }
        return babelHelpers.extends({}, i, {
            flowDetails: {
                event,
                instanceKey: a
            }
        });
    }
    l.startMediaPreProcessQpl = m;
}, 98);