/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
import styleSheet from '../antd.css'
import anot from './Home/less/x.css'

import Nav0 from './Home/Nav0';
import Banner0 from './Home/Banner0';
import Content4 from './Home/Content4';
import Content5 from './Home/Content5';
import Content0 from './Home/Content0';
import Content7 from './Home/Content7';
import Content6 from './Home/Content6';
import Footer1 from './Home/Footer1';

import {
  Nav00DataSource,
  Banner00DataSource,
  Content40DataSource,
  Content50DataSource,
  Content00DataSource,
  Content70DataSource,
  Content51DataSource,
  Content60DataSource,
  Footer10DataSource,
} from './Home/data.source';
import './Home/less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

import { Button } from 'antd'

// const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      // show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    // if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    // }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner0
        id="Banner0_0"
        key="Banner0_0"
        dataSource={Banner00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content4
        id="Content4_0"
        key="Content4_0"
        dataSource={Content40DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_0"
        key="Content5_0"
        dataSource={Content50DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content7
        id="Content7_0"
        key="Content7_0"
        dataSource={Content70DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content5
        id="Content5_1"
        key="Content5_1"
        dataSource={Content51DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content6
        id="Content6_0"
        key="Content6_0"
        dataSource={Content60DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: styleSheet }} />
        <style dangerouslySetInnerHTML={{ __html: anot }} />
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
        <Button>asd</Button>
      </div>
    );
  }
}
