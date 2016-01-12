/*
 *
 * Copyright (c) 2015 EBo (https://github.com/E-Bo)
 *
 * Version 0.1
 *
 * Work with jQuery
 *
 */

var fullScreenHelper = function(options){
    options = options || {};
    window.fullScreenHelperCounter = window.fullScreenHelperCounter? window.fullScreenHelperCounter + 1 : 1;
    window.UserAgent = window.UserAgent || this.clients[this.getUserAgent()];
    this.fullScreenHelperID = window.fullScreenHelperCounter;
    this.RequestFullCallBack = options.RequestFullCallBack || null;
    this.CancelFullCallBack = options.CancelFullCallBack || null;
    this.targetElement = options.target || document.getElementsByTagName('html')[0];
    window.fullScreenChangeEvents = window.fullScreenChangeEvents || {};
    window.fullScreenChangeEvents['fullScreenChangeEvent_' + this.fullScreenHelperID] = $.proxy(function(){
        if(document[window.UserAgent.stateName]){
            if(this.RequestFullCallBack && typeof(this.RequestFullCallBack) == 'function'){
                this.RequestFullCallBack();
            }
        }else{
            if(this.CancelFullCallBack && typeof(this.CancelFullCallBack) == 'function'){
                this.CancelFullCallBack();
            }
        }
    },this);
    this.bindEvent();
}

fullScreenHelper.prototype = {
    clients: {
        'default' : {
            eventName: 'fullscreenchange',
            stateName: 'fullScreen',
            requestFullScreen: 'requestFullScreen',
            cancelFullScreen: 'exitFullscreen'
        },
        'firefox' : {
            eventName: 'mozfullscreenchange',
            stateName: 'mozFullScreen',
            requestFullScreen: 'mozRequestFullScreen',
            cancelFullScreen: 'mozCancelFullScreen'
        },
        'webkit' : {
            eventName: 'webkitfullscreenchange',
            stateName: 'webkitIsFullScreen',
            requestFullScreen: 'webkitRequestFullScreen',
            cancelFullScreen: 'webkitExitFullscreen'
        },
        'msie' : {
            eventName: 'msfullscreenchange',
            stateName: 'msFullScreen',
            requestFullScreen: 'msRequestFullScreen',
            cancelFullScreen: 'msExitFullscreen'
        }
    },
    getUserAgent: function(){
        var _ua = 'default';
        for(var key in this.clients){
            if(RegExp(key).test(navigator.userAgent.toLowerCase())){
                _ua = key;
            }
        }
        return _ua;
    },
    bindEvent: function(){
        $(document).on(window.UserAgent.eventName,window.fullScreenChangeEvents['fullScreenChangeEvent_' + this.fullScreenHelperID]);
    },
    unbindEvent: function(){
        $(document).unbind(window.UserAgent.eventName,window.fullScreenChangeEvents['fullScreenChangeEvent_' + this.fullScreenHelperID]);
    },
    fullScreen: function(){
        if(this.targetElement[window.UserAgent.requestFullScreen]){
            this.targetElement[window.UserAgent.requestFullScreen]();
        }else{
            //浏览器不支持全屏API或已被禁用
        }
    },
    exitFullScreen: function(){
        if(document[window.UserAgent.cancelFullScreen]){
            document[window.UserAgent.cancelFullScreen]();
        }else{
            //浏览器不支持全屏API或已被禁用
        }
    },
    toggleFullScreen: function(){
        if(document[window.UserAgent.stateName]){
            this.exitFullScreen();
        }else{
            this.fullScreen();
        }
    }
}
