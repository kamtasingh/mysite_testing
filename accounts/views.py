from django.contrib.auth import authenticate, logout,login
from django.http import HttpResponse,HttpResponseRedirect
from django.contrib.auth.models import User
from django.shortcuts import render
from django.db.models import Q
from django.contrib.auth.decorators import login_required
from django.conf import settings

def login_site(request):
    if request.method == "POST":
        cus = None
        username = request.POST.get('username')
        password = request.POST.get('password')
        try:
            cus = User.objects.get(username=username)
        except:
            try:
                cus = User.objects.get(email=username)
            except:
                return HttpResponseRedirect("/?msg=Username is not correct.Please fill correct one.")
        user = authenticate(username=cus.username, password=password)
        if user:
            login(request, user)
            return HttpResponseRedirect("/mysite/")
        else:
            return HttpResponseRedirect("/?msg=Password is not correct.Please fill correct one.")
    else:
        template_name = 'login.html'
        return render(request, template_name, {})


def auth_logout(request):
    logout(request)
    return HttpResponseRedirect("/")

def registration(request):
    if request.method == "POST":
        email = request.POST.get("email")
        username = request.POST.get("username")
        password = request.POST.get("password")
        email = email.lower()
        domain=email.split("@")[1]
        if domain not in settings.ALLOWED_DOMAIN_LIST:
            return HttpResponseRedirect("/accounts/register/?msg=This email is not allowed here. Please contact support team for details.")

        cus=User.objects.filter(Q(email=email) | Q(username=username))
        if cus:
            return HttpResponseRedirect("/accounts/register/?msg=This username or email already registered with us. Please use different one.")
        else:
            user=User.objects.create_user(username=username,email=email,password=password)
            user.is_staff=False
            user.is_active=True
            user.save()
            user = authenticate( username = username, password = password)
            if user:
                login(request, user)
                return HttpResponseRedirect("/mysite/")
    else:
        template_name='register.html'
        return render(request, template_name,{})

@login_required
def mysite(request):
    template_name = 'dashboard.html'
    return render(request, template_name, {})

@login_required
def sanity(request):
    template_name = 'sanity.html'
    return render(request, template_name, {})

@login_required
def build(request):
    template_name = 'build.html'
    return render(request, template_name, {})

@login_required
def runtest(request):
    template_name = 'runtest.html'
    return render(request, template_name, {})


