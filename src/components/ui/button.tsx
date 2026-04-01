import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base styles — all buttons share these
  "group/button inline-flex shrink-0 items-center justify-center text-[1.2rem] font-medium whitespace-nowrap transition-all outline-none select-none cursor-pointer rounded-full border border-transparent font-sans focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Primary SM — gradient button (#51A6F6 → #1258DE → #51A6F6)
        default: 'bg-gradient-btn text-white hover:opacity-90',

        // Primary LG — soft gradient (#3893E8 → #C7E4FF)
        gradient: 'bg-gradient-primary-soft text-white hover:opacity-90',

        // Outline — transparent, dark border 20% opacity
        outline: 'bg-transparent text-black border-2 border-black/20 hover:bg-black/5',

        // Dark — black fill, white text
        dark: 'bg-black text-white hover:opacity-85',

        // Ghost — no background, subtle hover
        ghost: 'bg-transparent text-black hover:bg-black/5',

        // Link
        link: 'text-primary underline-offset-4 hover:underline',

        // Destructive
        destructive:
          'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20',
      },
      size: {
        // Primary SM — fixed height 54px, 20px horizontal padding
        default: 'h-[3rem] gap-2 px-5',
        defaultIconBtn: 'h-[3rem] gap-2 px-4',

        // Primary LG — fixed height 87px, 35px horizontal padding
        lg: 'h-[4rem] gap-4 px-[1.5rem] text-xl',

        // Small
        sm: 'h-10 gap-1.5 px-4 text-base',

        // Extra small
        xs: 'h-8 gap-1 px-3 text-sm',

        // Icon only — 54px circle
        icon: 'size-[3.375rem]',

        'icon-sm': 'size-10',
        'icon-xs': 'size-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
