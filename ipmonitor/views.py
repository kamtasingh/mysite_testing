# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from .models import *

# Create your views here.

def agentsdetail(request):
    template_name='agentsdetail.html'
    agentsdetails=AgentsDetail.objects.all()
    return render(request, template_name,{'agentsdetail':agentsdetails})


def machinedetail(request):
    template_name='machinedetail.html'
    machinedetails = MachineDetail.objects.filter(isactive=True)
    return render(request, template_name,{'machinedetail':machinedetails})


def sanitymaster(request):
    template_name='sanitymaster.html'
    sanitymasters=SanityMaster.objects.filter(IsActive=True)
    return render(request, template_name,{'sanitymaster':sanitymasters})


def serverdetail(request):
    template_name='serverdetail.html'
    serverdetails=ServerDetail.objects.filter(isactive=True)
    return render(request, template_name,{'serverdetail':serverdetails})