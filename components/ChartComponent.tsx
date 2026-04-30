'use client'

import { useEffect, useRef } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, ArcElement } from 'chart.js'
import { Bar, Radar, Pie, Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, ArcElement)

interface ChartComponentProps {
  type: 'bar' | 'radar' | 'pie' | 'line'
  data: any
  options?: any
  className?: string
}

export default function ChartComponent({ type, data, options, className = '' }: ChartComponentProps) {
  const chartRef = useRef<any>(null)

  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#f1f5f9',
          font: {
            family: 'Tajawal',
            size: 14
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(30, 41, 59, 0.9)',
        titleColor: '#f1f5f9',
        bodyColor: '#94a3b8',
        borderColor: '#2563eb',
        borderWidth: 1,
        titleFont: {
          family: 'Tajawal',
          size: 14
        },
        bodyFont: {
          family: 'Tajawal',
          size: 12
        }
      }
    },
    scales: type !== 'pie' && type !== 'radar' ? {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#94a3b8',
          font: {
            family: 'Tajawal'
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#94a3b8',
          font: {
            family: 'Tajawal'
          }
        }
      }
    } : undefined
  }

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return <Bar ref={chartRef} data={data} options={{ ...defaultOptions, ...options }} />
      case 'radar':
        return <Radar ref={chartRef} data={data} options={{ ...defaultOptions, ...options }} />
      case 'pie':
        return <Pie ref={chartRef} data={data} options={{ ...defaultOptions, ...options }} />
      case 'line':
        return <Line ref={chartRef} data={data} options={{ ...defaultOptions, ...options }} />
      default:
        return null
    }
  }

  return (
    <div className={`chart-container ${className}`}>
      {renderChart()}
    </div>
  )
}
