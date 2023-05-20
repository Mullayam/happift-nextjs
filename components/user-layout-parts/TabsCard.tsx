import React, { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export type TabsContent = {
  header?: string
  button?: boolean
  children?: ReactNode
}
export default function TabsCard({ header, children, button }: TabsContent) {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>{header}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {children ? (
          children
        ) : (
          <>
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </>
        )}
      </CardContent>
      {children && button && (
        <CardFooter>
          <Button>Save changes</Button>
        </CardFooter>
      )}
    </Card>
  )
}
