<?php

		function strip_all($str_to_strip)
		 {
			$striped=strip_tags($striped);
		 	$striped=urldecode($str_to_strip);
		 	$striped=mysql_escape_string($striped);
		 	return $striped;
		 }
		//print_r($_POST);
		$ftitle = $_POST['title'];
		$fname = $_POST['name'];
		$fcontact = $_POST['contact'];
		if(isset($_POST['date'])){
			$fdate = $_POST['date'];
		}
		$subj = '[obolon] '.$ftitle;
		



		if($fname != ''){
			$headers = 'MIME-Version: 1.0' . "\r\n" ;
			$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n" ;
			$headers .= 'From: Obolon <info@o-r.com.ua>' . "\r\n";
			$message = "Name:\n ".$fname."\n<br>\n\n"."Contact: \n ".$fcontact."\n<br> \n<br>Date: ".$fdate."\n<br><br>IP&UA: ".$_SERVER['REMOTE_ADDR'].$_SERVER['HTTP_USER_AGENT'];
			// ini_set("SMTP", "aspmx.l.google.com");
   //  		ini_set("sendmail_from", "html@coderiver.com.ua");

    // mail("akella.a@gmail.com", "Testing", $message, $headers);
    // echo "Check your email now....<BR/>";
			mail('akella.a@gmail.com', $subj, $message, $headers);
		}

		?>