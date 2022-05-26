import { Descriptions } from 'antd'
import './index.css'

const About: React.FC = () => {
  return (
    <div className='About'>
      <Descriptions title='关于我' column={{ xs: 2, sm: 3, md: 4 }}>
        <Descriptions.Item label='姓名'>周晨阳</Descriptions.Item>
        <Descriptions.Item label='学校'>福建工程学院</Descriptions.Item>
        <Descriptions.Item label='状态'>找实习</Descriptions.Item>
        <Descriptions.Item label='目标岗位'>Web 前端开发</Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default About
