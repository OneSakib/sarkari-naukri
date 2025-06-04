from django.urls import path
from .views import *

app_name = 'posts'

urlpatterns = [
    path('top-bar/', TopBarView.as_view(), name='top_bar'),
]
