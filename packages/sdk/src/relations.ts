/**
 * @module minions-bundles-agency/relations
 * Relation definitions for Minions Bundle: Agency.
 */

export const bundleRelations = [
  { from: 'lead', relation: 'targets', to: 'audience' },
  { from: 'site-audit', relation: 'evaluates', to: 'lead' },
  { from: 'sequence', relation: 'targets', to: 'audience' },
  { from: 'email-step', relation: 'belongs_to', to: 'sequence' },
  { from: 'outreach-send', relation: 'sent_to', to: 'lead' },
  { from: 'outreach-send', relation: 'uses', to: 'email-step' },
  { from: 'outreach-send', relation: 'sent_from', to: 'inbox' },
  { from: 'deal', relation: 'converts', to: 'lead' },
  { from: 'deal', relation: 'offers', to: 'service-package' },
  { from: 'meeting', relation: 'belongs_to', to: 'deal' },
  { from: 'meeting', relation: 'with', to: 'lead' },
  { from: 'proposal', relation: 'belongs_to', to: 'deal' },
  { from: 'proposal', relation: 'uses', to: 'template' },
  { from: 'client', relation: 'won_from', to: 'deal' },
  { from: 'client', relation: 'subscribed_to', to: 'service-package' },
  { from: 'contract', relation: 'governs', to: 'client' },
  { from: 'contract', relation: 'from_proposal', to: 'proposal' },
  { from: 'project', relation: 'for', to: 'client' },
  { from: 'project', relation: 'under', to: 'contract' },
  { from: 'project', relation: 'delivers', to: 'service-package' },
  { from: 'invoice', relation: 'bills', to: 'client' },
  { from: 'invoice', relation: 'for_project', to: 'project' },
  { from: 'retainer', relation: 'with', to: 'client' },
  { from: 'retainer', relation: 'provides', to: 'service-package' },
  { from: 'testimonial', relation: 'from', to: 'client' },
  { from: 'testimonial', relation: 'about', to: 'project' },
];

