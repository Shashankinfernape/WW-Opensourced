__d("WAWebBizAiCoachAgentEditAction", [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBizAILargeScreensLogEvents",
    "WAWebLazyLoadedRetriable",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebBizAiCoachMessageEditMutation").__setRef("WAWebBizAiCoachAgentEditAction").load();
    }, "BizAiCoachMessageEdit");
    function d(consumerWid, messageId, editedText, isWithinEditingWindow) {
        f(isWithinEditingWindow);
        let o;
        try {
            o = c();
        } catch (error) {
            p(error, isWithinEditingWindow);
            return;
        }
        o.then((module)=>m({
                consumerWid,
                editedText,
                isWithinEditingWindow,
                messageId,
                module
            }), (e)=>{
            p(e, isWithinEditingWindow);
        }).catch(h);
    }
    function m({ consumerWid, editedText, isWithinEditingWindow, messageId, module }) {
        let l;
        try {
            l = module.coachAgentMessageEdit(consumerWid, messageId, editedText);
        } catch (error) {
            _(error, isWithinEditingWindow);
            return (u || (u = n("Promise"))).resolve();
        }
        return l.then((e)=>{
            g(e, isWithinEditingWindow);
        }, (e)=>{
            _(e, isWithinEditingWindow);
        });
    }
    function p(t, isWithinEditingWindow) {
        g("module_load_failed", isWithinEditingWindow);
        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
            "BizAI message edit coaching module failed to load"
        ]))).catching(r("getErrorSafe")(t)).sendLogs("biz-ai-message-edit-coaching-load-fail");
    }
    function _(e, isWithinEditingWindow) {
        g("request_failed", isWithinEditingWindow);
        h(e);
    }
    function f(isWithinEditingWindow) {
        try {
            o("WAWebBizAILargeScreensLogEvents").logApiBizAiMessageEditCoachingStart(isWithinEditingWindow);
        } catch (error) {
            h(error);
        }
    }
    function g(e, isWithinEditingWindow) {
        try {
            o("WAWebBizAILargeScreensLogEvents").logApiBizAiMessageEditCoachingResult(e, isWithinEditingWindow);
        } catch (error) {
            h(error);
        }
    }
    function h(e) {
        o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
            "BizAI message edit coaching failed unexpectedly"
        ]))).catching(r("getErrorSafe")(e)).sendLogs("biz-ai-message-edit-coaching-unexpected");
    }
    l.startAgentEditCoaching = d;
}, 98);