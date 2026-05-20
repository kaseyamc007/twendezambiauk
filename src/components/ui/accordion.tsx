import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const AccordionContext = React.createContext<{
  activeItem: string | null
  setActiveItem: (value: string | null) => void
  collapsible?: boolean
}>({
  activeItem: null,
  setActiveItem: () => {},
})

export function Accordion({
  children,
  className,
  type = "single",
  collapsible = true,
  ...props
}: {
  children: React.ReactNode
  className?: string
  type?: "single"
  collapsible?: boolean
}) {
  const [activeItem, setActiveItem] = React.useState<string | null>(null)

  return (
    <AccordionContext.Provider value={{ activeItem, setActiveItem, collapsible }}>
      <div className={cn("space-y-4", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const AccordionItemContext = React.createContext<{ value: string }>({ value: "" })

export function AccordionItem({
  children,
  className,
  value,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  className?: string
  value: string
}) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={cn("border-b", className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

export function AccordionTrigger({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
}) {
  const { activeItem, setActiveItem, collapsible } = React.useContext(AccordionContext)
  const { value } = React.useContext(AccordionItemContext)
  const isOpen = activeItem === value

  const handleToggle = () => {
    if (isOpen) {
      if (collapsible) {
        setActiveItem(null)
      }
    } else {
      setActiveItem(value)
    }
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </button>
  )
}

export function AccordionContent({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
}) {
  const { activeItem } = React.useContext(AccordionContext)
  const { value } = React.useContext(AccordionItemContext)
  const isOpen = activeItem === value

  if (!isOpen) return null

  return (
    <div
      className={cn(
        "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  )
}
