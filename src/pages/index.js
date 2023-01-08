import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.PelcroBasic />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"63bb2d5af63de4002672dd8f"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<script
				async={false}
				src={"https://js.pelcro.com/sdk/main.min.js"}
				type={""}
				place={"endOfHead"}
				rawKey={"63bb2eab557d32a2ec50d0cf"}
			>
				{"  var Pelcro = window.Pelcro || (window.Pelcro = {});\n  Pelcro.siteid = 2024;\n  Pelcro.environment = {};\n  Pelcro.environment.stripe = \"pk_live_Wdef2LjEQXsgFWult6IVFobB\"\n  Pelcro.environment.domain = \"https://www.pelcro.com\";\n  Pelcro.environment.ui = \" \"\n    document.addEventListener(\"PelcroUserRegister\", function(e,n) {\n          window.Pelcro.user.update({display_name: `mtlbloguser${e?.detail.data.id}`,auth_token:e?.detail.data.auth_token},(e,n)=>console.log(e,n));\n       });"}
			</script>
		</RawHtml>
	</Theme>;
});