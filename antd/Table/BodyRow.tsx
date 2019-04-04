import Tooltip from 'antd/lib/ui/Tooltip'
import React from 'react'

export default class BodyRow extends React.Component {
  public render () {
    const children: any = this.props.children
    const title = <pre>{children[0] && JSON.stringify(children[0].props.record, null, 2)}</pre>
    return (
      <Tooltip placement='topLeft' title={title}>
        <tr {...this.props} />
      </Tooltip>
    )
  }
}
