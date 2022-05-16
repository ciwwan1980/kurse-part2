sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function(JSONModel) {
    'use strict';
   
    return {
    createMyJSONModel: function (filePath){
        // step1 create a brand mew model 
        var oModel = new JSONModel();
        //set up or load the data
        // oModel.setData();
        oModel.loadData(filePath)
        return oModel

    }
   }
});


