sap.ui.define([
    "ajil/app/controller/BaseController",
    "sap/m/MessageToast", 
    "sap/m/MessageBox"
], function (BaseController,MessageToast, MessageBox) {

    return BaseController.extend("ajil.app.controller.View2", {

        onInit:function(){
           
            // this.oRouter=this.getOwnerComponent().getRouter();
    
            BaseController.prototype.onInit.apply(this); 

            this.oRouter.getRoute("detail").attachMatched(this.herculis, this)
        },

        onSave:function(){
            var that=this;
            MessageBox.confirm("Y want to save", {
                onClose:function(status){
                    that.onClose(status);
                }
               
            })
        },
        onTabSelect:function(){
            this.oRouter.navTo("end",{
                supplierId:"Test"
            })
        },
        onClose:function(status){
           
            if(status==="OK"){
                MessageToast.show("your order has been saved")
            }else{
                MessageBox.error("There is an error")
            }

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
       myField:null, 

        onRequest:function(oEvent){
            this.myField=oEvent.getSource();
            console.log(this.myField, "this.myField_hereeee _______________")
            MessageToast.show("hello there");
            var oFragment=  new sap.ui.xmlfragment("ajil.app.fragments.popup", this);
            oFragment.setTitle("Cities hello"); 
            console.log(oFragment.setTitle("Cities"), "oFragment cities////////////")
            this.getView().addDependent(oFragment);
            
            oFragment.bindAggregation("items", {
                path:'local>/Cities',
                template: new sap.m.StandardListItem({
                    description:"{local>famousfor}", 
                    title:"{local>name}"
                })
            })
            oFragment.open();
        },

        onConfirm:function(oEvent){
            var oSelectedItem=oEvent.getParameter("selectedItem");
            this.myField.setValue(oSelectedItem.getTitle())
        },

        onAfterRendering:function(){
            $("#idmukish--zkas").hide(function(){$(this).fadeIn(5000)})
        },
         

    });
})
