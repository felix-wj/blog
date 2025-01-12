(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{548:function(s,r,t){"use strict";t.r(r);var e=t(10),o=Object(e.a)({},(function(){var s=this,r=s._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"spring的后置处理器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring的后置处理器"}},[s._v("#")]),s._v(" Spring的后置处理器")]),s._v(" "),r("p",[s._v("spring容器创建流程中，会在固定的流程节点，执行一些接口方法，类似于插件，使得可以通过添加插件来实现功能。\n使用者可以通过定制后置处理器来达到自己的目的，而不用修改spring框架的代码。\n比如在容器创建后会执行BeanFactoryPostProcessor类型的后置处理器，spring通过内部添加配置类扫描的后置处理器(ConfigurationClassBeanPostProcessor)，在容器创建后执行，完成Bean定义信息的收集。实现了通过注解方式注入Bean的第一步。")]),s._v(" "),r("h2",{attrs:{id:"干预spring生命周期的后置处理器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#干预spring生命周期的后置处理器"}},[s._v("#")]),s._v(" 干预spring生命周期的后置处理器")]),s._v(" "),r("p",[s._v("Spring将后置处理器的执行都放到了一个代理类中--\x3ePostProcessorRegistrationDelegate\n由该类来执行各个阶段的后置处理器。")]),s._v(" "),r("h3",{attrs:{id:"beanfactorypostprocessor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beanfactorypostprocessor"}},[s._v("#")]),s._v(" BeanFactoryPostProcessor")]),s._v(" "),r("p",[s._v("对Bean工厂、Bean定义信息注册中心的功能增强\n这一类型还包括继承了BeanFactoryPostProcessor接口的BeanDefinitionRegistryPostProcessor")]),s._v(" "),r("p",[s._v("在容器创建后执行\n先执行BeanDefinitionRegistryPostProcessor.postProcessBeanDefinitionRegistry\n后执行BeanFactoryPostProcessor.postProcessBeanFactory\n入口在AbstractApplicationContext.refresh --\x3e invokeBeanFactoryPostProcessors")]),s._v(" "),r("h3",{attrs:{id:"beanpostprocessor"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#beanpostprocessor"}},[s._v("#")]),s._v(" BeanPostProcessor")]),s._v(" "),r("p",[s._v("对Bean组件的增强\n容器刷新十二大步的registerBeanPostProcessors方法注册这些Bean\n之后，在组件创建的过程中，这些后置增强器发挥作用")]),s._v(" "),r("h2",{attrs:{id:"流程图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#流程图"}},[s._v("#")]),s._v(" 流程图")]),s._v(" "),r("iframe",{attrs:{src:s.$withBase("https://docs.qq.com/flowchart/DV1dnYXFKVUtnZVpt"),width:"100%",height:"400",frameborder:"0",scrolling:"No",leftmargin:"0",topmargin:"0"}}),s._v(" "),r("p",[r("a",{attrs:{href:"https://docs.qq.com/flowchart/DV1dnYXFKVUtnZVpt",target:"_blank",rel:"noopener noreferrer"}},[s._v("点此跳转"),r("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=o.exports}}]);