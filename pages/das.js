import React, { Component } from 'react'
import styleSheet from '../antd.css'
import Head from 'next/head'

class App extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Innos VietNam | Software Development Company</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: styleSheet }} />
      </>
    )
  }
}

export default App