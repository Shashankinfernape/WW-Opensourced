__d("RecoverableViolationWithComponentStack.react", [
    "FBLogger",
    "cr:7063",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function U1({ categoryKey, errorMessage, messageParams, project }) {
        const i = r("FBLogger")(project).blameToPreviousFrame();
        if (categoryKey != null) {
            i.addToCategoryKey(categoryKey);
        }
        throw i.mustfixThrow(...[
            errorMessage
        ].concat(messageParams ?? []));
    }
    function c(e) {
        const t = o("react-compiler-runtime").c(13);
        const { categoryKey, errorMessage, fallback, messageParams, projectName } = e;
        let context;
        if (t[0] !== projectName) {
            context = {
                project: projectName,
                type: "error"
            };
            t[0] = projectName;
            t[1] = context;
        } else {
            context = t[1];
        }
        let fallback_1;
        if (t[2] !== fallback) {
            fallback_1 = function() {
                return fallback ?? null;
            };
            t[2] = fallback;
            t[3] = fallback_1;
        } else {
            fallback_1 = t[3];
        }
        let p;
        if (t[4] !== categoryKey || t[5] !== errorMessage || t[6] !== messageParams || t[7] !== projectName) {
            p = <U1 categoryKey={categoryKey} errorMessage={errorMessage} messageParams={messageParams} project={projectName}/>;
            t[4] = categoryKey;
            t[5] = errorMessage;
            t[6] = messageParams;
            t[7] = projectName;
            t[8] = p;
        } else {
            p = t[8];
        }
        let _;
        if (t[9] !== context || t[10] !== fallback_1 || t[11] !== p) {
            const Component = n("cr:7063");
            _ = <Component context={context} fallback={fallback_1}>{p}</Component>;
            t[9] = context;
            t[10] = fallback_1;
            t[11] = p;
            t[12] = _;
        } else {
            _ = t[12];
        }
        return _;
    }
    l.default = c;
}, 98);