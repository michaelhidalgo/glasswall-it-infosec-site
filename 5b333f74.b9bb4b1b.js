(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(108)),i={title:"Injection Attacks",sidebar_label:"Injection Attacks"},s={unversionedId:"security_awareness/languages/Python/InjectionAttacks",id:"security_awareness/languages/Python/InjectionAttacks",isDocsHomePage:!1,title:"Injection Attacks",description:"Description",source:"@site/docs/security_awareness/languages/Python/InjectionAttacks.md",slug:"/security_awareness/languages/Python/InjectionAttacks",permalink:"/docs/security_awareness/languages/Python/InjectionAttacks",version:"current",sidebar_label:"Injection Attacks"},c=[{value:"Description",id:"description",children:[]},{value:"Vulnerable Code Example",id:"vulnerable-code-example",children:[]},{value:"Mitigation",id:"mitigation",children:[]},{value:"Risk Assessment",id:"risk-assessment",children:[]},{value:"References",id:"references",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"User provided data, such as URL parameters, should always be considered untrusted and tainted. Constructing SQL or SQL-like queries directly from tainted data enables attackers to inject specially crafted values that change the initial meaning of the query itself. Successful database query injection attacks can read, modify, or delete sensitive information from the database and sometimes even shut it down or execute arbitrary operating system commands."),Object(o.b)("p",null,"Typically, the solution is to rely on prepared statements rather than string concatenation, which ensures that user provided data will be properly escaped. Also, the use of database ORMs is generally safe as most implementations rely on prepared statements."),Object(o.b)("p",null,"An other solution is to validate every parameter used to build the query. This can be achieved by transforming string values to primitive types or by validating them against a white list of accepted values."),Object(o.b)("p",null,"This rule supports: sqlite3, mysql, pymysql, psycopg2, pgdb, Django ORM and Flask-SQLAlchemy."),Object(o.b)("h2",{id:"vulnerable-code-example"},"Vulnerable Code Example"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Flask application")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from flask import request\nfrom flask_sqlalchemy import SQLAlchemy\nfrom sqlalchemy import text\nfrom database.users import User\n\n@app.route(\'hello\')\ndef hello():\n    id = request.args.get("id")\n    stmt = text("SELECT * FROM users where id=%s" % id) # Query is constructed based on user inputs\n    query = SQLAlchemy().session.query(User).from_statement(stmt) # Noncompliant\n    user = query.one()\n    return "Hello %s" % user.username\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Django application")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from django.http import HttpResponse\nfrom django.db import connection\n\ndef hello(request):\n    id = request.GET.get("id", "")\n    cursor = connection.cursor()\n    cursor.execute("SELECT username FROM auth_user WHERE id=%s" % id) # Noncompliant; Query is constructed based on user inputs\n    row = cursor.fetchone()\n    return HttpResponse("Hello %s" % row[0])\n')),Object(o.b)("h2",{id:"mitigation"},"Mitigation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Flask application")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from flask import request\nfrom flask_sqlalchemy import SQLAlchemy\nfrom sqlalchemy import text\nfrom database.users import User\n\n@app.route(\'hello\')\ndef hello():\n    id = request.args.get("id")\n    stmt = text("SELECT * FROM users where id=:id")\n    query = SQLAlchemy().session.query(User).from_statement(stmt).params(id=id) # Compliant\n    user = query.one()\n    return "Hello %s" % user.username\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Django application")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from django.http import HttpResponse\nfrom django.db import connection\n\ndef hello(request):\n    id = request.GET.get("id", "")\n    cursor = connection.cursor()\n    cursor.execute("SELECT username FROM auth_user WHERE id=:id", {"id": id}) # Compliant\n    row = cursor.fetchone()\n    return HttpResponse("Hello %s" % row[0])\n')),Object(o.b)("h2",{id:"risk-assessment"},"Risk Assessment"),Object(o.b)("p",null,"Injection flaws are very prevalent, particularly in legacy code. Injection vulnerabilities are often ound\nin SQL, LDAP, XPath, or NoSQL queries, OS commands, XML parsers, SMTP headers, expression languages, and ORM queries.\nInjection flaws are easy to discover when examining code. Scanners and fuzzers can help attackers find injection flaws."),Object(o.b)("h2",{id:"references"},"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://owasp.org/www-project-top-ten/2017/A1_2017-Injection.html"}),"A1:2017-Injection")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/89"}),"CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/564.html"}),"CWE-564: SQL Injection: Hibernate")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/20.html"}),"CWE-20: Improper Input Validation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/943.html"}),"CWE-943: Improper Neutralization of Special Elements in Data Query Logic"))))}u.isMDXComponent=!0}}]);