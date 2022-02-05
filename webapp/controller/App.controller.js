sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
 ], function (Controller,MessageToast,JSONModel) {
	"use strict";
	return Controller.extend("Quickstart.controller.App", {
		onInit : function(){
			let oData = {
				recipient:{ name: "World" }
			};
			let oModel = new JSONModel(oData);
			this.getView().setModel(oModel);

		},
	   onShowHello : function () {
		MessageToast.show("Hello World");
	   }
	});
 });