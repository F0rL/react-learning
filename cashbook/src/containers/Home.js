import React, { Component } from 'react'

import {
  LIST_VIEW,
  CHART_VIEW,
  TYPE_INCOME,
  TYPE_OUTCOME,
  parseToYearAndMonth,
  padLeft
} from '../utils/utility'
import PriceList from '../components/PriceList'
import ViewTable from '../components/ViewTable'
import MonthPiacker from '../components/MonthPiacker'
import CreateBtn from '../components/CreateBtn'
import TotalPrice from '../components/TotalPrice'

const items = [
  {
    id: 1,
    title: '去云南旅行',
    price: 200,
    date: '2019-10-10',
    cid: 1
  },
  {
    id: 2,
    title: '去云南旅行',
    price: 400,
    date: '2019-11-12',
    cid: 1
  },
  {
    id: 3,
    title: '余额宝',
    price: 400,
    date: '2019-10-12',
    cid: 2
  }
]

const categories = {
  '1': {
    id: 1,
    name: '旅行',
    type: 'outcome',
    iconName: 'ios-plane'
  },
  '2': {
    id: 1,
    name: '理财',
    type: 'income',
    iconName: 'logo-yen'
  }
}

const newItem = {
  id: 4,
  title: '新添加的项目',
  price: 300,
  date: '2019-10-10',
  cid: 1
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items,
      currentDate: parseToYearAndMonth(),
      tabView: LIST_VIEW
    }
  }

  changeView = (index) => {
    this.setState({
      tabView: index
    })
  }
  changeDate = (year, month) => {
    console.log(year,month)
    this.setState({
      currentDate: {year, month}
    })
  }
  modifyItem = (modifiedItem) => {
    const modifiedItems = this.state.items.map(item => {
      if(item.id === modifiedItem.id) {
        return {...item, title: '更新后的标题'}
      }else {
        return item
      }
    })
    this.setState({
      items: modifiedItems
    })
  }
  createItem = () => {
    this.setState({
      items: [newItem, ...this.state.items]
    })
  }
  deleteItem = (deleteItem) => {
    const filteredItems = this.state.items.filter(item => item.id !== deleteItem.id)
    this.setState({
      items: filteredItems
    })
  }

  render() {
    const { items, currentDate, tabView } = this.state
    const itemsWithCategory = items.map(item => {
      item.category = categories[item.cid]
      return item
    }).filter(item => {
      return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
    })
    let totalIncome = 0, totalOutcome = 0
    itemsWithCategory.forEach(item => {
      if (item.category.type === TYPE_OUTCOME) {
        totalOutcome += item.price
      } else if(item.category.type === TYPE_INCOME) {
        totalIncome += item.price
      }
    })
    return (
      <React.Fragment>
        <header>
          <div className="row mb-5"></div>
          <div className="row">
            <div className="col">
              <MonthPiacker
                year={currentDate.year}
                month={currentDate.month}
                onChange={this.changeDate}
              />
            </div>
            <div className="col">
              <TotalPrice income={totalIncome} outcome={totalOutcome} />
            </div>
          </div>
        </header>
        <div className="content-area py-3 px-3">
          <ViewTable
            activeTab={tabView}
            onTabChange={this.changeView}
          />
          <CreateBtn onClick={this.createItem} />
          { tabView  === LIST_VIEW &&
            <PriceList
              items={itemsWithCategory}
              onModifyItem={this.modifyItem}
              onDeleteItem={this.deleteItem}
            />
          }
          { tabView  === CHART_VIEW &&
            <h1>图表模式</h1>
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Home
