<h1>Summary</h1>

<table width="1000" bgcolor="black" border="1">
    <tr bgcolor="grey">
        <th style="text-align: center;">Purpose</th>
        <th style="text-align: center;">Tag</th>
        <th style="text-align: center;">Common Attributes</th>
        <th style="text-align: center;">Samples</th>
        <th style="text-align: center;">Description</th>
    </tr>
    <tr align="center">
        <td rowspan="2">Hyperlink</td> <!-- Merge the two rows -->
        <td rowspan="2">&lt;a&gt;</td>
        <td rowspan="2">href="URL", target="value", title="text"</td>
        <td>&lt;a href="https://www.google.com" target="_blank" title="This takes you to google"&gt;Google&lt;/a&gt;</td>
        <td>Defines a hyperlink to link to external or internal content, or email</td>
    </tr>
    <tr align="center">
        <td>&lt;a href="mailto:nazmusweb.official@gmail.com" target="_self"&gt;Email me&lt;/a&gt;</td>
        <td>Defines a hyperlink to link to an email address</td>
    </tr>
</table>

<br>

<h1>Attributes of the &lt;a&gt; Tag</h1>

<table width="1000" bgcolor="black" border="1">
    <tr bgcolor="grey" style="text-align: center;">
        <th style="text-align: center;">Attribute</th>
        <th style="text-align: center;">Description</th>
        <th style="text-align: center;">Possible Values</th>
        <th style="text-align: center;">Sample Code</th>
    </tr>
    <tr align="center">
        <td>href</td>
        <td>Specifies the URL of the page or resource the link goes to.</td>
        <td>Any valid URL (e.g., https://example.com, /page2.html, mailto:email@example.com)</td>
        <td>&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;</td>
    </tr>
    <tr align="center">
        <td>target</td>
        <td>Specifies where to open the linked document.</td>
        <td>_self (default), _blank (new tab), _parent, _top</td>
        <td>&lt;a href="https://www.example.com" target="_blank"&gt;Open in New Tab&lt;/a&gt;</td>
    </tr>
    <tr align="center">
        <td>title</td>
        <td>Provides additional information when hovering over the link.</td>
        <td>Any descriptive text (e.g., "Go to Google")</td>
        <td>&lt;a href="https://www.example.com" title="This takes you to Example"&gt;Hover over me&lt;/a&gt;</td>
    </tr>
    <tr align="center">
        <td>rel</td>
        <td>Specifies the relationship between the current page and the linked page.</td>
        <td>noopener, noreferrer, nofollow, author, license, tag</td>
        <td>&lt;a href="https://www.example.com" target="_blank" rel="noopener"&gt;Secure Link&lt;/a&gt;</td>
    </tr>
    <tr align="center">
        <td>download</td>
        <td>Specifies that the target will be downloaded when clicked.</td>
        <td>File name or the presence of the attribute (e.g., download="file.pdf")</td>
        <td>&lt;a href="file.pdf" download&gt;Download PDF&lt;/a&gt;</td>
    </tr>
    <tr align="center">
        <td>type</td>
        <td>Specifies the MIME type of the linked document.</td>
        <td>text/html, application/pdf, image/jpeg</td>
        <td>&lt;a href="document.pdf" type="application/pdf"&gt;Download PDF&lt;/a&gt;</td>
    </tr>
    <tr align="center">
        <td>hreflang</td>
        <td>Specifies the language of the linked document.</td>
        <td>Language code (e.g., en, fr, es, de)</td>
        <td>&lt;a href="https://www.example.com" hreflang="en"&gt;Visit Example (English)&lt;/a&gt;</td>
    </tr>
    <tr align="center">
        <td>referrerpolicy</td>
        <td>Controls how much referrer info is sent when following the link.</td>
        <td>no-referrer, no-referrer-when-downgrade, origin, same-origin, strict-origin</td>
        <td>&lt;a href="https://www.example.com" referrerpolicy="no-referrer"&gt;No Referrer Link&lt;/a&gt;</td>
    </tr>
    <tr align="center">
        <td>ping</td>
        <td>Sends a POST request to a URL when the hyperlink is followed.</td>
        <td>One or more URLs separated by spaces (e.g., ping="http://example.com/ping")</td>
        <td>&lt;a href="https://www.example.com" ping="http://tracker.example.com/ping"&gt;Tracked Link&lt;/a&gt;</td>
    </tr>
</table>