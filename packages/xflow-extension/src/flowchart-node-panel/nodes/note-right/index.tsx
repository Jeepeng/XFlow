import React from 'react'
import type { NsGraph } from '@antv/xflow-core'
import { createPath } from '../../utils'
import { NODE_WIDTH, NODE_HEIGHT, NODE_PADDING, DefaultNodeConfig } from '../../constants'

export const NoteRightNode: NsGraph.INodeRender = props => {
  const { size = { width: NODE_WIDTH, height: NODE_HEIGHT }, data = {} } = props
  const {
    stroke = DefaultNodeConfig.stroke,
    label = DefaultNodeConfig.label,
    fill = 'transparent',
    fontFill = DefaultNodeConfig.fontFill,
    fontSize = DefaultNodeConfig.fontSize,
  } = data
  const { width, height } = size
  const dx = 6
  const path = [
    ['M', NODE_PADDING, NODE_PADDING], // top-left
    ['C', dx, NODE_PADDING, dx, dx],
    ['', dx, (height - dx) / 2],
    ['L', 2 * dx, height / 2],
    ['L', dx, (height + dx) / 2],
    ['L', dx, height - 2 * NODE_PADDING - dx],
    ['C', dx, height - 2 * NODE_PADDING, NODE_PADDING, height - 2 * NODE_PADDING],
    ['', NODE_PADDING, height - 2 * NODE_PADDING],
  ]

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      // viewBox={`0 0 40 30`}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <path d={createPath(path)} fill={fill} stroke={stroke} />
      <text
        x={width / 2}
        y={height / 2}
        fill={fontFill}
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize={fontSize}
      >
        {label}
      </text>
      Sorry, your browser does not support inline SVG.
    </svg>
  )
}
