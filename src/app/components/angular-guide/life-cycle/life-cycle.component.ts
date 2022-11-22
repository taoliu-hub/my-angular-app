import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})

export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  msg!: string;
  oldMsg!: string;

  // 使用简单的值对局部变量进行初始化。
  constructor() {
    console.log("00,除了使用简单的值对局部变量进行初始化之外,什么都不应该做");
  }

  changeMsg() {
    this.msg = "数据改变了";
  }

  // 主要用在父子组件传值。父组件给子组件传值的时候，以及父组件改变传值数据的时候，会触发该函数。
  ngOnChanges() {
    console.log("01,当被绑定的输入属性值发生变化时调用(父子组件传值时触发)");
  }

  // ngOnInit主要用来做请求数据。
  // 在Angular第一次显示数据绑定和设置组件/指令的输入属性后，初始化组件或指令。在第一轮ngOnChanges()完成之后调用，只调用一次。
  // 使用该构造函数有两个原因。其一在构造函数之后马上执行复杂的初始化逻辑。其二在 Angular 设置完输入属性之后，对该组件进行准备。
  ngOnInit() {
    console.log("02,请求数据一般放在这里面");
  }

  // 组件挂载。组件渲染完成后触发。第一次ngDoCheck()之后调用，只调用一次。
  ngAfterContentInit() {
    console.log("04,当把内容投影进组件之后调用");
  }

  // 视图挂载。组件视图及子视图初始化完成后调用，该函数一般进行dom操作。第一次ngAfterContentChecked()之后调用，只调用一次。
  ngAfterViewInit() {
    console.log("06,初始化完组件视图及其子视图后调用(dom操作放在这里面)");
  }

  // 组件销毁时触发。
  ngOnDestroy() {
    console.log("08,组件销毁时调用");
  }

  // 数据改变后触发如下三个生命周期函数: ngDoCheck, ngAfterContentChecked, ngAfterViewChecked
  // 该函数在ngOnInt函数之后触发。ngDoCheck()中可以做一些自定义的操作，比如查看数据是否改变。
  ngDoCheck() {
    //写一些自定义操作
    console.log("03,检测,并在发生Angular无法或不愿意自己检测的变化时作出反应");
    if (this.msg !== this.oldMsg) {
      console.log(`你从${this.oldMsg}改成${this.msg}`);
      this.oldMsg = this.msg;
    } else {
      console.log("数据没有变化");
    }
  }

  // 组件初始化渲染完成后，做一些自定义操作。ngAfterContentInit() 和每次ngDoCheck()之后调用。
  ngAfterContentChecked() {
    console.log("05,每次完成被投影组件内容的变更检测之后调用");
  }

  // 在ngAfterViewInit函数之后做一些自定义的操作。ngAfterViewInit()和每次ngAfterContentChecked() 之后调用。
  ngAfterViewChecked() {
    console.log("07,每次做完组件视图及其子视图的变更监测之后调用");
  }

}
