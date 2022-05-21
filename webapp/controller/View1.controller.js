sap.ui.define([
    "ajil/app/controller/BaseController", 
    "sap/m/MessageBox", 
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "ajil/app/utils/formatter"
], function (BaseController,MessageBox,MessageToast,Filter,Formatter) {

    return BaseController.extend("ajil.app.controller.View1", {

        formatter:Formatter,
        onInit:function(){

            // this.oRouter=this.getOwnerComponent().getRouter();
           
            BaseController.prototype.onInit.apply(this); 
            
        },

		onListItemPress: function (oEvent) {
	
			MessageToast.show("Pressed : " + oEvent.getSource().getTitle());
		}, 

        onSearch:function(oEvent){
            var searchVal=oEvent.getParameter("query");
            // MessageToast.show(searchVal);
            var oFilter=new Filter("name", sap.ui.model.FilterOperator.Contains, searchVal);

            var oList=this.getView().byId("idList");
            oList.getBinding("items").filter([oFilter]);
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
