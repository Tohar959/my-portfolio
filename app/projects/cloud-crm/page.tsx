import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, LayoutDashboard, ClipboardList, MailCheck, Database } from "lucide-react";

export default function CloudCrmPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,1),transparent_55%)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-16 pt-10 text-slate-200 sm:px-6 lg:px-8 lg:pt-16">
        {/* Back link */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-100 shadow shadow-black/40 transition hover:border-slate-300 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
        </div>

        {/* Hero */}
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
            Cloud‑Native · Serverless · CRM
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-200 sm:text-4xl">
            Cloud-Native Serverless CRM System
          </h1>
          <p className="max-w-3xl text-sm sm:text-base">
            A cloud-native CRM built on AWS to manage customer relationships,
            track interactions and automate daily workflows. The system combines
            secure authentication, serverless business logic and scalable NoSQL
            storage to deliver a reliable, low‑maintenance solution for growing
            teams.
          </p>
        </header>

        {/* Admin Dashboard */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <LayoutDashboard className="h-4 w-4" />
            <h2>Admin Dashboard</h2>
          </div>
          <p className="max-w-3xl text-sm">
            The admin dashboard is the central place for managing clients,
            employees and tasks. From a single view, administrators can filter,
            search and review active jobs, upcoming meetings and key customer
            details, giving them a clear picture of the team&apos;s workload and
            priorities.
          </p>
          <div className="card">
            <div className="mb-2 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-slate-300">
              Admin Dashboard View
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/80">
              <Image
                src="/projects/crm_admin_desh.png"
                alt="Admin dashboard of the AWS Serverless CRM system"
                width={1280}
                height={720}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Task Management */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <ClipboardList className="h-4 w-4" />
            <h2>Task & Job Management</h2>
          </div>
          <p className="max-w-3xl text-sm">
            New jobs and tasks are created directly in the CRM, linked to
            specific clients and employees. For each job, the system captures
            the scope, budget and timeline, making it easy to track progress and
            keep financial expectations aligned between the business and the
            client.
          </p>
          <div className="card">
            <div className="mb-2 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-slate-300">
              Adding a New Task / Job
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/80">
              <Image
                src="/projects/crm_add_task.png"
                alt="Task creation screen for assigning jobs and setting budgets in the CRM"
                width={1280}
                height={720}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Automation */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <MailCheck className="h-4 w-4" />
            <h2>Automation with EventBridge & SES</h2>
          </div>
          <p className="max-w-3xl text-sm">
            Automated email reminders are sent to clients ahead of upcoming
            meetings. A scheduled rule in EventBridge triggers a Lambda
            function, which looks up meetings for the next day in DynamoDB and
            sends personalized reminder emails through Amazon SES. This keeps
            clients informed without requiring manual follow‑up from the team.
          </p>
          <div className="card">
            <div className="mb-2 text-[0.7rem] font-mono uppercase tracking-[0.18em] text-slate-300">
              Automated Reminder Email
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/80">
              <Image
                src="/projects/crm_send_rem.png"
                alt="Example of an automated meeting reminder email sent by the CRM"
                width={1280}
                height={720}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* DynamoDB schema */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Database className="h-4 w-4" />
            <h2>DynamoDB Schema Overview</h2>
          </div>
          <p className="max-w-3xl text-sm">
            The data model is optimized for the main access patterns of the
            CRM: looking up client profiles, tracking jobs for each client and
            listing upcoming meetings.
          </p>
          <div className="card space-y-3 text-xs sm:text-sm">
            <div className="grid gap-3 md:grid-cols-3">
              <div>
                <p className="mb-1 font-semibold text-slate-200">Clients</p>
                <ul className="space-y-1">
                  <li>· PK: clientId</li>
                  <li>· SK: &quot;CLIENT&quot;</li>
                  <li>· name, company, phone, email</li>
                  <li>· status (active / passive)</li>
                </ul>
              </div>
              <div>
                <p className="mb-1 font-semibold text-slate-200">Jobs</p>
                <ul className="space-y-1">
                  <li>· PK: clientId</li>
                  <li>· SK: &quot;JOB#job_id&quot;</li>
                  <li>· title, description</li>
                  <li>· budget, startDate, dueDate</li>
                  <li>· assignedEmployeeId</li>
                </ul>
              </div>
              <div>
                <p className="mb-1 font-semibold text-slate-200">Meetings</p>
                <ul className="space-y-1">
                  <li>· PK: clientId</li>
                  <li>· SK: &quot;MEETING#meeting_id&quot;</li>
                  <li>· scheduledAt (ISO datetime)</li>
                  <li>· location / channel (Zoom, phone, onsite)</li>
                  <li>· relatedJobId</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Back link bottom */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-100 shadow shadow-black/40 transition hover:border-slate-300 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

