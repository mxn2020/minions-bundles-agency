"""
Minions Bundle: Agency SDK — Type Schemas
Custom MinionType schemas for Minions Bundle: Agency.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

class ServicePackage(MinionType):
    """A productized service offering with scope, pricing, and timeline"""
    slug = "service-package"
    icon = "📦"

    fields = [
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="tier", type="str", label="tier"),
        FieldDefinition(name="description", type="str", label="description"),
        FieldDefinition(name="scope", type="str", label="scope"),
        FieldDefinition(name="techStack", type="str", label="techStack"),
        FieldDefinition(name="priceMin", type="float", label="priceMin"),
        FieldDefinition(name="priceMax", type="float", label="priceMax"),
        FieldDefinition(name="currency", type="str", label="currency"),
        FieldDefinition(name="timelineDays", type="float", label="timelineDays"),
        FieldDefinition(name="deliverables", type="str", label="deliverables"),
    ]


class Audience(MinionType):
    """An ideal customer profile or target market segment"""
    slug = "audience"
    icon = "🎯"

    fields = [
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="industry", type="str", label="industry"),
        FieldDefinition(name="companySize", type="str", label="companySize"),
        FieldDefinition(name="location", type="str", label="location"),
        FieldDefinition(name="budgetRange", type="str", label="budgetRange"),
        FieldDefinition(name="painPoints", type="str", label="painPoints"),
        FieldDefinition(name="currentSolution", type="str", label="currentSolution"),
        FieldDefinition(name="decisionMaker", type="str", label="decisionMaker"),
    ]


class Lead(MinionType):
    """A potential prospect captured from scraping, referral, or inbound"""
    slug = "lead"
    icon = "📋"

    fields = [
        FieldDefinition(name="company", type="str", label="company"),
        FieldDefinition(name="website", type="str", label="website"),
        FieldDefinition(name="contactName", type="str", label="contactName"),
        FieldDefinition(name="contactRole", type="str", label="contactRole"),
        FieldDefinition(name="email", type="str", label="email"),
        FieldDefinition(name="phone", type="str", label="phone"),
        FieldDefinition(name="source", type="str", label="source"),
        FieldDefinition(name="status", type="str", label="status"),
        FieldDefinition(name="audienceId", type="str", label="audienceId"),
        FieldDefinition(name="notes", type="str", label="notes"),
        FieldDefinition(name="capturedAt", type="str", label="capturedAt"),
    ]


class SiteAudit(MinionType):
    """An evaluation of a prospect's current website or digital presence"""
    slug = "site-audit"
    icon = "🔍"

    fields = [
        FieldDefinition(name="leadId", type="str", label="leadId"),
        FieldDefinition(name="url", type="str", label="url"),
        FieldDefinition(name="mobileScore", type="float", label="mobileScore"),
        FieldDefinition(name="speedScore", type="float", label="speedScore"),
        FieldDefinition(name="seoScore", type="float", label="seoScore"),
        FieldDefinition(name="designNotes", type="str", label="designNotes"),
        FieldDefinition(name="techStack", type="str", label="techStack"),
        FieldDefinition(name="issues", type="str", label="issues"),
        FieldDefinition(name="opportunities", type="str", label="opportunities"),
        FieldDefinition(name="auditedAt", type="str", label="auditedAt"),
    ]


class Sequence(MinionType):
    """A multi-step email drip campaign with cadence and variants"""
    slug = "sequence"
    icon = "📧"

    fields = [
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="audienceId", type="str", label="audienceId"),
        FieldDefinition(name="steps", type="float", label="steps"),
        FieldDefinition(name="cadenceDays", type="str", label="cadenceDays"),
        FieldDefinition(name="status", type="str", label="status"),
    ]


class EmailStep(MinionType):
    """A single step in an outreach sequence"""
    slug = "email-step"
    icon = "✉️"

    fields = [
        FieldDefinition(name="sequenceId", type="str", label="sequenceId"),
        FieldDefinition(name="stepNumber", type="float", label="stepNumber"),
        FieldDefinition(name="subject", type="str", label="subject"),
        FieldDefinition(name="body", type="str", label="body"),
        FieldDefinition(name="variant", type="str", label="variant"),
        FieldDefinition(name="delayDays", type="float", label="delayDays"),
    ]


