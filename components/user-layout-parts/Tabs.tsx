import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "../ui/button"
import AccountForm from "./AccountForm"
import KYCDocsForm from "./KYC-DocsForm"
import { Nofitfy } from "./NofitficaitonTab"
import TabsCard from "./TabsCard"

export function CustomTab() {
  return (
    <Tabs defaultValue="account" className="h-[540px] w-full">
      <TabsList className="grid w-full grid-cols-3  md:grid-cols-5">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="kyc">KYC</TabsTrigger>
      </TabsList>
      <TabsContent className="h-[500px]" value="account">
        <TabsCard header={"Account"}>
          <AccountForm />
        </TabsCard>
      </TabsContent>
      <TabsContent className="h-[500px]" value="password">
        <TabsCard header={"Password"}>
          <div className="space-y-1">
            <Label htmlFor="current">Current password</Label>
            <Input id="current" type="password" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">New password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="confirm">Confirm password</Label>
            <Input id="confirm_password" type="password" />
          </div>
          <Button variant="destructive">Submit</Button>
        </TabsCard>
      </TabsContent>
      <TabsContent className="h-[500px]" value="notifications">
        <TabsCard>
          <Nofitfy />
        </TabsCard>
      </TabsContent>
      <TabsContent className="h-[500px]" value="security">
        <TabsCard header={"Security"}>None</TabsCard>
      </TabsContent>
      <TabsContent className="h-[500px]" value="kyc">
        <TabsCard header={"KYC Documents"}>
          <KYCDocsForm />
        </TabsCard>
      </TabsContent>
    </Tabs>
  )
}
