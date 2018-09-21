from django.conf.urls import url
from .views import *
from django.views.generic import TemplateView
urlpatterns = [
    #url(r'^agentsdetail/$', agentsdetail, name='agentsdetail'),
    url(r'^machinedetail/$', machinedetail, name='machinedetail'),
    url(r'^machinedetail/change/$', TemplateView.as_view(template_name="change_machine.html")),
    url(r'^serverdetail/change/$', TemplateView.as_view(template_name="change_server.html")),
    url(r'^machinedetail/add/$', TemplateView.as_view(template_name="add_machine.html")),
    url(r'^serverdetail/add/$', TemplateView.as_view(template_name="add_server.html")),
    #url(r'^sanitymaster/$', sanitymaster, name='sanitymaster'),
    url(r'^serverdetail/$', serverdetail, name='serverdetails'),
    url(r'^download/machinedetail/$', downloadmachinedetail, name='downloadmachinedetail'),
    url(r'^download/serverdetail/$', downloadserverdetail, name='downloadserverdetails'),

]