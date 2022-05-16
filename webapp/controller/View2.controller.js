sap.ui.define([
    "ajil/app/controller/BaseController"
], function (BaseController) {

    return BaseController.extend("ajil.app.controller.View2", {

        onBack: function () {
            
            var oAppContainer=this.getView().getParent();
             oAppContainer.to("idAnil"); 

        },
        // onBeforeRendering:function(){
        //     this.getView().byId("zkas").setVisible(false)
        // }, 
        
        onAfterRendering:function(){
            $("#idmukish--zkas").hide(function(){$(this).fadeIn(5000)})
        },
         
         

    });
})
