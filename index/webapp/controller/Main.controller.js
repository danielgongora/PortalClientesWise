var oCtrl_Main_PC;

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/m/Popover",
    "sap/m/MessageBox"
],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.library} library 
     * @param {typeof sap.m.Popover} Popover 
     * @param {typeof sap.m.MessageBox} MessageBox 
     */
    function (Controller, library, Popover, MessageBox) {
        "use strict";

        var ButtonType = library.ButtonType,
            PlacementType = library.PlacementType;

        return Controller.extend("com.wise.portal.index.controller.Main", {
            onInit: function () {

                var toolPage = new sap.tnt.ToolPage({
                    sideExpanded: false,
                    header: new sap.tnt.ToolHeader({
                        content: [
                            new sap.m.Button({
                                visible: true,
                                icon: "sap-icon://menu2",
                                press: function () {
                                    toolPage.getSideExpanded();
                                    toolPage.setSideExpanded(!toolPage.getSideExpanded());
                                },
                                type: "Transparent"
                            }).addStyleClass("ZsapBtnMenu"),
                            new sap.m.Button({
                                icon: "sap-icon://home",
                                type: "Transparent"
                            }).addStyleClass("ZsapBtnTP"),
                            new sap.m.Title({
                                text: "{i18n>ToolPage.Header.ToolHeader.Title}",
                                textAlign: "Center"
                            }),
                            new sap.m.ToolbarSpacer(),
                            new sap.m.Button({
                                icon: "sap-icon://account",
                                press: function (event) {
                                    var oPopover = new Popover({
                                        showHeader: false,
                                        placement: PlacementType.Bottom,
                                        content: [
                                            new sap.m.Button({
                                                text: "Cambiar Contraseña"
                                            }),
                                            new sap.m.Button({
                                                text: "Ayuda",
                                                type: ButtonType.Transparent
                                            }),
                                            new sap.m.Button({
                                                text: "Salir",
                                                type: ButtonType.Transparent
                                            })
                                        ]
                                    }).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

                                    oPopover.openBy(event.getSource());
                                },
                                type: "Transparent"
                            }).addStyleClass("ZsapMBtnTP")
                        ]
                    }),
                    sideContent: new sap.tnt.SideNavigation({
                        expanded: true,
                        itemSelect: function (oEvent) {

                            var sKey = oEvent.getParameter("item").getKey();
                            //if (sKey === "0") return;
                            this.getOwnerComponent().getRouter().navTo(sKey);
                            toolPage.setSideExpanded(false);

                        }.bind(this),
                        item: new sap.tnt.NavigationList({
                            expanded: true,
                            selectedKey: "ListaFacturas",
                            items: [
                                new sap.tnt.NavigationListItem({
                                    text: "{i18n>ToolPage.NavigationList.1}",
                                    icon: "sap-icon://course-book",
                                    key: "Consultas",
                                    visible: true,
                                    items: [
                                        new sap.tnt.NavigationListItem({
                                            text: "{i18n>ToolPage.NavigationList.NavigationListItem.1}",
                                            key: "ListaFacturas"
                                        }),
                                        new sap.tnt.NavigationListItem({
                                            text: "{i18n>ToolPage.NavigationList.NavigationListItem.2}",
                                            key: "ComplementoPago"
                                        }),
                                        new sap.tnt.NavigationListItem({
                                            text: "{i18n>ToolPage.NavigationList.NavigationListItem.3}",
                                            key: "EstadoCuenta"
                                        })
                                    ]
                                })
                            ]
                        })
                    }) 
                });

                var sToolPage = this.byId("pageId");
                sToolPage.addContent(toolPage);
            }
        });
    });
