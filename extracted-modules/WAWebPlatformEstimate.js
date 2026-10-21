__d("WAWebPlatformEstimate", [
    "WAWebFPUtils",
    "WAWebIdentityFunction",
    "WAWebWamEnumBrowserEngineName",
    "WAWebWamEnumPlatformName",
    "countWhere"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        if (o("WAWebFPUtils").DETECTED_BROWSER_ENGINE !== o("WAWebWamEnumBrowserEngineName").BROWSER_ENGINE_NAME.BLINK) {
            return o("WAWebWamEnumPlatformName").PLATFORM_NAME.UNKNOWN;
        }
        const u = "getVideoPlaybackQuality" in HTMLVideoElement.prototype;
        const c = CSS?.supports("color-scheme: initial");
        const d = CSS?.supports("appearance: initial");
        const m = "DisplayNames" in Intl;
        const p = CSS?.supports("aspect-ratio: initial");
        const _ = CSS?.supports("border-end-end-radius: initial");
        const f = "randomUUID" in crypto;
        const g = navigator;
        const h = "downlinkMax" in (g.connection?.prototype || {});
        const y = "setAppBadge" in Navigator.prototype;
        const C = function(t) {
            return t in window;
        };
        const b = function(t, n) {
            if (t) {
                return n;
            }
            return false;
        };
        const v = {
            [o("WAWebFPUtils").Platforms.ANDROID]: [
                b(p, C("BarcodeDetector")),
                b(d, C("ContentIndex")),
                b(u, C("ContactsManager")),
                h,
                b(f, !C("EyeDropper")),
                b(m, !C("FileSystemWritableFileStream")),
                b(_, !(C("HID") && C("HIDDevice"))),
                b(_, !(C("Serial") && C("SerialPort"))),
                !C("SharedWorker"),
                C("ontouchstart") && C("TouchEvent"),
                b(c, !y)
            ],
            [o("WAWebFPUtils").Platforms.CHROME_OS]: [
                b(p, C("BarcodeDetector")),
                b(d, !C("ContentIndex")),
                b(u, !C("ContactsManager")),
                h,
                b(f, C("EyeDropper")),
                b(m, C("FileSystemWritableFileStream")),
                b(_, C("HID") && C("HIDDevice")),
                b(_, C("Serial") && C("SerialPort")),
                C("SharedWorker"),
                b(c, !y)
            ],
            [o("WAWebFPUtils").Platforms.WINDOWS]: [
                b(p, !C("BarcodeDetector")),
                b(d, !C("ContentIndex")),
                b(u, !C("ContactsManager")),
                !h,
                b(f, C("EyeDropper")),
                b(m, C("FileSystemWritableFileStream")),
                b(_, C("HID") && C("HIDDevice")),
                b(_, C("Serial") && C("SerialPort")),
                C("SharedWorker"),
                b(c, y)
            ],
            [o("WAWebFPUtils").Platforms.MAC]: [
                b(p, C("BarcodeDetector")),
                b(d, !C("ContentIndex")),
                b(u, !C("ContactsManager")),
                !h,
                b(f, C("EyeDropper")),
                b(m, C("FileSystemWritableFileStream")),
                b(_, C("HID") && C("HIDDevice")),
                b(_, C("Serial") && C("SerialPort")),
                C("SharedWorker"),
                !(C("ontouchstart") && C("TouchEvent")),
                b(c, y)
            ],
            [o("WAWebFPUtils").Platforms.LINUX]: [
                b(p, !C("BarcodeDetector")),
                b(d, !C("ContentIndex")),
                b(u, !C("ContactsManager")),
                !h,
                b(f, C("EyeDropper")),
                b(m, C("FileSystemWritableFileStream")),
                b(_, C("HID") && C("HIDDevice")),
                b(_, C("Serial") && C("SerialPort")),
                C("SharedWorker"),
                !(C("ontouchstart") && C("TouchEvent")),
                b(c, !y)
            ],
            [o("WAWebFPUtils").Platforms.UNKNOWN]: [
                false
            ]
        };
        const S = Object.keys(v).reduce((e, t)=>{
            const a = v[o("WAWebFPUtils").Platforms.cast(t) ?? o("WAWebFPUtils").Platforms.UNKNOWN];
            const i = +(r("countWhere")(a, o("WAWebIdentityFunction").identityFunction) / a.length).toFixed(2);
            e[t] = i;
            return e;
        }, {});
        const R = Object.keys(S).reduce((e, t)=>{
            if (S[e] > S[t]) {
                return e;
            }
            return t;
        });
        return o("WAWebFPUtils").castPlatformNameToWamEnum(o("WAWebFPUtils").Platforms.cast(R) ?? o("WAWebFPUtils").Platforms.UNKNOWN);
    }
    l.default = e;
}, 98);