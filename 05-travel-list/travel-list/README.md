# 旅行清单应用

一个现代化的旅行清单应用，帮助你管理和组织旅行物品。使用 React、Tailwind CSS 和 Framer Motion 构建，提供流畅的用户体验和美观的界面设计。

## 功能特点

- ✨ 添加和删除旅行物品
- 📦 设置物品数量和分类
- ✅ 标记物品为已打包
- 📊 查看打包进度统计
- 🗑️ 一键清空清单
- 🎯 响应式设计
- 🌈 流畅的动画效果
- 🔄 智能物品合并（相同物品自动叠加）
- 📝 物品编辑功能
- 🗂️ 分类管理和分组显示
- 🎉 完成打包庆祝动画

## 特色功能

### 智能物品管理

- 自动合并相同物品，累加数量
- 支持物品分类（衣物、电子产品、洗漱用品等）
- 可编辑物品的描述、数量和分类

### 分类与排序

- 按添加顺序排序
- 按名称字母排序
- 按打包状态排序
- 按分类排序
- 支持分类视图显示

### 动画效果

- 物品添加/删除动画
- 状态切换动画
- 分类切换动画
- 完成打包庆祝彩炮

## 技术栈

- React - 用户界面构建
- Tailwind CSS - 样式设计
- Framer Motion - 动画效果
- Vite - 开发和构建工具

## 项目结构

```
src/
├── components/         # 组件目录
│   ├── Form/          # 添加物品表单
│   ├── List/          # 物品列表和单个物品
│   ├── Logo/          # 应用标题
│   ├── Stats/         # 统计信息
│   └── Confetti/      # 庆祝动画
├── constants/         # 常量定义
├── reducers/         # 状态管理
├── utils/            # 工具函数
└── App.jsx           # 主应用组件
```

## 开始使用

1. 克隆仓库：

   ```bash
   git clone [仓库地址]
   ```

2. 安装依赖：

   ```bash
   npm install
   ```

3. 启动开发服务器：

   ```bash
   npm run dev
   ```

4. 打开浏览器访问：`http://localhost:5173`

## 组件说明

### Form

- 添加新物品的表单组件
- 支持设置物品描述、数量和分类
- 使用 useReducer 管理表单状态

### List

- 显示所有旅行物品
- 支持多种排序和筛选方式
- 分类视图显示
- 支持删除和状态切换

### Item

- 单个物品的显示和管理
- 支持编辑功能
- 显示物品分类和状态

### Stats

- 显示打包统计信息
- 包括总数、已打包数量和百分比
- 动态更新统计数据

### Confetti

- 完成打包时的庆祝动画
- 多彩的粒子效果
- 流畅的动画表现

## 开发指南

### 代码风格

- 使用 ESLint 和 Prettier 保持代码风格一致
- 遵循 React 最佳实践
- 使用 JSDoc 注释文档化组件和函数

### 状态管理

- 使用 useReducer 管理复杂状态
- 将状态逻辑分离到独立的 reducer 文件
- 使用 action types 常量管理 action 类型

### 样式指南

- 使用 Tailwind CSS 工具类
- 遵循移动优先的响应式设计
- 保持颜色主题的一致性

## 贡献指南

1. Fork 项目
2. 创建特性分支：`git checkout -b feature/AmazingFeature`
3. 提交更改：`git commit -m 'Add some AmazingFeature'`
4. 推送分支：`git push origin feature/AmazingFeature`
5. 提交 Pull Request

## 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情
