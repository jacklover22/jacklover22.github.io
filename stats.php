<?php

////open the log file

$_filename = "logs.txt";
$_handle = fopen($_filename, "r");
$_contents = fread($_handle, filesize($_filename));
fclose($_handle);

////end


////divide all the ip address
$_divide = explode("&", $_contents);
////end

////get info out of the divide
$_array = 0;
echo "<div align='left'";
while($_divide[$_array] != '')
{

////make a list
list($_ip, $_host, $_browser, $_date) = explode("~", $_divide[$_array]);
////end

////print out the data
echo "<br>";
echo "<b>IP: </b>" . $_ip . "<br>";
echo "<b>Host: </b>".$_host . "<br>";
echo "<b>Browser: </b>".$_browser . "<br>";
echo "<b>Date: </b>".$_date . "<p>";
////end

$_array++;
}
echo "</div>";
////end

?>