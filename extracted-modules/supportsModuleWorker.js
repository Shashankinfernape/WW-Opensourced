__d("supportsModuleWorker", [
    "UserAgent"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e = null;
    function s(t) {
        if (e != null || e != null) {
            return e;
        }
        if (r("UserAgent").isEngine("Blink")) {
            e = t ? r("UserAgent").isEngine_DEPRECATED_DANGEROUS("Blink > 83") : r("UserAgent").isEngine_DEPRECATED_DANGEROUS("Blink > 80.1");
            return e;
        }
        if (r("UserAgent").isBrowser("Safari")) {
            e = r("UserAgent").isBrowser("Safari > 14.9");
            return e;
        }
        if (r("UserAgent").isBrowser("Firefox")) {
            e = r("UserAgent").isBrowser("Firefox > 113");
            return e;
        }
        if (r("UserAgent").isEngine("WebKit")) {
            e = r("UserAgent").isEngine_DEPRECATED_DANGEROUS("WebKit > 606");
            return e;
        }
        if (r("UserAgent").isBrowser("IE")) {
            e = false;
            return e;
        }
        const n = {
            get type () {
                e = true;
            }
        };
        try {
            if (t) var o = new SharedWorker("blob://", n);
            else {
                const a = new Worker("blob://", n);
            }
        } finally{
            e = e ?? false;
            return e;
        }
    }
    l.default = s;
}, 98);