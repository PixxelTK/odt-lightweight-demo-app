import { useState } from 'react'
import {
  Card,
  CardContent,
  Input,
  PasswordInput,
  TextArea,
  PinInput,
  Switch,
  Checkbox,
  RadioGroup,
  Radio,
  Button,
  Badge,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  toast,
  CardHeader,
  CardDescription,
  CardTitle,
} from 'odt-lightweight-ui'

// --- Profile & Credentials Card ----------------------------------------------

const REGIONS = [
  { group: 'United States', items: ['us-east-1', 'us-east-2', 'us-west-1', 'us-west-2'] },
  { group: 'Europe', items: ['eu-west-1', 'eu-central-1', 'eu-north-1'] },
  { group: 'Asia Pacific', items: ['ap-southeast-1', 'ap-northeast-1', 'ap-south-1'] },
]

function CredentialsCard() {
  const [pin, setPin] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [region, setRegion] = useState('us-east-1')

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      toast.success('Credentials updated!')
    }, 1000)
  }

  return (
    <Card variant="elevated" radius="2xl">
      <CardHeader>
        <CardTitle>Identity & Credentials</CardTitle>
        <CardDescription>Workspace namespace, API keys, and 2FA</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-0 p-0">
        {/* Form Fields */}
        <div className="flex flex-col gap-5">
          <Input
            label="Workspace Name"
            defaultValue="ODT Global Enterprise"
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Owner Email"
              defaultValue="admin@odt.io"
            />

            {/* Region - DropdownMenu picker */}
            <DropdownMenu>
              <DropdownMenuTrigger label="Deployment Region" fullWidth>
                {region}
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start" style={{ width: '220px' }}>
                {REGIONS.map(({ group, items }, gi) => (
                  <div key={group}>
                    {gi > 0 && <DropdownMenuSeparator />}
                    <DropdownMenuLabel>{group}</DropdownMenuLabel>
                    {items.map((r) => (
                      <DropdownMenuItem
                        key={r}
                        onClick={() => {
                          setRegion(r)
                          toast.info(`Region set to ${r}`)
                        }}
                      >
                        {r}
                        {region === r && (
                          <svg className="ml-auto h-3.5 w-3.5 text-primary-600" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </DropdownMenuItem>
                    ))}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

          </div>

          <PasswordInput
            label="Master Passkey"
            defaultValue="secret-cluster-key"
            helperText="Used for CI/CD pipeline and token signing"
          />

          <TextArea
            label="Cluster Notes"
            rows={3}
            defaultValue="Node.js and Go microservices with Redis caching layer and PostgreSQL primary."
          />

          {/* PIN Section */}
          <div>
            <p className="mb-1 text-sm font-medium text-fg">Two-Factor PIN Confirmation</p>
            <p className="mb-3 text-xs text-fg-muted">Enter your 6-digit TOTP from your Authenticator app</p>
            <PinInput length={6} value={pin} onChange={setPin} />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-start gap-2 mt-6">
          <Button variant="filled" color="primary" loading={isSaving} onClick={handleSave}>
            Save Changes
          </Button>
          <Button variant="ghost" onClick={() => toast.info('Changes discarded')}>
            Reset
          </Button>
        </div>

      </CardContent>
    </Card>
  )
}

// --- Automations & Plan Card --------------------------------------------------

const PLANS = [
  { value: 'starter', label: 'Developer Sandbox', price: 'Free', color: 'info' as const },
  { value: 'pro', label: 'Professional Cluster', price: '$49/mo', color: 'primary' as const },
  { value: 'enterprise', label: 'Dedicated Enterprise', price: '$299/mo', color: 'secondary' as const },
]

function AutomationsCard() {
  const [autoScale, setAutoScale] = useState(true)
  const [rollingDeploy, setRollingDeploy] = useState(true)
  const [circuitBreaker, setCircuitBreaker] = useState(false)
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [weeklyDigest, setWeeklyDigest] = useState(false)
  const [plan, setPlan] = useState('pro')

  return (
    <Card variant="elevated" radius="2xl">
      <CardHeader>
        <CardTitle>Automations & Billing</CardTitle>
        <CardDescription>Scaling policies, alerts, and subscription tier</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-0 p-0">
        <div className="flex flex-col gap-6">

          {/* Automation Toggles */}
          <div>
            <p className="mb-3 text-sm font-medium text-fg">
              Deployment Policies
            </p>
            <div className="flex flex-col gap-4">
              <Switch
                checked={autoScale}
                onCheckedChange={setAutoScale}
                label="Dynamic Autoscaling"
                description="Scale pods automatically when CPU exceeds 75%."
              />
              <Switch
                checked={rollingDeploy}
                onCheckedChange={setRollingDeploy}
                label="Zero-Downtime Rollouts"
                description="Blue-green deploy without dropped connections."
              />
              <Switch
                checked={circuitBreaker}
                onCheckedChange={setCircuitBreaker}
                label="Circuit Breaker"
                description="Halt routing when error rate exceeds 5%."
              />
            </div>
          </div>

          {/* Notification Checkboxes */}
          <div>
            <p className="mb-3 text-sm font-medium text-fg">
              Notifications
            </p>
            <div className="flex flex-col gap-3">
              <Checkbox
                checked={emailAlerts}
                onCheckedChange={setEmailAlerts}
                label="Forward critical incidents to #devops-alerts"
              />
              <Checkbox
                checked={weeklyDigest}
                onCheckedChange={setWeeklyDigest}
                label="Send weekly cost report to billing team"
              />
            </div>
          </div>

          {/* Plan Selection */}
          <div>
            <p className="mb-3 text-sm font-medium text-fg">
              Infrastructure Plan
            </p>
            <RadioGroup value={plan} onValueChange={setPlan}>
              <div className="flex flex-col gap-2">
                {PLANS.map(({ value, label, price, color }) => (
                  <label
                    key={value}
                    className={[
                      'flex items-center justify-between rounded-xl border gap-2 px-4 py-3 cursor-pointer transition-all',
                      plan === value
                        ? 'border-neutral-200 bg-primary-50/60'
                        : 'border-neutral-100 bg-white hover:bg-neutral-50',
                    ].join(' ')}
                    onClick={() => setPlan(value)}
                  >
                    <div className="flex items-center gap-3">
                      <Radio value={value} />
                      <span className="text-sm font-medium text-fg">{label}</span>
                    </div>
                    <Badge variant={plan === value ? 'filled' : 'subtle'} color={color} size="sm">
                      {price}
                    </Badge>
                  </label>
                ))}
              </div>
            </RadioGroup>
          </div>

        </div>

        {/* Footer */}
        <div className='mt-6'>
          <Button
            variant="capsule"
            color="primary"
            fullWidth
            onClick={() => toast.success(`Switched to "${PLANS.find((p) => p.value === plan)?.label}" plan!`)}
          >
            Update Subscription
          </Button>
        </div>

      </CardContent>
    </Card>
  )
}

// --- Section -----------------------------------------------------------------

export function FormsSection() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <CredentialsCard />
      <AutomationsCard />
    </section>
  )
}
