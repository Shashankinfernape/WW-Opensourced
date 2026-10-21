__d("WAWebModalManager", [
    "Promise",
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((t)=>{
        function r() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const o = r.prototype;
        o.open = function(t, n) {
            this.trigger("open_modal", t, n);
        };
        o.exists = function(t) {
            this.trigger("exists_modal", t);
        };
        o.existsAsync = function() {
            const t = this;
            return new (e || (e = n("Promise")))(function(e) {
                t.exists(e);
            });
        };
        o.close = function(t) {
            this.trigger("close_modal", t);
        };
        o.openMedia = function(t, n) {
            this.trigger("open_media", t, n);
        };
        o.existsMedia = function(t) {
            this.trigger("exists_media", t);
        };
        o.closeMedia = function() {
            this.trigger("close_media");
        };
        o.openAlert = function(t, n) {
            this.trigger("open_alert", t, n);
        };
        o.existsAlert = function(t) {
            this.trigger("exists_alert", t);
        };
        o.closeAlert = function(t) {
            this.trigger("close_alert", t);
        };
        o.getRef = function(t) {
            this.trigger("get_ref", t);
        };
        o.openSupportModal = function(t, n) {
            const e = this;
            this.trigger("exists_modal", function(r) {
                if (r) {
                    e.trigger("open_support", t, n);
                } else {
                    e.open(t, n);
                }
            });
        };
        o.existsSupportModal = function(t) {
            this.trigger("exists_support", t);
        };
        o.closeSupportOrModal = function(t) {
            const e = this;
            this.trigger("exists_support", function(n) {
                if (n) {
                    e.trigger("close_support", t);
                } else {
                    e.close(t);
                }
            });
        };
        o.closeSupportModal = function(t) {
            const e = this;
            this.trigger("exists_modal", function(n) {
                if (n) {
                    e.trigger("close_support", t);
                } else {
                    e.close(t);
                }
            });
        };
        o.setForceRequestFocusMedia = function(t, n) {
            this.trigger(n === "modal" ? "set_force_should_request_focus_modal" : n === "media" ? "set_force_should_request_focus_media" : n === "alert" ? "set_force_should_request_focus_alert" : n === "support" ? "set_force_should_request_focus_support" : (()=>{
                throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
            })(), t);
        };
        return r;
    })(r("WAWebEventEmitter"));
    const u = new s;
    function c(e) {
        switch(e){
            case "modal":
                return "close_modal";
            case "media":
                return "close_media";
            case "alert":
                return "close_alert";
            case "support":
                return "close_support";
            default:
                return (()=>{
                    throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
                })();
        }
    }
    function d() {
        u.close();
    }
    function m() {
        u.closeSupportOrModal();
    }
    function p() {
        u.closeAlert();
    }
    l.ModalManagerImpl = s;
    l.ModalManager = u;
    l.getCloseEventForType = c;
    l.closeModalManager = d;
    l.closeSupportOrModal = m;
    l.closeAlertModal = p;
}, 98);