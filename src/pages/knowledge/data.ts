interface DataType {
  key: string
  title: string
  date: string
  description: string
  url?: string
}

const data: DataType[] = [
  {
    key: 'Design-Patterns',
    title: '设计模式',
    date: '2022年5月29日',
    description: '- 对接口编程而不是对实现编程。- 优先使用对象组合而不是继承。',
  },
  {
    key: 'Git-Commit-Guidelines',
    title: 'Git 提交指南',
    date: '2022年6月30日',
    description:
      '我们对如何格式化 git 提交消息有非常精确的规则。这会导致在浏览项目历史时易于理解的更具可读性的消息。而且，我们使用 git commit 消息来生成更改日志。',
    url: 'https://zzzcny.github.io/Git-Commit-Guidelines/',
  },
]

export default data
