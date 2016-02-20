"use strict";

var JsDbgLoadingIndicator = undefined;
Loader.OnLoad(function () {
    var loadingIndicator = null;

    function initializeProgressIndicator() {
        loadingIndicator = document.createElement("div")
        loadingIndicator.setAttribute("id", "jsdbg-loading-indicator");

        var loadingPanel = document.createElement("div");
        loadingPanel.classList.add("jsdbg-loading-panel");

        loadingIndicator.appendChild(loadingPanel);

        var progress = document.createElement("progress");
        progress.indeterminate = true;
        loadingPanel.appendChild(progress);        
    }

    JsDbgLoadingIndicator = {
        Show: function () {
            loadingIndicator.classList.remove("waiting");
            loadingIndicator.style.display = "block";
        },
        Hide: function () {
            loadingIndicator.style.display = "none";
        },
        SetIsWaitingForDebugger: function (value) {
            if (value) {
                loadingIndicator.classList.add("waiting");
            } else {
                loadingIndicator.classList.remove("waiting");
            }
        }
    }

    initializeProgressIndicator();
    Loader.OnPageReady(function() {
        document.documentElement.appendChild(loadingIndicator);
    });
})