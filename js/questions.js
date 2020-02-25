const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      a: "<js>",
      b: "<script>",
      c: "<scripting>",
      d: "<javascript>"
    },
    correctAnswer: "b"
  },
  {
    question: "Why so JavaScript and Java have similar name?",
    answers: {
      a: "JavaScript is a stripped-down version of Java",
      b: "JavaScript's syntax is loosely based on Java's",
      c: "They both originated on the island of Java",
      d: "None of the above"
    },
    correctAnswer: "b"
  },

  {
    question:
      "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    answers: {
      a: "The User's machine running a Web browser",
      b: "The Web server",
      c: "A central machine deep within Netscape's corporate offices",
      d: "None of the above"
    },
    correctAnswer: "a"
  },

  {
    question: "______ JavaScript is also called client-side JavaScript.",
    answers: {
      a: "Microsoft",
      b: "Navigator",
      c: "LiveWire",
      d: "Native"
    },
    correctAnswer: "b"
  },

  {
    question: "__________ JavaScript is also called server-side JavaScript.",
    answers: {
      a: "Microsoft",
      b: "Navigator",
      c: "LiveWire",
      d: "Native"
    },
    correctAnswer: "c"
  },

  {
    question: "What are variables used for in JavaScript Programs?",
    answers: {
      a: "Storing numbers, dates, or other values",
      b: "Varying randomly",
      c: "Causing high-school algebra flashbacks",
      d: "None of the above"
    },
    correctAnswer: "a"
  },

  {
    question:
      "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
    answers: {
      a: "Client-side",
      b: "Server-side",
      c: "Local",
      d: "Native"
    },
    correctAnswer: "a"
  },

  {
    question:
      "Which of the following can't be done with client-side JavaScript?",
    answers: {
      a: "Validating a form",
      b: "Sending a form's contents by email",
      c: "Storing the form's contents to a database file on the server",
      d: "None of the above"
    },
    correctAnswer: "c"
  },

  {
    question:
      "Which of the following are capabilities of functions in JavaScript?",
    answers: {
      a: "Return a value",
      b: "Accept parameters and Return a value",
      c: "Accept parameters",
      d: "None of the above"
    },
    correctAnswer: "c"
  },

  {
    question: "Which of the following is not a valid JavaScript variable name?",
    answers: {
      a: "2names",
      b: "_first_and_last_names",
      c: "FirstAndLast",
      d: "None of the above"
    },
    correctAnswer: "a"
  },

  {
    question:
      "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    answers: {
      a: "<SCRIPT>",
      b: "<BODY>",
      c: "<HEAD>",
      d: "<TITLE>"
    },
    correctAnswer: "a"
  },

  {
    question: "How does JavaScript store dates in a date object?",
    answers: {
      a: "The number of milliseconds since January 1st, 1970",
      b: "The number of days since January 1st, 1900",
      c: "The number of seconds since Netscape's public stock offering.",
      d: "None of the above"
    },
    correctAnswer: "a"
  },

  {
    question:
      "Which of the following attribute can hold the JavaScript version?",
    answers: {
      a: "LANGUAGE",
      b: "SCRIPT",
      c: "VERSION",
      d: "None of the above"
    },
    correctAnswer: "a"
  },

  {
    question: "What is the correct JavaScript syntax to write 'Hello World'?",
    answers: {
      a: "System.out.println('Hello World')",
      b: "println ('Hello World')",
      c: "document.write('Hello World')",
      d: "response.write('Hello World')"
    },
    correctAnswer: "c"
  },

  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      a: "<js>",
      b: "<scripting>",
      c: "<script>",
      d: "<javascript>"
    },
    correctAnswer: "c"
  },

  {
    question:
      "What is the correct syntax for referring to an external script called ' abc.js'?",
    answers: {
      a: "<script href=' abc.js'>",
      b: "<script name=' abc.js'>",
      c: "<script src=' abc.js'>",
      d: "None of the above"
    },
    correctAnswer: "c"
  },

  {
    question: "Which types of image maps can be used with JavaScript?",
    answers: {
      a: "Server-side image maps",
      b: "Client-side image maps",
      c: "Server-side image maps and Client-side image maps",
      d: "None of the above"
    },
    correctAnswer: "b"
  },

  {
    question:
      "Which of the following navigator object properties is the same in both   Netscape and IE?",
    answers: {
      a: "navigator.appCodeName",
      b: "navigator.appName",
      c: "navigator.appVersion",
      d: "None of the above"
    },
    correctAnswer: "a"
  },

  {
    question: "Which is the correct way to write a JavaScript array?",
    answers: {
      a: "var txt = new Array(1:'tim',2:'kim',3:'jim')",
      b: "var txt = new Array:1=('tim')2=('kim')3=('jim')",
      c: "var txt = new Array('tim','kim','jim')",
      d: "var txt = new Array='tim','kim','jim'"
    },
    correctAnswer: "c"
  },

  {
    question: "What does the <noscript> tag do?",
    answers: {
      a: "Enclose text to be displayed by non-JavaScript browsers.",
      b: "Prevents scripts on the page from executing.",
      c: "Describes certain low-budget movies.",
      d: "None of the above"
    },
    correctAnswer: "a"
  },

  {
    question:
      "If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
    answers: {
      a: "'New Text'?",
      b: "para1.value='New Text';",
      c: "para1.firstChild.nodeValue= 'New Text';",
      d: "para1.nodeValue='New Text';"
    },
    correctAnswer: "b"
  },

  {
    question: "JavaScript entities start with _______ and end with _________.",
    answers: {
      a: "Semicolon, colon",
      b: "Semicolon, Ampersand",
      c: "Ampersand, colon",
      d: "Ampersand, semicolon"
    },
    correctAnswer: "d"
  },

  {
    question: "Which of the following best describes JavaScript?",
    answers: {
      a: "a low-level programming language.",
      b: "a scripting language precompiled in the browser.",
      c: "a compiled scripting language.",
      d: "an object-oriented scripting language."
    },
    correctAnswer: "d"
  },

  {
    question: "Choose the server-side JavaScript object?",
    answers: {
      a: "FileUpLoad",
      b: "Function",
      c: "File",
      d: "Date"
    },
    correctAnswer: "c"
  },

  {
    question: "Choose the client-side JavaScript object?",
    answers: {
      a: "Database",
      b: "Cursor",
      c: "Client",
      d: "FileUpLoad"
    },
    correctAnswer: "d"
  },

  {
    question: "Which of the following is not considered a JavaScript operator?",
    answers: {
      a: "new",
      b: "this",
      c: "delete",
      d: "typeof"
    },
    correctAnswer: "b"
  },

  {
    question:
      "______method evaluates a string of JavaScript code in the context of the specified object.",
    answers: {
      a: "Eval",
      b: "ParseInt",
      c: "ParseFloat",
      d: "Efloat"
    },
    correctAnswer: "a"
  },

  {
    question:
      "Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",
    answers: {
      a: "onfocus",
      b: "onblur",
      c: "onclick",
      d: "ondblclick"
    },
    correctAnswer: "b"
  },

  {
    question: "The syntax of Eval is ________________",
    answers: {
      a: "[objectName.]eval(numeriC.",
      b: "[objectName.]eval(string)",
      c: "[EvalName.]eval(string)",
      d: "[EvalName.]eval(numeriC."
    },
    correctAnswer: "b"
  },

  {
    question: "JavaScript is interpreted by _________",
    answers: {
      a: "Client",
      b: "Server",
      c: "Object",
      d: "None of the above"
    },
    correctAnswer: "a"
  },

  {
    question:
      "Using _______ statement is how you test for a specific condition.",
    answers: {
      a: "Select",
      b: "If",
      c: "Switch",
      d: "For"
    },
    correctAnswer: "b"
  },

  {
    question: "Which of the following is the structure of an if statement?",
    answers: {
      a: "if (conditional expression is true) thenexecute this codeend if",
      b: "if (conditional expression is true)execute this codeend if",
      c: "if (conditional expression is true)   {then execute this code>->}",
      d: "if (conditional expression is true) then {execute this code}"
    },
    correctAnswer: "c"
  },

  {
    question: "How to create a Date object in JavaScript?",
    answers: {
      a: "dateObjectName = new Date([parameters])",
      b: "dateObjectName.new Date([parameters])",
      c: "dateObjectName := new Date([parameters])",
      d: "dateObjectName Date([parameters])"
    },
    correctAnswer: "a"
  },

  {
    question:
      "The _______ method of an Array object adds and/or removes elements from an array.",
    answers: {
      a: "Reverse",
      b: "Shift",
      c: "Slice",
      d: "Splice"
    },
    correctAnswer: "d"
  },

  {
    question:
      "To set up the window to capture all Click events, we use which of the following statement?",
    answers: {
      a: "window.captureEvents(Event.CLICK);",
      b: "window.handleEvents (Event.CLICK);",
      c: "window.routeEvents(Event.CLICK );",
      d: "window.raiseEvents(Event.CLICK );"
    },
    correctAnswer: "a"
  },

  {
    question: "Which tag(s) can handle mouse events in Netscape?",
    answers: {
      a: "<IMG>",
      b: "<A>",
      c: "<BR>",
      d: "None of the above"
    },
    correctAnswer: "b"
  },

  {
    question: "____________ is the tainted property of a window object.",
    answers: {
      a: "Pathname",
      b: "Protocol",
      c: "Defaultstatus",
      d: "Host"
    },
    correctAnswer: "c"
  },

  {
    question:
      "To enable data tainting, the end user sets the _________ environment variable.",
    answers: {
      a: "ENABLE_TAINT",
      b: "MS_ENABLE_TAINT",
      c: "NS_ENABLE_TAINT",
      d: "ENABLE_TAINT_NS"
    },
    correctAnswer: "c"
  },

  {
    question:
      "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
    answers: {
      a: "a wrapper",
      b: "a link",
      c: "a cursor",
      d: "a form"
    },
    correctAnswer: "a"
  },

  {
    question:
      "When a JavaScript object is sent to Java, the runtime engine creates a Java wrapper of type ___________",
    answers: {
      a: "ScriptObject",
      b: "JSObject",
      c: "JavaObject",
      d: "Jobject"
    },
    correctAnswer: "b"
  },

  {
    question:
      "_______ class provides an interface for invoking JavaScript methods and examining JavaScript properties.",
    answers: {
      a: "ScriptObject",
      b: "JSObject",
      c: "JavaObject",
      d: "Jobject"
    },
    correctAnswer: "b"
  },

  {
    question:
      "_________ is a wrapped Java array, accessed from within JavaScript code.",
    answers: {
      a: "JavaArray",
      b: "JavaClass",
      c: "JavaObject",
      d: "JavaPackage"
    },
    correctAnswer: "a"
  },

  {
    question:
      "A ________ object is a reference to one of the classes in a Java package, such as netscape.javascript .",
    answers: {
      a: "JavaArray",
      b: "JavaClass",
      c: "JavaObject",
      d: "JavaPackage"
    },
    correctAnswer: "b"
  },

  {
    question:
      "The JavaScript exception is available to the Java code as an instance of __________",
    answers: {
      a: "netscape.javascript.JSObject",
      b: "netscape.javascript.JSException",
      c: "netscape.plugin.JSException",
      d: "None of the above"
    },
    correctAnswer: "b"
  },

  {
    question:
      "To automatically open the console when a JavaScript error occurs which of the following is added to prefs.js?",
    answers: {
      a: "user_pref('javascript.console.open_on_error', false);",
      b: "user_pref('javascript.console.open_error', true);",
      c: "user_pref('javascript.console.open_error', false);",
      d: "user_pref('javascript.console.open_on_error', true);"
    },
    correctAnswer: "d"
  },

  {
    question:
      "To open a dialog box each time an error occurs, which of the following is added to prefs.js?",
    answers: {
      a: "user_pref('javascript.classic.error_alerts', true);",
      b: "user_pref('javascript.classic.error_alerts', false);",
      c: "user_pref('javascript.console.open_on_error', true);",
      d: "user_pref('javascript.console.open_on_error', false);"
    },
    correctAnswer: "a"
  },

  {
    question:
      "The syntax of a blur method in a button object is ______________",
    answers: {
      a: "Blur()",
      b: "Blur(contrast)",
      c: "Blur(value)",
      d: "Blur(depth)"
    },
    correctAnswer: "a"
  },

  {
    question:
      "The syntax of capture events method for document object is ______________",
    answers: {
      a: "captureEvents()",
      b: "captureEvents(args eventType)",
      c: "captureEvents(eventType)",
      d: "captureEvents(eventVal)"
    },
    correctAnswer: "c"
  },

  {
    question:
      "The syntax of close method for document object is ______________",
    answers: {
      a: "Close(doC.",
      b: "Close(object)",
      c: "Close(val)",
      d: "Close()"
    },
    correctAnswer: "d"
  },

  {
    question: "Which best explains getSelection()?",
    answers: {
      a: "Returns the VALUE of a selected OPTION.",
      b: "Returns document.URL of the window in focus.",
      c: "Returns the value of cursor-selected text",
      d: "Returns the VALUE of a checked radio input."
    },
    correctAnswer: "c"
  },

  {
    question: "Choose the client-side JavaScript object:",
    answers: {
      a: "Database",
      b: "Cursor",
      c: "Client",
      d: "FileUpLoad"
    },
    correctAnswer: "d"
  },

  {
    question: "What is mean by 'this' keyword in javascript?",
    answers: {
      a: "It refers current object",
      b: "It referes previous object",
      c: "It is variable which contains value",
      d: "None of the above"
    },
    correctAnswer: "a"
  },

  {
    question:
      "What should appear at the very end of your JavaScript? The <script LANGUAGE='JavaScript'>tag",
    answers: {
      a: "The </script>",
      b: "The <script>",
      c: "The END statement",
      d: "None of the above"
    },
    correctAnswer: "a"
  },

  {
    question:
      "Which of the following way can be used to indicate the LANGUAGE attribute?",
    answers: {
      a: "<LANGUAGE='JavaScriptVersion'>",
      b: "<SCRIPT LANGUAGE='JavaScriptVersion'>",
      c:
        "<SCRIPT LANGUAGE='JavaScriptVersion'>    JavaScript statements…</SCRIPT>",
      d:
        "<SCRIPT LANGUAGE='JavaScriptVersion'!>    JavaScript statements…</SCRIPT>"
    },
    correctAnswer: "c"
  },

  {
    question:
      "<script type='text/javascript'> x=4+'4'; document.write(x); </script>",
    answers: {
      a: "44",
      b: "8",
      c: "4",
      d: "Error output"
    },
    correctAnswer: "a"
  },
  {
    question: "<script> document.write(navigator.appCodeName); </script>",
    answers: {
      a: "get code name of the browser of a visitor",
      b: "set code name of the browser of a visitor",
      c: "None of the above"
    },
    correctAnswer: "a"
  },

  {
    question: "Scripting language are",
    answers: {
      a: "High Level Programming language",
      b: "Assembly Level programming language",
      c: "Machine level programming language"
    },
    correctAnswer: "a"
  },
  {
    question: "Is it possible to nest functions in JavaScript?",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a"
  },

  {
    question:
      "In JavaScript, Window.prompt() method return true or false value ?",
    answers: {
      a: "False",
      b: "True"
    },
    correctAnswer: "a"
  }
];
