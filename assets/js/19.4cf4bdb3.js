(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{439:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[t._v("#")]),t._v(" function*")]),t._v(" "),s("p",[t._v("用 function *定义的函数称之为生成器函数，返回一个不能直接使用的 Generator 对象，但可以调用 next() 方法来使用。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 语法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" statements "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("生成器函数在执行时能暂停，后面又能从暂停处继续执行。")]),t._v(" "),s("p",[t._v("调用一个生成器函数并不会马上执行它里面的语句，而是返回一个这个生成器的 迭代器 （ iterator ）对象。当这个迭代器的 next() 方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现 yield 的位置为止，yield 后紧跟迭代器要返回的值。或者如果用的是 yield*（多了个星号），则表示将执行权移交给另一个生成器函数（当前生成器暂停执行）。")]),t._v(" "),s("p",[t._v("next()方法返回一个对象，这个对象包含两个属性：value 和 done，value 属性表示本次 yield 表达式的返回值，done 属性为布尔类型，表示生成器后续是否还有 yield 语句，即生成器函数是否已经执行完毕并返回。")]),t._v(" "),s("p",[t._v("调用 next()方法时，如果传入了参数，那么这个参数会传给上一条执行的 yield 语句左边的变量，例如下面例子中的 x：")]),t._v(" "),s("h2",{attrs:{id:"用例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用例"}},[t._v("#")]),t._v(" 用例")]),t._v(" "),s("h3",{attrs:{id:"生成斐波那契数列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成斐波那契数列"}},[t._v("#")]),t._v(" 生成斐波那契数列")]),t._v(" "),s("p",[t._v("题目：请你编写一个生成器函数，并返回一个可以生成 斐波那契数列 的生成器对象。")]),t._v(" "),s("p",[t._v("斐波那契数列 的递推公式为 Xn = Xn-1 + Xn-2 。")]),t._v(" "),s("p",[t._v("这个数列的前几个数字是 0, 1, 1, 2, 3, 5, 8, 13 。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 迭代法\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fibGenerator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pre "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" pre"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" pre "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pre"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pre "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 递归 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fibGenerator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pre "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  cur "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" pre"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fibGenerator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pre "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cur"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * const gen = fibGenerator();\n * gen.next().value; // 0\n * gen.next().value; // 1\n */")]),t._v("\n")])])]),s("h3",{attrs:{id:"嵌套生成器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#嵌套生成器"}},[t._v("#")]),t._v(" 嵌套生成器")]),t._v(" "),s("p",[t._v("题目：现给定一个整数的 多维数组 ，请你返回一个生成器对象，按照   中序遍历 的顺序逐个生成整数。")]),t._v(" "),s("p",[t._v("多维数组 是一个递归数据结构，包含整数和其他 多维数组。")]),t._v(" "),s("p",[t._v("中序遍历 是从左到右遍历每个数组，在遇到任何整数时生成它，遇到任何数组时递归应用 中序遍历")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("inorderTraversal")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inorderTraversal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * const gen = inorderTraversal([1, [2, 3]]);\n * gen.next().value; // 1\n * gen.next().value; // 2\n * gen.next().value; // 3\n */")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);