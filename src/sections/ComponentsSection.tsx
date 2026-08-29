import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
  Avatar,
  ProgressBar,
  Switch,
  Checkbox,
  toast,
} from 'odt-lightweight-ui'

// --- Subscription Plan Card ---------------------------------------------------

function PlanCard() {
  const features = [
    'Unlimited collaborative projects',
    'Advanced team permissions & audit logs',
    'Real-time analytics dashboard',
    '24/7 priority dedicated support',
  ]

  return (
    <Card
      radius="2xl"
      style={{ background: 'linear-gradient(to bottom, var(--color-primary-50), #ffffff)' }}
    >
      <CardHeader
        action={
          <p className="text-right">
            <span className="text-3xl font-bold text-primary-900">$49</span>
            <span className="text-sm text-neutral-400">/mo</span>
          </p>
        }>
        <CardTitle>Pro Plan</CardTitle>
        <CardDescription>Everything you need for your team</CardDescription>
      </CardHeader>

      <CardContent>
        <ul className="flex flex-col gap-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
              <svg className="h-4 w-4 shrink-0 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-2">
        <Button variant="capsule" color="primary" fullWidth onClick={() => toast.success('Upgraded to Pro!')}>
          Upgrade to Pro
        </Button>
      </CardFooter>
    </Card>
  )
}

// --- Event Card ---------------------------------------------------------------

function EventCard() {
  return (
    <Card variant="elevated" radius="2xl">
      <CardHeader
        action={
          <Badge variant="subtle" color="primary">Upcoming</Badge>
        }>
        <CardTitle>Design Sync</CardTitle>
        <CardDescription>Oct 12, 10:00 AM &mdash; 11:00 AM</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-neutral-600">
          Reviewing the new component library, token updates, and latest design mockups with the product team.
        </p>
      </CardContent>

      <CardFooter className="flex gap-3 pt-2">
        <Button variant="capsule" color="primary" onClick={() => toast.success('Joined meeting!')}>
          Join Meeting
        </Button>
        <Button variant="capsule" color="secondary" onClick={() => toast.info('Reschedule request sent')}>
          Reschedule
        </Button>
      </CardFooter>
    </Card>
  )
}

// --- Invite Card -------------------------------------------------------------

function TeamCard() {
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [digest, setDigest] = useState(false)
  const [checked, setChecked] = useState(true)

  return (
    <Card variant="elevated" radius="2xl">
      <CardHeader>
        <CardTitle>Team & Notifications</CardTitle>
        <CardDescription>Members and alert preferences</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        {/* Team Members */}
        <div className="flex flex-col gap-2">
          {[
            { name: 'Korn Chatikavanij', role: 'Owner', color: 'primary' as const },
            { name: 'Alex Rivera', role: 'Admin', color: 'secondary' as const },
          ].map(({ name, role, color }) => (
            <div key={name} className="flex items-center gap-3 rounded-xl bg-surface-muted px-3 py-2.5">
              <Avatar name={name} size="sm" color={color} />
              <div className="flex-1">
                <p className="text-sm font-semibold text-neutral-800">{name}</p>
                <p className="text-xs text-neutral-400">{role}</p>
              </div>
              <Badge variant="subtle" color={color} size="sm">{role}</Badge>
            </div>
          ))}
        </div>

        {/* Notification Settings */}
        <div className="flex flex-col gap-3">
          <Switch
            checked={emailAlerts}
            onCheckedChange={setEmailAlerts}
            label="Email Alerts"
            description="Instant team updates via email."
          />
          <Switch
            checked={digest}
            onCheckedChange={setDigest}
            label="Weekly Digest"
            description="Infrastructure cost report every Monday."
          />
          <Checkbox
            checked={checked}
            onCheckedChange={setChecked}
            label="Subscribe to release announcement list"
          />
        </div>
      </CardContent>
    </Card>
  )
}

// --- Primitives Row -----------------------------------------------------------

function PrimitivesCard() {
  return (
    <Card variant="elevated" radius="2xl">
      <CardHeader>
        <CardTitle>Buttons, Badges & Progress</CardTitle>
        <CardDescription>Core interactive primitives and status indicators</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        {/* Buttons */}
        <div>
          <p className="mb-3 text-sm font-medium text-fg">Buttons</p>
          <div className="flex flex-wrap gap-2.5 items-center">
            <Button variant="filled" color="primary" onClick={() => toast.success('Filled')}>Filled</Button>
            <Button variant="frosted" color="primary" onClick={() => toast.info('Frosted')}>Frosted</Button>
            <Button variant="capsule" color="secondary" onClick={() => toast.info('Capsule')}>Capsule</Button>
            <Button variant="ghost" color="danger" onClick={() => toast.error('Danger')}>Ghost</Button>
            <Button variant="filled" color="primary" loading>Loading</Button>
          </div>
        </div>

        {/* Badges */}
        <div>
          <p className="mb-3 text-sm font-medium text-fg">Badges</p>
          <div className="flex flex-wrap gap-2 items-center">
            <Badge variant="filled" color="primary">Primary</Badge>
            <Badge variant="subtle" color="success" dot>Active</Badge>
            <Badge variant="subtle" color="warning">Pending</Badge>
            <Badge variant="subtle" color="danger">Failed</Badge>
            <Badge variant="filled" color="secondary">Featured</Badge>
          </div>
        </div>

        {/* Progress Bars */}
        <div>
          <p className="mb-3 text-sm font-medium text-fg">Progress</p>
          <div className="flex flex-col gap-2">
            <ProgressBar value={82} color="primary" size="md" />
            <ProgressBar value={55} color="info" size="sm" />
            <ProgressBar value={30} color="warning" size="lg" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// --- Section -----------------------------------------------------------------

export function ComponentsSection() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <PlanCard />
      <EventCard />
      <TeamCard />
      <PrimitivesCard />
    </section>
  )
}
