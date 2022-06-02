import { List } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import data from '../data'

const KnowledgeList: React.FC = () => {
  const navigate = useNavigate()

  const handleClick = (key: string) => {
    navigate(`/knowledge/${key}`, { replace: true })
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
          onClick={() => handleClick(item.key)}
        >
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
      )}
    />
  )
}

export default KnowledgeList
