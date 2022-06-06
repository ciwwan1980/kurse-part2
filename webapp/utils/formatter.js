sap.ui.define([
  
], function () {
 
return {
      
    
       getStatus: function (status) {
        if (status === "Available") {
            return "Success";
        } else if (status ==="Aut of Stock" ) {
            return  "Warning";
        } 
         else {
            return "Error";
        }
    }

    

    };
})

