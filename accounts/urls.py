from django.conf.urls import url
from .views import *
urlpatterns = [
    url(r'^$', login_site, name='login'),
    url(r'^accounts/logout/$', auth_logout, name='auth-logout'),
    url(r'^accounts/register/$', registration, name='site-register'),
    url(r'^mysite/$', mysite, name='mysite'),
    url(r'^mysite/sanity/$', sanity, name='sanity'),
    url(r'^mysite/build/$', build, name='build'),
    url(r'^mysite/runtest/$', runtest, name='runtest'),
    url(r'^mysite/review/scripts/$', review_scripts, name='review_scripts'),
    url(r'^mysite/review/scripts/details/$', review_scripts_details, name='review_scripts_details'),

]

