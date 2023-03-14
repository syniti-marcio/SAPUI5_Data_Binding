sap.ui.require([
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/model/BindingMode",
    "sap/ui/core/mvc/XMLView"
], function (JSONModel, ResourceModel, BindingMode, XMLView) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 init event
    sap.ui.getCore().attachInit(function () {
        // Create a JSON Model from an object literal
        var oModel = new JSONModel({
            firstName: "Harry",
            lastName: "Hawk",
            enabled: true,
            address: {
                street: "1 Any Lane",
                city: "Walldorf",
                zip: "69190",
                country: "Germany"
            },
            salesAmount: 12345.6789,
            currencyCode: "EUR"
        });

        var oResourceModel = new ResourceModel({
            bundleName: "sap.ui.demo.db.i18n.i18n",
            supportedLocales: ["", "de", "pt"],
            fallbackLocale: ""
        });

        oModel.setDefaultBindingMode(BindingMode.OneWay);

        // Assign the model object to the SAPUI5 Core
        sap.ui.getCore().setModel(oModel);

        // Assign the Resource model object to the SAPUI5 Core
        sap.ui.getCore().setModel(oResourceModel, "i18n");
        
        // Display the XML View called "App"
        new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        }).placeAt("content");
    });
});