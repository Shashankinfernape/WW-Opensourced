__d("WAWebVoipInitEventEmitter", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = ((e)=>{
        function t(...r) {
            let t;
            t = e.call(this, ...r) || this;
            t.$VoipInitEventEmitterImpl$p_1 = false;
            t.$VoipInitEventEmitterImpl$p_2 = false;
            t.$VoipInitEventEmitterImpl$p_3 = false;
            t.$VoipInitEventEmitterImpl$p_4 = false;
            t.$VoipInitEventEmitterImpl$p_5 = false;
            t.$VoipInitEventEmitterImpl$p_6 = null;
            t.$VoipInitEventEmitterImpl$p_7 = false;
            t.$VoipInitEventEmitterImpl$p_8 = null;
            t.$VoipInitEventEmitterImpl$p_9 = null;
            return babelHelpers.assertThisInitialized(t) || babelHelpers.assertThisInitialized(t);
        }
        babelHelpers.inheritsLoose(t, e);
        const n = t.prototype;
        n.getIsVoipInited = function() {
            return this.$VoipInitEventEmitterImpl$p_1;
        };
        n.getDidVoipInitError = function() {
            return this.$VoipInitEventEmitterImpl$p_2;
        };
        n.getIsVoipInitAttemptInFlight = function() {
            return this.$VoipInitEventEmitterImpl$p_3;
        };
        n.getIsPrewarmVoipInitAttemptInFlight = function() {
            return this.$VoipInitEventEmitterImpl$p_4;
        };
        n.markVoipInitAttemptStarted = function(t) {
            this.$VoipInitEventEmitterImpl$p_3 = true;
            this.$VoipInitEventEmitterImpl$p_4 = t;
        };
        n.markVoipInitAttemptEnded = function() {
            this.$VoipInitEventEmitterImpl$p_3 = false;
            this.$VoipInitEventEmitterImpl$p_4 = false;
        };
        n.getVoipInitTrigger = function() {
            return this.$VoipInitEventEmitterImpl$p_6;
        };
        n.markVoipInitTrigger = function(t) {
            this.$VoipInitEventEmitterImpl$p_6 = t;
        };
        n.getVoipInitFailureClass = function() {
            return this.$VoipInitEventEmitterImpl$p_9;
        };
        n.getWasVoipInitedByHiddenPrewarm = function() {
            return this.$VoipInitEventEmitterImpl$p_7;
        };
        n.getIsVoipStackUnresponsive = function() {
            return this.$VoipInitEventEmitterImpl$p_5;
        };
        n.markVoipStackUnresponsive = function() {
            this.$VoipInitEventEmitterImpl$p_5 = true;
        };
        n.clearVoipStackUnresponsive = function() {
            this.$VoipInitEventEmitterImpl$p_5 = false;
        };
        n.getVoipWebStackCreatedAtMs = function() {
            return this.$VoipInitEventEmitterImpl$p_8;
        };
        n.markVoipWebStackCreated = function(t) {
            let e;
            if ((e = this.$VoipInitEventEmitterImpl$p_8) == null) {
                this.$VoipInitEventEmitterImpl$p_8 = t;
            }
        };
        n.triggerVoipInitSuccess = function(t = false) {
            this.$VoipInitEventEmitterImpl$p_1 = true;
            this.$VoipInitEventEmitterImpl$p_2 = false;
            this.$VoipInitEventEmitterImpl$p_9 = null;
            this.$VoipInitEventEmitterImpl$p_7 = t;
            this.trigger("voipInitSuccess");
        };
        n.triggerVoipInitFailure = function(t = null) {
            this.$VoipInitEventEmitterImpl$p_1 = false;
            this.$VoipInitEventEmitterImpl$p_2 = true;
            this.$VoipInitEventEmitterImpl$p_9 = t;
            this.$VoipInitEventEmitterImpl$p_7 = false;
            this.trigger("voipInitFailure");
        };
        n.markVoipInitUntried = function() {
            this.$VoipInitEventEmitterImpl$p_1 = false;
            this.$VoipInitEventEmitterImpl$p_2 = false;
            this.$VoipInitEventEmitterImpl$p_9 = null;
            this.$VoipInitEventEmitterImpl$p_7 = false;
        };
        return t;
    })(r("WAWebEventEmitter"));
    const s = new e;
    l.VoipInitEventEmitter = s;
}, 98);