import { describe, it, expect } from 'vitest';
import { bundleTypes } from '../bundle.js';
import { VERSION } from '../index.js';

describe('Bundle SDK', () => {
    it('should export a version string', () => {
        expect(VERSION).toBeDefined();
        expect(typeof VERSION).toBe('string');
    });

    it('should have bundleTypes array populated', () => {
        expect(bundleTypes).toBeDefined();
        expect(Array.isArray(bundleTypes)).toBe(true);
        expect(bundleTypes.length).toBeGreaterThan(0);
    });

    it('should define the servicepackageType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'service-package');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Service package');
        expect(type?.schema.length).toBe(10);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('tier');
        expect(fieldNames).toContain('description');
        expect(fieldNames).toContain('scope');
        expect(fieldNames).toContain('techStack');
        expect(fieldNames).toContain('priceMin');
        expect(fieldNames).toContain('priceMax');
        expect(fieldNames).toContain('currency');
        expect(fieldNames).toContain('timelineDays');
        expect(fieldNames).toContain('deliverables');
    });

    it('should define the audienceType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'audience');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Audience');
        expect(type?.schema.length).toBe(8);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('industry');
        expect(fieldNames).toContain('companySize');
        expect(fieldNames).toContain('location');
        expect(fieldNames).toContain('budgetRange');
        expect(fieldNames).toContain('painPoints');
        expect(fieldNames).toContain('currentSolution');
        expect(fieldNames).toContain('decisionMaker');
    });

    it('should define the leadType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'lead');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Lead');
        expect(type?.schema.length).toBe(11);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('company');
        expect(fieldNames).toContain('website');
        expect(fieldNames).toContain('contactName');
        expect(fieldNames).toContain('contactRole');
        expect(fieldNames).toContain('email');
        expect(fieldNames).toContain('phone');
        expect(fieldNames).toContain('source');
        expect(fieldNames).toContain('status');
        expect(fieldNames).toContain('audienceId');
        expect(fieldNames).toContain('notes');
        expect(fieldNames).toContain('capturedAt');
    });

    it('should define the siteauditType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'site-audit');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Site audit');
        expect(type?.schema.length).toBe(10);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('leadId');
        expect(fieldNames).toContain('url');
        expect(fieldNames).toContain('mobileScore');
        expect(fieldNames).toContain('speedScore');
        expect(fieldNames).toContain('seoScore');
        expect(fieldNames).toContain('designNotes');
        expect(fieldNames).toContain('techStack');
        expect(fieldNames).toContain('issues');
        expect(fieldNames).toContain('opportunities');
        expect(fieldNames).toContain('auditedAt');
    });

    it('should define the sequenceType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'sequence');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Sequence');
        expect(type?.schema.length).toBe(5);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('audienceId');
        expect(fieldNames).toContain('steps');
        expect(fieldNames).toContain('cadenceDays');
        expect(fieldNames).toContain('status');
    });

    it('should define the emailstepType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'email-step');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Email step');
        expect(type?.schema.length).toBe(6);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('sequenceId');
        expect(fieldNames).toContain('stepNumber');
        expect(fieldNames).toContain('subject');
        expect(fieldNames).toContain('body');
        expect(fieldNames).toContain('variant');
        expect(fieldNames).toContain('delayDays');
    });

    it('should define the outreachsendType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'outreach-send');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Outreach send');
        expect(type?.schema.length).toBe(9);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('leadId');
        expect(fieldNames).toContain('emailStepId');
        expect(fieldNames).toContain('sentAt');
        expect(fieldNames).toContain('opened');
        expect(fieldNames).toContain('openedAt');
        expect(fieldNames).toContain('replied');
        expect(fieldNames).toContain('repliedAt');
        expect(fieldNames).toContain('bounced');
        expect(fieldNames).toContain('inboxId');
    });

    it('should define the inboxType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'inbox');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Inbox');
        expect(type?.schema.length).toBe(8);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('email');
        expect(fieldNames).toContain('domain');
        expect(fieldNames).toContain('provider');
        expect(fieldNames).toContain('warmupStatus');
        expect(fieldNames).toContain('warmupStartedAt');
        expect(fieldNames).toContain('dailySendLimit');
        expect(fieldNames).toContain('bounceRate');
        expect(fieldNames).toContain('reputationScore');
    });

    it('should define the dealType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'deal');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Deal');
        expect(type?.schema.length).toBe(11);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('title');
        expect(fieldNames).toContain('leadId');
        expect(fieldNames).toContain('servicePackageId');
        expect(fieldNames).toContain('stage');
        expect(fieldNames).toContain('value');
        expect(fieldNames).toContain('currency');
        expect(fieldNames).toContain('probability');
        expect(fieldNames).toContain('expectedCloseDate');
        expect(fieldNames).toContain('actualCloseDate');
        expect(fieldNames).toContain('lostReason');
        expect(fieldNames).toContain('assignedTo');
    });

    it('should define the meetingType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'meeting');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Meeting');
        expect(type?.schema.length).toBe(10);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('dealId');
        expect(fieldNames).toContain('leadId');
        expect(fieldNames).toContain('type');
        expect(fieldNames).toContain('scheduledAt');
        expect(fieldNames).toContain('duration');
        expect(fieldNames).toContain('location');
        expect(fieldNames).toContain('agenda');
        expect(fieldNames).toContain('notes');
        expect(fieldNames).toContain('outcome');
        expect(fieldNames).toContain('followUpActions');
    });

    it('should define the clientType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'client');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Client');
        expect(type?.schema.length).toBe(8);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('company');
        expect(fieldNames).toContain('primaryContact');
        expect(fieldNames).toContain('email');
        expect(fieldNames).toContain('phone');
        expect(fieldNames).toContain('dealId');
        expect(fieldNames).toContain('servicePackageId');
        expect(fieldNames).toContain('status');
        expect(fieldNames).toContain('onboardedAt');
    });

    it('should define the proposalType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'proposal');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Proposal');
        expect(type?.schema.length).toBe(10);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('dealId');
        expect(fieldNames).toContain('templateId');
        expect(fieldNames).toContain('title');
        expect(fieldNames).toContain('scope');
        expect(fieldNames).toContain('price');
        expect(fieldNames).toContain('currency');
        expect(fieldNames).toContain('validUntil');
        expect(fieldNames).toContain('status');
        expect(fieldNames).toContain('sentAt');
        expect(fieldNames).toContain('signedAt');
    });

    it('should define the contractType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'contract');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Contract');
        expect(type?.schema.length).toBe(9);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('clientId');
        expect(fieldNames).toContain('proposalId');
        expect(fieldNames).toContain('title');
        expect(fieldNames).toContain('startDate');
        expect(fieldNames).toContain('endDate');
        expect(fieldNames).toContain('value');
        expect(fieldNames).toContain('paymentTerms');
        expect(fieldNames).toContain('status');
        expect(fieldNames).toContain('signedAt');
    });

    it('should define the projectType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'project');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Project');
        expect(type?.schema.length).toBe(9);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('clientId');
        expect(fieldNames).toContain('contractId');
        expect(fieldNames).toContain('servicePackageId');
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('stage');
        expect(fieldNames).toContain('startDate');
        expect(fieldNames).toContain('deadline');
        expect(fieldNames).toContain('budget');
        expect(fieldNames).toContain('completedAt');
    });

    it('should define the invoiceType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'invoice');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Invoice');
        expect(type?.schema.length).toBe(11);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('clientId');
        expect(fieldNames).toContain('projectId');
        expect(fieldNames).toContain('contractId');
        expect(fieldNames).toContain('invoiceNumber');
        expect(fieldNames).toContain('amount');
        expect(fieldNames).toContain('currency');
        expect(fieldNames).toContain('issuedAt');
        expect(fieldNames).toContain('dueDate');
        expect(fieldNames).toContain('paidAt');
        expect(fieldNames).toContain('status');
        expect(fieldNames).toContain('paymentMethod');
    });

    it('should define the retainerType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'retainer');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Retainer');
        expect(type?.schema.length).toBe(8);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('clientId');
        expect(fieldNames).toContain('servicePackageId');
        expect(fieldNames).toContain('monthlyFee');
        expect(fieldNames).toContain('currency');
        expect(fieldNames).toContain('startDate');
        expect(fieldNames).toContain('renewalDate');
        expect(fieldNames).toContain('status');
        expect(fieldNames).toContain('scope');
    });

    it('should define the testimonialType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'testimonial');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Testimonial');
        expect(type?.schema.length).toBe(8);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('clientId');
        expect(fieldNames).toContain('projectId');
        expect(fieldNames).toContain('contactName');
        expect(fieldNames).toContain('quote');
        expect(fieldNames).toContain('rating');
        expect(fieldNames).toContain('publishedAt');
        expect(fieldNames).toContain('approved');
        expect(fieldNames).toContain('platform');
    });

    it('should define the templateType schema correctly', () => {
        const type = bundleTypes.find(t => t.slug === 'template');
        expect(type).toBeDefined();
        expect(type?.name).toBe('Template');
        expect(type?.schema.length).toBe(6);

        const fieldNames = type?.schema.map(f => f.name);
        expect(fieldNames).toContain('name');
        expect(fieldNames).toContain('category');
        expect(fieldNames).toContain('content');
        expect(fieldNames).toContain('variables');
        expect(fieldNames).toContain('version');
        expect(fieldNames).toContain('lastUsedAt');
    });
});
