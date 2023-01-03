#!/usr/bin/python3
"""Locked class defination"""


class LockedClass:
    """
    It Only allows instatiation of an attribute called first_name
    """

    __slots__ = ["first_name"]
