sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
 ], function (Controller,MessageToast,JSONModel,ResourceModel) {
	"use strict";
	return Controller.extend("Quickstart.controller.App", {
		onInit : function(){
			let oData = {
				recipient:{ name: "World" }
			};
			let oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			 // set i18n model on view
			 var i18nModel = new ResourceModel({
				bundleName: "Quickstart.i18n.i18n"
			 });
			 this.getView().setModel(i18nModel, "i18n");

		},
	   onShowHello : function () {
        let oBundle = this.getView().getModel("i18n").getResourceBundle();
		var sRecipient = this.getView().getModel().getProperty("/recipient/name");
		var sMsg = oBundle.getText("helloMsg", [sRecipient]);

		MessageToast.show("Hello World");
	   }
	});
 });