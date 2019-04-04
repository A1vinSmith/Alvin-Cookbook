import * as Abbr from 'antd/lib/ui/Abbr'
import Table, { Components as TableComponents } from 'antd/lib/ui/Table'
import React from 'react'
import BodyRow from './BodyRow'

type Maybe<T> = T | Error | undefined
type UiProps = ProductItem[]

const sortBy = (type: string) => (a: any, b: any) => a[type] > b[type] ? 1 : -1

const columns = [{
  dataIndex: 'displayName',
  defaultSortOrder: 'ascend' as 'ascend',
  sorter: sortBy('displayName'),
  title: <Abbr.Pd/>
}]

const components: TableComponents = {
  body: {
    row: (props) => <BodyRow {...props}/>
  }
}

export default class PositionTableUi extends React.Component<Props, State> {
  public render () {
    return (
      <Table
        columns={columns}
        components={components}
        rowKey={(record) => record.productId} />
    )
  }
}
