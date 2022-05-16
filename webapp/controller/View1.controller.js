sap.ui.define([
    "ajil/app/controller/BaseController"
], function (BaseController) {

    return BaseController.extend("ajil.app.controller.View1", {

        onNext: function () {

            var oAppContainer=this.getView().getParent();
                oAppContainer.to("idmukish"); 

        },
        onBeforeRendering:function(){
            // this.getView().byId("zkas").setVisible(false)
        }, 
        // onAfterRendering:function(){
        //     $("#idAnil--idBtn").fadeIn(5000)
        // },
         
    });
})
