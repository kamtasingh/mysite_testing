from django.conf.urls import url
from .views import *
urlpatterns = [
    #url(r'^agentsdetail/$', agentsdetail, name='agentsdetail'),
    url(r'^machinedetail/$', machinedetail, name='machinedetail'),
    #url(r'^sanitymaster/$', sanitymaster, name='sanitymaster'),
    url(r'^serverdetail/$', serverdetail, name='serverdetails'),

]