sap.ui.define([
    "ajil/app/controller/BaseController", 
    "sap/m/MessageBox", 
    "sap/m/MessageToast", 
], function (BaseController,MessageBox,MessageToast) {

    return BaseController.extend("ajil.app.controller.View1", {


        onInit:function(){

            // this.oRouter=this.getOwnerComponent().getRouter();
           
            BaseController.prototype.onInit.apply(this); 
        },

        onNext: function () {

           // var oAppContainer=this.getView().getParent();
               // oAppContainer.to("idmukish"); 
               this.oRouter.navTo("detail", {
                   kaven:10
               });

        },

        // onBeforeRendering:function(){
        //     this.getView().byId("idBtn").setVisible(true)
        // }, 

        // onAfterRendering:function(){
        //     $("#idAnil--idBtn").hide(function(){$(this).fadeIn(5000)})
        // },
        // onOrder:function(){
        //     //alert("order is success")
        //     MessageBox.confirm("confirmation", {
        //         title:"confirm order", 
        //         onClose:function(value){
        //             if (value === "OK"){
        //                 MessageToast.show("iam clicked")
        //             }else{
        //                 MessageBox.error("iam not clicked")
        //             }
        //         }
        //     })
        // },
         
    });
})
