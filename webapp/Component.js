sap.ui.define([
        "sap/ui/core/UIComponent"
    ],
    function (UIComponent) {
        "use strict";

        return UIComponent.extend("ajil.app.Component", {
            metadata: {},
             
           
            init: function () {
             
                UIComponent.prototype.init.apply(this);
            }, 
            
            createContent:function(){
            var oView= new sap.ui.view({
                    viewName:"ajil.app.view.App",
                     type:"XML"
                 });

                 var oContainer=oView.byId("idSpidy"); 

                 var oView1= new sap.ui.view({
                    viewName:"ajil.app.view.View1",
                    id:"idAnil",
                     type:"XML"
                 });
                 var oView2= new sap.ui.view({
                    viewName:"ajil.app.view.View2",
                    id:"idmukish",
                     type:"XML"
                 });

                 oContainer.addPage(oView1); 
                 oContainer.addPage(oView2);
                return oView; 
            }
        });
    }
);