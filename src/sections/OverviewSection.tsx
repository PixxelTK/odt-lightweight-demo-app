
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,

  Avatar,
  Badge,
  StatCard,
  Button,
  ProgressBar,
  toast,
} from 'odt-lightweight-ui'

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  { name: 'auth-gateway', region: 'us-east-1a', pods: '4/4', latency: '12ms', status: 'Healthy' as const },
  { name: 'payment-svc', region: 'us-east-1b', pods: '6/6', latency: '18ms', status: 'Healthy' as const },
  { name: 'telemetry', region: 'us-east-1c', pods: '2/2', latency: '9ms', status: 'Healthy' as const },
  { name: 'notifications', region: 'us-east-1a', pods: '3/3', latency: '15ms', status: 'Healthy' as const },
]

// ─── Section ─────────────────────────────────────────────────────────────────

export function OverviewSection() {
  return (
    <section className="space-y-8">

      {/* Stat Cards */}
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
        <StatCard
          title="Monthly Requests"
          value="14.8M"
          trend="+12.4%"
          trendDirection="positive"
          color="primary"
          progress={74}
        />
        <StatCard
          title="Active Services"
          value="32 / 32"
          trend="100%"
          trendDirection="positive"
          color="success"
          progress={100}
        />
        <StatCard
          title="Avg Latency"
          value="24.6 ms"
          trend="-3.2ms"
          trendDirection="positive"
          color="info"
          progress={25}
        />
      </div>

      {/* Active Services Table */}
      <Card>
        <CardHeader action={<Badge variant="subtle" color="success" dot>All Systems Green</Badge>}>
          <CardTitle>Active Microservices</CardTitle>
          <CardDescription>Live status across running service deployments</CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          {services.map((svc) => (
            <div
              key={svc.name}
              className="flex items-center justify-between rounded-xl bg-surface-muted px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold text-fg">{svc.name}</p>
                <p className="text-xs text-fg-subtle">{svc.region} &mdash; {svc.pods} pods</p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-xs font-medium text-fg-subtle">{svc.latency}</p>
                <Badge variant="subtle" color="success" size="sm">{svc.status}</Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Storage & Bandwidth */}
      <div className="grid gap-5 md:grid-cols-2">
        {[
          { label: 'NVMe Storage', used: '390 GB', total: '500 GB', value: 78, color: 'primary' as const },
          { label: 'Egress Bandwidth', used: '4.2 TB', total: '10 TB', value: 42, color: 'info' as const },
        ].map(({ label, used, total, value, color }) => (
          <Card key={label} variant="elevated" radius="2xl">
            <CardHeader>
              <CardTitle>{label}</CardTitle>
              <CardDescription>{used} of {total} used</CardDescription>
            </CardHeader>
            <CardContent>
              <ProgressBar value={value} color={color} size="md" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Team Members */}
      <Card variant="elevated" radius="2xl">
        <CardHeader
          action={
            <Button
              variant="capsule"
              onClick={() => toast.info('Invite sent!')}
            >
              + Invite
            </Button>
          }
        >
          <CardTitle>Workspace Members</CardTitle>
          <CardDescription>Active contributors on this cluster</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-3">
            {[
              { name: 'Korn Chatikavanij', role: 'Owner', color: 'primary' as const },
              { name: 'Alex Rivera', role: 'Admin', color: 'secondary' as const },
              { name: 'Sam Watkins', role: 'Developer', color: 'neutral' as const },
            ].map(({ name, role, color }) => (
              <div key={name} className="flex items-center justify-between rounded-xl bg-surface-muted px-4 py-3">
                <div className="flex items-center gap-3">
                  <Avatar name={name} size="sm" color={color} />
                  <div>
                    <p className="text-sm font-semibold text-fg">{name}</p>
                    <p className="text-xs text-fg-subtle">{role}</p>
                  </div>
                </div>
                <Badge variant="subtle" color={color === 'primary' ? 'primary' : color === 'secondary' ? 'secondary' : 'info'} size="sm">
                  {role}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

    </section>
  )
}
