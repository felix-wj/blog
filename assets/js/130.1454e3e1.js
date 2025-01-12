(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{605:function(v,_,a){"use strict";a.r(_);var t=a(10),e=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("head tail more less cat")]),v._v(" "),_("h2",{attrs:{id:"cat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cat"}},[v._v("#")]),v._v(" cat")]),v._v(" "),_("p",[v._v("cat命令是最基本的文件查看命令，它会输出整个文件的内容。例如，"),_("code",[v._v("cat file.txt")]),v._v("会显示file.txt的全部内容。")]),v._v(" "),_("p",[v._v("如果文件比较大，使用不是很方便。")]),v._v(" "),_("p",[v._v("添加"),_("code",[v._v("-n")]),v._v("参数，可以显示行号。")]),v._v(" "),_("h2",{attrs:{id:"more"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#more"}},[v._v("#")]),v._v(" more")]),v._v(" "),_("p",[v._v("more 比 cat 功能更强大，会让日志分页显示，同时显示内容的百分比，更方便阅读。")]),v._v(" "),_("p",[v._v("最基本的指令就是按空白键（space）就往下一页显示，按 b 键就会往回（back）一页显示，而且还有搜寻字串的功能（只能用 / 向下搜索）。")]),v._v(" "),_("h3",{attrs:{id:"语法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[v._v("#")]),v._v(" 语法")]),v._v(" "),_("p",[_("code",[v._v("more [-dlfpcsu] [-num] [+/pattern] [+linenum] [fileNames..]")])]),v._v(" "),_("h3",{attrs:{id:"常用参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用参数"}},[v._v("#")]),v._v(" 常用参数")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("-num 一次显示的行数")])]),v._v(" "),_("li",[_("p",[v._v("+/pattern 在每个文档显示前搜寻该字串（pattern），然后从该字串前两行开始显示")])]),v._v(" "),_("li",[_("p",[v._v('/字符串：向下搜索"字符串"的功能')])]),v._v(" "),_("li",[_("p",[v._v("+num 从第 num 行开始显示")])]),v._v(" "),_("li",[_("p",[v._v("fileNames 欲显示内容的文档，可以是多个文件")])])]),v._v(" "),_("h3",{attrs:{id:"常用操作命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用操作命令"}},[v._v("#")]),v._v(" 常用操作命令")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Enter   向下n行，需要定义。默认为1行")])]),v._v(" "),_("li",[_("p",[v._v("空格键   向下滚动一屏")])]),v._v(" "),_("li",[_("p",[v._v("b 向上滚动一屏")])]),v._v(" "),_("li",[_("p",[v._v("= 输出当前行的行号")])]),v._v(" "),_("li",[_("p",[v._v(":f 输出文件名和当前行的行号")])]),v._v(" "),_("li",[_("p",[v._v("V  调用vi编辑器")])]),v._v(" "),_("li",[_("p",[v._v("!命令 调用Shell，并执行命令")])])]),v._v(" "),_("h2",{attrs:{id:"less"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#less"}},[v._v("#")]),v._v(" less")]),v._v(" "),_("p",[v._v("less 与 more 类似，less 的用法比起 more 更加的有弹性。而且拥有更多的搜索功能，不止可以向下搜，也可以向上搜，跟vi中的搜索功能更相似。")]),v._v(" "),_("h3",{attrs:{id:"语法-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#语法-2"}},[v._v("#")]),v._v(" 语法：")]),v._v(" "),_("p",[_("code",[v._v("less [参数] [fileNames...]")])]),v._v(" "),_("h3",{attrs:{id:"常用参数-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用参数-2"}},[v._v("#")]),v._v(" 常用参数：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("+num 从第 num 行开始显示")])]),v._v(" "),_("li",[_("p",[v._v("-f 强迫打开特殊文件，例如外围设备代号、目录和二进制文件")])]),v._v(" "),_("li",[_("p",[v._v("-i 忽略搜索时的大小写")])]),v._v(" "),_("li",[_("p",[v._v("-m 显示类似more命令的百分比")])]),v._v(" "),_("li",[_("p",[v._v("-M 显示读取文件的百分比、行号及总行数")])]),v._v(" "),_("li",[_("p",[v._v("-N 在每行前显示行号")])]),v._v(" "),_("li",[_("p",[v._v('/字符串：向下搜索"字符串"的功能')])]),v._v(" "),_("li",[_("p",[v._v('?字符串：向上搜索"字符串"的功能')])]),v._v(" "),_("li",[_("p",[v._v("n：重复前一个搜索（与 / 或 ? 有关）")])]),v._v(" "),_("li",[_("p",[v._v("N：反向重复前一个搜索（与 / 或 ? 有关）")])]),v._v(" "),_("li",[_("p",[v._v("&pattern - 仅显示匹配模式的行，而不是整个文件")])]),v._v(" "),_("li",[_("p",[v._v("G 移动到最后一行")])]),v._v(" "),_("li",[_("p",[v._v("g 移动到第一行")])]),v._v(" "),_("li",[_("p",[v._v("v - 使用配置的编辑器编辑当前文件")])]),v._v(" "),_("li",[_("p",[v._v("F 读取写入文件的最新内容， 按 ctrl+C 停止。")])]),v._v(" "),_("li",[_("p",[v._v("空格键 向下滚动一屏")])])]),v._v(" "),_("h3",{attrs:{id:"实例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[v._v("#")]),v._v(" 实例")]),v._v(" "),_("ul",[_("li",[v._v("ps查看进程信息并通过less分页显示同时显示行号：")])]),v._v(" "),_("p",[_("code",[v._v("ps -ef | less -N")])]),v._v(" "),_("ul",[_("li",[v._v("查看命令历史使用记录并通过less分页显示：")])]),v._v(" "),_("p",[_("code",[v._v("history | less")])]),v._v(" "),_("h2",{attrs:{id:"tail"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tail"}},[v._v("#")]),v._v(" tail")]),v._v(" "),_("p",[v._v("tail 用来显示文件的最后几行内容，当文件内容有更新时，tail会自己主动刷新，确保一直显示最新的文件内容。")]),v._v(" "),_("h3",{attrs:{id:"命令语法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令语法"}},[v._v("#")]),v._v(" 命令语法")]),v._v(" "),_("p",[_("code",[v._v("tail [ -f ] [ -c Number | -n Number | -m Number | -b Number | -k Number ] [ File ]")])]),v._v(" "),_("h3",{attrs:{id:"常用参数-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用参数-3"}},[v._v("#")]),v._v(" 常用参数：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("-f 监视File文件增长，动态刷新文件")])]),v._v(" "),_("li",[_("p",[v._v("-n Number 从倒数Number行位置读取指定文件")])]),v._v(" "),_("li",[_("p",[v._v("-c Number 从倒数Number字节数位置读取指定文件")])])]),v._v(" "),_("h3",{attrs:{id:"实例-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实例-2"}},[v._v("#")]),v._v(" 实例")]),v._v(" "),_("p",[v._v("1.指定文件动态刷新的行数：")]),v._v(" "),_("p",[_("code",[v._v("tail -50f filename")])]),v._v(" "),_("p",[v._v("显示最后50行文件内容，并动态刷新，每次刷新50行。")]),v._v(" "),_("h2",{attrs:{id:"head"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[v._v("#")]),v._v(" head")]),v._v(" "),_("p",[v._v("head 用来显示文件的前面几行内容，可以指定行数和字节数。")]),v._v(" "),_("h3",{attrs:{id:"命令语法-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令语法-2"}},[v._v("#")]),v._v(" 命令语法")]),v._v(" "),_("p",[_("code",[v._v("tail [-v | -c Number | -n Number] [ File ]")])]),v._v(" "),_("h3",{attrs:{id:"常用参数-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用参数-4"}},[v._v("#")]),v._v(" 常用参数：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("-v 在输出内容前面显示文件名")])]),v._v(" "),_("li",[_("p",[v._v("-n Number 显示文件的前面Number行内容")])]),v._v(" "),_("li",[_("p",[v._v("-c Number 显示文件的前面Number字节内容")])])]),v._v(" "),_("h3",{attrs:{id:"实例-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实例-3"}},[v._v("#")]),v._v(" 实例")]),v._v(" "),_("ol",[_("li",[v._v("显示前5行，并显示文件名")])]),v._v(" "),_("p",[_("code",[v._v("head -vn 5 head.txt")])])])}),[],!1,null,null,null);_.default=e.exports}}]);