class OutreachSend(MinionType):
    """A record of an email sent to a specific lead"""
    slug = "outreach-send"
    icon = "📤"

    fields = [
        FieldDefinition(name="leadId", type="str", label="leadId"),
        FieldDefinition(name="emailStepId", type="str", label="emailStepId"),
        FieldDefinition(name="sentAt", type="str", label="sentAt"),
        FieldDefinition(name="opened", type="bool", label="opened"),
        FieldDefinition(name="openedAt", type="str", label="openedAt"),
        FieldDefinition(name="replied", type="bool", label="replied"),
        FieldDefinition(name="repliedAt", type="str", label="repliedAt"),
        FieldDefinition(name="bounced", type="bool", label="bounced"),
        FieldDefinition(name="inboxId", type="str", label="inboxId"),
    ]


class Inbox(MinionType):
    """A sending email inbox with warmup and health tracking"""
    slug = "inbox"
    icon = "📬"

    fields = [
        FieldDefinition(name="email", type="str", label="email"),
        FieldDefinition(name="domain", type="str", label="domain"),
        FieldDefinition(name="provider", type="str", label="provider"),
        FieldDefinition(name="warmupStatus", type="str", label="warmupStatus"),
        FieldDefinition(name="warmupStartedAt", type="str", label="warmupStartedAt"),
        FieldDefinition(name="dailySendLimit", type="float", label="dailySendLimit"),
        FieldDefinition(name="bounceRate", type="float", label="bounceRate"),
        FieldDefinition(name="reputationScore", type="float", label="reputationScore"),
    ]


class Deal(MinionType):
    """A commercial opportunity progressing through pipeline stages"""
    slug = "deal"
    icon = "💰"

    fields = [
        FieldDefinition(name="title", type="str", label="title"),
        FieldDefinition(name="leadId", type="str", label="leadId"),
        FieldDefinition(name="servicePackageId", type="str", label="servicePackageId"),
        FieldDefinition(name="stage", type="str", label="stage"),
        FieldDefinition(name="value", type="float", label="value"),
        FieldDefinition(name="currency", type="str", label="currency"),
        FieldDefinition(name="probability", type="float", label="probability"),
        FieldDefinition(name="expectedCloseDate", type="str", label="expectedCloseDate"),
        FieldDefinition(name="actualCloseDate", type="str", label="actualCloseDate"),
        FieldDefinition(name="lostReason", type="str", label="lostReason"),
        FieldDefinition(name="assignedTo", type="str", label="assignedTo"),
    ]


class Meeting(MinionType):
    """A scheduled call or meeting with a prospect or client"""
    slug = "meeting"
    icon = "📅"

    fields = [
        FieldDefinition(name="dealId", type="str", label="dealId"),
        FieldDefinition(name="leadId", type="str", label="leadId"),
        FieldDefinition(name="type", type="str", label="type"),
        FieldDefinition(name="scheduledAt", type="str", label="scheduledAt"),
        FieldDefinition(name="duration", type="float", label="duration"),
        FieldDefinition(name="location", type="str", label="location"),
        FieldDefinition(name="agenda", type="str", label="agenda"),
        FieldDefinition(name="notes", type="str", label="notes"),
        FieldDefinition(name="outcome", type="str", label="outcome"),
        FieldDefinition(name="followUpActions", type="str", label="followUpActions"),
    ]


class Client(MinionType):
    """A won deal converted into an active client relationship"""
    slug = "client"
    icon = "🤝"

    fields = [
        FieldDefinition(name="company", type="str", label="company"),
        FieldDefinition(name="primaryContact", type="str", label="primaryContact"),
        FieldDefinition(name="email", type="str", label="email"),
        FieldDefinition(name="phone", type="str", label="phone"),
        FieldDefinition(name="dealId", type="str", label="dealId"),
        FieldDefinition(name="servicePackageId", type="str", label="servicePackageId"),
        FieldDefinition(name="status", type="str", label="status"),
        FieldDefinition(name="onboardedAt", type="str", label="onboardedAt"),
    ]


class Proposal(MinionType):
    """A formal proposal document sent to a prospect"""
    slug = "proposal"
    icon = "📄"

    fields = [
        FieldDefinition(name="dealId", type="str", label="dealId"),
        FieldDefinition(name="templateId", type="str", label="templateId"),
        FieldDefinition(name="title", type="str", label="title"),
        FieldDefinition(name="scope", type="str", label="scope"),
        FieldDefinition(name="price", type="float", label="price"),
        FieldDefinition(name="currency", type="str", label="currency"),
        FieldDefinition(name="validUntil", type="str", label="validUntil"),
        FieldDefinition(name="status", type="str", label="status"),
        FieldDefinition(name="sentAt", type="str", label="sentAt"),
        FieldDefinition(name="signedAt", type="str", label="signedAt"),
    ]


