# gulp-demo && demo

## 2018年5月28日

### gulp && webpack

gulp是task runner，webpack是module bundler

核心功能:
- 任务定义和组织
- 基于文件stream的构建
- 插件系统

webpack最核心的功能：
- 按照模块的依赖构建目标文件
- loader体系支持不同的模块
- 插件体系提供更多的额外功能
webpack的核心就是模块化的组织，模块化的依赖，模块化的打包，webpack在依赖的模块化构建上是无人可以替代的

重叠部分：

- 模块依赖 ----》通常选择webpack
-  shama/webpack-stream，https://github.com/shama/webpack-stream，可以把webpack封装成gulp任务
- 代码丑化，webpack--UgifyJsPlugin插件，gulp也有gulp-uglify，gulp除此之外还有更多的比如css压缩，图片压缩

无法替带的部分：
- gulp的任务定义和管理webpack做不到，webpack基于模块的依赖构建gulp做不好

工具选择：
- 除了前端模块化的开发，模块之间充分依赖的项目，都不值得用webpack构建，反之，如果要用webpack，请确保模块化模块之间充分依赖，除此之外的构建工作都应该交给gulp继续完成，目前庞大点的项目，webpack和gulp都是同时存在，负责各自擅长的部分

## 2018年5月29日

### gulp基础api

- gulp.src(globs[, options]),输出所有符合匹配模式的（glob）或者匹配模式的数组,将返回一个Vinyl files 的 stream 它可以被 piped 到别的插件中；

- gulp.dest(path[, options])能被pipe进来，并且将会写文件，并且重新输出所有数据，因此你可以将它pipe到多个文件夹，如果文件夹不存在，会自动创建

- gulp.task(name[,deps], fn)定义一个使用Orchestrator实现的任务，task将以最大的并发数执行，也就是说task会以最大并发数执行并且不做任何等待，创建序列化的task，并以特定顺序执行，需要做两件事，给出一个提示，来告知task什么时候执行完毕，再给出另外一个提示，来告知task依赖另一个task完成

- gulp.watch(glob[,opts], tasks) && gulp.watch(glob[,opts,cb])监听文件，并且可以在文件发生改动的时候做一些事情，他会返回一个EventEmitter来发射（change）事，接收到change事件后，可以执行多个传入的task也可以执行回调

### 注意点

- gulpfile.js中必须定义名为‘default’默认task

## 2018年5月30日

### 入门 && 基础

- 整合stream来处理错误


## 2018年6月25日

### glob语法

 不但适用于文件处理的模式匹配，而且适用于Linux指令，是gulp的api的文件匹配核心

#### 基础语法

- * 匹配任意数量的字符，但不匹配／，

- ？ 匹配单个字符，但不匹配／

- ** 匹配任意数量的字符，包括／，只要他是路由中的唯一的一部分

- [...]匹配一个范围内的字符,只能是匹配一个字符,'src/**/ind[a-z][a-z].js',匹配到的是前三位为ind，后两位为a-z范围内字母的所有js文件

- *(pattern|pattern|pattern)匹配模型中的0个或者多个组合，例如'js/**/*(a|b|c).js', a,b,c分别代表要匹配到的文件名

- ?(pattern|pattern|pattern)匹配多个模型中的0个或者1个,和*的区别在于必须完全匹配，不能自由组合

- !(pattern|pattern|pattern)匹配不包含任何模型，需注意的是，不等于!(*(pattern|pattern|pattern)),取反的模型的必须完全匹配

- +(pattern|pattern|pattern)匹配多个模型中的一个或者多个，必须有一个，为空不匹配

- @(pattern|pat*|pat?erN)匹配多个模型中的任意一个

- .开头的文件不会被匹配

- 和shell不同的是当没有任何文件匹配到时，返回的是[],而shell返回的匹配模式本身，可设置{nonull:true}来js表现行为模式相同和shell环境的bash指令相同


