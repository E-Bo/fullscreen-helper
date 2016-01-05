<h1>What is fullscreen-helper.js</h1>
<p>
fullscreen-helper.js is a lightweight jQuery plugin that helps you toggle fullscreen.
</p>

<h1>1. Include Folowing Libraries</h1>
<p>JQuery reference and the fullscreen-helper.js</p>
<pre>
<p>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"&gt;</p><p>&lt;script src="yourPath/fullscreen-helper.js"&gt;</p>
</pre>

<h1>2. Basic Initialize</h1>
<p>Include in bottom of your  &lt;body&gt; tag</p>
<pre>
<code>
    &lt;body&gt;
      &lt;a id="full_screen"&gt;
      &lt;/a&gt;
    &lt;/body&gt;
    &lt;script type="text/javascript"&gt;
        var fullscreenBtn = $("#full_screen");

        fullscreenBtn.click(function(event) {
            myFullScreenHelper.toggleFullScreen();
        });

        var fullCallBack = function(){
            fullscreenBtn.addClass('active');
            console.log('enter');
        };

        var exitFullCallBack = function(){
            fullscreenBtn.removeClass('active');
            console.log('exit');
        }

        var myFullScreenHelper = new fullScreenHelper({
            RequestFullCallBack: fullCallBack,
            CancelFullCallBack: exitFullCallBack,
        });
    &lt;/script&gt;
</code>
</pre>

<h1>3. Options</h1>
<pre>
<code><p>&lt;script type="text/javascript"&gt;</p>
      var myFullScreenHelper = new fullScreenHelper({
          RequestFullCallBack: fullCallBack, //enter fullscreen callback function
          CancelFullCallBack: exitFullCallBack, //exit fullscreen callback function
          target: document.getElementsByTagName('html')[0]  // fullscreen target element
      });
     &lt;/script&gt;
</code>
</pre>

