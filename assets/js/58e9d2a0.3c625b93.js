"use strict";(self.webpackChunktdgdp_docs=self.webpackChunktdgdp_docs||[]).push([[64],{2613:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),r=["components"],o={sidebar_position:1},l="Parse an entity",c={unversionedId:"cli-basics/parse-a-entity",id:"cli-basics/parse-a-entity",isDocsHomePage:!1,title:"Parse an entity",description:"Parsing an entity is the core of the cli experience.",source:"@site/docs/cli-basics/parse-a-entity.md",sourceDirName:"cli-basics",slug:"/cli-basics/parse-a-entity",permalink:"/TDGDP/docs/cli-basics/parse-a-entity",editUrl:"https://github.com/teyvat-dev/TDGDP/edit/main/docs/docs/cli-basics/parse-a-entity.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/TDGDP/docs/intro"},next:{title:"Clean your environment",permalink:"/TDGDP/docs/cli-basics/clean-your-environment"}},p=[{value:"Examples",id:"examples",children:[],level:3},{value:"Default config",id:"default-config",children:[],level:3}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"parse-an-entity"},"Parse an entity"),(0,s.kt)("p",null,"Parsing an entity is the core of the cli experience."),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("p",null,"Parsing weapons with default settings"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yarn ts-node cli.ts parse weapon\n")),(0,s.kt)("p",null,"Parse weapons with custom output folder"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'yarn ts-node cli.ts parse weapon --config="{\\"exportPath\\":\\"./out\\"}"\n')),(0,s.kt)("h3",{id:"default-config"},"Default config"),(0,s.kt)("p",null,"All parser calls start with the default configuration."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n  skipLocal: false, // For future use of \"downloadless\" mode\n  language: \"EN\", // The language to be used when parsing options [CHS, CHT, DE, EN, ES, FR, ID, JP, KR, PT, RU, TH, VI]\n  exportPath: './parsed' // The base export path (relative to where the cli is called),\n  exportType: 'local/raw', // The export type, see (exporting/types) for more\n};\n")))}d.isMDXComponent=!0}}]);