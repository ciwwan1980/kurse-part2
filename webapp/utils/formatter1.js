sap.ui.define([
	"sap/ui/core/format/NumberFormat"
], function(NumberFormat) {
	"use strict";

	return {
		formatNumberByPosition: function(sPosition, sValue) {
			var oFloatNumberFormat = {};
			if (sPosition === "MEVK000001") {
				if (sValue) {
					oFloatNumberFormat = NumberFormat.getFloatInstance({
						maxFractionDigits: 1,
						minFractionDigits: 1,
						groupingEnabled: true
					}, sap.ui.getCore().getConfiguration().getLocale());
					return oFloatNumberFormat.format(parseFloat(sValue));
				} else {
					return 0.00;
				}
			} else if (sPosition === "PRWXMEVK01") {
				if (sValue) {
					oFloatNumberFormat = NumberFormat.getFloatInstance({
						maxFractionDigits: 1,
						minFractionDigits: 1,
						groupingEnabled: true
					}, sap.ui.getCore().getConfiguration().getLocale());
					return oFloatNumberFormat.format(parseFloat(sValue));
				} else {
					return "0.0";
				}
			}
		},
		
		calculateYear: function(sYear, sNoofYear) {
			return parseInt(sYear, 10) + parseInt(sNoofYear, 10);
		},
		
		parseValue: function(sValue) {
			if(sValue === null){
				sValue = 0;
				// return "";
			}
			var oFloatNumberFormat = NumberFormat.getFloatInstance({
				maxFractionDigits: 1,
				minFractionDigits: 1,
				groupingEnabled: true
			}, sap.ui.getCore().getConfiguration().getLocale());
			var sOriginalVal = sValue;
			if(typeof(sValue) === "string" && sValue[0] === "("){
				// Negative value
				sOriginalVal = '-' + sValue.substr(1, sValue.indexOf(")") - 1);
			} else if(typeof(sValue) === "number"){
				sOriginalVal = "" + sValue;
			}
			return oFloatNumberFormat.parse(sOriginalVal);
		},
		
		formatWithTwoDecimal: function(sValue) {
			if (sValue === null) {
				sValue = 0;
			}
			var oFloatNumberFormat = NumberFormat.getFloatInstance({
				maxFractionDigits: 1,
				minFractionDigits: 1,
				groupingEnabled: true
			}, sap.ui.getCore().getConfiguration().getLocale());
			var vValK = parseFloat(sValue, 10);
			if (vValK < 0) {
				return "(" + oFloatNumberFormat.format(Math.abs(vValK)) + ")";
			} else {
				return oFloatNumberFormat.format(vValK);
			}
		},
		formatToUIBoolean: function(oData) {
			Object.keys(oData).forEach(function(sKey) {
				if (oData[sKey] === "X") {
					oData[sKey] = true;
				} else if (oData[sKey] === "") {
					oData[sKey] = false;
				}
			});
		},
		displayFloat: function(value) {
			//	if (!bIsNull) {
			//		var value = nValue / 1000;
				//	if(dateninhalt === "1500" || dateninhalt === "2500") {
						return this._oComponentController && this._oComponentController.formatGermanFloat(value, 2, true);
				//	} else {
					//	return this._oComponentController && this._oComponentController.formatGermanFloat(value, 2, false);
				//	}
					
					
			//	} else {
			//		return "";
			//	}
		}
	};
});
