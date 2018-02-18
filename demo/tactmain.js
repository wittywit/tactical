// JavaScript Document
/*! 
 * tactmain.js v 2.2
 * Copyright (c) 2018 Pranshu - http://wittywit.com
 * Open Source MIT License - 
 */
// Created: 2018-01-15 
// Updated: 2018-01-29
// REQUIRES: jquery 1.8.x, jquery-ui, jquery.ui.touch-punch
// written for tactical coach
 
         $(document).ready(function() { 		 
			 
			 
			 
			 
			 "use strict";
			 	$(function() {
        $( ".inner-box" ).draggable();
    });
			 
            $('.btn').click(function() {  
               if (this.id === "add") {  
                  $('#draggable>span').removeClass("inner-box inner-box-442").addClass("inner-box-442") ; 
               } else {  
               $('#draggable>span').removeClass("inner-box inner-box-442").addClass("inner-box") ;
               }  
            });		 
		
			 });


 

    
  


