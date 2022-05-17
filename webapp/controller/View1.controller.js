sap.ui.define([
    "ajil/app/controller/BaseController"
], function (BaseController) {

    return BaseController.extend("ajil.app.controller.View1", {

        onNext: function () {

            var oAppContainer=this.getView().getParent();
                oAppContainer.to("idmukish"); 

        },
        onBeforeRendering:function(){
            this.getView().byId("idBtn").setVisible(true)
        }, 

        onAfterRendering:function(){
            $("#idAnil--idBtn").hide(function(){$(this).fadeIn(5000)})
        },
         
    });
})
