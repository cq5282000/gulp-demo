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
