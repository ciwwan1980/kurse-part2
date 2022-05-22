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

        onShowSelItem:function(oEvent){

            var oList= this.getView().byId("idList"); 
            // console.log(oList, "oList----------------")
            var aItem= oList.getSelectedItems(); 
           
            console.log(aItem, "aItem----------------")
            for (let index = 0; index < aItem.length; index++) {
                const element = aItem[index];
                console.log(element.getTitle(), "elementgittitle-----------------")
                
            }
            // aItem.forEach(element => {
            //     console.log(element.getTitle());
            //     // console.log(element, "element-----------------")
            // });
        },

        onSearch:function(oEvent){
            var searchVal=oEvent.getParameter("query");
            // MessageToast.show(searchVal);
            var oFilter1=new Filter("name", sap.ui.model.FilterOperator.Contains, searchVal);
            var oFilter2=new Filter("type", sap.ui.model.FilterOperator.Contains, searchVal);
            var oFilter=new Filter({
                filters: [oFilter1,oFilter2],
                and:false
            });
            var oList=this.getView().byId("idList");
            oList.getBinding("items").filter([oFilter]);
        },

        onNext: function (iKaven) {

           // var oAppContainer=this.getView().getParent();
               // oAppContainer.to("idmukish"); 
               this.oRouter.navTo("detail", {
                   kaven:iKaven
               });

        },
        onItemPress:function(oEvent){
         
        
            var oSelectedItem=oEvent.getParameter("listItem");
            var fruitName=oSelectedItem.getTitle();
            // this.oRouter.navTo("detail",{
            //     kaven:fruitName,
            // })
            var sPath=oSelectedItem.getBindingContextPath(); 
            var sIndex=sPath.split("/")[sPath.split("/").length-1]
            console.log(sPath, "sPath------------------")
            this.onNext(sIndex)
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
