sap.ui.require([
    "sap/ui/model/BindingMode",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView"
], function (BindingMode, JSONModel, XMLView) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 init event
    sap.ui.getCore().attachInit(function () {
        // Create a JSON Model from an object literal
        var oModel = new JSONModel({
            firstName: "Harry",
            lastName: "Hawk",
            enabled: true,
            panelHeaderText: "Data Binding Basics"
        });

        oModel.setDefaultBindingMode(BindingMode.OneWay);

        // Assign the model object to the SAPUI5 Core
        sap.ui.getCore().setModel(oModel);
        
        // Display the XML View called "App"
        new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        }).placeAt("content");
    });
});