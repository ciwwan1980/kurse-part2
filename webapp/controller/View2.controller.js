sap.ui.define([
    "ajil/app/controller/BaseController"
], function (BaseController) {

    return BaseController.extend("ajil.app.controller.View2", {

        onInit:function(){
           
            // this.oRouter=this.getOwnerComponent().getRouter();
    
            BaseController.prototype.onInit.apply(this); 

            this.oRouter.getRoute("detail").attachMatched(this.herculis)
        },
        herculis:function(){
            console.log("herclis in View2")
        }, 
        onBack: function () {
            // this.oRouter=this.getOwnerComponent().getRouter();
            // var oAppContainer=this.getView().getParent();
            //  oAppContainer.to("idAnil"); 
            this.oRouter.navTo("home")

        },
        // onBeforeRendering:function(){
        //     this.getView().byId("zkas").setVisible(false)
        // }, 
        
        onAfterRendering:function(){
            $("#idmukish--zkas").hide(function(){$(this).fadeIn(5000)})
        },
         
         

    });
})
