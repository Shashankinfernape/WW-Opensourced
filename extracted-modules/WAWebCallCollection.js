__d("WAWebCallCollection", [
    "WALogger",
    "WAWebCallCollectionUtils",
    "WAWebEventEmitter",
    "WAWebNoop",
    "WAWebPttAudioChannels",
    "WAWebVoipEventConstants"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function n(...r) {
            let e;
            e = t.call(this, ...r) || this;
            e.$CallCollectionImpl$p_1 = new Map;
            e.pendingOffers = {};
            e.pendingVoipCapChecks = {};
            e.isInConnectedCall = false;
            e.lastActiveCall = null;
            e.pendingCallLink = null;
            e.pendingOutgoingCall = null;
            return babelHelpers.assertThisInitialized(e) || babelHelpers.assertThisInitialized(e);
        }
        babelHelpers.inheritsLoose(n, t);
        const a = n.prototype;
        a.get = function(t) {
            return this.$CallCollectionImpl$p_1.get(t);
        };
        a.add = function(t, n) {
            if (n != null && n.merge) {
                return this.merge(t);
            }
            const e = o("WAWebCallCollectionUtils").createCallModel(t);
            this.$CallCollectionImpl$p_1.set(t.id, e);
            return e;
        };
        a.merge = function(t) {
            const e = this.get(t.id);
            if (e == null) {
                return this.add(t);
            }
            return o("WAWebCallCollectionUtils").assignCallPropsToCall(e, t);
        };
        a.remove = function(t) {
            this.$CallCollectionImpl$p_1.delete(t.id);
        };
        a.getModelsArray = function() {
            return Array.from(this.$CallCollectionImpl$p_1.values());
        };
        a.reset = function() {
            this.$CallCollectionImpl$p_1.clear();
        };
        a.delete = function() {
            this.$CallCollectionImpl$p_1.clear();
            this.stopListening();
        };
        a.setPendingCallLink = function(t) {
            this.pendingCallLink = t;
            this.trigger("change:pendingCallLink", t);
        };
        a.setPendingOutgoingCall = function(t) {
            this.pendingOutgoingCall = t;
            this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.PENDING_OUTGOING_CALL), t);
        };
        a.processIncomingCall = function(n, r, a) {
            if (this.get(n) != null) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip:processIncomingCall: call already exists"
                ])));
                return this.get(n);
            }
            const t = o("WAWebCallCollectionUtils").buildCallPropsFromOffer(n, r, a);
            return this.add(t);
        };
        a.setActiveCall = function(t) {
            this.activeCall = t;
            this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL), t);
            this.$CallCollectionImpl$p_2?.();
            if (t != null) {
                let n;
                this.$CallCollectionImpl$p_2 = o("WAWebPttAudioChannels").MainAudioChannel.claim(this, r("WAWebNoop"));
                if ((n = this.lastActiveCall) != null && n.shouldShowPostCallSurvey) {
                    this.lastActiveCall.shouldShowPostCallSurvey = false;
                }
                this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.SHOULD_SHOW_POST_CALL_SURVEY));
            }
        };
        a.setIsInConnectedCall = function(t) {
            if (this.isInConnectedCall !== t) {
                this.isInConnectedCall = t;
                this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.IS_IN_CONNECTED_CALL), t);
            }
        };
        a.setCallFailedReason = function(t) {
            if (this.activeCall != null) {
                this.activeCall.callFailedReason = t;
                this.lastActiveCall = this.activeCall;
            }
        };
        a.setShouldShowPostCallSurveyOnLastActiveCall = function(t) {
            if (this.lastActiveCall != null && this.lastActiveCall?.shouldShowPostCallSurvey !== t) {
                this.lastActiveCall.shouldShowPostCallSurvey = t;
                this.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.SHOULD_SHOW_POST_CALL_SURVEY));
            }
        };
        return n;
    })(r("WAWebEventEmitter"));
    const u = new s;
    l.default = u;
}, 98);