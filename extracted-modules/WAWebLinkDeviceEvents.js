__d("WAWebLinkDeviceEvents", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = ((e)=>{
        function t() {
            return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.triggerRefreshAltLinkingCode = function() {
            this.trigger("link_device_events:refresh_alt_linking_code");
        };
        n.triggerErrorAltLinking = function() {
            this.trigger("link_device_events:error_alt_linking");
        };
        n.triggerPrimaryHelloReceived = function() {
            this.trigger("link_device_events:primary_hello_received");
        };
        n.triggerPasskeyPrologueRequest = function() {
            this.trigger("link_device_events:passkey_prologue_request");
        };
        n.triggerShortcakePrologueSent = function() {
            this.trigger("link_device_events:shortcake_prologue_sent");
        };
        n.triggerShortcakeVerificationCodeReady = function(t, n) {
            this.trigger("link_device_events:shortcake_verification_code_ready", t, n);
        };
        n.triggerShortcakeError = function(t) {
            this.trigger("link_device_events:shortcake_error", t);
        };
        return t;
    })(r("WAWebEventEmitter"));
    const s = new e;
    l.WAWebLinkDeviceEvents = s;
}, 98);