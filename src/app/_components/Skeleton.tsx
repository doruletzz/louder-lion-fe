import React from 'react'
import { cn } from '../_utils/cn';

type Props = {
    className?: string;
}

const Skeleton = ({className}: Props) => {
  return (
    <div className={cn('bg-neutral-200 animate-pulse rounded-2xl', className)} />
  )
}

export default Skeleton