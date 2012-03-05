# mTabs

<b>mTabs</b> is a no fuss jQuery plugin for creating a collection of tabbed elements.

## Usage
####Simplest Form
<pre><code>$('#one').mTabs();
</code></pre>

####With a Nav
<p>You can also specify a "Navigation" element by passing it into the function within an options object as follows:</p>
<pre><code>$('#two').mTabs({
  nav : "#theNav"
});
</code></pre>
<b>Note: </b> You must make sure your divs have Ids and they correspond with the hrefs on the anchor tags of the navigation you passed in. 

Happy tabbing!