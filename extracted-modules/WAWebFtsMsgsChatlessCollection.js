__d("WAWebFtsMsgsChatlessCollection", [
    "Promise",
    "WALogger",
    "WAWebFtsMsgsCollectionBase",
    "WAWebMsgCollection",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = ((t)=>{
        function a() {
            let e;
            e = t.call(this, o("WAWebMsgCollection").MsgCollection) || this;
            e.previousResultPage = 0;
            e.pageToOldestMsgId = new Map;
            return e;
        }
        babelHelpers.inheritsLoose(a, t);
        const a_prototype = a.prototype;
        a_prototype.getNextMsgs = function({ count, direction, msgKeyAnchor }) {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "getNextMsgs must be implemented"
            ])));
            return (s || (s = n("Promise"))).reject(r("err")("getNextMsgs must be implemented"));
        };
        a_prototype.searchImpl = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chat, count, direction, filter, page = 1, searchTerm }) {
                if (this.previousResultPage >= page) {
                    this.pageToOldestMsgId.clear();
                }
                let msgKeyAnchor = this.pageToOldestMsgId.get(page - 1);
                for(var eof = false, messages = []; !eof && messages.length < count;){
                    const d = yield this.getNextMsgs({
                        count,
                        direction,
                        msgKeyAnchor
                    });
                    eof = d.length < count;
                    if (d.length === 0) {
                        break;
                    }
                    msgKeyAnchor = d[d.length - 1].id;
                    messages.push(...this.filterMsgs(d, searchTerm));
                }
                this.pageToOldestMsgId.set(page, msgKeyAnchor);
                this.previousResultPage = page;
                return {
                    canceled: false,
                    eof,
                    messages
                };
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        a_prototype.filterMsgs = function(t, n) {
            return t;
        };
        return a;
    })(r("WAWebFtsMsgsCollectionBase"));
    l.default = u;
}, 98);