import { Space, Tag } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { DataType } from '.'

const columns: ColumnsType<DataType> = [
  {
    title: '模式 & 描述',
    dataIndex: 'modeDescription',
  },
  {
    title: '包括',
    dataIndex: 'include',
    render: (_, record) => (
      <Space direction='vertical'>
        {record.include.map((value, index) => (
          <Tag key={index}>{value}</Tag>
        ))}
      </Space>
    ),
  },
]

export default columns
