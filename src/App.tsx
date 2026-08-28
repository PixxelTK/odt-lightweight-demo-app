import { useState } from 'react'
import {
  // Actions & Navigation
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  // Forms & Inputs
  Input,
  PasswordInput,
  SearchInput,
  TextArea,
  PinInput,
  Switch,
  Checkbox,
  RadioGroup,
  // Data Display
  Badge,
  Avatar,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  StatCard,
  ProgressBar,
  Heading,
  Text,
  // Overlays & Feedback
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  Toaster,
  toast,
} from 'odt-lightweight-ui'

export default function App() {
  // Modal state
  const [modalOpen, setModalOpen] = useState(false)

  // Form states
  const [switchChecked, setSwitchChecked] = useState(true)
  const [checkboxChecked, setCheckboxChecked] = useState(true)
  const [radioValue, setRadioValue] = useState('pro')
  const [pinValue, setPinValue] = useState('')
  const [saveLoading, setSaveLoading] = useState(false)

  const handleSave = () => {
    setSaveLoading(true)
    setTimeout(() => {
      setSaveLoading(false)
      toast.success('Account settings saved successfully!')
    }, 1200)
  }

  return (
    <div style={{ maxWidth: '1080px', margin: '2.5rem auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '3rem', fontFamily: 'var(--font-family-sans)' }}>
      {/* Toast Container */}
      <Toaster position="top-right" />

      {/* Hero Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--color-line, #e4e4e9)', paddingBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <Heading as="h1" size="3xl">ODT Lightweight UI Showcase</Heading>
            <Badge variant="filled" color="primary">v1.0.0</Badge>
          </div>
          <Text size="lg" color="muted">
            Token-driven, ultra-lightweight React UI library with zero styling overhead.
          </Text>
        </div>

        {/* Action Controls & Dropdown */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <Button variant="ghost" onClick={() => toast.info('Welcome to ODT Design System!')}>
            Quick Toast
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="frosted" color="primary">Actions Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" style={{ width: '220px' }}>
              <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
              <DropdownMenuItem onSelect={() => toast.success('Exporting dataset...')}>
                Export Report
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => toast.info('Navigating to settings...')}>
                System Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => setModalOpen(true)}>
                Open Dialog Modal
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="danger" onSelect={() => toast.error('Account deactivated!')}>
                Deactivate Account
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="filled" color="primary" onClick={() => setModalOpen(true)}>
            Launch Modal
          </Button>
        </div>
      </div>

      {/* 1. Analytics & Metrics */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Heading as="h2" size="xl">1. Metrics & Data Display</Heading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          <StatCard
            title="Total Bookings"
            value="14,250"
            trend="+18.4% vs last month"
            trendDirection="positive"
            progress={74}
          />
          <StatCard
            title="Active Workspaces"
            value="1,840"
            trend="+8.2% new users"
            trendDirection="positive"
            color="primary"
            progress={88}
          />
          <StatCard
            title="Server Load"
            value="38.5%"
            trend="-2.1% stabilized"
            trendDirection="neutral"
            color="warning"
            progress={38}
          />
          <StatCard
            title="System Incidents"
            value="0"
            trend="100% SLA Uptime"
            trendDirection="positive"
            color="success"
            progress={100}
          />
        </div>
      </section>

      {/* 2. Interactive Form & Profile Card */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Heading as="h2" size="xl">2. Forms & User Controls</Heading>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.5rem' }}>
          {/* Main Profile Card */}
          <Card variant="elevated">
            <CardHeader>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Avatar name="Korn Chatikavanij" size="lg" />
                <div>
                  <CardTitle>Organization Settings</CardTitle>
                  <CardDescription>Update your enterprise workspace configuration</CardDescription>
                </div>
              </div>
              <Badge variant="subtle" color="success" dot>Verified</Badge>
            </CardHeader>

            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <Input label="Workspace Name" defaultValue="ODT Global Enterprise" />
              <SearchInput placeholder="Search team members, permissions..." />
              <PasswordInput label="Admin Passkey" defaultValue="supersecretpasscode" />
              <TextArea label="Project Scope & Description" rows={3} defaultValue="Developing next-gen lightweight web tools and design tokens." />

              <div>
                <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>Security OTP / PIN Code</Text>
                <PinInput length={6} value={pinValue} onChange={setPinValue} />
              </div>
            </CardContent>

            <CardFooter style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button variant="ghost" onClick={() => toast.info('Draft discarded')}>
                Discard
              </Button>
              <Button variant="filled" color="primary" loading={saveLoading} onClick={handleSave}>
                Save Changes
              </Button>
            </CardFooter>
          </Card>

          {/* Preferences & Toggles Card */}
          <Card variant="outlined">
            <CardHeader>
              <CardTitle>Notifications & Billing</CardTitle>
              <CardDescription>Manage your subscription and automated alerts</CardDescription>
            </CardHeader>

            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Switch
                checked={switchChecked}
                onCheckedChange={setSwitchChecked}
                label="Automated Deployments"
                description="Trigger automated webhook builds on git push."
              />

              <Checkbox
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
                label="Subscribe to weekly analytics digest"
              />

              <div>
                <Text size="sm" weight="semibold" style={{ marginBottom: '0.75rem' }}>Subscription Tier</Text>
                <RadioGroup
                  value={radioValue}
                  onChange={setRadioValue}
                  options={[
                    { label: 'Starter Plan (Free)', value: 'starter' },
                    { label: 'Professional Plan ($49/mo)', value: 'pro' },
                    { label: 'Enterprise Custom', value: 'enterprise' },
                  ]}
                />
              </div>

              <div>
                <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>Storage Utilization (82%)</Text>
                <ProgressBar value={82} color="primary" size="md" />
              </div>
            </CardContent>

            <CardFooter>
              <Button variant="capsule" color="secondary" fullWidth onClick={() => toast.success('Plan upgraded to Enterprise!')}>
                Upgrade Membership
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* 3. Button & Badge Gallery */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Heading as="h2" size="xl">3. Button & Badge Primitives</Heading>

        <Card variant="muted">
          <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '1.5rem' }}>
            <div>
              <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>Button Variants & Colors</Text>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Button variant="filled" color="primary">Filled Primary</Button>
                <Button variant="frosted" color="primary">Frosted Glass</Button>
                <Button variant="capsule" color="secondary">Capsule Secondary</Button>
                <Button variant="ghost" color="danger">Ghost Danger</Button>
                <Button variant="filled" color="primary" loading>Loading Button</Button>
              </div>
            </div>

            <div>
              <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>Badge Variants</Text>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Badge variant="filled" color="primary">Primary</Badge>
                <Badge variant="subtle" color="success" dot>Active</Badge>
                <Badge variant="outlined" color="warning">Pending</Badge>
                <Badge variant="subtle" color="danger">Failed</Badge>
                <Badge variant="filled" color="secondary">Featured</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Modal Dialog */}
      <Modal open={modalOpen} onOpenChange={setModalOpen} size="md">
        <ModalHeader>
          <ModalTitle>Confirm Workspace Action</ModalTitle>
          <ModalDescription>
            Are you sure you want to initialize the production deployment pipeline? This action will apply migrations.
          </ModalDescription>
        </ModalHeader>

        <ModalBody>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Input label="Confirmation Phrase" placeholder='Type "DEPLOY" to confirm' />
            <Switch defaultChecked label="Notify team via Slack" />
          </div>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="filled"
            color="primary"
            onClick={() => {
              setModalOpen(false)
              toast.success('Production pipeline successfully initiated!')
            }}
          >
            Confirm & Deploy
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
