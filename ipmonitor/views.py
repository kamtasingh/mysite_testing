# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

def agentsdetail(request):
    template_name='agentsdetail.html'
    return render(request, template_name,{})


def machinedetail(request):
    template_name='machinedetail.html'
    return render(request, template_name,{})


def sanitymaster(request):
    template_name='sanitymaster.html'
    return render(request, template_name,{})


def serverdetail(request):
    template_name='serverdetail.html'
    return render(request, template_name,{})