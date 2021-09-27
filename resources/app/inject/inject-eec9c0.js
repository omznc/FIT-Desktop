// ==UserScript==
// @name          FIT DLWMS Modern Dark
// @namespace     http://userstyles.org
// @description	  Dark version of DLWMS with some improvements.
// @author        omarzunic
// @homepage      https://userstyles.org/styles/214340
// @run-at        document-start
// @version       0.20210921144449
// ==/UserScript==
(function() {var css = "";
if (false || (document.location.href.indexOf("https://www.fit.ba/student/obavijesti/opsirnije.aspx") == 0) || (document.location.href.indexOf("https://fit.ba/student/obavijesti/opsirnije.aspx") == 0) || (document.location.href.startsWith("https://www.fit.ba/student/default.aspx?search") ) || (document.location.href.indexOf("https://fit.unmo.ba/student/obavijesti/opsirnije.aspx") == 0) || (new RegExp("^https://(www.)?fit.(unmo.)?ba/student/default.aspx$")).test(document.location.href) || (new RegExp("^https://(www.)?fit.(unmo.)?ba/student/nastava/index.aspx$")).test(document.location.href) || (new RegExp("^https://(www.)?fit.(unmo.)?ba/student/nastava/dokumenti/pretraga.aspx$")).test(document.location.href) || (new RegExp("^https://(www.)?fit.(unmo.)?ba/student/rokovi/index.aspx$")).test(document.location.href) || (new RegExp("^https://(www.)?fit.(unmo.)?ba/student/nastava/moji_radovi.aspx$")).test(document.location.href) || (new RegExp("^https://(www.)?fit.(unmo.)?ba/student/nastava/prisustvo.aspx$")).test(document.location.href) || (new RegExp("^https://(www.)?fit.(unmo.)?ba/student/evaluacija/uspjeh.aspx$")).test(document.location.href) || (new RegExp("^https://(www.)?fit.(unmo.)?ba/student/licni_podaci.aspx$")).test(document.location.href) || (new RegExp("^https://(www.)?fit.(unmo.)?ba/student/potvrde/index.aspx$")).test(document.location.href) || (new RegExp("^https://(www.)?fit.(unmo.)?ba/student/evaluacija/predmet_evaluacija.aspx$")).test(document.location.href) || (new RegExp("^https://(www.)?fit(unmo.)?.ba/student/$")).test(document.location.href) || (new RegExp("^https://(www.)?fit.(unmo.)?ba/student/$")).test(document.location.href) || (new RegExp("^https://(www.)?fit.(unmo.)?ba/student/obavijesti/opsirnije.aspx$")).test(document.location.href))
	css += [
		"#header .tools, #header ul.mainmenu, #header {",
		"	background: #161616;",
		"}",
		"#header ul.mainmenu {",
		"	border: none;",
		"	margin: 0 auto;",
		"	width: 100%;",
		"	width: -moz-fit-content;",
		"	width: -webkit-fit-content;",
		"}",
		"body {",
		"	background: #202020;",
		"}",
		"#footer, #footer p {",
		"	background: #161616;",
		"}",
		".wrapper {",
		"	width: 60%;",
		"}",
		"#Label3, #Label5 {",
		"	color: white !important;",
		"}",
		".form-head, .charts {",
		"	background: none;",
		"}",
		".pgr span {",
		"	background: #404040;",
		"	padding: 7px 15px;",
		"}",
		"hr {",
		"	display: none;",
		"}",
		".pgr a {",
		"	background: #404040;",
		"	padding: 7px 15px;",
		"	transition: 0.2s;",
		"}",
		".pgr a:hover {",
		"	background: #999;",
		"	padding: 7px 15px;",
		"	transition: 0.2s;",
		"}",
		"#HyperLink7 {",
		"	font-size: 0.9rem;",
		"}",
		".eight-col select {",
		"	width: 95% !important;",
		"}",
		"#lblSvrha, #lblDatum, #lblStatus {",
		"	color: white;",
		"}",
		"#dgPotvrde td {",
		"	color: white;",
		"}",
		"#lblGodina {",
		"	color: white;",
		"}",
		"#header ul.mainmenu li a {",
		"	text-align: center;",
		"}",
		"select .input-box {",
		"	width: 60% !important;",
		"}",
		".chart-label {",
		"	margin-bottom: 4px !important;",
		"}",
		".blocktitle a, h1 {",
		"	color: white !important;",
		"}",
		"#header .mainmenu li a {",
		"	width: 85% !important;",
		"}",
		"#content-wrapper .form-head #Div1 {",
		"	width: 41% !important;",
		"}",
		"",
		".content {",
		"	color: white;",
		"}",
		"#footer h2 {",
		"	display:none;",
		"}",
		".wrapper #content-wrapper {",
		"	width: 70%;",
		"}",
		".wrapper #sidebar {",
		"	width: 25%;",
		"}",
		"table #gridMaterijali {",
		"	width: 100%",
		"}",
		".wrapper a.linkButton {",
		"	color: lightgray;",
		"	text-decoration: underline;",
		"	transition: 0.2s;",
		"}",
		".form-head {",
		"	background: #202020;",
		"}",
		"a.linkButton:hover {",
		"	color: white;",
		"	transition: 0.2s;",
		"}",
		"ul.newslist .abstract, ul.docslist .abstract {",
		"	color: white;",
		"}",
		"",
		".fineprint::before {",
		"	color: white;",
		"	text-align: center;",
		"	content: \"omarzunic.com @ discord.io/FITMostar |\"; ",
		"}",
		"",
		"#header .tools-account {",
		"	float: none;",
		"	margin: 40px 14px 0 0;",
		"	text-align: center;",
		"}",
		"table#gridPolozeni, table#listNepolozeni {",
		"	color: white;",
		"}",
		".six-col .two-col span {",
		"	color: white;",
		"}",
		".last-col span {",
		"	color: white !important;",
		"}",
		"#header span {",
		"	font-size: 1rem;",
		"}",
		"#header a.button.blue {",
		"	padding: 5px 10px 5px 10px;",
		"}",
		"#header .tools, #header ul.mainmenu, #header {",
		"	margin-bottom: 12px;",
		"}",
		"/* Firefox */",
		" * {",
		"	scrollbar-width: auto;",
		"	scrollbar-color: #696969 #101010;",
		"}",
		"/* Chrome, Edge, and Safari */",
		" *::-webkit-scrollbar {",
		"	width: 10px;",
		"}",
		"*::-webkit-scrollbar-track {",
		"	background: #101010;",
		"}",
		"*::-webkit-scrollbar-thumb {",
		"	background-color: #696969;",
		"	border-radius: 4px;",
		"	border: 2px none #ffffff;",
		"}",
		".logo {",
		"	display:none;",
		"}",
		"#header .mainmenu li:hover, #header .mainmenu li.selected {",
		"	background: #272727;",
		"	transition: 0.2s;",
		"}",
		"#header ul.mainmenu li {",
		"	color: white;",
		"	text-align: center;",
		"	background: none;",
		"	height: 200px;",
		"    width: 120px;",
		"	transition: 0.2s;",
		"}",
		"#header ul.mainmenu li a {",
		"	color: white;",
		"}"
	].join("\n");
if (false || (new RegExp("^https://(www.)?fit(unmo.)?.ba/student/EUSASStudentHome.aspx$")).test(document.location.href) || (new RegExp("^https://(www.)?fit(unmo.)?.ba/student/Tests/PreviousTestsWithDetails.aspx$")).test(document.location.href))
	css += [
		"#header .tools, #header ul.mainmenu, #header {",
		"	background: #161616;",
		"}",
		"#header {",
		"padding-top: 25px;",
		"}",
		"#header ul.mainmenu {",
		"	border: none;",
		"	margin: 0 auto;",
		"	width: 100%;",
		"	width: -moz-fit-content;",
		"	width: -webkit-fit-content;",
		"}",
		"#main-container {",
		"	background: #202020;",
		"	border: 0;",
		"	color: white !important;",
		"}",
		"body, html {",
		"	background: #202020;",
		"}",
		"#menu {",
		"	background: #161616;",
		"	border: none;",
		"	display: flex;",
		"	justify-content: center;",
		"}",
		"#nav, #nav ul {",
		"	border: none;",
		"	width: auto;",
		"}",
		"h1, h2, h3, h4, p, td {",
		"	color: white !important;",
		"}",
		"#footer, #footer p {",
		"	background: #161616;",
		"}",
		".wrapper {",
		"	width: 60%;",
		"}",
		"#Label3, #Label5 {",
		"	color: white !important;",
		"}",
		".form-head, .charts {",
		"	background: none;",
		"}",
		".pgr span {",
		"	background: #404040;",
		"	padding: 7px 15px;",
		"}",
		"hr {",
		"	display: none;",
		"}",
		".pgr a {",
		"	background: #404040;",
		"	padding: 7px 15px;",
		"	transition: 0.2s;",
		"}",
		".pgr a:hover {",
		"	background: #999;",
		"	padding: 7px 15px;",
		"	transition: 0.2s;",
		"}",
		"#HyperLink7 {",
		"	font-size: 0.9rem;",
		"}",
		".eight-col select {",
		"	width: 95% !important;",
		"}",
		"#lblSvrha, #lblDatum, #lblStatus {",
		"	color: white;",
		"}",
		"#dgPotvrde td {",
		"	color: white;",
		"}",
		".foperations-wleftmargin {",
		"	margin: auto;",
		"	width: 100% !important;",
		"}",
		".foperations-wleftmargin #btnBack {",
		"	margin: auto;",
		"	display: block;",
		"}",
		".info-box-wleftmargin {",
		"	text-align: center;",
		"	margin: auto;",
		"	width: 40%;",
		"}",
		".content-box {",
		"	margin: auto;",
		"	width: 40%;",
		"}",
		".label-important-gray {",
		"	color: white;",
		"	margin-left: 3%;",
		"	padding: 5px 0px;",
		"}",
		".label {",
		"	color: white;",
		"}",
		"#lblGodina {",
		"	color: white;",
		"}",
		"select .input-box {",
		"	width: 60% !important;",
		"}",
		".chart-label {",
		"	margin-bottom: 4px !important;",
		"}",
		".blocktitle a, h1 {",
		"	color: white !important;",
		"}",
		"#content-wrapper .form-head #Div1 {",
		"	width: 41% !important;",
		"}",
		"#footer h2 {",
		"	display:none;",
		"}",
		".wrapper #content-wrapper {",
		"	width: 70%;",
		"}",
		".wrapper #sidebar {",
		"	width: 25%;",
		"}",
		"table #gridMaterijali {",
		"	width: 100%",
		"}",
		".wrapper a.linkButton {",
		"	color: lightgray;",
		"	text-decoration: underline;",
		"	transition: 0.2s;",
		"}",
		".form-head {",
		"	background: #202020;",
		"}",
		"a.linkButton:hover {",
		"	color: white;",
		"	transition: 0.2s;",
		"}",
		"ul.newslist .abstract, ul.docslist .abstract {",
		"	color: white;",
		"}",
		"#header .tools-account {",
		"	float: none;",
		"	margin: 40px 14px 0 0;",
		"	text-align: center;",
		"}",
		"#header span {",
		"	font-size: 1rem;",
		"}",
		"#header a.button.blue {",
		"	padding: 5px 10px 5px 10px;",
		"}",
		"#header .tools, #header ul.mainmenu, #header {",
		"	margin-bottom: 12px;",
		"}",
		"/* Firefox */",
		" * {",
		"	scrollbar-width: auto;",
		"	scrollbar-color: #696969 #101010;",
		"}",
		"/* Chrome, Edge, and Safari */",
		" *::-webkit-scrollbar {",
		"	width: 10px;",
		"}",
		"*::-webkit-scrollbar-track {",
		"	background: #101010;",
		"}",
		"*::-webkit-scrollbar-thumb {",
		"	background-color: #696969;",
		"	border-radius: 4px;",
		"	border: 2px none #ffffff;",
		"}",
		".logo {",
		"	display:none;",
		"}",
		"#header .mainmenu li:hover, #header .mainmenu li.selected {",
		"	background: #272727;",
		"	transition: 0.2s;",
		"}",
		"#header ul.mainmenu li {",
		"	color: white;",
		"	text-align: center;",
		"	background: none;",
		"	height: 200px;",
		"	transition: 0.2s;",
		"}",
		"#header ul.mainmenu li a {",
		"	color: white;",
		"}"
	].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();

if (window.location.href != "https://www.fit.ba/student/login.aspx" && window.location.href != "https://www.fit.ba/student/login.aspx?ReturnUrl=%2fstudent%2f" && window.location.href != "https://www.fit.ba/student/login?to=/student/EUSASStudentHome.aspx") {
var wrapper = document.createElement("div");
wrapper.innerHTML = '<div id="titlebar" style="position: fixed; background-color: #202020; width: 100%; height: 25px; float: right;"> <svg id="closebutton" onclick="window.close()" style="height: 100%; float: right;" viewBox="0 0 40 40"><path style="stroke: white;fill: transparent;stroke-linecap: round;stroke-width: 5;" d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg><svg id="closebutton" onclick="window.resizeTo(screen.width,screen.height)" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style="padding-top: 1px;float: right;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M20.64,20.64v41.28c-0.04031,2.48594 1.26313,4.78375 3.41313,6.03344c2.13656,1.26313 4.79719,1.26313 6.93375,0c2.15,-1.24969 3.45344,-3.5475 3.41312,-6.03344v-27.52h27.52c2.48594,0.04031 4.78375,-1.26312 6.03344,-3.41312c1.26313,-2.13656 1.26313,-4.79719 0,-6.93375c-1.24969,-2.15 -3.5475,-3.45344 -6.03344,-3.41313zM110.08,20.64c-3.80281,-0.13437 -6.9875,2.83531 -7.12187,6.63813c-0.13438,3.78937 2.83531,6.9875 6.63812,7.12187c0.16125,0 0.3225,0 0.48375,0h27.52v27.52c-0.05375,3.61469 2.70094,6.65156 6.28875,6.94719c0.22844,0.02688 0.45688,0.02688 0.69875,0.02688c3.78938,-0.05375 6.82625,-3.17125 6.7725,-6.97406v-41.28zM27.4125,106.54594c-3.78937,0.05375 -6.82625,3.17125 -6.7725,6.97406v41.28h41.28c0.22844,0 0.45688,0 0.68531,-0.02687c3.68187,-0.33594 6.43656,-3.50719 6.24844,-7.18906c-0.17469,-3.69531 -3.23844,-6.58438 -6.93375,-6.54406h-27.52v-27.52c0.02688,-1.85437 -0.69875,-3.64156 -2.01562,-4.95844c-1.31688,-1.31688 -3.10406,-2.0425 -4.97188,-2.01563zM144.3725,106.54594c-3.78937,0.05375 -6.82625,3.17125 -6.7725,6.97406v27.52h-27.52c-2.48594,-0.04031 -4.78375,1.26313 -6.03344,3.41313c-1.26313,2.13656 -1.26313,4.79719 0,6.93375c1.24969,2.15 3.5475,3.45344 6.03344,3.41312h41.28v-41.28c0.02688,-1.85437 -0.69875,-3.64156 -2.01562,-4.95844c-1.31688,-1.31688 -3.10406,-2.0425 -4.97188,-2.01563z"></path></g></g></svg> <svg style="float: right;" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 172 172" id="closebutton" onclick="window.resizeTo(1280,720); window.moveTo(((screen.width - 1280) / 2), ((screen.height - 720) / 2));"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M152.30533,32.08539c0.00008,-0.89107 -0.35387,-1.74567 -0.98396,-2.37575l-9.02664,-9.02664c-1.31191,-1.31189 -3.43892,-1.31189 -4.75083,0l-24.96587,24.96587l-0.37995,-10.87463c-0.03106,-0.89194 -0.41576,-1.73486 -1.06921,-2.34274c-0.65345,-0.60788 -1.52193,-0.93076 -2.41379,-0.89738l-12.62319,0.47266c-1.85294,0.0694 -3.29925,1.62698 -3.23138,3.47998l1.42438,39.0094c0.06431,1.75911 1.47562,3.17027 3.23474,3.23441l39.0057,1.42102c0.04166,0 0.08298,0.00235 0.12463,0.00235c1.80503,-0.00105 3.2866,-1.42832 3.35501,-3.23205l0.47602,-12.62016c0.03366,-0.89169 -0.28882,-1.76013 -0.8963,-2.41375c-0.60748,-0.65361 -1.45004,-1.03868 -2.34181,-1.07026l-10.89143,-0.38666l24.9699,-24.96956c0.63017,-0.63016 0.98413,-1.4849 0.98396,-2.37609zM116.14166,60.13852c-0.9455,0.94543 -1.2403,2.36156 -0.75064,3.60576c0.48966,1.2442 1.67055,2.07956 3.0068,2.12701l15.24216,0.54086l-0.22273,5.90309l-32.53185,-1.18552l-1.18821,-32.5342l5.9041,-0.22138l0.53179,15.23006c0.04606,1.33726 0.88131,2.51967 2.12627,3.01003c1.24496,0.49036 2.66222,0.19514 3.60784,-0.75152l28.05078,-28.05313l4.27682,4.27581zM20.67225,142.30548l9.02664,9.02698c0.63002,0.63009 1.48455,0.98408 2.37558,0.98408c0.89103,0 1.74557,-0.35399 2.37558,-0.98408l24.96251,-24.96284l0.37491,10.8622c0.03079,0.89236 0.41557,1.73575 1.06934,2.34388c0.65377,0.60814 1.52275,0.93099 2.415,0.89724l12.61916,-0.47703c1.85228,-0.07013 3.29773,-1.62727 3.23004,-3.47964l-1.42639,-39.01141c-0.06431,-1.75911 -1.47562,-3.17027 -3.23474,-3.23441l-39.00705,-1.42202c-0.04166,-0.00168 -0.08298,-0.00235 -0.12463,-0.00235c-1.80591,0.00129 -3.28767,1.43008 -3.35467,3.23474l-0.47031,12.62789c-0.03303,0.89106 0.28955,1.7587 0.89668,2.41177c0.60712,0.65306 1.44898,1.03796 2.34008,1.06989l10.90352,0.39137l-24.97124,24.97292c-1.31189,1.31191 -1.31189,3.43892 0,4.75083zM55.8523,111.87659c0.94516,-0.94533 1.2399,-2.36108 0.75051,-3.60506c-0.48938,-1.24398 -1.66974,-2.07943 -3.00566,-2.12738l-15.25156,-0.54758l0.21937,-5.9125l32.53152,1.1862l1.18955,32.5379l-5.89839,0.22273l-0.52507,-15.21797c-0.04605,-1.337 -0.88099,-2.51924 -2.12561,-3.00977c-1.24462,-0.49052 -2.66165,-0.19582 -3.6075,0.75025l-28.05481,28.05246l-4.27581,-4.27581z"></path></g></g></svg></div>';
headerthing = document.querySelector("#header");
headerthing.parentNode.insertBefore(wrapper, headerthing)
}