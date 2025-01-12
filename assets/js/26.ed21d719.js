(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{501:function(a,s,t){"use strict";t.r(s);var n=t(10),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("blockquote",[s("p",[a._v("译文，"),s("a",{attrs:{href:"https://www.baeldung.com/java-thread-local-random",target:"_blank",rel:"noopener noreferrer"}},[a._v("跳转原文"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),s("p",[a._v("生成随机数是一种非常常见的任务。这也是"),s("code",[a._v("Java")]),a._v("提供"),s("code",[a._v("Random")]),a._v("类的原因。")]),a._v(" "),s("p",[a._v("然而"),s("code",[a._v("Random")]),a._v("在多线程环境中性能不高。")]),a._v(" "),s("p",[a._v("简单来说，性能不高的原因是，多个线程共享了一个"),s("code",[a._v("Random")]),a._v("实例。")]),a._v(" "),s("p",[a._v("为了解决这个问题，"),s("code",[a._v("JDK7")]),a._v("中引入了"),s("code",[a._v("ThreadLocalRandom")]),a._v("，用于在多线程环境生成随机数。")]),a._v(" "),s("h1",{attrs:{id:"threadlocalrandom优于random"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threadlocalrandom优于random"}},[a._v("#")]),a._v(" "),s("code",[a._v("ThreadLocalRandom")]),a._v("优于"),s("code",[a._v("Random")])]),a._v(" "),s("p",[s("code",[a._v("ThreadLocalRandom")]),a._v("由"),s("code",[a._v("ThreadLocal")]),a._v("和"),s("code",[a._v("Random")]),a._v("组成，并隔离在线程中。因此，它通过避免对"),s("code",[a._v("Random")]),a._v("实例的任何并发访问来在并发环境中提供更好性能。")]),a._v(" "),s("p",[a._v("一个线程获得的随机数不受另一个线程影响。然而，"),s("code",[a._v("Random")]),a._v("提供的是全局随机数。")]),a._v(" "),s("p",[a._v("不同于"),s("code",[a._v("Random")]),a._v("，"),s("code",[a._v("ThreadLocalRandom")]),a._v("不支持直接设置随机数种子。它重写了"),s("code",[a._v("Random")]),a._v("的"),s("code",[a._v("setSeed")]),a._v("方法，调用该方法会抛出"),s("code",[a._v("UnsupportedOperationException")]),a._v("异常。")]),a._v(" "),s("h2",{attrs:{id:"线程争用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程争用"}},[a._v("#")]),a._v(" 线程争用")]),a._v(" "),s("p",[a._v("现在，我们已经知道了"),s("code",[a._v("Random")]),a._v("在高并发环境中表现不佳。为了更好理解，我们来看看它的一个常用方法"),s("code",[a._v("next(int)")]),a._v("的实现：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AtomicLong")]),a._v(" seed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" bits"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("long")]),a._v(" oldseed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" nextseed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AtomicLong")]),a._v(" seed "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("seed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    oldseed "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" seed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    nextseed "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("oldseed "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" multiplier "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" addend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" mask"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("seed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("compareAndSet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("oldseed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" nextseed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("nextseed "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("48")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" bits"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[a._v("该方法使用了线性同余算法，可以明显看到，所有线程共享种子变量。")]),a._v(" "),s("p",[a._v("为了生生下一组随机数，它首先尝试通过"),s("code",[a._v("compareAndSet")]),a._v(" 或简称"),s("code",[a._v("CAS")]),a._v("以原子方式更改共享种子值。")]),a._v(" "),s("p",[a._v("当多线程使用"),s("code",[a._v("CAS")]),a._v("更新种子值，一个线程成功更新，其他线程失败。其他线程不断重试直到更新种子并生成随机数。")]),a._v(" "),s("p",[a._v("算法是无锁的，不同线程可以同时执行。但是，当并发度较高时，"),s("code",[a._v("CAS")]),a._v("失败和重试次数会显著降低整体性能。")]),a._v(" "),s("p",[a._v("另一方面，"),s("code",[a._v("ThreadLocalRandom")]),a._v("则完全避免了竞争，因为每一个线程有单独的随机数发生器和种子。")]),a._v(" "),s("p",[a._v("下面让我们看看一些生成随机数"),s("code",[a._v("int")]),a._v("、"),s("code",[a._v("double")]),a._v("、"),s("code",[a._v("long")]),a._v("值的方法。")]),a._v(" "),s("h2",{attrs:{id:"使用threadlocalrandom生成随机数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用threadlocalrandom生成随机数"}},[a._v("#")]),a._v(" 使用"),s("code",[a._v("ThreadLocalRandom")]),a._v("生成随机数")]),a._v(" "),s("p",[a._v("根据"),s("code",[a._v("Oracle")]),a._v("文档描述，我们只需要调用"),s("code",[a._v("ThreadLocalRandom.current()")]),a._v("方法，即可获得当前线程的"),s("code",[a._v("ThreadLocalRandom")]),a._v("实例，然后调用类实例方法生成随机数。")]),a._v(" "),s("p",[a._v("生成无界"),s("code",[a._v("int")]),a._v("随机数：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" unboundedRandomValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocalRandom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("current")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nextInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("生成有界"),s("code",[a._v("int")]),a._v("随机数：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" boundedRandomValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocalRandom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("current")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nextInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("需要注意，这个方法生成的随机数范围，包含左边界，不包含右边界。")]),a._v(" "),s("p",[a._v("同样地，与上面的例子一样，我们可以使用"),s("code",[a._v("nextLong()")]),a._v("和"),s("code",[a._v("nextDouble()")]),a._v("方法生成"),s("code",[a._v("long")]),a._v("和"),s("code",[a._v("double")]),a._v("类型随机数。")]),a._v(" "),s("p",[s("code",[a._v("Java 8")]),a._v("还添加了"),s("code",[a._v("nextGaussian()")]),a._v("方法来生成正态分布值，该值与生成器序列的平均值为 "),s("code",[a._v("0.0")]),a._v("，标准差为 "),s("code",[a._v("1.0")]),a._v("。")]),a._v(" "),s("p",[a._v("与"),s("code",[a._v("Random")]),a._v("类一样，我们也可以使用"),s("code",[a._v("ints()")]),a._v("、"),s("code",[a._v("doubles()")]),a._v("、"),s("code",[a._v("longs()")]),a._v("生成随机数流。")]),a._v(" "),s("h2",{attrs:{id:"使用jmh比较threadlocalrandom和random"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用jmh比较threadlocalrandom和random"}},[a._v("#")]),a._v(" 使用"),s("code",[a._v("JMH")]),a._v("比较"),s("code",[a._v("ThreadLocalRandom")]),a._v("和"),s("code",[a._v("Random")])]),a._v(" "),s("p",[a._v("让我们看看如何在多线程环境，使用这两个类生成随机数，并使用"),s("code",[a._v("JMH")]),a._v("比较他们的性能。")]),a._v(" "),s("p",[a._v("首先，先创建一个所有线程共享"),s("code",[a._v("Random")]),a._v("实例的例子。我们提交使用该实例生成随机数的任务到线程池执行。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ExecutorService")]),a._v(" executor "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Executors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("newWorkStealingPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Callable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" callables "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Random")]),a._v(" random "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    callables"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n         "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nextInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\nexecutor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("invokeAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("callables"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("让我们使用 JMH 基准测试检查上面代码的性能：")]),a._v(" "),s("div",{staticClass:"language-verilog line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-verilog"}},[s("code",[a._v("# Run complete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" Total "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("36")]),a._v("\nBenchmark                                            Mode Cnt Score    Error    Units\nThreadLocalRandomBenchMarker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("randomValuesUsingRandom avgt "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("771.613")]),a._v(" ± "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("222.220")]),a._v(" us"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("op\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("同样地，使用"),s("code",[a._v("ThreadLocalRandom")]),a._v("代理"),s("code",[a._v("Random")]),a._v("实例：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ExecutorService")]),a._v(" executor "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Executors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("newWorkStealingPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Callable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" callables "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    callables"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocalRandom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("current")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nextInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\nexecutor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("invokeAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("callables"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[s("code",[a._v("ThreadLocalRandom")]),a._v("的性能表现：")]),a._v(" "),s("div",{staticClass:"language-verilog line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-verilog"}},[s("code",[a._v("# Run complete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" Total "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("36")]),a._v("\nBenchmark                                                       Mode Cnt Score    Error   Units\nThreadLocalRandomBenchMarker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("randomValuesUsingThreadLocalRandom avgt "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("624.911")]),a._v(" ± "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("113.268")]),a._v(" us"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("op\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("最后，通过"),s("code",[a._v("JMH")]),a._v("基准测试结果，可以明显看到生成一千个随机数，"),s("code",[a._v("Random")]),a._v("平均用时"),s("code",[a._v("772")]),a._v("毫秒，"),s("code",[a._v("ThreadLocalRandom")]),a._v("平均用时"),s("code",[a._v("625")]),a._v("毫秒。")]),a._v(" "),s("p",[a._v("所以我们可以得出结论，并发环境中，"),s("code",[a._v("ThreadLocalRandom")]),a._v("比"),s("code",[a._v("Random")]),a._v("更高效。")]),a._v(" "),s("h2",{attrs:{id:"实现细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现细节"}},[a._v("#")]),a._v(" 实现细节")]),a._v(" "),s("p",[a._v("将"),s("code",[a._v("ThreadLocalRandom")]),a._v("视为"),s("code",[a._v("ThreadLocal")]),a._v("和"),s("code",[a._v("Random")]),a._v("的组合是一个很好的思维模型。事实上，在"),s("code",[a._v("JDK8")]),a._v("之前也确实是这样实现的。")]),a._v(" "),s("p",[a._v("到了"),s("code",[a._v("JDK8")]),a._v("，这个类被重构了，"),s("code",[a._v("ThreadLocalRandom")]),a._v("成为单例对象。")]),a._v(" "),s("p",[a._v("下面是"),s("code",[a._v("JDK8")]),a._v("中的"),s("code",[a._v("corrent()")]),a._v("方法：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocalRandom")]),a._v(" instance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocalRandom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ThreadLocalRandom")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("current")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("U")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("PROBE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("localInit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("确实，在高并发环境中共享一个"),s("code",[a._v("Random")]),a._v("实例性能欠佳，但是，每个线程使用一个单独的实例也不是好的选择。")]),a._v(" "),s("p",[a._v("取而代之的是每个线程维护一个随机数种子。在"),s("code",[a._v("JDK8")]),a._v("中，线程本身被改造成维护随机数种子。")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Runnable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// omitted")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@jdk.internal.vm.annotation.Contended")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tlr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("long")]),a._v(" threadLocalRandomSeed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@jdk.internal.vm.annotation.Contended")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tlr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" threadLocalRandomProbe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@jdk.internal.vm.annotation.Contended")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tlr"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" threadLocalRandomSecondarySeed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[s("code",[a._v("threadLocalRandomSeed")]),a._v("变量负责维护 "),s("code",[a._v("ThreadLocalRandom")]),a._v("的当前种子值。此外，辅助种子 "),s("code",[a._v("threadLocalRandomSecondarySeed")]),a._v("通常由 "),s("code",[a._v("ForkJoinPool")]),a._v("等内部使用。")]),a._v(" "),s("p",[a._v("此实现包含一些优化以使 "),s("code",[a._v("ThreadLocalRandom")]),a._v("性能更高：")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("使用"),s("code",[a._v("Contented")]),a._v("注解，避免"),s("a",{attrs:{href:"https://alidg.me/blog/2020/4/24/thread-local-random#false-sharing",target:"_blank",rel:"noopener noreferrer"}},[a._v("错误共享"),s("OutboundLink")],1),a._v("：增加足够的填充变量，将并发度高的变量隔离到单独的"),s("code",[a._v("CPU")]),a._v("缓存行")])]),a._v(" "),s("li",[s("p",[a._v("使用 "),s("code",[a._v("sun.misc.Unsafe")]),a._v(" 更新这三个变量，而不是使用反射 API")])]),a._v(" "),s("li",[s("p",[a._v("避免与 "),s("code",[a._v("ThreadLocal")]),a._v(" 实现相关的额外哈希表查找")])])]),a._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("p",[a._v("本文展示了"),s("code",[a._v("Random")]),a._v("和"),s("code",[a._v("ThreadLocalRandom")]),a._v("之间的区别。")]),a._v(" "),s("p",[a._v("我们还看到了"),s("code",[a._v("ThreadLocalRandom")]),a._v("在并发环境中优于"),s("code",[a._v("Random")]),a._v("的优势、性能以及如何使用它生成随机数。")]),a._v(" "),s("p",[s("code",[a._v("ThreadLocalRandom")]),a._v("是 JDK 的一个简单补充，但它可以在高并发应用程序中产生显着影响。")]),a._v(" "),s("p",[a._v("最后，与往常一样，所有这些示例的实现都可以在 "),s("a",{attrs:{href:"https://github.com/eugenp/tutorials/tree/master/core-java-modules/core-java-concurrency-advanced-2",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHub"),s("OutboundLink")],1),a._v("上找到。")])])}),[],!1,null,null,null);s.default=e.exports}}]);