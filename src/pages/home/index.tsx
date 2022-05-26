import { Timeline, Typography } from 'antd'
import './index.css'

const Home: React.FC = () => {
  return (
    <div className='Home'>
      <div className='first-screen'>
        <div className='primary'>
          <div>欢迎来到我的世界</div>
          <div>我是周晨阳</div>
        </div>
      </div>
      <Timeline className='timeline' mode='left'>
        <Timeline.Item label='2019-09'>进入福建工程学院</Timeline.Item>
        <Timeline.Item label='2019-12-18'>
          注册{' '}
          <Typography.Link href='https://github.com/ZZZCNY'>
            Github
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/high-level-language-programming'>
            高级语言程序设计
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2020 年' />
        <Timeline.Item>C 语言获得 91 分的成绩</Timeline.Item>
        <Timeline.Item label='2020-09-16'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/Algorithms-and-Data-Structures'>
            算法与数据结构
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2020-11-14'>
          注册{' '}
          <Typography.Link href='https://gitee.com/zhou-cheny'>
            Gitee
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2020-11-28'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/Visual-Programming-Technology'>
            可视化编程技术（.NET）
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2020-12-22'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/Database-system-principles-and-applications'>
            数据库系统原理及应用
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2021 年' />
        <Timeline.Item>C++ 获得 92 分的成绩</Timeline.Item>
        <Timeline.Item>C# 获得 86 分的成绩</Timeline.Item>
        <Timeline.Item>SQL 获得 82 分的成绩</Timeline.Item>
        <Timeline.Item label='2021-01-19'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/Python-data-analysis'>
            Python 数据分析
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/Object-oriented-programming'>
            面向对象程序设计（JAVA）
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/Web-page-making-technology'>
            网页制作技术
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2021-04-01'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/Information-System-Development-Practice'>
            信息系统开发实践
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item>Python 获得 96 分的成绩</Timeline.Item>
        <Timeline.Item>HTML5 获得 90 分的成绩</Timeline.Item>
        <Timeline.Item>Java 获得 83 分的成绩</Timeline.Item>
        <Timeline.Item label='2021-06-22'>创建第一个 PR</Timeline.Item>
        <Timeline.Item label='2021-06-29'>创建第一个 issue</Timeline.Item>
        <Timeline.Item label='2021-09-07'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/Web-application-design'>
            Web 应用程序设计
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2021-11-08'>
          注册{' '}
          <Typography.Link href='https://gitlab.com/ZZZCNY'>
            GitLab
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2021-11-12'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/Conference-Management-System'>
            基于 MVC 的会议管理系统
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2021-11-15'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/Multimedia-Technology-and-Application'>
            多媒体技术与应用
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2021-12-11'>开始学习 React</Timeline.Item>
        <Timeline.Item label='2021-12-20'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/React'>
            赫尔辛基大学全栈 MOOC 公开课
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item>JSP 获得 97 分的成绩</Timeline.Item>
        <Timeline.Item label='2021-12-30'>
          参与{' '}
          <Typography.Link href='https://fullstackopen.com/zh/'>
            全栈公开课 2022
          </Typography.Link>{' '}
          翻译
        </Timeline.Item>
        <Timeline.Item label='2022 年' />
        <Timeline.Item label='2022-01-07'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/Management-Information-System-Course-Design'>
            管理信息系统课程设计
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2022-02-13'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/JavaEE-combat'>
            JavaEE 实战
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2022-02-25'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/Android-Application-Development-Fundamentals'>
            Android 应用开发基础
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2022-03-02'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/Data-Analysis-and-Data-Mining'>
            数据分析与数据挖掘
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2022-03-12'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/LeetCode'>
            LeetCode
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2022-04-06'>
          参与{' '}
          <Typography.Link href='https://zh-hans.reactjs.org/'>
            React 官方中文文档
          </Typography.Link>{' '}
          翻译
        </Timeline.Item>
        <Timeline.Item label='2022-04-20'>
          创建{' '}
          <Typography.Link href='https://github.com/ZZZCNY/Database-development-technology'>
            数据库开发技术
          </Typography.Link>
        </Timeline.Item>
        <Timeline.Item label='2022-05-18'>
          参与{' '}
          <Typography.Link href='https://github.com/ant-design/ant-design'>
            Ant Design
          </Typography.Link>{' '}
          文档
        </Timeline.Item>
      </Timeline>
    </div>
  )
}

export default Home
