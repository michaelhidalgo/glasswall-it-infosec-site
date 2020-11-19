(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return g})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return w}));var a=n(3),r=n(8),i=n(0),s=n.n(i),o=n(115),l=n(127),u=n(117),c=n(67),p=n.n(c),d=37,b=39;var f=function(e){var t=e.lazy,n=e.block,a=e.children,r=e.defaultValue,o=e.values,c=e.groupId,f=e.className,m=Object(l.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,O=Object(i.useState)(r),y=O[0],w=O[1];if(null!=c){var v=h[c];null!=v&&v!==y&&o.some((function(e){return e.value===v}))&&w(v)}var j=function(e){w(e),null!=c&&g(c,e)},T=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":n},f)},o.map((function(e){var t=e.value,n=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(u.a)("tabs__item",p.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e)},onFocus:function(){return j(t)},onClick:function(){j(t)}},n)}))),t?Object(i.cloneElement)(a.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},a.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))};var m=function(e){var t=e.children,n=e.hidden,r=e.className;return s.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)},h={title:"Quickstart - Rebuild",sidebar_label:"Quickstart"},g={unversionedId:"products/rebuild-api/quickstart-rebuild",id:"products/rebuild-api/quickstart-rebuild",isDocsHomePage:!1,title:"Quickstart - Rebuild",description:"This page can be used as a guide to getting started using the Rebuild API. It describes getting the product key and executing a request to the API.",source:"@site/docs/products/rebuild-api/quickstart-rebuild.md",slug:"/products/rebuild-api/quickstart-rebuild",permalink:"/docs/products/rebuild-api/quickstart-rebuild",version:"current",sidebar_label:"Quickstart"},O=[],y={rightToc:O};function w(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},y,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page can be used as a guide to getting started using the Rebuild API. It describes getting the product key and executing a request to the API."),Object(o.b)("p",null,"Just want to call the API?"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://app.getpostman.com/run-collection/dc8ba5f0a4ecfa29ad12"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"})))),Object(o.b)("div",null,Object(o.b)("h2",null,"Get Token"),Object(o.b)("p",null,"A token is required to access the Glasswlal Rebuild API, one can be purchased ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://glasswall-store.com/products/glasswall-rebuild-cloud-in-shared-cloud-environment?variant=33476559274124"}),"here")),Object(o.b)("h2",null,"Http Code - Rebuild File"),Object(o.b)("p",null,"In the following examples choose a language to get started with using the endpoints programmatically."),Object(o.b)("p",null,"A known good file for executing the request can be downloaded  ",Object(o.b)("a",{href:"/examples/Rebuild_Example_Image_That_Rebuilds.bmp",download:!0},"here")),Object(o.b)("h3",null,"Code Examples"),Object(o.b)(f,{defaultValue:"nodejs",values:[{label:"NodeJs",value:"nodejs"},{label:"Python",value:"py"},{label:"C#",value:"c#"}],mdxType:"Tabs"},Object(o.b)(m,{value:"nodejs",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// This Javascript snippet makes use of the request library\n// Get it with npm: "npm install request" or read the docs:\n// https://www.npmjs.com/package/request\n\nconst request = require("request");\nconst fs = require("fs");\n\nconst jwtToken = "YOUR_JWT_TOKEN";\nconst url = "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file";\nconst inputFilePath = "YOUR/INPUT/FILE.docx";\nconst outputFilePath = "YOUR/INPUT/FILE.docx"\n\nconst options = {\n    "encoding": null,\n    "method": "POST",\n    "url": url,\n    "headers": {\n        "Authorization": jwtToken,\n        \'Accept\': \'application/octet-stream\'\n    },\n    formData: {\n        "file": {\n            "value": fs.createReadStream(inputFilePath),\n            "options": {\n                "filename": "/" + inputFilePath,\n                "contentType": null\n            }\n        }\n    }\n}\n\n// Send a file to Glasswall\'s Rebuild API\n// callback passed to request library\nrequest(options, function (error, res) {\n  if (error) throw new Error(error);\n  if (!(res.statusCode == 200 && res.body)) return;    \n\n  // Glasswall has now sanitised and returned this file\n  let data = res.body\n  let buf = Buffer.from(data);\n\n  // Write the sanitised file to the output file path\n  let file = fs.createWriteStream(outputFilePath);\n  file.write(buf);\n  file.end();\n});\n\n'))),Object(o.b)(m,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'# This Python snippet makes use of the requests library\n# Get it with pip: "pip install requests" or read the docs:\n# https://requests.readthedocs.io/en/master/user/install/\n\nimport os\nimport requests\n\njwt_token = "YOUR_JWT_TOKEN"\nurl = "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file"\ninput_file_path = r"YOUR/INPUT/FILE.docx"\noutput_file_path = r"YOUR/OUTPUT/FILE.docx"\n\n# Send a file to Glasswall\'s Rebuild API\nwith open(input_file_path, "rb") as f:\n    response = requests.post(\n        url=url,\n        files=[("file", f)],\n        headers={\n            "Authorization": jwt_token,\n            "accept": "application/octet-stream"\n        }\n    )\n\nif response.status_code == 200 and response.content:\n    # Glasswall has now sanitised and returned this file\n    # Create output directory if it does not already exist\n    os.makedirs(os.path.dirname(output_file_path), exist_ok=True)\n    # Write the sanitised file to output file path\n    with open(output_file_path, "wb") as f:\n        f.write(response.content)\n    print("Successfully wrote file to:", os.path.abspath(output_file_path))\nelse:\n    # An error occurred, raise it\n    response.raise_for_status()\n'))),Object(o.b)(m,{value:"c#",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'using System;\nusing System.Globalization;\nusing System.IO;\nusing System.Net;\nusing System.Net.Http;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nnamespace RebuildFile\n{\n    class Program\n    {\n        public static void Main()\n        {\n            MainAsync().GetAwaiter().GetResult();\n        }\n\n        static async Task MainAsync()\n        {\n            const string jwtToken = "YOUR_JWT_TOKEN";\n            const string url = "https://gzlhbtpvk2.execute-api.eu-west-1.amazonaws.com/Prod/api/rebuild/file";\n            const string inputFilePath = @"YOUR/INPUT/FILE.docx";\n            const string outputFilePath = @"YOUR/OUTPUT/FILE.docx";\n\n            var request = new HttpRequestMessage(HttpMethod.Post, url);\n            request.Headers.Add("Accept", "application/octet-stream");\n            request.Headers.Add("Authorization", jwtToken);\n\n            request.Content = new MultipartFormDataContent("Boundary----" + DateTime.Now.ToString(CultureInfo.InvariantCulture))\n            {\n                {new ByteArrayContent(File.ReadAllBytes(inputFilePath)), "file", "/" + inputFilePath}\n            };\n\n            using (var client = new HttpClient())\n            {\n                // Send a file to Glasswall\'s Rebuild API\n                using (var message = await client.SendAsync(request, CancellationToken.None))\n                {\n                    if (message.StatusCode == HttpStatusCode.OK && message.Content != null)\n                    {\n                        // Glasswall has now sanitised and returned this file\n                        var rebuiltFile = await message.Content.ReadAsByteArrayAsync();\n\n                        // Write the sanitised file to output file path\n                        File.WriteAllBytes(outputFilePath, rebuiltFile);\n                    }\n                }\n            }\n        }\n    }\n}\n'))))),Object(o.b)("p",null,"In the next documents, there will be information surrounding how the API works, how to configure requests and alternative endpoints to use."))}w.isMDXComponent=!0},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=a,f=p["".concat(s,".").concat(b)]||p[b]||d[b]||i;return n?r.a.createElement(f,o(o({ref:t},u),{},{components:n})):r.a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},117:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},127:function(e,t,n){"use strict";var a=n(0),r=n(128);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},128:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r}}]);