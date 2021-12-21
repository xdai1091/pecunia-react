import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Strong, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
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
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Pecunia 中国
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0px 60px 0px">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="24px 0px 16px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					lg-width="100%"
				>
					初创团队企业费用报销这件事不能再拖了！
				</Text>
				<Text
					margin="0px 0px 48px 0px"
					color="--greyD3"
					font="--lead"
					lg-text-align="center"
					lg-width="100%"
				>
					初创团队没有心思搞报销。小额支出，懒得报；大额支出，忘记报。积少成多，不仅错过大量税收减免，亦没有形成一套完整的运营流水！可惜啊！可惜！
				</Text>
				<Box
					display="flex"
					align-items="flex-start"
					margin="0px 0px 32px 0px"
					lg-width="50%"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 16px 0px 0px"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 0px 0px"
						font="--headline3"
						background="--color-orange"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
					>
						1
					</Text>
					<Box margin="0px 0px 0px 22px">
						<Text margin="0px 0px 8px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
							专为初创公司打造的智能企业借记卡
						</Text>
						<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
							不再操心繁琐的员工费用报销流程：员工使用Pecunia借记卡消费，不占员工征信，不管是刷1块钱还是10万块，每笔消费自动从Pecunia企业账户中扣除，管治团队实时收到消费提醒，月底一键导出消费清单。
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					align-items="flex-start"
					lg-width="50%"
					lg-padding="0px 0px 0px 16px"
					md-width="100%"
					md-padding="0px 0px 0px 0px"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 0px 0px"
						font="--headline3"
						background="--color-orange"
						border-radius="50px"
						display="flex"
						align-items="center"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
					>
						2
					</Text>
					<Box margin="0px 0px 0px 22px">
						<Text margin="0px 0px 8px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
							报销这件事，不能滞后！不能被动！
						</Text>
						<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
							月底不会再有“怎么这个月花了这么多？”的惊吓！员工刷卡消费前先向上级申请“额度”。企业从“被动”变“主动”。在企业 Budget 这件事上，我们全面主动！
						</Text>
					</Box>
				</Box>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--light"
					font="--lead"
					hover-opacity="0.9"
					background="--color-orange"
					border-radius="8px"
					padding="11px 24px 12px 24px"
					position="relative"
					top="50px"
					width="300px"
					text-align="center"
					sm-position="relative"
					sm-bottom="-50px"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						display="inline-block"
					>
						现在申请免费试用
					</Strong>
				</Link>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="flex-end"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
				padding="0px 0px 0px 16px"
				align-items="center"
				lg-justify-content="center"
				lg-padding="0px 0px 0px 0px"
			>
				<Image src="https://uploads.quarkly.io/61c0f520f6137a001eb33159/images/final_card.png?v=2021-12-20T22:27:00.965Z" display="block" sm-padding="50px 0px 0px 0px" />
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Text margin="0px 0px 0px 0px" font="--headline2" padding="0px 0px 50px 0px">
				持卡人如何使用Pecunia?
			</Text>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="24px 4%" md-grid-template-columns="1fr">
				<Box
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					border-width={0}
					width="353px"
				>
					<Image src="https://images.unsplash.com/photo-1616077167555-51f6bc516dfa?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" display="block" position="relative" />
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						申请额度
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						向分管领导申请“消费额度”
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Image src="https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" display="block" width="353px" />
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						刷卡消费
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						使用实体卡、Apple Pay进行刷卡消费。支持银联、 维萨和万事达通道。
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex" width="353px">
					<Image src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" display="block" />
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						搞定了
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						上级实时接收到刷卡通知！不用再向领导报备了！老板会计笑哈哈，省税效果顶呱呱！
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				padding="0px 160px 0px 0px"
				border-radius="24px"
				margin="0px 0px 0px 0px"
				width="60%"
				lg-padding="0px 50px 0px 0px"
				lg-width="50%"
				md-width="100%"
				md-padding="0px 0px 0px 0px"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				md-margin="0px 0px 60px 0px"
				md-align-items="center"
			>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--dark"
					md-text-align="center"
					sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					为具有“前瞻性思维”的初创公司设计的“商业支出解决方案”
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					font="--base"
					color="--greyD3"
					md-text-align="center"
					md-margin="0px 0px 20px 0px"
				>
					一、传统报销流程太费时间、太费团队精力
					<br />
					二、“先垫付、后报销”的程序让公司在控制商业支出上处于实际被动地位
					<br />
					三、员工企业信用卡还需调取员工征信，员工真的不愿意
				</Text>
			</Box>
			<Box
				display="flex"
				lg-flex-wrap="wrap"
				width="40%"
				flex-direction="column"
				lg-width="50%"
				md-width="100%"
			>
				<Box
					width="100%"
					display="flex"
					flex-direction="row"
					margin="0px 0px 40px 0px"
					lg-margin="0px 4% 15px 0px"
					sm-width="100%"
					sm-margin="0px 0px 30px 0px"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 30px 0px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--darkL2"
						width="49px"
						height="49px"
						background="--color-lightD1"
						sm-margin="0px 14px 0px 0px"
					>
						1
					</Text>
					<Box>
						<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
							赋能团队
						</Text>
						<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
							员工为公司付钱时不应充满担心和疑虑：“这钱什么时候拿得回来？”， “会计会不会报账时给脸色？
							<br />
							<br />
							刷卡直接从Pecunia企业账户扣钱，员工不再垫付、打消员工顾虑。企业专属Pecunia卡也是一张企业名片，也让员工充满归属感。
							<br />
						</Text>
					</Box>
				</Box>
				<Box
					width="100%"
					display="flex"
					flex-direction="row"
					margin="0px 0px 40px 0px"
					lg-margin="0px 4% 15px 0px"
					sm-width="100%"
					sm-margin="0px 0px 30px 0px"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 30px 0px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--darkL2"
						width="49px"
						height="49px"
						background="--color-lightD1"
						sm-margin="0px 14px 0px 0px"
					>
						2
					</Text>
					<Box>
						<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
							帮助管治团队更好掌握公司的商业支出
						</Text>
						<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
							通过Pecunia, 财会部门更好的提前分配各部门消费额度，各部门的领导再拨付额度到员工，从而实现全面主动的掌握公司的商业支出。
						</Text>
					</Box>
				</Box>
				<Box
					width="100%"
					display="flex"
					flex-direction="row"
					margin="0px 0px 40px 0px"
					lg-margin="0px 4% 15px 0px"
					sm-width="100%"
					sm-margin="0px 0px 30px 0px"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 30px 0px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--darkL2"
						width="49px"
						height="49px"
						background="--color-lightD1"
						sm-margin="0px 14px 0px 0px"
					>
						3
					</Text>
					<Box>
						<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
							零年费，零成本
						</Text>
						<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
							Pecunia企业借记卡0年费！为什么还要犹豫？
							<br />
							<br />
							*我们亦提供“尊享卡”，持卡人可进入全国主要机场、高铁站贵宾室
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-darkL1" padding="80px 0 80px 0">
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 30px 0px"
					font="--headline1"
					color="--light"
					text-align="center"
					sm-font="normal 700 62px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					和我们取得联系
				</Text>
				<Text margin="0px 0px 48px 0px" font="--lead" color="--light" text-align="center">
					我们欢迎企业申请免费试用Pecunia企业借记卡，请点击顶部的“申请试用”按钮填写表单，我们会有专人与您联系。因前期我们收到了大量申请，您可能需要等待约4～6周。
				</Text>
			</Box>
		</Section>
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
			<style place={"endOfHead"} rawKey={"61c0f520f6137a001eb33157"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});