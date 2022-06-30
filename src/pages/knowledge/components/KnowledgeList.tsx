import { List } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import data from '../data'

interface DataType {
  key: string
  title: string
  date: string
  description: string
  url?: string
}

const KnowledgeList: React.FC = () => {
  const navigate = useNavigate()

  const handleClick = (item: DataType) => {
    if (item.url) {
      window.open(item.url)
    } else {
      navigate(`/knowledge/${item.key}`, { replace: true })
    }
  }

  return (
    <List
      itemLayout='vertical'
      size='large'
      dataSource={data}
      renderItem={item => (
        <List.Item
          key={item.key}
          extra={item.date}
          onClick={() => handleClick(item)}
        >
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
      )}
    />
  )
}

export default KnowledgeList
