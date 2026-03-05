/**
 * @module minions-bundles-agency/bundle
 * MinionType definitions and imports for Minions Bundle: Agency.
 */

import type { MinionType } from 'minions-sdk';


// --- Inline Bundle Types ---

export const servicepackageType: MinionType = {
  id: 'bundle-agency-service-package',
  name: 'Service package',
  slug: 'service-package',
  description: 'A productized service offering with scope, pricing, and timeline',
  icon: '📦',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'tier', type: 'select', label: 'tier' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'scope', type: 'string', label: 'scope' },
    { name: 'techStack', type: 'string', label: 'techStack' },
    { name: 'priceMin', type: 'number', label: 'priceMin' },
    { name: 'priceMax', type: 'number', label: 'priceMax' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'timelineDays', type: 'number', label: 'timelineDays' },
    { name: 'deliverables', type: 'string', label: 'deliverables' },
  ],
};

export const audienceType: MinionType = {
  id: 'bundle-agency-audience',
  name: 'Audience',
  slug: 'audience',
  description: 'An ideal customer profile or target market segment',
  icon: '🎯',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'industry', type: 'string', label: 'industry' },
    { name: 'companySize', type: 'string', label: 'companySize' },
    { name: 'location', type: 'string', label: 'location' },
    { name: 'budgetRange', type: 'string', label: 'budgetRange' },
    { name: 'painPoints', type: 'string', label: 'painPoints' },
    { name: 'currentSolution', type: 'string', label: 'currentSolution' },
    { name: 'decisionMaker', type: 'string', label: 'decisionMaker' },
  ],
};

export const leadType: MinionType = {
  id: 'bundle-agency-lead',
  name: 'Lead',
  slug: 'lead',
  description: 'A potential prospect captured from scraping, referral, or inbound',
  icon: '📋',
  schema: [
    { name: 'company', type: 'string', label: 'company' },
    { name: 'website', type: 'string', label: 'website' },
    { name: 'contactName', type: 'string', label: 'contactName' },
    { name: 'contactRole', type: 'string', label: 'contactRole' },
    { name: 'email', type: 'string', label: 'email' },
    { name: 'phone', type: 'string', label: 'phone' },
    { name: 'source', type: 'select', label: 'source' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'audienceId', type: 'string', label: 'audienceId' },
    { name: 'notes', type: 'string', label: 'notes' },
    { name: 'capturedAt', type: 'date', label: 'capturedAt' },
  ],
};

export const siteauditType: MinionType = {
  id: 'bundle-agency-site-audit',
  name: 'Site audit',
  slug: 'site-audit',
  description: 'An evaluation of a prospect\'s current website or digital presence',
  icon: '🔍',
  schema: [
    { name: 'leadId', type: 'string', label: 'leadId' },
    { name: 'url', type: 'string', label: 'url' },
    { name: 'mobileScore', type: 'number', label: 'mobileScore' },
    { name: 'speedScore', type: 'number', label: 'speedScore' },
    { name: 'seoScore', type: 'number', label: 'seoScore' },
    { name: 'designNotes', type: 'string', label: 'designNotes' },
    { name: 'techStack', type: 'string', label: 'techStack' },
    { name: 'issues', type: 'string', label: 'issues' },
    { name: 'opportunities', type: 'string', label: 'opportunities' },
    { name: 'auditedAt', type: 'date', label: 'auditedAt' },
  ],
};

