import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "../ui/button"
import AccountForm from "./AccountForm"
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
        <TabsCard header={"Security"} button={false}>
          None
        </TabsCard>
      </TabsContent>
      <TabsContent className="h-[500px]" value="kyc">
        <TabsCard header={"KYX"} button={true}>
          <div>
            <div className="mb-4 grid w-full max-w-sm items-center gap-4">
              <Label htmlFor="picture">ID PROOF</Label>
              <Input id="picture" type="file" accept="image/*" />
            </div>
            <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">PAN CARD</Label>
              <Input id="picture" type="file" accept="image/*" />
            </div>
            <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">SELFIE</Label>
              <Input id="picture" type="file" accept="image/*" />
              <small className="text-red-500">
                {" "}
                Take Selfie with Pan Card in Hand
              </small>
            </div>
          </div>
        </TabsCard>
      </TabsContent>
    </Tabs>
  )
}
