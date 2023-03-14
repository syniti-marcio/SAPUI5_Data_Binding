sap.ui.require([
    "sap/ui/model/json/JSONModel",
    "sap/m/Text"
], function (JSONModel, Text) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 init event
    sap.ui.getCore().attachInit(function () {
        // Create a JSON Model from an object literal
        var oModel = new JSONModel({
            greetingText: "Hi, My name is ... John"
        });

        // Assign the model object to the SAPUI5 Core
        sap.ui.getCore().setModel(oModel);
        
        // Create a text UI element that displays a hardcoded text string
        new Text({
            text: "Hi, My name is ... John"
        }).placeAt("content");
    });
});