export const sequenceType: MinionType = {
  id: 'bundle-agency-sequence',
  name: 'Sequence',
  slug: 'sequence',
  description: 'A multi-step email drip campaign with cadence and variants',
  icon: '📧',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'audienceId', type: 'string', label: 'audienceId' },
    { name: 'steps', type: 'number', label: 'steps' },
    { name: 'cadenceDays', type: 'string', label: 'cadenceDays' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const emailstepType: MinionType = {
  id: 'bundle-agency-email-step',
  name: 'Email step',
  slug: 'email-step',
  description: 'A single step in an outreach sequence',
  icon: '✉️',
  schema: [
    { name: 'sequenceId', type: 'string', label: 'sequenceId' },
    { name: 'stepNumber', type: 'number', label: 'stepNumber' },
    { name: 'subject', type: 'string', label: 'subject' },
    { name: 'body', type: 'string', label: 'body' },
    { name: 'variant', type: 'string', label: 'variant' },
    { name: 'delayDays', type: 'number', label: 'delayDays' },
  ],
};

export const outreachsendType: MinionType = {
  id: 'bundle-agency-outreach-send',
  name: 'Outreach send',
  slug: 'outreach-send',
  description: 'A record of an email sent to a specific lead',
  icon: '📤',
  schema: [
    { name: 'leadId', type: 'string', label: 'leadId' },
    { name: 'emailStepId', type: 'string', label: 'emailStepId' },
    { name: 'sentAt', type: 'date', label: 'sentAt' },
    { name: 'opened', type: 'boolean', label: 'opened' },
    { name: 'openedAt', type: 'date', label: 'openedAt' },
    { name: 'replied', type: 'boolean', label: 'replied' },
    { name: 'repliedAt', type: 'date', label: 'repliedAt' },
    { name: 'bounced', type: 'boolean', label: 'bounced' },
    { name: 'inboxId', type: 'string', label: 'inboxId' },
  ],
};

export const inboxType: MinionType = {
  id: 'bundle-agency-inbox',
  name: 'Inbox',
  slug: 'inbox',
  description: 'A sending email inbox with warmup and health tracking',
  icon: '📬',
  schema: [
    { name: 'email', type: 'string', label: 'email' },
    { name: 'domain', type: 'string', label: 'domain' },
    { name: 'provider', type: 'string', label: 'provider' },
    { name: 'warmupStatus', type: 'select', label: 'warmupStatus' },
    { name: 'warmupStartedAt', type: 'date', label: 'warmupStartedAt' },
    { name: 'dailySendLimit', type: 'number', label: 'dailySendLimit' },
    { name: 'bounceRate', type: 'number', label: 'bounceRate' },
    { name: 'reputationScore', type: 'number', label: 'reputationScore' },
  ],
};

export const dealType: MinionType = {
  id: 'bundle-agency-deal',
  name: 'Deal',
  slug: 'deal',
  description: 'A commercial opportunity progressing through pipeline stages',
  icon: '💰',
  schema: [
    { name: 'title', type: 'string', label: 'title' },
    { name: 'leadId', type: 'string', label: 'leadId' },
    { name: 'servicePackageId', type: 'string', label: 'servicePackageId' },
    { name: 'stage', type: 'select', label: 'stage' },
    { name: 'value', type: 'number', label: 'value' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'probability', type: 'number', label: 'probability' },
    { name: 'expectedCloseDate', type: 'date', label: 'expectedCloseDate' },
    { name: 'actualCloseDate', type: 'date', label: 'actualCloseDate' },
    { name: 'lostReason', type: 'string', label: 'lostReason' },
    { name: 'assignedTo', type: 'string', label: 'assignedTo' },
  ],
};

export const meetingType: MinionType = {
  id: 'bundle-agency-meeting',
  name: 'Meeting',
  slug: 'meeting',
  description: 'A scheduled call or meeting with a prospect or client',
  icon: '📅',
  schema: [
    { name: 'dealId', type: 'string', label: 'dealId' },
    { name: 'leadId', type: 'string', label: 'leadId' },
    { name: 'type', type: 'select', label: 'type' },
    { name: 'scheduledAt', type: 'date', label: 'scheduledAt' },
    { name: 'duration', type: 'number', label: 'duration' },
    { name: 'location', type: 'string', label: 'location' },
    { name: 'agenda', type: 'string', label: 'agenda' },
    { name: 'notes', type: 'string', label: 'notes' },
    { name: 'outcome', type: 'string', label: 'outcome' },
    { name: 'followUpActions', type: 'string', label: 'followUpActions' },
  ],
};

export const clientType: MinionType = {
  id: 'bundle-agency-client',
  name: 'Client',
  slug: 'client',
  description: 'A won deal converted into an active client relationship',
  icon: '🤝',
  schema: [
    { name: 'company', type: 'string', label: 'company' },
    { name: 'primaryContact', type: 'string', label: 'primaryContact' },
    { name: 'email', type: 'string', label: 'email' },
    { name: 'phone', type: 'string', label: 'phone' },
    { name: 'dealId', type: 'string', label: 'dealId' },
    { name: 'servicePackageId', type: 'string', label: 'servicePackageId' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'onboardedAt', type: 'date', label: 'onboardedAt' },
  ],
};

export const proposalType: MinionType = {
  id: 'bundle-agency-proposal',
  name: 'Proposal',
  slug: 'proposal',
  description: 'A formal proposal document sent to a prospect',
  icon: '📄',
  schema: [
    { name: 'dealId', type: 'string', label: 'dealId' },
    { name: 'templateId', type: 'string', label: 'templateId' },
    { name: 'title', type: 'string', label: 'title' },
    { name: 'scope', type: 'string', label: 'scope' },
    { name: 'price', type: 'number', label: 'price' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'validUntil', type: 'date', label: 'validUntil' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'sentAt', type: 'date', label: 'sentAt' },
    { name: 'signedAt', type: 'date', label: 'signedAt' },
  ],
};

export const contractType: MinionType = {
  id: 'bundle-agency-contract',
  name: 'Contract',
  slug: 'contract',
  description: 'A signed agreement governing a client engagement',
  icon: '📝',
  schema: [
    { name: 'clientId', type: 'string', label: 'clientId' },
    { name: 'proposalId', type: 'string', label: 'proposalId' },
    { name: 'title', type: 'string', label: 'title' },
    { name: 'startDate', type: 'date', label: 'startDate' },
    { name: 'endDate', type: 'date', label: 'endDate' },
    { name: 'value', type: 'number', label: 'value' },
    { name: 'paymentTerms', type: 'string', label: 'paymentTerms' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'signedAt', type: 'date', label: 'signedAt' },
  ],
};

export const projectType: MinionType = {
  id: 'bundle-agency-project',
  name: 'Project',
  slug: 'project',
  description: 'A client project being delivered through defined stages',
  icon: '🚀',
  schema: [
    { name: 'clientId', type: 'string', label: 'clientId' },
    { name: 'contractId', type: 'string', label: 'contractId' },
    { name: 'servicePackageId', type: 'string', label: 'servicePackageId' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'stage', type: 'select', label: 'stage' },
    { name: 'startDate', type: 'date', label: 'startDate' },
    { name: 'deadline', type: 'date', label: 'deadline' },
    { name: 'budget', type: 'number', label: 'budget' },
    { name: 'completedAt', type: 'date', label: 'completedAt' },
  ],
};

export const invoiceType: MinionType = {
  id: 'bundle-agency-invoice',
  name: 'Invoice',
  slug: 'invoice',
  description: 'A billing document tracking payment for services',
  icon: '💳',
  schema: [
    { name: 'clientId', type: 'string', label: 'clientId' },
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'contractId', type: 'string', label: 'contractId' },
    { name: 'invoiceNumber', type: 'string', label: 'invoiceNumber' },
    { name: 'amount', type: 'number', label: 'amount' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'issuedAt', type: 'date', label: 'issuedAt' },
    { name: 'dueDate', type: 'date', label: 'dueDate' },
    { name: 'paidAt', type: 'date', label: 'paidAt' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'paymentMethod', type: 'string', label: 'paymentMethod' },
  ],
};

