import { Table, Typography } from 'antd'
import columns from './columns'
import data from './data'

export interface DataType {
  key: number
  modeDescription: JSX.Element
  include: string[]
}

const DesignPatterns = () => {
  return (
    <div>
      <Typography.Title>设计模式</Typography.Title>
      <Typography.Paragraph>
        <ul>
          <li>对接口编程而不是对实现编程。</li>
          <li>优先使用对象组合而不是继承。</li>
        </ul>
      </Typography.Paragraph>
      <Typography.Title level={2}>设计模式的类型</Typography.Title>
      <Table<DataType> dataSource={data} columns={columns} pagination={false} />
      <Typography.Title level={2}>设计模式的六大原则</Typography.Title>
      <ol>
        <li>
          开闭原则（Open Close Principle）
          <Typography.Paragraph>
            开闭原则的意思是：<b>对扩展开放，对修改关闭</b>
            。在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插拔的效果。简言之，是为了使程序的扩展性好，易于维护和升级。想要达到这样的效果，我们需要使用接口和抽象类，后面的具体设计中我们会提到这点。
          </Typography.Paragraph>
        </li>
        <li>
          里氏代换原则（Liskov Substitution Principle）
          <Typography.Paragraph>
            里氏代换原则是面向对象设计的基本原则之一。里氏代换原则中说，任何基类可以出现的地方，子类一定可以出现。LSP
            是继承复用的基石，只有当派生类可以替换掉基类，且软件单位的功能不受到影响时，基类才能真正被复用，而派生类也能够在基类的基础上增加新的行为。里氏代换原则是对开闭原则的补充。实现开闭原则的关键步骤就是抽象化，而基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范。
          </Typography.Paragraph>
        </li>
        <li>
          依赖倒转原则（Dependence Inversion Principle）
          <Typography.Paragraph>
            这个原则是开闭原则的基础，具体内容：针对接口编程，依赖于抽象而不依赖于具体。
          </Typography.Paragraph>
        </li>
        <li>
          接口隔离原则（Interface Segregation Principle）
          <Typography.Paragraph>
            这个原则的意思是：使用多个隔离的接口，比使用单个接口要好。它还有另外一个意思是：降低类之间的耦合度。由此可见，其实设计模式就是从大型软件架构出发、便于升级和维护的软件设计思想，它强调降低依赖，降低耦合。
          </Typography.Paragraph>
        </li>
        <li>
          迪米特法则，又称最少知道原则（Demeter Principle）
          <Typography.Paragraph>
            最少知道原则是指：一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。
          </Typography.Paragraph>
        </li>
        <li>
          合成复用原则（Composite Reuse Principle）
          <Typography.Paragraph>
            合成复用原则是指：尽量使用合成/聚合的方式，而不是使用继承。
          </Typography.Paragraph>
        </li>
      </ol>
      <Typography.Title level={2}>工厂模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到子类进行。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>主要解决接口选择的问题。</Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        我们明确地计划不同条件下创建不同实例时。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        让其子类实现工厂接口，返回的也是一个抽象的产品。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>创建过程在其子类执行。</Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>
          您需要一辆汽车，可以直接从工厂里面提货，而不用去管这辆汽车是怎么做出来的，以及这个汽车里面的具体实现。
        </li>
        <li>Hibernate 换数据库只需换方言和驱动就可以。</li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>一个调用者想创建一个对象，只要知道其名称就可以了。</li>
        <li>扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。</li>
        <li>屏蔽产品的具体实现，调用者只关心产品的接口。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <Typography.Paragraph>
        每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。
      </Typography.Paragraph>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>
          日志记录器：记录可能记录到本地硬盘、系统事件、远程服务器等，用户可以选择记录日志到什么地方。
        </li>
        <li>
          数据库访问，当用户不知道最后系统采用哪一类数据库，以及数据库可能有变化时。
        </li>
        <li>
          设计一个连接服务器的框架，需要三个协议，“POP3”、“IMAP”、“HTTP”，可以把这三个作为产品类，共同实现一个接口。
        </li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        作为一种创建类模式，在任何需要生成复杂对象的地方，都可以使用工厂方法模式。有一点需要注意的地方就是复杂对象适合使用工厂模式，而简单对象，特别是只需要通过
        new
        就可以完成创建的对象，无需使用工厂模式。如果使用工厂模式，就需要引入一个工厂类，会增加系统的复杂度。
      </Typography.Paragraph>
      <Typography.Title level={2}>抽象工厂模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>主要解决接口选择的问题。</Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        系统的产品有多于一个的产品族，而系统只消费其中某一族的产品。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        在一个产品族里面，定义多个产品。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        在一个工厂里聚合多个同类产品。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <Typography.Paragraph>
        工作了，为了参加一些聚会，肯定有两套或多套衣服吧，比如说有商务装（成套，一系列具体产品）、时尚装（成套，一系列具体产品），甚至对于一个家庭来说，可能有商务女装、商务男装、时尚女装、时尚男装，这些也都是成套的，即一系列具体产品。假设一种情况（现实中是不存在的，要不然，没法进入共产主义了，但有利于说明抽象工厂模式），在您的家中，某一个衣柜（具体工厂）只能存放某一种这样的衣服（成套，一系列具体产品），每次拿这种成套的衣服时也自然要从这个衣柜中取出了。用
        OOP
        的思想去理解，所有的衣柜（具体工厂）都是衣柜类的（抽象工厂）某一个，而每一件成套的衣服又包括具体的上衣（某一具体产品），裤子（某一具体产品），这些具体的上衣其实也都是上衣（抽象产品），具体的裤子也都是裤子（另一个抽象产品）。
      </Typography.Paragraph>
      <Typography.Title level={3}>优点</Typography.Title>
      <Typography.Paragraph>
        当一个产品族中的多个对象被设计成一起工作时，它能保证客户端始终只使用同一个产品族中的对象。
      </Typography.Paragraph>
      <Typography.Title level={3}>缺点</Typography.Title>
      <Typography.Paragraph>
        产品族扩展非常困难，要增加一个系列的某一产品，既要在抽象的 Creator
        里加代码，又要在具体的里面加代码。
      </Typography.Paragraph>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>QQ 换皮肤，一整套一起换。</li>
        <li>生成不同操作系统的程序。</li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        产品族难扩展，产品等级易扩展。
      </Typography.Paragraph>
      <Typography.Title level={2}>单例模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        保证一个类仅有一个实例，并提供一个访问它的全局访问点。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        一个全局使用的类频繁地创建与销毁。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        当您想控制实例数目，节省系统资源的时候。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        判断系统是否已经有这个单例，如果有则返回，如果没有则创建。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>构造函数是私有的。</Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>一个班级只有一个班主任。</li>
        <li>
          Windows
          是多进程多线程的，在操作一个文件的时候，就不可避免地出现多个进程或线程同时操作一个文件的现象，所以所有文件的处理必须通过唯一的实例来进行。
        </li>
        <li>
          一些设备管理器常常设计为单例模式，比如一个电脑有两台打印机，在输出的时候就要处理不能两台打印机打印同一个文件。
        </li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>
          在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例（比如管理学院首页页面缓存）。
        </li>
        <li>避免对资源的多重占用（比如写文件操作）。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <Typography.Paragraph>
        没有接口，不能继承，与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化。
      </Typography.Paragraph>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>要求生产唯一序列号。</li>
        <li>
          WEB 中的计数器，不用每次刷新都在数据库里加一次，用单例先缓存起来。
        </li>
        <li>创建的一个对象需要消耗的资源过多，比如 I/O 与数据库的连接等。</li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        <Typography.Text code>getInstance()</Typography.Text>{' '}
        方法中需要使用同步锁{' '}
        <Typography.Text code>synchronized (Singleton.class)</Typography.Text>{' '}
        防止多线程同时进入造成 <Typography.Text code>instance</Typography.Text>{' '}
        被多次实例化。
      </Typography.Paragraph>
      <Typography.Title level={2}>建造者模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        将一个复杂的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        主要解决在软件系统中，有时候面临着“一个复杂对象”的创建工作，其通常由各个部分的子对象用一定的算法构成；由于需求的变化，这个复杂对象的各个部分经常面临着剧烈的变化，但是将它们组合在一起的算法却相对稳定。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        一些基本部件不会变，而其组合经常变化的时候。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>将变与不变分离开。</Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        建造者：创建和提供实例，导演：管理建造出来的实例的依赖关系。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>
          去肯德基，汉堡、可乐、薯条、炸鸡翅等是不变的，而其组合是经常变化的，生成出所谓的“套餐”。
        </li>
        <li>
          JAVA 中的 <Typography.Text code>StringBuilder</Typography.Text>。
        </li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>建造者独立，易扩展。</li>
        <li>便于控制细节风险。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <ol>
        <li>产品必须有共同点，范围有限制。</li>
        <li>如内部变化复杂，会有很多的建造类。</li>
      </ol>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>需要生成的对象具有复杂的内部结构。</li>
        <li>需要生成的对象内部属性本身相互依赖。</li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        与工厂模式的区别是：建造者模式更加关注与零件装配的顺序。
      </Typography.Paragraph>
      <Typography.Title level={2}>原型模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>在运行期建立和删除原型。</Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <ol>
        <li>当一个系统应该独立于它的产品创建，构成和表示时。</li>
        <li>当要实例化的类是在运行时刻指定时，例如，通过动态装载。</li>
        <li>为了避免创建一个与产品类层次平行的工厂类层次时。</li>
        <li>
          当一个类的实例只能有几个不同状态组合中的一种时。建立相应数目的原型并克隆它们可能比每次用合适的状态手工实例化该类更方便一些。
        </li>
      </ol>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        利用已有的一个原型对象，快速地生成和原型对象一样的实例。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <ol>
        <li>
          实现克隆操作，在 JAVA 继承{' '}
          <Typography.Text code>Cloneable</Typography.Text>，重写{' '}
          <Typography.Text code>clone()</Typography.Text>，在 .NET 中可以使用{' '}
          <Typography.Text code>Object</Typography.Text> 类的{' '}
          <Typography.Text code>MemberwiseClone()</Typography.Text>
          方法来实现对象的浅拷贝或通过序列化的方式来实现深拷贝。
        </li>
        <li>
          原型模式同样用于隔离类对象的使用者和具体类型（易变类）之间的耦合关系，它同样要求这些“易变类”拥有稳定的接口。
        </li>
      </ol>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>细胞分裂。</li>
        <li>
          JAVA 中的 <Typography.Text code>Object clone()</Typography.Text>{' '}
          方法。
        </li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>性能提高。</li>
        <li>逃避构造函数的约束。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <ol>
        <li>
          配备克隆方法需要对类的功能进行通盘考虑，这对于全新的类不是很难，但对于已有的类不一定很容易，特别当一个类引用不支持串行化的间接对象，或者引用含有循环结构的时候。
        </li>
        <li>
          必须实现 <Typography.Text code>Cloneable</Typography.Text> 接口。
        </li>
      </ol>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>资源优化场景。</li>
        <li>类初始化需要消化非常多的资源，这个资源包括数据、硬件资源等。</li>
        <li>性能和安全要求的场景。</li>
        <li>
          通过 new
          产生一个对象需要非常繁琐的数据准备或访问权限，则可以使用原型模式。
        </li>
        <li>一个对象多个修改者的场景。</li>
        <li>
          一个对象需要提供给其他对象访问，而且各个调用者可能都需要修改其值时，可以考虑使用原型模式拷贝多个对象供调用者使用。
        </li>
        <li>
          在实际项目中，原型模式很少单独出现，一般是和工厂方法模式一起出现，通过{' '}
          <Typography.Text code>clone</Typography.Text>{' '}
          的方法创建一个对象，然后由工厂方法提供给调用者。原型模式已经与 Java
          融为浑然一体，大家可以随手拿来使用。
        </li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        与通过对一个类进行实例化来构造新对象不同的是，原型模式是通过拷贝一个现有对象生成新对象的。浅拷贝实现{' '}
        <Typography.Text code>Cloneable</Typography.Text>
        ，重写，深拷贝是通过实现{' '}
        <Typography.Text code>Serializable</Typography.Text> 读取二进制流。
      </Typography.Paragraph>
      <Typography.Title level={2}>适配器模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        将一个类的接口转换成客户希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        主要解决在软件系统中，常常要将一些“现存的对象”放到新的环境中，而新环境要求的接口是现对象不能满足的。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <ol>
        <li>系统需要使用现有的类，而此类的接口不符合系统的需要。</li>
        <li>
          想要建立一个可以重复使用的类，用于与一些彼此之间没有太大关联的一些类，包括一些可能在将来引进的类一起工作，这些源类不一定有一致的接口。
        </li>
        <li>
          通过接口转换，将一个类插入另一个类系中。（比如老虎和飞禽，现在多了一个飞虎，在不增加实体的需求下，增加一个适配器，在里面包容一个虎对象，实现飞的接口。）
        </li>
      </ol>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>继承或依赖（推荐）。</Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        适配器继承或依赖已有的对象，实现想要的目标接口。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>美国电器 110V，中国 220V，就要有一个适配器将 110V 转化为 220V。</li>
        <li>
          JAVA JDK 1.1 提供了{' '}
          <Typography.Text code>Enumeration</Typography.Text> 接口，而在 1.2{' '}
          中提供了 <Typography.Text code>Iterator</Typography.Text>{' '}
          接口，想要使用 1.2 的 JDK，则要将以前系统的{' '}
          <Typography.Text code>Enumeration</Typography.Text> 接口转化为{' '}
          <Typography.Text code>Iterator</Typography.Text>{' '}
          接口，这时就需要适配器模式。
        </li>
        <li>在 LINUX 上运行 WINDOWS 程序。</li>
        <li>JAVA 中的 jdbc。</li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>可以让任何两个没有关联的类一起运行。</li>
        <li>提高了类的复用。</li>
        <li>增加了类的透明度。</li>
        <li>灵活性好。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <ol>
        <li>
          过多地使用适配器，会让系统非常零乱，不易整体进行把握。比如，明明看到调用的是
          A 接口，其实内部被适配成了 B
          接口的实现，一个系统如果太多出现这种情况，无异于一场灾难。因此如果不是很有必要，可以不使用适配器，而是直接对系统进行重构。
        </li>
        <li>
          由于 JAVA
          至多继承一个类，所以至多只能适配一个适配者类，而且目标类必须是抽象类。
        </li>
      </ol>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <Typography.Paragraph>
        有动机地修改一个正常运行的系统的接口，这时应该考虑使用适配器模式。
      </Typography.Paragraph>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        适配器不是在详细设计时添加的，而是解决正在服役的项目的问题。
      </Typography.Paragraph>
      <Typography.Title level={2}>桥接模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        将抽象部分与实现部分分离，使它们都可以独立的变化。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        在有多种可能会变化的情况下，用继承会造成类爆炸问题，扩展起来不灵活。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        实现系统可能有多个角度分类，每一种角度都可能变化。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        把这种多角度分类分离出来，让它们独立变化，减少它们之间耦合。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>抽象类依赖实现类。</Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>
          猪八戒从天蓬元帅转世投胎到猪，转世投胎的机制将尘世划分为两个等级，即：灵魂和肉体，前者相当于抽象化，后者相当于实现化。生灵通过功能的委派，调用肉体对象的功能，使得生灵可以动态地选择。
        </li>
        <li>墙上的开关，可以看到的开关是抽象的，不用管里面具体怎么实现的。</li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>抽象和实现的分离。</li>
        <li>优秀的扩展能力。</li>
        <li>实现细节对客户透明。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <Typography.Paragraph>
        桥接模式的引入会增加系统的理解与设计难度，由于聚合关联关系建立在抽象层，要求开发者针对抽象进行设计与编程。
      </Typography.Paragraph>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>
          如果一个系统需要在构件的抽象化角色和具体化角色之间增加更多的灵活性，避免在两个层次之间建立静态的继承联系，通过桥接模式可以使它们在抽象层建立一个关联关系。
        </li>
        <li>
          对于那些不希望使用继承或因为多层次继承导致系统类的个数急剧增加的系统，桥接模式尤为适用。
        </li>
        <li>一个类存在两个独立变化的维度，且这两个维度都需要进行扩展。</li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        对于两个独立变化的维度，使用桥接模式再适合不过了。
      </Typography.Paragraph>
      <Typography.Title level={2}>过滤器模式</Typography.Title>
      <Typography.Text>TODO</Typography.Text>
      <Typography.Title level={2}>组合模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        将对象组合成树形结构以表示“部分-整体”的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        它在我们树型结构的问题中，模糊了简单元素和复杂元素的概念，客户程序可以像处理简单元素一样来处理复杂元素，从而使得客户程序与复杂元素的内部结构解耦。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <ol>
        <li>您想表示对象的部分-整体层次结构（树形结构）。</li>
        <li>
          您希望用户忽略组合对象与单个对象的不同，用户将统一地使用组合结构中的所有对象。
        </li>
      </ol>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        树枝和叶子实现统一接口，树枝内部组合该接口。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        树枝内部组合该接口，并且含有内部属性{' '}
        <Typography.Text code>List</Typography.Text>，里面放{' '}
        <Typography.Text code>Component</Typography.Text>。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>
          算术表达式包括操作数、操作符和另一个操作数，其中，另一个操作数也可以是操作数、操作符和另一个操作数。
        </li>
        <li>
          在 JAVA AWT 和 SWING 中，对于{' '}
          <Typography.Text code>Button</Typography.Text> 和{' '}
          <Typography.Text code>Checkbox</Typography.Text>
          是树叶，<Typography.Text code>Container</Typography.Text> 是树枝。
        </li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>高层模块调用简单。</li>
        <li>节点自由增加。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <Typography.Paragraph>
        在使用组合模式时，其叶子和树枝的声明都是实现类，而不是接口，违反了依赖倒置原则。
      </Typography.Paragraph>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <Typography.Paragraph>
        部分、整体场景，如树形菜单，文件、文件夹的管理。
      </Typography.Paragraph>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>定义时为具体类。</Typography.Paragraph>
      <Typography.Title level={2}>装饰器模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        动态地给一个对象添加一些额外的职责。就增加功能来说，装饰器模式相比生成子类更为灵活。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        一般的，我们为了扩展一个类经常使用继承方式实现，由于继承为类引入静态特征，并且随着扩展功能的增多，子类会很膨胀。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        在不想增加很多子类的情况下扩展类。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        将具体功能职责划分，同时继承装饰者模式。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <ol>
        <li>
          <Typography.Text code>Component</Typography.Text>{' '}
          类充当抽象角色，不应该具体实现。
        </li>
        <li>
          修饰类引用和继承 <Typography.Text code>Component</Typography.Text>{' '}
          类，具体扩展类重写父类方法。
        </li>
      </ol>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>
          孙悟空有 72
          变，当他变成“庙宇”后，他的根本还是一只猴子，但是他又有了庙宇的功能。
        </li>
        <li>
          不论一幅画有没有画框都可以挂在墙上，但是通常都是有画框的，并且实际上是画框被挂在墙上。在挂在墙上之前，画可以被蒙上玻璃，装到框子里；这时画、玻璃和画框形成了一个物体。
        </li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <Typography.Paragraph>
        装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。
      </Typography.Paragraph>
      <Typography.Title level={3}>缺点</Typography.Title>
      <Typography.Paragraph>多层装饰比较复杂。</Typography.Paragraph>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>扩展一个类的功能。</li>
        <li>动态增加功能，动态撤销。</li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>可代替继承。</Typography.Paragraph>
      <Typography.Title level={2}>外观模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        为子系统中的一组接口提供一个一致的界面，外观模式定义了一个高层接口，这个接口使得这一子系统更加容易使用。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        降低访问复杂系统的内部子系统时的复杂度，简化客户端之间的接口。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <ol>
        <li>
          客户端不需要知道系统内部的复杂联系，整个系统只需提供一个"接待员"即可。
        </li>
        <li>定义系统的入口。</li>
      </ol>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        客户端不与系统耦合，外观类与系统耦合。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        在客户端和复杂系统之间再加一层，这一层将调用顺序、依赖关系等处理好。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>
          去医院看病，可能要去挂号、门诊、划价、取药，让患者或患者家属觉得很复杂，如果有提供接待人员，只让接待人员来处理，就很方便。
        </li>
        <li>JAVA 的三层开发模式。</li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>减少系统相互依赖。</li>
        <li>提高灵活性。</li>
        <li>提高了安全性。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <Typography.Paragraph>
        不符合开闭原则，如果要改东西很麻烦，继承重写都不合适。
      </Typography.Paragraph>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>为复杂的模块或子系统提供外界访问的模块。</li>
        <li>子系统相对独立。</li>
        <li>预防低水平人员带来的风险。</li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        在层次化结构中，可以使用外观模式定义系统中每一层的入口。
      </Typography.Paragraph>
      <Typography.Title level={2}>享元模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        运用共享技术有效地支持大量细粒度的对象。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        在有大量对象时，有可能会造成内存溢出，我们把其中共同的部分抽象出来，如果有相同的业务请求，直接返回在内存中已有的对象，避免重新创建。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <ol>
        <li>系统中有大量对象。</li>
        <li>这些对象消耗大量内存。</li>
        <li>这些对象的状态大部分可以外部化。</li>
        <li>
          这些对象可以按照内蕴状态分为很多组，当把外蕴对象从对象中剔除出来时，每一组对象都可以用一个对象来代替。
        </li>
        <li>系统不依赖于这些对象身份，这些对象是不可分辨的。</li>
      </ol>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        用唯一标识码判断，如果在内存中有，则返回这个唯一标识码所标识的对象。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        用 <Typography.Text code>HashMap</Typography.Text> 存储这些对象。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>
          JAVA 中的 <Typography.Text code>String</Typography.Text>
          ，如果有则返回，如果没有则创建一个字符串保存在字符串缓存池里面。
        </li>
        <li>数据库的数据池。</li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <Typography.Paragraph>
        大大减少对象的创建，降低系统的内存，使效率提高。
      </Typography.Paragraph>
      <Typography.Title level={3}>缺点</Typography.Title>
      <Typography.Paragraph>
        提高了系统的复杂度，需要分离出外部状态和内部状态，而且外部状态具有固有化的性质，不应该随着内部状态的变化而变化，否则会造成系统的混乱。
      </Typography.Paragraph>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>系统有大量相似对象。</li>
        <li>需要缓冲池的场景。</li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <ol>
        <li>注意划分外部状态和内部状态，否则可能会引起线程安全问题。</li>
        <li>这些类必须有一个工厂对象加以控制。</li>
      </ol>
      <Typography.Title level={2}>代理模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        为其他对象提供一种代理以控制对这个对象的访问。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        在直接访问对象时带来的问题，比如说：要访问的对象在远程的机器上。在面向对象系统中，有些对象由于某些原因（比如对象创建开销很大，或者某些操作需要安全控制，或者需要进程外的访问），直接访问会给使用者或者系统结构带来很多麻烦，我们可以在访问此对象时加上一个对此对象的访问层。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>想在访问一个类时做一些控制。</Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>增加中间层。</Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>实现与被代理类组合。</Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>Windows 里面的快捷方式。</li>
        <li>
          猪八戒去找高翠兰结果是孙悟空变的，可以这样理解：把高翠兰的外貌抽象出来，高翠兰本人和孙悟空都实现了这个接口，猪八戒访问高翠兰的时候看不出来这个是孙悟空，所以说孙悟空是高翠兰代理类。
        </li>
        <li>买火车票不一定在火车站买，也可以去代售点。</li>
        <li>
          一张支票或银行存单是账户中资金的代理。支票在市场交易中用来代替现金，并提供对签发人账号上资金的控制。
        </li>
        <li>spring aop。</li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>职责清晰。</li>
        <li>高扩展性。</li>
        <li>智能化。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <ol>
        <li>
          由于在客户端和真实主题之间增加了代理对象，因此有些类型的代理模式可能会造成请求的处理速度变慢。
        </li>
        <li>实现代理模式需要额外的工作，有些代理模式的实现非常复杂。</li>
      </ol>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <Typography.Paragraph>
        按职责来划分，通常有以下使用场景：
        <ol>
          <li>远程代理。</li>
          <li>虚拟代理。</li>
          <li>Copy-on-Write 代理。</li>
          <li>保护（Protect or Access）代理。</li>
          <li>Cache 代理。</li>
          <li>防火墙（Firewall）代理。</li>
          <li>同步化（Synchronization）代理。</li>
          <li>智能引用（Smart Reference）代理。</li>
        </ol>
      </Typography.Paragraph>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <ol>
        <li>
          和适配器模式的区别：适配器模式主要改变所考虑对象的接口，而代理模式不能改变所代理类的接口。
        </li>
        <li>
          和装饰器模式的区别：装饰器模式为了增强功能，而代理模式是为了加以控制。
        </li>
      </ol>
      <Typography.Title level={2}>责任链模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        避免请求发送者与接收者耦合在一起，让多个对象都有可能接收请求，将这些对象连接成一条链，并且沿着这条链传递请求，直到有对象处理它为止。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        职责链上的处理者负责处理请求，客户只需要将请求发送到职责链上即可，无须关心请求的处理细节和请求的传递，所以职责链将请求的发送者和请求的处理者解耦了。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        在处理消息的时候以过滤很多道。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>拦截的类都实现统一接口。</Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        <Typography.Text code>Handler</Typography.Text> 里面聚合它自己，在{' '}
        <Typography.Text code>HandlerRequest</Typography.Text>{' '}
        里判断是否合适，如果没达到条件则向下传递，向谁传递之前{' '}
        <Typography.Text code>set</Typography.Text> 进去。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>红楼梦中的“击鼓传花”。</li>
        <li>JS 中的事件冒泡。</li>
        <li>
          JAVA WEB 中 Apache Tomcat 对 Encoding 的处理，Struts2 的拦截器，jsp
          servlet 的 Filter。
        </li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>降低耦合度。它将请求的发送者和接收者解耦。</li>
        <li>简化了对象。使得对象不需要知道链的结构。</li>
        <li>
          增强给对象指派职责的灵活性。通过改变链内的成员或者调动它们的次序，允许动态地新增或者删除责任。
        </li>
        <li>增加新的请求处理类很方便。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <ol>
        <li>不能保证请求一定被接收。</li>
        <li>
          系统性能将受到一定影响，而且在进行代码调试时不太方便，可能会造成循环调用。
        </li>
        <li>可能不容易观察运行时的特征，有碍于除错。</li>
      </ol>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>
          有多个对象可以处理同一个请求，具体哪个对象处理该请求由运行时刻自动确定。
        </li>
        <li>在不明确指定接收者的情况下，向多个对象中的一个提交一个请求。</li>
        <li>可动态指定一组对象处理请求。</li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>在 JAVA WEB 中遇到很多应用。</Typography.Paragraph>
      <Typography.Title level={2}>命令模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        将一个请求封装成一个对象，从而使您可以用不同的请求对客户进行参数化。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        在软件系统中，行为请求者与行为实现者通常是一种紧耦合的关系，但某些场合，比如需要对行为进行记录、撤销或重做、事务等处理时，这种无法抵御变化的紧耦合的设计就不太合适。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        在某些场合，比如要对行为进行“记录、撤销/重做、事务”等处理，这种无法抵御变化的紧耦合是不合适的。在这种情况下，如何将“行为请求者”与“行为实现者”解耦？将一组行为抽象为对象，可以实现二者之间的松耦合。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        通过调用者调用接受者执行命令，顺序：调用者 → 命令 → 接受者。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        定义三个角色：
        <ol>
          <li>
            <Typography.Text code>received</Typography.Text> 真正的命令执行对象
          </li>
          <li>
            <Typography.Text code>Command</Typography.Text>
          </li>
          <li>
            <Typography.Text code>invoker</Typography.Text> 使用命令对象的入口
          </li>
        </ol>
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <Typography.Paragraph>
        <Typography.Text code>struts 1</Typography.Text> 中的{' '}
        <Typography.Text code>action</Typography.Text> 核心控制器{' '}
        <Typography.Text code>ActionServlet</Typography.Text> 只有一个，相当于{' '}
        <Typography.Text code>Invoker</Typography.Text>
        ，而模型层的类会随着不同的应用有不同的模型类，相当于具体的{' '}
        <Typography.Text code>Command</Typography.Text>。
      </Typography.Paragraph>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>降低了系统耦合度。</li>
        <li>新的命令可以很容易添加到系统中去。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <Typography.Paragraph>
        使用命令模式可能会导致某些系统有过多的具体命令类。
      </Typography.Paragraph>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <Typography.Paragraph>
        认为是命令的地方都可以使用命令模式，比如：
        <ol>
          <li>GUI 中每一个按钮都是一条命令。</li>
          <li>模拟 CMD。</li>
        </ol>
      </Typography.Paragraph>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        系统需要支持命令的撤销(Undo)操作和恢复(Redo)操作，也可以考虑使用命令模式，见命令模式的扩展。
      </Typography.Paragraph>
      <Typography.Title level={2}>解释器模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        给定一个语言，定义它的文法表示，并定义一个解释器，这个解释器使用该标识来解释语言中的句子。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        对于一些固定文法构建一个解释句子的解释器。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        如果一种特定类型的问题发生的频率足够高，那么可能就值得将该问题的各个实例表述为一个简单语言中的句子。这样就可以构建一个解释器，该解释器通过解释这些句子来解决该问题。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        构建语法树，定义终结符与非终结符。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        构建环境类，包含解释器之外的一些全局信息，一般是 HashMap。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <Typography.Paragraph>编译器、运算表达式计算。</Typography.Paragraph>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>可扩展性比较好，灵活。</li>
        <li>增加了新的解释表达式的方式。</li>
        <li>易于实现简单文法。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <ol>
        <li>可利用场景比较少。</li>
        <li>对于复杂的文法比较难维护。</li>
        <li>解释器模式会引起类膨胀。</li>
        <li>解释器模式采用递归调用方法。</li>
      </ol>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>可以将一个需要解释执行的语言中的句子表示为一个抽象语法树。</li>
        <li>一些重复出现的问题可以用一种简单的语言来进行表达。</li>
        <li>一个简单语法需要解释的场景。</li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        可利用场景比较少，JAVA 中如果碰到可以用 expression4J 代替。
      </Typography.Paragraph>
      <Typography.Title level={2}>迭代器模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        提供一种方法顺序访问一个聚合对象中各个元素，
        而又无须暴露该对象的内部表示。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        不同的方式来遍历整个整合对象。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>遍历一个聚合对象。</Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        把在元素之间游走的责任交给迭代器，而不是聚合对象。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        定义接口：<Typography.Text code>hasNext</Typography.Text>，{' '}
        <Typography.Text code>next</Typography.Text>。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <Typography.Paragraph>
        JAVA 中的 <Typography.Text code>iterator</Typography.Text>。
      </Typography.Paragraph>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>它支持以不同的方式遍历一个聚合对象。</li>
        <li>迭代器简化了聚合类。</li>
        <li>在同一个聚合上可以有多个遍历。</li>
        <li>
          在迭代器模式中，增加新的聚合类和迭代器类都很方便，无须修改原有代码。
        </li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <Typography.Paragraph>
        由于迭代器模式将存储数据和遍历数据的职责分离，增加新的聚合类需要对应增加新的迭代器类，类的个数成对增加，这在一定程度上增加了系统的复杂性。
      </Typography.Paragraph>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>访问一个聚合对象的内容而无须暴露它的内部表示。</li>
        <li>需要为聚合对象提供多种遍历方式。</li>
        <li>为遍历不同的聚合结构提供一个统一的接口。</li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        迭代器模式就是分离了集合对象的遍历行为，抽象出一个迭代器类来负责，这样既可以做到不暴露集合的内部结构，又可让外部代码透明地访问集合内部的数据。
      </Typography.Paragraph>
      <Typography.Title level={2}>中介者模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        用一个中介对象来封装一系列的对象交互，中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        对象与对象之间存在大量的关联关系，这样势必会导致系统的结构变得很复杂，同时若一个对象发生改变，我们也需要跟踪与之相关联的对象，同时做出相应的处理。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        多个类相互耦合，形成了网状结构。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        将上述网状结构分离为星型结构。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        对象 <Typography.Text code>Colleague</Typography.Text>{' '}
        之间的通信封装到一个类中单独处理。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>
          中国加入 WTO 之前是各个国家相互贸易，结构复杂，现在是各个国家通过 WTO
          来互相贸易。
        </li>
        <li>机场调度系统。</li>
        <li>MVC 框架，其中 C（控制器）就是 M（模型）和 V（视图）的中介者。</li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>降低了类的复杂度，将一对多转化成了一对一。</li>
        <li>各个类之间的解耦。</li>
        <li>符合迪米特原则。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <Typography.Paragraph>
        中介者会庞大，变得复杂难以维护。
      </Typography.Paragraph>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>
          系统中对象之间存在比较复杂的引用关系，导致它们之间的依赖关系结构混乱而且难以复用该对象。
        </li>
        <li>想通过一个中间类来封装多个类中的行为，而又不想生成太多的子类。</li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>不应当在职责混乱的时候使用。</Typography.Paragraph>
      <Typography.Title level={2}>备忘录模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        所谓备忘录模式就是在不破坏封装的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，这样可以在以后将对象恢复到原先保存的状态。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        很多时候我们总是需要记录一个对象的内部状态，这样做的目的就是为了允许用户取消不确定或者错误的操作，能够恢复到他原先的状态，使得他有“后悔药”可吃。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        通过一个备忘录类专门存储对象状态。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        客户不与备忘录类耦合，与备忘录管理类耦合。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>后悔药。</li>
        <li>打游戏时的存档。</li>
        <li>
          Windows 里的 <Typography.Text code>ctrl + z</Typography.Text>。
        </li>
        <li>IE 中的后退。</li>
        <li>数据库的事务管理。</li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>
          给用户提供了一种可以恢复状态的机制，可以使用户能够比较方便地回到某个历史的状态。
        </li>
        <li>实现了信息的封装，使得用户不需要关心状态的保存细节。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <Typography.Paragraph>
        消耗资源。如果类的成员变量过多，势必会占用比较大的资源，而且每一次保存都会消耗一定的内存。
      </Typography.Paragraph>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>需要保存/恢复数据的相关状态场景。</li>
        <li>提供一个可回滚的操作。</li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <ol>
        <li>为了符合迪米特原则，还要增加一个管理备忘录的类。</li>
        <li>为了节约内存，可使用原型模式+备忘录模式。</li>
      </ol>
      <Typography.Title level={2}>观察者模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        一个对象状态改变给其他对象通知的问题，而且要考虑到易用和低耦合，保证高度的协作。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        一个对象（目标对象）的状态发生改变，所有的依赖对象（观察者对象）都将得到通知，进行广播通知。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        使用面向对象技术，可以将这种依赖关系弱化。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        在抽象类里有一个 <Typography.Text code>ArrayList</Typography.Text>{' '}
        存放观察者们。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>拍卖的时候，拍卖师观察最高标价，然后通知给其他竞价者竞价。</li>
        <li>
          西游记里面悟空请求菩萨降服红孩儿，菩萨洒了一地水招来一个老乌龟，这个乌龟就是观察者，他观察菩萨洒水这个动作。
        </li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>观察者和被观察者是抽象耦合的。</li>
        <li>建立一套触发机制。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <ol>
        <li>
          如果一个被观察者对象有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间。
        </li>
        <li>
          如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃。
        </li>
        <li>
          观察者模式没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的，而仅仅只是知道观察目标发生了变化。
        </li>
      </ol>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ul>
        <li>
          一个抽象模型有两个方面，其中一个方面依赖于另一个方面。将这些方面封装在独立的对象中使它们可以各自独立地改变和复用。
        </li>
        <li>
          一个对象的改变将导致其他一个或多个对象也发生改变，而不知道具体有多少对象将发生改变，可以降低对象之间的耦合度。
        </li>
        <li>一个对象必须通知其他对象，而并不知道这些对象是谁。</li>
        <li>
          需要在系统中创建一个触发链，A 对象的行为将影响 B 对象，B
          对象的行为将影响 C 对象……，可以使用观察者模式创建一种链式触发机制。
        </li>
      </ul>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <ol>
        <li>JAVA 中已经有了对观察者模式的支持类。</li>
        <li>避免循环引用。</li>
        <li>如果顺序执行，某一观察者错误会导致系统卡壳，一般采用异步方式。</li>
      </ol>
      <Typography.Title level={2}>状态模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        允许对象在内部状态发生改变时改变它的行为，对象看起来好像修改了它的类。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        对象的行为依赖于它的状态（属性），并且可以根据它的状态改变而改变它的相关行为。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        代码中包含大量与对象状态有关的条件语句。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>将各种具体的状态类抽象出来。</Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        通常命令模式的接口中只有一个方法。而状态模式的接口中有一个或者多个方法。而且，状态模式的实现类的方法，一般返回值，或者是改变实例变量的值。也就是说，状态模式一般和对象的状态有关。实现类的方法有不同的功能，覆盖接口中的方法。状态模式和命令模式一样，也可以用于消除{' '}
        <Typography.Text code>if...else</Typography.Text> 等条件选择语句。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>打篮球的时候运动员可以有正常状态、不正常状态和超常状态。</li>
        <li>
          曾侯乙编钟中，钟是抽象接口，“钟{' '}
          A”等是具体状态，“曾侯乙编钟”是具体环境（Context）。
        </li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>封装了转换规则。</li>
        <li>枚举可能的状态，在枚举状态之前需要确定状态种类。</li>
        <li>
          将所有与某个状态有关的行为放到一个类中，并且可以方便地增加新的状态，只需要改变对象状态即可改变对象的行为。
        </li>
        <li>
          允许状态转换逻辑与状态对象合成一体，而不是某一个巨大的条件语句块。
        </li>
        <li>可以让多个环境对象共享一个状态对象，从而减少系统中对象的个数。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <ol>
        <li>状态模式的使用必然会增加系统类和对象的个数。</li>
        <li>
          状态模式的结构与实现都较为复杂，如果使用不当将导致程序结构和代码的混乱。
        </li>
        <li>
          状态模式对“开闭原则”的支持并不太好，对于可以切换状态的状态模式，增加新的状态类需要修改那些负责状态转换的源代码，否则无法切换到新增状态，而且修改某个状态类的行为也需修改对应类的源代码。
        </li>
      </ol>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>行为随状态改变而改变的场景。</li>
        <li>条件、分支语句的代替者。</li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        在行为受状态约束的时候使用状态模式，而且状态不超过 5 个。
      </Typography.Paragraph>
      <Typography.Title level={2}>空对象模式</Typography.Title>
      <Typography.Text>TODO</Typography.Text>
      <Typography.Title level={2}>策略模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        定义一系列的算法，把它们一个个封装起来，并且使它们可相互替换。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        在有多种算法相似的情况下，使用{' '}
        <Typography.Text code>if...else</Typography.Text>{' '}
        所带来的复杂和难以维护。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        一个系统有许多许多类，而区分它们的只是他们直接的行为。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        将这些算法封装成一个一个的类，任意地替换。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>实现同一个接口。</Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>诸葛亮的锦囊妙计，每一个锦囊就是一个策略。</li>
        <li>
          旅行的出游方式，选择骑自行车、坐汽车，每一种旅行方式都是一个策略。
        </li>
        <li>
          JAVA AWT 中的 <Typography.Text code>LayoutManager</Typography.Text>。
        </li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>算法可以自由切换。</li>
        <li>避免使用多重条件判断。</li>
        <li>扩展性良好。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <ol>
        <li>策略类会增多。</li>
        <li>所有策略类都需要对外暴露。</li>
      </ol>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>
          如果在一个系统里面有许多类，它们之间的区别仅在于它们的行为，那么使用策略模式可以动态地让一个对象在许多行为中选择一种行为。
        </li>
        <li>一个系统需要动态地在几种算法中选择一种。</li>
        <li>
          如果一个对象有很多的行为，如果不用恰当的模式，这些行为就只好使用多重的条件选择语句来实现。
        </li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        如果一个系统的策略多于四个，就需要考虑使用混合模式，解决策略类膨胀的问题。
      </Typography.Paragraph>
      <Typography.Title level={2}>模板模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        一些方法通用，却在每一个子类都重新写了这一方法。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>有一些通用的方法。</Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>将这些通用算法抽象出来。</Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        在抽象类实现，其他步骤在子类实现。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <ol>
        <li>
          在造房子的时候，地基、走线、水管都一样，只有在建筑的后期才有加壁橱加栅栏等差异。
        </li>
        <li>西游记里面菩萨定好的 81 难，这就是一个顶层的逻辑骨架。</li>
        <li>
          spring 中对 Hibernate{' '}
          的支持，将一些已经定好的方法封装起来，比如开启事务、获取 Session、关闭{' '}
          Session{' '}
          等，程序员不重复写那些已经规范好的代码，直接丢一个实体就可以保存。
        </li>
      </ol>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>封装不变部分，扩展可变部分。</li>
        <li>提取公共代码，便于维护。</li>
        <li>行为由父类控制，子类实现。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <Typography.Paragraph>
        每一个不同的实现都需要一个子类来实现，导致类的个数增加，使得系统更加庞大。
      </Typography.Paragraph>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>有多个子类共有的方法，且逻辑相同。</li>
        <li>重要的、复杂的方法，可以考虑作为模板方法。</li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        为防止恶意操作，一般模板方法都加上{' '}
        <Typography.Text code>final</Typography.Text> 关键词。
      </Typography.Paragraph>
      <Typography.Title level={2}>访问者模式</Typography.Title>
      <Typography.Title level={3}>意图</Typography.Title>
      <Typography.Paragraph>
        主要将数据结构与数据操作分离。
      </Typography.Paragraph>
      <Typography.Title level={3}>主要解决</Typography.Title>
      <Typography.Paragraph>
        稳定的数据结构和易变的操作耦合问题。
      </Typography.Paragraph>
      <Typography.Title level={3}>何时使用</Typography.Title>
      <Typography.Paragraph>
        需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作“污染”这些对象的类，使用访问者模式将这些封装到类中。
      </Typography.Paragraph>
      <Typography.Title level={3}>如何解决</Typography.Title>
      <Typography.Paragraph>
        在被访问的类里面加一个对外提供接待访问者的接口。
      </Typography.Paragraph>
      <Typography.Title level={3}>关键代码</Typography.Title>
      <Typography.Paragraph>
        在数据基础类里面有一个方法接受访问者，将自身引用传入访问者。
      </Typography.Paragraph>
      <Typography.Title level={3}>应用实例</Typography.Title>
      <Typography.Paragraph>
        您在朋友家做客，您是访问者，朋友接受您的访问，您通过朋友的描述，然后对朋友的描述做出一个判断，这就是访问者模式。
      </Typography.Paragraph>
      <Typography.Title level={3}>优点</Typography.Title>
      <ol>
        <li>符合单一职责原则。</li>
        <li>优秀的扩展性。</li>
        <li>灵活性。</li>
      </ol>
      <Typography.Title level={3}>缺点</Typography.Title>
      <ol>
        <li>具体元素对访问者公布细节，违反了迪米特原则。</li>
        <li>具体元素变更比较困难。</li>
        <li>违反了依赖倒置原则，依赖了具体类，没有依赖抽象。</li>
      </ol>
      <Typography.Title level={3}>使用场景</Typography.Title>
      <ol>
        <li>
          对象结构中对象对应的类很少改变，但经常需要在此对象结构上定义新的操作。
        </li>
        <li>
          需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作“污染”这些对象的类，也不希望在增加新操作时修改这些类。
        </li>
      </ol>
      <Typography.Title level={3}>注意事项</Typography.Title>
      <Typography.Paragraph>
        访问者可以对功能进行统一，可以做报表、UI、拦截器与过滤器。
      </Typography.Paragraph>
      <Typography.Title level={2}>MVC 模式</Typography.Title>
      <Typography.Text>TODO</Typography.Text>
      <Typography.Title level={2}>业务代表模式</Typography.Title>
      <Typography.Text>TODO</Typography.Text>
      <Typography.Title level={2}>组合实体模式</Typography.Title>
      <Typography.Text>TODO</Typography.Text>
      <Typography.Title level={2}>数据访问对象模式</Typography.Title>
      <Typography.Text>TODO</Typography.Text>
      <Typography.Title level={2}>前端控制器模式</Typography.Title>
      <Typography.Text>TODO</Typography.Text>
      <Typography.Title level={2}>拦截过滤器模式</Typography.Title>
      <Typography.Text>TODO</Typography.Text>
      <Typography.Title level={2}>服务定位器模式</Typography.Title>
      <Typography.Text>TODO</Typography.Text>
      <Typography.Title level={2}>传输对象模式</Typography.Title>
      <Typography.Text>TODO</Typography.Text>
    </div>
  )
}

export default DesignPatterns
