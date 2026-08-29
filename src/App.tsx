import { useState } from 'react'
import {
  Button,
  Badge,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  Input,
  Switch,
  Toaster,
  toast,
} from 'odt-lightweight-ui'

import { OverviewSection } from './sections/OverviewSection'
import { FormsSection } from './sections/FormsSection'
import { ComponentsSection } from './sections/ComponentsSection'

// --- Types -------------------------------------------------------------------

type TabId = 'overview' | 'forms' | 'components'

const TABS: { id: TabId; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'forms', label: 'Forms' },
  { id: 'components', label: 'Components' },
]

// --- App ---------------------------------------------------------------------

export default function App() {
  const [tab, setTab] = useState<TabId>('overview')
  const [modalOpen, setModalOpen] = useState(false)
  const [notify, setNotify] = useState(true)
  const [isDeploying, setIsDeploying] = useState(false)

  const handleDeploy = () => {
    setIsDeploying(true)
    setTimeout(() => {
      setIsDeploying(false)
      setModalOpen(false)
      toast.success('Service deployed to production!')
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-surface font-sans antialiased">
      <Toaster position="top-right" />

      {/* Hero Header */}
      <header className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex flex-wrap items-end justify-between gap-6">

            {/* Brand */}
            <div>
              <h1 className="text-5xl font-extrabold leading-none tracking-tight">
                <span style={{ color: 'hsl(240 78.3% 34.3%)' }}>ODT</span>{' '}
                <span className="font-light" style={{ color: 'hsl(47 100% 45%)' }}>lightweight</span>
              </h1>
              <p className="mt-1.5 text-lg text-fg font-light">
                Token-driven React UI - clean, lightweight, composable.
              </p>
              <div className="mt-3 flex gap-2 items-center">
                <Badge variant="subtle" color="primary">v1.1.4</Badge>
                <Badge variant="subtle" color="success" dot>Stable</Badge>
                <Badge variant="subtle" color="info">React 19</Badge>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 items-center">
              <Button variant="ghost" onClick={() => toast.info('ODT Lightweight is active!')}>
                Quick Toast
              </Button>
              <Button variant="capsule" color="primary" onClick={() => setModalOpen(true)}>
                Launch Modal
              </Button>
            </div>

          </div>
        </div>
      </header>

      {/* Sticky Tab Bar */}
      <div className="sticky top-0 z-10 bg-surface/80 backdrop-blur-sm border-b border-neutral-100">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex gap-0">
            {TABS.map(({ id, label }) => {
              const isActive = tab === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setTab(id)}
                  className={[
                    'px-5 py-3.5 text-sm font-medium transition-all border-b-2',
                    isActive
                      ? 'border-primary-900 text-primary-900'
                      : 'border-transparent text-neutral-400 hover:text-neutral-700',
                  ].join(' ')}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Page Body */}
      <main className="mx-auto max-w-5xl px-6 py-10">
        {tab === 'overview' && <OverviewSection />}
        {tab === 'forms' && <FormsSection />}
        {tab === 'components' && <ComponentsSection />}
      </main>

      {/* Deploy Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} size="md">
        <ModalHeader>
          <ModalTitle>Deploy Microservice</ModalTitle>
          <ModalDescription>
            Launch a containerized service to the production cluster.
          </ModalDescription>
        </ModalHeader>

        <ModalBody>
          <div className="flex flex-col gap-4">
            <Input label="Service Name" defaultValue="payment-gateway-v2" />
            <Input label="Container Image" defaultValue="docker.odt.internal/payment:v2.4.1" />
            <Switch checked={notify} onCheckedChange={setNotify} label="Notify team on deploy" />
          </div>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
          <Button variant="filled" color="primary" loading={isDeploying} onClick={handleDeploy}>
            Confirm & Deploy
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  )
}
