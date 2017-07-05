'use strict';

var appRoot = setAppRoot("myci", "myci");


/*
 * Library Functions
 * setAppRoot
 * changeClassName
 * changeInnerHTML
 * displayFlashMsg
 * hideFlashMsg
 * changeFlashMsgContent
*/
/**
 * 
 * @param {type} devFolderName
 * @param {type} prodFolderName
 * @returns {String}
 * 
 */
function setAppRoot(devFolderName, prodFolderName){
    var hostname = window.location.hostname;

    /*
     * set the appRoot
     * This will work for both http, https with or without www
     * @type String
     */
    
    //attach trailing slash to both foldernames
    var devFolder = devFolderName ? devFolderName+"/" : "";
    var prodFolder = prodFolderName ? prodFolderName+"/" : "";
    
    var baseURL = "";
    
    if(hostname.search("localhost") !== -1 || (hostname.search("192.168.") !== -1)  || (hostname.search("127.0.0.") !== -1)){
        baseURL = window.location.origin+"/"+devFolder;
    }
    
    else{
        baseURL = window.location.origin+"/"+prodFolder;
    }
    
    return baseURL;
}

/**
 * Change the class name of elements
 * @param {type} elementId
 * @param {type} newClassName
 * @returns {String}
 */
function changeClassName(elementId, newClassName){
    
    //just change value if it's a single element
    if(typeof(elementId) === "string"){
        $("#"+elementId).attr('class', newClassName);
    }
    
    //loop through if it's an array
    else{
        var i;
    
        for(i in elementId){
            $("#"+elementId[i]).attr('class', newClassName);
        }
    }
    return "";
}


/**
 * Change the innerHTML of elements
 * @param {type} elementId
 * @param {type} newValue
 * @returns {String}
 */
function changeInnerHTML(elementId, newValue){
    //just change value if it's a single element
    if(typeof(elementId) === "string"){
        $("#"+elementId).html(newValue);
    }
    
    //loop through if it's an array
    else{
        var i;
    
        for(i in elementId){
            $("#"+elementId[i]).html(newValue);
        }
    }
    
    
    return "";
}

/**
 * Function to handle the display of messages
 * @param {type} msg
 * @param {type} iconClassName
 * @param {type} color
 * @param {type} time
 * @returns {undefined}
 */
function displayFlashMsg(msg, iconClassName, color, time){
    changeClassName('flashMsgIcon', iconClassName);//set spinner class name
    $("#flashMsg").css('color', color);//change font color
    changeInnerHTML('flashMsg', msg);//set message to display
    $("#flashMsgModal").modal('show');//display modal
    
    //hide the modal after a specified time if time is specified
    if(time){
        setTimeout(function(){$("#flashMsgModal").modal('hide');}, time);
    }
}

/**
 * 
 * @returns {undefined}
 */
function hideFlashMsg(){
    changeClassName('flashMsgIcon', "");//set spinner class name
    $("#flashMsg").css('color', '');//change font color
    changeInnerHTML('flashMsg', "");//set message to display
    $("#flashMsgModal").modal('hide');//hide modal
}

/**
 * Change message being displayed and hide the modal if time is set
 * @param {type} msg
 * @param {type} iconClassName
 * @param {type} color
 * @param {type} time
 * @returns {undefined}
 */
function changeFlashMsgContent(msg, iconClassName, color, time){
    changeClassName('flashMsgIcon', iconClassName);//set spinner class name
    $("#flashMsg").css('color', color);//change font color
    changeInnerHTML('flashMsg', msg);//set message to display
    
    //hide the modal after a specified time if time is specified
    if(time){
        setTimeout(function(){$("#flashMsgModal").modal('hide');}, time);
    }
}