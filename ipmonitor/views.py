# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from .models import *
import csv
from django.http import StreamingHttpResponse

# Create your views here.
class Echo(object):
    """An object that implements just the write method of the file-like
    interface.
    """
    def write(self, value):
        """Write the value by returning it, instead of storing in a buffer."""
        return value

def agentsdetail(request):
    template_name='agentsdetail.html'
    agentsdetails=AgentsDetail.objects.all()
    return render(request, template_name,{'agentsdetail':agentsdetails})


def machinedetail(request):
    template_name='machinedetail.html'
    #machinedetails = MachineDetail.objects.filter(isactive=True)
    return render(request, template_name,{})


def sanitymaster(request):
    template_name='sanitymaster.html'
    sanitymasters=SanityMaster.objects.filter(IsActive=True)
    return render(request, template_name,{'sanitymaster':sanitymasters})


def serverdetail(request):
    template_name='serverdetail.html'
    serverdetails=ServerDetail.objects.all()
    return render(request, template_name,{'serverdetail':serverdetails})



def downloadmachinedetail(request):
    import requests
    url = "http://10.112.87.90/api/Inventory/GetDesktops"
    data = {"email": request.user.email, "is_staff": request.user.is_staff}
    data = requests.get(url, params=data)
    #print data
    #print data.json()
    rows = [['WarrantyStatus','Status','Physicallocation','OwnerTeam','HostName','Description','SerialNo','Make','RAM','validationStatus','HDD','UsedBy','OwnerPerson','IP','ProvidedBy','Leasedto','Model','Processor']]
    data = [[k[i] for i in rows[0]] for k in data.json()]
    #print data
    rows.extend(data)
    pseudo_buffer = Echo()
    writer = csv.writer(pseudo_buffer)
    response = StreamingHttpResponse((writer.writerow(row) for row in rows),
                                     content_type="text/csv")
    response['Content-Disposition'] = 'attachment; filename="machinedetail.csv"'
    return response




def downloadserverdetail(request):
    import requests
    url = "http://10.112.87.90/api/Inventory/GetServers"
    data = {"email": request.user.email, "is_staff": request.user.is_staff}
    data = requests.get(url, params=data)
    #print data
    print data.json()
    print len(data.json())
    rows = [['WarrantyStatus','Core','Physicallocation','OwnerTeam','Description','SerialNo','Make','RAM','Status','SubnetDetails','HDD','UsedBy','OwnerPerson','TypeOfDeployment','IP','validationStatus','Leasedto','Model','Processor']]
    data = [[k[i].encode('ascii','ignore') for i in rows[0]] for k in data.json()]
    #print data
    rows.extend(data)
    pseudo_buffer = Echo()
    writer = csv.writer(pseudo_buffer)
    response = StreamingHttpResponse((writer.writerow(row) for row in rows),
                                     content_type="text/csv")
    response['Content-Disposition'] = 'attachment; filename="serverdetail.csv"'
    return response



def downloadphonedetail(request):
    import requests
    url = "http://10.112.87.90/api/Inventory/GetPhones"
    data = {"email": request.user.email, "is_staff": request.user.is_staff}
    data = requests.get(url, params=data)
    #print data
    print data.json()
    print len(data.json())
    rows = [['WarrantyStatus','Core','Physicallocation','OwnerTeam','Description','SerialNo','Make','RAM','Status','SubnetDetails','HDD','UsedBy','OwnerPerson','TypeOfDeployment','IP','validationStatus','Leasedto','Model','Processor']]
    data = [[k[i].encode('ascii','ignore') for i in rows[0]] for k in data.json()]
    #print data
    rows.extend(data)
    pseudo_buffer = Echo()
    writer = csv.writer(pseudo_buffer)
    response = StreamingHttpResponse((writer.writerow(row) for row in rows),
                                     content_type="text/csv")
    response['Content-Disposition'] = 'attachment; filename="phonedetail.csv"'
    return response
