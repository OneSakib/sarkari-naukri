from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.views import View
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authentication import SessionAuthentication
from posts.models import *
from .serializers import *
from .models import *
from .forms import *


class Dashboard(View):
    def get(self, request):
        return render(request, 'superadmin/dashboard.html')


class ManageTopBar(View):
    def get(self, request):
        instance = TopBar.objects.first()
        context = {
            'page_obj': instance
        }
        return render(request, 'superadmin/manage_topbar.html', context)


class EditTopBar(View):
    def get(self, request):
        instance = TopBar.objects.first()
        form = TopBarForm(instance=instance)
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_topbar.html', context)

    def post(self, request):
        form = TopBarForm(data=request.POST)
        if form.is_valid():
            form.save()
            return redirect(reverse_lazy('superadmin:manage_topbar'))
        context = {
            'form': form
        }
        return render(request, 'superadmin/edit_topbar.html', context)
