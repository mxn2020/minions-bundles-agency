/**
 * @module minions-bundles-agency/views
 * Named query filters for Minions Bundle: Agency.
 */

export const bundleViews = {
  pipeline: {
    description: 'Active deals by pipeline stage',
    type: 'deal',
  },
  hotLeads: {
    description: 'Leads ready for outreach or follow-up',
    type: 'lead',
    filter: {
      "status": "qualified"
},
  },
  activeProjects: {
    description: 'Projects currently in delivery',
    type: 'project',
  },
  unpaidInvoices: {
    description: 'Invoices that are overdue or pending',
    type: 'invoice',
  },
  activeSequences: {
    description: 'Running outreach sequences',
    type: 'sequence',
  },
  upcomingMeetings: {
    description: 'Scheduled meetings this week',
    type: 'meeting',
  },
  activeRetainers: {
    description: 'Currently active retainer agreements',
    type: 'retainer',
    filter: {
      "status": "active"
},
  },
};

