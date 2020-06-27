import React from 'react'
import { ColumnChart } from '@opd/g2plot-react'

const config = {title: {
  visible: false,
  text: 'Title',
},
forceFit: true,
data: [
  {
    type: 'Sharon',
    sales: 38,
  },
  {
    type: 'Tilly',
    sales: 52,
  },
  {
    type: '生鲜水果',
    sales: 61,
  },
  {
    type: '美容洗护',
    sales: 145,
  },
  {
    type: '母婴用品',
    sales: 48,
  },
  {
    type: '进口食品',
    sales: 38,
  },
  {
    type: '食品饮料',
    sales: 38,
  },
  {
    type: '家庭清洁',
    sales: 38,
  },
],
padding: 'auto',
xField: 'type',
yField: 'sales',
meta: {
  type: {
    visible: false,
    alias: 'Dominic',
  },
  sales: {
    alias: 'Dom',
  },
},
}

export default () => (
  <section>
    <ColumnChart {...config} />
  </section>
)