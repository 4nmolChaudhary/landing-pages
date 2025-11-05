import React from 'react'
import { Button as ButtonBase } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type ButtonProps = React.ComponentProps<'button'> & {
  className?: string
  children?: React.ReactNode
  loading?: boolean
  text?: string
  loadingText?: string
}

export const Button = ({ className, loading, text, loadingText, ...rest }: ButtonProps) => {
  return (
    <ButtonBase disabled={loading || rest?.disabled} className={cn(className, 'cursor-pointer relative font-[family-name:var(--font-inter-tight)]')} {...rest}>
      {loading ? <Loader2 className='h-4 w-4 animate-spin' /> : ''}
      <span>{loading ? loadingText : text}</span>
    </ButtonBase>
  )
}
