<h1>Summary</h1>

<table width="1000" bgcolor="black" border="1">
    <tr bgcolor="grey" style="text-align: center;">
        <th style="text-align: center;">Purpose</th>
        <th style="text-align: center;">Tag</th>
        <th style="text-align: center;">Common Attributes</th>
        <th style="text-align: center;">Sample Code</th>
        <th style="text-align: center;">Description</th>
    </tr>
    <tr align="center">
        <td>Image</td>
        <td>&lt;img&gt;</td>
        <td>src="PATH", height="value", width="value", alt="text", title="text"</td>
        <td>&lt;img src="../image resources/image.png" height="500" width="600" alt="This is a picture of my repository" title="Study Archive"&gt;</td>
        <td>Embeds an image within the webpage</td>
    </tr>
</table>

<br>

<h1>Attributes of the &lt;img&gt; Tag</h1>

<table width="1000" bgcolor="black" border="1">
    <tr bgcolor="grey" style="text-align: center;">
        <th style="text-align: center;">Attribute</th>
        <th style="text-align: center;">Description</th>
        <th style="text-align: center;">Possible Values</th>
        <th style="text-align: center;">Sample Code</th>
    </tr>
    <tr align="center">
        <td>src</td>
        <td>Specifies the path to the image</td>
        <td>PATH of the image file</td>
        <td>&lt;img src="image.png"&gt;</td>
    </tr>
    <tr align="center">
        <td>alt</td>
        <td>Provides an alternative text for the image if it cannot be displayed</td>
        <td>Text description</td>
        <td>&lt;img src="image.png" alt="Description of image"&gt;</td>
    </tr>
    <tr align="center">
        <td>height</td>
        <td>Specifies the height of the image</td>
        <td>Integer value (pixels or percentage)</td>
        <td>&lt;img src="image.png" height="200"&gt;</td>
    </tr>
    <tr align="center">
        <td>width</td>
        <td>Specifies the width of the image</td>
        <td>Integer value (pixels or percentage)</td>
        <td>&lt;img src="image.png" width="300"&gt;</td>
    </tr>
    <tr align="center">
        <td>title</td>
        <td>Provides additional information about the image (shown as a tooltip)</td>
        <td>Text description</td>
        <td>&lt;img src="image.png" title="Image Tooltip"&gt;</td>
    </tr>
    <tr align="center">
        <td>loading</td>
        <td>Specifies how the browser should load the image</td>
        <td>auto, eager, lazy</td>
        <td>&lt;img src="image.png" loading="lazy"&gt;</td>
    </tr>
    <tr align="center">
        <td>crossorigin</td>
        <td>Controls the CORS settings for the image</td>
        <td>anonymous, use-credentials</td>
        <td>&lt;img src="image.png" crossorigin="anonymous"&gt;</td>
    </tr>
</table>