sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("com.wise.portal.index.controller.Login", {
			onInit: function () {

            },
            
            onPress: function () {
			var oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Main");
			MessageToast.show("Iniciando Sesion");
		}
		});
	});
