__d("WAWebBizBroadcastMarketingCampaignNotificationEmitter", [
    "WALogger",
    "WAWebBoolFunc",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    class u {
        constructor(){
            this.$1 = new Set;
            this.$2 = o("WAWebBoolFunc").returnFalse;
        }
        registerDefaultHandler(t) {
            this.$2 = t;
        }
        subscribe(t) {
            const e = this;
            this.$1.add(t);
            return function() {
                e.$1.delete(t);
            };
        }
        emit(n) {
            let backgroundSendHandling = false;
            try {
                backgroundSendHandling = this.$2(n);
            } catch (error) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:campaign-emitter] defaultHandler err"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("business-broadcast-emitter-default-handler-error");
            }
            this.$1.forEach((e)=>{
                try {
                    e(babelHelpers.extends({}, n, {
                        backgroundSendHandling
                    }));
                } catch (error) {
                    o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:campaign-emitter] Error in listener"
                    ]))).catching(r("getErrorSafe")(error)).sendLogs("business-broadcast-emitter-listener-error");
                }
            });
        }
    }
    const c = new u;
    l.marketingCampaignNotificationEmitter = c;
}, 98);