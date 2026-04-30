import { ProgressBarProps } from '@/types'

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="progress-bar">
      <div 
        className="progress-fill" 
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