export const retainerType: MinionType = {
  id: 'bundle-agency-retainer',
  name: 'Retainer',
  slug: 'retainer',
  description: 'A recurring service agreement with periodic billing',
  icon: '🔄',
  schema: [
    { name: 'clientId', type: 'string', label: 'clientId' },
    { name: 'servicePackageId', type: 'string', label: 'servicePackageId' },
    { name: 'monthlyFee', type: 'number', label: 'monthlyFee' },
    { name: 'currency', type: 'string', label: 'currency' },
    { name: 'startDate', type: 'date', label: 'startDate' },
    { name: 'renewalDate', type: 'date', label: 'renewalDate' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'scope', type: 'string', label: 'scope' },
  ],
};

export const testimonialType: MinionType = {
  id: 'bundle-agency-testimonial',
  name: 'Testimonial',
  slug: 'testimonial',
  description: 'A client testimonial or case study for social proof',
  icon: '⭐',
  schema: [
    { name: 'clientId', type: 'string', label: 'clientId' },
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'contactName', type: 'string', label: 'contactName' },
    { name: 'quote', type: 'string', label: 'quote' },
    { name: 'rating', type: 'number', label: 'rating' },
    { name: 'publishedAt', type: 'date', label: 'publishedAt' },
    { name: 'approved', type: 'boolean', label: 'approved' },
    { name: 'platform', type: 'string', label: 'platform' },
  ],
};

export const templateType: MinionType = {
  id: 'bundle-agency-template',
  name: 'Template',
  slug: 'template',
  description: 'A reusable document template for proposals, contracts, emails, etc.',
  icon: '📋',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'category', type: 'select', label: 'category' },
    { name: 'content', type: 'string', label: 'content' },
    { name: 'variables', type: 'string', label: 'variables' },
    { name: 'version', type: 'string', label: 'version' },
    { name: 'lastUsedAt', type: 'date', label: 'lastUsedAt' },
  ],
};

// --- Bundle Export ---

export const bundleTypes: MinionType[] = [
  servicepackageType,
  audienceType,
  leadType,
  siteauditType,
  sequenceType,
  emailstepType,
  outreachsendType,
  inboxType,
  dealType,
  meetingType,
  clientType,
  proposalType,
  contractType,
  projectType,
  invoiceType,
  retainerType,
  testimonialType,
  templateType,
];