class Contract(MinionType):
    """A signed agreement governing a client engagement"""
    slug = "contract"
    icon = "📝"

    fields = [
        FieldDefinition(name="clientId", type="str", label="clientId"),
        FieldDefinition(name="proposalId", type="str", label="proposalId"),
        FieldDefinition(name="title", type="str", label="title"),
        FieldDefinition(name="startDate", type="str", label="startDate"),
        FieldDefinition(name="endDate", type="str", label="endDate"),
        FieldDefinition(name="value", type="float", label="value"),
        FieldDefinition(name="paymentTerms", type="str", label="paymentTerms"),
        FieldDefinition(name="status", type="str", label="status"),
        FieldDefinition(name="signedAt", type="str", label="signedAt"),
    ]


class Project(MinionType):
    """A client project being delivered through defined stages"""
    slug = "project"
    icon = "🚀"

    fields = [
        FieldDefinition(name="clientId", type="str", label="clientId"),
        FieldDefinition(name="contractId", type="str", label="contractId"),
        FieldDefinition(name="servicePackageId", type="str", label="servicePackageId"),
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="stage", type="str", label="stage"),
        FieldDefinition(name="startDate", type="str", label="startDate"),
        FieldDefinition(name="deadline", type="str", label="deadline"),
        FieldDefinition(name="budget", type="float", label="budget"),
        FieldDefinition(name="completedAt", type="str", label="completedAt"),
    ]


class Invoice(MinionType):
    """A billing document tracking payment for services"""
    slug = "invoice"
    icon = "💳"

    fields = [
        FieldDefinition(name="clientId", type="str", label="clientId"),
        FieldDefinition(name="projectId", type="str", label="projectId"),
        FieldDefinition(name="contractId", type="str", label="contractId"),
        FieldDefinition(name="invoiceNumber", type="str", label="invoiceNumber"),
        FieldDefinition(name="amount", type="float", label="amount"),
        FieldDefinition(name="currency", type="str", label="currency"),
        FieldDefinition(name="issuedAt", type="str", label="issuedAt"),
        FieldDefinition(name="dueDate", type="str", label="dueDate"),
        FieldDefinition(name="paidAt", type="str", label="paidAt"),
        FieldDefinition(name="status", type="str", label="status"),
        FieldDefinition(name="paymentMethod", type="str", label="paymentMethod"),
    ]


class Retainer(MinionType):
    """A recurring service agreement with periodic billing"""
    slug = "retainer"
    icon = "🔄"

    fields = [
        FieldDefinition(name="clientId", type="str", label="clientId"),
        FieldDefinition(name="servicePackageId", type="str", label="servicePackageId"),
        FieldDefinition(name="monthlyFee", type="float", label="monthlyFee"),
        FieldDefinition(name="currency", type="str", label="currency"),
        FieldDefinition(name="startDate", type="str", label="startDate"),
        FieldDefinition(name="renewalDate", type="str", label="renewalDate"),
        FieldDefinition(name="status", type="str", label="status"),
        FieldDefinition(name="scope", type="str", label="scope"),
    ]


class Testimonial(MinionType):
    """A client testimonial or case study for social proof"""
    slug = "testimonial"
    icon = "⭐"

    fields = [
        FieldDefinition(name="clientId", type="str", label="clientId"),
        FieldDefinition(name="projectId", type="str", label="projectId"),
        FieldDefinition(name="contactName", type="str", label="contactName"),
        FieldDefinition(name="quote", type="str", label="quote"),
        FieldDefinition(name="rating", type="float", label="rating"),
        FieldDefinition(name="publishedAt", type="str", label="publishedAt"),
        FieldDefinition(name="approved", type="bool", label="approved"),
        FieldDefinition(name="platform", type="str", label="platform"),
    ]


class Template(MinionType):
    """A reusable document template for proposals, contracts, emails, etc."""
    slug = "template"
    icon = "📋"

    fields = [
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="category", type="str", label="category"),
        FieldDefinition(name="content", type="str", label="content"),
        FieldDefinition(name="variables", type="str", label="variables"),
        FieldDefinition(name="version", type="str", label="version"),
        FieldDefinition(name="lastUsedAt", type="str", label="lastUsedAt"),
    ]


BUNDLE_TYPES = [ServicePackage, Audience, Lead, SiteAudit, Sequence, EmailStep, OutreachSend, Inbox, Deal, Meeting, Client, Proposal, Contract, Project, Invoice, Retainer, Testimonial, Template]
