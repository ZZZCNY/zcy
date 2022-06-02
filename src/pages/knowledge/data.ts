interface DataType {
  key: string
  title: string
  date: string
  description: string
}

const data: DataType[] = [
  {
    key: 'Design-Patterns',
    title: '设计模式',
    date: '2022年5月29日',
    description: '- 对接口编程而不是对实现编程。- 优先使用对象组合而不是继承。',
  },
]

export default data
