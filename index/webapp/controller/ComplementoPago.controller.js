sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("com.wise.portal.index.controller.ComplementoPago", {
			onInit: function () {
                var oModel = new JSONModel(sap.ui.require.toUrl("com/wise/portal/index/model/filtersItem.json"));
                this.getView().setModel(oModel);
                
            },
		});
	});
