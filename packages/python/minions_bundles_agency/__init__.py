"""
Minions Bundle: Agency Python SDK

Full-stack IT agency bundle — prospecting, outreach, CRM pipeline, delivery, billing, and client management for productized service businesses
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Bundle: Agency.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
