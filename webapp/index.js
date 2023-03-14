sap.ui.require([
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/model/BindingMode",
    "sap/ui/core/mvc/XMLView"
], function (JSONModel, ResourceModel, BindingMode, XMLView) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 init event
    sap.ui.getCore().attachInit(function () {
        var oProductModel = new JSONModel();
        oProductModel.loadData("./model/Products.json");
        
        sap.ui.getCore().setModel(oProductModel, "products");
        
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
        
        oModel.setDefaultBindingMode(BindingMode.OneWay);

        // Assign the model object to the SAPUI5 Core
        sap.ui.getCore().setModel(oModel);
        
        var oResourceModel = new ResourceModel({
            bundleName: "sap.ui.demo.db.i18n.i18n",
            supportedLocales: ["", "de", "pt"],
            fallbackLocale: ""
        });
        
        // Assign the Resource model object to the SAPUI5 Core
        sap.ui.getCore().setModel(oResourceModel, "i18n");
        
		// Display the XML view called "App"
		var oView = new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		});

		// Register the view with the message manager
		sap.ui.getCore().getMessageManager().registerObject(oView, true);

		// Insert the view into the DOM
		oView.placeAt("content");
    });
});