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
        <td>Audio content</td>
        <td>&lt;audio&gt;</td>
        <td>controls, autoplay, muted, loop, src</td>
        <td>&lt;audio controls autoplay muted loop src="../audio resources/Mirage melody - Patrick Patrikios.mp3"&gt;&lt;/audio&gt;</td>
        <td>Defines an audio element that can be played in the browser</td>
    </tr>
    <tr align="center">
        <td>Audio source</td>
        <td>&lt;source&gt;</td>
        <td>src, type</td>
        <td>&lt;source src="../audio resources/Dizzy (Sting) - Max Surla_Media Right Productions.mp3"&gt;</td>
        <td>Specifies multiple media resources for the audio element, also used for adding backup audio files</td>
    </tr>
</table>

<br>

<h1>Attributes of the &lt;audio&gt; Tag</h1>

<table width="1000" bgcolor="black" border="1">
    <tr bgcolor="grey">
        <th style="text-align: center;">Attribute</th>
        <th style="text-align: center;">Description</th>
        <th style="text-align: center;">Possible Values</th>
        <th style="text-align: center;">Sample Code</th>
    </tr>
    <tr align="center">
        <td>controls</td>
        <td>Displays the audio controls (play, pause, volume, etc.)</td>
        <td>Boolean (present or absent)</td>
        <td>&lt;audio controls&gt;...&lt;/audio&gt;</td>
    </tr>
    <tr align="center">
        <td>autoplay</td>
        <td>Starts playing the audio automatically when the page loads</td>
        <td>Boolean (present or absent)</td>
        <td>&lt;audio autoplay&gt;...&lt;/audio&gt;</td>
    </tr>
    <tr align="center">
        <td>muted</td>
        <td>Audio is muted on load</td>
        <td>Boolean (present or absent)</td>
        <td>&lt;audio muted&gt;...&lt;/audio&gt;</td>
    </tr>
    <tr align="center">
        <td>loop</td>
        <td>Plays the audio in a loop</td>
        <td>Boolean (present or absent)</td>
        <td>&lt;audio loop&gt;...&lt;/audio&gt;</td>
    </tr>
    <tr align="center">
        <td>src</td>
        <td>Specifies the PATH of the audio file to be played</td>
        <td>URL (string)</td>
        <td>&lt;audio src="audiofile.mp3"&gt;...&lt;/audio&gt;</td>
    </tr>
</table>

<br>

<h1>Attributes of the &lt;source&gt; Tag</h1>

<table width="800" bgcolor="black" border="1" align="center">
    <tr bgcolor="grey">
        <th style="text-align: center;">Attribute</th>
        <th style="text-align: center;">Possible Values</th>
        <th style="text-align: center;">Sample Code</th>
        <th style="text-align: center;">Description</th>
    </tr>
    <tr align="center">
        <td>src</td>
        <td>PATH (string)</td>
        <td>&lt;source src="audiofile.mp3"&gt;</td>
        <td>Specifies the PATH of the audio or video file to be played</td>
    </tr>
    <tr align="center">
        <td>type</td>
        <td>string (e.g., "audio/mpeg", "audio/ogg")</td>
        <td>&lt;source src="audiofile.mp3" type="audio/mpeg"&gt;</td>
        <td>Specifies the MIME type of the media resource</td>
    </tr>
</table>
