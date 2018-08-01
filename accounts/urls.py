from django.conf.urls import url
from .views import *
urlpatterns = [
    url(r'^$', login_site, name='login'),
    url(r'^accounts/logout/$', auth_logout, name='auth-logout'),
    url(r'^accounts/register/$', registration, name='site-register'),
    url(r'^mysite/$', mysite, name='mysite'),
    url(r'^mysite/sanity/$', sanity, name='sanity'),

]

