sap.ui.define([
    "ajil/app/controller/BaseController",
    "sap/m/MessageToast"
], function (BaseController,MessageToast) {

    return BaseController.extend("ajil.app.controller.View2", {

        onInit:function(){
           
            // this.oRouter=this.getOwnerComponent().getRouter();
    
            BaseController.prototype.onInit.apply(this); 

            this.oRouter.getRoute("detail").attachMatched(this.herculis, this)
        },
        
        herculis:function(oEvent){
            var myVar=oEvent.getParameter("arguments").kaven;
            console.log(myVar, "myVar---------")
            console.log("herclis in View2 , kaven value--" + myVar); 
            var fruitRelativePath="local>/fruits/" + myVar; 
            this.getView().bindElement(fruitRelativePath)
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
       
        onRequest:function(){
            MessageToast.show("hello there")

        },
        
        onAfterRendering:function(){
            $("#idmukish--zkas").hide(function(){$(this).fadeIn(5000)})
        },
         

    });
})
